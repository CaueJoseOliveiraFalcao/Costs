import React from 'react';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
import './style.css'
import Home from '../../pages/Home';
import Contato from '../../pages/Contato';
import Company from '../../pages/Company';
import NewProject from '../../pages/NewProject';
export default function Header() {
    return (

        <Router>
            <div className='div-p'>

                <section className='img-p'>
                    <img alt='logo' 
                    src="https://raw.githubusercontent.com/matheusbattisti/curso_react_yt/16_projeto_cost/src/img/costs_logo.png" />
                </section>

                <ul>
                    <li><Link className='link' to='/'>Home</Link></li>
                    <li><Link className='link' to='/empresa'>Empresa</Link></li>
                    <li><Link className='link' to='/contato'>Contato</Link></li>
                    <li><Link className='link' to='/novoprojeto'>NovoProjeto</Link></li>
                </ul>
            </div>

            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='contato' element={<Contato />} />
                <Route path='empresa' element={<Company />} />
                <Route path='novoprojeto' element={<NewProject />} />
            </Routes>
        </Router>

    )
}