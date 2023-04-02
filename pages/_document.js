import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      {/* make /assets/cool_x the favicon */}
      <link rel="icon" href="/assets/cool_x.png" />
      <link rel="mask-icon" href="/assets/cool_x.png" color="#000000" />
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
