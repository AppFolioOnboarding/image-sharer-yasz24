class RenameUserNameOnFeedbacks < ActiveRecord::Migration[5.2]
  def change
    rename_column :feedbacks, :userName, :user_name
  end
end
