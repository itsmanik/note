import React from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation";
import Main from "./Main";

function App() {
    return <div className="mainContainer">
        <Navigation />
        <Main />
    </div>;
}

export default App;