import { Highlight, Snippet } from "react-instantsearch";
import Link from "next/link";

export const Hit: React.FC<{ hit: any }> = ({ hit }) => {
  const url = `https://iselp.vercel.app/${hit.url}`;

  return (
    <Link href={url}>
      <div>
        <div className="hit-article_title">
          <Highlight attribute="article_title" hit={hit} />
        </div>
        <div className="hit-heading">
          <Highlight attribute="heading" hit={hit} />
        </div>
        <div className="hit-text">
          <Snippet attribute="text" hit={hit} />
        </div>
      </div>
    </Link>
  );
};
