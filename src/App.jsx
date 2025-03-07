import styles from "./App.module.css";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";

import { Navbar } from "./components/Navbar/Navbar";
import Project from "./components/Projects/Project";
import InfoSection from "./components/Information/InfoSection";

function App() {
  return (
    <div className={styles.App}>
      <Navbar></Navbar>
      <Hero></Hero>
      <Project></Project>
      <Contact></Contact>
    </div>
  );
}

export default App;
