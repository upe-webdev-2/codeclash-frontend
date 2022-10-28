import Head from "next/head";
import config from "@/site.config";

const generateSchema = (url, title) => ({
  "@context": "http://schema.org",
  "@type": "WebSite",
  url,
  name: title
  //   alternateName: config.title,
});

type HeaderProps = {
  title?: string;
  /**
   * Relative URL to cover image.
   * Should be inside `/public/` folder.
   */
  coverImage?: string;
};

const Header = ({ title, coverImage }: HeaderProps) => {
  const { author, url, title: defaultTitle, description, keywords } = config;
  const pageTitle = title ? `${defaultTitle} | ${title}` : defaultTitle;
  const schema = generateSchema(url, title);
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(", ")} />

        {/* Schema.org tags */}
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Head>
    </>
  );
};

export default Header;
