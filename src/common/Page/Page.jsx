import React from 'react'
import { Content } from './Content'
import { Container, Title } from '../commonStyles'

export const Page = ({ status, children, title }) => (
  <Container>
    <Title>{title}</Title>
    <Content status = {status}>
      {children}
    </Content>
  </Container>
)
