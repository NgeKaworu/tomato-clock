import React from "react";
import RootRouter from "./Router";
import AppCore from "./AppCore";

const App = () => (
    <div className="app">
        <RootRouter></RootRouter>
        <AppCore></AppCore>
    </div>
)

export default App