import React, { Component } from "react";
 
class Koti extends Component {
  render() {
    return (
      <div>
        <h2>Moikka</h2>
        <p>Tähän tekstiä. Tähän tekstiä. Tähän tekstiä..
          jotain
        </p>
        <p>Kirjaudu: <a href="./containers/login1.html">Tästä</a>.</p>
        <p> </p>
        <p><form id="signupForm" >
  <input id="signupEmail" type="email" required/>
  <input id="signupPassword" type="password" required/>
  <input id="signupUsername" type="text" />
  <button>Sign up</button>
</form>

<form id="loginForm" >
  <input id="loginEmail" type="email" required/>
  <input id="loginPassword" type="password" required/>
  <button>Log in</button>
</form></p>
      </div>
    );
  }
}

export default Koti;