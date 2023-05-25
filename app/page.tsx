import Restaurant from "../models/Restaurant";
import connectDB from "../utils/connectDB";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";

const fetchRestaurants = async () => {
  await connectDB();
};

const Home = () => {
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        <RestaurantCard />
      </div>
    </main>
  );
};

export default Home;
