class Donation < ActiveRecord::Base
  belongs_to :user
  belongs_to :charity

  def as_json(options = {})
    super(options.merge(include: :user))
  end
end
