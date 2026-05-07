import { Helmet } from 'react-helmet-async';

export type SEOProps = {
    title: string;
    description: string;
    canonical: string;
    noIndex?: boolean;
};

export default function SEO({ title, description, canonical, noIndex = false }: SEOProps) {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <link rel="canonical" href={canonical} />
            {noIndex && <meta name="robots" content="noindex, nofollow" />}
        </Helmet>
    );
}
