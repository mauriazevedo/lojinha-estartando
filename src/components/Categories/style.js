import styled from "styled-components";

export const CategoriesContainer = styled.div`
    background-color: #606062;
    display: flex;
    justify-content: space-between;
    margin: 30px 0;
    padding: 20px;
`;

export const Category = styled.div`
    width: 20%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    color: #1f1f1f;

    svg{
        background-color: #81CAA8;
        padding: 5px;
        border-radius: 50%;
    }

    p{
        width: 100%;
        text-align: center;
        margin-top: 5px;
        font-size: 13px;
        color: #fff;

    }
`