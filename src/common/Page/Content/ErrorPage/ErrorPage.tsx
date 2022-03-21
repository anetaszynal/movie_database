import React from 'react'
import { LOCAL_ROUTES } from '../../../../lib/utils'
import dangerImage from './Danger.png'
import { Title } from '../../../commonStyles'
import { AdditionalInfo, Image, StyledNavLink, Wrapper } from './styled'

export const ErrorPage = () => {
  return (
    <Wrapper>
      <Image src = {dangerImage} alt = {''}/>
      <Title>Ooops! Something went wrong…</Title>
      <AdditionalInfo>Please check your network connection <br/> and try again</AdditionalInfo>
      <StyledNavLink to = {LOCAL_ROUTES.movies}>Back to home page</StyledNavLink>
    </Wrapper>
  )
}