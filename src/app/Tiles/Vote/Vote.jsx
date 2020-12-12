import React from 'react'
import { AverageVotes, For, Star, Votes, VoteWrapper } from './styled'

export const Vote = ({ averageVotes, votes, detail, people }) => (
  !people && (
    <VoteWrapper>
      {!!votes ?
        <>
          <Star/>
          <AverageVotes detail = {detail}>{averageVotes}</AverageVotes>
          <For detail = {detail}>/10</For>
          <Votes detail = {detail}>{`${votes} votes`}</Votes>
        </>
        :
        <Votes>No votes yet</Votes>
      }
    </VoteWrapper>
  )
)