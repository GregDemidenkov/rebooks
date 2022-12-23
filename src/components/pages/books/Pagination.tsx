import React from 'react'
import ReactPaginate from 'react-paginate'
import { useParams } from "react-router-dom"

import { useAppSelector } from "redux/store"

import styled from 'styled-components'
import { theme } from 'components/common/styled'

type PaginationType = {
    onChangePage: Function
}

const ReactPaginateStyled = styled(ReactPaginate)`
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    li {
        display: inline-block;
        a {
        text-align: center;
        width: 30px;
        line-height: 30px;
        height: 30px;
        border: 1px solid ${theme.orange};
        border-radius: 30px;
        margin-right: 10px;
        cursor: pointer;
        display: inline-block;
        color: ${theme.orange};
        &:hover {
            background-color: ${theme.orange};
            color: ${theme.darkBiege};
        }
        }
    }

    .selected {
        a {
            background-color: ${theme.orange};
            color: ${theme.darkBiege};
        }
    }
`

export const Pagination: React.FC<PaginationType> = ({onChangePage}) => {
    const { page, category } = useAppSelector((state) => state.books)

    const params = useParams();

    return (
        <ReactPaginateStyled
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={(event: any) => onChangePage(event.selected + 1, category)}
            pageRangeDisplayed={2}
            pageCount={4}
            forcePage={params.page ? Number(params.page) - 1 : page}
        />
    )
}