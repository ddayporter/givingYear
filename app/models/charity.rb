class Charity < ActiveRecord::Base
  belongs_to :user
  has_many :donations

  # all json representations of charities should include donations
  def as_json(options = {})
    super(options.merge(include: [:user, donations: {include: :user}]))
  end
end
