import React from 'react'
import { List, ListItem } from './styled'

export const GenresList = ({ genres }) => (
  genres?.length > 0 && (
    <List>
      {genres?.map((genre, index) => (
        <ListItem key = {index}>{genre}</ListItem>
      ))}
    </List>
  )
)