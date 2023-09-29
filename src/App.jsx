import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Outlet } from "react-router-dom";
import Header from './components/Header';
import Rodape from './components/Rodape';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default function App() {
  return (
    <>
      <div className="container">
        <Header/>
        <GlobalStyle />
        <Outlet />
        <Rodape/>
      </div>
    </>
  );
}
