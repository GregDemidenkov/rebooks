import React, {useEffect} from "react"
import { useNavigate, useParams } from "react-router-dom"

import styled from 'styled-components'
import { Container, ContainerContent, PageName } from "components/common/styled"

import { useAppDispatch, useAppSelector } from "redux/store"
import { getBooks, setCategory, setSort, setPage } from "redux/books/booksSlice"

import { SlideBar } from "components/pages/books/slidebar/SlideBar"
import { BooksCatalog } from "components/pages/books/BooksCatalog"

import { slidebarList } from "components/pages/books/slidebar/slidebar-data-mock"

const Catalog = styled.section`
    display: flex;
`

export const Books: React.FC = () => {
    const {list, category, sort, page} = useAppSelector((state) => state.books)

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const params = useParams();
    
    useEffect(() => {
        const genre = params.genre ? params.genre : ""
        const page = params.page ? Number(params.page) : 1
        const sort = params.sort ? params.sort : ""
        
        dispatch(getBooks({genre, sort, page}))
        dispatch(setCategory(genre))
        dispatch(setSort(sort))

        window.scrollTo(0, 0);
        document.title = "Книги"

    }, [sort, page, params])

    const onChangeCategory = (category: string, url: string) => {
        window.scrollTo(0, 0);
        navigate(`/books/${url}/page_${page}/sort_${sort}`)
        dispatch(setCategory(category))
        if (category !== "Все категории") {
            dispatch(setPage(1))
        }
    };

    const onChangeSort = (sort: string, category: string) => {
        dispatch(setSort(sort))
        dispatch(setPage(1))
        const foundItem = slidebarList.find((obj) => obj.label === category)
        navigate(`/books/${foundItem?.url}/page_1/sort_${sort}`)
    };

    const onChangePage = (page: number, category: string) => {
        window.scrollTo(0, 0);
        dispatch(setPage(page))
        const foundItem = slidebarList.find((obj) => obj.label === category)
        navigate(`/books/${foundItem?.url}/page_${page}/sort_${sort}`)
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