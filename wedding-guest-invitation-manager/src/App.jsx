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
  return (
    <div className="App">
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guests" element={<Index />} />
            <Route path="/guests/add" element={<Add />} />
            <Route path="/guests/:id" element={<Details />} />
            <Route path="/guests/:id/edit" element={<Edit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      </Router>
      <footer></footer>
    </div>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <NavBar />
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/guests" element={<Index />} />
//             <Route path="/guests/add" element={<Add />} />
//             <Route path="/guests/:id" element={<Details />} />
//             <Route path="/guests/:id/edit" element={<Edit />} />
//             <Route path="*" element={<Error />} />
//           </Routes>
//         </main>
//       </Router>
//     </div>
//   );
// }

// export default App;
