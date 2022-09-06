import styled from "styled-components";

export const SectionTitle = styled.h2`
    font-size: 20px;
    margin: 40px 0 40px 20px;
    font-weight: 700;
`

export const ProductsContainer = styled.div`
    display: flex;
    width: 100%;
    overflow-x: scroll;

    &::-webkit-scrollbar {
        display: none;
    }
`;

export const ProductContainer = styled.div` 
    display: flex;
    flex-wrap: wrap;
    width: 30%;
    margin: 0 20px;
    flex: 0 0 auto;

    img{
        border-radius: 6px;
        width: 100%;
    }

    p{
        width: 100%;
        margin: 5px 0;
        font-weight: 400;
        font-size: 14px;
        font-family: "Open Sans", "sans-serif";

        &:nth-last-child(1){
            margin-top: 0;
        }
    }
`;