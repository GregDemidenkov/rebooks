import React, {useEffect, useState} from "react";

import { useAppDispatch, useAppSelector } from "redux/store"
import { getPublisherBooks } from "redux/publishers/publishersBooksSlice"

import { Publisher } from 'redux/types'

import styled from 'styled-components'
import { theme, flex, SectionName, AllBooks } from "components/common/styled";
import { CharacteristicsBlock } from "../bookPage/thridSection/CharacteristicsBlock";
import { BookCart } from "../books/BookCart";

type PublisherSectionType = {
    publisher: Publisher,
    index: number
}

const Section = styled.section`
    flex-basis: 100%;    
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${theme.brown}20;
    padding: 40px 0;
    :last-child {
        border: none;
    }
`

const PublisherInfo = styled.div`
    ${flex};
    flex-direction: column;
    margin-top: 30px;
    @media(max-width: 940px) {
        margin-top: 10px;
    }
    @media(max-width: 700px) {
        flex-direction: column;
    }
`

const Wrapper = styled.div`
    ${flex}; 
    flex-direction: column;   
`

const Img = styled.img`
    width: 300px;
    height: auto;
    @media(max-width: 1300px) {
        width: 200px;
    }
    @media(max-width: 940px) {
        width: 140px;
    }
`

const CharacteristicBlock = styled.ul`
    width: 320px;
    ${flex};
    margin: 10px 0 40px;
`

const Characteristic = styled.li`
    color: ${theme.orange};
    border: 1px solid ${theme.orange};
    border-radius: 5px;
    padding: 5px 10px;
    margin: 10px 0;
`

const About = styled.p`
    flex-basis: 70%;
    text-align: justify;
    font-size: 20px;
    line-height: 38px;
    color: ${theme.gray};
    margin: 0 40px 38px 0;
    :first-letter {
        font-size: 30px;
    }
    @media(max-width: 1300px) {
        font-size: 14px;
        line-height: 26px;
        margin: 0 40px 30px 0;
        :first-letter {
            font-size: 24px;
        }
    }
    @media(max-width: 940px) {
        font-size: 10px;
        line-height: 16px;
        margin: 0 40px 26px 0;
        :first-letter {
            font-size: 16px;
        }
    }
    @media(max-width: 700px) {
        margin: 0;
    }
`

const ShowAllButton = styled.button`
    padding: 10px;
    background-color: transparent;
    color: ${theme.orange};
    border: 1px solid ${theme.orange};
    border-radius: 5px;
    // margin: 0 auto;
    cursor: pointer;
    :hover {
        color: ${theme.orange}99;
        border: 1px solid ${theme.orange}99;
    }
    ${(props: {active: boolean}) => !props.active &&`
        display: none;
    `}
`

export const PublisherSection: React.FC<PublisherSectionType> = ({publisher, index}) => {
    const { publisherBooks } = useAppSelector((state) => state.publishersBook)

    const [booksCount, setBooksCount] = useState(publisherBooks[index] 
        ? publisherBooks[index].books.length > 7 
            ? 7 
            : publisherBooks[index].books.length 
        : 7);
    const [buttonActive, setButtonActive] = useState(true);
    const dispatch = useAppDispatch();
    
    useEffect(() => {
        const publisherName = publisher.name           
        dispatch(getPublisherBooks({publisherName}))
    }, [])

    // useEffect(() => {
    //     setBooksCount(publisherBooks[index] 
    //     ? publisherBooks[index].books.length > 7 
    //         ? 7 
    //         : publisherBooks[index].books.length 
    //     : 7)
    // }, [publisherBooks[index]])

    const showAll = () => {
        setBooksCount(publisherBooks[index].books.length);
        setButtonActive(false)
    }
    
    return (
        <Section>
            <PublisherInfo>
                <Wrapper>
                    <Img src = {publisher.imgLogo}/>
                    <CharacteristicBlock>
                        <Characteristic>Страна: {publisher.country}</Characteristic>
                        <Characteristic>Год основания: {publisher.year}</Characteristic>
                    </CharacteristicBlock>
                </Wrapper>
                <About>{publisher.about}</About>
            </PublisherInfo>
            <SectionName>Все книги</SectionName>
            <AllBooks>
                {
                    publisherBooks.length === 6 &&
                    publisherBooks[index].books.slice(0, booksCount).map( (obj) => (
                        
                        <BookCart 
                            key = {obj.id} 
                            book = {obj}
                        />
                    ))
                }
            </AllBooks>
            {
                publisherBooks.length === 6 && publisherBooks[index].books.length > 7 &&
                <ShowAllButton active = {buttonActive} onClick={() => showAll()}>Все книги</ShowAllButton>
            }
        </Section>
    )
}