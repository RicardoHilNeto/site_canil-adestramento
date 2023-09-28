import styled from "styled-components"
import SendEmail from "../assets/mail-send.png"
import Logo from "../assets/logo 1.svg"
import FacebookLogo from "../assets/facebook.png"
import TwitterLogo from "../assets/twitter-alt-circle.png"
import LinkedinLogo from "../assets/linkedin.png"
import InstagramLogo from "../assets/instagram.png"
import WhatsAppLogo from "../assets/whatsapp.png"

const CorpoDoRodape = styled.footer`
    width: 100%;
    height: 300px;
    background-color: black;
    display:flex;
    
`
const Left = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 50%;
  height: 100%;
  border: 1px solid black;
`;
const On = styled.div`
    padding: 1.5%;
`
const InfoText = styled.p`
    color: white;
    margin-bottom: 30px;
`
const TitleFooter = styled.h1`
    color: white;
`
const SubTitleFooter = styled.h2`
    color: white;
    margin: 2em 0 0.5em 0;
`

const Email = styled.input`
    width: 52%;
    padding: 10px;
    margin-top: 20px;
    border: none;
    background: black;
    color: white;
`
const ImageEmail = styled.img`
    position: relative;
    left: 90%;
    bottom: 5px;
`
const Linha = styled.div`
    position: relative; 
    bottom: 20px;
    width: 60%;
    border-bottom: 2px solid grey;
    margin-bottom: 20px;
`

const Right = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 50%;
  height: 100%;
  border: 1px solid black;
`;
const ImageLogo = styled.img`
    position: absolute;
    right: 1000px;
    top: 1670px;
    width: 15%;
`
const ContainerLeft = styled.div`
    width: 33.3%;
    height: 31.7vh;
   
`
const ContainerCenter = styled.div`
    width: 33.3%;
    height: 31.7vh;
    
`
const ContainerRight = styled.div`
    width: 33.3%;
    height: 31.7vh;
`
const ContainerWrapper = styled.div`
    display: flex;
`
const Nav = styled.nav`
    text-align: center;
    margin: 40% 0
`
const Ul = styled.ul`
    list-style: none;
`
const Li = styled.li`
    padding-bottom: 10px;
    color: grey;
`
const LiLogo = styled.li`
    position: relative;
    left:10px;
    padding-bottom: 10px;
    color: grey;
`
const Social = styled.h3`
    color:white;
    margin-bottom: 10px;
`
const ImageLogos = styled.img`
    padding-right: 20px;
`
const CopyWrite = styled.p`
    position: relative;
    top: 4em;
    color:grey;
`



const NomeDoCanil = "Nome"

function Rodape(){
    return(
    <>
    <CorpoDoRodape>
        <Left>
            <TitleFooter>Receba notificações de ninhadas ou cursos</TitleFooter>
            <On>
            <Email type="email" placeholder="Seu melhor email" />
            <Linha>
                <ImageEmail src={SendEmail} alt="" />
            </Linha>
            <SubTitleFooter>{NomeDoCanil}</SubTitleFooter>
            <InfoText>O amor e a lealdade de um cão são eternos. Seja parte desta família de patas e encontre o seu companheiro de vida aqui. 🐕‍🦺❤️</InfoText>
            </On>
        </Left>
        <Right>
            <ImageLogo src={Logo} alt="" />
            <ContainerWrapper>
            <ContainerLeft>
                <Nav>
                    <Ul>
                        <Li>About</Li>
                        <Li>Cachorros</Li>
                        <Li>Cursos</Li>
                    </Ul>
                </Nav>
            </ContainerLeft>
            <ContainerCenter>
            <Nav>
                    <Ul>
                        <Li>Terms and Conditions</Li>
                        <Li>Privacy Policy</Li>
                        <Li>Cookie Policy</Li>
                    </Ul>
                <CopyWrite>&copy; 2023 Todos os direitos reservados.</CopyWrite>
                </Nav>
            </ContainerCenter>
            <ContainerRight>
            <Nav>
                    <Ul>
                        <Social>Vamos conversar!</Social>
                        <Li>{NomeDoCanil}@email.com</Li>
                        <LiLogo>
                            <ImageLogos src={FacebookLogo} alt="" />
                            <ImageLogos src={TwitterLogo} alt="" />
                            <ImageLogos src={InstagramLogo} alt="" />
                            <ImageLogos src={WhatsAppLogo} alt="" />
                        </LiLogo>
                    </Ul>
                </Nav>
            </ContainerRight>
        </ContainerWrapper>
        </Right>

    </CorpoDoRodape>
    </>
    )
}

export default Rodape