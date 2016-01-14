class DonationsController < ApplicationController

  def create
    charity = Charity.find(params[:charity_id])
    donation = charity.donations.create(donation_params)
    respond_with charity, donation
  end

  private
  def donation_params
    params.require(:donation).permit(:amount, :date, :notes)
  end
end
