import styled, { css } from "styled-components";
import { baseRadius, blue100, blue200, blue300, blue300RGB } from "./variables";

/**
 * Typography
 */

export const titleText = css`
    font-size: 21px;
    line-height: 32px;
`;

export const bodyText = css`
    font-size: 16px;
    line-height: 24px;
`;

const sidebarTitleSize = css`
    font-size: 12px;
    line-height: 18px;
`;

/**
 * Shadows
 */

export const baseShadow = css`
    box-shadow: 0, 16px, rgba(0, 0, 0, 0.24);
`;

/**
 * Form Components
 */

export const normalFormComponentColor = css`
    background-color: rgba(255, 255, 255, 0.16);
    transition: 0.25s;
`;

export const hoverFormComponentColor = css`
    background-color: rgba(255, 255, 255, 0.24);
`;

/**
 * Others
 */

export const SideBarTitle = styled.span`
    letter-spacing: 0.4em;
    text-transform: uppercase;

    ${sidebarTitleSize}
`;

export const FilledButton = styled.button`
    background-color: ${blue300};
    border: none;
    border-radius: ${baseRadius};
    box-sizing: border-box;
    color: #051D3B;
    font-weight: 400;
    height: 56px;
    width: 100%;

    &:hover {
        background-color: ${blue200};
    }

    &:active {
        border: 4px solid;
        border-color: rgba(${blue300RGB}, 0.72);
    }

    &:focus {
        background-color: ${blue100};
    }
`;

export const OutlinedButton = styled.button`
    background-color: rgba(${blue300RGB}, 0.08);
    border: none;
    border-radius: ${baseRadius};
    box-sizing: border-box;
    color: white;
    font-weight: 400;
    height: 56px;
    width: 100%;

    &:hover {
        background-color: rgba(${blue300RGB}, 0.16);
    }

    &:active {
        border: 4px solid;
        border-color: rgba(${blue300RGB}, 0.24);
    }

    &:focus {
        background-color: rgba(${blue300RGB}, 0.24);
    }
`;