class TrackSerializer < ActiveModel::Serializer
  attributes :id, :name, :artists, :image, :duration, :popularity, :preview, :spotify_id

  has_many :reviews
  has_many :users, through: :reviews
end
