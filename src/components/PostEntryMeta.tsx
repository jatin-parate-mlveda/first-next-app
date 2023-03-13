import { IWordpressBlog } from "@/interfaces/wordpress-blog.interface";
import Image from "next/image";
import Link from "next/link";
import { formatDistance } from "date-fns";
import getAuthorFromPost from "@/utils/getAuthorFromPost";

export type Props = {
  blog: IWordpressBlog;
};

export default function PostEntryMeta(props: Props) {
  const author = getAuthorFromPost(props.blog);

  return (
    <div className="entry-meta">
      <Image
        height={24}
        width={24}
        className="user_image"
        src={author.avatar_urls["24"]}
        alt={author.name}
      />
      <span className="user-icone">
        <span className="byline">
          {" "}
          <span className="author vcard">
            <Link className="url fn n" href={author.link}>
              {author.name}
            </Link>
          </span>
        </span>
      </span>
      <span>
        <span className="posted-on">
          {formatDistance(new Date(props.blog.date), new Date(), {
            addSuffix: true,
          })}
        </span>{" "}
      </span>
    </div>
  );
}
