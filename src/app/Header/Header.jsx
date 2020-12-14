import React from "react";
import { Search } from "./Search";
import { ContentWrapper, List, ListItem, Logo, Wrapper } from "./styled";
import { LOCAL_ROUTES } from "../../lib/utils";
import { StyledNavLink } from "../common/commonStyles";

export const Header = () => (
  <Wrapper>
    <ContentWrapper>
      <nav>
        <List>
          <ListItem>
            <StyledNavLink to={LOCAL_ROUTES.movies}>
              <Logo />
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to={LOCAL_ROUTES.movies} border={true}>
              MOVIES
            </StyledNavLink>
          </ListItem>
          <ListItem>
            <StyledNavLink to={LOCAL_ROUTES.people} border={true}>
              PEOPLE
            </StyledNavLink>
          </ListItem>
        </List>
      </nav>
      <Search />
    </ContentWrapper>
  </Wrapper>
);
