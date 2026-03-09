import React, { Component } from 'react';
import styled from 'styled-components';
import { throttleWithRAF } from '../../../Assets/Utils/scrollThrottle';
import twitterImg from '../../../Assets/Images/Social/twitter.svg';
import githubImg from '../../../Assets/Images/Social/git.svg';
import mailImg from '../../../Assets/Images/Social/mail.svg';
import instaImg from '../../../Assets/Images/Social/insta.svg';
import mediumImg from '../../../Assets/Images/Social/medium.svg';
import linkedInImg from '../../../Assets/Images/Social/linkedin.svg';
import SocialLogo from './SocialLogo';
import device from '../../../Assets/Responsive/breakpoints';

const Container = styled.section`
    height:80vh;/* Since pageSplitTime is 1.4 */
    width:100%;
    /* border: 1px solid blue; */
    position: relative;
    overflow: hidden;
`;

const ContactTitle = styled.div.attrs({
  style: ({ scrollPercent }) => ({
    transform: `translateX(${(scrollPercent) * 8}%)`,
  }),
})`
  will-change: transform;
  font-family: 'AvenirHeavy';
  font-size: 200px;
  position: absolute;
  color: #EEE;
  top:12%;
  left:-70%;
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

const SocialMediaIcons = styled.div`
  /* border: 1px solid black; */
  margin-left: 20%;
  margin-right: 3%;
  z-index: 1;
  transform: translateY(210%);
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
`;

class Contact extends Component {
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
    const minlimit = (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
    if (sp >= minlimit && sp <= 100) {
      sp -= minlimit;
      this.setState({ scrollPercent: sp });
    }
  }

  render() {
    const { scrollPercent } = this.state;
    return (
      <Container>
        <ContactTitle scrollPercent={scrollPercent}>CONTACT</ContactTitle>
        <SocialMediaIcons>
          <SocialLogo imgURL={twitterImg} alternate="Twitter" redirectURL="https://x.com/Pranshu33512397" />
          <SocialLogo imgURL={githubImg} alternate="Github" redirectURL="https://github.com/iampranshu2003" />
          <SocialLogo imgURL={mailImg} alternate="Mail" redirectURL="mailto:pranshugupta.dev@gmail.com" />
          <SocialLogo imgURL={instaImg} alternate="insta" redirectURL="https://www.instagram.com/appmingler?igsh=dzhianZqaWw2cHVi" />
          <SocialLogo imgURL={mediumImg} alternate="medium" redirectURL="https://medium.com/@iampranshu2003" /> 
          <SocialLogo imgURL={linkedInImg} alternate="Linkedin" redirectURL="https://www.linkedin.com/in/pranshuandroiddev/" />
        </SocialMediaIcons>
      </Container>
    );
  }
}

export default Contact;
