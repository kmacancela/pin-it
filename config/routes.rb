Rails.application.routes.draw do

      resources :messages
      resources :transactions
      resources :user_services
      resources :services
      resources :users
      resources :login
    end
