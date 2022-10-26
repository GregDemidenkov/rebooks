import React from "react"
import styled from 'styled-components'

type CoverType = {
    url: string
}

const Img = styled.img`
    width: 20%;
    height: auto;
`

export const Cover: React.FC<CoverType> = ({url}) => {
    return (
        <Img src = {url} alt = "обложка" />
    )
}