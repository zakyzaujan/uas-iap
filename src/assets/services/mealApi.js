import axios from "axios";

const API_BASE = "https://www.themealdb.com/api/json/v1/1";

export async function fetchCategories() {
  const { data } = await axios.get(`${API_BASE}/categories.php`);
  return data.categories;
}

export async function fetchMealsByCategory(category) {
  const { data } = await axios.get(`${API_BASE}/filter.php?c=${category}`);
  return data.meals;
}

export async function searchMeals(query) {
  const { data } = await axios.get(`${API_BASE}/search.php?s=${query}`);
  return data.meals;
}

export async function fetchMealDetail(id) {
  const { data } = await axios.get(`${API_BASE}/lookup.php?i=${id}`);
  return data.meals?.[0];
}
