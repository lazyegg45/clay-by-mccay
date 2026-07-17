import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const navLinks = [
  { to: '/shop', label: 'Shop' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <NavLink to="/" className="site-header__logo" onClick={() => setMenuOpen(false)}>
          Clay by McCay
        </NavLink>

        <nav className="site-header__nav">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <NavLink to="/cart" className="cart-link" aria-label="Cart">
            🧺
            {totalItems > 0 && <span className="cart-link__count">{totalItems}</span>}
          </NavLink>
          <button
            type="button"
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="container site-header__mobile-nav">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setMenuOpen(false)}>
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
