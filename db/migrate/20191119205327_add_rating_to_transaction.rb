class AddRatingToTransaction < ActiveRecord::Migration[6.0]
  def change
    add_column :transactions, :rating, :integer
  end
end
