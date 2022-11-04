import React from 'react'

import styled from 'styled-components'
import { theme } from 'components/common/styled'

const Wrapper = styled.section`
    margin-top: 40px;
`

const CatalogContent = styled.div`
    display: flex;
    flex-direction: column;
`

export const BooksCatalog: React.FC = () => {

    return (
        <Wrapper>
            <CatalogContent>
            </CatalogContent>
        </Wrapper>
    )
}