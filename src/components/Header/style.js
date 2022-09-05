import styled, { css } from "styled-components";

export const Container = styled.div`
    margin: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg{
        color: #81CAA8;
    }
`;

export const MenuMobile = styled.nav`
    display: none;
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(129,202,168,1) 100%);
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    ul{
        list-style: none;
        padding: 0;
        margin: 0;
        font-size: 2em;

        a{
            text-decoration: none;
            color: #fff;

            li{
                text-align: center;
                padding-bottom: 10px;
                margin: 30px 0;
                border-bottom: 1px solid #fff;
            }
        }     
    }

    svg{
        position: absolute;
        right: 20px;
        top: 20px;
        color: #fff;
        border: 3px solid #fff;
        border-radius: 50%;
    }

    ${(props) => props.isMenuActive && css`
        display: flex;
    `}

    ${(props) => props.theme === "light" && css`
        background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(129,202,168,1) 100%);

        ul{
            a{
                color: #000;
                
                li{
                    border-bottom: 1px solid #000;
                }
            }
        }

        svg{
        color: #000;
        border: 3px solid #000;

        }
    `}

`;