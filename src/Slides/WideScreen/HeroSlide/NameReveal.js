import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import device from '../../../Assets/Responsive/breakpoints';

const STAGE_HEIGHT = 280;
const INITIAL_OFFSET = 320;

const Stage = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  min-width: min-content;
  max-width: 100%;
  height: ${STAGE_HEIGHT}px;
  overflow-x: visible;
  overflow-y: hidden;
  padding-right: 40px;
  /* Safari fix: overflow+transform clipping bug */
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  @supports (font: -apple-system-body) {
    padding-right: 72px;
  }
`;

const moveUp = keyframes`
  0% {
    transform: translateY(${INITIAL_OFFSET}px);
  }
  100% {
    transform: translateY(0);
  }
`;

const hideWhiteBlocks = () => keyframes`
0%{
    opacity: 1;
    height: 35vh;
}
100%{
    opacity: 0;
    height: 0vh;
}
`;

const TextToReveal = styled.div`
  position: relative;
  z-index: 2;
  font-family: ${props => props.fontFam};
  text-align: center;
  transform: translateY(${INITIAL_OFFSET}px);
  will-change: transform;
  animation: ${props => (props.reveal ? moveUp : 'none')} 1s cubic-bezier(0, 0.1, 0.12, 0.99) forwards;
  @media ${device.tablet} {
    font-size: 100px;
  }
  @media ${device.laptop} {
    font-size: 140px;
  }
  @media ${device.laptopL} {
    font-size: 150px;
  }
  @media ${device.desktop} {
    font-size: 200px;
  }
`;

const WhiteBlock = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 35vh;
  background-color: white;
  z-index: 1;
  animation: ${hideWhiteBlocks} 0.5s linear forwards;
  animation-delay: 2s;
  pointer-events: none;
`;


class NameReveal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reveal: false,
    };
    this.revealText = this.revealText.bind(this);
  }

  componentDidMount() {
    const { timeDelay } = this.props;
    this.revealText(timeDelay);
  }

  revealText(timeout) {
    setTimeout(() => {
      this.setState({ reveal: true });
    }, timeout);
  }

  render() {
    const { text, fontFam } = this.props;
    const { reveal } = this.state;
    return (
      <Stage>
        <TextToReveal
          fontFam={fontFam}
          reveal={reveal}
        >
          {text}
        </TextToReveal>
        <WhiteBlock />
      </Stage>
    );
  }
}

NameReveal.propTypes = {
  text: PropTypes.string.isRequired,
  fontFam: PropTypes.string,
  timeDelay: PropTypes.number.isRequired,
};

NameReveal.defaultProps = {
  fontFam: 'Avenir Helvetica Ariel',
};
export default NameReveal;
