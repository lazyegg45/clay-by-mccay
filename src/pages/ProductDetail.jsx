import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import products from '../data/products.json';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <div className="container empty-state">
        <h1>Piece not found</h1>
        <p>We couldn't find that item — it may have sold out from a past drop.</p>
        <Link to="/shop" className="btn btn-primary">
          Back to Shop
        </Link>
      </div>
    );
  }

  const soldOut = !product.inStock;

  const handleAddToCart = () => {
    addToCart(product, qty);
    setAdded(true);
  };

  return (
    <div className="container product-detail">
      <div className="product-detail__image">
        <span>{product.name}</span>
      </div>

      <div>
        <p className="product-detail__category">{product.category}</p>
        <h1>{product.name}</h1>
        <p className="product-detail__price">${product.price}</p>

        {soldOut && <span className="badge-inline sold-out">Sold Out</span>}

        <p>{product.description}</p>

        {!soldOut && (
          <>
            <div className="qty-row">
              <div className="qty-control">
                <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))}>
                  −
                </button>
                <span>{qty}</span>
                <button type="button" onClick={() => setQty((q) => q + 1)}>
                  +
                </button>
              </div>
            </div>

            <div className="hero__actions" style={{ justifyContent: 'flex-start' }}>
              <button type="button" className="btn btn-primary" onClick={handleAddToCart}>
                Add to Cart
              </button>
              {added && (
                <button type="button" className="btn btn-outline" onClick={() => navigate('/cart')}>
                  View Cart
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
