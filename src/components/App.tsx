import Header from './Header'
import './App.css'
import Experience2 from './Experience2'
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
        <Experience2 />
      </div>
    </>
  )
}

export default App
