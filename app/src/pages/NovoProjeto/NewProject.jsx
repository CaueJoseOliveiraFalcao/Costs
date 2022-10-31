import React from 'react'
import style from '../NovoProjeto/NewProject.module.css'
export default function NewProject(){
    return(
        <section className='fix-position'>
            <div className={style.divP}>
                <h1 className={style.Createh1}>Criar Projeto</h1>
                <p className={style.CreateP}>Crie seu projeto para depois adiconar os serviços</p>
                <p>Formulario</p>
            </div>
        </section>
    )
}