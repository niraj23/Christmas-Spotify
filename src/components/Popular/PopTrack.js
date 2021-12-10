import React from 'react';
import Popular from './Popular'
import Video from '../../videos/Video.mp4'
import styled from "styled-components";

class PopTrack extends React.Component {


  render() {

    return(
      <div className="container">
        <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
        </video>
        <TitleContainer>
      <h1>Top Hits</h1>
      </TitleContainer>
        {this.props.topHits.map(track => (
          <Popular
            key={track.name}
            track={track}
            addToPlaylist={this.props.addToPlaylist}
            playlist={this.props.playlist}
          />
        ))}
      </div>
    )
  }
}
export default PopTrack;

const TitleContainer = styled.div`
    h1{
        text-align: center;
        font-size: 4rem;
        font-family: 'Poiret One', cursive;
        background: -webkit-linear-gradient(#0058fc, #94b9ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: green;
        padding-bottom: 20px;
        text-shadow: 2px 2px 4px  #fff;
    }
`
