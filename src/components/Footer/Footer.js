import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin,AiFillFacebook } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper>
     <LinkList>
     <LinkColumn>
     <LinkTitle> Call</LinkTitle>
     <LinkItem href='tel:011-218-61459'>+60-112-186-1459</LinkItem>
     </LinkColumn>
     <LinkColumn>
     <LinkTitle> Email </LinkTitle>
     <LinkItem href='mailto:tansirorick525@gmail.com'>tansirorick525@gmail.com</LinkItem>
     </LinkColumn>
     </LinkList>
     <SocialContainer>
       <CompanyContainer>
         <Slogan>
           #while(!(succeed = try()));
         </Slogan>
         <SocialIcons href='https://github.com/tansir525'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.linkedin.com/in/hussain-k-m-tansir-559343194/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='https://www.facebook.com/tansir.orick/'>
        <AiFillFacebook size="3rem"/>
      </SocialIcons>
       </CompanyContainer>
     </SocialContainer>
   </FooterWrapper>
  );
};

export default Footer;
