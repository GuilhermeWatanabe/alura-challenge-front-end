import { Link } from "react-router-dom";
import styled from "styled-components";
import { blue300, blue300RGB, doubleRadius } from "../UI/variables";
import icon1 from "../../assets/images/menu-icon1.svg";
import icon2 from "../../assets/images/menu-icon2.svg";
import { SideBarTitle } from "../UI";

const Menu = styled.nav`
    display: flex;
    flex-direction: column;
    width: 25%;

    a {
        align-items: center;
        color: inherit;
        display: flex;
        margin: 1em 0 0;
        text-decoration: none;
    }
`;

const Icon = styled.img`
    background-color: rgba(${blue300RGB}, 0.16);
    border-radius: ${doubleRadius};
    cursor: pointer;
    height: 20px;
    padding: 14px;
    transition: 0.25s;
    width: 20px;

    background-color: ${props => props.active};

    a:hover & {
        background-color: rgba(${blue300RGB}, 0.64);
    }
`;

const MenuText = styled.span`
    margin-left: 1em;
    opacity: ${(props) => (props.active ? 1 : 0.56)};
`;

export default () => {
    return (
        <Menu>
            <SideBarTitle>Menu</SideBarTitle>
            <Link to={"editor"}>
                <Icon active={blue300} src={icon1} />
                <MenuText active>Editor de Código</MenuText>
            </Link>
            <Link to={"community"}>
                <Icon src={icon2} />
                <MenuText>Comunidade</MenuText>
            </Link>
        </Menu>
    );
};
