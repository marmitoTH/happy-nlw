import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Happy from '../../services/Happy'

import Sidebar from '../../components/Sidebar'
import Route from '../../components/Route'
import Card from '../../components/Card'

import wppIcon from '../../assets/images/whatsapp.svg'

import { Page, Main, Container, Content, Gallery, Cards, WppButton } from './styles'

export default function Visit() {
  const [data, setData] = useState()
  const [mainImg, setMainImg] = useState('')
  const { id } = useParams()

  function getWeekendCard() {
    if (data.weekends) {
      return <Card type='info' label='Atendemos fim de semana' />
    }

    return <Card type='info-red' label='Não atendemos fim de semana' />
  }

  useEffect(() => {
    const loadData = async () => {
      const response = await Happy.getInstitutionsById(id)
      setMainImg(response.images[0])
      setData(response)
    }

    loadData()
  }, [id])

  return (
    <Page>
      <Sidebar />
      <Main>
        {data && <Container>
          <img className='main-image' src={mainImg} alt='Imagem principal' />
          <Gallery>
            {data.images.map((image, key) => (
              <img
                key={key}
                src={image}
                alt={data.name}
                onClick={() => setMainImg(image)}
              />
            ))}
          </Gallery>
          <Content>
            <h1>{data.name}</h1>
            <p>{data.about}</p>
            <Route element={data} />
            <hr />
            <h2>Instruções para visita</h2>
            <p>{data.instructions}</p>
            <Cards>
              <Card type='clock' label={data.visitations} />
              {getWeekendCard()}
            </Cards>
            <WppButton
              href={`https://api.whatsapp.com/send?l=pt_BR&phone=${data.whatsapp}`}
              target='_blank'
              rel='noopener noreferrer'
              title='Entrar em contato pelo whatsapp'
            >
              <img src={wppIcon} alt='Whatsapp icon' />
              <strong>Entrar em contato</strong>
            </WppButton>
          </Content>
        </Container>}
      </Main>
    </Page>
  )
}