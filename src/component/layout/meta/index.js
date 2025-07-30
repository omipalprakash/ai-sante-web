import Head from 'next/head';

export default function Meta({
  title = 'Default Title',
  description = 'Default description for your app.',
  keywords = 'default, keywords, here',
  author = 'Your Name',
  children,
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {/* Add more meta tags as needed */}
      {children}
    </Head>
  );
}