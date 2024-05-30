import React from "react";
import ReactDOM from "react-dom/client";
import MainPage from "./MainPage";


function App() {
    return (
        <MainPage />
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
