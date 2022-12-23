import React from 'react'

import { useAppDispatch } from "redux/store"
import { addItem } from "redux/cart/cartSlice"

import styled from 'styled-components'
import { theme } from 'components/common/styled'

import { Book, BookInFavorite } from 'types'

type BuyButtonType = {
    disabled: boolean,
    style: string,
    children: string,
    book: Book | BookInFavorite
}

const ButtonBuyStyled = styled.button`
    width: calc(100% - 40px);
    border-radius: 5px;
    background-color: ${theme.orange};
    color: ${theme.beige};
    font-size: 14px;
    cursor: pointer;
    ${(props: {styleType: string}) => props.styleType == "bookCart" &&`
        padding: 10px 0;
        @media(max-width: 1300px) {
            padding: 8px;
            font-size: 9px;
        }
    `};
    ${(props: {styleType: string}) => props.styleType == "bookPage" &&`
        padding: 15px 30px;
        margin: 35px 0 0 20px;
    `};
    ${(props: {styleType: string}) => props.styleType == "favorite" &&`
        padding: 10px 20px;
        margin: 0 20px 0 0;
        @media(max-width: 565px) {
            width: 200px;
        }
    `};
    :hover {
        background-color: ${theme.orange}99;
    }
`

export const BuyButton: React.FC<BuyButtonType> = ({
  disabled,
  style,
  children,
  book
}) => {

    const bookToCart = {
        id: book.id,
        name: book.name,
        author: book.author,
        imgUrlFront: book.imgUrlFront,
        info: {
            price: book.info.price,
            discount: book.info.discount,
            currentPrice: book.info.currentPrice,
            inStock: book.info.inStock,
        },
        characteristics: {
            weight: book.characteristics.weight
        },
        count: 1
    }

    const dispatch = useAppDispatch();

    return (
        <ButtonBuyStyled
            type = "button"
            disabled={disabled || false}
            styleType = {style}
            onClick = {() => dispatch(addItem(bookToCart))}
        >
            {children}
        </ButtonBuyStyled>
    )
}