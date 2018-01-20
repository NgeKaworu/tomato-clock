import React from "react";
import RootRouter from "./Router";
import ClockCore from "./TomatoClock/ClockCore";

const App = () => (
    <div>
        <RootRouter></RootRouter>
        <ClockCore></ClockCore>
    </div>
)

export default App