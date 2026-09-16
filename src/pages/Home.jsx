import BlurReveal, { RevealText } from '../components/elementor/BlurReveal.jsx';
import SocialLinks from '../components/elementor/SocialLinks.jsx';
import BackgroundSlideshow from '../components/elementor/BackgroundSlideshow.jsx';
import { Link } from 'react-router-dom';
import Animated from '../components/elementor/Animated.jsx';
import LazyContainer from '../components/elementor/LazyContainer.jsx';

export default function Home() {
  return (
    <main id="content" className="site-main post-92 page type-page status-publish hentry">
      <div className="page-content">
        <div data-elementor-type="wp-page" data-elementor-id="92" className="elementor elementor-92" data-elementor-post-type="page">
          <LazyContainer className="elementor-element elementor-element-870798c e-con-full e-flex e-con e-parent" data-id="870798c" data-element_type="container" data-e-type="container">
            <div className="elementor-element elementor-element-d62db47 e-con-full e-flex e-con e-child" data-id="d62db47" data-element_type="container" data-e-type="container">
              <BackgroundSlideshow images={["/assets/images/me/desk.jpg","/assets/images/me/portrait.jpg"]} slideDuration={5000} transitionDuration={500} kenBurns="in" />
              <BlurReveal className="elementor-element elementor-element-2d1ef39 blur-reveal elementor-widget elementor-widget-heading" data-id="2d1ef39" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <h1 className="elementor-heading-title elementor-size-default">
                  <RevealText text={"I'm a SOFTWARE "} offset={0} />
                  <br />
                  <RevealText text={"ENGINEER"} offset={12} />
                </h1>
              </BlurReveal>
              <div className="elementor-element elementor-element-41a1174 e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-id="41a1174" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-c742c8d e-con-full e-flex e-con e-child" data-id="c742c8d" data-element_type="container" data-e-type="container">
                  <div className="elementor-element elementor-element-6f7be01 e-con-full e-flex e-con e-child" data-id="6f7be01" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-1d888f4 elementor-view-default elementor-widget elementor-widget-icon" data-id="1d888f4" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet">
                            <defs>
                              <clipPath id="b077868bc3">
                                <rect x="0" width="375" y="0" height="375" />
                              </clipPath>
                            </defs>
                            <g transform="matrix(1, 0, 0, 1, 0, 0)">
                              <g clipPath="url(#b077868bc3)">
                                <path fill="#0a0b0a" d="M 374.957031 375 L 0.0429688 375 C 12.828125 374.996094 25.582031 374.351562 38.300781 373.0625 C 50.808594 371.792969 63.21875 369.898438 75.535156 367.382812 C 87.617188 364.910156 99.707031 361.800781 111.472656 358.140625 C 123.105469 354.523438 134.699219 350.28125 145.925781 345.53125 C 168.277344 336.066406 189.511719 324.542969 209.625 310.957031 C 229.585938 297.460938 248.085938 282.199219 265.125 265.164062 C 282.15625 248.125 297.421875 229.625 310.914062 209.664062 C 324.5 189.550781 336.027344 168.320312 345.488281 145.96875 C 350.238281 134.738281 354.480469 123.148438 358.101562 111.515625 C 361.761719 99.75 364.867188 87.65625 367.339844 75.574219 C 369.859375 63.257812 371.75 50.847656 373.023438 38.339844 C 374.3125 25.59375 374.957031 12.8125 374.957031 0 Z M 374.957031 375 " fillOpacity="1" fillRule="nonzero" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-bd45d48 e-con-full e-flex e-con e-child" data-id="bd45d48" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-460bd1b elementor-view-default elementor-widget elementor-widget-icon" data-id="460bd1b" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet">
                            <defs>
                              <clipPath id="b077868bc3">
                                <rect x="0" width="375" y="0" height="375" />
                              </clipPath>
                            </defs>
                            <g transform="matrix(1, 0, 0, 1, 0, 0)">
                              <g clipPath="url(#b077868bc3)">
                                <path fill="#0a0b0a" d="M 374.957031 375 L 0.0429688 375 C 12.828125 374.996094 25.582031 374.351562 38.300781 373.0625 C 50.808594 371.792969 63.21875 369.898438 75.535156 367.382812 C 87.617188 364.910156 99.707031 361.800781 111.472656 358.140625 C 123.105469 354.523438 134.699219 350.28125 145.925781 345.53125 C 168.277344 336.066406 189.511719 324.542969 209.625 310.957031 C 229.585938 297.460938 248.085938 282.199219 265.125 265.164062 C 282.15625 248.125 297.421875 229.625 310.914062 209.664062 C 324.5 189.550781 336.027344 168.320312 345.488281 145.96875 C 350.238281 134.738281 354.480469 123.148438 358.101562 111.515625 C 361.761719 99.75 364.867188 87.65625 367.339844 75.574219 C 369.859375 63.257812 371.75 50.847656 373.023438 38.339844 C 374.3125 25.59375 374.957031 12.8125 374.957031 0 Z M 374.957031 375 " fillOpacity="1" fillRule="nonzero" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-ca0c7f8 e-con-full e-flex e-con e-child" data-id="ca0c7f8" data-element_type="container" data-e-type="container">
                      <div className="elementor-element elementor-element-67fa5e0 elementor-share-buttons--view-icon elementor-share-buttons--skin-flat elementor-share-buttons--shape-circle elementor-share-buttons--color-custom elementor-grid-0 elementor-widget elementor-widget-share-buttons" data-id="67fa5e0" data-element_type="widget" data-e-type="widget" data-widget_type="share-buttons.default">
                        <SocialLinks />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="elementor-element elementor-element-ab16fad e-con-full e-flex e-con e-child" data-id="ab16fad" data-element_type="container" data-e-type="container">
              <Animated to="/my-work" as={Link} className="elementor-element elementor-element-8a863af e-con-full animated-fast e-flex e-con e-child" data-id="8a863af" data-element_type="container" data-e-type="container" animation="fadeIn" delay={150}>
                <div className="elementor-element elementor-element-48f5163 e-con-full e-transform e-flex e-con e-child" data-id="48f5163" data-element_type="container" data-e-type="container">
                  <div className="elementor-element elementor-element-36687a9 elementor-widget elementor-widget-heading" data-id="36687a9" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {"All "}
                      <br />
                      projects
                    </h2>
                  </div>
                  <div className="elementor-element elementor-element-434f20a elementor-widget-divider--view-line_text elementor-widget-divider--element-align-left elementor-hidden-tablet elementor-widget elementor-widget-divider" data-id="434f20a" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator">
                        <span className="elementor-divider__text elementor-divider__element">
                          {" View work "}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-92e0401 e-con-full e-flex e-con e-child" data-id="92e0401" data-element_type="container" data-e-type="container">
                  <div className="elementor-element elementor-element-c0b23db e-con-full e-flex e-con e-child" data-id="c0b23db" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-9e81d65 elementor-view-default elementor-widget elementor-widget-icon" data-id="9e81d65" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet">
                            <defs>
                              <clipPath id="b077868bc3">
                                <rect x="0" width="375" y="0" height="375" />
                              </clipPath>
                            </defs>
                            <g transform="matrix(1, 0, 0, 1, 0, 0)">
                              <g clipPath="url(#b077868bc3)">
                                <path fill="#0a0b0a" d="M 374.957031 375 L 0.0429688 375 C 12.828125 374.996094 25.582031 374.351562 38.300781 373.0625 C 50.808594 371.792969 63.21875 369.898438 75.535156 367.382812 C 87.617188 364.910156 99.707031 361.800781 111.472656 358.140625 C 123.105469 354.523438 134.699219 350.28125 145.925781 345.53125 C 168.277344 336.066406 189.511719 324.542969 209.625 310.957031 C 229.585938 297.460938 248.085938 282.199219 265.125 265.164062 C 282.15625 248.125 297.421875 229.625 310.914062 209.664062 C 324.5 189.550781 336.027344 168.320312 345.488281 145.96875 C 350.238281 134.738281 354.480469 123.148438 358.101562 111.515625 C 361.761719 99.75 364.867188 87.65625 367.339844 75.574219 C 369.859375 63.257812 371.75 50.847656 373.023438 38.339844 C 374.3125 25.59375 374.957031 12.8125 374.957031 0 Z M 374.957031 375 " fillOpacity="1" fillRule="nonzero" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-f69fd3b e-con-full e-flex e-con e-child" data-id="f69fd3b" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-9175668 elementor-view-default elementor-widget elementor-widget-icon" data-id="9175668" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet">
                            <defs>
                              <clipPath id="b077868bc3">
                                <rect x="0" width="375" y="0" height="375" />
                              </clipPath>
                            </defs>
                            <g transform="matrix(1, 0, 0, 1, 0, 0)">
                              <g clipPath="url(#b077868bc3)">
                                <path fill="#0a0b0a" d="M 374.957031 375 L 0.0429688 375 C 12.828125 374.996094 25.582031 374.351562 38.300781 373.0625 C 50.808594 371.792969 63.21875 369.898438 75.535156 367.382812 C 87.617188 364.910156 99.707031 361.800781 111.472656 358.140625 C 123.105469 354.523438 134.699219 350.28125 145.925781 345.53125 C 168.277344 336.066406 189.511719 324.542969 209.625 310.957031 C 229.585938 297.460938 248.085938 282.199219 265.125 265.164062 C 282.15625 248.125 297.421875 229.625 310.914062 209.664062 C 324.5 189.550781 336.027344 168.320312 345.488281 145.96875 C 350.238281 134.738281 354.480469 123.148438 358.101562 111.515625 C 361.761719 99.75 364.867188 87.65625 367.339844 75.574219 C 369.859375 63.257812 371.75 50.847656 373.023438 38.339844 C 374.3125 25.59375 374.957031 12.8125 374.957031 0 Z M 374.957031 375 " fillOpacity="1" fillRule="nonzero" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-c01f312 e-con-full e-flex e-con e-child" data-id="c01f312" data-element_type="container" data-e-type="container">
                      <div className="elementor-element elementor-element-6a8f940 e-con-full e-flex e-con e-child" data-id="6a8f940" data-element_type="container" data-e-type="container">
                        <div className="elementor-element elementor-element-3cf30c0 go-up-on-hover elementor-widget elementor-widget-heading" data-id="3cf30c0" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Projects
                          </h2>
                        </div>
                        <div className="elementor-element elementor-element-c9f268a elementor-widget elementor-widget-heading" data-id="c9f268a" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Projects
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-8f3428e e-con-full e-flex e-con e-child" data-id="8f3428e" data-element_type="container" data-e-type="container">
                      <div className="elementor-element elementor-element-69e610d e-con-full e-flex e-con e-child" data-id="69e610d" data-element_type="container" data-e-type="container">
                        <div className="elementor-element elementor-element-6ad4f44 elementor-view-default elementor-widget elementor-widget-icon" data-id="6ad4f44" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
                          <div className="elementor-icon-wrapper">
                            <div className="elementor-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                  <clipPath id="7b7d4394ac">
                                    <path d="M 173.429688 1.28125 L 326.0625 1.28125 L 326.0625 175.71875 L 173.429688 175.71875 Z M 173.429688 1.28125 " clipRule="nonzero" />
                                  </clipPath>
                                  <clipPath id="a049cdcf20">
                                    <path d="M 0.9375 81.742188 L 175.375 81.742188 L 175.375 95.695312 L 0.9375 95.695312 Z M 0.9375 81.742188 " clipRule="nonzero" />
                                  </clipPath>
                                  <clipPath id="8039338e96">
                                    <rect x="0" width="327" y="0" height="176" />
                                  </clipPath>
                                </defs>
                                <g transform="matrix(1, 0, 0, 1, 24, 99)">
                                  <g clipPath="url(#8039338e96)">
                                    <g clipPath="url(#7b7d4394ac)">
                                      <path fill="#efe7d2" d="M 323.164062 93.617188 C 324.957031 92.582031 326.0625 90.667969 326.0625 88.597656 C 326.0625 86.523438 324.957031 84.609375 323.164062 83.574219 L 182.546875 2.390625 C 180.753906 1.355469 178.542969 1.355469 176.746094 2.390625 C 174.953125 3.425781 173.847656 5.339844 173.847656 7.410156 L 173.847656 169.78125 C 173.847656 169.796875 173.847656 169.808594 173.847656 169.820312 C 173.847656 173.023438 176.445312 175.617188 179.648438 175.617188 C 180.925781 175.617188 182.113281 175.203125 183.070312 174.5 Z M 185.445312 17.457031 L 308.664062 88.597656 L 185.445312 159.738281 Z M 185.445312 17.457031 " fillOpacity="1" fillRule="nonzero" />
                                    </g>
                                    <g clipPath="url(#a049cdcf20)">
                                      <path fill="#efe7d2" d="M 0.9375 81.789062 L 175.375 81.789062 L 175.375 95.210938 L 0.9375 95.210938 Z M 0.9375 81.789062 " fillOpacity="1" fillRule="nonzero" />
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-671d766 go-left-when-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="671d766" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
                          <div className="elementor-icon-wrapper">
                            <div className="elementor-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                  <clipPath id="7b7d4394ac">
                                    <path d="M 173.429688 1.28125 L 326.0625 1.28125 L 326.0625 175.71875 L 173.429688 175.71875 Z M 173.429688 1.28125 " clipRule="nonzero" />
                                  </clipPath>
                                  <clipPath id="a049cdcf20">
                                    <path d="M 0.9375 81.742188 L 175.375 81.742188 L 175.375 95.695312 L 0.9375 95.695312 Z M 0.9375 81.742188 " clipRule="nonzero" />
                                  </clipPath>
                                  <clipPath id="8039338e96">
                                    <rect x="0" width="327" y="0" height="176" />
                                  </clipPath>
                                </defs>
                                <g transform="matrix(1, 0, 0, 1, 24, 99)">
                                  <g clipPath="url(#8039338e96)">
                                    <g clipPath="url(#7b7d4394ac)">
                                      <path fill="#efe7d2" d="M 323.164062 93.617188 C 324.957031 92.582031 326.0625 90.667969 326.0625 88.597656 C 326.0625 86.523438 324.957031 84.609375 323.164062 83.574219 L 182.546875 2.390625 C 180.753906 1.355469 178.542969 1.355469 176.746094 2.390625 C 174.953125 3.425781 173.847656 5.339844 173.847656 7.410156 L 173.847656 169.78125 C 173.847656 169.796875 173.847656 169.808594 173.847656 169.820312 C 173.847656 173.023438 176.445312 175.617188 179.648438 175.617188 C 180.925781 175.617188 182.113281 175.203125 183.070312 174.5 Z M 185.445312 17.457031 L 308.664062 88.597656 L 185.445312 159.738281 Z M 185.445312 17.457031 " fillOpacity="1" fillRule="nonzero" />
                                    </g>
                                    <g clipPath="url(#a049cdcf20)">
                                      <path fill="#efe7d2" d="M 0.9375 81.789062 L 175.375 81.789062 L 175.375 95.210938 L 0.9375 95.210938 Z M 0.9375 81.789062 " fillOpacity="1" fillRule="nonzero" />
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Animated>
              <Animated to="/about" as={Link} className="elementor-element elementor-element-2492146 e-con-full animated-fast e-flex e-con e-child" data-id="2492146" data-element_type="container" data-e-type="container" animation="fadeIn" delay={300}>
                <div className="elementor-element elementor-element-96e16d7 e-con-full e-transform e-flex e-con e-child" data-id="96e16d7" data-element_type="container" data-e-type="container">
                  <div className="elementor-element elementor-element-2418f9e elementor-widget elementor-widget-heading" data-id="2418f9e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {"Learn "}
                      <br />
                      About me
                    </h2>
                  </div>
                  <div className="elementor-element elementor-element-50b8664 elementor-widget-divider--view-line_text elementor-widget-divider--element-align-left elementor-hidden-tablet elementor-widget elementor-widget-divider" data-id="50b8664" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator">
                        <span className="elementor-divider__text elementor-divider__element">
                          {" See more "}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-1a6edac e-con-full e-flex e-con e-child" data-id="1a6edac" data-element_type="container" data-e-type="container">
                  <div className="elementor-element elementor-element-e465b5e e-con-full e-flex e-con e-child" data-id="e465b5e" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-3387f5f elementor-view-default elementor-widget elementor-widget-icon" data-id="3387f5f" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet">
                            <defs>
                              <clipPath id="b077868bc3">
                                <rect x="0" width="375" y="0" height="375" />
                              </clipPath>
                            </defs>
                            <g transform="matrix(1, 0, 0, 1, 0, 0)">
                              <g clipPath="url(#b077868bc3)">
                                <path fill="#0a0b0a" d="M 374.957031 375 L 0.0429688 375 C 12.828125 374.996094 25.582031 374.351562 38.300781 373.0625 C 50.808594 371.792969 63.21875 369.898438 75.535156 367.382812 C 87.617188 364.910156 99.707031 361.800781 111.472656 358.140625 C 123.105469 354.523438 134.699219 350.28125 145.925781 345.53125 C 168.277344 336.066406 189.511719 324.542969 209.625 310.957031 C 229.585938 297.460938 248.085938 282.199219 265.125 265.164062 C 282.15625 248.125 297.421875 229.625 310.914062 209.664062 C 324.5 189.550781 336.027344 168.320312 345.488281 145.96875 C 350.238281 134.738281 354.480469 123.148438 358.101562 111.515625 C 361.761719 99.75 364.867188 87.65625 367.339844 75.574219 C 369.859375 63.257812 371.75 50.847656 373.023438 38.339844 C 374.3125 25.59375 374.957031 12.8125 374.957031 0 Z M 374.957031 375 " fillOpacity="1" fillRule="nonzero" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-42027ed e-con-full e-flex e-con e-child" data-id="42027ed" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-0a10fab elementor-view-default elementor-widget elementor-widget-icon" data-id="0a10fab" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet">
                            <defs>
                              <clipPath id="b077868bc3">
                                <rect x="0" width="375" y="0" height="375" />
                              </clipPath>
                            </defs>
                            <g transform="matrix(1, 0, 0, 1, 0, 0)">
                              <g clipPath="url(#b077868bc3)">
                                <path fill="#0a0b0a" d="M 374.957031 375 L 0.0429688 375 C 12.828125 374.996094 25.582031 374.351562 38.300781 373.0625 C 50.808594 371.792969 63.21875 369.898438 75.535156 367.382812 C 87.617188 364.910156 99.707031 361.800781 111.472656 358.140625 C 123.105469 354.523438 134.699219 350.28125 145.925781 345.53125 C 168.277344 336.066406 189.511719 324.542969 209.625 310.957031 C 229.585938 297.460938 248.085938 282.199219 265.125 265.164062 C 282.15625 248.125 297.421875 229.625 310.914062 209.664062 C 324.5 189.550781 336.027344 168.320312 345.488281 145.96875 C 350.238281 134.738281 354.480469 123.148438 358.101562 111.515625 C 361.761719 99.75 364.867188 87.65625 367.339844 75.574219 C 369.859375 63.257812 371.75 50.847656 373.023438 38.339844 C 374.3125 25.59375 374.957031 12.8125 374.957031 0 Z M 374.957031 375 " fillOpacity="1" fillRule="nonzero" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-3681bae e-con-full e-flex e-con e-child" data-id="3681bae" data-element_type="container" data-e-type="container">
                      <div className="elementor-element elementor-element-cbc0fbe e-con-full e-flex e-con e-child" data-id="cbc0fbe" data-element_type="container" data-e-type="container">
                        <div className="elementor-element elementor-element-2e532f7 go-up-on-hover elementor-widget elementor-widget-heading" data-id="2e532f7" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                          <h2 className="elementor-heading-title elementor-size-default">
                            About me
                          </h2>
                        </div>
                        <div className="elementor-element elementor-element-35bf1a1 elementor-widget elementor-widget-heading" data-id="35bf1a1" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                          <h2 className="elementor-heading-title elementor-size-default">
                            About me
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-d6798e6 e-con-full e-flex e-con e-child" data-id="d6798e6" data-element_type="container" data-e-type="container">
                      <div className="elementor-element elementor-element-be7dce6 e-con-full e-flex e-con e-child" data-id="be7dce6" data-element_type="container" data-e-type="container">
                        <div className="elementor-element elementor-element-1e292b8 elementor-view-default elementor-widget elementor-widget-icon" data-id="1e292b8" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
                          <div className="elementor-icon-wrapper">
                            <div className="elementor-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                  <clipPath id="7b7d4394ac">
                                    <path d="M 173.429688 1.28125 L 326.0625 1.28125 L 326.0625 175.71875 L 173.429688 175.71875 Z M 173.429688 1.28125 " clipRule="nonzero" />
                                  </clipPath>
                                  <clipPath id="a049cdcf20">
                                    <path d="M 0.9375 81.742188 L 175.375 81.742188 L 175.375 95.695312 L 0.9375 95.695312 Z M 0.9375 81.742188 " clipRule="nonzero" />
                                  </clipPath>
                                  <clipPath id="8039338e96">
                                    <rect x="0" width="327" y="0" height="176" />
                                  </clipPath>
                                </defs>
                                <g transform="matrix(1, 0, 0, 1, 24, 99)">
                                  <g clipPath="url(#8039338e96)">
                                    <g clipPath="url(#7b7d4394ac)">
                                      <path fill="#efe7d2" d="M 323.164062 93.617188 C 324.957031 92.582031 326.0625 90.667969 326.0625 88.597656 C 326.0625 86.523438 324.957031 84.609375 323.164062 83.574219 L 182.546875 2.390625 C 180.753906 1.355469 178.542969 1.355469 176.746094 2.390625 C 174.953125 3.425781 173.847656 5.339844 173.847656 7.410156 L 173.847656 169.78125 C 173.847656 169.796875 173.847656 169.808594 173.847656 169.820312 C 173.847656 173.023438 176.445312 175.617188 179.648438 175.617188 C 180.925781 175.617188 182.113281 175.203125 183.070312 174.5 Z M 185.445312 17.457031 L 308.664062 88.597656 L 185.445312 159.738281 Z M 185.445312 17.457031 " fillOpacity="1" fillRule="nonzero" />
                                    </g>
                                    <g clipPath="url(#a049cdcf20)">
                                      <path fill="#efe7d2" d="M 0.9375 81.789062 L 175.375 81.789062 L 175.375 95.210938 L 0.9375 95.210938 Z M 0.9375 81.789062 " fillOpacity="1" fillRule="nonzero" />
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-16cc893 go-left-when-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="16cc893" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
                          <div className="elementor-icon-wrapper">
                            <div className="elementor-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                  <clipPath id="7b7d4394ac">
                                    <path d="M 173.429688 1.28125 L 326.0625 1.28125 L 326.0625 175.71875 L 173.429688 175.71875 Z M 173.429688 1.28125 " clipRule="nonzero" />
                                  </clipPath>
                                  <clipPath id="a049cdcf20">
                                    <path d="M 0.9375 81.742188 L 175.375 81.742188 L 175.375 95.695312 L 0.9375 95.695312 Z M 0.9375 81.742188 " clipRule="nonzero" />
                                  </clipPath>
                                  <clipPath id="8039338e96">
                                    <rect x="0" width="327" y="0" height="176" />
                                  </clipPath>
                                </defs>
                                <g transform="matrix(1, 0, 0, 1, 24, 99)">
                                  <g clipPath="url(#8039338e96)">
                                    <g clipPath="url(#7b7d4394ac)">
                                      <path fill="#efe7d2" d="M 323.164062 93.617188 C 324.957031 92.582031 326.0625 90.667969 326.0625 88.597656 C 326.0625 86.523438 324.957031 84.609375 323.164062 83.574219 L 182.546875 2.390625 C 180.753906 1.355469 178.542969 1.355469 176.746094 2.390625 C 174.953125 3.425781 173.847656 5.339844 173.847656 7.410156 L 173.847656 169.78125 C 173.847656 169.796875 173.847656 169.808594 173.847656 169.820312 C 173.847656 173.023438 176.445312 175.617188 179.648438 175.617188 C 180.925781 175.617188 182.113281 175.203125 183.070312 174.5 Z M 185.445312 17.457031 L 308.664062 88.597656 L 185.445312 159.738281 Z M 185.445312 17.457031 " fillOpacity="1" fillRule="nonzero" />
                                    </g>
                                    <g clipPath="url(#a049cdcf20)">
                                      <path fill="#efe7d2" d="M 0.9375 81.789062 L 175.375 81.789062 L 175.375 95.210938 L 0.9375 95.210938 Z M 0.9375 81.789062 " fillOpacity="1" fillRule="nonzero" />
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Animated>
              <Animated to="/contact" as={Link} className="elementor-element elementor-element-38a0ab5 e-con-full animated-fast e-flex e-con e-child" data-id="38a0ab5" data-element_type="container" data-e-type="container" animation="fadeIn">
                <div className="elementor-element elementor-element-9aa0725 e-con-full e-transform e-flex e-con e-child" data-id="9aa0725" data-element_type="container" data-e-type="container">
                  <div className="elementor-element elementor-element-f9ee96e elementor-widget elementor-widget-heading" data-id="f9ee96e" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <h2 className="elementor-heading-title elementor-size-default">
                      {"Start a "}
                      <br />
                      project
                    </h2>
                  </div>
                  <div className="elementor-element elementor-element-2cbaf94 elementor-widget-divider--view-line_text elementor-widget-divider--element-align-left elementor-hidden-tablet elementor-widget elementor-widget-divider" data-id="2cbaf94" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator">
                        <span className="elementor-divider__text elementor-divider__element">
                          {" Contact me "}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-a030e9e e-con-full e-flex e-con e-child" data-id="a030e9e" data-element_type="container" data-e-type="container">
                  <div className="elementor-element elementor-element-130fad3 e-con-full e-flex e-con e-child" data-id="130fad3" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-79955b1 elementor-view-default elementor-widget elementor-widget-icon" data-id="79955b1" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet">
                            <defs>
                              <clipPath id="b077868bc3">
                                <rect x="0" width="375" y="0" height="375" />
                              </clipPath>
                            </defs>
                            <g transform="matrix(1, 0, 0, 1, 0, 0)">
                              <g clipPath="url(#b077868bc3)">
                                <path fill="#0a0b0a" d="M 374.957031 375 L 0.0429688 375 C 12.828125 374.996094 25.582031 374.351562 38.300781 373.0625 C 50.808594 371.792969 63.21875 369.898438 75.535156 367.382812 C 87.617188 364.910156 99.707031 361.800781 111.472656 358.140625 C 123.105469 354.523438 134.699219 350.28125 145.925781 345.53125 C 168.277344 336.066406 189.511719 324.542969 209.625 310.957031 C 229.585938 297.460938 248.085938 282.199219 265.125 265.164062 C 282.15625 248.125 297.421875 229.625 310.914062 209.664062 C 324.5 189.550781 336.027344 168.320312 345.488281 145.96875 C 350.238281 134.738281 354.480469 123.148438 358.101562 111.515625 C 361.761719 99.75 364.867188 87.65625 367.339844 75.574219 C 369.859375 63.257812 371.75 50.847656 373.023438 38.339844 C 374.3125 25.59375 374.957031 12.8125 374.957031 0 Z M 374.957031 375 " fillOpacity="1" fillRule="nonzero" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-c2cb181 e-con-full e-flex e-con e-child" data-id="c2cb181" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-b82f84e elementor-view-default elementor-widget elementor-widget-icon" data-id="b82f84e" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
                      <div className="elementor-icon-wrapper">
                        <div className="elementor-icon">
                          <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet">
                            <defs>
                              <clipPath id="b077868bc3">
                                <rect x="0" width="375" y="0" height="375" />
                              </clipPath>
                            </defs>
                            <g transform="matrix(1, 0, 0, 1, 0, 0)">
                              <g clipPath="url(#b077868bc3)">
                                <path fill="#0a0b0a" d="M 374.957031 375 L 0.0429688 375 C 12.828125 374.996094 25.582031 374.351562 38.300781 373.0625 C 50.808594 371.792969 63.21875 369.898438 75.535156 367.382812 C 87.617188 364.910156 99.707031 361.800781 111.472656 358.140625 C 123.105469 354.523438 134.699219 350.28125 145.925781 345.53125 C 168.277344 336.066406 189.511719 324.542969 209.625 310.957031 C 229.585938 297.460938 248.085938 282.199219 265.125 265.164062 C 282.15625 248.125 297.421875 229.625 310.914062 209.664062 C 324.5 189.550781 336.027344 168.320312 345.488281 145.96875 C 350.238281 134.738281 354.480469 123.148438 358.101562 111.515625 C 361.761719 99.75 364.867188 87.65625 367.339844 75.574219 C 369.859375 63.257812 371.75 50.847656 373.023438 38.339844 C 374.3125 25.59375 374.957031 12.8125 374.957031 0 Z M 374.957031 375 " fillOpacity="1" fillRule="nonzero" />
                              </g>
                            </g>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-e56b0c6 e-con-full e-flex e-con e-child" data-id="e56b0c6" data-element_type="container" data-e-type="container">
                      <div className="elementor-element elementor-element-d930414 e-con-full e-flex e-con e-child" data-id="d930414" data-element_type="container" data-e-type="container">
                        <div className="elementor-element elementor-element-fd619fe go-up-on-hover elementor-widget elementor-widget-heading" data-id="fd619fe" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Contact
                          </h2>
                        </div>
                        <div className="elementor-element elementor-element-86b8469 elementor-widget elementor-widget-heading" data-id="86b8469" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                          <h2 className="elementor-heading-title elementor-size-default">
                            Contact
                          </h2>
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-9b97d46 e-con-full e-flex e-con e-child" data-id="9b97d46" data-element_type="container" data-e-type="container">
                      <div className="elementor-element elementor-element-9f0e5c4 e-con-full e-flex e-con e-child" data-id="9f0e5c4" data-element_type="container" data-e-type="container">
                        <div className="elementor-element elementor-element-535aaaa elementor-view-default elementor-widget elementor-widget-icon" data-id="535aaaa" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
                          <div className="elementor-icon-wrapper">
                            <div className="elementor-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                  <clipPath id="7b7d4394ac">
                                    <path d="M 173.429688 1.28125 L 326.0625 1.28125 L 326.0625 175.71875 L 173.429688 175.71875 Z M 173.429688 1.28125 " clipRule="nonzero" />
                                  </clipPath>
                                  <clipPath id="a049cdcf20">
                                    <path d="M 0.9375 81.742188 L 175.375 81.742188 L 175.375 95.695312 L 0.9375 95.695312 Z M 0.9375 81.742188 " clipRule="nonzero" />
                                  </clipPath>
                                  <clipPath id="8039338e96">
                                    <rect x="0" width="327" y="0" height="176" />
                                  </clipPath>
                                </defs>
                                <g transform="matrix(1, 0, 0, 1, 24, 99)">
                                  <g clipPath="url(#8039338e96)">
                                    <g clipPath="url(#7b7d4394ac)">
                                      <path fill="#efe7d2" d="M 323.164062 93.617188 C 324.957031 92.582031 326.0625 90.667969 326.0625 88.597656 C 326.0625 86.523438 324.957031 84.609375 323.164062 83.574219 L 182.546875 2.390625 C 180.753906 1.355469 178.542969 1.355469 176.746094 2.390625 C 174.953125 3.425781 173.847656 5.339844 173.847656 7.410156 L 173.847656 169.78125 C 173.847656 169.796875 173.847656 169.808594 173.847656 169.820312 C 173.847656 173.023438 176.445312 175.617188 179.648438 175.617188 C 180.925781 175.617188 182.113281 175.203125 183.070312 174.5 Z M 185.445312 17.457031 L 308.664062 88.597656 L 185.445312 159.738281 Z M 185.445312 17.457031 " fillOpacity="1" fillRule="nonzero" />
                                    </g>
                                    <g clipPath="url(#a049cdcf20)">
                                      <path fill="#efe7d2" d="M 0.9375 81.789062 L 175.375 81.789062 L 175.375 95.210938 L 0.9375 95.210938 Z M 0.9375 81.789062 " fillOpacity="1" fillRule="nonzero" />
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-585b807 go-left-when-hover elementor-view-default elementor-widget elementor-widget-icon" data-id="585b807" data-element_type="widget" data-e-type="widget" data-widget_type="icon.default">
                          <div className="elementor-icon-wrapper">
                            <div className="elementor-icon">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="500" zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet">
                                <defs>
                                  <clipPath id="7b7d4394ac">
                                    <path d="M 173.429688 1.28125 L 326.0625 1.28125 L 326.0625 175.71875 L 173.429688 175.71875 Z M 173.429688 1.28125 " clipRule="nonzero" />
                                  </clipPath>
                                  <clipPath id="a049cdcf20">
                                    <path d="M 0.9375 81.742188 L 175.375 81.742188 L 175.375 95.695312 L 0.9375 95.695312 Z M 0.9375 81.742188 " clipRule="nonzero" />
                                  </clipPath>
                                  <clipPath id="8039338e96">
                                    <rect x="0" width="327" y="0" height="176" />
                                  </clipPath>
                                </defs>
                                <g transform="matrix(1, 0, 0, 1, 24, 99)">
                                  <g clipPath="url(#8039338e96)">
                                    <g clipPath="url(#7b7d4394ac)">
                                      <path fill="#efe7d2" d="M 323.164062 93.617188 C 324.957031 92.582031 326.0625 90.667969 326.0625 88.597656 C 326.0625 86.523438 324.957031 84.609375 323.164062 83.574219 L 182.546875 2.390625 C 180.753906 1.355469 178.542969 1.355469 176.746094 2.390625 C 174.953125 3.425781 173.847656 5.339844 173.847656 7.410156 L 173.847656 169.78125 C 173.847656 169.796875 173.847656 169.808594 173.847656 169.820312 C 173.847656 173.023438 176.445312 175.617188 179.648438 175.617188 C 180.925781 175.617188 182.113281 175.203125 183.070312 174.5 Z M 185.445312 17.457031 L 308.664062 88.597656 L 185.445312 159.738281 Z M 185.445312 17.457031 " fillOpacity="1" fillRule="nonzero" />
                                    </g>
                                    <g clipPath="url(#a049cdcf20)">
                                      <path fill="#efe7d2" d="M 0.9375 81.789062 L 175.375 81.789062 L 175.375 95.210938 L 0.9375 95.210938 Z M 0.9375 81.789062 " fillOpacity="1" fillRule="nonzero" />
                                    </g>
                                  </g>
                                </g>
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Animated>
              <div className="elementor-element elementor-element-ae74abb e-con-full e-flex e-con e-child" data-id="ae74abb" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-3f3e2e7 elementor-widget elementor-widget-html" data-id="3f3e2e7" data-element_type="widget" data-e-type="widget" data-widget_type="html.default" />
                <div className="elementor-element elementor-element-3552fa0 elementor-widget elementor-widget-html" data-id="3552fa0" data-element_type="widget" data-e-type="widget" data-widget_type="html.default" />
              </div>
            </div>
          </LazyContainer>
        </div>
      </div>
    </main>
  );
}
