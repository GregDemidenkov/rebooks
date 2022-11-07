import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import { theme, flex, ButtonBuy } from 'components/common/styled'

import { Book } from 'redux/books/types'

import { FavoriteIcon } from 'components/ui/FavoriteIcon'

type BookCartType = {
    book: Book
}

const Cart = styled.div`
    width: 200px;
    height: 400px;
    margin: 0 10px 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media(max-width: 1300px) {
        width: 140px;
        height: 280px;
    }
`

const BookImg = styled(NavLink)`
    width: 170px;
    height: 260px;
    background-image: url(${(props: {src: String}) => props.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 2px;
    @media(max-width: 1300px) {
        width: 120px;
        height: 185px;
    }
`

const PriceBlock = styled.div`
    ${flex};
    justify-content: flex-start;
    width: 200px;
    @media(max-width: 1300px) {
        width: 140px;
    }
`

const OriginalPrice = styled.h4`
    font-size: 14px;
    color: ${theme.gray};
    text-decoration: line-through;
    margin-right: 19px;
    @media(max-width: 1300px) {
        font-size: 10px;
    }
`

const CurentPriceBlock = styled.div`
    display: flex;
    align-items: center;
`

const CurentPrice = styled.h3`
    margin: 0 20px 0 0;
    font-size: 20px;
    color: ${theme.brown};
    @media(max-width: 1300px) {
        font-size: 16px;
    }
`

const Discount = styled.p`
    font-size: 16px;
    background-color: ${theme.orange};
    color: ${theme.beige};
    padding: 2px 5px;
    border-radius: 5px;
    @media(max-width: 1300px) {
        font-size: 10px;
    }
`

const BookName = styled(NavLink)`
    color: ${theme.brown};
    font-size: 16px;
    width: 200px;
    overflow: hidden;
    word-wrap: break-word;
    text-overflow: ellipsis;
    -ms-line-clamp: 1;
    -webkit-line-clamp: 1;
    line-clamp: 1;

    display: -webkit-box;
    display: box;

    -webkit-box-orient: vertical;
    box-orient: vertical;
    @media(max-width: 1300px) {
        font-size: 12px;
        width: 140px;
    }
`

const Author = styled.p`
    color: ${theme.gray};
    font-size: 14px;
    width: 200px;
    @media(max-width: 1300px) {
        font-size: 10px;
        width: 140px;
    }
`

const Buttons = styled.div`
    ${flex};
    width: 100%;
`


export const BookCart: React.FC<BookCartType> = ({book}) => {
    
    const curentPrice = book.info.discount 
    ? Math.trunc(book.info.price * (100 - book.info.discount) / 100)
    : book.info.price

    return (
        <Cart>
            {/* <NavLink to = {`/book/${book.id}`} id = {Number(book.id)}> */}
                <BookImg to = {`/book/${book.id}`} id = {book.id} src = {book.imgUrlFront}/>
            {/* </NavLink> */}
            <PriceBlock>
                {
                    book.info.discount &&
                    <OriginalPrice>{book.info.price} ₽</OriginalPrice>
                }
                <CurentPriceBlock>
                    <CurentPrice>{curentPrice} ₽</CurentPrice>
                    {
                        book.info.discount &&
                        <Discount>- {book.info.discount}%</Discount>
                    }
                </CurentPriceBlock>
            </PriceBlock>
            <BookName to = {`/book/${book.id}`} id = {book.id}>{book.name}</BookName>
            <Author>{book.author}</Author>
            <Buttons>
                <ButtonBuy
                    bookCart>
                    Добавить в корзину
                </ButtonBuy>
                <FavoriteIcon 
                    width = "22px"
                    height = "22px"
                    active = {false}
                />
            </Buttons>
        </Cart>
    )
}