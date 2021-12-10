import React from 'react';
import PlaylistForm from './PlaylistForm'
import PlaylistCard from './PlaylistCard'
import Video from '../../videos/Video.mp4'
import styled from "styled-components";


class Playlist extends React.Component {

  render() {

    return(
      <div>
        <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
        </video>
      <TitleContainer>
      <h1>My Playlists</h1>
      </TitleContainer>
      <PlaylistForm
        userInfo={this.props.userInfo}
        createNewPlaylist={this.props.createNewPlaylist}
      />
      <br />

        {this.props.playlist.map(pl =>
          ( <PlaylistCard
              pl={pl}
              playlist={this.props.playlist}
              tracks={this.props.tracks}
              playlistTracks={this.props.playlistTracks}
            />
            )
        )}<br/>


      </div>

    )
  }
}
export default Playlist;

const TitleContainer = styled.div`
    h2{
        text-align: center;
        font-size: 4rem;
        font-family: 'Permanent Marker', cursive;
        background: -webkit-linear-gradient(#0058fc, #94b9ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: red;
        padding-bottom: 20px;
    }
`