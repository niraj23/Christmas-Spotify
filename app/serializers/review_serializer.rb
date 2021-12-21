class ReviewSerializer < ActiveModel::Serializer
    attributes :id, :review, :user_id, :track, :start_timestamp, :created_at, :updated_at
  
    belongs_to :track
    belongs_to :user
  
  end