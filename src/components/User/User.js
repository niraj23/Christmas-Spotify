import React from 'react';
import NewUserForm from './NewUserForm';


class User extends React.Component {
  render() {
    console.log(this.props)
    return(
      <div>
        <h1>Users</h1>
        <NewUserForm
          newUserSubmitHandler={this.props.newUserSubmitHandler}
          />
      </div>
    )
  }
}
export default User;
