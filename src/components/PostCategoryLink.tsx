import { IWordpressBlog } from "@/interfaces/wordpress-blog.interface";
import getCategoriesFromPost from "@/utils/getCategoriesFromPost";
import Link from "next/link";
import { Fragment } from "react";

export type Props = {
  blog: IWordpressBlog;
};

export default function PostCategoryLink({ blog }: Props) {
  const categories = getCategoriesFromPost(blog);

  return (
    <span className="cat-links">
      {categories.map((category) => (
        <Fragment key={category.id}>
          <Link
            href={`https://www.shopdigest.com/category/${category.slug}/`}
            rel="category tag"
          >
            {category.name}
          </Link>{" "}
        </Fragment>
      ))}
    </span>
  );
}
