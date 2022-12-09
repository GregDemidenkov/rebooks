import React from 'react'

import { useAppSelector } from "redux/store"

import styled from 'styled-components'
import { theme } from 'components/common/styled'

import { slidebarList } from './slidebar-data-mock'

type SlideBarType = {
    onChangeCategory: Function,
}

const SlideBarList = styled.div`
    flex-basis: 15%;
`

const SlideBarContent = styled.div`
    position: sticky;
    top: 120px;
    border-right: 1px solid ${theme.brown}50;
    border-top: 1px solid ${theme.brown}50;
    border-bottom: 1px solid ${theme.brown}50;
    border-radius: 0 5px 5px 0;
    margin-right: 30px;
    @media(max-width: 1300px) {
        width: 150px;
        top: 80px;
    }
`

const BarMenu = styled.ul`
    padding-top: 20px;
    @media(max-width: 1300px) {
        padding-top: 5px;
    }
`

const MenuEl = styled.li`
    padding: 10px 10px;
    color: ${theme.brown};
    cursor: pointer;
    ${(props: {active: boolean}) => props.active &&`
        color: ${theme.orange};
    `}
    :hover {
        background-color: ${theme.orange}10;
    }
    @media(max-width: 1300px) {
        font-size: 10px;
        padding: 5px 5px;
    }
`

export const SlideBar: React.FC<SlideBarType> = ({onChangeCategory}) => {
    const {category} = useAppSelector((state) => state.books)
    return (
        <SlideBarList>
            <SlideBarContent>
                <BarMenu>
                    {
                        slidebarList.map((el, i) => (
                            <MenuEl 
                                active = {el.label === category ? true : false} 
                                onClick = {() => onChangeCategory(el.label)} 
                                key = {i}>
                                {el.label}
                            </MenuEl>
                        ))
                    }
                </BarMenu>
            </SlideBarContent>
        </SlideBarList>
    )
}