import React, {useEffect} from "react"
import { useParams } from "react-router-dom";

import styled from 'styled-components'
import { theme, Container, ContainerContent } from "components/common/styled";

import { useAppDispatch, useAppSelector } from "redux/store"
import { getBookById } from "redux/books/bookPageSlice"

import { ImagesBlock } from "components/pages/bookPage/secondSection/ImagesBlock";
import { RaitingLine } from "components/pages/bookPage/firstSection/RaitingLine";
import { InfoBlock } from "components/pages/bookPage/secondSection/InfoBlock";
import { BuyBlock } from "components/pages/bookPage/secondSection/BuyBlock";
import { AnnotationBlock } from "components/pages/bookPage/thridSection/AnnotationBlock";
import { CharacteristicsBlock } from "components/pages/bookPage/thridSection/CharacteristicsBlock";


const FirstSection = styled.section`
    display: flex;
    flex-direction: column;
    margin-top: 137px;
    @media(max-width: 1300px) {
        margin-top: 100px;
    }
`
const HeaderBook = styled.h2`
    font-size: 28px;
    color: ${theme.brown};
    margin-bottom: 20px;
`

const SecondSection = styled.section`
    display: flex;
`

const ThridSection = styled.section`
    display: flex;
    flex-direction: column;
`

export const BookPage: React.FC = () => {    
    
    const { id } = useParams()

    const {book, loaded} = useAppSelector((state) => state.book)

    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(getBookById(id))
        window.scrollTo(0, 0);
    }, [id])
    
    useEffect(() => {
        document.title = `${book?.name !== undefined ? book?.name : "Книга"}, ${book?.author !== undefined ? book?.author : "Автор"}`
    }, [loaded])

    return (
       <Container>
            <ContainerContent>
                <FirstSection>
                    <HeaderBook>{book ? book.author || "" : ""}: {book ? book.name || "" : ""}</HeaderBook>
                    {
                        book &&
                        <RaitingLine 
                            raitingReBooks = {book.raiting.raitingReBooks}
                            countReBoks= {book.raiting.countReBoks}
                            raitingLiveLib= {book.raiting.raitingLiveLib}
                            countLiveLib= {book.raiting.countLiveLib}
                            countBuy = {book.raiting.countBuy} 
                        />
                    }
                </FirstSection>
                <SecondSection>
                    <ImagesBlock  
                        front = {book ? book.imgUrlFront || "" : ""}
                        back = {book ? book.imgUrlBack || "" : ""} 
                    />
                    <InfoBlock 
                        contentObj = {book ? book.content || null : null}
                        characteristicsObj = {book ? book.characteristics || null : null}
                        author = {book ? book.author || "" : ""}
                    />
                    {
                        book &&
                        <BuyBlock book = {book} priceObj = {book.info}/>
                    }
                </SecondSection>
                <ThridSection>
                    <AnnotationBlock 
                        content = {book ? book.content : null}
                    />
                    <CharacteristicsBlock
                        author = {book ? book.author || "" : ""}
                        characteristics = {book ? book.characteristics || null : null}
                    />
                </ThridSection>
            </ContainerContent>
       </Container>
    )
}