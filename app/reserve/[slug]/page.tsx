import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import { connectDB } from "@/utils/connectDB";
import Restaurant from "@/models/Restaurant";
import { notFound } from "next/navigation";
import axios from "axios";

// const fetchRestaurantBySlug = async (slug: string) => {
//   const restaurant = await Restaurant.findOne({ slug });
//   if (!restaurant) notFound();
//   return restaurant;
// };

const fetchRestaurantBySlug = async (slug: string) => {
  try {
    const res = await axios.get("http://localhost:3000/api/restaurant", {
      params: { slug },
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const Reservation = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { date: string; partySize: string };
}) => {
  const restaurant = await fetchRestaurantBySlug(params.slug);
  return (
    <div className="border-t h-screen">
      <div className="py-9 w-3/5 m-auto">
        <Header
          image={restaurant.main_image}
          name={restaurant.name}
          date={searchParams.date}
          partySize={searchParams.partySize}
        />
        <Form
          slug={restaurant.slug}
          date={searchParams.date}
          partySize={searchParams.partySize}
        />
      </div>
    </div>
  );
};

export default Reservation;
