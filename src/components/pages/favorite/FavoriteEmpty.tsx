import React from "react"
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import { theme } from "components/common/styled"

import favoriteEmpty from 'assets/img/favoriteEmpty.svg'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
`

const FavoriteEmptyImg = styled.img`
    width: 200px;
    height: auto;
`

const FavoriteEmptyTitle = styled.h3`
    font-size: 22px;
    color: ${theme.brown};
    margin-top: 10px;
    text-align: center;
`

const FavoriteEmptyText = styled.p`
    font-size: 16px;
    color: ${theme.gray};
    line-height: 28px;
    margin-top: 20px;
    text-align: center;
`

const ToCatalogButton = styled(NavLink)`
    border: none;
    border-radius: 20px;
    margin-top: 20px;
    padding: 12px 10px;
    width: 200px;
    text-align: center;
    background-color: ${theme.orange};
    color: ${theme.beige};
    cursor: pointer;
    :hover {
        background-color: ${theme.orange}99;
    }
`

export const FavoriteEmpty: React.FC = () => {
    return(
        <Wrapper>
            <FavoriteEmptyImg src = {favoriteEmpty}/>
            <FavoriteEmptyTitle>Ваш список отложенных товаров сейчас пуст</FavoriteEmptyTitle>
            <FavoriteEmptyText>Воспользуйтесь нашим каталогом, чтобы его заполнить.<br/>Добавляйте товары в «Отложенные»</FavoriteEmptyText>
            <ToCatalogButton to = "/books/all-categories/page_1/sort_popular">Перейти в каталог</ToCatalogButton>
        </Wrapper>
    )
}