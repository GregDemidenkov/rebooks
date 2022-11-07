import React from 'react'
import { useAppSelector } from "redux/store"

import styled from 'styled-components'
import { theme } from 'components/common/styled'

import { sortList } from './sort-data-mock'

type SortType = {
    onChangeSort: Function,
}

const SortBlock = styled.div`
    flex-basis: 100%;
    display: flex;
    margin: 0 15px 20px;
    border-radius: 5px;
`

const DropdownContent = styled.ul`
    display: none;
    position: absolute;
    top: 40px;
    width: 200px;
    background-color: #F5EDE0;
    border-radius: 0 0 5px 5px;
    line-height: 1.7em;
    z-index: 1;
    @media(max-width: 1300px) {
        width: 150px;
        top: 23px;
    }
`

const DropdownMenu = styled.div`
    position: relative;
    :hover ${DropdownContent} {display: block;}
`

const SortButton = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
    padding: 6px 10px;
    border: none;
    border-radius: 5px;
    background-color: #F5EDE0;
    cursor: pointer;
    font-size: 14px;
    @media(max-width: 1300px) {
        width: 150px;
        padding: 5px 10px;
        font-size: 10px;
        svg {
            width: 18px;
            height: 18px;
        }
    }
`

const CurentItem = styled.p`
    color: ${theme.brown};
`

const DropdownItem = styled.li`
    cursor: pointer;
    padding: 5px 10px;
    color: ${theme.brown};
    ${(props: {active: boolean}) => props.active &&`
        color: ${theme.orange};
    `}  
    :last-child {
        border-radius: 0 0 5px 5px;
    }
    :hover {
        background-color: ${theme.orange}40;
    }
    @media(max-width: 1300px) {
        padding: 0 10px;
    }
`

const ItemName = styled.p`
    font-size: 14px;
    @media(max-width: 1300px) {
        font-size: 10px;
    }
`

export const Sort: React.FC<SortType> = ({onChangeSort}) => {
    const {sort} = useAppSelector((state) => state.books)
    
    return (
        <SortBlock>
            <DropdownMenu>
                <SortButton>
                    <CurentItem>{sort}</CurentItem>
                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)"
                    fill = {theme.brown} stroke="none">
                        <path d="M77 118 l43 -42 40 39 c22 21 37 41 35 44 -3 2 -21 -11 -40 -29 l-35
                        -34 -33 32 c-18 18 -37 32 -42 32 -5 0 9 -19 32 -42z"/>
                    </g>
                    </svg>
                </SortButton>
                <DropdownContent>
                    {
                        sortList.map(obj => 
                            <DropdownItem key = {obj.id} active = {obj.label === sort ? true : false}  onClick = {() => onChangeSort(obj.label)}>
                                <ItemName>{obj.label}</ItemName>
                            </DropdownItem>
                        )
                    }
                </DropdownContent>
            </DropdownMenu>
        </SortBlock>
    )
}