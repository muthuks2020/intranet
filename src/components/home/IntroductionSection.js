import React from 'react';
import styled from 'styled-components';

import { rhythm } from '../../utils/typography';
import media from '../../css/media';

import IntroductionItem from './IntroductionItem';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  height: auto;
  padding: 50px 0;

  @media (${media.tablet}) {
    padding: 20px 0;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  width: calc(1200px + ${rhythm(0.5)});
  height: 100%;
  margin: 0 ${rhythm(0.5)};
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  margin: ${rhythm(0.5)} 0;

  @media (${media.tablet}) {
    flex-wrap: wrap;
    margin: 0;
  }
`;

const IntroductionSection = () => (
  <Wrapper>
    <Container>
      <Row>
        <IntroductionItem
          title="Flexible"
          subTitle="We are open cultured flexible."
        />
        <IntroductionItem
          title="Modern"
          subTitle="we use the latest tool and technology to help our clients to solve problems ."
        />
      </Row>
      <Row>
        <IntroductionItem
          title="Modular"
          subTitle=" We work in small closer teams to solve problems effeciently ."
        />
        <IntroductionItem
          title="Learn "
          subTitle="we Encourage constant learning ."
        />
      </Row>
    </Container>
  </Wrapper>
);

export default IntroductionSection;
