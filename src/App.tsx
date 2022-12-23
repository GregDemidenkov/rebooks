import React from 'react';
import { Route, Routes } from 'react-router-dom'

import { Layout } from 'components/common/Layout';
import { Main } from "./pages/Main";
import { Books } from 'pages/Books';
import { Authors } from 'pages/Authors';
import { Publishiers } from 'pages/Publishiers';
import { Favorite } from 'pages/Favorite';
import { Cart } from 'pages/Cart';
import { BookPage } from 'pages/BookPage';

import {paths} from './routing/config'

const App: React.FC = () => {
  return (
    <Routes>
        <Route path = "/" element = {<Layout />}>
          <Route path = {paths.main} element = {<Main />}></Route>
          <Route path = {paths.books} element = {<Books />}></Route>
          <Route path = {paths.authors} element = {<Authors />}></Route>
          <Route path = {paths.publishier} element = {<Publishiers />}></Route>
          <Route path = {paths.favorite} element = {<Favorite />}></Route>
          <Route path = {paths.cart} element = {<Cart />}></Route>
          <Route path = {paths.bookPage} element = {<BookPage />}></Route>
        </Route>
    </Routes>
  );
}

export default App;
