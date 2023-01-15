import Box from "./Box";
import "./NewsResults.css"

export type Article = {
  url: string;
  urlToImage: string;
  title: string;
  description: string;
}

function NewsResults({ articles }: {
  articles: Article[];
}) {



  if (articles.length === 0) {
    return <Box className="no-results">No results</Box>;
  }
  return (
    <>
      <ul className="news-results">
        {articles.map(article => (
          <li className="news-result"
            key={article.url}>
            <h2>
              {article.title}
              {article.urlToImage ? <img src={article.urlToImage} alt="" /> : null}
            </h2>
            <p>{article.description}</p>
            <a href={article.url}>Show more</a>
          </li>
        ))}
      </ul>
    </>
  );
}

export default NewsResults;
