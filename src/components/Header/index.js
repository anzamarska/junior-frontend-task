import React from "react";
import { Link } from "react-router-dom";

import { Root, Wrapper, Logo, NavigationLink } from "./styles";

export const Header = () => (
  <Root>
    <Wrapper>
      <Logo />
      <div>
        <Link to="/">
          <NavigationLink>Start</NavigationLink>
        </Link>
        <Link to="/my-profile">
          <NavigationLink>My Profile</NavigationLink>
        </Link>
      </div>
    </Wrapper>
  </Root>
);
