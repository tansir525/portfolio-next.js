import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
 <Section row nopadding>
   <LeftSection>
   <SectionTitle main center>
   Welcome to <br/>
   My Personal Portfolio
   </SectionTitle>
<SectionText>
I am a Front End developer with industry experience building websites and web applications. I specialize in JavaScript and have professional experience working with React and Next.Js. I also have experience working with MongoDB, Node.js, and Website SEO. Take a look at my work or get in touch!
</SectionText>
<Button onClick={()=>window.location = "https://www.linkedin.com/in/hussain-k-m-tansir-559343194/"}>Learn More </Button>
  
   </LeftSection>
 </Section>
);

export default Hero;