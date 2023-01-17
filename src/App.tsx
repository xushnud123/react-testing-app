import React from "react";
import "./App.css";
import { MuiMode } from "./components/mui/mui-mode";
import { AppProviders } from "./components/providers/app-providers";

function App() {
  return (
    <AppProviders>
      <div className='App'>
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
