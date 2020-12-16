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
    <Image url={image || imagePlaceholder} noImage={!image} />
    <Meta detail={detail}>
      <Title>{title}</Title>
      <Caption>{caption}</Caption>
      <div>
        <AdditionalInfo>
          <Name>{firstInfoName}</Name>
          {firstInfo}
        </AdditionalInfo>
        <AdditionalInfo last={true}>
          <Name>{secondInfoName}</Name>
          {secondInfo}
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
