import BlogLayout from "@/components/BlogLayout";
import { IWordpressBlog } from "@/interfaces/wordpress-blog.interface";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";

type Props = { blog: IWordpressBlog };

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: "blocking",
  paths: [],
});

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const slug = context.params!.blogSlug;

  const res = await fetch(
    `${process.env.WORDPRESS_API_ENDPOINT}/posts?slug=${slug}&_embed`
  );
  const [blog]: IWordpressBlog[] = await res.json();

  return {
    revalidate: 24 * 60 * 60,
    props: {
      blog,
    },
  };
};

export default function BlogPost(props: Props) {
  if (!props.blog) return <h1>Loading...</h1>;

  const {
    blog: {
      content: { rendered: contentHTML },
      _embedded: {
        "wp:featuredmedia": featuredMedia,
      },
    },
  } = props;

  return (
    <BlogLayout>
      <div className="single__post--block">
        <article className="post type-post status-publish format-standard has-post-thumbnail hentry category-apps tag-grocerist tag-shopify tag-shopify-apps">
          <header className="entry-header">
            <h1 className="entry-title mb-10">
              Grocerist Launches E-Commerce Fulfilment App For Shopify Merchants{" "}
            </h1>
            <div className="entry-meta mb-16">
              <Image
                width={50}
                height={50}
                alt="User profile"
                className="user_image_post"
                src="https://www.shopdigest.com/wp-content/uploads/2022/08/5295-e1660211263775.jpg"
              />
              <strong className="author__name">
                <a href="https://www.shopdigest.com/author/akash/">Akash </a>
              </strong>
              &nbsp;
              <span className="cat-links">
                <a
                  href="https://www.shopdigest.com/category/apps/"
                  rel="category tag"
                >
                  Apps
                </a>
              </span>
              <span className="posted-on">
                <time
                  className="entry-date published"
                  dateTime="2023-03-10T14:57:50+05:30"
                >
                  March 10, 2023
                </time>
                <time className="updated" dateTime="2023-03-10T15:06:33+05:30">
                  March 10, 2023
                </time>
              </span>{" "}
            </div>
          </header>
          {featuredMedia && <figure className="post-thumbnail post__single--thumbnail">
            <Image
              width={800}
              height={400}
              src={featuredMedia[0].media_details.sizes.full.source_url}
              className="attachment-full size-full wp-post-image"
              alt={featuredMedia[0].caption.rendered}
            />{" "}
            <figcaption
              dangerouslySetInnerHTML={{
                __html: featuredMedia[0].caption.rendered,
              }}
            />
          </figure>}
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: contentHTML }}
          />
        </article>
      </div>
    </BlogLayout>
  );
}
