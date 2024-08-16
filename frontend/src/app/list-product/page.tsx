"use client";

import React, { useState, useEffect,} from "react";
import axios from "axios";

interface Product {
  product_id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  product_category: string;
  product_grade: string;
  product_type: string;
}

interface CartItem {
  product_id: Product;
  quantity: number;
}


const ListPage = () => {
  const [products, setProduct] = useState<Product[]>([]);;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:5000/products/");
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();

    return () => {
      console.log("Cleanup");
    };
  }, []);

  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: any) => {
    setCart(prevCart => {
      // Check if the product is already in the cart
      const existingProduct = prevCart.find((item) => item.product_id === product.id);
      if (existingProduct) {
        // If the product is already in the cart, increase the quantity
        return prevCart.map((item) =>
          item.product_id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        // If the product is not in the cart, add it with quantity 1
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
    console.log("Cart:", cart);
    console.log("Adding product to cart:", product);
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <div key={product["product_id"]}>
            <li>{product["name"]}</li>
            <li>{product["price"]}</li>
            <li>{product["description"]}</li>
            <li>{product["stock"]}</li>
            <li>{product["product_category"]}</li>
            <li>{product["product_grade"]}</li>
            <li>{product["product_type"]}</li>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </ul>
      <h1>Cart</h1>
      <ul>
  {cart.map((item) => (
    <div key={item.id}>
      <li>{item.name}</li>
      <li>Quantity: {item.quantity}</li>
      <button
        onClick={() =>
          setCart((prevCart) =>
            prevCart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity - 1 }
                : cartItem
            )
          )
        }
      >
        Decrease Quantity
      </button>
    </div>
  ))}
</ul>

    </div>
  );
};

export default ListPage;

