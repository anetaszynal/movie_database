import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getFullDate, getYear, LOCAL_ROUTES, STATUS } from "../../lib/utils";
import { Container, StyledNavLink } from "../common/commonStyles";
import { selectGenres } from "../genre/genreSlice";
import { DetailTile } from "../Tiles/DetailTile";
import { GeneralTile } from "../Tiles/GeneralTile";
import { getImage } from "../Tiles/getImage";
import { TilesList } from "../TilesList";
import { actions, selectors } from "./personDetailsSlice";
import noPersonPosterIcon from "../images/noPersonPosterIcon.svg";
import noMoviePosterIcon from "../images/noMoviePosterIcon.svg";

export const PersonDetailsPage = () => {
  const dispatch = useDispatch();
  const person = useSelector(selectors.selectDetails);
  const cast = useSelector(selectors.selectCast);
  const crew = useSelector(selectors.selectCrew);
  const status = useSelector(selectors.selectStatus);
  const genres = useSelector(selectGenres);
  const { id } = useParams();

  useEffect(() => {
    dispatch(actions.fetch(id));
  }, [id, dispatch]);

  return (
    status === STATUS.success && (
      <Container>
        <DetailTile
          people
          detail
          image={getImage({ path: person.profile_path, size: "medium" })}
          imagePlaceholder={noPersonPosterIcon}
          title={person.name}
          firstInfoName="Date of birth:"
          secondInfoName="Place of birth"
          firstInfo={getFullDate(person.birthday)}
          secondInfo={person.place_of_birth}
          description={person.biography}
        />
        <TilesList title={`Movies - cast (${cast.length})`}>
          {cast?.map((movie) => (
            <StyledNavLink
              key={`${movie.character}-${movie.id}`}
              to={`${LOCAL_ROUTES.movies}${LOCAL_ROUTES.details(movie.id)}`}
            >
              <GeneralTile
                image={getImage({ path: movie.poster_path, size: "medium" })}
                imagePlaceholder={noMoviePosterIcon}
                genres={movie.genre_ids.map((id) => genres[id])}
                title={movie.title}
                caption={`${movie.character} (${getYear(movie.release_date)})`}
                averageVotes={movie.vote_average}
                votes={movie.vote_count}
              />
            </StyledNavLink>
          ))}
        </TilesList>
        <TilesList title={`Movies - crew (${crew.length})`}>
          {crew?.map((movie) => (
            <StyledNavLink
              key={`${movie.job}-${movie.id}`}
              to={`${LOCAL_ROUTES.movies}${LOCAL_ROUTES.details(movie.id)}`}
            >
              <GeneralTile
                image={getImage({ path: movie.poster_path, size: "medium" })}
                imagePlaceholder={noMoviePosterIcon}
                genres={movie?.genre_ids.map((id) => genres[id])}
                title={movie.title}
                caption={`${movie.job} (${getYear(movie.release_date)})`}
                averageVotes={movie.vote_average}
                votes={movie.vote_count}
              />
            </StyledNavLink>
          ))}
        </TilesList>
      </Container>
    )
  );
};
