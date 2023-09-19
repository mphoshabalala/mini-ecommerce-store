export default function CardItem({ item, onSelectedItem }) {
  return (
    <div className="card-item" onClick={() => onSelectedItem(item.id)}>
      <img src={item.image} alt={item.title} className="item-image" />
      <div className="item-details">
        <h2 className="item-title">{item.title}</h2>
        <p className="item-price">${item.price}</p>
      </div>
    </div>
  );
}
