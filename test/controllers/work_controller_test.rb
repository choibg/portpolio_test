require 'test_helper'

class WorkControllerTest < ActionController::TestCase
  test "should get UxandUI" do
    get :UxandUI
    assert_response :success
  end

  test "should get Industrial" do
    get :Industrial
    assert_response :success
  end

  test "should get Graphic" do
    get :Graphic
    assert_response :success
  end

end
