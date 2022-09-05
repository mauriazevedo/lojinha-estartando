import React, { useEffect, useState } from "react";
import ProductsCarousel from "../../components/ProductsCarousel";

function Home(props) {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await fetch('/api/best-sellers')
            .then(res => res.json())
            .then(res => {
                setProducts(res)
                setIsLoading(false)
            })
        })();
    }, [])

    if(!isLoading){
        return(
            <>
                <ProductsCarousel products={products}/>
            </>
        );
    }
}

export default Home;