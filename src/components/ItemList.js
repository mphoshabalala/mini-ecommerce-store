import CardItem from "./CardItem";

export default function ItemList({ items, onSelectedItem, isLoading }) {
  if (isLoading)
    return (
      <div className="loading">
        <h2>Loading...</h2>
      </div>
    );
  return (
    <div className="list">
      {items.map((item) => {
        return (
          <CardItem
            item={item}
            title={item.title}
            price={item.price}
            image={item.image}
            id={item.id}
            key={item.id}
            onSelectedItem={onSelectedItem}
          />
        );
      })}
    </div>
  );
}
