import React from "react";
import { MenuContainer, Option } from "./style";
import {BiHomeAlt} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";
import {AiOutlineShoppingCart} from "react-icons/ai";

function BottomMenu() {
    return(
        <MenuContainer>
            <Option isSelected = {true}>
                <BiHomeAlt size={30} />
                <p>Home</p>
            </Option>
            <Option>
                <BsPerson size={30} />
                <p>Perfil</p>
            </Option>
            <Option>
                <span><p>12</p></span>
                <AiOutlineShoppingCart size={30} />
                <p>Carrinho</p>
            </Option>
        </MenuContainer>
    );
}

export default BottomMenu;