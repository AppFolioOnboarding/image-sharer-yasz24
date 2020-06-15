require 'test_helper'

class FeedbackTest < ActiveSupport::TestCase
  def test_feedback__valid
    feedback = Feedback.new(user_name: 'yash', comments: 'comment')

    assert_predicate feedback, :valid?
    assert feedback.save
  end

  def test_feedback__invalid_if_comments_missing
    feedback = Feedback.new(user_name: 'yash')

    refute_predicate feedback, :valid?
    assert_equal "can't be blank", feedback.errors.messages[:comments].first
    assert_not feedback.save
  end

  def test_feedback__invalid_if_name_missing
    feedback = Feedback.new(comments: 'good comments')

    refute_predicate feedback, :valid?
    assert_equal "can't be blank", feedback.errors.messages[:user_name].first
    assert_not feedback.save
  end
end
