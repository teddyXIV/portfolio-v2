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
      </div>
      <div className="professional">
        <AboutMe />
        <Projects />
        <Experience />
      </div>
    </>
  )
}

export default App
