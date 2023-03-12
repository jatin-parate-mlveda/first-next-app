interface IMediaSize {
  file: string;
  width: number;
  height: number;
  filesize: number;
  mime_type: string;
  source_url: string;
}

export interface IWordpressBlog {
  id: number;
  date: string;
  modified: string;
  slug: string;
  type: string;
  status: string;
  title: { rendered: string };
  content: { rendered: string };
  author: number;
  featured_media: number;
  categories: number[];
  tags: number[];
  _embedded: {
    "wp:featuredmedia": {
      id: number;
      caption: { rendered: string };
      media_details: {
        width: number;
        height: number;
        sizes: {
          medium: IMediaSize;
          thumbnail: IMediaSize;
          full: IMediaSize;
        };
      };
    }[];
  };
}
