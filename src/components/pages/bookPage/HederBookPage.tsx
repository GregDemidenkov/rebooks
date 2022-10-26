import React from "react"
import styled from 'styled-components'


type HeaderBookPageType = {
    name: string,
    author: string
}

const Wrapper = styled.div`
    padding-top: 137px;
`

const HeaderBook = styled.h2`
    font-size: 22px;
    color: #6b471c;
    margin-bottom: 20px;
`

export const HeaderBookPage: React.FC<HeaderBookPageType> = ({name, author}) => {
    return (
        <Wrapper>
            <HeaderBook>{author}: {name}</HeaderBook>
        </Wrapper>
    )
}