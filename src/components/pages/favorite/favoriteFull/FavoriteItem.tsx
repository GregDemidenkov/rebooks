import React from "react"
import { NavLink } from "react-router-dom"

import { useAppDispatch } from "redux/store"
import { clickItem } from "redux/favorite/favoriteSlice"

import styled from 'styled-components'
import { flex, theme } from "components/common/styled"

import deleteSvg from "assets/img/delete.svg"

import { BuyButton } from "components/ui/BuyButton"

import { BookInFavorite } from "types"

type FavoriteItemType = {
    book: BookInFavorite
}

const Wrapper = styled.div`
    ${flex};
    border-top: 1px solid ${theme.gray}20;
    margin: 5px 0;
    padding: 10px 15px 20px 0;
    :last-child {
        border-bottom: 1px solid ${theme.gray}20;
        padding-bottom: 30px;
    }
    @media(max-width: 565px) {
        flex-direction: column;
        align-items: flex-start;
    }
`

const InfoBlock = styled.div`
    ${flex};
    align-items: flex-start;
    justify-content: flex-start;
    height: 130px;
    @media(max-width: 565px) {
        width: 100%;
    }
`

const ActionBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 130px;
    @media(max-width: 565px) {
        width: 100%;
        margin-top: 20px;
        height: 100px;
    }
`

const Block = styled.div`
    ${flex};
    align-items: center;
    justify-content: flex-end;
    @media(max-width: 565px) {
        justify-content: flex-start;
        ${(props: {buttons: boolean}) => props.buttons &&`
            justify-content: space-between;
            margin-top: 15px;
        `};
    }
    
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
    color: ${theme.brown};
    span {
        color: ${theme.orange}90;
        line-height: 28px;
    }
`

const PriceBlock = styled.div`
    text-align: right;
    width: 120px;
    @media(max-width: 565px) {
        text-align: left;
    }
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


export const FavoriteItem: React.FC<FavoriteItemType> = ({book}) => {
    
    const dispatch = useAppDispatch();

    return(
        <Wrapper>
            <InfoBlock>
                <BookImg to = {`/book/${book.id}`} id = {book.id} src={book.imgUrlFront} />
                <NameAndAuthor to = {`/book/${book.id}`} id = {book.id}>{book.name}<br/><span>{book.author}</span></NameAndAuthor>
            </InfoBlock>
            <ActionBlock>
                <Block>
                    <PriceBlock>
                        <CurrentPrice>{book.info.currentPrice} ₽</CurrentPrice>
                        {
                            book.info.discount &&
                            <>
                                <Price>{book.info.price} ₽</Price>
                                <Economy>Экономия {book.info.price - book.info.currentPrice} ₽</Economy>
                            </>
                        }
                    </PriceBlock>
                </Block>
                <Block buttons>
                    {
                        book.info.inStock &&
                        <BuyButton 
                            style = "favorite"
                            disabled = {false}
                            book = {book}>
                            Добавить в корзину
                        </BuyButton>
                    }
                    <ActionButton onClick = {() => dispatch(clickItem(book))}>
                        <ButtonImg src = {deleteSvg}></ButtonImg>
                        <ButtonLabel>Удалить</ButtonLabel>
                    </ActionButton>
                </Block>
            </ActionBlock>
        </Wrapper>
    )
}