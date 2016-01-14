class Charity < ActiveRecord::Base
  has_many :donations

  # all json representations of charities should include donations
  def as_json(options = {})
    super(options.merge(include: :donations))
  end
end
