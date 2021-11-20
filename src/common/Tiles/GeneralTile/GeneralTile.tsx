import React, { FC } from 'react'
import { Vote } from '../Vote'
import { GenresList } from '../GenresList'
import { Caption, InsideMeta, TileWrapper, Title } from './styled'
import { Image, Meta } from '../BothTileStyle'
import { Tile } from '../../types/tile'

export const GeneralTile:FC<Tile> = ({
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
        {!caption
        ? null
        : typeof caption === 'string' ? <Caption people = {people}>{caption}</Caption> : caption?.map((role, index) => <Caption key={index} people = {people}>{role}</Caption>)
        }
        {genres && genres?.length > 0 && <GenresList genres = {genres}/>}
      </InsideMeta>
      {!people && <Vote votes = {votes} averageVotes = {averageVotes}/>}
    </Meta>
  </TileWrapper>
)
