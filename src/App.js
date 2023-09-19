import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import ItemDetails from "./components/ItemDetails";
import CardItem from "./components/CardItem";
import ItemList from "./components/ItemList";
import Main from "./components/Main";
import Search from "./components/Search";
import Header from "./components/Header";

const BASE_URL = "https://fakestoreapi.com/products";

export default function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [cartItems, setCartItems] = useState(function () {
    const ItemsInLocalStorage = JSON.parse(localStorage.getItem("addedToCart"));
    return ItemsInLocalStorage || [];
  });
  const [isCartOpen, setCartOpen] = useState(false);
  function handleSelectedItem(id) {
    setSelectedId((selectedId) => (id === selectedId ? null : id));
  }

  useEffect(() => {
    async function fetchItems() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}`);
        const data = await res.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    }

    fetchItems();
  }, []);

  useEffect(() => {
    // Retrieve cart items from localStorage when the component mounts
    const storedCartItems = JSON.parse(localStorage.getItem("addedToCart"));
    if (storedCartItems) {
    }
  }, []);

  function handleRemoveModal() {
    setSelectedId(null);
  }

  function handleAddToCart(item) {
    setCartItems((cartItems) => [...cartItems, item]);
    localStorage.setItem("addedToCart", JSON.stringify([...cartItems, item]));
  }

  return (
    <div className="App">
      <Header cartItems={cartItems} setCartOpen={setCartOpen}>
        <Search />
      </Header>
      <Main>
        <ItemList
          isLoading={isLoading}
          items={items}
          onSelectedItem={handleSelectedItem}
        />
        {selectedId && (
          <ItemDetails
            selectedId={selectedId}
            items={items}
            onRemoveModal={handleRemoveModal}
            onAddToCart={handleAddToCart}
          />
        )}

        {isCartOpen && <Cart cartItems={cartItems} />}
      </Main>
      <Footer />
    </div>
  );
}
