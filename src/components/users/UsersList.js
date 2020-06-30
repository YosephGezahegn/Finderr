import React, { Component } from "react";
import UserItem from "./UserItem";

class UsersList extends Component {
  render() {
    return (
      <div style={userStyle}>
        {this.props.users.map(user => (
          //<div key={user.id}> {user.login} </div>
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
}
const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gridGap: "1rem"
};

export default UsersList;
