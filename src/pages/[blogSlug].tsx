import BlogLayout from "@/components/BlogLayout";
import { formatDistance, format } from "date-fns";
import { IWordpressBlog } from "@/interfaces/wordpress-blog.interface";
import getAuthorFromPost from "@/utils/getAuthorFromPost";
import getCategoriesFromPost from "@/utils/getCategoriesFromPost";
import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import { useEffect, useState } from "react";

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

export default function BlogPost({ blog }: Props) {
  const [htmlContent, setHtmlContent] = useState(() => {
    if (!blog) {
      return "";
    }

    const {
      content: { rendered: contentHTML },
    } = blog;

    let newContent = contentHTML;
    while (newContent.indexOf("<iframe") !== -1) {
      const iframeIndex = newContent.indexOf("<iframe");

      const iframeEndIndex = newContent.indexOf("</iframe>", iframeIndex);

      newContent =
        newContent.slice(0, iframeIndex) +
        newContent.slice(iframeEndIndex + "</iframe>".length - 1);
    }

    return newContent;
  });

  useEffect(() => {
    if (!blog) return;

    const {
      content: { rendered: contentHTML },
    } = blog;
    setHtmlContent(contentHTML);
  }, [blog]);

  if (!blog) return <h1>Loading...</h1>;

  const {
    title: { rendered: titleHTML },
    _embedded: { "wp:featuredmedia": featuredMedia },
  } = blog;
  const author = getAuthorFromPost(blog);
  const postCategories = getCategoriesFromPost(blog);

  return (
    <BlogLayout>
      <div className="single__post--block">
        <article className="post type-post status-publish format-standard has-post-thumbnail hentry category-apps tag-grocerist tag-shopify tag-shopify-apps">
          <header className="entry-header">
            <h1
              className="entry-title mb-10"
              dangerouslySetInnerHTML={{
                __html: titleHTML,
              }}
            />
            <div className="entry-meta mb-16">
              <Image
                width={50}
                height={50}
                alt="User profile"
                className="user_image_post"
                src={author.avatar_urls["24"]}
              />
              <strong className="author__name">
                <a href={author.link}>{author.name}</a>
              </strong>
              &nbsp;
              {postCategories.map((category) => (
                <span className="cat-links" key={category.id}>
                  <a href={category.link} rel="category tag">
                    {category.name}
                  </a>
                </span>
              ))}
              <span className="posted-on">
                <time
                  className="entry-date published"
                  dateTime="2023-03-10T14:57:50+05:30"
                >
                  {formatDistance(new Date(blog.date), new Date(), {
                    addSuffix: true,
                  })}
                </time>
                <time className="updated" dateTime="2023-03-10T15:06:33+05:30">
                  March 10, 2023
                </time>
              </span>{" "}
            </div>
          </header>
          {featuredMedia && (
            <figure className="post-thumbnail post__single--thumbnail">
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
            </figure>
          )}
          <div
            className="entry-content"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          <footer className="entry-footer">
            <div className="cat-links">
              <h5>Explore relevant categories</h5>
              {postCategories.map((category) => (
                <a key={category.id} href={category.link} rel="category tag">
                  {category.name}
                </a>
              ))}
            </div>
            <div className="tags-links">
              <h5>Explore relevant tags</h5>
              <a href="https://www.shopdigest.com/tag/grocerist/" rel="tag">
                Grocerist
              </a>{" "}
              <a href="https://www.shopdigest.com/tag/shopify/" rel="tag">
                Shopify
              </a>{" "}
              <a href="https://www.shopdigest.com/tag/shopify-apps/" rel="tag">
                Shopify apps
              </a>
            </div>{" "}
          </footer>
        </article>
      </div>
    </BlogLayout>
  );
}
