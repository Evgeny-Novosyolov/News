import React, {useEffect, useState} from 'react'
import {  Route, Switch} from 'react-router-dom'
import {HomePage, EventsPage} from '../pages'
import Header from '../header'
import EventListItem from '../favorites-list-item'
import './app.scss'


const App = () =>{
    

    return(
        <main role="main" className="container">
                <Header />
                <Switch>
                    <Route 
                    path='/'
                    component={HomePage}
                    exact
                    />
                    <Route path="/favorites" component={  EventsPage}
                    exact/>
                    <Route path="/events/:id"   component ={EventListItem}
                    />
                    <Route render={()=> <h2>Page not found</h2>}/>
                </Switch>
        </main>

    )
}

export default App

