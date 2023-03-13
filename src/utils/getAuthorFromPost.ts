import { IWordpressBlog } from "@/interfaces/wordpress-blog.interface";

export default function getAuthorFromPost(post: IWordpressBlog) {
  const authorId = post.author;
  const author = post._embedded.author.find(
    (author) => author.id === authorId
  )!;

  return author;
}
