Rails.application.routes.draw do
  mount ActionCable.server => '/cable'

  resources :conversations, only: [:index, :create]

  post "/conversations", to: "conversations#login"

  get "/speechtasks", to: "speechtasks#index"
  get "/speechtasks", to: "speechtasks#show"
  post "/speechtasks", to: "speechtasks#create"
  delete "/speechtasks/:task_id", to: "speechtasks#destroy"
  patch "/speechtasks/:task_id", to: "speechtasks#update"

  get "/messages", to: "messages#index"
  post "/messages", to: "messages#create"
  delete "/messages/:message_id", to: "messages#destroy"
  
  post "/signup", to: "users#create"
  get "/me", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end




