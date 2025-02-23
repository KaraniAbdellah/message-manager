// Import React Route
import {Routes, Route, Link} from "react-router-dom";

// Import Css Filies
import "./css_styles/index.css";
import Contact from "./components/Contact";
import SocialMedia from "./components/SocialMedia";
import Feedback from "./components/Feedback";


function App() {
  return (
    <div className="App flex justify-center items-center relative p-4">
        <Routes>
            <Route path="/" element={
                <>
                    <Contact></Contact>
                    <SocialMedia></SocialMedia>
                </>
            }></Route>
            <Route path="/feedbacks" element={<Feedback></Feedback>}>

            </Route>
        </Routes>
    </div>
  );
}

export default App;
