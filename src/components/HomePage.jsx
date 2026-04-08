import React from 'react';
import { useCart } from '../context/CartContext';
import ProductList from './ProductList';

function HomePage({ products, searchTerm }) {
  const { addToCart } = useCart();

  // Filter products based on searchTerm
  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      {searchTerm && (
        <p className="search-results">
          Found {filtered.length} products for "{searchTerm}"
        </p>
      )}

      <ProductList
        products={filtered}
        onAddToCart={addToCart}
      />

      {filtered.length === 0 && searchTerm && (
        <p className="no-results">No products found matching "{searchTerm}"</p>
      )}
    </div>
  );
}

export default HomePage;