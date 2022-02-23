import React from 'react';
import Content from './pages/content/Content';
import Home from './pages/home/Home';
import "./App.css";

const App = () => {
    return (
        <div className="app"> 
            <Home/>
            <Content />
        </div>
    )
}

export default App