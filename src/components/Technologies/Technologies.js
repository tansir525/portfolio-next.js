import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id='tech'>
   <SectionDivider/>
   <br />
   <SectionTitle>Technologies</SectionTitle>
   <SectionText>
     I've worked  with a range a techonologies in web  development world.
     From Back-end To Design
   </SectionText>
   <List>
     <ListItem>
       <DiReact size='3rem'/>
       <ListContainer>
         <ListTitle>
           Front-End
         </ListTitle>
         <ListParagraph>
           Exprience with <br />
           React.js, Next.js
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiFirebase size='3rem'/>
       <ListContainer>
         <ListTitle>
           Back-End
         </ListTitle>
         <ListParagraph>
           Exprience with <br />
           Node.js, Database
         </ListParagraph>
       </ListContainer>
     </ListItem>
     <ListItem>
       <DiZend size='3rem'/>
       <ListContainer>
         <ListTitle>
           UX/UI
         </ListTitle>
         <ListParagraph>
           Exprience with <br />
           tool like Figma , Adobe XD
         </ListParagraph>
       </ListContainer>
     </ListItem>
   </List>

 </Section>
);

export default Technologies;
