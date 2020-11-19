import React from 'react';
import './App.css';

function Product({image, title, description}) {
    return (
        <main>
            <article className={"product"}>
                <img src={image} alt={title}/>
                <h2 className={"product-name"} >
                    {title}
                </h2>
                <p className={"product-description"}>
                    {description}
                </p>
            </article>
        </main>
    );
}

export default Product;
