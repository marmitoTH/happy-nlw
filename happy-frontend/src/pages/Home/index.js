import React from 'react'

import logo from '../../assets/images/logo.svg'
import arrow from '../../assets/images/arrow.svg'

import { Page, Container, Header, Location, Footer, Title, Button } from './styles'

export default function Home() {
  return (
    <Page>
      <Container>
        <Header>
          <img src={logo} alt='Logo da Happy' />
          <Location>
            <strong>Teresina</strong>
            <p>Piauí</p>
          </Location>
        </Header>
        <Title>Leve felicidade para o mundo</Title>
        <Footer>
          <p>Visite instituições e mude o dia de muitas crianças.</p>
          <Button href='/buscar' title='Buscar insituições'>
            <img src={arrow} alt='Ícone do botão buscar' />
          </Button>
        </Footer>
      </Container>
    </Page>
  )
}