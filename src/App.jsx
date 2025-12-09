import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import About from "./sections/About";
import Contact from "./sections/contact";
import Experience from "./sections/experience";
import HomePage from "./sections/HomePage";

function App() {
  return (
    <div>
      <NavBar />
      <HomePage />
      <About />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
