import React from 'react'
import { Route } from 'react-router-dom';


// COMPONENTS
import About from './components/About';
import Contact from './components/Contact'
import Home from './components/Home'
import Landing from './components/Landing'


export default function BaseRoutes() {
    return (
        <div>
            <Route exact path = '/' component = {Landing}/>
            <Route exact path = "/portfolio" component = {Home}/>
            <Route exact path = '/about' component = {About} />
            <Route exact path = "/contact" component = {Contact} />
        </div>
    )
}
