import React from "react";
import DataFetcher from "./DataFetcher"; // import the DataFetcher component
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Data Fetcher Assignment</h1>
        {/* Render the DataFetcher component */}
        <DataFetcher />
      </header>
    </div>
  );
}

export default App;
