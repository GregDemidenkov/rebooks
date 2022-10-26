import React from "react"
import styled from 'styled-components'
import { flex } from "components/common/Header"

type ImgPanelType = {
    front: string,
    back: string
}

const Panel = styled.ul`
    ${flex}
    flex-direction: column;
    width: 5%;
    height: 150px;
`

const ImgBook = styled.img`
    width: 44px;
    height: 60px;
`

export const ImgPanel: React.FC<ImgPanelType> = ({front, back}) => {
    return (
        <Panel>
            <ImgBook src = {front} alt = "передняя сторона обложки" />
            <ImgBook src = {back} alt = "задняя сторона обложки" />
        </Panel>
    )
}