import { GetStaticProps } from "next";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import TopBar from "@/components/TopBar";

type Props = {
  content: string;
  title: string;
  description: string;
  featuredMedia: {
    src: string;
    captionHTML: string;
  };
};

const svg = `
                  <svg
                    version="1.2"
                    baseProfile="tiny"
                    width="200mm"
                    height="200mm"
                    viewBox="0 0 20000 20000"
                    preserveAspectRatio="xMidYMid"
                    fill-rule="evenodd"
                    stroke-width="28.222"
                    stroke-linejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:ooo="http://xml.openoffice.org/svg/export"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    xml:space="preserve"
                  >
                    <defs className="ClipPathGroup">
                      <clipPath
                        id="presentation_clip_path"
                        clipPathUnits="userSpaceOnUse"
                      >
                        <rect x="0" y="0" width="20000" height="20000"></rect>
                      </clipPath>
                    </defs>
                    <defs className="TextShapeIndex">
                      <g ooo:slide="id1" ooo:id-list="id3 id4 id5 id6 id7"></g>
                    </defs>
                    <defs className="EmbeddedBulletChars">
                      <g
                        id="bullet-char-template(57356)"
                        transform="scale(0.00048828125,-0.00048828125)"
                      >
                        <path d="M 580,1141 L 1163,571 580,0 -4,571 580,1141 Z"></path>
                      </g>
                      <g
                        id="bullet-char-template(57354)"
                        transform="scale(0.00048828125,-0.00048828125)"
                      >
                        <path d="M 8,1128 L 1137,1128 1137,0 8,0 8,1128 Z"></path>
                      </g>
                      <g
                        id="bullet-char-template(10146)"
                        transform="scale(0.00048828125,-0.00048828125)"
                      >
                        <path d="M 174,0 L 602,739 174,1481 1456,739 174,0 Z M 1358,739 L 309,1346 659,739 1358,739 Z"></path>
                      </g>
                      <g
                        id="bullet-char-template(10132)"
                        transform="scale(0.00048828125,-0.00048828125)"
                      >
                        <path d="M 2015,739 L 1276,0 717,0 1260,543 174,543 174,936 1260,936 717,1481 1274,1481 2015,739 Z"></path>
                      </g>
                      <g
                        id="bullet-char-template(10007)"
                        transform="scale(0.00048828125,-0.00048828125)"
                      >
                        <path d="M 0,-2 C -7,14 -16,27 -25,37 L 356,567 C 262,823 215,952 215,954 215,979 228,992 255,992 264,992 276,990 289,987 310,991 331,999 354,1012 L 381,999 492,748 772,1049 836,1024 860,1049 C 881,1039 901,1025 922,1006 886,937 835,863 770,784 769,783 710,716 594,584 L 774,223 C 774,196 753,168 711,139 L 727,119 C 717,90 699,76 672,76 641,76 570,178 457,381 L 164,-76 C 142,-110 111,-127 72,-127 30,-127 9,-110 8,-76 1,-67 -2,-52 -2,-32 -2,-23 -1,-13 0,-2 Z"></path>
                      </g>
                      <g
                        id="bullet-char-template(10004)"
                        transform="scale(0.00048828125,-0.00048828125)"
                      >
                        <path d="M 285,-33 C 182,-33 111,30 74,156 52,228 41,333 41,471 41,549 55,616 82,672 116,743 169,778 240,778 293,778 328,747 346,684 L 369,508 C 377,444 397,411 428,410 L 1163,1116 C 1174,1127 1196,1133 1229,1133 1271,1133 1292,1118 1292,1087 L 1292,965 C 1292,929 1282,901 1262,881 L 442,47 C 390,-6 338,-33 285,-33 Z"></path>
                      </g>
                      <g
                        id="bullet-char-template(9679)"
                        transform="scale(0.00048828125,-0.00048828125)"
                      >
                        <path d="M 813,0 C 632,0 489,54 383,161 276,268 223,411 223,592 223,773 276,916 383,1023 489,1130 632,1184 813,1184 992,1184 1136,1130 1245,1023 1353,916 1407,772 1407,592 1407,412 1353,268 1245,161 1136,54 992,0 813,0 Z"></path>
                      </g>
                      <g
                        id="bullet-char-template(8226)"
                        transform="scale(0.00048828125,-0.00048828125)"
                      >
                        <path d="M 346,457 C 273,457 209,483 155,535 101,586 74,649 74,723 74,796 101,859 155,911 209,963 273,989 346,989 419,989 480,963 531,910 582,859 608,796 608,723 608,648 583,586 532,535 482,483 420,457 346,457 Z"></path>
                      </g>
                      <g
                        id="bullet-char-template(8211)"
                        transform="scale(0.00048828125,-0.00048828125)"
                      >
                        <path d="M -4,459 L 1135,459 1135,606 -4,606 -4,459 Z"></path>
                      </g>
                    </defs>
                    <defs className="TextEmbeddedBitmaps"></defs>
                    <g>
                      <g id="id2" className="Master_Slide">
                        <g id="bg-id2" className="Background"></g>
                        <g id="bo-id2" className="BackgroundObjects"></g>
                      </g>
                    </g>
                    <g className="SlideGroup">
                      <g>
                        <g
                          id="id1"
                          className="Slide"
                          clip-path="url(#presentation_clip_path)"
                        >
                          <g className="Page">
                            <g className="com.sun.star.drawing.ClosedBezierShape">
                              <g id="id3">
                                <path
                                  fill="rgb(101,187,242)"
                                  stroke="none"
                                  d="M 340,199 C 316,199 298,220 298,244 L 298,250 C 257,242 236,230 214,206 201,233 215,255 231,268 221,268 211,266 204,260 204,259 203,260 203,260 209,283 230,299 245,304 231,304 222,306 211,299 211,299 210,299 210,300 218,322 234,329 256,329 245,338 230,346 201,347 200,347 199,348 201,349 211,358 237,365 274,365 334,365 382,310 382,242 L 382,239 C 392,235 397,226 400,218 400,217 400,217 399,217 L 379,224 C 379,224 379,224 379,223 387,216 394,208 396,199 396,199 396,199 396,199 386,203 377,207 370,209 369,209 368,209 367,209 362,206 348,199 340,199 Z"
                                ></path>
                              </g>
                            </g>
                            <g className="com.sun.star.drawing.ClosedBezierShape">
                              <g id="id4">
                                <path
                                  fill="rgb(66,133,244)"
                                  stroke="none"
                                  d="M 19608,10217 C 19608,9411 19544,8823 19402,8213 L 10200,8213 10200,11851 15602,11851 C 15493,12753 14904,14115 13598,15030 L 13578,15151 16489,17406 16691,17426 C 18542,15717 19608,13200 19608,10217 Z"
                                ></path>
                              </g>
                            </g>
                            <g className="com.sun.star.drawing.ClosedBezierShape">
                              <g id="id5">
                                <path
                                  fill="rgb(52,168,83)"
                                  stroke="none"
                                  d="M 10200,19800 C 12844,19800 15068,18928 16689,17426 L 13598,15030 C 12770,15606 11659,16009 10200,16009 7608,16009 5408,14300 4623,11936 L 4508,11947 1485,14287 1445,14398 C 3055,17600 6366,19800 10200,19800 Z"
                                ></path>
                              </g>
                            </g>
                            <g className="com.sun.star.drawing.ClosedBezierShape">
                              <g id="id6">
                                <path
                                  fill="rgb(251,188,5)"
                                  stroke="none"
                                  d="M 4625,11938 C 4419,11330 4300,10677 4300,10000 4300,9326 4419,8672 4615,8062 L 4611,7932 1547,5553 1445,5600 C 781,6930 400,8421 400,10000 400,11579 781,13072 1445,14400 L 4625,11938 Z"
                                ></path>
                              </g>
                            </g>
                            <g className="com.sun.star.drawing.ClosedBezierShape">
                              <g id="id7">
                                <path
                                  fill="rgb(235,67,53)"
                                  stroke="none"
                                  d="M 10200,3989 C 12040,3989 13281,4785 13989,5449 L 16755,2749 C 15055,1170 12844,200 10200,200 6366,200 3055,2400 1445,5602 L 4613,8064 C 5408,5700 7608,3989 10200,3989 Z"
                                ></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
`;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    `${process.env.WORDPRESS_API_ENDPOINT}/3349?_embed`
  );
  const data = await res.json();

  return {
    props: {
      content: data.content.rendered,
      title: data.title.rendered,
      description: data.yoast_head_json?.og_description ?? "",
      featuredMedia: {
        src: data._embedded["wp:featuredmedia"][0].media_details.sizes.full
          .source_url,
        captionHTML: data._embedded["wp:featuredmedia"][0].caption.rendered,
      },
    },
  };
};

export default function TestBlog(props: Props) {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Hang in there...</p>;

  if (status !== "authenticated")
    return (
      <>
        <p>Not signed in.</p>
        <button onClick={() => signIn("google")}>Sign in</button>
      </>
    );

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta property="og:url" content="https://theshopdigest.com/blog/test" />
        <meta name="og:url" content="https://theshopdigest.com/blog/test" />
        <meta property="og:title" content={props.title} />
        <meta name="og:title" content={props.title} />
        <meta property="og:description" content={props.description} />
        <meta name="og:description" content={props.description} />
        <meta name="description" content={props.description} />
        <meta
          property="og:image"
          content="https://mlveda.b-cdn.net/wp-content/uploads/2022/12/logo-1.png"
        />
      </Head>
      <TopBar />
      <main className="site-main" id="primary">
        <section className="section">
          <div className="wrap">
            <div className="row">
              <div className="col-22 col-sm-12 mobile-md--hide">
                <aside className="widget widget__newsletter left-sidebar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40.459"
                    height="40.501"
                    viewBox="0 0 40.459 40.501"
                  >
                    <g
                      id="email-mail-svgrepo-com"
                      transform="translate(-0.261 0)"
                    >
                      <path
                        id="Path_2"
                        data-name="Path 2"
                        d="M40.72,199.717a1.715,1.715,0,0,1-.506,1.264,1.827,1.827,0,0,1-1.18.421H1.947a2.015,2.015,0,0,1-1.18-.421,1.715,1.715,0,0,1-.506-1.264v-24.7H40.72v24.7Z"
                        transform="translate(0 -160.901)"
                        fill="#ffd15c"
                      ></path>
                      <path
                        id="Path_3"
                        data-name="Path 3"
                        d="M45.978,303.767a1.827,1.827,0,0,1-1.18.421H7.71a2.015,2.015,0,0,1-1.18-.421l19.724-16.942Z"
                        transform="translate(-5.763 -263.687)"
                        fill="#f8b64c"
                      ></path>
                      <path
                        id="Path_4"
                        data-name="Path 4"
                        d="M40.72,14.119l-5.732,4.13-13.4,9.609a1.9,1.9,0,0,1-2.276,0L5.993,18.249.261,14.119l5.732-4.13L18.468,1.054,19.395.38a1.9,1.9,0,0,1,2.276,0l.927.674,5.985,4.3,2.95,2.107,3.456,2.529Z"
                        transform="translate(0)"
                        fill="#40596b"
                      ></path>
                      <path
                        id="Path_5"
                        data-name="Path 5"
                        d="M100.31,18.287V30.256l-13.4,9.609a1.9,1.9,0,0,1-2.276,0L71.314,30.256V14.747A1.691,1.691,0,0,1,73,13.061H95Z"
                        transform="translate(-65.321 -12.007)"
                        fill="#f2f2f2"
                      ></path>
                      <path
                        id="Path_6"
                        data-name="Path 6"
                        d="M365.974,16.938a1.331,1.331,0,0,0,1.349,1.349H371.2l-5.226-5.226v3.877Z"
                        transform="translate(-336.212 -12.007)"
                        fill="#cdd6e0"
                      ></path>
                      <path
                        id="Path_7"
                        data-name="Path 7"
                        d="M183.964,112.616h1.349a4.453,4.453,0,0,1-2.023,2.107,7.433,7.433,0,0,1-3.793.843,8.316,8.316,0,0,1-3.709-.759,4.971,4.971,0,0,1-2.36-2.192,6.563,6.563,0,0,1-.759-3.119,6.994,6.994,0,0,1,.843-3.456,5.322,5.322,0,0,1,2.36-2.36,7.709,7.709,0,0,1,3.456-.759,6.613,6.613,0,0,1,2.95.674,4.138,4.138,0,0,1,1.939,1.854,5.476,5.476,0,0,1,.674,2.613,5.05,5.05,0,0,1-1.011,3.034,3.791,3.791,0,0,1-3.287,1.686,2.115,2.115,0,0,1-.843-.169.853.853,0,0,1-.337-.59,2.426,2.426,0,0,1-1.77.759,2.177,2.177,0,0,1-1.77-.759,2.734,2.734,0,0,1-.759-2.023,5.151,5.151,0,0,1,.843-2.866,3.135,3.135,0,0,1,2.7-1.517,2.087,2.087,0,0,1,1.77.927l.169-.759h1.77l-1.012,4.72a2.224,2.224,0,0,0-.084.59.31.31,0,0,0,.084.253c.084.084.084.084.169.084a1.908,1.908,0,0,0,.843-.421,3.518,3.518,0,0,0,1.1-1.349,4.529,4.529,0,0,0,.421-1.77,3.5,3.5,0,0,0-1.18-2.7,4.436,4.436,0,0,0-3.287-1.1,5.791,5.791,0,0,0-3.034.759,4.762,4.762,0,0,0-1.854,2.023,6.107,6.107,0,0,0-.59,2.782,5.15,5.15,0,0,0,.674,2.529,4.181,4.181,0,0,0,1.939,1.686,7.561,7.561,0,0,0,2.866.506,8.627,8.627,0,0,0,2.7-.421A5.028,5.028,0,0,0,183.964,112.616Zm-7.165-2.7a1.884,1.884,0,0,0,.337,1.264,1.17,1.17,0,0,0,.843.421,1.588,1.588,0,0,0,.674-.169,2.234,2.234,0,0,0,.506-.421,3.078,3.078,0,0,0,.59-1.18A4.675,4.675,0,0,0,180,108.4a1.784,1.784,0,0,0-.337-1.18,1.17,1.17,0,0,0-.843-.421,1.555,1.555,0,0,0-1.012.421,2.315,2.315,0,0,0-.759,1.264A4.678,4.678,0,0,0,176.8,109.919Z"
                        transform="translate(-158.5 -94.62)"
                        fill="#ff7058"
                      ></path>
                    </g>
                  </svg>

                  <h5>Get the best of SPDigest, directly in your inbox.</h5>
                  <form action="#" method="post">
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value=""
                        className="form-control"
                        id="email"
                        placeholder="Your email*"
                      />
                    </div>
                    <div className="form-btns">
                      <input
                        type="submit"
                        value="Subscribe"
                        className="btn btn--block"
                      />
                    </div>
                  </form>
                </aside>
              </div>
              <div className="col-48 col-md-62 col-sm-12 mb-md-32">
                <div className="single__post--block">
                  <article className="post type-post status-publish format-standard has-post-thumbnail hentry category-apps tag-grocerist tag-shopify tag-shopify-apps">
                    <header className="entry-header">
                      <h1 className="entry-title mb-10">
                        Grocerist Launches E-Commerce Fulfilment App For Shopify
                        Merchants{" "}
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
                          <a href="https://www.shopdigest.com/author/akash/">
                            Akash{" "}
                          </a>
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
                          <time
                            className="updated"
                            dateTime="2023-03-10T15:06:33+05:30"
                          >
                            March 10, 2023
                          </time>
                        </span>{" "}
                      </div>
                    </header>
                    <figure className="post-thumbnail post__single--thumbnail">
                      <Image
                        width="800"
                        height="400"
                        src={props.featuredMedia.src}
                        className="attachment-full size-full wp-post-image"
                        alt="Grocerist app on phone and laptop"
                      />{" "}
                      <figcaption
                        dangerouslySetInnerHTML={{
                          __html: props.featuredMedia.captionHTML,
                        }}
                      />
                    </figure>
                    <div className="entry-content">
                      <div
                        dangerouslySetInnerHTML={{ __html: props.content }}
                      />
                    </div>
                  </article>
                </div>
              </div>
              <div className="col-30 col-md-38 col-sm-12 ml-auto">
                <aside className="widget widget__membere left-sidebar">
                  <a className="black_btn btn--block">Join the Community</a>
                  <br />
                  <p>Welcome to Tribe Campfire</p>
                  <p>
                    Connect,share, and enage with community and build
                    reletionshis.
                  </p>
                  <p>
                    Please log in if you are alredy a memeber or sign up for an
                    account.
                  </p>
                  <a
                    className="btn-google btn-google_home"
                    href="https://accounts.google.com/o/oauth2/auth?response_type=code&amp;access_type=online&amp;client_id=136703565733-n117hnkka9c3k133niamsf0g9e21am8m.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Fwww.spdigest.com%2Flogin&amp;state&amp;scope=email%20profile&amp;approval_prompt=auto"
                  >
                    <span dangerouslySetInnerHTML={{ __html: svg }} />
                    <span>Continue with Google</span>
                  </a>
                  <div className="or-space"></div>
                  <div className="btn-sign btn-sign_home">
                    {" "}
                    Sign in
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 40 40"
                      >
                        <g id="ico-twitter" transform="translate(-4 -4)">
                          <path
                            id="Path_3"
                            data-name="Path 3"
                            d="M24,4A20,20,0,1,0,44,24,20,20,0,0,0,24,4Z"
                            fill="#03a9f4"
                          ></path>
                          <path
                            id="Path_4"
                            data-name="Path 4"
                            d="M36,17.12A11.226,11.226,0,0,1,33,18c1.018-.6,2.633-1.862,3-3a14.315,14.315,0,0,1-3.793,1.372A4.832,4.832,0,0,0,24,20v2c-4,0-7.9-3.047-10.327-6a4.813,4.813,0,0,0-.667,2.457c0,1.819,1.671,3.665,2.994,4.543a9.282,9.282,0,0,1-3-1v.057a4.483,4.483,0,0,0,3.912,4.422,6.262,6.262,0,0,1-2.84.521c.626,1.935,3.773,2.958,5.928,3a12.636,12.636,0,0,1-7,2,7.368,7.368,0,0,1-1-.023A15.551,15.551,0,0,0,20,34c9.057,0,14-6.918,14-13.37,0-.212-.007-.922-.018-1.13A7.6,7.6,0,0,0,36,17.12"
                            fill="#fff"
                          ></path>
                        </g>
                      </svg>
                    </a>
                    <a href="">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 48 48"
                        width="30px"
                        height="30px"
                      >
                        <path
                          fill="#039be5"
                          d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
                        ></path>
                        <path
                          fill="#fff"
                          d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
                        ></path>
                      </svg>
                    </a>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
