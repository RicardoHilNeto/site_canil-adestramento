import styled from 'styled-components';
import ShopBanner from "../assets/bannershop.png"

import Seta from "../assets/next.png"
import SetaEsq from "../assets/next (1).png"
import Clock from "../assets/clock.png"
import Truck from "../assets/delivery-truck.png"
import Card from "../assets/credit-card.png"
import Shop from "../assets/shop.png"


const Body = styled.div`
    display: flex;
    justify-content: space-around;
`

const Container = styled.div`
    width: 80%;
    height: 30vh;
    background-color:lime;
    border-radius: 10px;
    margin: 50px 10%;
`

const Next = styled.img`
    margin: 10% 5% ;
    height: 5em;
`

const Banner = styled.img`
    width: 100%;
    height: 100%;
`

const Promo = styled.div`
    width: 23%;
    height: 5vh;
    background-color: orange;
    border-radius: 5px;
    margin: 0 50px;
    display: flex;
    justify-content: space-around;
    padding: 5px;
`
const Sla = styled.div`
    display: flex;
    justify-content: space-around;
    border-top: 4px solid black;
    border-bottom: 4px solid black;
    padding: 2em;
`
const Text = styled.p`
    position: relative;
    top: 0.5em;
    text-align: center;
    text-transform: uppercase;
`

function Lista(){
    return(
        <>
        <Body>
                <Next src={SetaEsq} alt="" />
            <Container>
                <Banner src={ShopBanner} alt="" />
            </Container>
                <Next src={Seta} alt="" />
        </Body>

        <Sla>
            <Promo>
                <img src={Clock} alt="" />
                <Text>Receba em horas</Text>
            </Promo>
            <Promo>
                <img src={Truck} alt="" />
                <Text>Frete gratis</Text>
            </Promo>
            <Promo>
                <img src={Card} alt="" />
                <Text>Até 10x sem juros</Text>
            </Promo>
            <Promo>
                <img src={Shop} alt="" />
                <Text>Retire e troque</Text>
            </Promo>
        </Sla>
        </>
    )
}

export default Lista