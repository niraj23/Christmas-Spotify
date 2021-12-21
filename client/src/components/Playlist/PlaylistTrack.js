import React from 'react'
import styled from "styled-components";


class PlaylistTrack extends React.Component {



  render() {
    return (
      <>
      {this.props.tracks.map(track=>(
        <Card>
        <img src={track.image} alt="" />
        <h5>{track.name}</h5>
        <p>{track.artists}</p>
          <p>Preview:</p>
          {track.preview !== null ?
            <audio
              ref="audio_tag"
              src={track.preview}
              controls
            /> :
              <p>No preview available</p>
          }
          </Card>
      ))}
      </>
    )
  }
}

export default PlaylistTrack;

const Card = styled.div`
    display: block;
    background-color: #303859;
    width: 400px;
    height: 350px;
    padding: 15px;
    margin: 15px;
    box-shadow: 4px 4px 8px 0px rgb(0,0,0,0.2);
    border-radius: 5px;
    a{
        text-decoration: none;
    }
    img{
        width: 50%;
        height: 50%;
        margin-bottom: 15px;
    }
    p{
      color: black;
      font-size: larger;
`
