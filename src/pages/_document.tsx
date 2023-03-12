import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link
          rel="stylesheet"
          id="spdigest-style-css"
          href="https://shopdigest.com/wp-content/themes/spdigest/style.css"
          // href="http://45.79.140.122/wp-content/themes/spdigest/style.css"
          media="all"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
