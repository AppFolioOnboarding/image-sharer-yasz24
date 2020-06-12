require 'test_helper'

class FeedbacksControllerTest < ActionDispatch::IntegrationTest
  test "should create feedback" do
    assert_difference('Feedback.count') do
      post api_feedbacks_path, params: { feedback: { userName: 'yash', comments: 'good comment' } }
    end

    assert_response :success
  end

  test "should not create feedback" do
    assert_no_difference('Feedback.count') do
      post api_feedbacks_path, params: { feedback: { userName: 'yash' } }
    end

    assert_response :unprocessable_entity
  end
end
