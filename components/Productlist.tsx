"use client";
import React, { useEffect, useState } from "react";
import Card from "./ui/Card";
import { Product } from "@/types/product";

const Productlist: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:8080/products"); // Ganti dengan URL API Anda
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-white h-full w-full p-4 grid grid-cols-2 gap-4">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Productlist;
