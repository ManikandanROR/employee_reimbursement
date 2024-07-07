class EmployeesController < ApplicationController
  def add_view_edit_employee
    @readonly = false
    if params[:type].to_i == 1
      @employee_detail = Employee.new
      @disabled = " "
    elsif params[:type].to_i == 2
      @employee_detail = Employee.find_by_token(params[:token])
      @disabled = " "
      
    elsif params[:type].to_i == 3
      @employee_detail = Employee.find_by_token(params[:token])
      @readonly = true
      @disabled = 'disabled'
    end
  end

  def create_and_update_employee
    if params[:type].to_i == 1
      @employee_detail = Employee.create!(employee_params)
      redirect_to manage_employees_path(type: 2, token: @employee_detail.token), notice: (t :create_update_employee, type: 'created')
    elsif params[:type].to_i == 2
      @employee_detail = Employee.find_by_token(params[:token])
      @employee_detail.update!(employee_params)
      redirect_to manage_employees_path, notice: (t :create_update_employee, type: 'updated')
    elsif params[:type].to_i == 4
        @employee_detail = Employee.find_by_token(params[:token])
        @employee_detail.destroy
        redirect_to manage_employees_path, notice: ("Deleted_Successfully")
      end
  end

  def manage_employees
  end

  def get_employee_data
    @search_query = nil
    if params[:search]
      if params[:search][:value]
        @search_query = "first_name LIKE \'%"+params[:search][:value]+"%\'"
      end
    end
    _sorting = 'DESC'
    if params[:data_sorting] != ''
      _sorting = 'ASC'
    end
    @employee_array = []
    @employee_detail = Employee.where.not(token: nil).where(@search_query).order(first_name: _sorting)
    @employee_detail.each do |employee|
      @employee_name = employee.first_name+" "+employee.last_name
      @employee_email = employee.email
      @employee_designation = employee.designation
      @bill_icon = "<a href= '#{manage_bills_path(user_token: employee.token)}' class='dt-action-link-active mr-1' data-toggle='tooltip' data-original-title= 'View'> <i class='fa fa-file dt-more-action-icon-active'></i></a>"
      view_icon = "<a href= '#{add_view_edit_employee_path(type: 3, token: employee.token)}' class='dt-action-link-active mr-1' data-toggle='tooltip' data-original-title= 'View'> <i class='fa fa-eye dt-more-action-icon-active'></i></a>"
      edit_icon = "<a href= #{add_view_edit_employee_path(type: 2, token: employee.token)} class='dt-action-link-active mr-1' data-toggle='tooltip' data-original-title='Edit'> <i class='fa fa-edit dt-more-action-icon-active'></i></a>"
      delete_icon = "<a data-toggle='tooltip' data-original-title='Delete' class='dt-action-link-active' onclick=\"delete_reason('#{employee.token}')\"><i class='fa fa-trash dt-more-action-icon-active'></i></a>"
      actions = "<span class='dt-more-action-span dt-more-action-supplier-span' id='target_div_#{employee.id}'>"+edit_icon+view_icon+delete_icon+"</span><div><a class='dt-action-link-active' href='javascript:void(0);' onclick=\"load_more_action_menu(#{employee.id})\"><i class='fa fa-bars dt-more-action-icon-active'></i></a></div>"
      @employee_array << { employee_name: @employee_name, email: @employee_email, designation: @employee_designation, manage_bill: @bill_icon, action: actions}
    end 
    supplier_hash = {data: @employee_array}
    respond_to do |format|
      format.html { render json: JSON.pretty_generate(supplier_hash), status: 200 }
    end
  end

  def delete_reason_lightbox
    respond_to do |format|
      format.html { render partial: 'delete_reason_lightbox' }
    end
  end

  private

  def employee_params
    params.require(:employee).permit(:first_name, :last_name, :email, :designation)
  end
end