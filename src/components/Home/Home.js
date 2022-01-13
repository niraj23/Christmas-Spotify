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
        <>
        <br />
<br />
<br />
<br />
<br />
<br />
<br />
<br />

        <div class="tags">
    <div class="tag-container">
        <div class="tag">

            <div class="tag-side tag-1-side">
                <div class="tag-1-top"></div>
                <div class="tag-text tag-1-text">
                    Merry<br />Christmas
                    <div class="rule-shape rule-red">⭐</div>
                </div>
            </div>

            <div class="tag-side tag-1-side is-back">
                <div class="tag-1-top"></div>
                <div class="tag-text tag-1-text">
                    And a happy New Year
                    <div class="rule-shape">⭐</div>
                </div>
            </div>

        </div>
    </div>

    <div class="tag-container">
        <div class="tag">

            <div class="tag-side tag-2-side">
                <div class="tag-text tag-2-text">
                    Happy<br />Holidays
                    <div class="rule-diagonal"></div>
                </div>
            </div>

            <div class="tag-side tag-2-side is-back">
                <div class="tag-text tag-2-text">
                    May your every wish come true
                    <div class="rule-diagonal"></div>
                </div>
            </div>

        </div>
    </div>

    <div class="tag-container">
        <div class="tag">

            <div class="tag-side tag-3-side">
                <div class="tag-text tag-3-text">
                    Feliz<br />Navidad
                    <div class="rule-shape">&#10052;</div>
                </div>
            </div>

            <div class="tag-side tag-3-side is-back">
                <div class="tag-text tag-3-text">
                    Prospero Año Nuevo
                    <div class="rule-shape">&#10052;</div>
                </div>
            </div>

        </div>
    </div>

</div>
</>
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
