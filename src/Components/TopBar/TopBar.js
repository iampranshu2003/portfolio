import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import device from '../../Assets/Responsive/breakpoints';

const Bar = styled.nav`
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(${({ visible }) => (visible ? 0 : -120)}px);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: calc(100% - 40px);
  max-width: 900px;
  padding: 10px 20px;
  border-radius: 100px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.8);
  box-shadow: 0 2px 40px rgba(0, 0, 0, 0.08);
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  pointer-events: ${({ visible }) => (visible ? 'auto' : 'none')};
  transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s ease;

  @media ${device.tablet} {
    top: 16px;
    width: calc(100% - 32px);
    padding: 10px 16px;
    border-radius: 16px;
  }
`;

const Logo = styled(Link)`
  font-family: 'AvenirHeavy';
  font-size: 18px;
  letter-spacing: -0.02em;
  color: #1a1a1a;
  text-decoration: none;
  padding: 4px 0;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.7;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  font-family: 'AvenirRoman';
  font-size: 14px;
  font-weight: 500;
  color: #4a4a4a;
  text-decoration: none;
  padding: 8px 14px;
  border-radius: 8px;
  transition: color 0.2s, background 0.2s;

  &:hover {
    color: #1a1a1a;
    background: rgba(0, 0, 0, 0.04);
  }

  &.active {
    color: #1a1a1a;
    font-weight: 600;
  }
`;

const ResumeLink = styled(Link)`
  font-family: 'AvenirHeavy';
  font-size: 13px;
  color: white;
  background: #1a1a1a;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 100px;
  transition: background 0.2s, transform 0.2s;

  &:hover {
    background: #333;
    transform: scale(1.02);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  color: #1a1a1a;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const MenuIcon = styled.span`
  font-size: 20px;
  line-height: 1;
`;

const MobileMenu = styled.div`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(20px);
  z-index: 999;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  opacity: ${({ open }) => (open ? 1 : 0)};
  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  transition: opacity 0.3s ease, visibility 0.3s ease;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

const MobileNavLink = styled(Link)`
  font-family: 'AvenirRoman';
  font-size: 18px;
  font-weight: 500;
  color: #1a1a1a;
  text-decoration: none;
  padding: 16px 32px;
  width: 100%;
  max-width: 280px;
  text-align: center;
  border-radius: 12px;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &.active {
    font-weight: 600;
  }
`;

const MobileResumeLink = styled(Link)`
  font-family: 'AvenirHeavy';
  font-size: 16px;
  color: white;
  background: #1a1a1a;
  text-decoration: none;
  padding: 16px 32px;
  margin-top: 16px;
  border-radius: 12px;
  transition: background 0.2s;

  &:hover {
    background: #333;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #1a1a1a;
  padding: 8px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: background 0.2s;

  &:hover {
    background: rgba(0, 0, 0, 0.06);
  }
`;

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/tech-blogs', label: 'Tech Blogs' },
  { path: '/experience', label: 'Experience' },
  { path: '/extra-curriculum', label: 'Extra Curriculum' },
];

const ABOUT_ME_SCROLL_THRESHOLD = 1.55;

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: true,
      menuOpen: false,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
    this.handleScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const { location } = this.props;
    if (location.pathname !== '/') {
      this.setState({ visible: true });
      return;
    }
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const threshold = window.innerHeight * ABOUT_ME_SCROLL_THRESHOLD;
    this.setState({ visible: scrollY < threshold });
  }

  closeMenu = () => this.setState({ menuOpen: false });

  render() {
    const { visible, menuOpen } = this.state;
    const { location } = this.props;

    return (
      <>
        <Bar visible={visible}>
          <Logo to="/">Pranshu</Logo>
          <NavLinks>
            {navItems.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={location.pathname === path ? 'active' : ''}
              >
                {label}
              </NavLink>
            ))}
          </NavLinks>
          <ResumeLink to="/resume">Resume</ResumeLink>
          <MenuButton onClick={() => this.setState({ menuOpen: true })} aria-label="Open menu">
            <MenuIcon>☰</MenuIcon>
          </MenuButton>
        </Bar>

        <MobileMenu open={menuOpen}>
          <CloseButton onClick={this.closeMenu} aria-label="Close menu">×</CloseButton>
          {navItems.map(({ path, label }) => (
            <MobileNavLink
              key={path}
              to={path}
              onClick={this.closeMenu}
              className={location.pathname === path ? 'active' : ''}
            >
              {label}
            </MobileNavLink>
          ))}
          <MobileResumeLink to="/resume" onClick={this.closeMenu}>
            Resume
          </MobileResumeLink>
        </MobileMenu>
      </>
    );
  }
}

export default withRouter(TopBar);
