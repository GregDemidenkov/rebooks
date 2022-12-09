import React, {useEffect} from "react"
import { useNavigate } from "react-router-dom"

import styled from 'styled-components'
import { Container, ContainerContent, PageName } from "components/common/styled"

import { useAppDispatch, useAppSelector } from "redux/store"
import { getBooks, setCategory, setSort, setPage } from "redux/books/booksSlice"

import { SlideBar } from "components/pages/books/slidebar/SlideBar"
import { BooksCatalog } from "components/pages/books/BooksCatalog"

const Catalog = styled.section`
    display: flex;
`

export const Books: React.FC = () => {
    const {list, category, sort, page} = useAppSelector((state) => state.books)

    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(getBooks({category, sort, page}))
        window.scrollTo(0, 0);
        document.title = "Книги"
    }, [category, sort, page])

    const onChangeCategory = (category: string) => {
        window.scrollTo(0, 0);
        navigate(`/books/${category}`)
        dispatch(setCategory(category))
        if (category === "Все категории") {
            dispatch(setPage(1))
        }

    };

    const onChangeSort = (sort: string) => {
        dispatch(setSort(sort))
        dispatch(setPage(1))
    };

    const onChangePage = (page: number) => {
        window.scrollTo(0, 0);
        dispatch(setPage(page))
    };
    
    
    return (
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
                        onChangePage = {onChangePage}
                    />
                </Catalog>
            </ContainerContent>
        </Container>
    )
}