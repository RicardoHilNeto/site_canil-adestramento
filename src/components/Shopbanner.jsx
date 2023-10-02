import styled from 'styled-components';

const Banner = styled.div`
    width: 100%;
    height: 6vh;
    background-color: orange;
    display: flex;
    justify-content: space-around;
`
const Links = styled.h2`
    font-size: 16px;
    margin: 1em 0.5em;
`

function ShopBanner(){
    return(
        <>
            <Banner>
                <Links>Rações</Links>
                <Links>Coleiras e Guia</Links>
                <Links>Brinquedos de Treinamento</Links>
                <Links>Equipamentos de Proteção</Links>
                <Links>Livros e Guias de Treinamento</Links>
            </Banner>
        </>
    )
}

export default ShopBanner
