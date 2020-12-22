import React from 'react'
import { Page } from '../Page'

export const DetailsPage = ({ status, children }) => (
  <Page status = {status}>
    {children}
  </Page>
)