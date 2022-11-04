import React from 'react'

import styled from 'styled-components'
import { theme } from 'components/common/styled'

import { slidebarList } from './slidebar-data-mock'

const SlideBarList = styled.div`
    flex: 0 0 0 300px;
    border-right: 1px solid ${theme.brown}50;
    border-top: 1px solid ${theme.brown}50;
    border-bottom: 1px solid ${theme.brown}50;
    margin-right: 30px;
`

const LabelMenu = styled.p`
    color: ${theme.orange};
    padding-left: 10px;
    margin-top: 20px;
`

const BarMenu = styled.ul`
    padding-top: 20px;
`

const MenuEl = styled.li`
    padding: 10px 10px;
    color: ${theme.brown};
    cursor: pointer;
    :hover {
        background-color: ${theme.orange}10;
    }
`

export const SlideBar: React.FC = () => {
    return (
        <SlideBarList>
            <LabelMenu>Категории</LabelMenu>
            <BarMenu>
                {
                    slidebarList.map((el, i) => (
                        <MenuEl key = {i}>{el.label}</MenuEl>
                    ))
                }
            </BarMenu>
        </SlideBarList>
    )
}