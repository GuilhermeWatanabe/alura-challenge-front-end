import styled from "styled-components";
import logoSVG from "../../assets/images/logo.svg";
import { hoverFormComponentColor, normalFormComponentColor } from "../UI";
import { baseRadius } from "../UI/variables";

const Header = styled.header`
    align-items: center;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;

    border: 1px solid white;
`;

const Logo = styled.img``;

const SearchInput = styled.input`
    border: none;
    border-radius: ${baseRadius};
    color: white;
    height: 56px;
    outline: none;
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
    display: flex;

    img {
        border-radius: 100%;
        height: 32px;
        width: 32px;
    }

    span {
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
