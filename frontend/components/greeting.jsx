import React from 'react';

const Greeting = (props) => {
  if (props.currentUser) {
    return (
      <div>
        <p>Welcome {props.currentUser.username}</p>
        <button onClick={props.logout}>Log Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <button onClick={props.signup}>Sign Up</button>
        <button onClick={props.login}>Log In</button>
      </div>
    );
  }
};

export default Greeting;
