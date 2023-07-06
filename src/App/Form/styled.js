import styled from "styled-components";

export const Header = styled.h1`
    margin-bottom: 35px;
`;

export const Element = styled.div`
    text-align: left;
    padding-left: 30px;
    padding-right: 30px;
`;

export const Text = styled.span`
    display: inline-block;
    width: 40%;
`;

export const Select = styled.select`
    border: 1px solid;
    padding: 10px;
    width: 100%;
    max-width: 265px;
    border-radius: 5px;
`;

export const Field = styled.input`
    border: 1px solid;
    padding: 10px;
    width: 100%;
    max-width: 265px;
    border-radius: 5px;
`;

export const Button = styled.button`
    background-color: rgb(155, 122, 81);
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 20px -4px #1e1a1a;
    transition: 0.3s;
    border: 1px solid rgb(69, 69, 69);
    cursor: pointer;

    &:hover {
    background-color: rgb(172, 135, 90);
    }

    &:active {
    background-color: rgb(196, 154, 103);
    box-shadow: none;
    }
`;