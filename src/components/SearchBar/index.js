import React from "react";
import { SearchBarContainer, SearchBarWrapper } from "./style";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar(props) {
    return(
        <SearchBarContainer>
            <SearchBarWrapper theme={props.theme}>
                <AiOutlineSearch size={20}/>
                <input type="text" placeholder="Pesquisar"/>
            </SearchBarWrapper>
        </SearchBarContainer>
    );
}

export default SearchBar;