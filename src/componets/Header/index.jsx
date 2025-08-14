import React, { useState } from 'react';
// import {} from '../../styles/globalStyle';
import { Container, Menu, Li } from '../Header/style';
import { Link, useLocation } from 'react-router-dom';

function Header () {
  const [changeBackground, setChangeBackground] = useState(false);
  const { pathname } = useLocation();

  window.onscroll = () => {
    if (!changeBackground && window.pageYOffset > 150) {
      setChangeBackground(true);
    }
    if (changeBackground && window.pageYOffset <= 150) {
      setChangeBackground(false);
    }
  };

  return (
    <Container changeBackground={changeBackground}>
      <img
        src='https://media.licdn.com/dms/image/v2/C4D22AQE5yrAgAhaFNA/feedshare-shrink_800/feedshare-shrink_800/0/1660317454154?e=2147483647&v=beta&t=Ta_ydrRon78OmEmyYT-OQ0fR_91t7itQezjNpJS0pHU'
        alt='logo dev movies'
      />
      <Menu>
        <Li isActive={pathname === '/'}>
          <Link to='/'>Home</Link>
        </Li>
        <Li isActive={pathname.includes('movies')}>
          <Link to='/movies'>Filmes</Link>
        </Li>
        <Li isActive={pathname.includes('series')}>
          <Link to='/series'>Séries</Link>
        </Li>
      </Menu>
    </Container>
  );
}

export default Header;
