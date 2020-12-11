import { Caption, Image, List, ListItem, Meta, TileWrapper, Title, } from './styled'
import { Vote } from './Vote'

export const Tile = ({ url, title, genres, caption, people, averageVotes, votes, production, date }) => {

  return (
    <TileWrapper people={people}>
      <Image url = {url}/>
      <Meta>
        <div>
          <Title people={people}>{title}</Title>
          <Caption>{caption}</Caption>
          <div>
            <p><span>Production: </span>{production}</p>
            <p><span>Reease date: </span>{date}</p>
          </div>
          <List>
            {genres?.map((genre, index) => (
              <ListItem key = {index}>{genre}</ListItem>
            ))}
          </List>
        </div>
        <Vote votes={votes} averageVotes={averageVotes}/>
      </Meta>
    </TileWrapper>
  )
}