import { Container, TileList, Title } from '../TileList'
import React from 'react'
import { Pagination } from '../Pagination'

export const ListPage = ({ children, title, status, page, totalPages }) => (
  status === 'success' && (
    <>
      <Container>
        <Title>{title}</Title>
        <TileList>
          {children}
        </TileList>
      </Container>
      <Pagination page = {page} totalPages = {totalPages}/>
    </>
  )
)