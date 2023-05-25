import { connectDB } from "@/utils/connectDB";
import Header from "./components/Header";
import RestaurantCard from "./components/RestaurantCard";
import Restaurant from "@/models/Restaurant";
import { RestaurantCardType } from "@/utils/types";

const fetchRestaurants = async (): Promise<RestaurantCardType[]> => {
  await connectDB();

  const restaurants: RestaurantCardType[] = await Restaurant.find()
    .select("name main_image price slug cuisine_id location_id")
    .populate("location_id cuisine_id");
  return restaurants;
};

export default async function Home() {
  const restaurants = await fetchRestaurants();

  return (
    <main>
      <Header />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map((restaurant, index) => {
          return <RestaurantCard key={index} restaurant={restaurant} />;
        })}
      </div>
    </main>
  );
}
