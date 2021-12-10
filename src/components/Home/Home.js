import React from 'react';
import Search from '../Search/Search'
import SearchedSongs from '../Search/SearchedSongs'
import Loading from '../Login/Loading'
import Video from '../../videos/Video.mp4'
import styled from "styled-components";

class Home extends React.Component{

  render(){
    return(
      <div className="home">
        <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
        </video>
      {this.props.login ? (
        <div className="container">
        <TitleContainer>
        <h2>Search For Your Favorite Song:</h2>
        </TitleContainer>
        <Search fetchSearchedSongs={this.props.fetchSearchedSongs} />
        {this.props.searchedSongs.length === 0 && this.props.loading ? (<Loading />) :
        this.props.searchedSongs.map((track, i) => (
          <SearchedSongs
            key={i}
            track={track}
            addToPlaylist={this.props.addToPlaylist}
            playlist={this.props.playlist}
          />
        ))}
      </div>
    ) : (
      ""
    )
  }

      </div>
    )
  }
}
export default Home;

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
