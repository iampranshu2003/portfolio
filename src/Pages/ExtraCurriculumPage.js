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

const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const ActivityCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 32px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border-left: 4px solid #1a1a1a;
`;

const ActivityTitle = styled.h2`
  font-family: 'AvenirHeavy';
  font-size: 22px;
  color: #1a1a1a;
  margin-bottom: 8px;
`;

const ActivityRole = styled.span`
  font-family: 'AvenirMedium';
  font-size: 16px;
  color: #666;
  display: block;
  margin-bottom: 12px;
`;

const ActivityDesc = styled.p`
  font-family: 'AvenirLight';
  font-size: 15px;
  color: #555;
  line-height: 1.6;
  margin: 0;
`;

const ActivityDate = styled.span`
  font-family: 'AvenirRoman';
  font-size: 13px;
  color: #999;
  margin-top: 12px;
  display: block;
`;

const Placeholder = styled.div`
  text-align: center;
  padding: 80px 20px;
  background: white;
  border-radius: 16px;
  border: 2px dashed #e0e0e0;

  p {
    font-family: 'AvenirLight';
    font-size: 18px;
    color: #999;
    margin: 0;
  }
`;

const PLACEHOLDER_ACTIVITIES = [
  { title: 'Hackathon Name', role: 'Participant / Winner', desc: 'Add your hackathon experience here.', date: '2024' },
  { title: 'Open Source Contribution', role: 'Contributor', desc: 'Describe your open source work.', date: '2024' },
  { title: 'Tech Community', role: 'Member / Organizer', desc: 'Clubs, meetups, or community involvement.', date: '2024' },
];

function ExtraCurriculumPage() {
  return (
    <Page>
      <BackLink to="/">← Back to Home</BackLink>
      <Title>Extra Curriculum</Title>
      <Subtitle>Hackathons, volunteering, clubs, and beyond work</Subtitle>
      <ActivityList>
        {PLACEHOLDER_ACTIVITIES.map((activity, i) => (
          <ActivityCard key={i}>
            <ActivityTitle>{activity.title}</ActivityTitle>
            <ActivityRole>{activity.role}</ActivityRole>
            <ActivityDesc>{activity.desc}</ActivityDesc>
            <ActivityDate>{activity.date}</ActivityDate>
          </ActivityCard>
        ))}
      </ActivityList>
    </Page>
  );
}

export default ExtraCurriculumPage;
