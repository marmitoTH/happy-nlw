import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: .8rem 1.2rem;
`

export const Button = styled.a`
  width: 4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #15C3D6;
  box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
  border-radius: 1.2rem;
  transition: background ease 200ms;

  &:hover {
    background: #17D6EB;
  }
`