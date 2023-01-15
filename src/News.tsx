import { useEffect, useState } from "react";
import DomainsList from "./DomainsList";
import NewsResults from "./NewsResults";
import SearchBox from "./SearchBox";
import TopicsList from "./TopicsList";
import { useDomains } from "./useDomains";
import { useNewsApi } from "./useNewsApi";
import { useSearchParams } from "./useSearchParams";
import Button from "./Button";
import Box from "./Box";

import "./News.css";
function News() {
    const { getParam, setParam, removeParam } = useSearchParams();
    const [query, setQuery] = useState(() => getParam("q"));
    const [topics, setTopics] = useState(() => {
        return window.localStorage.getItem("topics")?.split(",") ?? (query !== "" ? [query] : []);
    });
    const { domains, removeDomain, updateDomains, domain, selectDomain, unselectDomain } = useDomains();

    const { data, isLoading, isFetched, isFetchingNextPage, error, fetchNextPage } = useNewsApi({ query, domain });

    useEffect(() => {
        if (!isFetched || !data) {
            return;
        }
        updateDomains(data.pages.at(-1)?.articles ?? []);
    }, [data, isFetched, updateDomains]);

    useEffect(() => {
        if (topics.length) {
            window.localStorage.setItem("topics", topics.join(","));
        } else {
            window.localStorage.removeItem("topics");
        }
    }, [topics]);

    const articles = data?.pages.flatMap(page => page.articles) ?? [];

    const nextPageFetchComponent = isFetchingNextPage ? <Box className="nextPageLoader">Loading next page...</Box> : <Button className="load-more" onClick={() => fetchNextPage()}>Load more</Button>;

    return (
        <div className="container">
            <header className="header">
                <h1>News App</h1>
            </header>
            <aside className="aside">
                <div className="sidebar">
                    <TopicsList
                        topics={topics}
                        onRemove={(topic) => {
                            setTopics(prevTopics => prevTopics.filter(t => t !== topic));
                        }}
                        onSelect={(topic) => {
                            setQuery(topic);
                            setParam("q", topic);
                        }} />
                    <DomainsList
                        selectedDomain={domain}
                        domains={domains}
                        onSelect={selectDomain}
                        onUnselect={unselectDomain}
                        onRemove={removeDomain} />
                </div>
            </aside>
            <main className="main">
                <SearchBox query={query} setQuery={(query) => {
                    setQuery(query);
                    query === "" ? removeParam("q") : setParam("q", query);
                    setTopics((prevTopics) => {
                        if (prevTopics.includes(query) || query === "") {
                            return prevTopics;
                        }
                        return [query, ...prevTopics.slice(0, 4)];
                    });
                }} />

                {isLoading ? <Box className="loader">Loading...</Box> : null}

                {!isLoading && error instanceof Error ?
                    <Box className="error">An error has occurred: {error.message}</Box> : null
                }
                {!isLoading && !error ?
                    <>
                        <NewsResults articles={articles} />
                        {articles.length < (data?.pages[0].totalResults ?? 0) ? nextPageFetchComponent : null}
                    </> : null}
            </main >
        </div >
    )
}

export default News;