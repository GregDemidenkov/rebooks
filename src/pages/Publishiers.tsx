import React, {useEffect} from "react"

import { useAppDispatch, useAppSelector } from "redux/store"
import { getPublishers } from "redux/publishers/publishersSlice"

import styled from 'styled-components'
import { flex, Container, ContainerContent, PageName} from "components/common/styled";

import { PublisherSection } from "components/pages/publishers/PublisherSection";

const PublisherBlock = styled.div`
    ${flex};
    flex-wrap: wrap;
`

export const Publishiers: React.FC = () => {
    const { publishers } = useAppSelector((state) => state.publishers)

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(getPublishers())
        window.scrollTo(0, 0);
        document.title = "Издательства"
    }, [])
        
    return(
        <Container>
            <ContainerContent>
                <PageName>Издательства</PageName>
                <PublisherBlock>
                    {
                        publishers.map( (el, i) => (
                            <PublisherSection key = {el.id} publisher = {el} index = {i}/>
                        ))
                    }
                </PublisherBlock>
            </ContainerContent>
        </Container>
    )
}