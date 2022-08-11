import { useState } from "react";
import "./App.css";
import Login from "./components/Login";
import SecretStuff from "./components/SecretStuff";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <header>
        <h1>My First Login</h1>
      </header>
      {!isLoggedIn ? <Login setIsLoggedIn={setIsLoggedIn} /> : <SecretStuff />}
    </>
  );
}

export default App;
