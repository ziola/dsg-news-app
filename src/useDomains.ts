import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "./useSearchParams";
import type { Article } from "./NewsResults";

export type Domain = string;

function getDomain({ url }: Article) {
  const domain = url.substring(url.indexOf("://") + 3).split("/")[0];
  return domain.startsWith("www.") ? domain.substring(4) : domain;
}

export function useDomains() {
  const { getParam, setParam, removeParam } = useSearchParams();

  const [domains, setDomains] = useState(() => {
    return window.localStorage.getItem("domains")?.split(",") ?? [];
  });

  const [domain, setDomain] = useState(() => getParam("d"));

  const removeDomain = useCallback(
    (domainToRemove: Domain) => {
      if (domainToRemove === domain) {
        setDomain("");
        removeParam("d");
      }
      setDomains((prevDomains) =>
        prevDomains.filter((d) => d !== domainToRemove)
      );
    },
    [domain, removeParam]
  );

  const selectDomain = useCallback(
    (domain: Domain) => {
      setDomain(domain);
      setParam("d", domain);
    },
    [setParam]
  );

  const unselectDomain = useCallback(
    (domain: Domain) => {
      setDomain("");
      removeParam("d");
    },
    [removeParam]
  );

  const updateDomains = useCallback((articles: Article[]) => {
    setDomains((prevDomains) => {
      return [...new Set(articles.map(getDomain))]
        .filter((domain) => !prevDomains.includes(domain))
        .concat(prevDomains)
        .filter((domain) => domain !== "")
        .slice(0, 5);
    });
  }, []);

  useEffect(() => {
    if (domains.length) {
      window.localStorage.setItem("domains", domains.join(","));
    } else {
      window.localStorage.removeItem("domains");
    }
  }, [domains]);

  return {
    domains,
    domain,
    removeDomain,
    selectDomain,
    unselectDomain,
    updateDomains,
  };
}
