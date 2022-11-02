import supabase from "helper/supabase";
import { useState, useEffect, useCallback } from "react";

function useFetch(numeberOfIteration) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      console.log(numeberOfIteration);
      const { data, error } = await supabase
        .from("music")
        .select("*")
        .range(
          10 * (numeberOfIteration - 1),
          9 * numeberOfIteration + (numeberOfIteration - 1)
        );
      if (error) console.log(error);
      await setList((prev) => [...prev, ...data]);

      await setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [numeberOfIteration]);

  useEffect(() => {
    sendQuery();
  }, [sendQuery]);

  return { loading, error, list };
}

export default useFetch;
