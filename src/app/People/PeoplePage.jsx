import React from "react";
import { useSelector } from "react-redux";
import { useFetchDataOnChange } from "../useFetchDataOnChange";
import { actions, selectors } from "./peopleSlice";
import { ListPage } from "../topRatedList/ListPage";
import { GeneralTile } from "../Tiles/GeneralTile";
import { LOCAL_ROUTES } from "../../lib/utils";
import { StyledNavLink } from "../common/commonStyles";
import { getImage } from "../Tiles/getImage";
import noPersonPosterIcon from "../images/noPersonPosterIcon.svg";

export const PeoplePage = () => {
  const people = useSelector(selectors.selectResults);
  const status = useSelector(selectors.selectStatus);
  const pagination = useSelector(selectors.selectPagination);
  const query = useSelector(selectors.selectQuery);

  useFetchDataOnChange({ fetchAction: actions.fetch });

  return (
    <ListPage
      people
      title={
        query ? (
          <>
            Search results for <q>{query}</q>
            {pagination?.totalResults && ` (${pagination.totalResults})`}
          </>
        ) : (
          "Popular People"
        )
      }
      status={status}
      page={pagination?.page}
      totalPages={pagination?.totalPages}
    >
      {people?.map((person) => (
        <StyledNavLink
          key={person.id}
          to={`${LOCAL_ROUTES.people}${LOCAL_ROUTES.details(person.id)}`}
        >
          <GeneralTile
            image={getImage({ path: person.profile_path, size: "medium" })}
            imagePlaceholder={noPersonPosterIcon}
            title={person.name}
            people
          />
        </StyledNavLink>
      ))}
    </ListPage>
  );
};
