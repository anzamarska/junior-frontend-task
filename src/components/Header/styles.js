import React from "react";
import styled from "styled-components";

import logoImg from "./assets/logo.svg";

export const Logo = () => <img alt="Startup Development House" src={logoImg} />;

export const Root = styled.header`
  height: 5rem;
`;

export const Wrapper = styled.div`
  height: 100%;
  max-width: ${({ theme }) => theme.size.navWidth};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;

  a{
    text-decoration: none;
    list-style: none;
    float: left;
    padding: 0 2rem;
  }
`;

export const NavigationLink = styled.li`
  margin-top: 0.75rem;
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.black};
  line-height: 1.8;
  right: 0;
`