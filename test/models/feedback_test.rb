require 'test_helper'

class FeedbackTest < ActiveSupport::TestCase
  test 'creating feedback with name + comments works' do
    feedback = Feedback.new({userName: 'yash', comments: 'comment'})
    assert feedback.save
  end

  test 'creating feedback without name/comments should not work' do
    no_name_comments = Feedback.new
    assert_not no_name_comments.save

    no_comments = Feedback.new({userName: 'yash'})
    assert_not no_comments.save

    no_name = Feedback.new({comments: 'comment'})
    assert_not no_name.save
  end
end
