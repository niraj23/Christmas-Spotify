class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username

  has_many :reviews
  has_many :tracks, through: :reviews
end
