import HomePage from "./sections/homepage";
import Navigation from "./navbar";
import About from "./sections/about";
import Experience from "./sections/experience"
import Contact from "./sections/contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation/>
        <section id="home">
          <HomePage/>
        </section>
        
        <section id="about">
          <About/>
        </section>

        <section id="experience">
          <Experience/>
        </section>

        <section id="contact">
          <Contact/>
        </section>

      </header>
    </div>
  );
}

export default App;
