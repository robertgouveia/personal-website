import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {loadRepos} from "../features/repos/reposSlice";
import {router} from "./router";
import {RouterProvider} from "react-router-dom";
import Navbar from "../components/navbar";

function App() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadRepos())
    }, [dispatch]);

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App;
