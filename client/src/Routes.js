import React from 'react';
import Home from './components/pages/Home'
import Search from './components/pages/Search'

export const routes = {
  "/": () => <Home />,
  "/index": () => <Search />
};
