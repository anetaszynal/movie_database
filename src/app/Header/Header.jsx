import React from 'react'
import { Search } from './Search'
import { ContentWrapper, List, ListItem, Logo, StyledNavLink, Wrapper } from './styled'
import { LOCAL_ROUTES } from '../../lib/utils'

export const Header = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <nav>
          <List>
            <ListItem>
              <StyledNavLink to = {LOCAL_ROUTES.movies}><Logo/></StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink to = {LOCAL_ROUTES.movies} border>MOVIES</StyledNavLink>
            </ListItem>
            <ListItem>
              <StyledNavLink to = {LOCAL_ROUTES.people} border>PEOPLE</StyledNavLink>
            </ListItem>
          </List>
        </nav>
        <Search/>
      </ContentWrapper>
    </Wrapper>
  )
}