import React from 'react';
import Popular from './Popular'
import Video from '../../videos/Video.mp4'


class PopTrack extends React.Component {


  render() {

    return(
      <div className="container">
        <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
        </video>
      <h1>Top Hits</h1>
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
