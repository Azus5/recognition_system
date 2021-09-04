class ApplicationController < ActionController::Base
  def home
    render inertia: 'Home/Index.vue'
  end
end
