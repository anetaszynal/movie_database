import React from "react";
import { useSelector } from "react-redux";
import { useFetchDataOnChange } from "../useFetchDataOnChange";
import { actions, selectors } from "./topRatedMoviesSlice";
import { selectGenres } from "../genre/genreSlice";
import { GeneralTile } from "../Tiles/GeneralTile";
import { getYear, LOCAL_ROUTES } from "../../lib/utils";
import { ListPage } from "../topRatedList/ListPage";
import { StyledNavLink } from "../common/commonStyles";
import { getImage } from "../Tiles/getImage";
import noMoviePosterIcon from "../images/noMoviePosterIcon.svg";

export const MoviesPage = () => {
  const movies = useSelector(selectors.selectResults);
  const status = useSelector(selectors.selectStatus);
  const pagination = useSelector(selectors.selectPagination);
  const genres = useSelector(selectGenres);

  useFetchDataOnChange({ fetchAction: actions.fetch });

  return (
    <ListPage
      title="Top rated Movies"
      status={status}
      page={pagination?.page}
      totalPages={pagination?.totalPages}
    >
      {movies?.map((movie) => (
        <StyledNavLink
          key={movie.id}
          to={`${LOCAL_ROUTES.movies}${LOCAL_ROUTES.details(movie.id)}`}
        >
          <GeneralTile
            image={getImage({ path: movie.poster_path, size: "medium" })}
            imagePlaceholder={noMoviePosterIcon}
            genres={movie?.genre_ids.map((id) => genres[id])}
            title={movie.title}
            caption={getYear(movie.release_date)}
            averageVotes={movie.vote_average}
            votes={movie.vote_count}
          />
        </StyledNavLink>
      ))}
    </ListPage>
  );
};
