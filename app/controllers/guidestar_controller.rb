class GuidestarController < ApplicationController
  def search
    guidestar = Guidestar.new(params[:search_term], params[:page])
    render json: {hits: guidestar.guidestar_response["hits"]}
  end
end
