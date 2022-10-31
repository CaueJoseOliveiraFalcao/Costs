import React from 'react'
import './style.css'
import savings from '../../img/saving.svg'
import style from '../Home/Home.module.css'
import CriarProjeto from '../../components/ButãoCriarProjeto/CriarProjeto'
export default function Home() {
    return (
        <section className='fix-position'>
            <div className={style.divM}>
                <h1 className={style.welcome}>Bem-Vindo ao <span className={style.welcomeSpan}>Costs</span></h1>
                <p className={style.gerency}>Comece a Gerenciar os seus Projetos agora mesmo!</p>
                <CriarProjeto/>
                <img className={style.imgHome} src={savings} alt="costs" />
            </div>
        </section>
    )
}