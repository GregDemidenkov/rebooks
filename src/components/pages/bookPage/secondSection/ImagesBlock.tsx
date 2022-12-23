import React, {useState, useEffect} from "react"

import styled from 'styled-components'
import { theme, flex } from "components/common/styled";

import { ImgPanel } from "components/pages/bookPage/secondSection/ImgPanel";

type ImagesBlockType = {
    front: string,
    back: string,
}

const ImagesBlockWrapper = styled.div`
    ${flex}
    align-items: flex-start;
    flex-basis: 22%;
    @media(max-width: 660px) {
        flex-basis: 0;
    }
`

const Cover = styled.img`
    height: 450px;
    width: 290px;
    box-shadow: 11px 10px 10px -1px ${theme.gray}80;
    border-radius: 3px;
    @media(max-width: 450px) {
        height: 400px;
        width: 240px;
    }
`

export const ImagesBlock: React.FC<ImagesBlockType> = ({front, back}) => {
    const [curentImg, setCurentImg] = useState<string>("")

    useEffect(() => {
        setCurentImg(front)
    }, [front])

    const getCurentUrl = (url: string) => {
        setCurentImg(url)
    }
    
    return (
        <ImagesBlockWrapper>
            <ImgPanel 
                front = {front}
                back = {back}
                curentUrl = {curentImg}
                getImg = {getCurentUrl}
            />
            <Cover src = {curentImg} alt = "обложка" />
        </ImagesBlockWrapper>
    )
}