import React from "react";

const ProductCard = () => {
  return (
    <div>
      <div className="bg-gray-200 p-4 rounded-md">
        {/* Imagen */}
        <div className="bg-white rounded-md overflow-hidden shadow-lg max-w-md mx-auto">
          <img src="" alt="" className="w-full h-64 object-cover" />
        </div>
        {/* Contenido */}
        <div className="p-4">
          <h4 className="text-md font-semibold mb-2">Título</h4>
          <p className="text-sm text-gray-800 mb-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            magnam.
          </p>
          <span className="text-sm text-blue-600">S/ 100</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
