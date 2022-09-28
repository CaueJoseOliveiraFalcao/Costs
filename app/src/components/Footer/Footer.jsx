import React from 'react'
import './style.css' 
import {FaGithub , FaWhatsapp , FaLinkedin} from 'react-icons/fa'
export default function Footer(){
    return(
        <footer className='div-footer'>
            <ul>
                <li>
                    <FaGithub className='social-list'/>
                </li>
                <li>
                    <FaWhatsapp className='social-list'/>
                </li>
                <li>
                    <FaLinkedin className='social-list'/>
                </li>
            </ul>
            <p><span>Costs</span>&copy; 2022</p>
        </footer>
    )
}