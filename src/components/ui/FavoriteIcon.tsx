import React from "react"

import styled from "styled-components"
import { theme } from "components/common/styled"

type HeartIconType = {
    width: string,
    height: string,
    active?: boolean,
    toFavorite?: boolean
}

const Icon = styled.svg`
    path {
        fill: ${theme.gray};
    }
    ${(props: {toFavorite: boolean}) => props.toFavorite &&` 
        path {
            fill: ${theme.brown};
        }
    `}
    ${(props: {active: boolean}) => props.active &&`
        path {
            fill: ${theme.orange};
        }
    `}
    @media(max-width: 1300px) {
        width: 20px;
        height: 20px;
    }
    
`



export const FavoriteIcon: React.FC<HeartIconType> = ({width, height, active, toFavorite}) => {
    return (
        <Icon active = {active} toFavorite = {toFavorite} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width={width} height={height}><path d="M5.25 2C4.013 2 3 2.9 3 4v18l9-4 9 4V4c0-1.1-1.012-2-2.25-2H5.25z"></path></Icon>
    )
}