// Import React Route
import {Routes, Route, Link} from "react-router-dom";

// Import Css Filies
import "./css_styles/index.css";
import Contact from "./components/Contact";
import Home from "./components/Home";
import SocialMedia from "./components/SocialMedia";

function App() {
  return (
    <div className="App flex justify-center items-center relative p-4">
        <Contact></Contact>
        <SocialMedia></SocialMedia>
    </div>
  );
}

export default App;
