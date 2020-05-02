import React from 'react';
import styled from 'styled-components';

import logo from "../../assets/logo.png";

const Brand = () => {
  return (
    <Image src={logo} alt="TP-Calculator Logo" />
  );
};

export default Brand;

const Image = styled.img`
  display: block;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) }
`;
