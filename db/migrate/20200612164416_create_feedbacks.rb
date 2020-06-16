class CreateFeedbacks < ActiveRecord::Migration[5.2]
  def change
    create_table :feedbacks do |t|
      t.string :userName
      t.text :comments

      t.timestamps
    end
  end
end
