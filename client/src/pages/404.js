import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom';
import Home from './Home'

const NotFoundPage = () => {
    return (
        <div>
            <h3>Page Could Not Be Found! :(</h3>
            <p>Try again from the home page!</p>
            <ul>
                <li><NavLink exact to="/">Return to Home Page</NavLink></li>
            </ul>
            <div className="content">
                <Route exact path="/" component={Home}/>
            </div>
        </div>
    );
}

export default NotFoundPage;