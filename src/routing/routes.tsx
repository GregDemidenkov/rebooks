import { paths } from "./config";

import { Main } from "pages/Main";
import { Books } from "pages/Books";
import { Authors } from "pages/Authors";
import { Publishiers } from "pages/Publishiers";
import { Favorite } from "pages/Favorite";
import { Cart } from "pages/Cart";
import { BookPage } from "pages/BookPage";

export const RoutesList = [
    {path: paths.main, element: <Main/>},
    {path: paths.books, element: <Books />},
    {path: paths.authors, element: <Authors />},
    {path: paths.publishier, element: <Publishiers />},
    {path: paths.favorite, element: <Favorite />},
    {path: paths.cart, element: <Cart />},
    {path: paths.bookPage, element: <BookPage />},
]