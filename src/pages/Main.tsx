import React, {useEffect} from "react"

import { useAppDispatch, useAppSelector } from "redux/store"
import { getBestsellers } from "redux/books/bestsellersSlice"

import { MainSection } from "components/pages/main/MainSection";
import { BestsellerSlider } from "components/pages/main/BestsellerSlider";
import { Recommendation } from "components/pages/main/Recommendation";

import { ContainerContent } from "components/common/styled";

export const Main: React.FC = () => {
    const {list, loading} = useAppSelector((state) => state.bestsellers)

    const dispatch = useAppDispatch();
    
    useEffect(() => {
        dispatch(getBestsellers())
        document.title = "Главная"
    }, [])
    
    return(
        <ContainerContent>
            <MainSection 
                mainBestseller = {list.length != 0 ? list[0].imgUrlFront : ""}
                id = {list.length != 0 ? list[0].id : 0}
            />
            <BestsellerSlider bestBooks = {list}/>
            <Recommendation />
        </ContainerContent>
    )
}
