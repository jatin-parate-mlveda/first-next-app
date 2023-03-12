import BlogLayout from "@/components/BlogLayout";
import PostCategoryLink from "@/components/PostCategoryLink";
import PostEntryMeta from "@/components/PostEntryMeta";
import { IWordpressBlog } from "@/interfaces/wordpress-blog.interface";
import { GetStaticProps } from "next";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  topPosts: IWordpressBlog[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    `${process.env.WORDPRESS_API_ENDPOINT}/posts?filter[posts_per_page]=1&_embed`
  );
  const body = await res.json();

  return {
    revalidate: 24 * 60 * 60,
    props: {
      topPosts: body,
    },
  };
};

export default function HomePage(props: Props) {
  const { status: sessionStatus, data: userData } = useSession();

  return (
    <BlogLayout>
      {sessionStatus === "unauthenticated" && (
        <div className="login__post--block text-center">
          <h4>To know everything about Shopify</h4>{" "}
          <Link href="/login" className="btn">
            Login to continue
          </Link>
        </div>
      )}
      {props.topPosts.map((post) => (
        <article
          key={post.id}
          id={`post-${post.id}`}
          className="post__block post__medium--thumb"
        >
          <div className="post__excerpt">
            <PostCategoryLink blog={post} />{" "}
            <h2 className="entry-title">
              <Link
                href={`/${post.slug}`}
                rel="bookmark"
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
            </h2>
            <PostEntryMeta blog={post} />
          </div>
          {post._embedded["wp:featuredmedia"] && (
            <div className="post-thumbnail">
              <a
                href="https://www.shopdigest.com/grocerist-launches-e-commerce-fulfilment-app-for-shopify-merchants/"
                aria-hidden="true"
                tabIndex={-1}
              >
                <Image
                  width={650}
                  height={325}
                  src={
                    post._embedded["wp:featuredmedia"][0].media_details.sizes
                      .thumbnail.source_url
                  }
                  className="attachment-medium size-medium wp-post-image"
                  alt={post.slug}
                  loading="lazy"
                />
              </a>
            </div>
          )}
        </article>
      ))}
    </BlogLayout>
  );
}
