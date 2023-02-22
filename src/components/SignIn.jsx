import React, { useState } from "react";
import { auth } from "./../firebase.jsx";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

function SignIn(){  

  const [ signUpSuccess, setSignUpSuccess] = useState(null);
  const [ signInSuccess, setSignInSuccess] = useState(null);
  const [signOutSuccess, setSignOutSuccess] = useState(null);

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setSignUpSuccess(<strong>You have successfully signed up, {userCredential.user.email}</strong>)
    })
    .catch((error) => {
      setSignUpSuccess(<em>There was an error signing you up: {error.message}</em>)
    });
  }

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signInEmail.value;
    const password = event.target.signInPassword.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      setSignInSuccess(<strong>You've successfully signed in as {userCredential.user.email}</strong>)
    })
    .catch((error) => {
      setSignInSuccess(<em>There was an error signing in: {error.message}</em>)
    });
  }

  function doSignOut() {
    signOut(auth)
      .then(function() {
        setSignOutSuccess(<strong>You have successfully signed out!</strong>);
      }).catch(function(error) {
        setSignOutSuccess(<em>There was an error signing out: ${error.message}</em>);
      });
  }

  return (
    <React.Fragment>
      <h2>Sign up</h2>
      {signUpSuccess}
      <form onSubmit={doSignUp} className="mb-4">
        <input
          type='text'
          name='email'
          placeholder='email' />
        <input
          type='password'
          name='password'
          placeholder='Password' />
        <button className="btn btn-primary btn-sm" type='submit'>Sign up</button>
      </form>

      <h2>Sign In</h2>
      {signInSuccess}
      <form onSubmit={doSignIn} className="mb-4">
        <input
          type='text'
          name='signInEmail'
          placeholder='email' />
        <input
          type='password'
          name='signInPassword'
          placeholder='Password' />
        <button className="btn btn-primary btn-sm" type='submit'>Sign In</button>
      </form>

      {signOutSuccess}
      <br />
      <button className="btn btn-warning btn-sm" onClick={doSignOut}>Sign out</button>
    </React.Fragment>
  );
}

export default SignIn