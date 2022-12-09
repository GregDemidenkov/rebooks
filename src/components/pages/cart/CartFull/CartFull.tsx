import React from "react"

import styled from 'styled-components'
import { theme } from "components/common/styled"

import { CartItems } from "./CartItems"
import { CartInfoBlock } from "./CartInfoBlock"

import { BookInCart } from 'redux/types'

type CartFullType = {
    books: BookInCart[]
}

const CartSection = styled.section`
    display: grid;
    grid-template-columns: 70% 30%;
`

export const CartFull: React.FC<CartFullType> = ({books}) => {
    console.log(books);
    
    return(
        <CartSection>
            <CartItems books = {books}/>
            <CartInfoBlock />
        </CartSection>
    )
}