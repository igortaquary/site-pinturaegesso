import React from "react";
import './style.css';
//import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/logoCriado.png';
import { FaWhatsapp } from 'react-icons/fa'

export default function Home() {
  return (
    <body>
      <nav>
        <div><img src={logo} alt="logo" /></div>
        <ul>
          <li>
            Nossos Serviços
          </li>
          <li>
            Contato
          </li>
          <li>
            Quem Somos
          </li>
        </ul>
      </nav>
      <header>
        <img src={logo} alt="logo" />
        <br />
        Fale conosco via
        <a href="https://api.whatsapp.com/send?phone=5561994329979" target="blank">
          <div className='wppButton'><FaWhatsapp /> Whatsapp</div>
        </a>
        ou faça um
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSchCsfiKJJl3A-krDW3trxSg0_xEUQ-e-nr7WJlK_HAUp4JUQ/viewform?usp=sf_link"
          target="blank">
          <div className="orcamentoButton">
            Orçamento
          </div>
        </a>
      </header>
      <main>
        <div>

        </div>
      </main>
    </body>
  )
}

