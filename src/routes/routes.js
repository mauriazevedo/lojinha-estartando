import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';

function AppRoutes(props) {
    return(
        <Routes>
            <Route path="/" element={<Home themeToggler={props.themeToggler} theme={props.theme} />} />
        </Routes>
    );
}

export default AppRoutes;