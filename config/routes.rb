Rails.application.routes.draw do

  devise_for :users
  root to: 'application#angular'
  get "/guidestar/:search_term/:page", to: 'guidestar#search'
end
