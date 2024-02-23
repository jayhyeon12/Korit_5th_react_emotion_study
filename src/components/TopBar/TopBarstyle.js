import { css } from "@emotion/react";

export const layout = (isShow) => css`
    box-sizing: border-box;
    position: fixed;
    right:0;
    top: ${isShow? "0px" : "-80px"};
    z-index: 90;
    width: 50%;
    height: 80px;
    transition: top 0.5s ease-in-out;
    background-color: ivory;
    box-shadow: 0px 1px 2px #00000022;
`;

export const toggleButton = css`
    box-sizing: border-box;
    position: absolute;
    bottom: -15px;
    right: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    border: 1px solid #dbdbdb;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    width: 50px;
    height: 15px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #aaa;
    }
    &:active {
        background-color: #bbb;
    }
`;

export const menuList = css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    
`;

export const menuItem = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0px 10px;
    border: 1px solid #bababa;
    width: 200px;
    height: 50px;
    color: black;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        background-color: #bbb;
    }

    &:active {
        background-color: #aaa;
    }
`;