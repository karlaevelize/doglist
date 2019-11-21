import React from "react";
import "./App.css";
import DogsList from "./components/DogsList";
import DogsListContainer from "./components/DogsListContainer";

function App() {
  return (
    <div className="App">
      <main>
        <DogsListContainer />
      </main>
    </div>
  );
}

export default App;
