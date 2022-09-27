import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import './style.css'
import logo from 'app\src\img\costs_logo.png'
import Home from '../../pages/Home';
import Contato from '../../pages/Contato';
import Company from '../../pages/Company';
import NewProject from '../../pages/NewProject';
import Projects from '../../pages/Projects';
export default function Header() {
    return (

        <Router>
            <div className='div-p'>

                <section className='img-p'>
                    <img alt='logo' 
                    src={logo} />
                </section>

                <ul>
                    <li><Link className='link' to='/'>Home</Link></li>
                    <li><Link className='link' to='/empresa'>Empresa</Link></li>
                    <li><Link className='link' to='/contato'>Contato</Link></li>
                    <li><Link className='link' to='/novoprojeto'>NovoProjeto</Link></li>
                    <li><Link className='link' to='/projetos'>Projetos</Link></li>
                </ul>
            </div>

            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='contato' element={<Contato />} />
                <Route path='empresa' element={<Company />} />
                <Route path='novoprojeto' element={<NewProject />} />
                <Route path='projeto' element={<Projects />} />
            </Routes>
        </Router>

    )
}