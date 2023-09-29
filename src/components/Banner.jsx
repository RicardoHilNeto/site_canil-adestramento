import styled from "styled-components";
import BannerImg from "../assets/banner.jpeg";


const Back = styled.div`
  background-image: url(${BannerImg});
  background-size: cover; /* Maintain aspect ratio and cover the container */
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 85vh;
`;
const Nome = styled.h1`
  text-align: center;
  color: white;
  font-size: 48px;
`;
const TextBanner = styled.div`
  position: relative;
  left: 50%;
  padding: 10% 0;
  background-color: transparent;
  width: 45%;
  height: 80vh;
  @media screen and (min-width: 1000px) {
    padding: 5% 0;
}
  `;
const TextInfo = styled.p`
    text-align: center;
    padding: 10px 0;
    font-size: 24px;
    color: white;
    
`
const NomeDoCanil = "Nome";

function Banner() {
  return (
    <>
      <Back>
        <TextBanner>
          <Nome>{NomeDoCanil}</Nome>
          <TextInfo>Prazer, somos a {NomeDoCanil} – empresa especializada em treinamento e venda de cães Home Protector. </TextInfo>
          <TextInfo>Ter um Home Protector {NomeDoCanil} traz muitas vantagens, mas também muitas responsabilidades, pode ser considerado uma arma e saber usá-la é essencial. </TextInfo>
          <TextInfo>A agilidade de um cão supera a de qualquer ser humano, não dorme em serviço e está sempre alerta, com a vantagem de também ser o melhor amigo de toda a família.</TextInfo>
          <TextInfo>Nosso projeto prioriza a segurança, com um treinamento de eficiência e qualidade comprovada.</TextInfo>
          <TextInfo>Marque sua visita e nossos cães.</TextInfo>
        </TextBanner>
      </Back>
    </>
  );
}

export default Banner;
