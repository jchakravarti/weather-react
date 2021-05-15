import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Paris" />
      </div>
      <footer>
        This project was coded by <a href="https://www.linkedin.com/in/jayani-chakravarti-bb4b04106/" target="_blank" rel="noreferrer">Jayani Chakravarti</a> and is <a href="https://github.com/jchakravarti/weather-react" target="_blank" rel="noreferrer">open-sourced on GitHub</a>
      </footer>
    </div>
  );
}

export default App;
