import React from "react";
import { useState, useEffect } from "react";
import { CategoriesContainer, Category } from "./style";
import { TbLamp, TbShirt } from "react-icons/tb";
import { BsCup } from "react-icons/bs";
import { BiNote } from "react-icons/bi";

function Categories() {

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState([true]);

    useEffect(() => {
        (async () => {
            fetch("/api/categories")
            .then(res => res.json())
            .then(res => {
                setCategories(res);
                setIsLoading(false);
            });
        })();
    }, [])

    if(!isLoading){
        return(
            <CategoriesContainer>
                {categories["items"].map((category, Icon) => {
                    return(
                        <Category>
                            {/*}{Icon = category.icon}{*/}
                            <TbShirt size={24} />
                            <p>{category.name}</p>
                        </Category>
                    );
                })}
            </CategoriesContainer>
        );
    }else{
        return(
            <h2>Carregando</h2>
        );
    }
}

export default Categories;