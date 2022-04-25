/* node-modules */
import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import GlobalStyle from "./globalStyles";

/* components */
import store from "./store/store";
import AppRouter from "./routes/AppRouter";

function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Provider store={store}>
                    <GlobalStyle/>
                    <AppRouter/>
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}

export default App;
