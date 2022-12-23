import React from "react"

import styled from 'styled-components'

import { BookInFavorite } from 'types'
import { FavoriteItem } from "./FavoriteItem"

type FavoriteFullType = {
    books: BookInFavorite[],
    count: number
}

const CartSection = styled.section`
    display: flex;
    flex-direction: column;
`

export const FavoriteFull: React.FC<FavoriteFullType> = ({books, count}) => {
    console.log(books);
    
    return(
        <CartSection>
            {
                books.map((book) => (
                    <FavoriteItem key = {book.id} book = {book}/>
                ))
            }
        </CartSection>
    )
}