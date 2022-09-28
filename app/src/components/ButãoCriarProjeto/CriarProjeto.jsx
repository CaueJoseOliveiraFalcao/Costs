import React from 'react'
import { Link } from 'react-router-dom'
import style  from './CriarProjeto.module.css'
export default function CriarProjeto(){
    return(
        <Link to="/novoprojeto" className={style.projectButton}>Criar Projeto</Link>
    )
}