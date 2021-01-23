import React from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>Welcome, Ryan Solomon</HeaderTitle>
      <HeaderButton>Logout</HeaderButton>
    </HeaderContainer>
  );
}

const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem;
  background: #222;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.h1`
  color: white;
`;

const HeaderButton = styled.button`
  background: none;
  color: white;
  border: none;
  outline: none;
`;
