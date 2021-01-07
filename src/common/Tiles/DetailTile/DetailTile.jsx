import React from 'react'
import { GenresList } from '../GenresList'
import { Vote } from '../Vote'
import { AdditionalInfo, Caption, DescriptionText, DetailTileWrapper, Name, Title, } from './styled'
import { Image, Meta } from '../BothTileStyle'
import { Description } from './Description/Description'

export const DetailTile = ({
  image,
  imagePlaceholder,
  title,
  genres,
  caption,
  firstInfoName,
  secondInfoName,
  averageVotes,
  votes,
  firstInfo,
  secondInfo,
  description,
  detail,
  people,
}) => (
  <DetailTileWrapper>
    <Image url = {image || imagePlaceholder} noImage = {!image}/>
    <Meta detail = {detail}>
      <Title>{title}</Title>
      {caption && <Caption>{caption}</Caption>}
      <div>
        {firstInfo && <AdditionalInfo> <Name>{firstInfoName}</Name> {firstInfo}</AdditionalInfo>}
        {secondInfo && <AdditionalInfo last = {true}> <Name>{secondInfoName}</Name>{secondInfo}</AdditionalInfo>}
      </div>
      {genres?.length > 0 && <GenresList genres = {genres}/>}
      {!people && <Vote averageVotes = {averageVotes} votes = {votes} detail = {detail}/>}
    </Meta>
    <DescriptionText><Description text={description}/></DescriptionText>
  </DetailTileWrapper>
)
