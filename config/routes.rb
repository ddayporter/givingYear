Rails.application.routes.draw do

  root to: 'application#angular'
  get "/guidestar/:search_term/:page", to: 'guidestar#search'

  devise_for :users

  resources :charities, only: [:create, :index, :show] do
    resources :donations, only: [:show, :create] do
    end
  end

end
