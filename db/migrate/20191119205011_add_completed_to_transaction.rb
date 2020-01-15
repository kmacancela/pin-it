class AddCompletedToTransaction < ActiveRecord::Migration[6.0]
  def change
    add_column :transactions, :completed, :boolean
  end
end
