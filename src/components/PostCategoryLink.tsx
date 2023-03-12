import { IWordpressBlog } from "@/interfaces/wordpress-blog.interface";
import Link from "next/link";
import { Fragment } from "react";

export type Props = {
  blog: IWordpressBlog;
};

export default function PostCategoryLink(props: Props) {
  const categoryIds = props.blog.categories;
  const categories =
    (categoryIds.map((id) => {
      for (let term of props.blog._embedded["wp:term"]) {
        for (let item of term) {
          if (item.id === id) {
            return item;
          }
        }
      }
    }) as IWordpressBlog["_embedded"]["wp:term"][number][number][]) || [];

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
