import React from "react"

import styled from 'styled-components'
import { theme, flex } from "components/common/styled"

import { Raitings } from "./Raitings"

import { raiting } from 'types'

const Wrapper = styled.div`
    margin-bottom: 20px;
    ${flex}
`

const CountBuy = styled.p`
    font-size: 20px;
    color: ${theme.gray};
    @media(max-width: 450px) {
        font-size: 16px;
    }
`

export const RaitingLine: React.FC<raiting> = ({countBuy, raitingReBooks, countReBoks, raitingLiveLib, countLiveLib}) => {
    return (
        <Wrapper>
            <Raitings 
                raitingReBooks = {raitingReBooks}
                countReBoks = {countReBoks}
                raitingLiveLib = {raitingLiveLib}
                countLiveLib = {countLiveLib}
            />
            <CountBuy>Купили {countBuy} раз</CountBuy>
        </Wrapper>
    )
}