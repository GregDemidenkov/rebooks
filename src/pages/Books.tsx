import React, {useEffect, useState} from "react"

import styled from 'styled-components'
import { theme, Container, ContainerContent } from "components/common/styled"

import { useAppDispatch, useAppSelector } from "redux/store"
import { getBooks, setCategory, setSort } from "redux/books/booksSlice"

import { SlideBar } from "components/pages/books/slidebar/SlideBar"
import { BooksCatalog } from "components/pages/books/BooksCatalog"

const Catalog = styled.section`
    display: flex;
`

const PageName = styled.h2`
    font-size: 28px;
    color: ${theme.brown};
    margin: 137px 0 20px;
    @media(max-width: 1300px) {
        margin: 100px 0 20px;
    }
`

export const Books: React.FC = () => {
    const {list, category, sort} = useAppSelector((state) => state.books)

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(getBooks({category, sort}))
        document.title = "Книги"
    }, [category, sort])

    const onChangeCategory = (category: string) => {
        dispatch(setCategory(category))
    };

    const onChangeSort = (sort: string) => {
        dispatch(setSort(sort))
    };
    
    return(
        <Container>
            <ContainerContent>
                <PageName>Книги: {category}</PageName>
                <Catalog>
                    <SlideBar 
                        onChangeCategory = {onChangeCategory}
                    />
                    <BooksCatalog 
                        books = {list}
                        onChangeSort = {onChangeSort}
                    />
                </Catalog>
            </ContainerContent>
        </Container>
    )
}