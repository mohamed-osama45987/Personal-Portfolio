import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import SplashScreen from "./components/SplashScreen";
import { useState, useEffect } from "react";

export default function App() {
  // raidal mouse effect
  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const mouseMoveHandler = (event) => {
    setMouseCoordinates({
      x: event.pageX,
      y: event.pageY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      window.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  // splash screen
  const [isLoading, setisLoading] = useState(true);

  if (isLoading) {
    return <SplashScreen finishLoading={() => setisLoading(false)} />;
  }

  return (
    <div
      className="min-h-screen min-w-screen"
      style={{
        background: `radial-gradient(600px at ${mouseCoordinates.x}px ${mouseCoordinates.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
      }}
    >
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
