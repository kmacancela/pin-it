class CreateMessages < ActiveRecord::Migration[6.0]
  def change
    create_table :messages do |t|
      t.integer :sender_id, null: false
      t.integer :receiver_id, null: false
      t.string :title
      t.string :body
      t.string :message_date
      t.timestamps
    end
  end
end
