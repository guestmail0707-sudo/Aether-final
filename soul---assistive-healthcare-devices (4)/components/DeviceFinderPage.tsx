
import React, { useState } from 'react';
import { findMatchingProducts } from '../services/geminiService';
import { products } from '../constants';
import ProductCard from './ProductCard';
import Spinner from './Spinner';
import type { Product } from '../types';

const DeviceFinderPage: React.FC = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [suggestedProducts, setSuggestedProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setIsLoading(true);
    setError(null);
    setHasSearched(true);
    setSuggestedProducts([]);

    try {
      const matchingIds = await findMatchingProducts(query);
      if (matchingIds.length > 0) {
          const matchedProducts = products.filter(p => matchingIds.includes(p.id));
          setSuggestedProducts(matchedProducts);
      } else {
        setSuggestedProducts([]);
      }
    } catch (err) {
      setError('An error occurred while fetching suggestions. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">AI Device Finder</h1>
            <p className="text-lg text-slate-600 mb-8">
                Describe your needs, and our AI will suggest the perfect assistive devices for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 max-w-2xl mx-auto">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                    placeholder="e.g., 'I need help with reading small text'"
                    className="flex-grow p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition"
                />
                <button
                    onClick={handleSearch}
                    disabled={isLoading}
                    className="bg-amber-600 text-white font-bold py-3 px-8 rounded-md hover:bg-amber-700 transition duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Searching...' : 'Find Devices'}
                </button>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
            {isLoading && <Spinner />}
            {error && <p className="text-center text-red-500">{error}</p>}
            
            {!isLoading && hasSearched && suggestedProducts.length === 0 && (
                <div className="text-center bg-slate-100 p-8 rounded-lg">
                    <h3 className="text-2xl font-semibold text-slate-800">No matches found</h3>
                    <p className="text-slate-600 mt-2">We couldn't find any products matching your description. Please try rephrasing your needs.</p>
                </div>
            )}

            {suggestedProducts.length > 0 && (
                <div>
                     <h2 className="text-3xl font-bold text-center text-slate-800 mb-8">Our Recommendations For You</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {suggestedProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};

export default DeviceFinderPage;