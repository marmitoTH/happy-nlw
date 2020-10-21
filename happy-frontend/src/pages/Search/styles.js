import styled from 'styled-components'
import { moveUp, moveRight, fadeIn } from '../../assets/styles/animations'

export const Page = styled.div`
  color: white;
  line-height: 1.4;

  .leaflet-container {
    z-index: 0;
    height: 90vh;
  }

  @media (min-width: 720px) {
    display: flex;

    .leaflet-container {
      width: 100%;
      height: 100vh;
      ${fadeIn(200)};
    }
  }
`

export const Sidebar = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: clamp(.1rem, 3vw, 3rem);
  box-sizing: border-box;
  background: linear-gradient(329.54deg, #15B6D6 0%, #15D6D6 100%);
  ${moveRight()};

  @media (min-width: 720px) {
    height: 100vh;
    width: clamp(20rem, 39vw, 39.9rem);
    flex-direction: column;
    align-items: initial;
    padding: 6rem 8rem;
  }
`

export const Main = styled.main`
  width: 100%;

  img {
    float: left;
    margin-right: 1rem;
    width: clamp(2.3rem, 5vw, 6.4rem);
    height: auto;
  }

  h1 {
    line-height: 1.1;
    font-size: clamp(1rem, 4vw, 4rem);
  }

  p {
    font-size: clamp(.8rem, 3vw, 1.8rem);
  }

  @media (min-width: 720px) {
    img {
      float: none;
    }

    h1 {
      margin: 6rem 0 2rem 0;
    }
  }
`

export const Location = styled.div`
  text-align: right;
  font-size: clamp(.8rem, 3vw, 1.8rem);

  @media (min-width: 720px) {
    text-align: left;
  }
`

export const Button = styled.a`
  width: 6.4rem;
  height: 6.4rem;
  position: absolute;
  right: 3rem;
  bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2rem;
  background: #15C3D6;
  transition: background ease 200ms;
  ${moveUp()};

  &:hover {
    background: #17D6EB;
  }
`