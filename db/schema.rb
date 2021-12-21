# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_12_10_005230) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "playlist_tracks", force: :cascade do |t|
    t.integer "track_id"
    t.integer "playlist_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "playlists", force: :cascade do |t|
    t.string "name"
    t.integer "user_id"
    t.string "spotify_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.string "review"
    t.bigint "user_id"
    t.bigint "track_id"
    t.string "start_timestamp"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["track_id"], name: "index_reviews_on_track_id"
    t.index ["user_id"], name: "index_reviews_on_user_id"
  end

  create_table "tracks", force: :cascade do |t|
    t.string "name"
    t.string "artists"
    t.string "image"
    t.float "duration"
    t.integer "popularity"
    t.string "preview"
    t.string "spotify_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
