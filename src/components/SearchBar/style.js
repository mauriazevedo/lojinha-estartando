import styled, { css } from "styled-components";

export const SearchBarContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 30px;
`;

export const SearchBarWrapper = styled.div`
    width: calc(100% - 40px);
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1f1f1f;
    border-radius: 6px;

    input{
        border-radius: 0 6px 6px 0;
        height: 35px;
        border: 0;
        width: calc(100% - 40px);

        &:focus{
            outline: none;
        }
    }

    svg{
        margin: 0 10px;
    }

    ${(props => props.theme === "light" && css`
        border: 1px solid #1f1f1f;
    `)}
`;