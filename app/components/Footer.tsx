import { useAppContext } from './AppContext';

export const Footer = () => {
	const { siteUrl } = useAppContext();

	return (
		<>
			{/* biome-ignore lint/a11y/useSemanticElements: ignore */}
			{/* biome-ignore lint/correctness/useUniqueElementIds: ignore */}
			<footer className="site-footer" id="colophon" role="contentinfo">
				<div className="site-info">
					{`Proudly powered by `}
					<a className="imprint" href="https://reactrouter.com/">
						React Router
					</a>
					{` and `}
					<a className="imprint" href="https://pages.github.com/">
						Github Pages
					</a>
				</div>
			</footer>

			<script src={`${siteUrl}/js/skip-link-focus-fix.js`} type="text/javascript"></script>

			<script src={`${siteUrl}/js/wp-embed.min.js`} type="text/javascript"></script>
		</>
	);
};
