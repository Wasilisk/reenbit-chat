import {Provider} from "react-redux";
import store from "./store/store";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routes/AppRouter";

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <AppRouter/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
