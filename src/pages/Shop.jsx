import { useMemo, useState } from 'react';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

const categories = ['All', ...new Set(products.map((product) => product.category))];

function Shop() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return products;
    return products.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <section className="container section">
      <div className="page-hero">
        <h1>Shop</h1>
        <p>Next drop lands August 2. Here's what's currently available.</p>
      </div>

      <div className="filter-row">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            className={`filter-pill${activeCategory === category ? ' active' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Shop;
