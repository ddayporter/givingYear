class CreateCharities < ActiveRecord::Migration
  def change
    create_table :charities do |t|
      t.string :name
      t.string :address
      t.string :city
      t.string :st
      t.integer :zip
      t.string :notes
      t.string :website

      t.timestamps null: false
    end
  end
end
