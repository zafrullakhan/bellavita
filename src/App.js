import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          <Route path="/Signup" element= {<Signup/>}/>
          <Route path="/Login" element = {<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
