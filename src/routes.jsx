import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'

export default function MainRouter () {
    return (
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
            </div>
        </Router>
    )
}
