import React, { Component } from 'react';
import { render } from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import MediaQuery from 'react-responsive';
import TopBar from './Components/TopBar/TopBar';
import WideScreenHero from './Slides/WideScreen/HeroSlide/Hero';
import WideScreenWork from './Slides/WideScreen/WorkSlide/Work';
import WideScreenSkills from './Slides/WideScreen/Skills';
import WideScreenContact from './Slides/WideScreen/ContactSlide/Contact';
import MobileHero from './Slides/Mobile/HeroSlide/Hero';
import MobileWork from './Slides/Mobile/WorkSlide/Work';
import MobileSkills from './Slides/Mobile/Skills';
import MobileContact from './Slides/Mobile/ContactSlide/Contact';
import TechBlogsPage from './Pages/TechBlogsPage';
import ExtraCurriculumPage from './Pages/ExtraCurriculumPage';
import ExperiencePage from './Pages/ExperiencePage';
import ResumePage from './Pages/ResumePage';
import './Assets/index.css';

const GlobalStyle = createGlobalStyle`
html, body { margin: 0;}
*, *:before, *:after { box-sizing: border-box; }
`;

function HomePage() {
  return (
    <>
      <MediaQuery query="(min-device-width: 1224px)">
        <WideScreenHero />
        <WideScreenWork />
        <WideScreenSkills />
        <WideScreenContact />
      </MediaQuery>
      <MediaQuery query="(max-device-width: 1224px)">
        <MobileHero />
        <MobileWork />
        <MobileSkills />
        <MobileContact />
      </MediaQuery>
    </>
  );
}

class App extends Component {
  componentDidMount() {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
  }

  render() {
    return (
      <HashRouter>
        <GlobalStyle />
        <TopBar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/tech-blogs" component={TechBlogsPage} />
          <Route path="/extra-curriculum" component={ExtraCurriculumPage} />
          <Route path="/experience" component={ExperiencePage} />
          <Route path="/resume" component={ResumePage} />
        </Switch>
      </HashRouter>
    );
  }
}

render(React.createElement(App), document.getElementById('root'));
