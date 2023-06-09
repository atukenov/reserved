import axios from "axios";
import { useState } from "react";

const useAvailabilities = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<
    { time: string; available: boolean }[] | null
  >(null);

  const fetchAvailabilities = async ({
    slug,
    partySize,
    day,
    time,
  }: {
    slug: string;
    partySize: string;
    day: string;
    time: string;
  }) => {
    setLoading(true);
    try {
      const res = await axios.get(
        `http://localhost:3000/api/restaurant/${slug}/availability`,
        {
          params: { day, time, partySize },
        }
      );
      setLoading(false);
      setData(res.data);
    } catch (error: any) {
      setLoading(false);
      setError(error.response.data.errorMessage);
    }
  };
  return { loading, error, data, fetchAvailabilities };
};

export default useAvailabilities;
