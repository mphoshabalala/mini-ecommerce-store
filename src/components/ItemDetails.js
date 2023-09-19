export default function ItemDetails({
  selectedId,
  items,
  onRemoveModal,
  onAddToCart,
}) {
  const item = items.find((item) => item.id === selectedId);
  return (
    <div className="item-modal">
      <div className="cancel" onClick={onRemoveModal}>
        <p>✖️</p>
      </div>
      <div className="main-box">
        <div className="description">
          <div className="image-container">
            <img src={item.image} alt="" />
          </div>

          <div className="main-description">
            <h2>{item.title}</h2>
            <p className="item-description">{item.description}</p>
          </div>
        </div>
        <div className="prices-details">
          <div className="price-box-1">
            <h1>R{(item.price - (item.price * 10) / 100).toFixed(2)}</h1>
            {item.price > 100 && <h5>FREE DELIVERY</h5>}
            <p className="discounted-price">R{item.price.toFixed(2)}</p>
            <p>10% OFF</p>
            <p className="installments">
              Pay 4 <span>interest-free</span> installments of R
              {((item.price - (item.price * 10) / 100) / 4).toFixed(2)} using{" "}
              <a href="">EasyPurchase</a>
            </p>
            <button
              className="add-to-cart-btn"
              onClick={() => onAddToCart(item)}
            >
              + <span>👜</span>Add to cart
            </button>
          </div>

          <div className="reviews">
            <h2>Reviews</h2>
            <div>
              <p>
                <span>⭐</span>
                {item.rating.rate} <a href=""> {item.rating.count} Reviews</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
