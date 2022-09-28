import React from 'react'
import './style.css'
import style from './NewProject.module.css'
export default function NewProject(){
    return(
        <section className='fix-position'>
            <div className={style.divP}>
                <h1>Criar Projeto</h1>
                <p>Crie seu projeto para depois adiconar os serviços</p>
                <p>Formulario</p>
            </div>
        </section>
    )
}