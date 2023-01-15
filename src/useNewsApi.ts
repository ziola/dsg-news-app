import { useInfiniteQuery } from "@tanstack/react-query";
import { Article } from "./NewsResults";

export type UseNewsApi = {
  query: string;
  domain: string;
};

type NewsApiResponse = {
  articles: Article[];
  totalResults: number;
  status: string;
};

export const NEWS_API_BASEURL = "https://newsapi.org/v2/everything?pageSize=10";

export function useNewsApi({ query, domain }: UseNewsApi) {
  return useInfiniteQuery({
    queryKey: ["news", query, domain],
    queryFn: async ({ queryKey, pageParam = 1 }): Promise<NewsApiResponse> => {
      const [, query] = queryKey;
      if (query === "") {
        return Promise.resolve({
          articles: [],
          totalResults: 0,
          status: "ok",
        });
      }

      const url = [
        NEWS_API_BASEURL,
        `q=${encodeURIComponent(query)}`,
        `apiKey=${process.env.REACT_APP_NEWS_API_KEY}`,
        `page=${pageParam}`,
      ].join("&");
      const response = await fetch(
        url + (domain !== "" ? "&domains=" + encodeURIComponent(domain) : "")
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
    getNextPageParam: (_, pages) => {
      return pages.length + 1;
    },
  });
}
