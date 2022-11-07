import React, {useEffect} from "react"
import { useParams } from "react-router-dom";

import styled from 'styled-components'
import { theme } from "components/common/styled";
import { Container, ContainerContent } from "components/common/styled";

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
    
    const { id } = useParams<{id?: string}>()

    const {book, loading} = useAppSelector((state) => state.book)

    const dispatch = useAppDispatch()
    
    useEffect(() => {
        dispatch(getBookById(id))
        window.scrollTo(0, 0);
    }, [])
    
    useEffect(() => {
        document.title = `${book?.name !== undefined ? book?.name : "Книга"}, ${book?.author !== undefined ? book?.author : "Автор"}`
    }, [loading])

    return (
       <Container>
            <ContainerContent>
                <FirstSection>
                    <HeaderBook>{book ? book.author || "" : ""}: {book ? book.name || "" : ""}</HeaderBook>
                    {
                        book &&
                        <RaitingLine 
                            raitingReBooks = {book.raiting.raitingReBooks || 0}
                            countReBoks= {book.raiting.countReBoks || 0}
                            raitingLiveLib= {book.raiting.raitingLiveLib || 0}
                            countLiveLib= {book.raiting.countLiveLib || 0}
                            countBuy = {book.raiting.countBuy || 0} 
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
                    <BuyBlock priceObj = {book ? book.info || null : null}/>
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