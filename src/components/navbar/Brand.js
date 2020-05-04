import React from 'react';
import styled from 'styled-components';

const Brand = () => {
  return (
    <Image src="../../assets/logo-min.png" alt="TP-Calculator Logo" />
  );
};

export default Brand;

const Image = styled.img`
  height: 85%;
  margin: auto 0;
`;
