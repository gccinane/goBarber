import React from 'react';

import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';

import logo from '~/assets/logo-purple.svg';

function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="goBarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Diego Fernandeds</strong>
              <Link to="/profile">Meu perfil</Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Fernandes"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}

export default Header;
