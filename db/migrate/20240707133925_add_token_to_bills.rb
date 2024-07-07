class AddTokenToBills < ActiveRecord::Migration[7.0]
  def change
    add_column :bills, :token, :string
  end
end
