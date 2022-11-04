import React from "react"

import styled from 'styled-components'
import { flex } from "components/common/styled"

import { RaitingItem } from "./RaitingItem"

import star from "assets/img/star.svg"
import liveLib from "assets/img/liveLib.svg"

type RaitingsType = {
    raitingReBooks: number,
    countReBoks: number,
    raitingLiveLib: number,
    countLiveLib: number
}

const Wrapper = styled.div`
    ${flex}
    width: 240px;
`

export const Raitings: React.FC<RaitingsType> = ({raitingReBooks, countReBoks, raitingLiveLib, countLiveLib}) => {
    return (
        <Wrapper>
            <RaitingItem 
                icon = {star}
                raiting = {raitingReBooks}
                count = {countReBoks}
            />
            <RaitingItem 
                icon = {liveLib}
                raiting = {raitingLiveLib}
                count = {countLiveLib}
            />
        </Wrapper>
    )
}
