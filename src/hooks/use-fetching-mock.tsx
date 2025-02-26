import { useEffect, useState } from "react";

export const useFetchingMock = () => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFetching(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return { isFetching };
};
