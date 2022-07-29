Rails.application.routes.draw do
  
  resources :locations
  resources :favorites
  resources :ratings
  resources :hotelexperiences
  resources :experiences
  resources :categories
  resources :hotels
  resources :users, only: [:create, :show, :update]

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

post "/login", to: "sessions#create"
delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
