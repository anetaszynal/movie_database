import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actions, selectors } from "./movieDetailsSlice";
import { useParams } from "react-router";
import { getFullDate, getYear, STATUS } from "../../lib/utils";
import { DetailTile } from "../Tiles/DetailTile";
import { StyledNavLink, Container } from "../common/commonStyles";
import { TilesList } from "../TilesList";
import { LOCAL_ROUTES } from "../../lib/utils";
import { GeneralTile } from "../Tiles/GeneralTile";
import { Backdrop } from "./Backdrop";
import { getImage } from "../Tiles/getImage";
import noMoviePosterIcon from "../images/noMoviePosterIcon.svg";
import noPersonPosterIcon from "../images/noPersonPosterIcon.svg";

export const MovieDetails = () => {
  const details = useSelector(selectors.selectDetails);
  const cast = useSelector(selectors.selectCast);
  const crew = useSelector(selectors.selectCrew);
  const status = useSelector(selectors.selectStatus);
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(actions.fetch(id));
  }, [dispatch, id]);

  return (
    status === STATUS.success && (
      <>
        {details.backdrop_path && (
          <Backdrop
            image={getImage({ path: details.backdrop_path, size: "big" })}
            title={details.title}
            votes={details.vote_count}
            averageVotes={details.vote_average}
          />
        )}
        <Container>
          <>
            <DetailTile
              detail
              image={getImage({ path: details.poster_path, size: "medium" })}
              imagePlaceholder={noMoviePosterIcon}
              title={details.title}
              caption={getYear(details.release_date)}
              firstInfoName="Production:"
              secondInfoName="Release date:"
              firstInfo={details.production_countries?.map(({ name }) => name)}
              secondInfo={getFullDate(details.release_date)}
              genres={details.genres?.map(({ name }) => name)}
              votes={details.vote_count}
              averageVotes={details.vote_average}
              description={details.overview}
            />
            {cast.length > 0 && (
              <TilesList people title="Cast">
                {cast.map((person) => (
                  <StyledNavLink
                    key={person.credit_id}
                    to={`${LOCAL_ROUTES.people}${LOCAL_ROUTES.details(
                      person.id
                    )}`}
                  >
                    <GeneralTile
                      image={getImage({
                        path: person.profile_path,
                        size: "medium",
                      })}
                      imagePlaceholder={noPersonPosterIcon}
                      title={person.name}
                      caption={person.character}
                      people
                    />
                  </StyledNavLink>
                ))}
              </TilesList>
            )}
            {crew.length > 0 && (
              <TilesList people title="Crew">
                {crew.map((person) => (
                  <StyledNavLink
                    key={person.credit_id}
                    to={`${LOCAL_ROUTES.people}${LOCAL_ROUTES.details(
                      person.id
                    )}`}
                  >
                    <GeneralTile
                      image={getImage({
                        path: person.profile_path,
                        size: "medium",
                      })}
                      imagePlaceholder={noPersonPosterIcon}
                      title={person.name}
                      caption={person.job}
                      people
                    />
                  </StyledNavLink>
                ))}
              </TilesList>
            )}
          </>
        </Container>
      </>
    )
  );
};
