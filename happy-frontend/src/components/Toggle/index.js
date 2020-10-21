import React, { useState } from 'react'

import { Container, On, Off } from './styles'

export default function Toggle({ onChange = () => { } }) {
  const [value, setValue] = useState(true)

  function updateValue(newValue) {
    setValue(newValue)
    onChange(newValue)
  }

  return (
    <Container>
      <On
        type='button'
        title='Sim'
        selected={value}
        onClick={() => { updateValue(true) }}
      >
        Sim
      </On>
      <Off
        type='button'
        title='Não'
        selected={!value}
        onClick={() => { updateValue(false) }}
      >
        Não
      </Off>
    </Container>
  )
}