class CreateTransactions < ActiveRecord::Migration[6.0]
  def change
    create_table :transactions do |t|
      t.integer :tailor_id, null: false
      t.integer :customer_id, null: false
      t.string :booking_date, null: false
      t.timestamps
    end
  end
end
