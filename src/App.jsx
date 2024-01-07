import { createContext, useEffect, useState } from "react";
import Banner from "./components/Banner/Banner";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

export const FoodDataContext = createContext(null);
function App() {
  const [foodItems, setFoodItems] = useState([]);
  useEffect(() => {
    fetch(
      `http://www.api.technicaltest.quadtheoryltd.com/api/Item?page=1&pageSize=10`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data.Items);
        setFoodItems(data.Items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <FoodDataContext.Provider value={foodItems} >
      <div className="max-w-screen-lg mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <Card></Card>
      </div>
      <Footer></Footer>
    </FoodDataContext.Provider>
  );
}

export default App;
