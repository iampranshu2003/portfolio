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

const ArticleGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 32px;
`;

const ArticleCard = styled.article`
  background: white;
  border-radius: 16px;
  padding: 28px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.1);
  }
`;

const ArticleTitle = styled.h2`
  font-family: 'AvenirHeavy';
  font-size: 22px;
  color: #1a1a1a;
  margin-bottom: 12px;
  line-height: 1.3;
`;

const ArticleExcerpt = styled.p`
  font-family: 'AvenirLight';
  font-size: 15px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 16px;
`;

const ArticleMeta = styled.span`
  font-family: 'AvenirRoman';
  font-size: 13px;
  color: #999;
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

const PLACEHOLDER_ARTICLES = [
  { title: 'Building Android Apps with Jetpack Compose', excerpt: 'A deep dive into modern Android UI development...', date: 'Coming soon', link: '#' },
  { title: 'Kotlin Coroutines Best Practices', excerpt: 'Tips for writing clean async code...', date: 'Coming soon', link: '#' },
  { title: 'MVVM Architecture in Android', excerpt: 'Structuring your app for maintainability...', date: 'Coming soon', link: '#' },
];

function TechBlogsPage() {
  return (
    <Page>
      <BackLink to="/">← Back to Home</BackLink>
      <Title>Tech Blogs</Title>
      <Subtitle>Articles on Android development, Kotlin, and software engineering</Subtitle>
      <ArticleGrid>
        {PLACEHOLDER_ARTICLES.map((article, i) => (
          <ArticleCard key={i}>
            <ArticleTitle>{article.title}</ArticleTitle>
            <ArticleExcerpt>{article.excerpt}</ArticleExcerpt>
            <ArticleMeta>{article.date}</ArticleMeta>
          </ArticleCard>
        ))}
      </ArticleGrid>
    </Page>
  );
}

export default TechBlogsPage;
