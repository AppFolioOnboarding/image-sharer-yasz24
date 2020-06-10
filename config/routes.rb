Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'feedbacks#new'

  resources :feedbacks, only: [:new]

  namespace :api do
    resource :feedbacks, only: [:create]
  end
end
