import React, { useEffect } from "react";
import { useState } from "react";
import { ProductContainer, ProductsContainer, SectionTitle } from "./style";
import Shirt from "../../images/shirt.png";

function ProductsCarousel(props) {

    console.log(props.products);


    function handleName(name) {
        if(name.length >= 14){
            return `${name.slice(0, 14)}...`
        }
        return name;
    }

    function handlePrice(price){
        return `R$ ${price}`
    }

    return(
        <>
            <SectionTitle>
                Os mais vendidos
            </SectionTitle>
            {}
            <ProductsContainer>
                {props.products["items"].map((product) => <ProductContainer>
                    <img src={product.image} />
                    <p>{handleName(product.name)}</p>
                    <p>{handlePrice(product.price)}</p>
                </ProductContainer>)}
            </ProductsContainer>
            {}
        </>
    );
}

export default ProductsCarousel;