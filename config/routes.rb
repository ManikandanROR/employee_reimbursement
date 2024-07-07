Rails.application.routes.draw do
  root 'employees#manage_employees'

  get '/add_view_edit_employee/(:type)/(:token)',to: 'employees#add_view_edit_employee', as: 'add_view_edit_employee'
  post '/create_and_update_employee/(:type)/(:token)',to:'employees#create_and_update_employee', as: 'create_and_update_employee'
  get '/manage_employees', to: 'employees#manage_employees', as: 'manage_employees'
  get '/get_employee_data', to: 'employees#get_employee_data', as: 'get_employee_data'
  get '/delete_reason_lightbox/:user_token', to: 'employees#delete_reason_lightbox', as: 'delete_reason_lightbox'

  get '/add_view_edit_bill/(:type)/(:user_token)/(:token)',to: 'bills#add_view_edit_bill', as: 'add_view_edit_bill'
  post '/create_and_update_bill/(:type)/(:user_token)/(:token)',to:'bills#create_and_update_bill', as: 'create_and_update_bill'
  get '/manage_bills/:user_token', to: 'bills#manage_bills', as: 'manage_bills'
  get '/get_bill_data/(:user_token)', to: 'bills#get_bill_data', as: 'get_bill_data'
  get '/delete_reason_lightbox/:user_token/:token', to: 'bills#delete_reason_lightbox', as: 'bill_delete_reason_lightbox'
end
