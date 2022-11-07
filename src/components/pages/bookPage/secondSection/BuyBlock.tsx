import React from "react"

import styled from 'styled-components'
import { theme, flex, ButtonBuy } from "components/common/styled";

import { price } from 'redux/books/types'

import checkMark from 'assets/img/checkMark.svg'
import cross from 'assets/img/cross.svg'

import { FavoriteIcon } from 'components/ui/FavoriteIcon'

type BuyBlockType = {
    priceObj: price | null
}

const Wrapper = styled.div`
    flex-basis: 38%;
    display: flex;
    justify-content: flex-end;
`

const PriceCart = styled.div`
    width: 250px;
    height: 300px;
    border-radius: 10px;
    border: 1px solid ${theme.brown};
`

const Stock = styled.div`
    ${flex}
    justify-content: flex-start;
    margin: 10px 0 0 20px;
`
const Icon = styled.img`
    width: 17px;
    height: 17px;
    margin-right: 10px;
    ${(props: {isStock: boolean}) => props.isStock &&`
        width: 20px;
        height: 20px;
    `}
`

const StockInfo = styled.p`
    font-size: 20px;
    padding-top: 1px;
    color: ${theme.gray};
    ${(props: {isStock: boolean}) => props.isStock &&`
        color: ${theme.orange};
        padding-top: 2px;
    `}
`

const PriceBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin: 35px 0 0 20px;
`

const OriginalPrice = styled.h4`
    font-size: 14px;
    color: ${theme.gray};
    text-decoration: line-through;
`

const CurentPriceBlock = styled.div`
    display: flex;
    align-items: center;
`

const CurentPrice = styled.h3`
    margin: 0 20px 0 0;
    font-size: 32px;
    color: ${theme.brown}
`

const Discount = styled.p`
    font-size: 16px;
    background-color: ${theme.orange};
    color: ${theme.beige};
    padding: 2px 5px;
    border-radius: 5px;
`

const FavoriteBlock = styled.a`
    ${flex};
    justify-content: flex-start;
    cursor: pointer;
    margin: 20px 0 0 20px;
`

const FavoriteText = styled.p`
    color: ${theme.gray};
    font-size: 18px;
    margin-left: 5px;
`

export const BuyBlock: React.FC<BuyBlockType> = ({priceObj}) => {

    const curentPrice = priceObj?.discount 
        ? Math.trunc(priceObj.price * (100 - priceObj.discount) / 100)
        : priceObj?.price

        
    return (
        <Wrapper>
            <PriceCart>
                <Stock>
                    <Icon isStock = {priceObj?.inStock} src = {priceObj?.inStock ? checkMark : cross} />
                    <StockInfo isStock = {priceObj?.inStock}>{priceObj?.inStock ? "В наличии" : "Нет в наличии"}</StockInfo>
                </Stock>
                <PriceBlock>
                    {
                        priceObj?.discount &&
                        <OriginalPrice>{priceObj.price} ₽</OriginalPrice>
                    }
                    <CurentPriceBlock>
                        <CurentPrice>{curentPrice} ₽</CurentPrice>
                        {
                            priceObj?.discount &&
                            <Discount>- {priceObj.discount}%</Discount>
                        }
                    </CurentPriceBlock>
                </PriceBlock>
                <ButtonBuy bookPage>Добавить в корзину</ButtonBuy>
                <FavoriteBlock>
                    <FavoriteIcon 
                        width = "22px"
                        height = "22px"
                        active = {false}
                    />
                    <FavoriteText>Добавить в избранное</FavoriteText>
                </FavoriteBlock>
            </PriceCart>
        </Wrapper>
    )
}