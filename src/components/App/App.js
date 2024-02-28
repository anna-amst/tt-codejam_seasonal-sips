import "./App.css";
import "../../vendor/fonts.css";
// eslint-disable-next-line
import Home from "../Home/Home";
// eslint-disable-next-line
import Main from "../Main/Main";
// eslint-disable-next-line
import Footer from "../Footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Home />
      <Main />
    </div>
  );
}
