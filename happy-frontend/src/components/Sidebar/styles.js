import styled from 'styled-components'
import { moveRight } from '../../assets/styles/animations'

export const Container = styled.div`
  width: 100%;
  height: clamp(7.1rem, 9.6vw, 9.6rem);
  background: #15C3D6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3.2rem;
  box-sizing: border-box;
  ${moveRight()};

  img {
    width: 4.8rem;
  }

  @media (min-width: 720px) {
    height: 100vh;
    width: 9.6rem;
    flex-direction: column;
    padding: 3.2rem 0;
    position: fixed;
  }
`

export const Button = styled.a`
  width: 4.8rem;
  height: 4.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #12AFCB;
  border-radius: 16px;
  transition: background ease 200ms;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }

  &:hover {
    background: #17D6EB;
  }
`
