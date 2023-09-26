
import Header from './components/Header';
import { createGlobalStyle } from 'styled-components';

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
    </>
  )
}

export default App
