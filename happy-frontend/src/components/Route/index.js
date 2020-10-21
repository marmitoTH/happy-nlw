import React from 'react'
import Map from '../Map'

import { Container } from './styles'

export default function Route({ element }) {
  const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
  }

  function getLatLng() {
    return `${element?.latitude},${element?.longitude}`
  }

  return (
    <Container>
      <Map
        bindPopup={false}
        elements={[element]}
        center={[element.latitude, element.longitude]}
        options={options}
      />
      <footer>
        <a
          href={`https://www.google.com.br/maps/dir//${getLatLng()}/@${getLatLng()},16z`}
          target='_blank'
          rel='noopener noreferrer'
          title='Link para as rotas'
        >
          <strong>Ver rotas no Google Maps</strong>
        </a>
      </footer>
    </Container>
  )
}