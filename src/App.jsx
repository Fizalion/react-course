import { restaurants } from "./mock";
import Restaurant from "./components/Restaurant/Restaurant";
import Layout from "./components/Layout/Layout";
import { useState } from "react";

const App = () => {
  const [activeRestaurantId, setActiveRestaurantId] = useState(
    restaurants[0].id,
  );
  const activeRestaurant = restaurants.find(
    (restaurant) => restaurant.id === activeRestaurantId,
  );

  function handleClick(id) {
    if (id === activeRestaurantId) return;
    setActiveRestaurantId(id);
  }

  return (
    <Layout>
      <main>
        {restaurants.map((restaurant) => (
          <button
            key={restaurant.id}
            onClick={() => handleClick(restaurant.id)}
          >
            {restaurant.name}
          </button>
        ))}

        <Restaurant restaurant={activeRestaurant} />
      </main>
    </Layout>
  );
};

export default App;
