import { Highlight, Snippet } from "react-instantsearch";
import { getPropertyByPath } from 'instantsearch.js/es/lib/utils';

export const Hit: React.FC<{ hit: any }> = ({ hit }) => {
	return (
		<article>
			<img src={hit.poster_path} />
			<div className="hit-article_title">
				<Highlight attribute="article_title" hit={hit} />
			</div>
			<div className="hit-heading">
				<Highlight attribute="heading" hit={hit} />
			</div>
			<div className="hit-text">
				<Snippet attribute="text" hit={hit} />
			</div>
		</article>
	);
};