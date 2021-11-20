import React, { FC } from 'react'
import { ErrorPage } from './ErrorPage'
import { STATUS } from '../../../lib/utils'
import { Loader } from './Loading'

export const Content:FC<{status: STATUS}> = ({ status, children }) => {
  switch (status) {
    case STATUS.initial:
      return null
    case STATUS.loading:
      return <Loader/>
    case STATUS.success:
      return <>{children}</>
    case STATUS.error:
      return <ErrorPage/>
    default:
      throw new Error('Incorrect Status')
  }
}