import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import CampersCatalog from './pages/CampersCatalog/CampersCatalog'
import CamperDetails from './pages/CamperDetails/CamperDetails'
import Header from './components/Header/Header'

function App() {
  return (
    <>
     <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<CampersCatalog />} />
      <Route path="/catalog/:camperId" element={<CamperDetails />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
    </>
  )
}

export default App
