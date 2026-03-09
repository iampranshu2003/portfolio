import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import NameReveal from './NameReveal';
import TitleReveal from './TitleReveal';
import profileImage from '../../../Assets/Images/profile.jpeg';

const imageFadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  max-width: 100%;
  background-color: white;
  position: relative;
  padding: 0 80px 0 120px;
  box-sizing: border-box;
`;

const TextSection = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  flex: 0 0 auto;
  min-width: 460px;
  max-width: 100%;
  margin-right: 48px;
  margin-top: 48px;
  padding-right: 32px;
  background-color: white;
  overflow: visible;
`;

const ImageWrapper = styled.div`
  flex: 0 0 180px;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  box-sizing: border-box;
  opacity: 0;
  animation: ${imageFadeIn} 0.9s ease-out 1.2s forwards;
`;

const TitleSpacer = styled.div`
  height: 0;
`;

const ProfileImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  vertical-align: middle;
`;

class NameAndJobTitle extends Component {
  render() {
    return (
      <Container>
        <TextSection>
          <NameReveal text="Pranshu Gupta" fontFam="Valencia" timeDelay={500} />
          <TitleSpacer />
          <TitleReveal text="Android Developer" fontFam="AvenirRoman" timeDelay={1300} />
        </TextSection>
        <ImageWrapper>
          <ProfileImage src={profileImage} alt="Pranshu Gupta" />
        </ImageWrapper>
      </Container>
    );
  }
}

export default NameAndJobTitle;
