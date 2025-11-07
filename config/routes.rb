Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :departments
      resources :users
      resources :shifts
      resources :schedules
      resources :leafes
    end
  end
end
