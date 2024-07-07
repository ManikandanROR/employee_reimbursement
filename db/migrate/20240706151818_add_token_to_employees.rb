class AddTokenToEmployees < ActiveRecord::Migration[7.0]
  def change
    add_column :employees, :token, :string
  end
end
