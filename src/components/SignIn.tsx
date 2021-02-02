import React, { useState } from 'react'

import {
  CognitoUserPool, CognitoUserAttribute,
  AuthenticationDetails, CognitoUser, CognitoUserSession
} from 'amazon-cognito-identity-js';

const Pool_Data = {
  UserPoolId: 'us-east-1_IEyFfUupx', // Your user pool id here
  ClientId: '63fc9g5c3g9vhqdalrv9eqhoa2', // Your client id here
};

const userPool = new CognitoUserPool(Pool_Data)


const SignUp = () => {
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const { username, password } = state;
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();


    var authenticationData = {
      Username: username,
      Password: password,
    };
    console.log("1");
    const authDetails = new AuthenticationDetails(authenticationData);
    console.log("2");
    const userData = {
      Username: username,
      Pool: userPool
    };
    console.log("3");
    const congnitoUser = new CognitoUser(userData)

    congnitoUser.authenticateUser(authDetails, {
      onSuccess(result: CognitoUserSession) {
        console.log(result);
      },
      onFailure(err) {
        console.log(err);

      }
    })
    setState({
      username: "",
      password: ""
    })
  }
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>SignIn Test</h1>
      <div className="row center-align formbody">
        <form className="col s12" onSubmit={handleSubmit}>
          <div className="row">
            <div className="input-field col s4 offset-s4">
              <input
                value={username || ""}
                onChange={handleChange}
                placeholder="Username"
                id="username"
              />
            </div>
          </div>
          <div className="row">
            <div className="input-field col s4 offset-s4">
              <input
                type="password"
                value={password || ""}
                onChange={handleChange}
                placeholder="password"
                id="password"
              />
            </div>
          </div>
          <button
            className="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Submit
          </button>
        </form>

        <div className="row center-align formbody">
          Don't have an account? <a href="/signup">Signup</a>
        </div>
      </div>
    </div>
  )
}

export default SignUp;
