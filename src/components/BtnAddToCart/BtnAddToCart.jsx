import React, { useState } from 'react';
import "../BtnAddToCart/btnAddToCart.css";

function BtnAddToCart() {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    const handleDecrease = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <>
            <button className="quantity">
                <span onClick={ handleIncrease}>+</span>
                <span>{quantity}</span>
                <span onClick={handleDecrease}>-</span>
            </button>
        </>
    );
}

export default BtnAddToCart;