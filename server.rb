require 'sinatra'

set :views, Proc.new { File.join(root, "/views") }
set :public_folder, Proc.new { File.join(root, "/public") }

get '/' do
  erb :index
end

# get '/app.js' do
# 'https://api.github.com/search/users'
# end

