import React from 'react';
// import {} from '../../styles/globalStyle';
import { Container, Menu, Li } from '../Header/style';
import { Link } from 'react-router-dom';

function Header () {
  return (
    <Container>
      <img
        src='https://media.licdn.com/dms/image/v2/C4D22AQE5yrAgAhaFNA/feedshare-shrink_800/feedshare-shrink_800/0/1660317454154?e=2147483647&v=beta&t=Ta_ydrRon78OmEmyYT-OQ0fR_91t7itQezjNpJS0pHU'
        alt='logo dev movies'
      />
      <Menu>
        <Li>
          <Link to='/'>Home</Link>
        </Li>
        <Li>
          <Link to='/movies'>Filmes</Link>
        </Li>
        <Li>
          <Link to='/series'>Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
