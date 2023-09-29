import styled from "styled-components";
import ObedienciaBasica from "../assets/obedienciabasica.png";
import Obediencia from "../assets/obediencia.png";
import Ataque from "../assets/ataque.png";

const Body = styled.body`
  background-color: black;
`;

const CorpoCurso = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 30vh;
  background-color: black;
  padding-left: 10px;

  @media screen and (min-width: 1000px) {
    height: 60vh;
}
`;

const Image = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10%;
  height: 20vh;
  background-color: white;
`;

const ImageCurso = styled.img`
  width: 100%;
  height: 100%;
  border: 10px solid white;
`;

const Borda = styled.div`
  width: 70%;
  border-bottom: 4px solid grey;
  margin-left: ${({ isRight }) => (isRight ? "30%" : "0")};
`;

const Text = styled.div`
  width: 70%;
  height: 20vh;
  color: white;
  @media screen and (min-width: 1000px) {
    
}
`;

const CursoTitle = styled.h2`
  text-align: center;
  text-transform: uppercase;
  font-family: 'Artifika', Georgia, "Times New Roman", serif;
`;

const PCurso = styled.p`
  font-size: 28px;
  color: grey;
  padding: 10px;
  @media screen and (min-width: 1000px) {
    font-size: 24px;   
}
`;

const DivValor = styled.div`
  background-color: #f2f2f2;
  padding: 80px;
  border-radius: 8px;
  border: 1px solid #ccc;
  margin-top: 20px;
  @media screen and (min-width: 1000px) {
    margin-right: 1em;
}
`;

const DivValorH3 = styled.h3`
  font-size: 2.5em;
  text-align: center;
  color: #333;
`;

const DivValorPrice = styled.p`
  font-size: 2em;
  text-align: center;
  color: #000;
  margin-top: 5px;
`;

function Curso() {
  return (
    <Body>
      <CorpoCurso>
        <Image>
          <ImageCurso src={ObedienciaBasica} alt="Your Image" />
        </Image>
        <Text>
          <CursoTitle>Obediência Básica: Fortalecendo a Relação entre Tutores e Pets</CursoTitle>
          <PCurso>Um curso de obediência básica para cães é uma oportunidade valiosa para ensinar habilidades fundamentais e fortalecer o vínculo entre os tutores e seus animais de estimação. Esses cursos são projetados para ensinar aos cães comandos essenciais, comportamentos apropriados e proporcionar uma base sólida para futuros treinamentos. Abaixo, apresentaremos uma visão abrangente sobre o que esse curso envolve e como pode ser benéfico para os tutores e seus peludos companheiros.</PCurso>
        </Text>
        <DivValor>
          <DivValorH3>Valor:</DivValorH3>
          <DivValorPrice>R$ 25</DivValorPrice>
        </DivValor>
      </CorpoCurso>
      <Borda />
      <CorpoCurso>
        <Image>
          <ImageCurso src={Obediencia} alt="Your Image" />
        </Image>
        <Text>
          <CursoTitle>Domínio canino: elevando a obediência a um novo patamar</CursoTitle>
          <PCurso>O curso é um programa avançado desenvolvido para tutores que desejam aprimorar a relação e a interação com seus pets. Ao entender que a obediência vai além de comandos básicos, este curso busca elevar o nível de entendimento e cooperação entre os tutores e seus fiéis companheiros.</PCurso>
        </Text>
        <DivValor>
          <DivValorH3>Valor:</DivValorH3>
          <DivValorPrice>R$ 50</DivValorPrice>
        </DivValor>
      </CorpoCurso>
      <Borda isRight />
      <CorpoCurso>
        <Image>
          <ImageCurso src={Ataque} alt="Your Image" />
        </Image>
        <Text>
          <CursoTitle>Defesa e segurança canina: aperfeiçoando o instinto de proteção</CursoTitle>
          <PCurso>O curso é um programa especializado para tutores que buscam aprimorar as habilidades de proteção de seus cães, transformando o instinto natural de defesa em um comportamento controlado e eficaz.</PCurso>
        </Text>
        <DivValor>
          <DivValorH3>Valor:</DivValorH3>
          <DivValorPrice>R$ 75</DivValorPrice>
        </DivValor>
      </CorpoCurso>
      <Borda />
    </Body>
  );
}

export default Curso;
