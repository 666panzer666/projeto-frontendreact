import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import React from 'react';
import ErrorPage from '../pages/ErrorPage';
import SignUpPage from '../pages/SignUpPage/SignUpPage';
import LoginPage from '../pages/LoginPage/LoginPage';


function Router() {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route index element={ <HomePage />} />
                <Route path="/signup" element={ <SignUpPage /> } />
                <Route path="/login" element={ <LoginPage /> } />
                <Route path="*" element={ <ErrorPage /> } />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
