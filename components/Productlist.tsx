import React from "react";
import Card from "./ui/Card";

const Productlist = () => {
  return (
    <div className="bg-white h-full w-full p-4 grid grid-cols-2 gap-4">
      <Card></Card>
      <Card></Card>
    </div>
  );
};

export default Productlist;
