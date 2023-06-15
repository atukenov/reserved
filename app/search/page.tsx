import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";
import Restaurant from "@/models/Restaurant";
import Location from "@/models/Location";
import Cuisine from "@/models/Cuisine";
import { PRICE, RestaurantCardType } from "@/utils/types";

interface SearchParams {
  city?: string;
  cuisine?: string;
  price?: PRICE;
}

const fetchRestaurantsByCity = async (searchParams: SearchParams) => {
  const select =
    "_id name main_image price cuisine_id location_id slug reviews";
  const filter: any = {};
  if (searchParams.city)
    filter.location_id = await Location.find({
      name: searchParams.city.toLowerCase(),
    });
  if (searchParams.cuisine)
    filter.cuisine_id = await Cuisine.find({
      name: searchParams.cuisine.toLowerCase(),
    });
  if (searchParams.price) filter.price = searchParams.price;

  return Restaurant.find(filter)
    .select(select)
    .populate("location_id cuisine_id reviews");
};

const fetchLocations = async () => {
  return await Location.find();
};

const fetchCuisines = async () => {
  return await Cuisine.find();
};

export default async function Search({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const restaurants = await fetchRestaurantsByCity(searchParams);
  const locations = await fetchLocations();
  const cuisines = await fetchCuisines();
  return (
    <>
      <Header />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <SearchSideBar
          locations={locations}
          cuisines={cuisines}
          searchParams={searchParams}
        />
        <div className="w-5/6">
          {restaurants.length ? (
            <>
              {restaurants.map((restaurant: any) => {
                return (
                  <RestaurantCard
                    key={restaurant._id}
                    restaurant={restaurant}
                  />
                );
              })}
            </>
          ) : (
            <p>Sorry, we found no restaurants in this area</p>
          )}
        </div>
      </div>
    </>
  );
}
