import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import './style.css'
import logo from '../../img/costs_logo.png'
import Home from '../../pages/Home/Home';
import Contato from '../../pages/Contato/Contato';
import Company from '../../pages/Empresa/Company';
import NewProject from '../../pages/NovoProjeto/NewProject';
import Projects from '../../pages/Projetos/Projects';
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
                <Route path='/contato' element={<Contato />} />
                <Route path='/empresa' element={<Company />} />
                <Route path='/novoprojeto' element={<NewProject />} />
                <Route path='/projetos' element={<Projects />} />
            </Routes>
        </Router>

    )
}