import React, { FC } from 'react'
import { Vote } from '../../../common/Tiles/Vote'
import { VoteType } from '../../../common/types/tile'
import { Poster, Title, Wrapper } from './styled'

interface Props extends VoteType {
  image: string | null,
  title: string
}

export const Backdrop:FC<Props> = ({ image, title, votes, averageVotes }) => (
  <Poster url = {image}>
    <Wrapper>
      <Title>{title}</Title>
      <Vote votes = {votes} averageVotes = {averageVotes} backdrop/>
    </Wrapper>
  </Poster>
)
