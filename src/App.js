import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import News from "./Components/News";
import Services from "./Components/Servies";
import SubscribeUs from "./Components/SubscribeUs";
// import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
  <p className="Hospital">Hospital Landing Page</p>
    <div className="App">
      <Home />
      <About />
      <Services />
      <News />
      <SubscribeUs />
      <Contact />
    </div>
    </div>
  );
}

export default App;
