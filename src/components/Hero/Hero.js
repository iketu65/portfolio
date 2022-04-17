import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello World! <br />
        Welcome To <br />
        Phakorn <br />
        Praditthamrong's <br />
        Portfolio!
      </SectionTitle>
      {/* ** แก้ด้วย1 ** */}
      <SectionText> 
      I'm a software developer with passions for learning and innovating.
      </SectionText>
      {/* ** แก้ด้วย2 ** */}
      {/* <Button onClick={() => window.location = 'https://www.javascript.com/'}>Learn More</Button> */}
      <Button onClick={() => window.location = 'mailto: phakorn.praditthamrong@gmail.com'}>Contact Me</Button>
    </LeftSection>
  </Section>
);

export default Hero;