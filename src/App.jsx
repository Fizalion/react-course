import { restaurants } from "./mock";
import Restaurant from "./components/Restaurant";

const App = () => {
  return (
    <main>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </main>
  );
};

export default App;
