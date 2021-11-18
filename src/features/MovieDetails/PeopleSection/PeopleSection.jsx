import React from "react";
import { GeneralTile } from "../../../common/Tiles/GeneralTile";
import { DetailsSection } from "../../../common/DetailsSection";
import { LOCAL_ROUTES } from "../../../lib/utils";
import { getImage, IMAGE_SIZES } from "../../../common/Tiles/getImage";
import noPersonPosterIcon from "../../images/noPersonPosterIcon.svg";
import { StyledNavLink } from "../../../common/commonStyles";
import { groupPersonRoles } from "../../../common/DetailsSection/groupPersonRoles";

export const PeopleSection = ({ credits, title, role, tilesNumber }) => (
  <DetailsSection
    credits={credits}
    title={title}
    tilesNumber={tilesNumber}
    people
  >
    {groupPersonRoles(credits, role).map((person) => (
      <StyledNavLink
        key={`${person[role]}}-${person.credit_id}`}
        to={`${LOCAL_ROUTES.people}${LOCAL_ROUTES.details(person.id)}`}
      >
        <GeneralTile
          image={getImage({
            path: person.profile_path,
            size: IMAGE_SIZES.medium,
          })}
          imagePlaceholder={noPersonPosterIcon}
          title={person.name}
          caption={person[role]}
          people
        />
      </StyledNavLink>
    ))}
  </DetailsSection>
);
