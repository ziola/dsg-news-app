import { useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { Article } from "./NewsResults";

export const FAKE_RESPONSE = {
  status: "ok",
  totalResults: 43028,
  articles: [
    {
      source: { id: "engadget", name: "Engadget" },
      author: "Mariella Moon",
      title: "The first-ever UK space flight fails to reach orbit",
      description:
        "Virgin Orbit's historic \"Start Me Up\" mission launched from Spaceport Cornwell on January 9th as planned, but it has failed to reach orbit and has ultimately ended in failure. If you follow the the company's tweets during the event, everything went well at fi…",
      url: "https://www.engadget.com/the-first-ever-uk-space-flight-virgin-orbit-startmeup-fails-to-reach-orbit-061912341.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2023-01/d94f09c0-90a6-11ed-9f9d-ef95e923710c",
      publishedAt: "2023-01-10T06:19:12Z",
      content:
        'Virgin Orbit\'s historic "Start Me Up" mission launched from Spaceport Cornwell on January 9th as planned, but it has failed to reach orbit and has ultimately ended in failure. If you follow the the c… [+2411 chars]',
    },
    {
      source: { id: "engadget", name: "Engadget" },
      author: "Mariella Moon",
      title: "First ever UK space flight set for January 9th",
      description:
        'In a few days, the first orbital space flight taking off from UK soil might be launching from Spaceport Cornwell. Virgin Orbit has announced that the initial window for its historic "Start Me Up" mission will open on January 9th, Monday, at 22:16 UTC (5:15PM …',
      url: "https://www.engadget.com/first-uk-space-flight-virgin-orbit-january-9th-124022147.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2023-01/1c1ef780-8db2-11ed-a6ff-2c2a06ac2aaa",
      publishedAt: "2023-01-06T12:40:22Z",
      content:
        'In a few days, the first orbital space flight taking off from UK soil might be launching from Spaceport Cornwell. Virgin Orbit has announced that the initial window for its historic "Start Me Up" mis… [+1716 chars]',
    },
    {
      source: { id: "wired", name: "Wired" },
      author: "Maryn McKenna",
      title:
        "The UK Is Enduring an Onslaught of Scarlet Fever. Is the US Next?",
      description:
        "The US is more alert to the risks of strep infections, but the UK has better data. It’s not clear which makes more difference in controlling disease.",
      url: "https://www.wired.com/story/the-uk-is-enduring-an-onslaught-of-scarlet-fever-is-the-us-next/",
      urlToImage:
        "https://media.wired.com/photos/639cde6a302d795e5e6ef040/191:100/w_1280,c_limit/Strep_Science_GettyImages-837482176.jpg",
      publishedAt: "2022-12-19T12:00:00Z",
      content:
        "Its that backdrop of casesrising to historic heights with no clear explanation whythat reinforces the alarm over scarlet fever now. The World Health Organization said last week that the health minist… [+3247 chars]",
    },
    {
      source: { id: "wired", name: "Wired" },
      author: "Lily Hay Newman",
      title: "Russian Ransomware Gang Attack Destabilizes UK Royal Mail",
      description:
        "Plus: Joe Biden's classified-documents scandal, Microsoft ends security support for Microsoft Windows 7, and more.",
      url: "https://www.wired.com/story/royal-mail-ransomware-attack-security-roundup/",
      urlToImage:
        "https://media.wired.com/photos/63c1b2c4ba53d80ea8aba4f9/191:100/w_1280,c_limit/Biz-royal-mail-1373083882.jpg",
      publishedAt: "2023-01-14T14:00:00Z",
      content:
        "A WIRED investigation this week found that the app SweepWizard, which some US law enforcement agencies use to coordinate raids, was publicly exposing sensitive data about hundreds of police operation… [+4782 chars]",
    },
    {
      source: { id: "engadget", name: "Engadget" },
      author: "Steve Dent",
      title:
        "ARM won't sell its latest chip designs in China due to US and UK export controls",
      description:
        "ARM won't sell its latest Neoverse V series chips to Chinese tech giant Alibaba after concluding that the US and UK would not approve licenses to export them, according to The Financial Times. The decision follows new US government rules restricting China and…",
      url: "https://www.engadget.com/arm-latest-chip-designs-china-us-uk-export-controls-100235667.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-12/4b933590-7b8c-11ed-abef-330e87f5d9f2",
      publishedAt: "2022-12-14T10:02:35Z",
      content:
        "ARM won't sell its latest Neoverse V series chips to Chinese tech giant Alibaba after concluding that the US and UK would not approve licenses to export them, according to The Financial Times. The de… [+2196 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title: "The UK charity helping Holy Land donkeys",
      description:
        "A UK charity runs the only shelter for ill-treated and abandoned donkeys in the West Bank.",
      url: "https://www.bbc.co.uk/news/world-middle-east-64044456",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/17758/production/_128088069_dsc04681.jpg",
      publishedAt: "2022-12-25T01:08:21Z",
      content:
        'Media caption, WATCH: Saving donkeys in the Holy Land\r\n"Look how Salwa shows her teeth. She smiles!" says Palestinian vet Rakan Silous, patting a hefty, brown donkey. "Everyone here has a different c… [+4385 chars]',
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title: "Jasmine Harrison reflects on record-breaking 2022 UK swim",
      description:
        "Jasmine Harrison, 23, explains what it was like to spend three months swimming the length of the UK.",
      url: "https://www.bbc.co.uk/news/uk-england-york-north-yorkshire-64027453",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/F403/production/_128076426_979777d6-8601-4968-8294-d841aab78b99.jpg",
      publishedAt: "2022-12-28T01:30:59Z",
      content:
        "While her friends spent summer 2022 at music festivals and barbecues, 23-year-old Jasmine Harrison was in a wetsuit swimming 900 miles (1,448km) up the west coast of the UK. After an arduous 110 days… [+4563 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title:
        "Ukraine war: My nights are peaceful at last, after trauma of air raids",
      description:
        "Nika survived the Russian assault on Kharkiv earlier this year, and is now settled in the UK.",
      url: "https://www.bbc.co.uk/news/world-europe-64053061",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/D229/production/_128110835_nikaplayingtheschoolpianoinengland.jpg",
      publishedAt: "2022-12-26T01:04:23Z",
      content:
        "Media caption, Watch: 'I want to build my life here for now. I want to be a teenager.'\r\nWhen Russia invaded her country, Veronica Ahafonova played piano to drown out the sound of the explosions.\r\nWe … [+5012 chars]",
    },
    {
      source: { id: "bbc-news", name: "BBC News" },
      author: "https://www.facebook.com/bbcnews",
      title: "Ukraine war TikToker's journey to safety in the UK",
      description:
        "Valeria Shashenok will be spending the festive season in London, not with her loved ones in Ukraine.",
      url: "https://www.bbc.co.uk/news/newsbeat-64037867",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_news/C6A9/production/_128075805_valeria2.jpg",
      publishedAt: "2022-12-24T00:51:09Z",
      content:
        'On 24 February 2022, life changed completely for many Ukrainians - including Valeria Shashenok.\r\nThe Russian invasion of Ukraine led millions to flee their homes and their country.\r\n"It was a nightma… [+3415 chars]',
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Anna Cooban",
      title: "The UK just took a step closer to space flight",
      description:
        "The United Kingdom is one step closer to conducting its first ever satellite launch from its own shores.",
      url: "https://www.cnn.com/2022/12/21/business/virgin-orbit-satellite-launch/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/221221105226-uk-spaceflight-license-file-110822.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2022-12-21T13:07:05Z",
      content:
        "The United Kingdom is one step closer to conducting its first ever satellite launch from its own shores. \r\nThe UK Civil Aviation Authority (CAA), a regulatory body, said on Wednesday that it had gran… [+1677 chars]",
    },
  ],
};

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

export function useNewsApiFIrstPage({ query, domain }: UseNewsApi) {
  return useQuery({
    queryKey: ["news", query, domain],
    queryFn: async ({ queryKey }): Promise<NewsApiResponse> => {
      const [_key, query] = queryKey;
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
      ].join("&");
      const response = await fetch(
        url + (domain !== "" ? "&domains=" + encodeURIComponent(domain) : "")
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
      // return new Promise((resolve) => {
      //   setTimeout(
      //     () => resolve(FAKE_RESPONSE as unknown as NewsApiResponse),
      //     1500
      //   );
      // });
    },
  });
}

export function useNewsApi({ query, domain }: UseNewsApi) {
  return useInfiniteQuery({
    queryKey: ["news", query, domain],
    queryFn: async ({ queryKey, pageParam = 1 }): Promise<NewsApiResponse> => {
      const [_key, query] = queryKey;
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
    getNextPageParam: (lastPage, pages) => {
      return pages.length + 1;
    },
  });
}
