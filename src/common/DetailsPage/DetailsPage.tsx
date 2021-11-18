import React, { FC } from 'react'
import { STATUS } from '../../lib/utils'
import { Page } from '../Page'

export const DetailsPage:FC<{status:STATUS}> = ({ status, children }) => (
  <Page status = {status} title = ''>
    {children}
  </Page>
)