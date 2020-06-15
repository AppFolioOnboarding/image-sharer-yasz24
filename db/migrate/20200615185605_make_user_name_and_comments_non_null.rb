class MakeUserNameAndCommentsNonNull < ActiveRecord::Migration[5.2]
  def change
    change_column :feedbacks, :user_name, :string, null: false
    change_column :feedbacks, :comments, :text, null: false
  end
end
