import Navbar from "./Components/Navbar"
import {Footer} from "./Components/Footer";
import Home from "./Pages/Home";

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
