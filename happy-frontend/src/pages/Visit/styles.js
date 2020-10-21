import styled from 'styled-components'
import { fadeIn } from '../../assets/styles/animations'

export const Page = styled.div`
  display: flex;
  flex-direction: column;

  img {
    object-fit: cover;
  }

  @media (min-width: 720px) {
    flex-direction: row;
  }
`

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3.2rem 0;

  @media (min-width: 720px) {
    padding-left: 9rem;
  }
`

export const Container = styled.div`
  width: min(90%, 70.8rem);
  background: white;
  border-radius: 2rem;
  border: 1px solid #D3E2E5;
  ${fadeIn(200)};

  .main-image {
    width: 100%;
    height: 33.6rem;
    border-radius: 2rem 2rem 0 0;
    transition: all ease 200ms;
  }
`

export const Content = styled.div`
  padding: clamp(2rem, 6vw, 6rem);
  box-sizing: border-box;
  
  h1 {
    font-size: clamp(2.4rem, 5vw, 3.8rem);
  }

  h2 {
    font-size: clamp(2rem, 5vw, 2.7rem);
  }

  p {
    margin: 2rem 0;
    line-height: 1.54;
    text-align: justify;
    font-size: clamp(1.2rem, 5vw, 1.8rem);
  }

  hr {
    margin: 5rem 0;
    border-top: 1px solid #D3E2E6;
  }
`

export const Gallery = styled.div`
  width: 100%;
  height: 9.4rem;
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  img {
    height: 100%;
    width: 9.4rem;
    cursor: pointer;
    border-radius: 2rem;
  }

  img + img {
    margin-left: 2rem;
  }
`

export const Cards = styled.div`
  height: 38rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3rem 0 6rem 0;

  @media (min-width: 720px) {
    height: auto;
    flex-direction: row;
  }
`

export const WppButton = styled.a`
  height: 6.4rem;
  border-radius: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #3CDC8C;
  transition: background ease 200ms;

  img {
    margin-right: 1rem;
  }

  &:hover {
    background: #3EE08F;
  }
`