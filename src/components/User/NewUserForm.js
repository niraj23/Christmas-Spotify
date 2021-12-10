import React from 'react';
import Video from '../../videos/Video.mp4'
import styled from "styled-components";

class NewUserForm extends React.Component {
  state={
    name: "",
    username: "",
    password: ""
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return(
      <form className="new-user-form" style={{marginTop: '200px'}} onSubmit={(e) => this.props.newUserSubmitHandler(e, this.state)}>
        <video id="home-video" autoPlay loop muted src={Video} type='video/mp4'>
        </video>
        <TitleContainer>
        <h2>Make a New User:</h2>
        </TitleContainer>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="Name" name="name" value={this.state.name} onChange={this.changeHandler} />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="username" className="form-control" placeholder="Username" name="username" value={this.state.username} onChange={this.changeHandler} />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Password" name="password" value={this.state.password} onChange={this.changeHandler} />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    )
  }
}
export default NewUserForm;

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

