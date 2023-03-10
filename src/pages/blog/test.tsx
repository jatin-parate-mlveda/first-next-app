import { GetStaticProps } from "next";
import Head from "next/head";

type Props = {
  content: string;
  title: string;
  description: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    "https://www.mlveda.com/wp-json/wp/v2/posts/5754?password=himalaya"
  );
  const data = await res.json();

  return {
    props: {
      content: data.content.rendered,
      title: data.title.rendered,
      description: data.yoast_head_json.og_description,
    },
  };
};

export default function TestBlog(props: Props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta property="og:url" content="https://theshopdigest.com/blog/test" />
        <meta name="og:url" content="https://theshopdigest.com/blog/test" />
        <meta property="og:title" content={props.title} />
        <meta name="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta name="og:description" content={props.description} />
        <meta name="description" content={props.description} />
        <meta
          property="og:image"
          content="https://mlveda.b-cdn.net/wp-content/uploads/2022/12/logo-1.png"
        />
      </Head>
      <main>
        <div dangerouslySetInnerHTML={{ __html: props.content }} />
      </main>
    </>
  );
}
