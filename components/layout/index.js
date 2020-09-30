import styled from '@emotion/styled'

export const Main = styled.main`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Row = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  
  &.centered {
    justify-content: center;
    align-items: center;
  }
`
