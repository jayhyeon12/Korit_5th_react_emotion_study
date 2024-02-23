import { css } from "@emotion/react";

export const layout = (isShow) => css`
    box-sizing: border-box;
    position: fixed;
    right:0;
    top: ${isShow? "0px" : "-80px"};
    z-index: 3;
    width: 600px;
    height: 80px;
    transition: top 0.5s ease-in-out;
    background-color: azure;
    box-shadow: 1px 0px 4px;
`;

export const toggleButton = css`
    box-sizing: border-box;
    position: absolute;
    transform: translateY(-50%);
    top: 90px;
    right: -50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
        background-color: #aaa;
    }
    &:active {
        background-color: #bbb;
    }
`;

export const menus = css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 30px;
    
`;

export const menuItem = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: center;
    align-items: center;

    border-bottom: 1px solid #bababa;
    width: 200px;
    height: 50%;
    color: black;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    &:nth-of-type(1) {
        
    }
    &:hover {
        background-color: #bbb;
    }

    &:active {
        background-color: #aaa;
    }
`