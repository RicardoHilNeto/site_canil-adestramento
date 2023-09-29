import React from 'react';
import styled from 'styled-components';
import Fundo from '../assets/wallpapercontact.jpg';
import Local from "../assets/local (2).png";
import Telefone from "../assets/telefone (1).png"
import Phone from "../assets/telefone (2).png"
import Email from "../assets/o-email.png"
import Mail from "../assets/o-email (1).png"
import Direct from "../assets/instagram-direto.png"
import Insta from "../assets/instagram-direto (1).png"
import Pin from "../assets/pin.png"

const Body = styled.div`
  background-image: url(${Fundo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 90vh;
  display:flex;
`;

const Left = styled.div`
  width: 50%;
  height: 90vh;
`;

const Size = styled.div`
  display:flex;
  justify-content: space-around;
`;

const Input = styled.input`
  width: 30%;
  margin-top: 30%;
  border: none;
  background-color: transparent;
`;

const ArrumaLinha = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Linha = styled.div`
  width: 35%;
  border-bottom: 3px solid black;
  position: relative;
  left: 1.5em;
`;

const ArrumaIcon = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Image = styled.img`
  position: relative;
  left: 10em;
  bottom: 5em;
`;

const Right = styled.div`
  width: 50%;
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
  width: 45%;
  height: 40%;
  background-color: rgba(0, 0, 0, 0.5); /* Cor com 50% de opacidade */
  margin: 2.5em 1em 1em 1em;
  border-radius: 10px
`;

const CardContent = styled.div`
  padding: 1em;
`;

const ImageIcon = styled.img`
  margin: 0 35%;
`;
const TextCard = styled.div`
    width: 100%;
    height:60%;
    color: white;
    padding: 0 15%;
    font-size: 38px
`
const OneLine =styled.p`
    padding: 25% 0;
`



export default function Login() {
  return (
    <>
      <Body>
        <Left>
          <Size>
            <Input type="name"/>
            <Input type="tel" />
          </Size>
          <ArrumaLinha>
            <Linha/>
            <Linha/>
          </ArrumaLinha>
          <ArrumaIcon>
            <Image src={Pin} alt="" />
            <Image src={Phone} alt="" />
          </ArrumaIcon>
          <Size>
            <Input type="name"/>
            <Input type="tel" />
          </Size>
          <ArrumaLinha>
            <Linha/>
            <Linha/>
          </ArrumaLinha>
          <ArrumaIcon>
            <Image src={Mail} alt="" />
            <Image src={Insta} alt="" />
          </ArrumaIcon>
        </Left>
        <Right>
          <Card>
            <CardContent>
              <ImageIcon src={Local} alt="" />
              <TextCard>
                <p>Estrada velha de Sorocaba</p>
                <p>Numero: 763</p>
                <p>CEP: 06709320</p>
              </TextCard>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <ImageIcon src={Telefone} alt="" />
              <TextCard>
                <OneLine>(11) 94325-2312</OneLine>
              </TextCard>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <ImageIcon src={Email} alt="" />
              <TextCard>
                <OneLine>canil@email.com</OneLine>
              </TextCard>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <ImageIcon src={Direct} alt="" />
              <TextCard>
                <OneLine>@nomedocanil</OneLine>
              </TextCard>
            </CardContent>
          </Card>
        </Right>
      </Body>
    </>
  );
}