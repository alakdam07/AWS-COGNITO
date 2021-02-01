import React, { useState } from 'react'
import { CognitoUserPool, CognitoUserAttribute } from 'amazon-cognito-identity-js';

const SignIn = () => {
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    comfirmpassword: "",
    error: null
  });

  const poolData = {
    UserPoolId: 'us-east-1_IEyFfUupx', // Your user pool id here
    ClientId: '63fc9g5c3g9vhqdalrv9eqhoa2', // Your client id here
  };

  const userPool = new CognitoUserPool(poolData);

  const { username, email, password, comfirmpassword, error } = state;
  const attriList: CognitoUserAttribute[] = [];
  const EmailAttributes = {
    Name: 'email',
    Value: email
  };
  attriList.push(new CognitoUserAttribute(EmailAttributes))
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    userPool.signUp(username, password, attriList, null, (err, data) => {
      console.log("Error", err);
      const { code, name, message } = err;
      if (message) { alert(message) }//setState({ ...state, error: message }),  }
      else { console.log(data) }
    })
    setState({
      username: "",
      email: "",
      password: "",
      comfirmpassword: ""
    })

    alert('please visit your email')
  }
  return (
    <div className="App">
      <div className="App">
        <h1 style={{ textAlign: 'center' }}>Signup Test</h1>
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
                  type="email"
                  value={email || ""}
                  onChange={handleChange}
                  placeholder="email"
                  id="email"
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
            <div className="row">
              <div className="input-field col s4 offset-s4">
                <input
                  type="password"
                  value={comfirmpassword || ""}
                  onChange={handleChange}
                  placeholder="confirm password"
                  id="comfirmpassword"
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
        </div>
      </div>
    </div>
  )
}

export default SignIn;
