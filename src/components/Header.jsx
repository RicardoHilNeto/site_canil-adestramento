import styled from "styled-components"
import LogoImage from "../assets/logo 1.svg"
import LoginImage from "../assets/Frame 2.svg"


const HeaderContainer = styled.header`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100%;
    height: 6em;
    display: flex;
    justify-content: space-between;  
    background-color: orange;
    border-bottom: 3px solid black;

`

const MenuList = styled.ul`
    display: flex;
    list-style: none; 
    margin-top: 2.3em;

`

const MenuItem = styled.li`
    margin: 0 0.5em;
`

const MenuLink = styled.a`
    text-decoration: none; 
    padding: 10px 20px;
    background-color: #000; 
    border-radius: 5px; 
    color: orange;
    &:hover{
        color: #fff;
    }
`

const UserSection = styled.div`
    margin: 1em 1em 0 0;
`

const handleButtonLoginClick = () => {
    console.log("Redirecionando para a tela de login!")
}
const handleButtonLogoClick = () => {
    console.log("Redirecionando para a Home!")
}

function Header() {
    return (
        <>
            <HeaderContainer>
                <img src={LogoImage} onClick={handleButtonLogoClick} alt="Logo" />
                <nav>
                    <MenuList>
                        <MenuItem><MenuLink href="#" onClick={handleButtonLogoClick}>Home</MenuLink></MenuItem>
                        <MenuItem><MenuLink href="#">Canil</MenuLink></MenuItem>
                        <MenuItem><MenuLink href="#">Cursos</MenuLink></MenuItem>
                        <MenuItem><MenuLink href="#">Suporte</MenuLink></MenuItem>
                    </MenuList>
                </nav>
                    <UserSection>
                        <img src={LoginImage} onClick={handleButtonLoginClick} alt="Login" />
                    </UserSection>
            </HeaderContainer>
        </>
    )
}

export default Header
