import styled from "styled-components"
import Logo from "../assets/logo 1.svg"
import LoginImage from "../assets/Frame 2.svg"

function Header(){

    const Cabecalho = styled.header`
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        width: 100%;
        height: 6em;
        display: flex;
        justify-content: space-between;  
        background-color: orange;
    `
    const Lista = styled.ul`
        display: flex;
        list-style: none; 
        padding: 0; 
    `
    const Li = styled.li`
        margin: 0;
    `
    const A = styled.a`
        text-decoration: none; 
        padding: 10px 20px;
        background-color: #f0f0f0; 
        border-radius: 5px; 
        &:hover{
            background-color: #e0e0e0;
        }
    `

    return(
        <>
        <Cabecalho>
            <img src={Logo} alt="" />
            <nav>
            <Lista>
                    <Li><A href="#">Home</A></Li>
                    <Li><A href="#">Canil</A></Li>
                    <Li><A href="#">Cursos</A></Li>
                    <Li><A href="#">Suporte</A></Li>
            </Lista>
            </nav>
            <img src={LoginImage} alt="" />
        </Cabecalho>
        </>
    )
}

export default Header