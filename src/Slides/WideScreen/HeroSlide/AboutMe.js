/* eslint-disable react/no-unescaped-entities */
import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../../Assets/Responsive/breakpoints';
import { throttleWithRAF } from '../../../Assets/Utils/scrollThrottle';

const Container = styled.section`
    height: 60vh; /* Increase from 40vh to give more space */
    width: 100%;
    position: relative;
    overflow: visible; /* Change from 'hidden' to show all content */
`;

const AboutMeTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(${(scrollPercent) * 5.5}%)`,
  }),
})`
  will-change: transform;
  font-family: 'AvenirHeavy';
  position: absolute;
  color: #EEE;
  top:10%;
  left:-15%;
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

const AboutMeDescription = styled.div`
  align-items: center;
  font-family: 'AvenirLight';
  text-align: left;
  position: absolute;
  margin-left: 15%;
  margin-right: 5%;
  top:20%;
  @media ${device.laptop} {
    transform: translateY(90%);
    font-size: 30px;
  }
  @media ${device.laptopL} {
    transform: translateY(87%);
    font-size: 38px;
  }
  @media ${device.desktop} {
    transform: translateY(80%);
    font-size: 70px;
  }
`;

class AboutMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollPercent: 0,
    };
    this.handleScroll = throttleWithRAF(this.handleScrollUpdate.bind(this));
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScrollUpdate() {
    const { body, documentElement } = document;
    const sd = Math.max(body?.scrollTop ?? 0, documentElement?.scrollTop ?? 0);
    const scrollHeight = documentElement.scrollHeight - documentElement.clientHeight;
    const sp = scrollHeight > 0 ? (sd / scrollHeight) * 100 : 0;
    const maxlimit = (documentElement.clientHeight * 150) / documentElement.scrollHeight;
    if (sp >= 0 && sp <= maxlimit) {
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <AboutMeTitle scrollPercent={scrollPercent}>ABOUT ME</AboutMeTitle>
        <AboutMeDescription>
          Turning ideas into intuitive Android apps isn’t just my work—it’s what excites me every day. I’m a young, hardworking developer who loves crafting smooth, user-friendly experiences and clean designs. Always ready to take on new challenges and keep learning.
        </AboutMeDescription>
      </Container>
    );
  }
}

export default AboutMe;
