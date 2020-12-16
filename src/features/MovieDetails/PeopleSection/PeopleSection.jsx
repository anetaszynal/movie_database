import React from 'react'
import { GeneralTile } from '../../../common/Tiles/GeneralTile'
import { LOCAL_ROUTES } from '../../../lib/utils'
import { getImage } from '../../../common/Tiles/getImage'
import noPersonPosterIcon from '../../images/noPersonPosterIcon.svg'
import { TileList } from '../../../common/tilesContainer'
import { Title, StyledNavLink } from '../../../common/commonStyles'

export const PeopleSection = ({ credits, title, role }) => (
  credits?.length > 0 && (
    <>
      <Title>{title}</Title>
      <TileList people>
        {credits.map((person) => (
          <StyledNavLink key = {`${person[role]}}-${person.credit_id}`}
                         to = {`${LOCAL_ROUTES.people}${LOCAL_ROUTES.details(person.id)}`}>
            <GeneralTile image = {getImage({ path: person.profile_path, size: 'medium', })}
                         imagePlaceholder = {noPersonPosterIcon}
                         title = {person.name}
                         caption = {person[role]}
                         people/>
          </StyledNavLink>
        ))}
      </TileList>
    </>
  )
)