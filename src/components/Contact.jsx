import React from 'react';
import styled from 'styled-components';
import Fundo from '../assets/wallpapercontact.jpg';
import Local from '../assets/local (2).png';
import Telefone from '../assets/telefone (1).png';
import Email from '../assets/o-email.png';
import Direct from '../assets/instagram-direto.png';

// Styled components for styling the contact section
const Body = styled.div`
  background-image: url(${Fundo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 90vh;
  display: flex;
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
  background-color: rgba(0, 0, 0, 0.5);
  margin: 2.5em 1em 1em 1em;
  border-radius: 10px;
`;

const CardContent = styled.div`
  padding: 1em;
`;

const ImageIcon = styled.img`
  margin: 0 35%;
`;

const TextCard = styled.div`
  width: 100%;
  height: 60%;
  color: white;
  padding: 0 25%;
  font-size: 1.5em;
  @media screen and (min-width: 1000px) {
    font-size: 20px;
}
`;

const OneLine = styled.p`
  padding: 25% 0;
  @media screen and (min-width: 1000px) {
    padding: 10% 14%;
}
`;

// Contact component
const Contact = () => {
  return (
    <>
      <Body>
        <Right>
          <Card>
            <CardContent>
              <ImageIcon src={Local} alt="Location" />
              <TextCard>
                <p>Estrada velha de Sorocaba</p>
                <p>CEP: 06709-320</p>
              </TextCard>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <ImageIcon src={Telefone} alt="Phone" />
              <TextCard>
                <OneLine>(11) 94325-2312</OneLine>
              </TextCard>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <ImageIcon src={Email} alt="Email" />
              <TextCard>
                <OneLine>canil@email.com</OneLine>
              </TextCard>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <ImageIcon src={Direct} alt="Instagram Direct" />
              <TextCard>
                <OneLine>@nomedocanil</OneLine>
              </TextCard>
            </CardContent>
          </Card>
        </Right>
      </Body>
    </>
  );
};

export default Contact;
