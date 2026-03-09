import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../Assets/Responsive/breakpoints';
import { throttleWithRAF } from '../../Assets/Utils/scrollThrottle';

const Container = styled.div`
    height: 120vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

const SkillsTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(-${(scrollPercent) * 10}%)`,
  }),
})`
  will-change: transform;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: #EEE;
  top:30%;
  right:-50%;
  @media ${device.laptop} {
    font-size: 180px;
  }
  @media ${device.laptopL} {
    font-size: 200px;
  }
  @media ${device.desktop} {
    font-size: 350px;
  }
`;

const SkillsList = styled.div`
  /* border: 1px solid #EFEFEF; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  font-family: 'AvenirRoman';
  text-align: left;
  margin-left: 15%;
  margin-right: 10%;
  z-index: 1;
  transform: translateY(30%);
  @media ${device.laptop} {
    font-size: 30px;
  }
  @media ${device.laptopL} {
    font-size: 35px;
  }
  @media ${device.desktop} {
    font-size: 65px;
  }
`;

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screenHeight: 0,
      scrollHeight: 0,
      scrollPercent: 0,
    };
    this.handleScroll = throttleWithRAF(this.handleScrollUpdate.bind(this));
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.setState({ scrollHeight: Math.round(window.document.documentElement.scrollHeight) });
    this.setState({ screenHeight: Math.round(window.document.documentElement.clientHeight) });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScrollUpdate() {
    const { body, documentElement } = document;
    const sd = Math.max(body?.scrollTop ?? 0, documentElement?.scrollTop ?? 0);
    const scrollHeight = documentElement.scrollHeight - documentElement.clientHeight;
    let sp = scrollHeight > 0 ? (sd / scrollHeight) * 100 : 0;
    const minlimit = (documentElement.clientHeight * 950) / documentElement.scrollHeight;
    const maxlimit = (documentElement.clientHeight * 1180) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= maxlimit + 3) {
      sp -= minlimit;
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <SkillsTitle scrollPercent={scrollPercent}>SKILLS</SkillsTitle>
        <SkillsList>
          <div>
            Android Development
            <br />
            Compose Multiplatform
            <br />
            Jetpack Compose
            <br />
            Dagger Hilt
            <br />
            <br />
            Kotlin
            <br />
            Java
            <br />
            XML
            <br />
            Coroutines
            <br />
          </div>
          <div>
            MVVM Architecture
            <br />
            RESTful APIs
            <br />
            Firebase
            <br />
            Retrofit
            <br />
            <br />
            Git and GitHub
            <br />
            CI/CD
            <br />
            System Design
            <br />
            Testing
            <br />
          </div>
        </SkillsList>
      </Container>
    );
  }
}

export default Skills;
