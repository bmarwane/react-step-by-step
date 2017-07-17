import React from 'react'
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom'
import { Link } from 'react-router-dom'


import DefaultLayout from './Layout'

import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'

export default function MainRouter() {
    return (
        <Router>
            <div>
                <DefaultLayout exact path="/" component={Home} />
                <DefaultLayout path="/about" component={About} />
                <Route path="/login" component={Login} />
            </div>
        </Router>
    )
}