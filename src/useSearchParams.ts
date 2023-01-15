import { useCallback } from "react";

export function useSearchParams() {
  const getParam = useCallback((key: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(key) ?? "";
  }, []);

  const setParam = useCallback((key: string, value: string) => {
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, "", url);
  }, []);

  const removeParam = useCallback((key: string) => {
    const url = new URL(window.location.href);
    url.searchParams.delete(key);
    window.history.pushState({}, "", url);
  }, []);

  return {
    getParam,
    setParam,
    removeParam,
  };
}
