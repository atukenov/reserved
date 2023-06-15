import { connectDB } from "@/utils/connectDB";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import Restaurant from "@/models/Restaurant";
import Location from "@/models/Location";
import Cuisine from "@/models/Cuisine";
import Review from "@/models/Review";
import { RestaurantCardType, RestaurantType } from "@/utils/types";
import axios, { AxiosResponse } from "axios";

// const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {

//   const restaurants: RestaurantCardType[] = await Restaurant.find()
//     .select("name main_image price slug cuisine_id location_id reviews")
//     .populate([
//       { path: "location_id", model: Location },
//       { path: "cuisine_id", model: Cuisine },
//       { path: "reviews", model: Review },
//     ]);

//   return restaurants;
// };

const fetchRestaurants = async (): Promise<RestaurantType[] | undefined> => {
  try {
    const res = await axios.get("http://localhost:3000/api/restaurant");
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default async function Home() {
  const restaurants = await fetchRestaurants();
  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants?.map((restaurant, index) => {
          return <RestaurantCard key={index} restaurant={restaurant} />;
        })}
      </div>
    </main>
  );
}
