import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { ProductContainer, Star } from "./style";
import { AiFillStar } from "react-icons/ai";

function ProductComponent() {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    function insertStars(stars){
        let starsComponent = [];

        for(let i = 0; i < stars; i++){
            starsComponent.push(<Star isFilled={true}><AiFillStar size={12} /></Star>);
        }

        for(let i = 0; i < (5 - stars); i++){
            starsComponent.push(<Star isFilled={false}><AiFillStar size={12} /></Star>);
        }

        return starsComponent;
    }

    useEffect(() => {
        (async () => {
            await fetch(`http://meuendpoint.com/product?id=${id}`)
            .then(res => res.json())
            .then(res => setProduct(res))
        })();

    }, []);

    return(
        <ProductContainer>
            <img src={product.image} />
            <h2>{product.name}</h2>
            <div>
                {console.log(insertStars(4))}
                {insertStars(1).map((elemento) => elemento)}
            </div>
            <p>{`R$ ${product.price}`}</p>
        </ProductContainer>
    )
}

export default ProductComponent;