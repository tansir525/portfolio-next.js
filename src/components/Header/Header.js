import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillFacebook } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <a style={{display: 'flex', alignItem: 'center', color: 'goldenRod', marginBottom: "20;"}}>
        <DiCssdeck size='3rem'/> <Span>Hussain K M Tanisr</Span>
      </a>
    </Div1>
    <Div2>
      <li>
        <Link href='#projects'
        >
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#tech'
        >
          <NavLink>Techonologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href='#about'
        >
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href='https://github.com/tansir525'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/hussain-k-m-tansir-559343194/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.facebook.com/tansir.orick/'>
        <AiFillFacebook size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
