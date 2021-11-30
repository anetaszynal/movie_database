import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useClearDataOnLeave } from "../useClearDataOnLeave";
import { actions, selectors } from "./movieDetailsSlice";
import { DetailsPage } from "../../common/DetailsPage";
import { PeopleSection } from "./PeopleSection";
import { DetailTile } from "../../common/Tiles/DetailTile";
import { Backdrop } from "./Backdrop";
import { getFullDate, getYear } from "../../lib/utils";
import { getImage, IMAGE_SIZES } from "../../common/Tiles/getImage";
import noMoviePosterIcon from "../images/noMoviePosterIcon.svg";
import { useHowMuchPersonTiles } from "./useHowMuchPersonTiles";

export const MovieDetails = () => {
  const details = useSelector(selectors.selectDetails);
  const cast = useSelector(selectors.selectCast);
  const crew = useSelector(selectors.selectCrew);
  const status = useSelector(selectors.selectStatus);
  const dispatch = useDispatch();
  const { id } = useParams<{id: string}>();
  const tilesNumber = useHowMuchPersonTiles();

  useEffect(() => {
    dispatch(actions.fetch(id));
  }, [dispatch, id]);

  useClearDataOnLeave({ clearAction: actions.clearAction });

  return (
    <>
      {details && details.backdrop_path && (
        <Backdrop
          image={getImage({
            path: details.backdrop_path,
            size: IMAGE_SIZES.big,
          })}
          title={details.title}
          votes={details.vote_count}
          averageVotes={details.vote_average}
        />
      )}
      <DetailsPage status={status}>
        {details && (
          <DetailTile
            detail
            image={getImage({
              path: details.poster_path,
              size: IMAGE_SIZES.medium,
            })}
            imagePlaceholder={noMoviePosterIcon}
            title={details.title}
            caption={getYear(details.release_date)}
            firstInfoName="Production:"
            secondInfoName="Release date:"
            firstInfo={details.production_countries?.map(
              ({ name }: {name: string}) => ` ${name}`
            )}
            secondInfo={getFullDate(details.release_date)}
            genres={details.genres?.map(({ name }: {name: string}) => name)}
            votes={details.vote_count}
            averageVotes={details.vote_average}
            description={details.overview}
          />
        )}
        <PeopleSection
          credits={cast}
          title={"Cast"}
          role={"character"}
          tilesNumber={tilesNumber}
        />
        <PeopleSection
          credits={crew}
          title={"Crew"}
          role={"job"}
          tilesNumber={tilesNumber}
        />
      </DetailsPage>
    </>
  );
};
