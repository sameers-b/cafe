import { BrowserRouter as Router } from 'react-router-dom'
import Hero from "./components/Hero"
import './App.css'

const App = () => {
   return (
      <>
      <Router>
         <Hero />
      </Router>
      </>
   )
}

export default App
