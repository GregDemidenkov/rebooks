import React from "react"
import { NavLink } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "redux/store"
import { minusItem, addItem, deleteItem } from "redux/cart/cartSlice"

import styled from 'styled-components'
import { flex, theme } from "components/common/styled"

import deleteSvg from "assets/img/delete.svg"
import { FavoriteIcon } from "components/ui/FavoriteIcon"

import { BookInCart } from "redux/types"

type CartItemType = {
    book: BookInCart
}

const Wrapper = styled.div`
    ${flex};
    border-top: 1px solid ${theme.gray}20;
    margin: 5px 0;
    padding: 10px 0 20px;
    :last-child {
        border-bottom: 1px solid ${theme.gray}20;
    }
`

const InfoBlock = styled.div`
    ${flex};
    align-items: flex-start;
    justify-content: flex-start;
    height: 130px;
`

const ActionBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 130px;
`

const Block = styled.div`
    ${flex};
    align-items: flex-start;
`

const BookImg = styled(NavLink)`
    width: 90px;
    height: 135px;
    background-image: url(${(props: {src: String}) => props.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 10px;
    border-radius: 2px;
    box-shadow: 2px 2px 2px 0px #6b471c50;
`

const NameAndAuthor = styled(NavLink)`
    width: 300px;
    color: ${theme.brown};
    span {
        color: ${theme.orange}90;
        line-height: 28px;
    }
`

const Counter = styled.div`
    width: 120px;
    margin-right: 10px;
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

const PriceBlock = styled.div`
    text-align: right;
    width: 120px;

`

const CurrentPrice = styled.p`
    font-size: 16px;
    line-height: 28px;
    color: ${theme.brown};
    font-weight: 800;
`

const Price = styled.p`
    color: ${theme.gray}90;
    text-decoration: line-through;
    font-size: 14px;
`

const Economy = styled.p`
    font-size: 14px;
    color: ${theme.orange}90;
`

const ActionButton = styled.div`
    ${flex};
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


export const CartItem: React.FC<CartItemType> = ({book}) => {
    
    const dispatch = useAppDispatch();

    return(
        <Wrapper>
            <InfoBlock>
                <BookImg to = {`/book/${book.id}`} id = {book.id} src={book.img} />
                <NameAndAuthor to = {`/book/${book.id}`} id = {book.id}>{book.name}<br/><span>{book.author}</span></NameAndAuthor>
            </InfoBlock>
            <ActionBlock>
                <Block>
                    <Counter>
                        <ButtonMinus onClick = {() => dispatch(minusItem(book.id))}>-</ButtonMinus>
                        <InputCount value = {book.count}/>
                        <ButtonPlus onClick = {() => dispatch(addItem(book))}>+</ButtonPlus>
                    </Counter>
                    <PriceBlock>
                        <CurrentPrice>{book.currentPrice*book.count} ₽</CurrentPrice>
                        {
                            book.discount &&
                            <>
                                <Price>{book.price*book.count} ₽</Price>
                                <Economy>Экономия {book.price*book.count - book.currentPrice*book.count} ₽</Economy>
                            </>
                        }
                    </PriceBlock>
                </Block>
                <Block>
                    <ActionButton>
                        <FavoriteIcon width = "15px" height = "auto"/>
                        <ButtonLabel>Отложить</ButtonLabel>
                    </ActionButton>
                    <ActionButton onClick = {() => dispatch(deleteItem(book.id))}>
                        <ButtonImg src = {deleteSvg}></ButtonImg>
                        <ButtonLabel>Удалить</ButtonLabel>
                    </ActionButton>
                </Block>
            </ActionBlock>
        </Wrapper>
    )
}