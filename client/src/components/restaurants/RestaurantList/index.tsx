import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

const RestaurantList = () => {
  const { state } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    if (state?.restaurantName)
      setSearchParams({ restaurantName: state.restaurantName });
  }, [state?.restaurantName, setSearchParams]);

  useEffect(() => {
    console.log(searchParams.toString());
  }, [searchParams]);

  return <div>list</div>;
};

export default RestaurantList;
