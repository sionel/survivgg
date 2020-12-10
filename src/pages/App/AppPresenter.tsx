import React from 'react'
import Header from '../Header'
import Main from '../Main'
import '../../css/App.css';


export default function AppPresenter() {
    return (
        <div className="App"> 
            <Header />
            <Main />
        </div>
    )
}

