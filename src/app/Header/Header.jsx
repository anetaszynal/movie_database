import React from 'react'
import {Search} from './Search'
import { ContentWrapper, Logo, Wrapper, List, ListItem } from './styled'

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
        <Search/>
      </ContentWrapper>
    </Wrapper>
  )
}