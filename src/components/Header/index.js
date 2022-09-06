import React, { useState } from "react";
import {FiMenu} from "react-icons/fi";
import {AiOutlineClose} from "react-icons/ai"
import {ReactComponent as Logo} from "../../icons/logo1.svg";
import { HeaderContainer, MenuMobile } from "./style";

function Header(props) {
    const [isMenuActive, setIsMenuActive] = useState(false);

    function menuToggler(){
        if(isMenuActive){
            setIsMenuActive(false);
        }else{
            setIsMenuActive(true);
        }
    }

    return(
        <HeaderContainer>
            <MenuMobile
                isMenuActive={isMenuActive}
                theme={props.theme}
            >
                <AiOutlineClose onClick={() => {menuToggler()}} size={42} />
                <ul>
                    <a href="/"><li>Home</li></a>
                    <a href="#"><li>Perfil</li></a>
                    <a href="#"><li>Carrinho</li></a>
                </ul>
            </MenuMobile>
            <FiMenu onClick={() => {menuToggler()}} size={24}/>
            <Logo />
            <button onClick={props.themeToggler}>Trocar</button>
        </HeaderContainer>
    );
}

export default Header;