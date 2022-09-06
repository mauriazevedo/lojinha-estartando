import styled, {css} from "styled-components";

export const MenuContainer = styled.div`
    background-color: #606062;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 0;
    display: flex;
    justify-content: space-around;
    padding: 10px 0;
`;

export const Option = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    color: #fff;

    p{
        text-align: center;
        width: 100%;
        margin: 5px 0;
    }

    span{
        position: relative;

        p{
            position: absolute;
            right: -40px;
            top: -5px;
            background-color: #fff;
            border-radius: 50%;
            width: 20px;
            height: 20px;
            color: #606062;

            ${(props => props.isSelected == true && css`
                background-color: #81CAA8;
            `)}
        }
    }

    ${(props => props.isSelected == true && css`
        color: #81CAA8;
    `)}
`;