import React from 'react';
import Christmas from './Christmas'
import Video from '../../videos/Video.mp4'
import styled from "styled-components";


class ChristmasTrack extends React.Component {

  render() {
    return(
      <div className="container">
        <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
        </video>
        <TitleContainer>
      <h1 id='home-title'>Christmas Songs</h1>
      </TitleContainer>
        {this.props.random.map(track => (
          <Christmas
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
export default ChristmasTrack;

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


