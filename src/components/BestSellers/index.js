import React from "react";
import { useEffect, useState } from "react";
import ProductsCarousel from "../ProductsCarousel";

function BestSellers() {
    const [bestSellers, setBestSellers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await fetch('/api/best-sellers')
            .then(res => res.json())
            .then(res => {
                setBestSellers(res);
                setIsLoading(false);
            })
        })();
    }, []);

    if(!isLoading){
        return(
            <>
                <ProductsCarousel title="Os mais vendidos" products={bestSellers}/>
            </>
        );
    }else{
        return(
            <h2>Carregando</h2>
        );
    }
}

export default BestSellers;