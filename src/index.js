import React from 'react'
import { render } from 'react-dom'
import App from './App'
import App1 from './App1'
import './index.css';
import Form from"./Form"
import { BrowserRouter } from 'react-router-dom'
render(
    <BrowserRouter>
    <App1/>
    </BrowserRouter>,
    document.getElementById('root')
)