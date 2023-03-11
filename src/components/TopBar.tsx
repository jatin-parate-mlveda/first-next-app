import Image from "next/image";

export default function TopBar() {
  return (
    <>
      <div className="orange-bend">
        <style>
          {`.orange-bend {
                background-color: #000000;
                    color: #ffffff;
                                }
            .orange-bend .btn__action--hello {
                color: #ffffff;
                                }
            .btn-close:after,
            .btn-close:before {
                background-color: #ffffff;
                                }`}
        </style>
        <div className="wrap wrap_text">
          <i className="live"></i>
          <span className="bend__content">Everything about Shopify</span>{" "}
        </div>
        <a href="javascript:void();" className="btn-close">
          Close
        </a>
      </div>
      <div className="header-menu-lang-backg">
        <div className="wrap header-menu-lang">
          <ul className="nav">
            <li className="sub-menu">
              <a className="nav-link" href="#" title="English">
                English <i className="arrow_lang down"></i>
              </a>

              <div className="sub-menu-inner-header sub-menu-inner">
                <ul className="sub-menu">
                  <li>
                    <a href="#" title="French">
                      French
                    </a>
                  </li>

                  <li>
                    <a href="#" title="Chinese">
                      Chinese
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" title="Help">
                Help{" "}
              </a>

              <div className="sub-menu-inner-header sub-menu-inner">
                <ul className="sub-menu"></ul>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="tel:1-888-248-9324"
                title="Call Sales: 1-888-248-9324"
              >
                Call Sales: 1-888-248-9324{" "}
              </a>

              <div className="sub-menu-inner-header sub-menu-inner">
                <ul className="sub-menu"></ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <header id="masthead" className="site-header">
        <div className="wrap header__wrap">
          <div className="menu-box">
            <a href="javascript:void(0);" title="Menu" className="menu-btn">
              <span></span>
              <span style={{ display: "none" }}></span>
              <span></span>
            </a>
          </div>
          <div className="site-title">
            <a href="https://www.shopdigest.com/" rel="home">
              Shop Digest <span>Everything about Shopify</span>
            </a>
          </div>
          <div className="right-box wow fadeInRight menu-wrap">
            <ul className="nav">
              <li className="sub-menu">
                <a className="nav-link" href="#" title="Home">
                  Home <i className="arrow_menu_wrap down"></i>
                </a>

                <div className="sub-menu-inner">
                  <ul className="sub-menu">
                    <li>
                      <a
                        href="https://www.shopdigest.com/category/apps/"
                        title="Apps"
                      >
                        Apps
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.shopdigest.com/category/agencies/"
                        title="Agencies"
                      >
                        Agencies
                      </a>
                    </li>

                    <li>
                      <a
                        href="https://www.shopdigest.com/category/stores/"
                        title="Stores"
                      >
                        Stores
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" title="About us">
                  About us{" "}
                </a>

                <div className="sub-menu-inner">
                  <ul className="sub-menu"></ul>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#" title="Join Community">
                  Join Community{" "}
                </a>

                <div className="sub-menu-inner">
                  <ul className="sub-menu"></ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="header__right">
            <a href="#" className="search-icon">
              <svg
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24px"
                height="24px"
              >
                <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
              </svg>
            </a>
            <div className="setting-icon">
              <a href="#" className="setting-click">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.0028 9.63158C10.6438 9.63158 9.54209 10.692 9.54209 12C9.54209 13.308 10.6438 14.3684 12.0028 14.3684C13.3618 14.3684 14.4635 13.308 14.4635 12C14.4635 10.692 13.3618 9.63158 12.0028 9.63158ZM7.90162 12C7.90162 9.81993 9.73778 8.05263 12.0028 8.05263C14.2678 8.05263 16.104 9.81993 16.104 12C16.104 14.1801 14.2678 15.9474 12.0028 15.9474C9.73778 15.9474 7.90162 14.1801 7.90162 12Z"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M20.4013 12L20.6372 12.1317C21.9353 12.8564 22.384 14.4527 21.6424 15.7085L20.1373 18.2571C19.3866 19.5284 17.7029 19.9668 16.3886 19.2331L16.1861 19.12V19.3684C16.1861 20.8218 14.962 22 13.452 22H10.4674C8.95737 22 7.73326 20.8218 7.73326 19.3684V19.1537L7.63601 19.2093C6.32014 19.9618 4.61882 19.5281 3.86247 18.2473L2.35757 15.699C1.62153 14.4526 2.05745 12.8685 3.33798 12.1362L3.57614 12L3.33798 11.8638C2.05745 11.1315 1.62153 9.5474 2.35756 8.30102L3.86247 5.75268C4.61882 4.47192 6.32014 4.0382 7.63601 4.79069L7.73326 4.84631V4.63158C7.73326 3.17819 8.95737 2 10.4674 2H13.452C14.962 2 16.1861 3.1782 16.1861 4.63158V4.87996L16.3886 4.76691C17.7029 4.03322 19.3866 4.47158 20.1373 5.74292L21.6424 8.29153C22.384 9.54727 21.9353 11.1436 20.6372 11.8683L20.4013 12ZM18.7627 12.9106C18.0361 12.5049 18.0361 11.4951 18.7627 11.0894L19.8141 10.5025C20.3334 10.2126 20.5129 9.57406 20.2162 9.07176L18.7112 6.52315C18.4108 6.01462 17.7374 5.83928 17.2117 6.13275L16.188 6.70421C15.4589 7.11123 14.5457 6.6049 14.5457 5.79366V4.63158C14.5457 4.05023 14.056 3.57895 13.452 3.57895H10.4674C9.86337 3.57895 9.37373 4.05023 9.37373 4.63158V5.77123C9.37373 6.5874 8.45047 7.09307 7.72146 6.67618L6.79807 6.14812C6.27172 5.84713 5.5912 6.02061 5.28866 6.53292L3.78375 9.08126C3.48933 9.57981 3.6637 10.2135 4.17591 10.5064L5.20531 11.095C5.91867 11.503 5.91867 12.497 5.20531 12.905L4.17591 13.4936C3.6637 13.7865 3.48933 14.4202 3.78375 14.9187L5.28866 17.4671C5.5912 17.9794 6.27172 18.1529 6.79807 17.8519L7.72146 17.3238C8.45047 16.9069 9.37373 17.4126 9.37373 18.2288V19.3684C9.37373 19.9498 9.86337 20.4211 10.4674 20.4211H13.452C14.056 20.4211 14.5457 19.9498 14.5457 19.3684V18.2063C14.5457 17.3951 15.4589 16.8888 16.188 17.2958L17.2117 17.8672C17.7374 18.1607 18.4108 17.9854 18.7112 17.4768L20.2162 14.9282C20.5129 14.4259 20.3334 13.7874 19.8141 13.4975L18.7627 12.9106Z"
                  ></path>
                </svg>
              </a>
              <ul className="setting__sub-menu">
                <li className="menu__title">Choose your theme and language</li>
                <li>
                  <a href="javascript:void();" className="darkmode__toggle">
                    Dark theme: <span>Off</span>
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="https://www.shopdigest.com/login/"
              className="user-icon user-register"
            >
              <span
                dangerouslySetInnerHTML={{
                  __html: `
                  <svg
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 459 459"
                    xml:space="preserve"
                  >
                    <path
                      d="M229.5,0C102.53,0,0,102.845,0,229.5C0,356.301,102.719,459,229.5,459C356.851,459,459,355.815,459,229.5
                          C459,102.547,356.079,0,229.5,0z M347.601,364.67C314.887,393.338,273.4,409,229.5,409c-43.892,0-85.372-15.657-118.083-44.314
                          c-4.425-3.876-6.425-9.834-5.245-15.597c11.3-55.195,46.457-98.725,91.209-113.047C174.028,222.218,158,193.817,158,161
                          c0-46.392,32.012-84,71.5-84c39.488,0,71.5,37.608,71.5,84c0,32.812-16.023,61.209-39.369,75.035
                          c44.751,14.319,79.909,57.848,91.213,113.038C354.023,354.828,352.019,360.798,347.601,364.67z"
                    ></path>
                  </svg>
                `,
                }}
              />
              <span className="label">
                <strong>Login</strong>&nbsp; - It’s free
              </span>
            </a>

            <div className="search-form">
              <form
                role="search"
                method="get"
                action="https://www.shopdigest.com/"
                autoComplete="off"
              >
                <label className="screen-reader-text">Search for</label>
                <input
                  type="search"
                  className="form-control search-field"
                  value=""
                  name="s"
                  placeholder="Search..."
                  autoComplete="off"
                />
                <input type="submit" className="search-submit" value="Search" />
              </form>
              <a href="#" className="search-close">
                <svg
                  fill="#000000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24px"
                  height="24px"
                >
                  <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="subcribe_header">
          <div className="left-side">
            <Image
              width={100}
              height={100}
              className="subcribe_header_img"
              src="https://www.shopdigest.com/wp-content/themes/spdigest/assets/images/img_avatar.png"
              alt="Avatar"
            />
          </div>
          <div className="right-side subcribe_header_text">
            <h1>
              <b>
                Become smarter in just 5 minutes<b></b>
              </b>
            </h1>
            <b>
              <b>
                <form className="subcribe_form">
                  <input
                    type="text"
                    className="subcribe_email"
                    placeholder="youremail@domain.com"
                    name="subcribe_email"
                    id="subcribe_email"
                  />
                  <input type="submit" name="subcribe" value="Subcribe" />
                </form>
              </b>
            </b>
          </div>
          <b>
            <b>
              <div className="col-2"></div>
            </b>
          </b>
        </div>
        <b>
          <b></b>
        </b>
      </header>
    </>
  );
}
