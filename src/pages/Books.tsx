import React, {useEffect} from "react"

import styled from 'styled-components'
import { theme, Container, ContainerContent } from "components/common/styled"

import { useAppDispatch, useAppSelector } from "redux/store"
import { getBooks } from "redux/books/booksSlice"

import { SlideBar } from "components/pages/books/slidebar/SlideBar"
import { BooksCatalog } from "components/pages/books/BooksCatalog"

const Catalog = styled.section`
    display: flex;
`

const PageName = styled.h2`
    font-size: 28px;
    color: ${theme.brown};
    margin: 137px 0 20px;
`

export const Books: React.FC = () => {
    const {list, loading} = useAppSelector((state) => state.books)

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(getBooks())
    }, [])

    console.log(list);
    
    return(
        <Container>
            <ContainerContent>
                <PageName>Книги</PageName>
                <Catalog>
                    <SlideBar />
                    <BooksCatalog />
                </Catalog>
            </ContainerContent>
        </Container>
    )
}