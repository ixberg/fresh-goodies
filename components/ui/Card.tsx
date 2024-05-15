import React from "react";
import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-col p-[10px] bg-[#F9F8F6] gap-4">
      <div className="flex flex-col gap-4">
        <Image
          src="/products/cucumber.png"
          alt="image1"
          width={145}
          height={113}
          className="mix-blend-multiply bg-transparent"
        />
        <div>
          <h2 className="font-semibold text-xl">$3.2</h2>
          <p className="font-light">Cucumbers</p>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <p>1kg</p>
        <button className="rounded-full p-2">
          <Image src="/24/add product.svg" alt="addic" width={24} height={24} />
        </button>
      </div>
    </div>
  );
};

export default Card;
