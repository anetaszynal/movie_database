import React from 'react'
import { Arrow, ButtonTitle, ChangePageButton, Number, Text, Wrapper } from './styled'

export const Pagination = () => {

  return (
    <Wrapper>
      <ChangePageButton>
        <Arrow back/>
        <Arrow hidden back/>
        <ButtonTitle>First</ButtonTitle>
      </ChangePageButton>
      <ChangePageButton>
        <Arrow back/>
        <ButtonTitle>Previous</ButtonTitle>
      </ChangePageButton>
      <Text>Page <Number>1</Number> of <Number>467</Number></Text>
      <ChangePageButton>
        <ButtonTitle>Next</ButtonTitle>
        <Arrow/>
      </ChangePageButton>
      <ChangePageButton>
        <ButtonTitle>Last</ButtonTitle>
        <Arrow/>
        <Arrow hidden/>
      </ChangePageButton>
    </Wrapper>
  )
}