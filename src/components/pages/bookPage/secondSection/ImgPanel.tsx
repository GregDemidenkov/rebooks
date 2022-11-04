import React from "react"

import styled from 'styled-components'
import { theme } from "components/common/styled"
import { flex } from "components/common/styled"

type ImgPanelType = {
    front: string,
    back: string,
    curentUrl: string
    getImg: Function
}

const Panel = styled.ul`
    ${flex}
    flex-direction: column;
    height: 140px;
    margin-right: 12px;
`

const ImgBook = styled.img`
    width: 44px;
    height: 60px;
    border-radius: 2px;
    cursor: pointer;
    ${(props: {active: boolean}) => (props.active) &&`
        box-shadow: 0px 0px 2px 2px ${theme.orange};
    `}
`

export const ImgPanel: React.FC<ImgPanelType> = ({front, back, curentUrl, getImg}) => {
    
    const activeFront = front === curentUrl ? true : false
    const activeBack = back === curentUrl ? true : false
    
    return (
        <Panel>
            <ImgBook active = {activeFront} onClick = {() => getImg(front)} src = {front} alt = "передняя сторона обложки" />
            <ImgBook active = {activeBack} onClick = {() => getImg(back)} src = {back} alt = "задняя сторона обложки" />
        </Panel>
    )
}