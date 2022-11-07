import React from 'react'

import styled from 'styled-components'
import { theme, flex } from 'components/common/styled'

import { Book } from 'redux/books/types'

import { BookCart } from './BookCart'
import { Sort } from './sort/Sort'

type BooksCatalogType = {
    books: Book[];
    onChangeSort: Function,
}


const CatalogContent = styled.div`
    ${flex};
    justify-content: space-around;
    flex-wrap: wrap;
    flex-basis: 85%;
`

export const BooksCatalog: React.FC<BooksCatalogType> = ({books, onChangeSort}) => {

    return (
        <CatalogContent>
            <Sort 
                onChangeSort = {onChangeSort}
            />
            {
                books.map((book) => (
                    <BookCart key = {book.id} book = {book} />
                ))
            }
        </CatalogContent>
    )
}