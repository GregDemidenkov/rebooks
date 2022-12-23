import React from "react"

import styled from 'styled-components'

import { CartItems } from "./CartItems"
import { CartInfoBlock } from "./CartInfoBlock"

import { BookInCart } from 'types'

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
    @media(max-width: 1000px) {
        grid-template-columns: 100%;
    }
`

export const CartFull: React.FC<CartFullType> = ({books, total}) => {
    
    return(
        <CartSection>
            <CartItems books = {books}/>
            <CartInfoBlock total = {total}/>
        </CartSection>
    )
}