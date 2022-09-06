import React from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import Categories from "../../components/Categories";
import ProductComponent from "../../components/ProductComponent";

function Product(props) {
    return(
        <>
            <Header themeToggler={props.themeToggler} theme={props.theme}/>
            <SearchBar theme={props.theme}/>
            <Categories />
            <ProductComponent />
        </>
    );
}

export default Product;