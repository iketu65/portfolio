import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        iKE's Portfolio
      </SectionTitle>
      {/* ** แก้ด้วย1 ** */}
      <SectionText> 
      The purpose of JavaScript Mastery is to help aspiring and established developers to take their development skills to the next level and build awesome apps.
      </SectionText>
      {/* ** แก้ด้วย2 ** */}
      <Button onClick={() => window.location = 'https://www.javascript.com/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;