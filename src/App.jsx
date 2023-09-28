import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';
import Banner from './components/Banner';
import Raca from './components/Raca';
import Rodape from './components/Rodape';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

function App() {

  return (
    <>
      <GlobalStyle/>
      <Header/>
      <Banner/>
      <Raca/>
      <Rodape/>
    </>
  )
}

export default App
