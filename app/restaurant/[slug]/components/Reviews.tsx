import { ReviewType } from "@/utils/types";
import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = ({ reviews }: { reviews: ReviewType[] }) => {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 borber-b pb-5">
        What {reviews.length} {reviews.length > 1 ? "people are" : "person is"}{" "}
        saying
      </h1>
      <div>
        {reviews.map((review) => {
          return <ReviewCard key={review._id} review={review} />;
        })}
      </div>
    </div>
  );
};

export default Reviews;
