Rails.application.routes.draw do
  devise_for :users
  resources :films
  get '/films/:id/set_checked/:checked' => 'films#set_checked'

  root to: 'films#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end


