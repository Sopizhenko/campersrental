import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "normalize.css";
import "./index.css";
import App from "./App.jsx";
import {BrowserRouter} from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import {Provider} from "react-redux";
import {store, persistor} from "./redux/store";
import Loader from "./components/Loader/Loader";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Provider store={store}>
            <PersistGate loading={<Loader/>} persistor={persistor}>
                <BrowserRouter>
                    <App/>
                </BrowserRouter>
            </PersistGate>
        </Provider>
    </StrictMode>
);
