import Image from "next/image";
import googleSvgProps from "../images/google.svg";
import emailNewsLetterProps from "../images/email-news-letter.svg";
import twitterSvgProps from "../images/twitter.svg";
import facebookSvgProps from "../images/facebook.svg";
import type { PropsWithChildren } from "react";

export default function BlogLayout(props: PropsWithChildren) {
  return (
    <main className="site-main" id="primary">
      <section className="section">
        <div className="wrap">
          <div className="row">
            <div className="col-22 col-sm-12 mobile-md--hide">
              <aside className="widget widget__newsletter left-sidebar">
                <Image
                  {...emailNewsLetterProps}
                  width={40.459}
                  height={40.501}
                  alt="Email news letter"
                />
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
              {props.children}
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
                  style={{ gap: "1em", alignItems: "center" }}
                  className="btn-google btn-google_home"
                  href="https://accounts.google.com/o/oauth2/auth?response_type=code&amp;access_type=online&amp;client_id=136703565733-n117hnkka9c3k133niamsf0g9e21am8m.apps.googleusercontent.com&amp;redirect_uri=https%3A%2F%2Fwww.spdigest.com%2Flogin&amp;state&amp;scope=email%20profile&amp;approval_prompt=auto"
                >
                  <Image
                    {...googleSvgProps}
                    alt="Google Icon"
                    style={{ width: "1em", height: "1em" }}
                  />{" "}
                  <span>Continue with Google</span>
                </a>
                <div className="or-space"></div>
                <div className="btn-sign btn-sign_home">
                  {" "}
                  Sign in
                  <a href="">
                    <Image
                      {...twitterSvgProps}
                      alt="twitter"
                      width={25}
                      height={25}
                    />
                  </a>
                  <a href="">
                    <Image
                      {...facebookSvgProps}
                      alt="facebook"
                      width={30}
                      height={30}
                    />
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
