import Header from './Header'
import './App.css'
import Experience from './Experience'
import Projects from './Projects'
import AboutMe from './AboutMe'

function App() {

  return (
    <>
      <div className="personal">
        <Header />
        <AboutMe />
      </div>
      <div className="professional">
        <Experience />
        <Projects />
      </div>
    </>
  )
}

export default App
