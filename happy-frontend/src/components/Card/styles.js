import styled, { css } from 'styled-components'

export const Container = styled.div`
  height: 17.6rem;
  border-radius: 2rem;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 3rem;

  img {
    margin-bottom: 2.5rem;
  }

  small {
    width: 12rem;
    line-height: 1.54;
  }
  
  ${props => props.type === 'clock' && css`
    border: 1px solid #B3DAE2;
    background: linear-gradient(149.97deg, #E6F7FB 8.13%, #FFFFFF 92.67%);
  `}

  ${props => props.type === 'info' && css`
    color: #37C77F;
    border: 1px solid #A1E9C5;
    background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
  `}

  ${props => props.type === 'info-red' && css`
    color: #FF669D;
    border: 1px solid #FFBCD4;
    background: linear-gradient(154.16deg, #FCF0F4 7.85%, #FFFFFF 91.03%);
  `}

  @media (min-width: 720px) {
    width: 37.5%;
  }
`