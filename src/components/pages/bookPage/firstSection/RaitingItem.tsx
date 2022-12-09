import React from "react"

import styled from 'styled-components'
import { theme, flex } from "components/common/styled"

type RaitingItemType = {
    icon: any,
    raiting: number,
    count: number,
}

const Wrapper = styled.div`
    ${flex}
`

const Icon = styled.img`
    margin-right: 5px;
`

const Raiting = styled.p`
    font-size: 20px;
    color: ${theme.brown};
    span {
        color: ${theme.gray};
    }
`

export const RaitingItem: React.FC<RaitingItemType> = ({icon, raiting, count}) => {
    return (
        <Wrapper>
            <Icon src = {icon} alt="иконка рейтинга" />
            <Raiting>{raiting}<span> ({count})</span></Raiting>
        </Wrapper>
    )
}