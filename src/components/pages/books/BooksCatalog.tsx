import React from 'react'

import { useAppSelector } from "redux/store"

import styled from 'styled-components'
import { flex } from 'components/common/styled'

import { Book } from 'types'

import { BookCart } from './BookCart'
import { Sort } from './sort/Sort'
import { Pagination } from './Pagination'

type BooksCatalogType = {
    books: Book[];
    onChangeSort: Function,
    onChangePage: Function
}

const CatalogContent = styled.div`
    ${flex};
    justify-content: space-around;
    flex-wrap: wrap;
    flex-basis: 85%;
`

export const BooksCatalog: React.FC<BooksCatalogType> = ({books, onChangeSort, onChangePage}) => {
    const {category} = useAppSelector((state) => state.books)
    
    return (
        <CatalogContent altJustify = {books.length <= 12 ? true : false}>
            <Sort 
                onChangeSort = {onChangeSort}
            />
            {
                books.map((book) => (
                    <BookCart key = {book.id} book = {book} />
                ))
            }
            {
                (category === "Все категории" || books.length >= 12)  &&
                <Pagination onChangePage = {onChangePage}/>
            }
        </CatalogContent>
    )
}