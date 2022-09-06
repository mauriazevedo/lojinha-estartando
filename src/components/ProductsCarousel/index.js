import React from "react";
import { ProductContainer, ProductsContainer, SectionTitle } from "./style";

function ProductsCarousel(props) {
    function adjustName(name) {
        if(name.length > 15){
            return `${name.slice(0, 15)}...`
        }
        return name;
    }

    return(
        <>
            <SectionTitle>
                {props.title}
            </SectionTitle>
            <ProductsContainer>
                {props.products["items"].map((product) => 
                <ProductContainer>
                    <a href={`/product/${product.id}`}>
                        <img src={product.image} />
                        <p>{adjustName(product.name)}</p>
                        <p>R$ {product.price}</p>
                    </a>
                </ProductContainer>)}
            </ProductsContainer>
        </>
    );
}

export default ProductsCarousel;