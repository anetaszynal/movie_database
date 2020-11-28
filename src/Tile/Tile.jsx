import {
  AverageVotes,
  Caption,
  Image,
  List,
  ListItem,
  Meta,
  Star,
  TileWrapper,
  Title,
  Votes,
  VoteWrapper
} from "./styled";

export const Tile = () => {
  return(
      <TileWrapper>
        <Image/>
        <Meta>
          <div>
            <Title>Mulan</Title>
            <Caption>2020</Caption>
            <List>
              <ListItem>Action</ListItem>
              <ListItem>Adventure</ListItem>
              <ListItem>Drama</ListItem>
            </List>
          </div>
          <VoteWrapper>
            <Star/>
            <AverageVotes>7,8</AverageVotes>
            <Votes>35 votes</Votes>
          </VoteWrapper>
        </Meta>
      </TileWrapper>
  )
};