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
} from './styled'

export const Tile = ({ url, title, genres, caption, averageVotes, votes }) => {

  return (
    <TileWrapper>
      <Image url = {url}/>
      <Meta>
        <div>
          <Title>{title}</Title>
          <Caption>{caption}</Caption>
          <List>
            {genres?.map((genre, index) => (
              <ListItem key = {index}>{genre}</ListItem>
            ))}
          </List>
        </div>
        <VoteWrapper>
          <Star/>
          <AverageVotes>{averageVotes}</AverageVotes>
          <Votes>{votes}</Votes>
        </VoteWrapper>
      </Meta>
    </TileWrapper>
  )
}