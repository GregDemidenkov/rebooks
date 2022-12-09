import React, {useEffect} from "react"

import { useAppDispatch, useAppSelector } from "redux/store"
import { getAuthors } from "redux/authors/authorsSlice"

import styled from 'styled-components'
import { flex, Container, ContainerContent, PageName} from "components/common/styled";

import { AuthorSection } from "components/pages/authors/AuthorSection";

const AuthorsBlock = styled.div`
    ${flex};
    flex-wrap: wrap;
`

export const Authors: React.FC = () => {
    const { authors } = useAppSelector((state) => state.authors)

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(getAuthors())
        window.scrollTo(0, 0);
        document.title = "Авторы"
    }, [])
        
    return(
        <Container>
            <ContainerContent>
                <PageName>Авторы</PageName>
                <AuthorsBlock>
                    {
                        authors.map( (el, i) => (
                            <AuthorSection key = {el.id} author = {el} index = {i}/>
                        ))
                    }
                </AuthorsBlock>
            </ContainerContent>
        </Container>
    )
}