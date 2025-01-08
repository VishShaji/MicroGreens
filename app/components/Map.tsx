'use client'

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'

export default function Map() {
  return (
    <MapContainer center={[9.795382170286183, 76.35908189867449]} zoom={13} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[9.795382170286183, 76.35908189867449]}>
        <Popup>
          Sproutify <br /> Your luxury microgreens cultivator.
        </Popup>
      </Marker>
    </MapContainer>
  )
}

