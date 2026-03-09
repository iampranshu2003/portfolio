import React, { Component } from 'react';
import styled from 'styled-components';
import device from '../../../Assets/Responsive/breakpoints';
import profileImage from '../../../Assets/Images/profile.jpeg';

const Container = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100%;
  background-color: white;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 20px;

  @media ${device.tablet} {
    width: 140px;
    height: 140px;
    margin-bottom: 24px;
  }
`;

const Name = styled.div`
  font-family: 'Valencia';
  text-align:center;
  padding-right: 10px;
  @media ${device.mobileS} {
    font-size: 70px;
  }
  @media ${device.mobileM} {
    font-size: 80px;
  }
  @media ${device.mobileL} {
    font-size: 90px;
  }
  @media ${device.tablet} {
    font-size: 150px;
  }
  @media ${device.laptop} {
    font-size: 160px;
  }
`;

const Title = styled.div`
  font-family: 'AvenirRoman';
  text-align:center;
  margin-top: 10px;
  @media ${device.mobileS} {
    font-size: 13px;
  }
  @media ${device.mobileM} {
    font-size: 15px;
  }
  @media ${device.mobileL} {
    font-size: 17px;
  }
  @media ${device.tablet} {
    font-size: 30px;
  }
  @media ${device.laptop} {
    font-size: 35px;
  }
`;

class NameAndJobTitle extends Component {
  render() {
    return (
      <Container>
        <ProfileImage src={profileImage} alt="Pranshu Gupta" />
        <Name>Pranshu Gupta</Name>
        <Title>ANDROID DEVELOPER</Title>
      </Container>
    );
  }
}

export default NameAndJobTitle;
