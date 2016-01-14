class DonationsController < ApplicationController
  before_filter :authenticate_user!, only: [:create]

  def create
    charity = Charity.find(params[:charity_id])
    donation = charity.donations.create(donation_params.merge(user_id: current_user.id))
    respond_with charity, donation
  end

  private
  def donation_params
    params.require(:donation).permit(:amount, :date, :notes)
  end
end
