import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="bg">
      <div className="App">
        <Navbar />
        <Body />
        <Footer />
      </div>
    </div>
  );
}

export default App;