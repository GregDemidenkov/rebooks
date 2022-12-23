import React, {useEffect} from "react"

import { useAppSelector } from "redux/store"

import { FavoriteFull } from "components/pages/favorite/favoriteFull/FavoriteFull"
import { FavoriteEmpty } from "components/pages/favorite/FavoriteEmpty"

import { Container, ContainerContent, PageName } from "components/common/styled"

export const Favorite: React.FC = () => {
    const { items, count } = useAppSelector((state) => state.favorite)
    
    useEffect(() => {
        window.scrollTo(0, 0);
        document.title = "Отложенное"
    }, [])

    return(
        <Container>
            <ContainerContent>
                <PageName>Отложенные товары {count ? `(${count})` : ""}</PageName>
                {
                    count 
                    ? <FavoriteFull books = {items} count = {count}/> 
                    : <FavoriteEmpty />
                }
            </ContainerContent>
        </Container>
    )
}