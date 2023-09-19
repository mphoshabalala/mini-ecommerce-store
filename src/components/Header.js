export default function Header({ children, cartItems, setCartOpen }) {
  return (
    <header>
      <h2 className="logo">NobleWear Boutique</h2>
      {children}
      <div className="cart" onClick={() => setCartOpen((prev) => !prev)}>
        {cartItems.length}
        <span>🛍️</span>
      </div>
    </header>
  );
}
