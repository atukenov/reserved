import React from "react";

import RestaurantNavBar from "../components/RestaurantNavBar";
import Menu from "../components/Menu";
import Restaurant from "@/models/Restaurant";
import Item from "@/models/Items";

const fetchRestaurantMenu = async (slug: string) => {
  const restaurant_id = await Restaurant.findOne({ slug }, "_id");
  if (!restaurant_id) {
    throw new Error();
  }
  const menu = await Item.find({ restaurant_id });
  return menu;
};

const RestaurantMenu = async ({ params }: { params: { slug: string } }) => {
  const menu = await fetchRestaurantMenu(params.slug);
  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <RestaurantNavBar slug={params.slug} />
        <Menu menu={menu} />
      </div>
    </>
  );
};

export default RestaurantMenu;
