import React from "react"

import styled from 'styled-components'
import { flex, theme } from "components/common/styled"

import { BookInCart } from "redux/types"

type CartItemType = {
    book: BookInCart
}

const Wrapper = styled.div`
    ${flex};
    border-bottom: 1px solid ${theme.gray}20;
    margin: 5px 0;
    padding: 10px 0;
`

const Sector = styled.div`
    ${flex};
    align-items: flex-start;
    justify-content: flex-start;
    height: 130px;
`

const BookImg = styled.img`
    width: 90px;
    height: 130px;
    margin-right: 10px;
    border-radius: 2px;
    box-shadow: 2px 2px 2px 0px #6b471c50;
`

const NameAndAuthor = styled.p`
    width: 300px;
    color: ${theme.brown};
    span {
        color: ${theme.orange}90;
        line-height: 28px;
    }
`

const Counter = styled.div`
    width: 120px;
    margin-right: 40px;
`

const ButtonMinus = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${theme.orange};
    border: 1px solid ${theme.orange};
    border-radius: 5px 0 0 5px;
    color: ${theme.beige};
    cursor: pointer;
    :hover {
        background-color: ${theme.orange}99;
    }
`

const ButtonPlus = styled.button`
    width: 30px;
    height: 30px;
    background-color: ${theme.orange};
    border: 1px solid ${theme.orange};
    border-radius: 0 5px 5px 0;
    color: ${theme.beige};
    cursor: pointer;
    :hover {
        background-color: ${theme.orange}99;
    }
`

const InputCount = styled.input`
    width: 30px;
    height: 26px;
    border: none;
    background-color: ${theme.beige};
    outline: none;
    text-align: center;
    color: ${theme.brown}
`

const Price = styled.p`
    line-height: 28px;
    color: ${theme.brown};
`


export const CartItem: React.FC<CartItemType> = ({book}) => {
    
    return(
        <Wrapper>
            <Sector>
                <BookImg src={book.img} alt="" />
                <NameAndAuthor>{book.name}<br/><span>{book.author}</span></NameAndAuthor>
            </Sector>
            <Sector>
                <Counter>
                    <ButtonMinus>-</ButtonMinus>
                    <InputCount value = {book.count}/>
                    <ButtonPlus>+</ButtonPlus>
                </Counter>
                <Price>{book.currentPrice*book.count} ₽</Price>
            </Sector>
        </Wrapper>
    )
}