class AddTailorToUser < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :tailor, :boolean
  end
end
