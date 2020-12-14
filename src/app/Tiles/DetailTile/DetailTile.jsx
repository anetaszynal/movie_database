import { GenresList } from "../GenresList";
import { Vote } from "../Vote";
import React from "react";
import {
  AdditionalInfo,
  Caption,
  DetailTileWrapper,
  Name,
  Title,
  Description,
} from "./styled";
import { Image, Meta } from "../BothTileStyle";

export const DetailTile = ({
  url,
  title,
  genres,
  caption,
  averageVotes,
  votes,
  production,
  date,
  description,
  detail,
  people,
}) => (
  <DetailTileWrapper>
    <Image url={url} />
    <Meta detail={detail}>
      <Title>{title}</Title>
      <Caption>{caption}</Caption>
      <div>
        <AdditionalInfo>
          <Name>Production:</Name>
          {production}
        </AdditionalInfo>
        <AdditionalInfo last={true}>
          <Name>Release date:</Name>
          {date}
        </AdditionalInfo>
      </div>
      {genres?.length > 0 && <GenresList genres={genres} />}
      {!people && (
        <Vote averageVotes={averageVotes} votes={votes} detail={detail} />
      )}
    </Meta>
    <Description>{description}</Description>
  </DetailTileWrapper>
);
