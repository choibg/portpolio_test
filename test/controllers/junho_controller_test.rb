require 'test_helper'

class JunhoControllerTest < ActionController::TestCase
  test "should get message" do
    get :message
    assert_response :success
  end

end
