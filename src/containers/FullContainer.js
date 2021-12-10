import React from 'react';
import Popular from '../components/Popular/Popular'
import Search from '../components/Search/Search'
import Loading from '../components/Login/Loading'

class FullContainer extends React.Component {

  state={
    topHits: [],
    userList: [],
    searched: []
  }



  render() {
    return this.state.topHits.length > 0  ?
    (<div><Search fetchSongs={this.fetchSearchedSongs}/>
    <Popular topHits={this.state.topHits}/></div>)
    :
    (
      <div>
        <Loading />

      </div>
    )
  }
}
export default FullContainer;
