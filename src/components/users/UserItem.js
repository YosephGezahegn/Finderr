import React from "react";

const UserItem = props => {
  const { login, avatar_url, html_url } = props.user;

  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>
      <a href={html_url} className="btn btn-dark btn-sm my-1">
        More
      </a>
    </div>
  );
};

export default UserItem;
/* if you want to use a state in a class based component you have use "this.state"
if you want to use style in JSX use double {{style="backgroundColor:'red'}}
destructuring state, use under render() like this-- const {id, login, name}= this.state
--- when creating a functional component props are passed in the function like (const UserItem = (props) => ) and we
dont need "this." anymore also we dont need render() and Component
*/
