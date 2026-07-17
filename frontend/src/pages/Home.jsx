import { Link } from 'react-router-dom';
import products from '../data/products.json';
import ProductCard from '../components/ProductCard';

function Home() {
  const featured = products.filter((product) => product.featured).slice(0, 4);

  return (
    <>
      <section className="hero container">
        <h1>Handmade pottery, thrown in Nashville</h1>
        <p>
          Clay by McCay is a small-batch pottery studio. Every mug, bowl, and vase is
          hand-thrown, glazed, and released in limited drops.
        </p>
        <div className="hero__actions">
          <Link to="/shop" className="btn btn-primary">
            Shop the Drop
          </Link>
          <Link to="/about" className="btn btn-outline">
            Our Story
          </Link>
        </div>
      </section>

      <div className="container">
        <div className="drop-banner">
          <div>
            <p className="drop-banner__label">Next Drop</p>
            <h2 className="drop-banner__title">New pieces land August 2 — set a reminder</h2>
          </div>
          <Link to="/shop" className="btn btn-outline">
            Browse Current Shop
          </Link>
        </div>
      </div>

      <section className="section container">
        <div className="section__heading">
          <h2>Featured Pieces</h2>
          <Link to="/shop">Shop all →</Link>
        </div>
        <div className="product-grid">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
