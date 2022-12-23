import React from 'react'

import { useAppDispatch, useAppSelector } from "redux/store"
import { clickItem } from "redux/favorite/favoriteSlice"

import styled from 'styled-components'
import { theme, flex } from 'components/common/styled'

import { Book, BookInCart, BookInFavorite } from 'types'

type FavoriteButtonType = {
    text?: string,
    book: Book | BookInCart,
    position?: string
}

const ToFavorite = styled.div`
    ${flex};
    cursor: pointer;
`

const Text = styled.p`
    color: ${theme.gray};
    font-size: 18px;
    margin-left: 5px;
`

const Icon = styled.svg`
    width: 28px;
    height: 28px;
    @media(max-width: 1300px) {
        width: 20px;
        height: 20px;
    }
    ${(props: {size: string}) => props.size === "cart" &&`
        width: 15px;
        height: 15px;
    `}
    path {
        fill: ${theme.gray};
    }
    ${(props: {active: boolean}) => props.active === true &&`
        path {
            fill: ${theme.orange};
        }
    `}
`

const isActive = (books: BookInFavorite[], book: Book | BookInCart) => {
    const foundItem = books.find((obj) => obj.id === book.id)
    if (foundItem) {
        return true
    } else {
        return false
    }
}

export const FavoriteButton: React.FC<FavoriteButtonType> = ({
  text,
  book, 
  position
}) => {

    const bookToFavorite = {
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
    }

    const { items } = useAppSelector((state) => state.favorite)

    const dispatch = useAppDispatch();

    if (text === "Добавить в избранное" && isActive(items, book)) {
        text = "Удалить из избранного"
    } else if (text === "Отложить" && isActive(items, book)) {
        text = "Отложено"
    }

    return (
        <ToFavorite onClick = {() => dispatch(clickItem(bookToFavorite))}>
            <Icon size = {position} active = {isActive(items, book)} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5.25 2C4.013 2 3 2.9 3 4v18l9-4 9 4V4c0-1.1-1.012-2-2.25-2H5.25z"></path></Icon>
            {
                text &&
                <Text>{text}</Text>
            }
        </ToFavorite>
    
    )
}