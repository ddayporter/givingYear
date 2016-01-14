class CreateDonations < ActiveRecord::Migration
  def change
    create_table :donations do |t|
      t.integer :amount
      t.date :date
      t.string :notes
      t.references :charity, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
