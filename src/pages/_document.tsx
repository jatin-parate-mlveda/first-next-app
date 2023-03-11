import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          id="spdigest-style-css"
          href="https://www.shopdigest.com/wp-content/themes/spdigest/style.css"
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
