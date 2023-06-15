import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/utils/connectDB";

import Restaurant from "@/models/Restaurant";
import Cuisine from "@/models/Cuisine";
import Review from "@/models/Review";
import Location from "@/models/Location";

export const GET = async (req: NextRequest) => {
  await connectDB();

  const slug = req.nextUrl.searchParams.get("slug");

  if (slug) return NextResponse.json(await Restaurant.findOne({ slug }));

  const restaurants = await Restaurant.find()
    .select("name main_image price slug cuisine_id location_id reviews")
    .populate([
      { path: "location_id", model: Location },
      { path: "cuisine_id", model: Cuisine },
      { path: "reviews", model: Review },
    ]);

  return NextResponse.json(restaurants);
};
