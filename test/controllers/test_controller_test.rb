require 'test_helper'

class TestControllerTest < ActionController::TestCase
  test "should get grid1" do
    get :grid1
    assert_response :success
  end

  test "should get gird2" do
    get :gird2
    assert_response :success
  end

  test "should get grid3" do
    get :grid3
    assert_response :success
  end

end
