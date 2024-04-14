import { lazy, Suspense } from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"

const Projects = lazy(() => import("./components/Projects/Projects"))
const Skills = lazy(() => import("./components/Skills/Skills"))
const About = lazy(() => import("./components/About/About"))
const Contact = lazy(() => import("./components/Contact/Contact"))
const Footer = lazy(() => import("./components/Footer/Footer"))

const App = () => {
  return (
    <Suspense fallback={null}>
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </Suspense>
  )
}

export default App