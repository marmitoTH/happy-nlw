import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  margin: 1rem 0;

  &:first-child {
    border-radius: 2rem;
  }
`

export const Button = styled.button`
  width: 100%;
  display: block;
  height: 6.4rem;
  color: #5C8599;
  font-size: 1.9rem;
  font-weight: 600;
  cursor: pointer;
  background: #F5F8FA;
  border: 1px solid #D3E2E5;
`

export const On = styled(Button)`
  border-radius: 2rem 0 0 2rem;
  border-right: none;

  ${props => props.selected && css`
    color: #37C77F;
    background: #EDFFF6;
    border: 1px solid #A1E9C5;
  `}
`

export const Off = styled(Button)`
  border-radius: 0 2rem 2rem 0;
  border-left: none;

  ${props => props.selected && css`
    color: #FF669D;
    background: #FCF0F4;
    border: 1px solid #FFBCD4;
  `}
`