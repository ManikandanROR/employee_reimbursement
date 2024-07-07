class BillsController < ApplicationController
  def add_view_edit_bill
    @employee_id = Employee.find_by_token(params[:user_token])
    @readonly = false
    if params[:type].to_i == 1
      @bill_detail = Bill.new
      @disabled = " "
    elsif params[:type].to_i == 2
      @bill_detail = Bill.find_by_token(params[:token])
      @disabled = " "
    elsif params[:type].to_i == 3
      @bill_detail = Bill.find_by_token(params[:token])
      @readonly = true
      @disabled = 'disabled'
    end
  end

  def create_and_update_bill
    @employee = Employee.find_by_token(params[:user_token])

    if params[:type].to_i == 1
      @bill_detail = Bill.new(bill_params)
      @bill_detail.employee = @employee
      @bill_detail.save!
      redirect_to manage_bills_path(type: 2, token: @bill_detail.token), notice: (t :create_update_bill, type: 'created')
    elsif params[:type].to_i == 2
      @bill_detail = Bill.find_by_token(params[:token])
      @bill_detail.update!(bill_params)
      redirect_to manage_bills_path, notice: (t :create_update_bill, type: 'updated')
    elsif params[:type].to_i == 4
      @bill_detail = Bill.find_by_token(params[:token])
      @bill_detail.destroy
      redirect_to manage_bills_path, notice: ("Deleted_Successfully")
    end
  end


  def manage_bills
    @employee = Employee.find_by_token(params[:user_token])
  end

  def get_bill_data
    @search_query = nil
    if params[:search]
      if params[:search][:value]
        @search_query = "bill_type LIKE \'%"+params[:search][:value]+"%\'"
      end
    end
    _sorting = 'DESC'
    if params[:data_sorting] != ''
      _sorting = 'ASC'
    end
    @bill_array = []
    @bill_detail = Bill.where.not(token: nil).where(@search_query).order(bill_type: _sorting)
    @employee = Employee.find_by_token(params[:user_token])
    @bill_detail.each do |bill|
      @bill_type = bill.bill_type
      @bill_amount = bill.amount
      @employee_id = bill.employee_id
      @employee_name = @employee.first_name+" "+@employee.last_name
      view_icon = "<a href= '#{add_view_edit_bill_path(type: 3, user_token: @employee.token,token: bill.token)}' class='dt-action-link-active mr-1' data-toggle='tooltip' data-original-title= 'View'> <i class='fa fa-eye dt-more-action-icon-active'></i></a>"
      edit_icon = "<a href= #{add_view_edit_bill_path(type: 2, user_token: @employee.token, token: bill.token)} class='dt-action-link-active mr-1' data-toggle='tooltip' data-original-title='Edit'> <i class='fa fa-edit dt-more-action-icon-active'></i></a>"
      delete_icon = "<a data-toggle='tooltip' data-original-title='Delete' class='dt-action-link-active' onclick=\"delete_reason('#{bill.token}','#{@employee.token}')\"><i class='fa fa-trash dt-more-action-icon-active'></i></a>"
      actions = "<span class='dt-more-action-span dt-more-action-supplier-span' id='target_div_#{bill.id}'>"+edit_icon+view_icon+delete_icon+"</span><div><a class='dt-action-link-active' href='javascript:void(0);' onclick=\"load_more_action_menu(#{bill.id})\"><i class='fa fa-bars dt-more-action-icon-active'></i></a></div>"
      @bill_array << { bill_type: @bill_type, bill_amount: @bill_amount, employee_id: @employee_id, employee_name: @employee_name, action: actions}
    end 
    supplier_hash = {data: @bill_array}
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

  def bill_params
    params.require(:bill).permit(:bill_type, :amount, :employee_id)
  end
end
