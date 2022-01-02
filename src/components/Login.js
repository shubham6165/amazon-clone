import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../firebase";
import "./Login.css";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword (auth, email, password).then(auth => {
        history.push("/")
    }).catch(error => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((auth) => {
        console.log(auth); // successfully created a user
        if(auth){
            history.push('/');
        }
      })
      .catch((error) => alert(error.message));
    //some firebasee register
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="http://pngimg.com/uploads/amazon/small/amazon_PNG1.png"
        />
      </Link>

      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="login_signInButton" type="submit" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button className="login_registerButton" onClick={register}>
          Create Your Amazonn account
        </button>
      </div>
    </div>
  );
}

export default Login;
