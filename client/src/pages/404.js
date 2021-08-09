import React from 'react'
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import Home from './Home'

const NotFoundPage = () => {
    return (
            <div>
                <h3>Page could not be found! :(</h3>
                <p>Try again from the home page!</p>
            </div>  
    );
}

export default NotFoundPage;