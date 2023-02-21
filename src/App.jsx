import './App.css'
import Header from './components/Header'
import HomeSection from './pages/HomeSection'
import Sobre from './pages/Sobre'
import Skills from './pages/Skills'
import Projetos from './pages/Projetos'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<HomeSection/>}/>
          <Route path='/Sobre' element={<Sobre/>}/>
          <Route path='/Skills' element={<Skills/>} />
          <Route path='/Projetos' element={<Projetos/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
