import React from "react"
import { NavLink } from 'react-router-dom'

import styled from 'styled-components'
import { theme } from "components/common/styled"

import cartEmpty from 'assets/img/cartEmpty.svg'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 40px 0;
`

const CartEmptyImg = styled.img`
    width: 200px;
    height: auto;
`

const CartEmptyTitle = styled.h3`
    font-size: 22px;
    color: ${theme.brown};
    margin-top: 10px;
    text-align: center;
`

const CartEmptyText = styled.p`
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

export const CartEmpty: React.FC = () => {
    return(
        <Wrapper>
            <CartEmptyImg src = {cartEmpty}/>
            <CartEmptyTitle>Ваша корзина сейчас пуста</CartEmptyTitle>
            <CartEmptyText>Воспользуйтесь нашим каталогом, чтобы её заполнить.<br/>У нас всегда есть, что почитать!</CartEmptyText>
            <ToCatalogButton to = '/books'>Перейти в каталог</ToCatalogButton>
        </Wrapper>
    )
}