import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__cols">
          <div className="site-footer__col">
            <p className="site-footer__brand">Clay by McCay</p>
            <p>Handmade pottery, thrown and glazed in Nashville, TN.</p>
          </div>

          <div className="site-footer__col">
            <h4>Shop</h4>
            <Link to="/shop">All Pieces</Link>
            <Link to="/cart">Cart</Link>
          </div>

          <div className="site-footer__col">
            <h4>Studio</h4>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </div>

          <div className="site-footer__col">
            <h4>Follow</h4>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a href="mailto:hello@claybymccay.com">hello@claybymccay.com</a>
          </div>
        </div>

        <div className="site-footer__bottom">© {new Date().getFullYear()} Clay by McCay. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default Footer;
