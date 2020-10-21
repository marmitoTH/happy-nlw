import { keyframes, css } from 'styled-components'

const up = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const right = keyframes`
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translateX(0);
  }
`

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export function moveUp(delay = 0) {
  return css`
    animation: ${up} 300ms ${delay}ms backwards;
  `
}

export function moveRight(delay = 0) {
  return css`
    animation: ${right} 300ms ${delay}ms backwards;
  `
}

export function fadeIn(delay = 0) {
  return css`
    animation: ${fade} 500ms ${delay}ms backwards;
  `
}