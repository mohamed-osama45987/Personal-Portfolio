import "./App.css";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Nav";

export default function App() {
  return (
    <div
      id="App"
      className="bg-bodyBackGroundColor text-textColor flex flex-col items-center gap-10 h-auto p-7 pt-0"
    >
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
