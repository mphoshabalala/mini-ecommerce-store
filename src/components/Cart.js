export default function Cart({ cartItems }) {
  // const totalPrice = cartItems.map((item) => item.price++);
  // console.log(totalPrice);
  return (
    <div className="cart-container">
      {cartItems.map((cartItem) => (
        <div className="main-item" key={cartItem.id}>
          <p>{cartItem.title}</p>
          <div>
            <p>R{cartItem.price}</p>
            <div>
              <button className="buy-item-btn">Buy</button>
              <p>🚮</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
