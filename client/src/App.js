// Import React Route
import {Routes, Route, Link} from "react-router-dom";

// Import Css Filies
import "./css_styles/index.css";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
        <Link to="/contact">
            <button className="bg-red-200 p-5 m-5">go to contact</button>
        </Link>

        <Routes>
          <Route path="/contact" element={<Contact></Contact>}>

          </Route>
          <Route path="/" element={
            <>
                <Home />
                <Home></Home>
            </>
          }>
          </Route>
        </Routes>
    </div>
  );
}

export default App;
