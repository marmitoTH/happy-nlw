import React, { useEffect, useState } from 'react'
import Happy from '../../services/Happy'

import Map from '../../components/Map'

import icon from '../../assets/images/logo-icon.png'
import plus from '../../assets/images/plus.svg'

import { Page, Sidebar, Main, Location, Button } from './styles'

export default function Search() {
  const [institutions, setInstitutions] = useState([])

  useEffect(() => {
    const loadInstitutions = async () => {
      const institutions = await Happy.getAllInstitutions()
      console.log(institutions)
      setInstitutions(institutions)
    }

    loadInstitutions()
  }, [])

  return (
    <Page>
      <Sidebar>
        <Main>
          <img src={icon} alt='Ícone da Happy' />
          <h1>Escolha uma instituição no mapa</h1>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </Main>
        <footer>
          <Location>
            <strong>Teresina</strong>
            <p>Piauí</p>
          </Location>
        </footer>
      </Sidebar>
      <Map elements={institutions} />
      <Button href='/cadastrar' title='Cadastrar nova instituição'>
        <img src={plus} alt='Ícone do botão cadastrar instituição' />
      </Button>
    </Page>
  )
}