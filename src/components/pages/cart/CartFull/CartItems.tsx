import React from "react"

import styled from 'styled-components'
import { theme } from "components/common/styled"

import { BookInCart } from "redux/types"
import { CartItem } from "./CartItem"

type CartItems = {
    books: BookInCart[]
}

const Wrapper = styled.div`
    border-top: 1px solid ${theme.gray}20;

`

export const CartItems: React.FC<CartItems> = ({books}) => {
    
    return(
        <Wrapper>
            {
                books.map((book) => (
                    <CartItem key = {book.id} book = {book}/>
                ))
            }
        </Wrapper>
    )
}