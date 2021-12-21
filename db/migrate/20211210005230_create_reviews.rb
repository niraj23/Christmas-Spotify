class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.string "review"
      t.bigint "user_id"
      t.bigint "track_id"
      t.string "start_timestamp"
      t.datetime "created_at", precision: 6, null: false
      t.datetime "updated_at", precision: 6, null: false
      t.index ["track_id"], name: "index_reviews_on_track_id"
      t.index ["user_id"], name: "index_reviews_on_user_id"
    end
  end
end
