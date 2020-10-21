import React from 'react'

import icon from '../../assets/images/logo-icon.png'
import arrowBack from '../../assets/images/arrow-back.svg'

import { Container, Button } from './styles'

export default function Sidebar() {
  return (
    <Container>
      <img src={icon} alt='Ícone da Happy' />
      <Button href='/buscar' title='Voltar para o mapa'>
        <img src={arrowBack} alt='Ícone do botão voltar' />
      </Button>
    </Container>
  )
}