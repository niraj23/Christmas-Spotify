class Api::V1::TracksController < ApplicationController
  def index
    @tracks = Track.all

    render json: @tracks
  end

  def top_100
    # top 50 playlist for 2021 tracks
    # https://open.spotify.com/playlist/37i9dQZEVXbNG2KDcFcKOF
    s_tracks = RSpotify::Playlist.find("spotify","37i9dQZEVXbNG2KDcFcKOF").tracks
    @tracks = s_tracks.map do |s_track|
      Track.new_from_spotify_track(s_track)
    end

    render json: @tracks
  end

  def random
    # https://open.spotify.com/playlist/0QDF5YDFRl3lJESWhoQXH8
    s_tracks = RSpotify::Playlist.find("filtr","0QDF5YDFRl3lJESWhoQXH8").tracks
    @tracks = s_tracks.map do |s_track|
      Track.new_from_spotify_track(s_track)
    end

    render json: @tracks
  end

  def search
    s_tracks = RSpotify::Track.search(params[:q])
    @tracks = s_tracks.map do |s_track|
      Track.new_from_spotify_track(s_track)
    end

    render json: @tracks
  end
end
