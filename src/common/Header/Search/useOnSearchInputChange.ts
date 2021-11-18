import React, { SetStateAction, useRef } from "react";
import { useHistory } from "react-router-dom";
import { buildQueryString } from "../../buildQueryString";
import { LOCAL_ROUTES } from "../../../lib/utils";

export const useOnSearchInputChange = (setInputValue:React.Dispatch<SetStateAction<string>>) => {
  const timeoutRef = useRef<NodeJS.Timeout|null>();
  const history = useHistory();

  return ({ newValue, isSearchForPeople }: {newValue: string, isSearchForPeople: boolean}) => {
    if(timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setInputValue(newValue);

    timeoutRef.current = setTimeout(() => {
      history.push({
        pathname: isSearchForPeople ? LOCAL_ROUTES.people : LOCAL_ROUTES.movies,
        search: buildQueryString({ query: newValue || undefined }),
      });
    }, 200);
  };
};
