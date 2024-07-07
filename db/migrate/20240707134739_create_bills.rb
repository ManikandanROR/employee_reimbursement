class CreateBills < ActiveRecord::Migration[6.0]
  def change
    create_table :bills do |t|
      t.string :type
      t.decimal :amount, precision: 10, scale: 2
      t.references :employee, null: false, foreign_key: true
      t.string :token

      t.timestamps
    end
  end
end