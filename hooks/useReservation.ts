import axios from "axios";
import { useState } from "react";

const useReservation = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createReservation = async ({
    slug,
    partySize,
    day,
    time,
    booker_firstName,
    booker_lastName,
    booker_phone,
    booker_email,
    booker_occasion,
    booker_request,
    setDidBook,
  }: {
    slug: string;
    partySize: string;
    day: string;
    time: string;
    booker_firstName: string;
    booker_lastName: string;
    booker_phone: string;
    booker_email: string;
    booker_occasion: string;
    booker_request: string;
    setDidBook: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    setLoading(true);
    try {
      const res = await axios.post(
        `http://localhost:3000/api/restaurant/${slug}/reserve`,
        {
          booker_firstName,
          booker_lastName,
          booker_phone,
          booker_email,
          booker_occasion,
          booker_request,
        },
        {
          params: { day, time, partySize },
        }
      );
      setLoading(false);
      setDidBook(true);
      return res.data;
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };
  return { loading, error, createReservation };
};

export default useReservation;
