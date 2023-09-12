import React, { useEffect, useState } from "react";

export default function useDebounce(searchTerm, delay) {
  const [debounceValue, setDebounceValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(searchTerm);
    }, delay);

    const cleanup = () => {
      clearTimeout(timer);
    };

    return cleanup;
  }, [searchTerm]);

  return { debounceValue };
}
