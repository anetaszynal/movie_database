import React, { FC } from 'react'
import { List, ListItem } from './styled'

export const GenresList:FC<{genres?: string[]}> = ({ genres }) => (
  <List>
    {genres?.map((genre, index) => (
      <ListItem key = {index}>{genre}</ListItem>
    ))}
  </List>
)
