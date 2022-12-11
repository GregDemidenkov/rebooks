import React from "react"

import styled from 'styled-components'
import { theme, flex } from "components/common/styled"


type CartInfoBlockType = {
    total: {
        count: number;
        weight: number;
        price: number;
        currentPrice: number;
    }
}

const Wrapper = styled.div``

const InfoBlock = styled.div`
    position: sticky;
    top: 120px;
    border: 1px solid ${theme.brown}90;
    border-radius: 5px;
    padding: 0 15px;
    @media(max-width: 1300px) {
        top: 90px;
    }
`

const BlockSection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 30px 0;
    :first-child {
        border-bottom: 1px solid ${theme.brown}90;
    }
`

const CartSummary = styled.p`
    ${flex};
    color: ${theme.gray};
    margin-bottom: 30px;
`

const BlockItem = styled.p`
    ${flex};  
    margin: 8px 0;  
`

const Label = styled.p`
    color: ${theme.brown};
    ${(props: {total: boolean}) => props.total &&`
        font-weight: 600;
    `}
`

const Value = styled.p`
    color: ${theme.brown};
    font-weight: 600;
    ${(props: {delivery: boolean}) => props.delivery &&`
        font-weight: 200;
        color: ${theme.gray};
    `}
`

const CheckoutButton = styled.button`
    margin-top: 20px;
    padding: 15px 10px;
    border: none;
    border-radius: 8px;
    background-color: ${theme.orange};
    color: ${theme.beige};
    font-size: 16px;
    cursor: pointer;
    :hover {
        background-color: ${theme.orange}99;
    }
`

const getDeclination = (count: number) => {
    const numbersArr = [0, 5, 6, 7, 8, 9];
    const lastNumber = count % 10;
    if (lastNumber === 1 && count % 100 !== 11) {
        return "товар"
    } else if (numbersArr.indexOf(lastNumber) !== -1 || lastNumber % 10 === 1 || (count % 100 > 10 && count % 100 < 20)) {
        return "товаров"
    } else {
        return "товара"
    }
}

export const CartInfoBlock: React.FC<CartInfoBlockType> = ({total}) => {
    
    return(
        <Wrapper>
            <InfoBlock>
                <BlockSection>
                    <CartSummary>{total.count} {getDeclination(total.count)} · {total.weight} кг</CartSummary>
                    <BlockItem>
                        <Label>Стоимость</Label>
                        <Value>{total.price} ₽</Value>
                    </BlockItem>
                    <BlockItem>
                        <Label>Сумма скидки</Label>
                        <Value>{total.currentPrice - total.price} ₽</Value>
                    </BlockItem>
                </BlockSection>
                <BlockSection>
                    <BlockItem>
                        <Label total>Итого без доставки</Label>
                        <Value>{total.currentPrice} ₽</Value>
                    </BlockItem>
                    <BlockItem>
                        <Label>Доставка</Label>
                        <Value delivery>Бесплатно</Value>
                    </BlockItem>
                    <CheckoutButton>Оформить заказ</CheckoutButton>
                </BlockSection>
            </InfoBlock>
        </Wrapper>
    )
}