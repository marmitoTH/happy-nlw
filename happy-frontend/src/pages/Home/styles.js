import styled from 'styled-components'
import { moveUp, fadeIn } from '../../assets/styles/animations'

import background from '../../assets/images/bg.svg'

export const Page = styled.div`
  height: 100vh;
  color: white;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  padding: clamp(2rem, 4vw, 3rem);
  text-align: center;

  @media (min-width: 720px) {
    width: min(90%, 120rem);
    text-align: left;
    background: url(${background}) 80% no-repeat;
    background-size: clamp(2rem, 45vw, 50rem);
    ${fadeIn()}
  }
`

export const Header = styled.header`
  img {
    ${moveUp()};
  }

  @media (min-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const Location = styled.div`
  font-size: 2.4rem;
  line-height: 1.4;
  ${moveUp(50)};

  @media (min-width: 720px) {
    text-align: right;
  }
`

export const Title = styled.h1`
  margin: 6vh 0;
  line-height: .88;
  font-size: clamp(3rem, 9vw, 8rem);
  ${moveUp(100)};

  @media (min-width: 720px) {
    width: 25rem;
    margin: clamp(1rem, 14vh, 14rem) 0 3vh 0;
  }
`

export const Footer = styled.footer`
  line-height: 1.4;
  font-size: clamp(1.2rem, 5vw, 2.4rem);

  p {
    margin-bottom: 2rem;
    ${moveUp(150)};
  }

  @media (min-width: 720px) {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      width: 35rem;
    }
  }
`

export const Button = styled.a`
  width: 8rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  margin: auto;
  border-radius: 3rem;
  background: #FFD666;
  transition: background ease 200ms;
  ${moveUp(200)};

  &:hover {
    background: #96FEFF;
  }

  @media (min-width: 720px) {
    margin: initial;
  }
`