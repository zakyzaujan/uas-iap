import { Routes, Route } from "react-router-dom";
import { Layout } from "./assets/components/Layout";
import Profile from "./assets/pages/Profile";
import MealsRouter from "./assets/pages/MealRouter";
import NotFound from "./assets/pages/NotFound";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/meals/*" element={<MealsRouter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
