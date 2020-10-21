import React from 'react'

import clock from '../../assets/images/clock.svg'
import info from '../../assets/images/info.svg'
import infoRed from '../../assets/images/info-red.svg'

import { Container } from './styles'

export default function Card({ type, label }) {
  const icon = {
    'clock': clock,
    'info': info,
    'info-red': infoRed
  }

  return (
    <Container type={type}>
      <img src={icon[type]} alt='Ícone de relógio' />
      <small>{label}</small>
    </Container>
  )
}