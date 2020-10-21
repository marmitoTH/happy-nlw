import styled, { css } from 'styled-components'
import { fadeIn } from '../../assets/styles/animations'

export const Main = styled.main`
  display: flex;
  justify-content: center;
  padding: 3.2rem 0;

  @media (min-width: 720px) {
    padding-left: 9rem;
  }
`

export const Form = styled.form`
  width: min(90%, 70.8rem);
  background: white;
  border-radius: 2rem;
  border: 1px solid #D3E2E5;
  padding: clamp(2rem, 6vw, 6rem);
  box-sizing: border-box;
  ${fadeIn(200)};
`

export const Fieldset = styled.fieldset`
  width: 100%;

  legend {
    width: inherit;
    font-size: clamp(2.4rem, 5vw, 3.2rem);
    font-weight: bold;
    padding-bottom: 2rem;
    border-bottom: 1px solid #D3E2E5;
    margin-bottom: 3.5rem;
  }

  & + & {
    margin-top: 6rem;
  }
`

export const InputBlock = styled.div`
  label {
    color: #8FA7B3;
    font-size: clamp(1.2rem, 5vw, 1.6rem);;
    line-height: 1.5;

    small {
      color: #8FA7B3;
      font-size: clamp(1rem, 3vw, 1.4rem);;
      margin-left: 2.5rem;
    }
  }

  input, textarea {
    width: 100%;
    background: #F5F8FA;
    border: 1px solid #D3E2E5;
    border-radius: 2rem;
    color: #5C8599;
    box-sizing: border-box;
    margin-top: 1rem;

    &::placeholder {
      color: #8FA7B3;
    }

    &:valid {
      border: 1px solid #A1E9C5;
    }

    &display {
      opacity: 0.5;
    }
  }

  input {
    height: 6.4rem;
    padding: 0 1.6rem;
  }

  input + input {
    margin-top: 1rem;
  }

  textarea {
    height: clamp(12rem, 16rem, 24rem);
    padding: 1.6rem;
    line-height: 2.8rem;
    resize: none;
    font-size: 1.8rem;
  }

  & + & {
    margin-top: 2.4rem;
  }
`

export const Route = styled.div`
  height: 29.1rem;
  background: #F5F8FA;
  border-radius: 20px;
  border: 1px solid #DDE3F0;

  .leaflet-container {
    height: 24.3rem;
    border-radius: 2rem;
  }

  footer {
    color: #0089A5;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
    padding-top: 1.5rem;
  }
`

export const UploadField = styled.div`
  position: relative;
`

export const Message = styled.div`
  width: 100%;
  height: 6.4rem;
  border-radius: 2rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  ${props => props.type === 'success' && css`
    color: #37C77F;
    border: 1px solid #A1E9C5;
    background: #EDFFF6;
  `}

  ${props => props.type === 'error' && css`
    color: #FF669D;
    background: #FCF0F4;
    border: 1px solid #FFBCD4;
  `}
`

export const Add = styled.button`
  width: 100%;
  height: 6.4rem;
  background: #F5F8FA;
  border: 1px dashed #96D2F0;
  border-radius: 2rem;
  cursor: pointer;
  margin-top: 1rem;

  &:disabled {
    opacity: 0.5;
  }
`

export const Remove = styled.button`
  width: 3.8rem;
  height: 3.8rem;
  position: absolute;
  background: #FFFFFF;
  border: 1px solid #D3E2E5;
  box-sizing: border-box;
  border-radius: 1rem;
  cursor: pointer;
  bottom: 1.3rem;
  right: 1.3rem;

  &:disabled {
    opacity: 0.5;
  }
`

export const Submit = styled.button`
  width: 100%;
  height: 6.4rem;
  margin-top: 6rem;
  color: white;
  font-weight: bold;
  border-radius: 2rem;
  cursor: pointer;
  background: #37C77F;
  transition: background ease 200ms;

  &:hover {
    background: #3EE08F
  }

  &:disabled {
    opacity: 0.5;
    background: #37C77F;
    cursor: initial;
  }
`