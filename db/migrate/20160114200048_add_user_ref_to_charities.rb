class AddUserRefToCharities < ActiveRecord::Migration
  def change
    add_reference :charities, :user, index: true, foreign_key: true
  end
end
