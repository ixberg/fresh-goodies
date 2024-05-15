import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <div className="flex w-full bg-white h-[45px] px-4 items-center">
      <ul className="flex items-center overflow-x-scroll h-full text-slate-500">
        <li className="flex items-center px-4 h-full border-b-2 border-slate-600">
          <Link href="#">All</Link>
        </li>
        <li className="flex items-center px-4 h-full ">
          <Link href="#">Spicy</Link>
        </li>
        <li className="flex items-center px-4 h-full ">
          <Link href="#">Dressing</Link>
        </li>
        <li className="flex items-center px-4 h-full ">
          <Link href="#">Sweet</Link>
        </li>
        <li className="flex items-center px-4 h-full ">
          <Link href="#">Roots</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
