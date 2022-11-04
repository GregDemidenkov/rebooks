import React from "react"
import { Link } from "react-router-dom"

import styled from 'styled-components'
import { theme } from "components/common/styled"
import { Container } from "components/common/styled"
import { flex } from "components/common/styled"

import booksBack from 'assets/img/booksBack.png'

type MainSectionType = {
    mainBestseller: string | undefined,
    id: number
}

const Section = styled.section`
    padding: 160px 0 0;
    background-image: url(${booksBack});
    background-repeat: no-repeat;
    background-position: 0 100px;
    background-size: 40%;
`

const SectionContent = styled.section`
    ${flex};
    justify-content: space-around;
    padding-bottom: 80px;
`

const Info = styled.div`
    ${flex};
    flex-direction: column;
    height: 200px;
    width: 700px;
`

const Slogan = styled.h2`
    text-align: center;
    font-size: 52px;
    color: ${theme.brown};
    text-shadow: 1px 1px 1px black;
`

const Text = styled.p`
    font-size: 24px;
    color: ${theme.beige};
    background-color: ${theme.brown};
    padding: 8px 10px;
    border-radius: 7px;
`

const Bestseller = styled(Link)`
    position: relative;
    width: 20%;
    cursor: pointer;
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
`

const Img = styled.img`
    width: 100%;
    height: auto;
    box-shadow: 0px 35px 44px -11px rgba(107, 71, 28, 0.83);
`

export const MainSection: React.FC<MainSectionType> = ({mainBestseller, id}) => {

    return (
        <Section>
            <Container>
                <SectionContent>
                    <Info>
                        <Slogan>ReBooks — лучший интернет-магазин книг в России</Slogan>
                        <Text>Мировые авторы, лучшие редакции и низкие цены <span>только у нас!</span></Text>
                    </Info>
                    <Bestseller to = {`book/${id}`} id = {id}>
                        <Img src={mainBestseller} alt="" />
                        <BestsellerInfo>Главный бестселлер месяца</BestsellerInfo>
                    </Bestseller>
                </SectionContent>
            </Container>
        </Section>
    )
}