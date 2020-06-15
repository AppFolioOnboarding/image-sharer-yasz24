require 'test_helper'

class FeedbacksControllerTest < ActionDispatch::IntegrationTest
  def test_create__success
    assert_difference('Feedback.count', 1) do
      post api_feedbacks_path, params: { feedback: { user_name: 'yash', comments: 'good comment' } }
    end

    assert_response :success
    created_feedback = Feedback.last
    assert_equal 'yash', created_feedback.user_name
    assert_equal 'good comment', created_feedback.comments
  end

  def test_create__failure
    assert_no_difference('Feedback.count') do
      post api_feedbacks_path, params: { feedback: { user_name: 'yash' } }
    end

    assert_response :unprocessable_entity
  end
end
