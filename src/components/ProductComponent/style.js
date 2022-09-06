import styled, { css } from "styled-components";

export const ProductContainer = styled.div`
    img{
        width: calc(100% - 40px);
        margin: 20px;
        height: 250px;
        object-fit: cover;
    }

    h2{
        font-weight: 400;
        margin-left: 20px;
        font-size: 20px;
    }

    p{
        font-size: 12px;
        margin-left: 20px;
    }
`;

export const Star = styled.span`
    color: #606062;

    &:nth-child(1){
        margin-left: 20px;
    }

    ${(props => props.isFilled == true && css`
        color: #81CAA8;
    `)}
`