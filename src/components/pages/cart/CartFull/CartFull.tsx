import React from "react"

import styled from 'styled-components'
import { theme } from "components/common/styled"

import { CartItems } from "./CartItems"
import { CartInfoBlock } from "./CartInfoBlock"

import { BookInCart } from 'redux/types'

type CartFullType = {
    books: BookInCart[],
    total: {
        count: number;
        weight: number;
        price: number;
        currentPrice: number;
    }
}

const CartSection = styled.section`
    display: grid;
    grid-template-columns: 73% 25%;
    grid-gap: 2%;
`

export const CartFull: React.FC<CartFullType> = ({books, total}) => {
    console.log(books);
    
    return(
        <CartSection>
            <CartItems books = {books}/>
            <CartInfoBlock total = {total}/>
        </CartSection>
    )
}