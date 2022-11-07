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

export const ButtonBuy = styled.button`
    width: calc(100% - 40px);
    border-radius: 5px;
    background-color: ${theme.orange};
    color: ${theme.beige};
    font-size: 14px;
    cursor: pointer;
    ${(props: {bookCart: boolean}) => props.bookCart &&`
        padding: 10px 0;
        @media(max-width: 1300px) {
            padding: 8px;
            font-size: 9px;
        }
    `};
    ${(props: {bookPage: boolean}) => props.bookPage &&`
        padding: 15px 30px;
        margin: 35px 0 0 20px;
    `};
    :hover {
        background-color: ${theme.orange}99;
    }
`