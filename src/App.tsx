import React from "react";
import "./App.css";
import { AppProviders } from "./components/providers/app-providers";
import { Users } from "./components/users/users";

function App() {
  return (
    <AppProviders>
      <div className="App">
        <Users />
      </div>
    </AppProviders>
  );
}

export default App;
