import {Routes, Route, Link} from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Link to="/button">
          <button>Click To Button</button>
        </Link>
        <Routes>
          <Route path="/button" element={<h1>Hello Button</h1>}></Route>
        </Routes>
    </div>
  );
}

export default App;
