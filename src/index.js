import React from "react";
import ReactDOM from "react-dom/client";
import Five from "./Five.js";
const rootElement = document.getElementById('root');
const rootRef = ReactDOM.createRoot(rootElement);
rootRef.render(
    <div>
        <Five/>
    </div>
);