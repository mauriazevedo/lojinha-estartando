import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Product from '../pages/Product';

function AppRoutes(props) {
    return(
        <Routes>
            <Route path="/" element={<Home themeToggler={props.themeToggler} theme={props.theme} />} />

            <Route path="/product/:id" element={<Product themeToggler={props.themeToggler} theme={props.theme} />} />
        </Routes>
    );
}

export default AppRoutes;