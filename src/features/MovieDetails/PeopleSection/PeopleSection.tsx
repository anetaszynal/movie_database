import React, { FC } from "react";
import { GeneralTile } from "../../../common/Tiles/GeneralTile";
import { DetailsSection } from "../../../common/DetailsSection";
import { LOCAL_ROUTES } from "../../../lib/utils";
import { getImage, IMAGE_SIZES } from "../../../common/Tiles/getImage";
import noPersonPosterIcon from "../../images/noPersonPosterIcon.svg";
import { StyledNavLink } from "../../../common/commonStyles";
import { CrewPersonRoles, groupPersonRoles } from "../../../common/DetailsSection/groupPersonRoles";
import { CommonDetailsSection } from "../../../common/types/tile";
import {
  MovieCreditsCast,
  MovieCreditsCrew,
} from "../../../models/credits.model";

interface PeopleSectionProps extends CommonDetailsSection {
  role: 'character' | 'job',
  credits: MovieCreditsCrew[] | MovieCreditsCast[]
}

const isCreditsCrewType = (credits: MovieCreditsCast | CrewPersonRoles): credits is CrewPersonRoles => {
  return 'job' in credits
}

export const PeopleSection:FC<PeopleSectionProps> = ({ credits, title, role, tilesNumber }) => (
  <DetailsSection
    credits={credits}
    title={title}
    tilesNumber={tilesNumber}
    people
  >
    {groupPersonRoles(credits, role).map((person) => (
      <StyledNavLink
        key={isCreditsCrewType(person) ? `${person.job}-${person.credit_id}` : `${person.character}-${person.credit_id}`}
        to={`${LOCAL_ROUTES.people}${LOCAL_ROUTES.details(person.id.toString())}`}
      >
        <GeneralTile
          image={getImage({
            path: person.profile_path,
            size: IMAGE_SIZES.medium,
          })}
          imagePlaceholder={noPersonPosterIcon}
          title={person.name}
          caption={isCreditsCrewType(person) ? person.job : person.character}
          people
        />
      </StyledNavLink>
    ))}
  </DetailsSection>
);
