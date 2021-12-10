import React from 'react';
import AddToPlaylistForm from '../Playlist/AddToPlaylistForm'
import styled from "styled-components";

class Christmas extends React.Component {
  state={
    clicked: false
  }

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }
  render(){
    return(
      <CardList>
      <Card>
          <img src={this.props.track.image} alt="" />
          <h5>{this.props.track.name}</h5>
          <p>{this.props.track.artists}</p>
          <button onClick={this.clickHandler} type="button" className="btn btn-info">Add to My Playlist</button>
        {this.state.clicked ? (<AddToPlaylistForm playlist={this.props.playlist} track={this.props.track} addToPlaylist={this.props.addToPlaylist}/>) : (null)}
        <p>Preview:</p>
        {this.props.track.preview !== null ?
          <audio
            ref="audio_tag"
            src={this.props.track.preview}
            controls
          /> :
            <p>No preview available</p>
        }
  </Card>
  </CardList>
    )
  }
}
export default Christmas;


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
const CardList = styled.div`
    display: inline-flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    div:hover{
      box-shadow: 0 0 22.5px green;
    }
`


