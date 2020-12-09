import React from 'react'
import { ContentWrapper, Logo, Wrapper, List, ListItem, Search } from './styled'

export const Header = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <nav>
          <List>
            <ListItem><Logo/></ListItem>
            <ListItem border>MOVIES</ListItem>
            <ListItem border>PEOPLE</ListItem>
          </List>
        </nav>
        <Search
        placeholder={`Search for movies...`}
        />
      </ContentWrapper>
    </Wrapper>
  )
}