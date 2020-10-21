import React, { useEffect, useRef } from 'react'
import ReactDOMServer from 'react-dom/server'
import { Map as Minimap, TileLayer } from 'react-leaflet'
import Leaflet from 'leaflet'

import Popup from '../Popup'

import mapMarker from '../../assets/images/map-marker.svg'

import './styles.css'

export default function Map({
  elements,
  center = [-5.087930, -42.800980],
  zoom = 15,
  bindPopup = true,
  options = {
    dragging: true,
    touchZoom: true,
    doubleClickZoom: true,
    scrollWheelZoom: true,
    zoomControl: true
  },
  onClick = () => { }
}) {
  const mapRef = useRef()

  const icon = Leaflet.icon({
    iconUrl: mapMarker,
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
  })

  useEffect(() => {
    if (!elements) {
      return
    }

    const map = mapRef.current.leafletElement

    map.eachLayer(function (layer) {
      if (!layer.options.url) {
        map.removeLayer(layer);
      }
    });

    elements.forEach(data => {
      const marker = Leaflet.marker([data.latitude, data.longitude], { icon })

      if (bindPopup) {
        const popup = Leaflet.popup({
          closeButton: false,
          className: 'map-popup',
          minWidth: 240,
          minHeight: 240
        }).setContent(ReactDOMServer.renderToString(
          <Popup title={data.name} href={`/visitar/${data.id}`} />
        ))

        marker.bindPopup(popup)
      }

      marker.addTo(map)
    });
  }, [elements, icon, bindPopup])

  return (
    <Minimap
      ref={mapRef}
      center={center}
      zoom={zoom}
      dragging={options.dragging}
      touchZoom={options.touchZoom}
      doubleClickZoom={options.doubleClickZoom}
      scrollWheelZoom={options.scrollWheelZoom}
      zoomControl={options.zoomControl}
      onclick={onClick}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
    </Minimap>
  )
}