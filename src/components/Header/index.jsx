import styled from "styled-components";
import logoSVG from "../../assets/images/logo.svg";
import { hoverFormComponentColor, normalFormComponentColor } from "../UI";
import { baseRadius } from "../UI/variables";

const Header = styled.header`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    height: auto;
    justify-content: space-between;
    margin-bottom: 40px;
    width: 100%;
`;

const Logo = styled.img``;

const SearchInput = styled.input`
    border: none;
    border-radius: ${baseRadius};
    box-sizing: border-box;
    color: white;
    height: 56px;
    outline: none;
    padding: 1em;
    width: 50%;

    ${normalFormComponentColor}

    &:hover {
        ${hoverFormComponentColor}
    }

    &::placeholder {
        color: white;
        opacity: 0.64;
    }
`;

const User = styled.div`
    align-items: center;
    border-radius: ${baseRadius};
    box-sizing: border-box;
    display: flex;
    height: 56px;
    padding: 0 0.5em;
    transition: 0.25s;

    &:hover {
        background-color: rgba(255, 255, 255, 0.08);
    }

    img {
        border-radius: 100%;
        height: 32px;
        padding-right: 8px;
        width: 32px;
    }
`;

export default () => {
    return (
        <Header>
            <Logo src={logoSVG} />
            <SearchInput placeholder="Busque por algo" />
            <User>
                <img src={`https://github.com/GuilhermeWatanabe.png`} />
                <span>Guilherme</span>
            </User>
        </Header>
    );
};
