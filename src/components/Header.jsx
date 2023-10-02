import styled from 'styled-components';
import { Link } from 'react-router-dom';
import LogoImage from '../assets/logo 1.svg';
import LoginImage from '../assets/Frame 2.svg';

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
`;

const MenuList = styled.ul`
    display: flex;
    list-style: none;
    margin-top: 2.3em;
`;

const MenuItem = styled.li`
    margin: 0 0.5em;
`;

const MenuLink = styled(Link)`
    text-decoration: none;
    padding: 10px 20px;
    background-color: #000;
    border-radius: 5px;
    color: orange;
    &:hover {
        color: #fff;
    }
`;

const UserSection = styled.div`
    margin: 1em 1em 0 0;
`;

const ImageHome = styled.img`
    position: absolute;
    bottom: 52em; 
    @media screen and (min-width: 1000px) {
        bottom: 34em; 
}
    @media screen and (min-width: 1200px) {
        bottom: 50em; 
}
`;


function Header() {
    return (
        <HeaderContainer>
            <Link to="/home">
                <ImageHome src={LogoImage} alt="Logo" />
            </Link>
            <nav>
                <MenuList>
                    <MenuItem>
                        <MenuLink to="/home">Home</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/canil">Canil</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/cursos">Cursos</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/shop">Loja</MenuLink>
                    </MenuItem>
                    <MenuItem>
                        <MenuLink to="/contato">Suporte</MenuLink>
                    </MenuItem>
                </MenuList>
            </nav>
            <UserSection>
                <Link to="/login">
                    <img src={LoginImage} alt="Login" />
                </Link>
            </UserSection>
        </HeaderContainer>
    );
}

export default Header;
