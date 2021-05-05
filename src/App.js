import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
      </div>
      <p>
        <a href="https://github.com/jchakravarti/weather-react" target="_blank">Open Source Code</a> by Jayani Chakravarti
      </p>
    </div>
  );
}

export default App;
