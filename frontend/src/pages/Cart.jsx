import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const { items, removeFromCart, updateQty, totalPrice } = useCart();

  if (items.length === 0) {
    return (
      <div className="container empty-state">
        <h1>Your cart is empty</h1>
        <p>Looks like you haven't added any pieces yet.</p>
        <Link to="/shop" className="btn btn-primary">
          Shop the Drop
        </Link>
      </div>
    );
  }

  return (
    <div className="container cart-page">
      <h1>Your Cart</h1>

      <div>
        {items.map((item) => (
          <div className="cart-item" key={item.id}>
            <div className="cart-item__image">
              <span>{item.name}</span>
            </div>

            <div>
              <p className="cart-item__name">{item.name}</p>
              <div className="qty-control">
                <button type="button" onClick={() => updateQty(item.id, item.qty - 1)}>
                  −
                </button>
                <span>{item.qty}</span>
                <button type="button" onClick={() => updateQty(item.id, item.qty + 1)}>
                  +
                </button>
              </div>
              <button type="button" className="cart-item__remove" onClick={() => removeFromCart(item.id)}>
                Remove
              </button>
            </div>

            <div className="cart-item__totals">${(item.price * item.qty).toFixed(2)}</div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <div className="cart-summary__row">
          <span>Total</span>
          <span>${totalPrice.toFixed(2)}</span>
        </div>
        <button type="button" className="btn btn-primary" disabled title="Checkout coming soon">
          Checkout — Coming Soon
        </button>
      </div>
    </div>
  );
}

export default Cart;
