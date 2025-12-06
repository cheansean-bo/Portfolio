import HomePage from "./sections/homepage";
import Navigation from "./components/navbar";
import About from "./sections/about";
import Experience from "./sections/experience";
import Contact from "./sections/contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
        <HomePage/>
        <About/>
        <Experience/>
        <Contact/>
      </header>
    </div>
  );
}

export default App;
