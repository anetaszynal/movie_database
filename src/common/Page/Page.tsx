import React, { FC } from 'react'
import { Content } from './Content'
import { Container, Title } from '../commonStyles'
import { STATUS } from '../../lib/utils'

export const Page:FC<{status: STATUS, title: string}> = ({ status, children, title }) => (
  <Container>
    <Title>{title}</Title>
    <Content status = {status}>
      {children}
    </Content>
  </Container>
)
