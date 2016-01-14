class ChangeDonationDateFieldToString < ActiveRecord::Migration
  def change
    change_column :donations, :date, :string
  end
end
