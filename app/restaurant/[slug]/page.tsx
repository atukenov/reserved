import React from "react";
import Header from "./components/Header";
import RestaurantNavBar from "./components/RestaurantNavBar";
import Title from "./components/Title";
import Rating from "./components/Rating";
import Description from "./components/Description";
import Images from "./components/Images";
import Reviews from "./components/Reviews";
import ReservationCard from "./components/ReservationCard";
import Restaurant from "@/models/Restaurant";
import { ReviewType } from "@/utils/types";

interface RestaurantType {
  _id: number;
  name: string;
  images: string[];
  description: string;
  slug: string;
  reviews: ReviewType[];
}

const fetchRestaurantBySlug = async (slug: string): Promise<RestaurantType> => {
  const restaurant = await Restaurant.findOne(
    { slug },
    "_id name images description slug reviews"
  ).populate("reviews");
  if (!restaurant) {
    throw new Error();
  }
  return restaurant;
};

const RestaurantDetails = async ({ params }: { params: { slug: string } }) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <RestaurantNavBar slug={restaurant.slug} />
        <Title name={restaurant.name} />
        <Rating reviews={restaurant.reviews} />
        <Description description={restaurant.description} />
        <Images images={restaurant.images} />
        <Reviews reviews={restaurant.reviews} />
      </div>
      <div className="w-[27%] relative text-reg">
        <ReservationCard />
      </div>
    </>
  );
};

export default RestaurantDetails;
