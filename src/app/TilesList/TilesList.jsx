import React from "react";
import { Title, TileList } from "./styled";

export const TilesList = ({ title, people, children }) => (
  <>
    <Title>{title}</Title>
    <TileList people={people}>{children}</TileList>
  </>
);
