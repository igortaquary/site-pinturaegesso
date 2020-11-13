import React from "react";
import { Container, Header, GlobalStyle, Nav } from './style.js';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '../assets/logoCriado.png';

export default function Home() {
  return (
    <Container>
      <GlobalStyle />
      <Nav>
        <div>Logo</div>
        <ul>
          <li>
            Quem Somos
          </li>
          <li>
            Nossos Serviços
          </li>
          <li>
            Contato
          </li>
        </ul>
      </Nav>
      <Header>
        <img src={logo} alt="logo" />
        <br />
      </Header>
    </Container>
  )
}

