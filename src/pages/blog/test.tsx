import { GetStaticProps } from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import { Container, Nav, Navbar } from "react-bootstrap";

type Props = {
  content: string;
  title: string;
  description: string;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
  const res = await fetch(
    "https://www.mlveda.com/wp-json/wp/v2/posts/5754?password=himalaya"
  );
  const data = await res.json();

  return {
    props: {
      content: data.content.rendered,
      title: data.title.rendered,
      description: data.yoast_head_json.og_description,
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
      <main>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">ShopDigest</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">{session.user!.name}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container className="mt-4">
          <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </Container>
      </main>
    </>
  );
}
