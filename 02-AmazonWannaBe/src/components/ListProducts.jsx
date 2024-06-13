import React from "react";
import ProductCard from "./ProductCard";

const ListProducts = () => {
  return (
    <div className="container mx-auto p-4 bg-slate-500">
      <div className="mb-3 flex justify-between">
        <div className="grid grid-cols-1 sd:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 g gap-4 bg-orange-500">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ListProducts;
