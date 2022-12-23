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
    font-size: 38px;
    color: #6b471c;
    margin-bottom: 60px;
    text-align: center;
    @media(max-width: 1000px) {
        font-size: 32px;
        margin-bottom: 30px;
    }
    @media(max-width: 700px) {
        font-size: 26px;
    }
`

export const PageName = styled.h2`
    font-size: 38px;
    color: ${theme.brown};
    margin: 137px 0 20px;
    @media(max-width: 1300px) {
        margin: 100px 0 20px;
        font-size: 30px;
    }
    @media(max-width: 940px) {
        font-size: 24px;
    }
`

export const SectionName = styled.h3`
    flex-basis: 100%;
    text-align: center;
    font-size: 28px;
    color: ${theme.brown};
    margin: 20px 0;
    @media(max-width: 1300px) {
        font-size: 24px;
    }
    @media(max-width: 940px) {
        font-size: 18px;
        margin: 10px 0;
    }
`

export const AllBooks = styled.section`
    ${flex};
    justify-content: flex-start;
    flex-wrap: wrap;
    margin-top: 30px;
    @media(max-width: 940px) {
        justify-content: space-around;
        margin-top: 10px;
    }
`