import React from 'react';
import Navbar from './Navbar';
import { Outlet } from "react-router-dom";
import Home from './Home';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;