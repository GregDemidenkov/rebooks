import React, {useEffect} from "react";

import { useAppDispatch, useAppSelector } from "redux/store"
import { getAuthorsBooks } from "redux/authors/authorsBooksSlice"

import { BookCart } from "../books/BookCart";

import styled from 'styled-components'
import { theme, flex, SectionName, AllBooks } from "components/common/styled";

import { Author } from 'types'

type AuthorSectionType = {
    author: Author,
    index: number
}

const Section = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid ${theme.brown}20;
    :last-child {
        border: none;
    }
`

const AuthorInfo = styled.section`
    ${flex};
    margin-top: 30px;
    @media(max-width: 940px) {
        margin-top: 10px;
    }
    @media(max-width: 700px) {
        flex-direction: column;
    }
`

const ImageBlock = styled.div`
    flex-basis: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-right: 60px;
    @media(max-width: 700px) {
        margin: 0;
    }
`

const Img = styled.img`
    width: 300px;
    height: auto;
    border-radius: 8px;
    box-shadow: 2px 4px 7px 0px #6b471c50;
    @media(max-width: 1300px) {
        width: 200px;
    }
    @media(max-width: 940px) {
        width: 140px;
        margin-bottom: 20px;
    }
`

const Name = styled.p`
    position: absolute;
    bottom: 3px;
    text-shadow: 1px 1px 1px black;
    margin-top: 10px;
    font-size: 24px;
    color: ${theme.orange};
    @media(max-width: 1300px) {
        font-size: 18px;
    }
    @media(max-width: 940px) {
        font-size: 14px;
        bottom: 13px;
    }
    @media(max-width: 700px) {
        margin: 10px 0;
        bottom: 13px;
    }
`

const InfoText = styled.p`
    flex-basis: 70%;
    text-align: justify;
    font-size: 20px;
    line-height: 38px;
    color: ${theme.gray};
    margin: 0 40px 38px 0;
    :first-letter {
        font-size: 30px;
    }
    @media(max-width: 1300px) {
        font-size: 14px;
        line-height: 26px;
        margin: 0 40px 30px 0;
        :first-letter {
            font-size: 24px;
        }
    }
    @media(max-width: 940px) {
        font-size: 10px;
        line-height: 16px;
        margin: 0 40px 26px 0;
        :first-letter {
            font-size: 16px;
        }
    }
    @media(max-width: 700px) {
        margin: 0;
    }

` 

export const AuthorSection: React.FC<AuthorSectionType> = ({author, index}) => {
    const { authorsBooks } = useAppSelector((state) => state.authorsBooks)

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        const name = author.name        
        dispatch(getAuthorsBooks({name}))
    }, [])

    return (
        <Section>
            <AuthorInfo>
                <ImageBlock>
                    <Img src = {author.photoUrl}/>
                    <Name>{author.name}</Name>
                </ImageBlock>
                <InfoText>{author.about}</InfoText>
            </AuthorInfo>
            <SectionName>Все книги</SectionName>
            <AllBooks>
                {
                    authorsBooks.length === 3 && 
                    authorsBooks[index].books.map( (obj) => (
                        <BookCart 
                            key = {obj.id} 
                            book = {obj}
                        />
                    ))
                }

            </AllBooks>
        </Section>
    )
}