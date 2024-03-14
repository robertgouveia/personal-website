import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Home from "../pages/home";
import React from "react";
import About from "../pages/about";
import Contact from "../pages/contact";

export const router =   createBrowserRouter(createRoutesFromElements(<Route path='/'>
    <Route index element={<Home />}/>
    <Route path='/about' element={<About />}/>
    <Route path='/contact' element={<Contact />}/>
</Route>))