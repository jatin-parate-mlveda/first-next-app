import { IWordpressBlog } from "@/interfaces/wordpress-blog.interface";

export default function getCategoriesFromPost(blog: IWordpressBlog) {
  const categoryIds = blog.categories;
  const categories =
    (categoryIds.map((id) => {
      for (let term of blog._embedded["wp:term"]) {
        for (let item of term) {
          if (item.id === id) {
            return item;
          }
        }
      }
    }) as IWordpressBlog["_embedded"]["wp:term"][number][number][]) || [];

  return categories;
}
