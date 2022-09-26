import React from 'react';
import './style.css'
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import Home from '../../pages/Home';
import Contato from '../../pages/Contato';
export default function Header() {
    return (

        <Router>
            <div className='div-p'>
                <section className='img-p'>
                    <img src="C:\Users\secc\Desktop\expenses-chart-component-main\Costs\app\src\img\costs_logo.png/"/>
                </section>
                <ul>
                    <li><Link className='link' to='/'>Home</Link></li>
                    <li><Link className='link' to='/contato'>Contato</Link></li>
                </ul>
            </div>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='contato' element={<Contato />} />
            </Routes>
        </Router>

    )
}