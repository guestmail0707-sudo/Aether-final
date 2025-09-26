
import React, { useState, createContext, useContext, useCallback } from 'react';
import { HashRouter, Routes, Route, Link, useParams } from 'react-router-dom';
// FIX: Removed 'Category' from import as it is not exported from './constants'.
import { products, categories } from './constants';
import type { Product, CartItem } from './types';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductCard from './components/ProductCard';
import DeviceFinderPage from './components/DeviceFinderPage';
import ConfirmationPage from './components/ConfirmationPage';
import PaymentPage from './components/PaymentPage';
import OrderSuccessPage from './components/OrderSuccessPage';

// Cart Context
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (product: Product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item => (item.id === productId ? { ...item, quantity } : item))
      );
    }
  };
  
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, clearCart, isCartOpen, setIsCartOpen }}>
      {children}
    </CartContext.Provider>
  );
};

// Page Components defined within App.tsx to keep file count low
const HomePage: React.FC = () => (
  <div>
    <section className="relative bg-orange-100 py-20 px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">Welcome to SOUL</h1>
            <p className="mt-4 text-lg sm:text-xl text-slate-700">Empowering Independence, Enhancing Life.</p>
            <p className="mt-2 max-w-2xl mx-auto text-base sm:text-lg text-slate-600">Discover assistive technology designed with heart, for a life without limits.</p>
            <Link to="/products" className="mt-8 inline-block bg-amber-500 text-white font-bold py-3 px-8 rounded-full hover:bg-amber-600 transition duration-300 transform hover:scale-105">
                Explore Products
            </Link>
        </div>
    </section>

    <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-slate-800">Shop by Category</h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {categories.map(category => (
                    <Link key={category.id} to={`/products?category=${category.id}`} className="group block text-center p-6 bg-slate-100 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                        <category.icon className="h-12 w-12 mx-auto text-amber-600 group-hover:text-amber-700 transition-colors" />
                        <h3 className="mt-4 text-lg font-semibold text-slate-700 group-hover:text-amber-800">{category.name}</h3>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  </div>
);

const ProductsPage: React.FC = () => {
    const [searchParams] = React.useState(new URLSearchParams(window.location.hash.split('?')[1]));
    const selectedCategory = searchParams.get('category');
    
    const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;
  
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">Our Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = products.find(p => p.id === Number(id));
    const { addToCart } = useCart();

    if (!product) {
        return <div className="text-center py-20">Product not found.</div>;
    }

    return (
        <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{product.name}</h1>
                        <p className="text-3xl text-amber-600 font-semibold my-4">${product.price.toFixed(2)}</p>
                        <p className="text-slate-600 leading-relaxed mb-6">{product.description}</p>
                        <button 
                            onClick={() => addToCart(product)}
                            className="w-full bg-amber-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-amber-700 transition duration-300 flex items-center justify-center text-lg shadow-md">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};


const App: React.FC = () => {
  return (
    <CartProvider>
      <HashRouter>
        <div className="flex flex-col min-h-screen font-sans text-slate-800">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailPage />} />
              <Route path="/ai-finder" element={<DeviceFinderPage />} />
              <Route path="/confirmation" element={<ConfirmationPage />} />
              <Route path="/payment" element={<PaymentPage />} />
              <Route path="/order-success" element={<OrderSuccessPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </CartProvider>
  );
};

export default App;
