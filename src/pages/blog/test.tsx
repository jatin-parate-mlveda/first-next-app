import { GetStaticProps } from "next";

type Props = {
  content: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    "https://www.mlveda.com/wp-json/wp/v2/posts/5754?password=himalaya"
  );
  const data = await res.json();

  return {
    props: {
      content: data.content.rendered,
    },
  };
};

export default function TestBlog(props: Props) {
  return <div dangerouslySetInnerHTML={{ __html: props.content }} />;
}
