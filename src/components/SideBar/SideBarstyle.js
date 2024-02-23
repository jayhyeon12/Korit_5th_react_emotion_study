import { css } from '@emotion/react';

export const layout = (isShow) => css`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: ${isShow ? "0px" : "-300px"};
    z-index: 90;
    border-right: 1px solid #111;
    width: 300px;
    height: 100%;
    transition: left 0.5s ease-in-out;
    background-color: white;
    box-shadow: 1px 0px 10px #000022;
`;

export const toggleButton = css`
    box-sizing: border-box;
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: -15px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: 20px;
    border: 1px solid #eee;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    width: 15px;
    height: 50px;
    background-color: white;
    cursor: pointer;
    &:hover {
        background-color: #ddd;
    }
    &:active {
        background-color: #bbb;
    }
`;

export const menuList = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0px;
`;

export const menuItem = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    border-bottom: 1px solid #abab;
    width: 100px;
    height: 50px;
    color: black;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    &:nth-of-type(1) {
        border-top: 1px solid #bcbc;
    }
    &:hover {
        background-color: #eee;
    }
    &:hover {
        background-color: $dbdbdb;
    }
`