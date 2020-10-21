import React from 'react'

import arrow from '../../assets/images/arrow-white.svg'

import { Container, Button } from './styles'

export default function Popup({ title, href }) {
  return (
    <Container>
      <p>{title}</p>
      <Button href={href}>
        <img src={arrow} alt='Botão do popup' />
      </Button>
    </Container>
  )
}