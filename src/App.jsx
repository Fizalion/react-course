import { Routes, Route, Navigate } from "react-router-dom";
import ThemeProvider from "./contexts/ThemeContext/ThemeContext";
import UserProvider from "./contexts/UserContext/UserContext";
import Layout from "./components/Layout/Layout";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import MenuPage from "./pages/MenuPage/MenuPage";
import ReviewsPage from "./pages/ReviewsPage/ReviewsPage";
import DishPage from "./pages/DishPage/DishPage";

const HomePage = () => {
  return <div>HomePage</div>;
};

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/restaurants" element={<RestaurantsPage />} />

            <Route
              path="/restaurants/:restaurantId"
              element={<RestaurantsPage />}
            >
              <Route index element={<Navigate to="menu" replace />} />
              <Route path="menu" element={<MenuPage />} />
              <Route path="reviews" element={<ReviewsPage />} />
            </Route>

            <Route path="/dish/:dishId" element={<DishPage />} />
          </Routes>
        </Layout>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
