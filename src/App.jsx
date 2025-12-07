import HomePage from "./sections/HomePage";
import Navigation from "./components/NavBar";
import About from "./sections/about";
import Experience from "./sections/experience";
import Contact from "./sections/contact";

function App() {
  return (
    <div>
      <Navigation/>
      <HomePage/>
      <About/>
      <Experience/>
      <Contact/>
    </div>
  );
}

export default App;
