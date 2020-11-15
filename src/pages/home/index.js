import React from "react";
import './style.css';
import { Link } from 'react-scroll';
import logo from '../../assets/logoCriadoRecortado.png';

import { FaPhoneAlt, FaWhatsapp, FaWpforms } from 'react-icons/fa'
import { GoMail } from 'react-icons/go'
import { BiMessageDetail } from 'react-icons/bi'
import { MdRoomService, MdGroup } from 'react-icons/md'

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
        <div className='TituloPrincipal'>
          <h1>Service</h1>
          <h2>Pintura, Gesso &</h2>
          <h2>Elétrica</h2>
        </div>
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
          <h1>Quem Somos &nbsp; <MdGroup /></h1>
          <p>
            A <b>Service</b> é uma empresa especializada em serviços de pintura, manutenção, gesso e acabamento em geral.<br />
            Com mais de 20 anos de experiência e com diversos clientes atendidos em todo <b>Distrito Federal</b>, somos referência na prestação de serviços de alta qualidade.
          </p>
        </div>
        <hr />
        <div className='segmento' name='servicos'>
          <img className='imagem' src='http://brasiliaconstrucaoereforma.com.br/images/home.jpg'></img> <br />
          <h1><MdRoomService /> Nossos Serviços</h1>
          <p>
            A <b>Service</b> desempenha todos os serviços, seja eles pequeno ou grande porte como reformas estruturais ou estéticas. <br />
            Buscamos sempre atender com excelência nossos clientes para a sua satisfação com um serviço de qualidade.
            <ul>
              <li>
                <h3>Pintura</h3>
                <p>
                  Realizamos pintura predial, comercial e residencial. <br />
                  Tratamos fissuras, trincas e infiltrações com tintas e produtos impermeabilizantes. <br />
                  Fazemos restauração e pintura de fachadas. <br /><br />
                  Tipos de pintura: <br />
                  - Grafiato; <br />
                  - Pintura lisa; <br />
                  - Marmorato; <br />
                  - Toque de brilho; <br />
                  - Textura.
                </p>
              </li>
              <img className='imagem' style={{ height: '200px' }}
                src='https://imagensemoldes.com.br/wp-content/uploads/2020/08/Foto-Ferramentas-PNG-1200x675.png'></img>
              <li>
                <h3>Trabalhos em Gesso</h3>
                <p>
                  - Fazemos parede (dry wall); <br />
                  - Sanca; <br />
                  - Forro de gesso acartonado; <br />
                  - Cortineiro <br />
                </p>
              </li>
              <li>
                <h3>Elétrica</h3>
                <p>
                  Realizamos todos os serviços de elétrica predial e residencial, <br />
                  seguindo as recomendações e padrões da ABNT 5410 (Associação Brasileira de Normas Técnicas) e norma reguladora <br />
                — segurança em instalações e serviços de eletricidade, tendo em virtude nossos seguintes serviços: <br /><br />
                - Instalações predial e condomínios; <br />
                - Instalações residencial e comercial; <br />
                - Adequação e instalação de quadros; <br />
                - Circuitos de distribuição; <br />
                - Aterramento.
                </p>
              </li>
            </ul>
          </p>
          <img className='imagem' src='https://st2.depositphotos.com/6235482/10449/i/950/depositphotos_104490682-stock-photo-hands-with-tools.jpg'></img>
        </div>
        <hr />
        <div className='segmento' name='contato'>
          <h1>Contato &nbsp;<BiMessageDetail /></h1>
          <p>
            Atendemos de segunda a sábado <br />
            das 8:00 as 20:00
          </p>
          <p className='contatos'>
            Telefones para contato: <br />
            <a href='https://api.whatsapp.com/send?phone=55619943299791' target='blank'>
              <FaPhoneAlt /><FaWhatsapp color='#34af23' />(61) 99432-9979
            </a>
            <a><FaPhoneAlt />(61) 4101-0575</a> <br />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSchCsfiKJJl3A-krDW3trxSg0_xEUQ-e-nr7WJlK_HAUp4JUQ/viewform?usp=sf_link"
              target="blank">
              <div className='orcamentoButton' style={{ fontSize: '1.1rem' }}><FaWpforms /> Contacte-nos</div>
            </a><br />
            Email para contato: <br />
            <a href='mailto:servicepinturaegesso@gmail.com'>
              <GoMail /> servicepinturaegesso@gmail.com
            </a> <br />
          </p>
        </div>
      </main>
      <footer>
        Feito por Igor Taquary - 2020
      </footer>
    </body>
  )
}

