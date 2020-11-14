import React from "react";
import './style.css';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../../assets/logoCriado.png';
import { FaWhatsapp, FaWpforms } from 'react-icons/fa'

export default function Home() {
  return (
    <body>
      <nav>
        <div ><img src={logo} alt="logo" className='navLogo' /></div>
        <ul>
          <li>
            <Link to="servicos" smooth={true} duration={500} offset={-70}>
              Nossos Serviços
            </Link>
          </li>
          <li>
            <Link to="contato" smooth={true} duration={500} offset={-70}>
              Contato
            </Link>
          </li>
          <li>
            <Link to="bio" smooth={true} duration={500} offset={-70}>
              Quem Somos
            </Link>
          </li>
        </ul>
      </nav>
      <header>
        <img src={logo} alt="logo" />
        <br />
        Fale conosco via
        <a href="https://api.whatsapp.com/send?phone=5561994329979" target="blank">
          <div className='wppButton'>
            <FaWhatsapp /> Whatsapp
          </div>
        </a>
        ou faça um
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSchCsfiKJJl3A-krDW3trxSg0_xEUQ-e-nr7WJlK_HAUp4JUQ/viewform?usp=sf_link"
          target="blank">
          <div className="orcamentoButton">
            <FaWpforms /> Orçamento
          </div>
        </a>
      </header>
      <main>
        <div className='segmento' name='bio'>
          <h1>Quem Somos</h1>
          <p>
            A <b>Service</b> é uma empresa especializada em serviços de pintura, manutenção, gesso e acabamento em geral.<br />
            Com mais de 20 anos de experiência e com diversos clientes atendidos em todo <b>Distrito Federal</b>, somos referência na prestação de serviços de alta qualidade.
          </p>
        </div>
        <hr />
        <div className='segmento' name='servicos'>
          <h1>Nossos Serviços</h1>
          <p>
            A <b>Service</b> desempenha todos os serviços, seja eles pequeno ou grande porte como reformas estruturais ou estéticas.
            <ul>
              <li>
                <h3>Pintura</h3>
                <p>
                  Realizamos pintura predial, comercial e residencial.
                  Tratamos fissuras, trincas e infiltrações com tintas e produtos impermeabilizantes.
                </p>
              </li>
            </ul>
          </p>
        </div>
        <hr />
        <div className='segmento' name='contato'>
          <h1>Contato</h1>
        </div>
      </main>
      <footer>

      </footer>
    </body>
  )
}

