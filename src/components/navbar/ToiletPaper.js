import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

const Toiletpaper = (props) => {
  const ripAnimation = useSpring({
    from: { transform: 'translate3d(0, 0, 0)' },
    transform: 'translate3d(0, -20em, 0)',
    config: config.wobbly
  });

  return (
    <>
      <ToiletPaper style={ripAnimation}>
      </ToiletPaper>
    </>
  );
};

export default Toiletpaper;

const ToiletPaper = styled.div`
    position: fixed;
    width: 100%;
    top: -10px;
    left: 0;
    background: #2d3436;
    z-index: 1;
    font-size: 1.4rem;
    border-top: 2px dotted white;
    border-bottom: 2px dotted white;
    height: 600px;
  `;
