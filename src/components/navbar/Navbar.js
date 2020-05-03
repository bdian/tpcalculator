
import React from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring';

import Brand from './Brand';
import IntroBrand from './IntroBrand';
import BurgerMenu from './BurgerMenu';
import CollapseMenu from './CollapseMenu';

const Navbar = (props) => {
  const barAnimation = useSpring({
    config: { duration: 250 },
    from: { transform: 'translate3d(0, -10rem, 0)'},
    transform: 'translate3d(0, 0, 0)',
    delay: 500,
    config: config.wobbly
  });

  const linkAnimation = useSpring({
    from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
    to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  const ripAnimation = useSpring({
    config: { duration: 1000 },
    from: { transform: 'translate3d(0, -10px, 0) ' },
    transform: 'translate3d(0, 1000px, 0)',
    delay: 750,
    config: config.molasses
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <Brand />
          <Title>TP Calculator</Title>
          <NavLinks style={linkAnimation}>
            <a href='/'>Calculator</a>
            <a href='https://dev.azure.com/paulbag/tp-calc/_dashboards/dashboard/fd6e25b2-8f27-49be-8155-68d6e15c371c'>Stats</a>
            <a href='/'>About</a>
          </NavLinks>
          <BurgerWrapper>
            <BurgerMenu
              navbarState={props.navbarState}
              handleNavbar={props.handleNavbar}
            />
          </BurgerWrapper>
        </FlexContainer>
      </NavBar>
      <CollapseMenu
        navbarState={props.navbarState}
        handleNavbar={props.handleNavbar}
      />
      <ToiletPaper class="toiletPaper" style={ripAnimation}>
        <IntroBrand />
      </ToiletPaper>
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
  border-bottom: 2px dotted white;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;;
  justify-content: space-between;
  height: 5rem;
`;

const Title = styled.div`
  margin: auto 0;
  color: #fdcb6e;
  text-transform: uppercase;
  font-weight: 600;
  text-decoration: none;
  border-bottom: 1px solid #fdcb6e;
  font-size: 20px;
  }
  `;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
`;

const BurgerWrapper = styled.div`
  margin: auto 0;

  @media (min-width: 769px) {
    display: none;
  }
`;

const ToiletPaper = styled(animated.nav)`
    position: fixed;
    width: 100%;
    top: -10px;
    left: 0;
    background: #2d3436;
    z-index: 1;
    font-size: 1.4rem;
    border-top: 2px dotted white;
    border-bottom: 2px dotted white;
    height: 1000px;
  `;
