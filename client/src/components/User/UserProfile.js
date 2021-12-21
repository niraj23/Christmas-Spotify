import React from 'react';
import Video from '../../videos/Video.mp4'
import styled from "styled-components";


class UserProfile extends React.Component {

  state = {
    name: this.props.userInfo.name,
    username: this.props.userInfo.username,
    clicked: false,
    deleteClick: false
  }

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  clickHandler = () => {
    let click = this.state.clicked
    this.setState({clicked: !click})
  }

  deleteClickHandler = () => {
    let clicked = this.state.deleteClick
    this.setState({deleteClick: !clicked})
  }


  render() {
    return(
      <div>
         <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
        </video>
        <TitleContainer style={{marginTop: '200px'}}>
        <h1>Welcome Back {this.props.userInfo.name}</h1>
        <p>Name: {this.props.userInfo.name}</p>
        <p>Username: {this.props.userInfo.username}</p>
        </TitleContainer>
        <button type="button" className="btn btn-warning" onClick={this.clickHandler}>Edit User</button>
        {this.state.clicked ? (<form onSubmit={(e) => this.props.editSubmitHandler(e, this.state)}>
          <h4>Edit User</h4>
          <input type="text" name="name" value={this.state.name} onChange={this.changeHandler} /><br/>
          <input type="text" name="username" value={this.state.username} onChange={this.changeHandler} /><br/>
          <button type="button" value="Edit" className="btn btn-warning">Edit</button>
        </form>) : (null)}

        <button type="button" className="btn btn-danger" onClick={this.deleteClickHandler}>Delete User</button><br/><br/><hr/>
        {this.state.deleteClick ? (<button type="button" className="btn btn-danger" onClick={this.props.deleteUser}>Click if you are sure you want to delete</button>) : (null)}

      </div>
    )
  }
}
export default UserProfile;

const TitleContainer = styled.div`
    h1{
        text-align: center;
        font-size: 4rem;
        font-family: 'Poiret One', cursive;
        background: -webkit-linear-gradient(#0058fc, #94b9ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: red;
        padding-bottom: 20px;
        text-shadow: 2px 2px 4px  #fff;
    }
    p{
      text-align: center;
        font-size: 1.5rem;
        font-weight: bolder;
        font-family: 'Poiret One', cursive;
        background: -webkit-linear-gradient(#0058fc, #94b9ff);
        -webkit-background-clip: text;
        -webkit-text-fill-color: white;
        padding-bottom: 20px;
        text-shadow: 1px 1px 2px  red;
    }
`