import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import CampersCatalog from './pages/CampersCatalog/CampersCatalog'
import CamperDetails from './pages/CamperDetails/CamperDetails'
import Header from './components/Header/Header'
import CamperFeatures from "./components/CamperFeatures/CamperFeatures";
import CamperReviews from "./components/CamperReviews/CamperReviews.jsx";
import {Toaster} from "react-hot-toast";

function App() {
    return (
        <>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/catalog" element={<CampersCatalog/>}/>
                <Route path="/catalog/:camperId" element={<CamperDetails/>}>
                    <Route path="features" element={<CamperFeatures/>}/>
                    <Route path="reviews" element={<CamperReviews/>}/>
                </Route>
                <Route path="*" element={<h1>Not Found</h1>}/>
            </Routes>
            <Toaster position='top-right'/>
        </>
    )
}

export default App
