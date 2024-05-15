"use client";
import React from "react";
import Image from "next/image";
import { Product } from "@/types/product";

interface cardItem {}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="flex flex-col p-[10px] bg-[#F9F8F6] gap-4">
      <div className="flex flex-col gap-4">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={145}
          height={113}
          className="mix-blend-multiply bg-transparent"
        />
        <div>
          <h2 className="font-semibold text-xl">
            ${(product.price * 100).toFixed(2)}
          </h2>
          <p className="font-light">{product.name}</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>{(product.weight / 1000).toFixed(1)}kg</p>
        <button className="rounded-full p-2">
          <Image src="/24/add product.svg" alt="addic" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default Card;
