import React, {useEffect} from "react"
import { useParams } from "react-router-dom";

import styled from 'styled-components'
import { flex } from "components/common/Header";

import { useAppDispatch, useAppSelector } from "redux/store"
import { getBookById } from "redux/books/bookPageSlice"

import { Container } from "components/common/Header";
import { HeaderBookPage } from "components/pages/bookPage/HederBookPage";
import { ImgPanel } from "components/pages/bookPage/firstSection/ImgPanel";
import { Cover } from "components/pages/bookPage/firstSection/Cover";


const ContainerContent = styled.div`
    min-height: 1000px;
`

const FirstSection = styled.section`
    display: flex;
`

export const BookPage: React.FC = () => {    
    
    const {id} = useParams();

    const {book, loading} = useAppSelector((state) => state.book)

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(getBookById(id))
    }, [])

    return (
       <Container>
            <ContainerContent>
                <HeaderBookPage
                    author = {book ? book.author : ""}
                    name = {book ? book.name : ""}
                />
                <FirstSection>
                    <ImgPanel 
                        front = {book ? book.imgUrlFront : ""}
                        back = {book ? book.imgUrlBack : ""}
                    />
                    <Cover url = {book ? book.imgUrlFront : ""}/>
                </FirstSection>
            </ContainerContent>
       </Container>
    )
}