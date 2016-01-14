class CharitiesController < ApplicationController

  def index
    respond_with Charity.all
  end

  def create
    respond_with Charity.create(charity_params)
  end

  def show
    respond_with Charity.find(params[:id])
  end

  private
  def charity_params
    params.require(:charity).permit(:name, :address, :city, :st, :zip, :notes, :website)
  end

end
