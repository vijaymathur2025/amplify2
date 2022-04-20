import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {
  withAuthenticator,
  Authenticator,
  Button,
} from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hello, {user.username} We now have Auth!</h1>
            <Button onClick={signOut}>SignOut</Button>
          </header>
          {/* <AmplifySignOut /> */}
        </div>
      )}
    </Authenticator>
  );
}

export default withAuthenticator(App);
