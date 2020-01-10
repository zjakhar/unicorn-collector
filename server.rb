require "sinatra"
require "sinatra/reloader" if development?
require "sinatra/json"
require "json"
require "pry" if development? || test?

# You should not need to change the code in this file

set :bind, '0.0.0.0'  # bind to all interfaces
set :public_folder, File.join(File.dirname(__FILE__), "public")
set :views, File.dirname(__FILE__) + "/views"

# GET UNICORNS FROM UNICORNS.JSON
def read_unicorns
  JSON.parse(File.read("unicorns.json"))
end

get "/" do
  redirect "/unicorns"
end

get "/unicorns" do
  erb :home
end

get "/unicorns/:id" do
  erb :home
end

# API ENDPOINTS
get "/api/v1/unicorns" do
  # binding.pry
  unicorns = read_unicorns

  content_type :json
  json unicorns
end

get "/api/v1/unicorns/:id" do
  unicorns = read_unicorns

  unicorn = unicorns.find do |unicorn|
    unicorn["id"] == params[:id].to_i
  end

  content_type :json
  json unicorn
end

post "/api/v1/unicorns" do
  # binding.pry
  current_unicorns = read_unicorns

  unicorn = JSON.parse(request.body.read)
  unicorn["id"] = current_unicorns.last["id"] + 1

  current_unicorns << unicorn
  File.write("unicorns.json", JSON.pretty_generate(current_unicorns))

  content_type :json
  status 201
  json unicorn
end

# SINATRA VIEWS ROUTES
get "*" do
  erb :home
end
