import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/Signup" element= {<Signup/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
