import React from "react";
import { Pagination } from "../Pagination";
import { STATUS } from "../../lib/utils";
import { Container } from "../common/commonStyles";
import { TilesList } from "../TilesList";

export const ListPage = ({
  children,
  title,
  status,
  page,
  totalPages,
  people,
}) =>
  status === STATUS.success && (
    <>
      <Container>
        <TilesList title={title} people={people} children={children} />
      </Container>
      <Pagination page={page} totalPages={totalPages} />
    </>
  );
