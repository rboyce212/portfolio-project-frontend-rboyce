import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import Add from "./Pages/Add";
import Details from "./Pages/Details";
import NavBar from "./Components/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guests" element={<Index />} />
            <Route path="/guests/add" element={<Add />} />
            <Route path="/guests/:index" element={<Details />} />
            <Route path="/guests/:index/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Visitors: {count}
        </button>
      </div>
    </div>
  );
}

export default App;
