import styled from "styled-components";

export const Container = styled.div`
    flex-basis: 700px;
    margin: 20px;
    padding: 20px 40px 20px 40px;
    border-radius: 10px;
    background: ${({ theme }) => theme.color.akaroa};
    box-shadow: 0px 0px 20px -4px ${({ theme }) => theme.color.black};
    text-align: center;
`;