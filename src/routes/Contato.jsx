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



const Right = styled.div`
  width: 80%;
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 0 10em;
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
    padding: 0 25%;
    font-size: 38px
`
const OneLine =styled.p`
    padding: 25% 0;
`



export default function Login() {
  return (
    <>
      <Body>
        <Right>
          <Card>
            <CardContent>
              <ImageIcon src={Local} alt="" />
              <TextCard>
                <p>Estrada velha de Sorocaba</p>
                <p>CEP: 06709-320</p>
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