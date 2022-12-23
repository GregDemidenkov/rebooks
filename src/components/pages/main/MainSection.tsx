import React from "react"
import { Link } from "react-router-dom"

import styled from 'styled-components'
import { theme, Container, flex } from "components/common/styled"

type MainSectionType = {
    mainBestseller: string | undefined,
    id: number
}

const Section = styled.section`
    padding: 160px 0 0;
    @media(max-width: 750px) {
        padding: 220px 0 90px;
    }
`

const SectionContent = styled.section`
    ${flex};
    justify-content: space-around;
    padding-bottom: 80px;
    @media(max-width: 750px) {
        flex-direction: column;
    }
`

const Info = styled.div`
    ${flex};
    flex-direction: column;
    width: 70%;
    @media(max-width: 1000px) {
        width: 50%;
    }
    @media(max-width: 750px) {
        width: 100%;
    }
`

const Slogan = styled.h2`
    text-align: center;
    font-size: 52px;
    color: ${theme.brown};
    span {
        color: ${theme.orange};
    }
    @media(max-width: 1100px) {
        font-size: 28px;
    }
`

const Text = styled.p`
    font-size: 24px;
    text-align: center;
    color: ${theme.orange};
    padding: 8px 10px;
    border-radius: 7px;
    @media(max-width: 1100px) {
        font-size: 16px;
    }
`

const Bestseller = styled(Link)`
    position: relative;
    width: 20%;
    cursor: pointer;
    @media(max-width: 1000px) {
        width: 30%;
    }
    @media(max-width: 750px) {
        display: none;
    }
`

const BestsellerInfo = styled.h3`
    font-size: 20px;
    color: ${theme.beige};
    margin-bottom: 5px;
    position: absolute;
    bottom: -1px;
    text-align: center;
    background-color: ${theme.brown};
    padding: 5px 0;
    width: 100%;
    @media(max-width: 1220px) {
        font-size: 18px;
    }
    @media(max-width: 1100px) {
        font-size: 12px;
    }
`

const Img = styled.img`
    width: 100%;
    height: auto;
    box-shadow: 0px 35px 44px -11px rgba(107, 71, 28, 0.83);
    border-radius: 8px;
`

export const MainSection: React.FC<MainSectionType> = ({mainBestseller, id}) => {

    return (
        <Section>
            <Container>
                <SectionContent>
                    <Info>
                        <Slogan><span>ReBooks</span> — лучший интернет-магазин книг в России</Slogan>
                        <Text>Мировые авторы, лучшие редакции и низкие цены <span>только у нас!</span></Text>
                    </Info>
                    <Bestseller to = {`book/${id}`} id = {id}>
                        <Img src={mainBestseller} />
                        <BestsellerInfo>Главный бестселлер месяца</BestsellerInfo>
                    </Bestseller>
                </SectionContent>
            </Container>
        </Section>
    )
}