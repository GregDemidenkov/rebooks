import React from "react"

import { useAppDispatch, useAppSelector } from "redux/store"
import { clearCart } from "redux/cart/cartSlice"

import styled from 'styled-components'
import { flex, theme } from "components/common/styled"

import { BookInCart } from "types"
import deleteSvg from "assets/img/delete.svg"

import { CartItem } from "./CartItem"

type CartItems = {
    books: BookInCart[]
}

const Wrapper = styled.div``

const ActionButton = styled.div`
    margin-left: calc(100% - 141px);
    right: 0;
    ${flex};
    width: 141px;
    cursor: pointer;
`

const ButtonImg = styled.img`
    width: 15px;
    height: auto;
`

const ButtonLabel = styled.a`
    color: ${theme.gray};
    margin-left: 2px;
`

export const CartItems: React.FC<CartItems> = ({books}) => {
    const dispatch = useAppDispatch();

    return(
        <Wrapper>
            <ActionButton onClick = {() => dispatch(clearCart())}>
                <ButtonImg src = {deleteSvg}></ButtonImg>
                <ButtonLabel>Очистить корзину</ButtonLabel>
            </ActionButton>
            {
                books.map((book) => (
                    <CartItem key = {book.id} book = {book}/>
                ))
            }
        </Wrapper>
    )
}