import styled from "styled-components";
import Filhote from "../assets/filhotecomfundoazul.png"
import SetaEsquerda from "../assets/seta-direita.png"
import SetaBaixo from "../assets/seta-baixo.png"
import Macaco from '../assets/macacofundoazul.png';
import Mangueira from '../assets/mangueira.png';
import Protecao from '../assets/protecaobraco.png';
import Jovem from '../assets/Design sem nome (6).png'
import Adulto from '../assets/adulto.png'

const Body = styled.div`

`
const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`
const Image = styled.img`
    margin: 20px 50px;
`
const Arrow = styled.img`
`
const ContainerDown = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
const DownArrow = styled.img`
  margin: 20px 125px;
`

function Tempo() {
  return (
    <>
    <h1 style={{ textAlign: 'center', backgroundColor: 'orange' }}>Linha do Tempo:</h1>
    <Body>
    <Container>
    <Image src={Filhote} alt="" />
    <Arrow src={SetaEsquerda} alt="" />
    <Image src={Jovem} alt="" />
    <Arrow src={SetaEsquerda} alt="" />
    <Image src={Adulto} alt="" />
    </Container>
    <ContainerDown>
    <DownArrow src={SetaBaixo} alt="" />
    <DownArrow src={SetaBaixo} alt="" />
    <DownArrow src={SetaBaixo} alt="" />
    </ContainerDown>
    <Container>
    <DownArrow src={Macaco} alt="" />
    <DownArrow src={Mangueira} alt="" />
    <DownArrow src={Protecao} alt="" />
    </Container>
    </Body>
    </>
  );
}

export default Tempo;
