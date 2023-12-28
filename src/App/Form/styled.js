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
    background-color: ${({ theme }) => theme.color.leather};
    width: 100%;
    border-radius: 5px;
    padding: 10px;
    box-shadow: 0px 0px 20px -4px ${({ theme }) => theme.color.leather};
    transition: 0.3s;
    border: 1px solid ${({ theme }) => theme.color.black};
    cursor: pointer;

    &:hover {
        filter: brightness(110%);
    }

    &:active {
        filter: brightness(120%);
        box-shadow: none;
    }
`;

export const Mesage = styled.p`
    text-align: center;
`;
