class CreateUserServices < ActiveRecord::Migration[6.0]
  def change
    create_table :user_services do |t|
      t.integer :user_id, null: false
      t.integer :service_id, null: false
      t.string :description
      t.integer :price, null: false
      t.timestamps
    end
  end
end
