import React from "react";
import { useEffect, useState } from "react";
import ProductsCarousel from "../ProductsCarousel";

function Releases() {
    const [releases, setReleases] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await fetch('/api/releases')
            .then(res => res.json())
            .then(res => {
                setReleases(res);
                setIsLoading(false);
            })
        })();
    }, []);

    if(!isLoading){
        return(
            <>
                <ProductsCarousel title="Lançamentos" products={releases}/>
            </>
        );
    }else{
        return(
            <h2>Carregando</h2>
        );
    }
}

export default Releases;