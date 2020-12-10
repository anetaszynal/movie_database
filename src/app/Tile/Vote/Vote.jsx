import React from 'react'
import { AverageVotes, Star, Votes, VoteWrapper } from './styled'

export const Vote = ({ averageVotes, votes }) => (
  !!votes && (
  <VoteWrapper>
    <Star/>
    <AverageVotes>{averageVotes}</AverageVotes>
    <Votes>{votes}</Votes>
  </VoteWrapper>
))