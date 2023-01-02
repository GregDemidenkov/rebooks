import React, {useEffect, useState, useCallback, useRef} from "react"
import { NavLink } from "react-router-dom"
import debounce from 'lodash.debounce'

import styled from 'styled-components'
import { theme, flex} from "../styled"

import search from 'assets/img/search.svg'

import { host, Book } from "types";

const SearchDropdown = styled.div`   
    position: absolute;
    width: calc(85% + 60px);
    background-color:${theme.beige};
    border-left: 1px solid ${theme.brown}20;
    border-right: 1px solid ${theme.brown}20;
    border-bottom: 1px solid ${theme.brown}20;
    border-radius: 2px 2px 8px 8px;
    top: 30px;
    box-shadow: 0px 2px 4px 0px #6b471c30;
    z-index: 1000;
`

const SearchWrapper = styled.div`
    position: relative;
    ${flex}
    width: 50%;
`

const SearchInput = styled.input`
    width: 85%;
    height: 30px;
    outline: none;
    padding: 0 30px 0;
    font-size: 16px;
    color: ${theme.brown};
    border: 1px solid ${theme.brown}20;
    border-radius: 8px;
    background-color: #F8F3ED;
    background-image: url(${search});
    background-repeat: no-repeat;
    background-position: 2px 2px;
    background-size: 20px;
    ::placeholder {
        color: ${theme.brown}99;
    }
    @media(max-width: 1300px) {
        height: 25px;
    }
`

const FindedBook = styled(NavLink)`
    ${flex};
    justify-content: flex-start;
    padding: 20px;
    :hover {
        background-color: ${theme.gray}10;
    }
    @media(max-width: 700px) {
        padding: 10px;
    }
`

const Img = styled.img`
    width: 40px;
    height: 60px;
    border-radius: 1px;
    margin-right: 10px;
    @media(max-width: 700px) {
        width: 30px;
        height: 45px;
    }
`

const Name = styled.p`
    margin-right: 40px;
    color: ${theme.brown};
    span {
        color: ${theme.gray};
    }
    @media(max-width: 700px) {
        font-size: 10px;
    }
`

const Price = styled.p`
    color: ${theme.orange};
    @media(max-width: 700px) {
        font-size: 10px;
    }
`

const Unfinded = styled.p`
    margin: 10px;
    text-align: center;
    color: ${theme.brown};
    @media(max-width: 700px) {
        font-size: 10px;
    }
`

export const Search: React.FC = () => {
    const [findedBooks, setFindedBooks] = useState<Book[]>([])
    const [isVisible, setIsVisible] = useState(false)
    const [isFind, setIsFind] = useState(false)
    const searchRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleClickOutside = (ev: any) => {
          const _event = ev;
    
          if (searchRef.current && !_event.path.includes(searchRef.current)) {
            setIsVisible(false);
          }
        };
    
        document.body.addEventListener("click", handleClickOutside);
    
        return () => {
          document.body.removeEventListener("click", handleClickOutside);
        };
      }, []);

    const getBooks = useCallback(
        debounce((event: any) => {
            let key = event.target.value;
            if (key) {
                fetch(`${host}books?name_like=${key}`)
                .then(res => {
                    return res.json()
                })
                .then(books => {
                    if (books.length > 0) {
                        setFindedBooks(books)
                        setIsFind(true)    
                    } else {
                        setIsFind(false)
                    }
                })
            }
            if (event.target.value === "") {
                setFindedBooks([])
            }
        }, 300),
        []
    )

    const searchHandle = (event: any) => {
        getBooks(event)
    }
    

    return (
        <SearchWrapper ref = {searchRef}>
            <SearchInput onClick = {() => setIsVisible(!isVisible)} onChange = {searchHandle} placeholder = "Поиск книг, авторов"/>
            {
                isVisible &&
                <SearchDropdown>
                    {
                        isFind && findedBooks.length > 0 ?
                        findedBooks.slice(0, 4).map((book) => (
                            <FindedBook key = {book.id} onClick = {() => setIsVisible(!isVisible)} to = {`/book/${book.id}`} id = {book.id}>
                                <Img src = {book.imgUrlFront} />
                                <Name>{book.name}: <span>{book.author}</span></Name>
                                <Price>{book.info.currentPrice}₽</Price>
                            </FindedBook>
                        ))
                        : <Unfinded>Ничего не найдено</Unfinded>
                    }
                </SearchDropdown>
            }
        </SearchWrapper>
    )
}