import poster from "./poster.png"
import { AverageVotes, Caption, Image, List, ListItem, Star, TileWrapper, Title, Votes, VoteWrapper } from "./styled";

export const Tile = () => {
  return(
      <TileWrapper>
        <Image src={poster} alt="movie poster"/>
        <div>
          <Title>Mulan</Title>
          <Caption>2020</Caption>
          <List>
            <ListItem>Action</ListItem>
            <ListItem>Adventure</ListItem>
            <ListItem>Drama</ListItem>
          </List>
          <VoteWrapper>
            <Star/>
            <AverageVotes>7,8</AverageVotes>
            <Votes>35 votes</Votes>
          </VoteWrapper>
        </div>
      </TileWrapper>
  )
}