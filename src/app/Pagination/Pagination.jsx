import React from "react";
import {
  Arrow,
  ButtonTitle,
  ChangePageButton,
  Number,
  Text,
  Wrapper,
} from "./styled";
import { useGoToPage } from "./useGoToPage";

export const Pagination = ({ page, totalPages }) => {
  const isFirstPage = page === 1;
  const isLastPage = page === totalPages;
  const goToPage = useGoToPage();

  return (
    <Wrapper>
      <ChangePageButton onClick={() => goToPage(1)} disabled={isFirstPage}>
        <Arrow disabled={isFirstPage} back={true} />
        <Arrow disabled={isFirstPage} hidden back={true} />
        <ButtonTitle>First</ButtonTitle>
      </ChangePageButton>
      <ChangePageButton
        onClick={() => goToPage(page - 1)}
        disabled={isFirstPage}
      >
        <Arrow disabled={isFirstPage} back={true} />
        <ButtonTitle>Previous</ButtonTitle>
      </ChangePageButton>
      <Text>
        Page <Number>{page}</Number> of <Number>{totalPages}</Number>
      </Text>
      <ChangePageButton
        onClick={() => goToPage(page + 1)}
        disabled={isLastPage}
      >
        <ButtonTitle>Next</ButtonTitle>
        <Arrow disabled={isLastPage} />
      </ChangePageButton>
      <ChangePageButton
        onClick={() => goToPage(totalPages)}
        disabled={isLastPage}
      >
        <ButtonTitle>Last</ButtonTitle>
        <Arrow disabled={isLastPage} />
        <Arrow disabled={isLastPage} hidden />
      </ChangePageButton>
    </Wrapper>
  );
};
