import { styled } from "styled-components"; 

import StarEmpty from "../assets/star (1).png"
import StarFull from "../assets/starfull.svg"

import ColeiraEletronica from "../assets/ColeiraEletronica.png"

const Armazem = styled.div`
    margin: 20px 0;
    width: 15%;
    height: 100%;
`

const Title = styled.h1`
    text-align: center;
    background-color: orange;
`
const Container = styled.div`
    width: 100%;
    height: 28vh;
    background-color: #ffa6009b;
    display: flex;
    justify-content: space-around;
    margin-bottom: 1em;
`
const NomeProdutos = styled.h2`
    display: flex;
    justify-content: space-around;
    color: white;
    font-size: 20px;
`
const Produtos = styled.div`
    width: 100%;
    height: 10em;
    background-color: white;
    border-radius: 20px;
    margin: 3% 0;
`
const Stars = styled.img`
    margin: 0 5%;
`
const ProdutoImage = styled.img`
    width: 90%;
    height: 90% ;
    margin: 0.5em;
`

function ProdutosAvaliacoes(){
    return(
        <>
            <Title>Marcas com as melhores avaliações</Title>
            <Container>
                <Armazem>
                    <NomeProdutos>Coleira Eletrônica</NomeProdutos>
                    <Produtos>
                        <ProdutoImage src={ColeiraEletronica} alt="" />
                    </Produtos>
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                </Armazem>
                <Armazem>
                    <NomeProdutos>Nome</NomeProdutos>
                    <Produtos>
                    
                    </Produtos>
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                </Armazem>
                <Armazem>
                    <NomeProdutos>Nome</NomeProdutos>
                    <Produtos>
                    
                    </Produtos>
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                </Armazem>
                <Armazem>
                    <NomeProdutos>Nome</NomeProdutos>
                    <Produtos>
                    
                    </Produtos>
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                    <Stars src={StarEmpty} alt="" />
                </Armazem>
              
               
            </Container>

        </>
    )
}

export default ProdutosAvaliacoes