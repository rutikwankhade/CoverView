import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Editor from './Editor';
import Home from './Home'
import Faq from './Faq';

const App = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/editor" element={<Editor />} />
                <Route exact path="/faq" element={<Faq />} />
            </Routes>
        </BrowserRouter>
    );

}

export default App;