import {Routes, Route} from 'react-router-dom'
import {Toaster} from "react-hot-toast";
import {lazy, Suspense} from "react";
import Header from "./components/Header/Header.jsx";
import Loader from "./components/Loader/Loader.jsx";

const Home = lazy(() => import('./pages/Home/Home'));
const CampersCatalog = lazy(() => import('./pages/CampersCatalog/CampersCatalog'));
const CamperDetails = lazy(() => import('./pages/CamperDetails/CamperDetails'));
const CamperFeatures = lazy(() => import('./components/CamperFeatures/CamperFeatures'));
const CamperReviews = lazy(() => import('./components/CamperReviews/CamperReviews.jsx'));

function App() {
    return (
        <>
            <Header/>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/catalog" element={<CampersCatalog/>}/>
                    <Route path="/catalog/:camperId" element={<CamperDetails/>}>
                        <Route path="features" element={<CamperFeatures/>}/>
                        <Route path="reviews" element={<CamperReviews/>}/>
                    </Route>
                    <Route path="*" element={<h1>Not Found</h1>}/>
                </Routes>
            </Suspense>
            <Toaster position='top-right'/>
        </>
    )
}

export default App
