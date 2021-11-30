import React, { FC } from 'react'
import { VoteType } from '../../types/tile'
import { AverageVotes, For, Star, Votes, VoteWrapper, Wrapper } from './styled'

interface Props extends VoteType {
  detail?: boolean, 
  backdrop?: boolean
}

export const Vote:FC<Props> = ({ averageVotes, votes, detail, backdrop }) => (
  <VoteWrapper backdrop = {backdrop}>
    {!!votes ? (
      <>
        <Wrapper>
          <Star backdrop = {backdrop}/>
          <AverageVotes backdrop = {backdrop} detail = {detail}>
            {averageVotes}
          </AverageVotes>
          {(
            detail || backdrop
          ) && (
            <For backdrop = {backdrop} detail = {detail}>
              /10
            </For>
          )}
        </Wrapper>
        <Votes backdrop = {backdrop} detail = {detail}>{`${votes} ${
          votes === 1 ? 'vote' : 'votes'
        }`}</Votes>
      </>
    ) : (
      <Votes>No votes yet</Votes>
    )}
  </VoteWrapper>
)
