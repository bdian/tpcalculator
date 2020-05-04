import React from 'react';
import styled from 'styled-components';

const Brand = () => {
  return (
    <Image src="../../assets/logo.png" alt="TP-Calculator Logo" />
  );
};

export default Brand;

const Image = styled.img`
  display: block;
  margin: auto;
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%) }
  width: 40%;
  max-width: 400px;
  height: auto;
`;
