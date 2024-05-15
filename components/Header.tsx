import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex bg-white w-full h-[10ch] justify-between items-end px-4 py-4">
      <div>
        <h1 className="font-semibold text-xl">Vegetables</h1>
      </div>
      <div className="flex gap-4">
        <Image
          src="/24/filter.svg"
          alt="fiter-ic"
          width={24}
          height={24}
        ></Image>
        <Image
          src="/24/Search.svg"
          alt="fiter-ic"
          width={24}
          height={24}
        ></Image>
      </div>
    </div>
  );
};

export default Header;
