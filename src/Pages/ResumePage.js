import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import device from '../Assets/Responsive/breakpoints';

const Page = styled.main`
  min-height: 100vh;
  padding: 120px 10% 80px;
  background: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    padding: 100px 5% 60px;
  }
`;

const Title = styled.h1`
  font-family: 'AvenirHeavy';
  font-size: 48px;
  color: #1a1a1a;
  margin-bottom: 12px;

  @media ${device.tablet} {
    font-size: 36px;
  }
`;

const Subtitle = styled.p`
  font-family: 'AvenirLight';
  font-size: 20px;
  color: #666;
  margin-bottom: 40px;
  text-align: center;

  @media ${device.tablet} {
    font-size: 16px;
    margin-bottom: 32px;
  }
`;

const BackLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'AvenirRoman';
  font-size: 14px;
  color: #1a1a1a;
  text-decoration: none;
  margin-bottom: 40px;
  padding: 8px 0;
  transition: opacity 0.2s;
  align-self: flex-start;

  &:hover {
    opacity: 0.7;
  }
`;

const DownloadButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  font-family: 'AvenirHeavy';
  font-size: 18px;
  color: white;
  background: #1a1a1a;
  text-decoration: none;
  padding: 18px 36px;
  border-radius: 12px;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
  }
`;

const ResumePreview = styled.div`
  margin-top: 48px;
  width: 100%;
  max-width: 800px;
  aspect-ratio: 8.5 / 11;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    font-family: 'AvenirLight';
    font-size: 18px;
    color: #999;
  }
`;

const RESUME_URL = 'https://drive.google.com/file/d/1Rc7Zh_nEfwkd2Quv5QvRxaIAKzuYiOWE/view?usp=sharing';

function ResumePage() {
  return (
    <Page>
      <BackLink to="/">← Back to Home</BackLink>
      <Title>Resume</Title>
      <Subtitle>Download my resume or view it online</Subtitle>
      <DownloadButton href={RESUME_URL} target="_blank" rel="noopener noreferrer">
        Download Resume ↗
      </DownloadButton>
      <ResumePreview>
        <p>Resume preview or embed PDF here</p>
      </ResumePreview>
    </Page>
  );
}

export default ResumePage;
