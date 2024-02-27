import logo from "./images/drinksGallery.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="App-name">Seasonal Sips</p>
        <img src={logo} className="App-logo" alt="logo" />

        <button type="submit" className="startButton">
          Find Libation
        </button>
      </header>
    </div>
  );
}

export default App;
