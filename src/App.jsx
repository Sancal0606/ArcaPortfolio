import styles from './App.module.css'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Experience from './components/Experience/Experience'
import Hero from './components/Hero/Hero'
import Information from './components/Information/Information'  // Remove this line
import { Navbar } from './components/Navbar/Navbar'
import Project from './components/Projects/Project'

function App() {
  return <div className={styles.App}>
    <Navbar></Navbar>
    <Hero></Hero>
    <Project></Project>
    <About></About>
    <Experience></Experience>
    <Contact></Contact>
    {/* <Information></Information>  // Remove this line */}

  </div>
}

export default App
