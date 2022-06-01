import React, { useState } from 'react';
import  NewComponent, { NewComponent2 } from './pages/Main';
import Host from './pages/Host';
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<NewComponent />} />
                <Route path="/test" element={<NewComponent2/>}/>
                <Route path="/host" element={<Host />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
