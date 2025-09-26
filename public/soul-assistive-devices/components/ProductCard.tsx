
import React from 'react';
import { Link } from 'react-router-dom';
import type { Product } from '../types';
import { useCart } from '../App';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Prevent link navigation
    addToCart(product);
  }

  return (
    <Link to={`/products/${product.id}`} className="group block bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col">
      <div className="overflow-hidden">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-slate-800 truncate">{product.name}</h3>
        <p className="text-slate-600 mt-1 flex-grow">{product.description.substring(0, 60)}...</p>
        <div className="mt-4 flex justify-between items-center">
          <p className="text-xl font-bold text-amber-600">${product.price.toFixed(2)}</p>
          <button 
            onClick={handleAddToCart}
            className="bg-amber-100 text-amber-700 font-semibold py-2 px-4 rounded-md hover:bg-amber-200 transition-colors duration-200 text-sm">
            Add to Cart
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;