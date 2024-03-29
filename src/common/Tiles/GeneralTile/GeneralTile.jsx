import React from 'react'
import { Vote } from '../Vote'
import { GenresList } from '../GenresList'
import { Caption, InsideMeta, TileWrapper, Title } from './styled'
import { Image, Meta } from '../BothTileStyle'

export const GeneralTile = ({
  image,
  imagePlaceholder,
  title,
  genres,
  caption,
  people,
  averageVotes,
  votes,
}) => (
  <TileWrapper people = {people}>
    <Image url = {image || imagePlaceholder} noImage = {!image}/>
    <Meta people = {people}>
      <InsideMeta>
        <Title people = {people}>{title}</Title>
        {!!caption && typeof caption === 'string' ? <Caption people = {people}>{caption}</Caption> : caption?.map((role, index) => <Caption key={index} people = {people}>{role}</Caption>)}
        {genres?.length > 0 && <GenresList genres = {genres}/>}
      </InsideMeta>
      {!people && <Vote votes = {votes} averageVotes = {averageVotes}/>}
    </Meta>
  </TileWrapper>
)
