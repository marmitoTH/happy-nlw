import React, { useState } from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import Happy from '../../services/Happy'

import Sidebar from '../../components/Sidebar'
import Map from '../../components/Map'
import Toggle from '../../components/Toggle'

import addFile from '../../assets/images/add-file.svg'
import redX from '../../assets/images/red-x.svg'

import { Main, Form, Fieldset, InputBlock, Route, UploadField, Message, Add, Remove, Submit } from './styles'

export default function Register() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)
  const [weekends, setWeekends] = useState(true)
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      images: [{ url: '' }]
    }
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'images'
  })

  function updatePosition(event) {
    setLatitude(event.latlng.lat)
    setLongitude(event.latlng.lng)
  }

  function onSubmit(data) {
    const createInstitution = async () => {
      const response = await Happy.createInstitution(data)

      if (!response?.error) {
        reset()
        setMessage({ type: 'success', info: 'Cadastro efetuado com sucesso!' })
      } else {
        setMessage({ type: 'error', info: response?.error })
      }

      setLoading(false)
    }

    if (!loading) {
      setLoading(true)
      createInstitution()
    }
  }

  function onError(error) {
    if (error.latitude || error.longitude) {
      setMessage({ type: 'error', info: 'Selecione um ponto no mapa' })
    } else {
      setMessage({ type: 'error', info: 'Preencha todos os campos corretamente' })
    }
  }

  function addImage() {
    if (fields.length < 6) {
      append({ url: '' })
    }
  }

  return (
    <div>
      <Sidebar />
      <Main>
        <Form onSubmit={handleSubmit(onSubmit, onError)}>
          <Fieldset>
            <legend>Dados</legend>
            <InputBlock>
              <input
                ref={register({
                  required: true,
                  validate: value => value !== '0'
                })}
                name='latitude'
                type='hidden'
                value={latitude}
              />
              <input
                ref={register({
                  required: true,
                  validate: value => value !== '0'
                })}
                name='longitude'
                type='hidden'
                value={longitude}
              />
              <Route>
                <Map
                  elements={[{
                    latitude: latitude,
                    longitude: longitude
                  }]}
                  bindPopup={false}
                  onClick={updatePosition}
                />
                <footer>
                  <p>Clique no mapa para adicionar a localização</p>
                </footer>
              </Route>
            </InputBlock>
            <InputBlock>
              <label>Nome</label>
              <input
                ref={register({
                  required: true,
                  maxLength: 64
                })}
                name='name'
                maxLength='64'
                disabled={loading}
                required
              />
            </InputBlock>
            <InputBlock>
              <label>Sobre <small>Máximo de 255 caracteres</small></label>
              <textarea
                ref={register({
                  required: true,
                  maxLength: 255
                })}
                name='about'
                maxLength='255'
                disabled={loading}
                required
              />
            </InputBlock>
            <InputBlock>
              <label>Número de Whatsapp</label>
              <input
                ref={register({
                  required: true,
                  maxLength: 32
                })}
                name='whatsapp'
                maxLength='32'
                disabled={loading}
                required
              />
            </InputBlock>
            <InputBlock>
              <label>Fotos</label>
              {fields.map((item, index) => (
                <UploadField key={item.id}>
                  <input
                    ref={register({
                      required: true,
                      minLength: 5,
                      maxLength: 255
                    })}
                    name={`images[${index}].url`}
                    defaultValue={`${item.url}`}
                    placeholder='Cole o link da foto aqui'
                    disabled={loading}
                    maxLength='255'
                    required
                  />
                  {fields.length > 1 &&
                    <Remove
                      type='button'
                      disabled={loading}
                      onClick={() => remove(index)}
                    >
                      <img src={redX} alt='Ícone do botão remover foto' />
                    </Remove>
                  }
                </UploadField>
              ))}
              <Add
                type='button'
                title='Adicionar nova imagem'
                onClick={addImage}
                disabled={loading}
              >
                <img src={addFile} alt='Ícone do botão adicionar imagem' />
              </Add>
            </InputBlock>
          </Fieldset>
          <Fieldset>
            <legend>Visitação</legend>
            <InputBlock>
              <label>Instruções</label>
              <textarea
                ref={register({
                  required: true,
                  maxLength: 255
                })}
                name='instructions'
                maxLength='255'
                disabled={loading}
                required
              />
            </InputBlock>
            <InputBlock>
              <label>Horário de visitas</label>
              <input
                ref={register({
                  required: true,
                  maxLength: 25
                })}
                name='visitations'
                maxLength='25'
                disabled={loading}
                required
              />
            </InputBlock>
            <InputBlock>
              <label>Atende fim de semana?</label>
              <input
                ref={register({
                  required: true
                })}
                name='weekends'
                type='hidden'
                value={weekends}
                disabled={loading}
                required
              />
              <Toggle onChange={setWeekends} />
            </InputBlock>
          </Fieldset>
          {message &&
            <Message type={message.type}>{message.info}</Message>
          }
          <Submit
            title='Enviar formulário'
            disabled={loading}
          >
            <p>Confirmar</p>
          </Submit>
        </Form>
      </Main>
    </div>
  )
}