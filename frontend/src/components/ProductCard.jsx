import { Link } from 'react-router-dom';
import { getProductImage } from '../utils/productImages';

function ProductCard({ product }) {
  const soldOut = !product.inStock;

  return (
    <div className={`product-card${soldOut ? ' is-sold-out' : ''}`}>
      <div className="product-card__image">
        {soldOut && <span className="product-card__badge">Sold Out</span>}
        <img src={getProductImage(product.image)} alt={product.name} />
      </div>
      <p className="product-card__category">{product.category}</p>
      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__price">${product.price}</p>
      <Link className="product-card__link" to={`/shop/${product.id}`} aria-label={product.name} />
    </div>
  );
}

export default ProductCard;
