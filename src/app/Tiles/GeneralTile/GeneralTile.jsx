import React from 'react'
import { Caption, InsideMeta, TileWrapper, Title } from './styled'
import { Image, Meta } from '../BothTileStyle'
import { Vote } from '../Vote'
import { GenresList } from '../GenresList'

export const GeneralTile = ({ url, title, genres, caption, people, averageVotes, votes }) => (
  <TileWrapper people = {people}>
    <Image url = {url}/>
    <Meta people={people}>
      <InsideMeta>
        <Title people = {people}>{title}</Title>
        {!!caption && (
          <Caption>{caption}</Caption>
        )}
        <GenresList genres = {genres}/>
      </InsideMeta>
      <Vote votes = {votes} averageVotes = {averageVotes} people = {people}/>
    </Meta>
  </TileWrapper>
)