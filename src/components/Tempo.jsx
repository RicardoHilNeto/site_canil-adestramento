import styled from "styled-components";
import Filhote from "../assets/filhotecomfundoazul.png"
import SetaEsquerda from "../assets/seta-direita.png"

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

function Tempo() {
  return (
    <>
    <h1 style={{ textAlign: 'center', backgroundColor: 'orange' }}>Linha do Tempo:</h1>
    <Container>
    <Image src={Filhote} alt="" />
    <Arrow src={SetaEsquerda} alt="" />
    <Image src={Filhote} alt="" />
    <Arrow src={SetaEsquerda} alt="" />
    <Image src={Filhote} alt="" />
    </Container>
    </>
  );
}

export default Tempo;
