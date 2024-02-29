import {createBrowserRouter, createRoutesFromElements, Route} from "react-router-dom";
import Home from "../pages/home";
import React from "react";

export const router =   createBrowserRouter(createRoutesFromElements(<Route path='/'>
    <Route index element={<Home />}/>
</Route>))