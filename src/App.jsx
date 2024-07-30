
import NavBar from './assets/components/NavBar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './assets/components/pages/HomePage'
import MintPage from './assets/components/pages/MintPage'
function App() {


  return (
    <>
    <Router>
    <NavBar />
      <Routes>
<Route exact path='/' element={<HomePage/>}/>
<Route exact path='/mint' element={<MintPage/>}/>
      </Routes>
    </Router>
 
    </>
  )
}

export default App
