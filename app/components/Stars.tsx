import React from "react";
import fullStar from "../../public/icons/full-star.png";
import halfStar from "../../public/icons/half-star.png";
import emptyStar from "../../public/icons/empty-star.png";
import Image from "next/image";
import { ReviewType } from "@/utils/types";
import { calculateReviewRatingAverage } from "@/utils/calculateReviewRatingAverage";

const Stars = ({
  reviews,
  rating,
}: {
  reviews?: ReviewType[];
  rating?: number;
}) => {
  const reviewRating = rating || calculateReviewRatingAverage(reviews!);

  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < 5; ++i) {
      const diff = parseFloat((reviewRating - i).toFixed(1));
      if (diff >= 1) stars.push(fullStar);
      else if (diff < 1 && diff > 0) {
        if (diff <= 0.2) stars.push(emptyStar);
        else if (diff > 0.2 && diff <= 0.6) stars.push(halfStar);
        else stars.push(fullStar);
      } else stars.push(emptyStar);
    }
    return stars.map((star, index) => {
      return <Image key={index} src={star} alt="" className="w-4 h-4 mr-1" />;
    });
  };
  return <div className="flex items-center">{renderStars()}</div>;
};

export default Stars;
