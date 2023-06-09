import Price from "@/app/components/Price";
import Stars from "@/app/components/Stars";
import { calculateReviewRatingAverage } from "@/utils/calculateReviewRatingAverage";
import { CuisineType, LocationType, PRICE, ReviewType } from "@/utils/types";
import Link from "next/link";
import React from "react";

interface RestaurantCardType {
  _id: string;
  name: string;
  main_image: string;
  price: PRICE;
  cuisine_id: CuisineType;
  location_id: LocationType;
  slug: string;
  reviews: ReviewType[];
}

const RestaurantCard = ({ restaurant }: { restaurant: RestaurantCardType }) => {
  const renderRatingText = () => {
    const rating = calculateReviewRatingAverage(restaurant.reviews);

    if (rating > 4) return "Awesome";
    else if (rating > 3) return "Good";
    else if (rating > 0) return "Average";
    else return "";
  };

  return (
    <div className="border-b flex pb-5 ml-4">
      <img src={restaurant.main_image} alt="" className="w-44 h-36 rounded" />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">
            <Stars reviews={restaurant.reviews} />
          </div>
          <p className="ml-2 text-sm">{renderRatingText()}</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price} />
            <p className="mr-4 capitalize">{restaurant.cuisine_id.name}</p>
            <p className="mr-4 capitalize">{restaurant.location_id.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`/restaurant/${restaurant.slug}`}>
            View more information
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
