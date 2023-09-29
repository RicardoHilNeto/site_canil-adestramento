import styled from 'styled-components';
import Fal from '../assets/CampeonatoFal.jpeg'
import FalSolo from '../assets/MachoFal.png'
import Gamora from '../assets/FemeaGamora.png'
import Luna from '../assets/luna.png'
import Rebeca from '../assets/rebeca.jpg'
import Rauchig from '../assets/rauchig.jpg'
import Thor from '../assets/thor.png'
import Jully from '../assets/jully.jpg'
import Winchester from '../assets/Winchester.png'
import Koda from '../assets/koda.png'
import K9 from '../assets/K9.jpg'

const Sexo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20vh;
    background: linear-gradient(156deg,#221902 33%,#664c04 100%);
    background-color: rgba(229,210,0,0);
}
`
const SexTitle = styled.h1`
    font-family: 'Artifika', Georgia, "Times New Roman", serif;
    text-transform: uppercase;
    font-size: 50px;
    text-align: center;
    text-shadow: 0em 0.1em 0.1em rgba(0,0,0,0.4);
    color: white;
`
const Span = styled.span`
    font-family: 'Artifika', Georgia, "Times New Roman", serif;
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 100%;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    vertical-align: baseline;
    color: white;
`
const CorpoMacho = styled.div`
    width: 100%;
    height: 50vh;
    background-color: white;
    display: flex;
    justify-content: space-around;
    padding: 20px 0px;
`

const Machos = styled.div`
    width: 20%;
    height: 40vh;
    background: rgb(0,0,0);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(128,128,128,1) 100%);
    border-radius: 10px;
`
const Image = styled.div`
    width: 80%;
    height: 74%;
    background-image: url(${Fal});
    background-size: cover; /* Maintain aspect ratio and cover the container */
    background-repeat: no-repeat;
    background-position: center center;
    margin: 5% 10%;
`;
const Photo = styled.img`
    width: 100%;
    height: 100%;
`
const Name = styled.div`
    font-family: 'Artifika',Georgia,"Times New Roman",serif;
    width: 50%;
    margin: 0 25%;
    text-align: center;
    text-transform: uppercase;
    padding: 10px
`



function Cachorros(){
    return(
    <>
        <Sexo>
            <SexTitle>Padreadores</SexTitle>
            <Span>Canil Nome</Span>
        </Sexo>
        <CorpoMacho>
            <Machos>
                <Image>
                    <Photo src={Fal} alt="" />
                </Image>
                <Name>
                    <h1>Fal</h1>
                </Name>
            </Machos>
            <Machos>
                <Image>
                    <Photo src={Thor} alt="" />
                </Image>
                <Name>
                    <h1>Thor</h1>
                </Name>
            </Machos>
            <Machos>
                <Image>
                    <Photo src={Winchester} alt="" />
                </Image>
                <Name>
                    <h1>Winchester</h1>
                </Name>
            </Machos>
        </CorpoMacho>
        <Sexo>
            <SexTitle>Matrizes</SexTitle>
            <Span>Canil Nome</Span>
        </Sexo>
        <CorpoMacho>
            <Machos>
                <Image>
                    <Photo src={Jully} alt="" />
                </Image>
                <Name>
                    <h1>Jully</h1>
                </Name>
            </Machos>
            <Machos>
                <Image>
                    <Photo src={Luna} alt="" />
                </Image>
                <Name>
                    <h1>Luna</h1>
                </Name>
            </Machos>
            <Machos>
                <Image>
                    <Photo src={Rebeca} alt="" />
                </Image>
                <Name>
                    <h1>Rebeca</h1>
                </Name>
            </Machos>
            
        </CorpoMacho>
        <Sexo>
            <SexTitle>Filhotes</SexTitle>
            <Span>Canil Nome</Span>
        </Sexo>
        <CorpoMacho>
            <Machos>
                <Image>
                    <Photo src={Koda} alt="" />
                </Image>
                <Name>
                    <h1>Koda</h1>
                </Name>
            </Machos>
            <Machos>
                <Image>
                    <Photo src={K9} alt="" />
                </Image>
                <Name>
                    <h1>K9</h1>
                </Name>
            </Machos>
            <Machos>
                <Image>
                    <Photo src={Rauchig} alt="" />
                </Image>
                <Name>
                    <h1>Rauchig</h1>
                </Name>
            </Machos>
        </CorpoMacho>
        

        
    </>
    )
}

export default Cachorros;
