import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import device from '../Assets/Responsive/breakpoints';

const Page = styled.main`
  min-height: 100vh;
  padding: 120px 10% 80px;
  background: #fafafa;

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
  margin-bottom: 48px;

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

  &:hover {
    opacity: 0.7;
  }
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 32px;
  border-left: 2px solid #e0e0e0;

  &::before {
    content: '';
    position: absolute;
    left: -6px;
    top: 0;
    width: 10px;
    height: 10px;
    background: #1a1a1a;
    border-radius: 50%;
  }
`;

const ExperienceCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  margin-bottom: 24px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  }
`;

const Company = styled.h2`
  font-family: 'AvenirHeavy';
  font-size: 24px;
  color: #1a1a1a;
  margin-bottom: 4px;
`;

const Role = styled.span`
  font-family: 'AvenirMedium';
  font-size: 18px;
  color: #666;
  display: block;
  margin-bottom: 12px;
`;

const DateRange = styled.span`
  font-family: 'AvenirRoman';
  font-size: 14px;
  color: #999;
  display: block;
  margin-bottom: 16px;
`;

const Desc = styled.p`
  font-family: 'AvenirLight';
  font-size: 15px;
  color: #555;
  line-height: 1.6;
  margin: 0;
`;

const PLACEHOLDER_EXPERIENCE = [
  { company: 'Company Name', role: 'Android Developer', date: '2023 – Present', desc: 'Add your experience details here. Describe your responsibilities and achievements.' },
  { company: 'Previous Company', role: 'Junior Android Developer', date: '2022 – 2023', desc: 'Your previous role and key contributions.' },
];

function ExperiencePage() {
  return (
    <Page>
      <BackLink to="/">← Back to Home</BackLink>
      <Title>Experience</Title>
      <Subtitle>Professional journey and roles</Subtitle>
      <Timeline>
        {PLACEHOLDER_EXPERIENCE.map((exp, i) => (
          <ExperienceCard key={i}>
            <Company>{exp.company}</Company>
            <Role>{exp.role}</Role>
            <DateRange>{exp.date}</DateRange>
            <Desc>{exp.desc}</Desc>
          </ExperienceCard>
        ))}
      </Timeline>
    </Page>
  );
}

export default ExperiencePage;
