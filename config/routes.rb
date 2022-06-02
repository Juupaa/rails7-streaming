Rails.application.routes.draw do
  # Defines the root path route ("/")
  root "chat#index"

  get "/chat", to: "chat#index"
  post "/messages", to: "messages#create"
end
