import { useState } from "react";
import ThemeProvider from "./contexts/ThemeContext/ThemeContext";
import UserProvider from "./contexts/UserContext/UserContext";
import { restaurants } from "./mock";
import Restaurant from "./components/Restaurant/Restaurant";
import Layout from "./components/Layout/Layout";
import Button from "./components/Button/Button";

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
    <ThemeProvider>
      <UserProvider>
        <Layout>
          <main>
            <div className="tabs">
              {restaurants.map((restaurant) => (
                <Button
                  key={restaurant.id}
                  onClick={() => handleClick(restaurant.id)}
                >
                  {restaurant.name}
                </Button>
              ))}
            </div>

            <Restaurant restaurant={activeRestaurant} />
          </main>
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
