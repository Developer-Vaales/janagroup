import Head from 'next/head'

interface SeoProps {
  title: string
  description?: string
  url: string
  image?: string
}

const Seo = ({
  title,
  description = 'The name “Jana” signifies accomplishments or the beginning of something greater. In the rich tapestry of UAE traditions, catering plays a vital role in warmly welcoming guests with the finest culinary delights. It reflects the essence of hospitality deeply rooted in Emirate culture.',
  url,
  image = 'https://jana-theta.vercel.app/logo.png',
}: SeoProps) => {
  return (
    <Head>
      <title>Jana | {title}</title>
      <meta charSet="utf-8" />
      <meta name="robots" content="index, follow" />
      <meta name="theme-color" content="#000000" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="HandheldFriendly" content="true" />
      <link rel="image_src" type="image/png" href={image} />
      <link
        rel="shortcut icon"
        href="https://jana-theta.vercel.app/favicon.ico"
      />
      <meta
        name="keywords"
        content="Jana, UAE, hospitality, culinary delights, Emirate culture"
      />
      <meta name="author" content="https://beyin.me" />
      <meta name="copyright" content="https://beyin.me" />
      <link rel="canonical" href={`https://jana-theta.vercel.app/${url}`} />

      {/* Open Graph Meta Tags */}
      <meta property="og:locale" content="ar" />
      <meta
        property="og:url"
        content={`https://jana-theta.vercel.app/${url}`}
      />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Jana" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://jana-theta.vercel.app/logo-nav.svg"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://jana-theta.vercel.app/logo-nav.svg"
      />

      {/* PWA/Icons */}
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  )
}

export default Seo
