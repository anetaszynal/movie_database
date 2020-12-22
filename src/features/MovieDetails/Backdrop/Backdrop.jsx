import React from 'react'
import { Vote } from '../../../common/Tiles/Vote'
import { Poster, Title, Wrapper } from './styled'

export const Backdrop = ({ image, title, votes, averageVotes }) => (
  <Poster url = {image}>
    <Wrapper>
      <Title>{title}</Title>
      <Vote votes = {votes} averageVotes = {averageVotes} backdrop/>
    </Wrapper>
  </Poster>
)
