import React from "react";
import { Vote } from "../../Tiles/Vote";
import { Poster, Wrapper, Title } from "./styled";

export const Backdrop = ({ image, title, votes, averageVotes }) => (
  <Poster url={image}>
    <Wrapper>
      <Title>{title}</Title>
      <Vote votes={votes} averageVotes={averageVotes} backdrop />
    </Wrapper>
  </Poster>
);
