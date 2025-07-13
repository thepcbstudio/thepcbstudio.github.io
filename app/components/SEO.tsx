import type { FC } from 'react';

import { useAppContext } from './AppContext';

interface MetaItem {
	name?: string;
	content: string;
	property?: string;
}

interface SeoProps {
	description?: string;
	meta?: MetaItem[];
	title: string;
}

export const SEO: FC<SeoProps> = ({ description, title, meta }) => {
	const { description: siteDescription, title: siteTitle, siteUrl } = useAppContext();
	const metaDescription = description || siteDescription;
	return (
		<>
			<meta content={metaDescription} name="description" />
			<meta content={`${title} – ${siteTitle}`} property="og:title" />
			<meta content={metaDescription} property="og:description" />
			<meta content="website" property="og:type" />
			<meta content={siteUrl} property="og:url" />
			<meta content={siteTitle} property="og:site_name" />
			<meta content={`${siteUrl}/images/cropped-thePCBstudio.png`} property="og:image" />
			<meta content="en_US" name="og:locale" />
			<meta content="summary" name="twitter:card" />
			<meta content={`${title} – ${siteTitle}`} name="twitter:text:title" />
			<meta content={metaDescription} name="twitter:description" />
			{meta?.map(({ content, name, property }) => (
				<meta content={content} key={`${name}-${property}`} name={name} property={property} />
			))}
		</>
	);
};
