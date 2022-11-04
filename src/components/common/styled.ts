import styled from 'styled-components'

export const theme = {
    beige: "#F8F3ED",
    darkBiege: "#F2E4D0",
    brown: "#6b471c",
    orange: "#ff8000",
    gray: "#78695e"
}

export const flex: string = `
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const Container = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 16px;
`

export const ContainerContent = styled.div`
    min-height: calc(100vh - 240px);
`

export const Label = styled.h2`
    font-size: 42px;
    color: #6b471c;
    margin-bottom: 60px;
    text-align: center;
    text-shadow: 1px 1px 1px gray;
`