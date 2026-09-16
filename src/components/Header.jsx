import OffCanvas from './elementor/OffCanvas.jsx';
import { Link } from 'react-router-dom';
import LazyContainer from './elementor/LazyContainer.jsx';
import { useMenu } from './MenuContext.jsx';
import { profile } from '../data/profile.js';

export default function Header() {
  const { openMenu, closeMenu } = useMenu();

  return (
    <header data-elementor-type="header" data-elementor-id="55" className="elementor elementor-55 elementor-location-header" data-elementor-post-type="elementor_library">
      <LazyContainer className="elementor-element elementor-element-30125b0f e-flex e-con-boxed e-con e-parent" data-id="30125b0f" data-element_type="container" data-e-type="container">
        <div className="e-con-inner">
          <OffCanvas className="elementor-element elementor-element-35c2a0da elementor-widget elementor-widget-off-canvas" data-id="35c2a0da" data-element_type="widget" data-e-type="widget" data-widget_type="off-canvas.default" canvasId="off-canvas-35c2a0da">
            <div className="elementor-element elementor-element-2d287e23 e-con-full e-flex e-con e-child" data-id="2d287e23" data-element_type="container" data-e-type="container">
              <div className="elementor-element elementor-element-3642cf8f elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="3642cf8f" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator" />
                </div>
              </div>
              <div className="elementor-element elementor-element-122ff558 e-con-full e-flex e-con e-child" data-id="122ff558" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-91f4e80 go-up-on-hover elementor-widget elementor-widget-heading" data-id="91f4e80" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <h2 className="elementor-heading-title elementor-size-default">
                    <Link to="/">
                      Home
                    </Link>
                  </h2>
                </div>
                <div className="elementor-element elementor-element-2e8a6575 go-up-on-hover elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading" data-id="2e8a6575" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <h2 className="elementor-heading-title elementor-size-default">
                    <Link to="/">
                      Home
                    </Link>
                  </h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-7c702be0 e-con-full e-flex e-con e-child" data-id="7c702be0" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-2034954b go-up-on-hover elementor-widget elementor-widget-heading" data-id="2034954b" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <h2 className="elementor-heading-title elementor-size-default">
                    <Link to="/my-work">
                      Projects
                    </Link>
                  </h2>
                </div>
                <div className="elementor-element elementor-element-6aac7dc4 go-up-on-hover elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading" data-id="6aac7dc4" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <h2 className="elementor-heading-title elementor-size-default">
                    <Link to="/my-work">
                      Projects
                    </Link>
                  </h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-6512f185 e-con-full e-flex e-con e-child" data-id="6512f185" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-1142b163 go-up-on-hover elementor-widget elementor-widget-heading" data-id="1142b163" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <h2 className="elementor-heading-title elementor-size-default">
                    <Link to="/about">
                      About
                    </Link>
                  </h2>
                </div>
                <div className="elementor-element elementor-element-2d8c9afb go-up-on-hover elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading" data-id="2d8c9afb" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <h2 className="elementor-heading-title elementor-size-default">
                    <Link to="/about">
                      About
                    </Link>
                  </h2>
                </div>
              </div>
              <div className="elementor-element elementor-element-358cf295 e-con-full e-flex e-con e-child" data-id="358cf295" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-5762f376 go-up-on-hover elementor-widget elementor-widget-heading" data-id="5762f376" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <h2 className="elementor-heading-title elementor-size-default">
                    <Link to="/contact">
                      Contact
                    </Link>
                  </h2>
                </div>
                <div className="elementor-element elementor-element-5cb4ccdb go-up-on-hover elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading" data-id="5cb4ccdb" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                  <h2 className="elementor-heading-title elementor-size-default">
                    <Link to="/contact">
                      Contact
                    </Link>
                  </h2>
                </div>
              </div>
              <a className="elementor-element elementor-element-22e64 e-flex e-con-boxed e-con e-child" data-id="22e64" data-element_type="container" data-e-type="container" onClick={closeMenu}>
                <div className="e-con-inner">
                  <div className="elementor-element elementor-element-3963333d close-bar e-transform elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="3963333d" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator" />
                    </div>
                  </div>
                  <div className="elementor-element elementor-element-3cd450d7 close-bar e-transform elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="3cd450d7" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                    <div className="elementor-divider">
                      <span className="elementor-divider-separator" />
                    </div>
                  </div>
                </div>
              </a>
              <div className="elementor-element elementor-element-554fba42 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="554fba42" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator" />
                </div>
              </div>
            </div>
          </OffCanvas>
        </div>
      </LazyContainer>
      <LazyContainer className="elementor-element elementor-element-1d20b9b5 e-con-full e-transform e-flex e-con e-parent" data-id="1d20b9b5" data-element_type="container" data-e-type="container">
        <div className="elementor-element elementor-element-19bde0d7 fit e-flex e-con-boxed e-con e-child" data-id="19bde0d7" data-element_type="container" data-e-type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-c84cc49 elementor-position-left elementor-vertical-align-top elementor-widget elementor-widget-image-box" data-id="c84cc49" data-element_type="widget" data-e-type="widget" data-widget_type="image-box.default">
              <div className="elementor-image-box-wrapper">
                <figure className="elementor-image-box-img">
                  <Link to="/" tabIndex="-1">
                    <img fetchPriority="high" width="600" height="600" src="/assets/images/me/avatar.jpg" className="attachment-full size-full wp-image-128" alt={profile.name} style={{ borderRadius: "50%" }} />
                  </Link>
                </figure>
                <div className="elementor-image-box-content">
                  <h3 className="elementor-image-box-title">
                    <Link to="/">
                      {profile.name}
                    </Link>
                  </h3>
                  <p className="elementor-image-box-description">
                    {profile.role}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-5a10cb77 fit e-flex e-con-boxed e-con e-child" data-id="5a10cb77" data-element_type="container" data-e-type="container">
          <div className="e-con-inner">
            <div className="elementor-element elementor-element-3de7b960 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading" data-id="3de7b960" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <h2 className="elementor-heading-title elementor-size-default">
                <Link to="/">
                  Home
                </Link>
              </h2>
            </div>
            <div className="elementor-element elementor-element-5259ddc elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading" data-id="5259ddc" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <h2 className="elementor-heading-title elementor-size-default">
                <Link to="/my-work">
                  My Work
                </Link>
              </h2>
            </div>
            <div className="elementor-element elementor-element-9912cf2 elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading" data-id="9912cf2" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <h2 className="elementor-heading-title elementor-size-default">
                <Link to="/about">
                  About Me
                </Link>
              </h2>
            </div>
            <div className="elementor-element elementor-element-21a9223d elementor-hidden-tablet elementor-hidden-mobile elementor-widget elementor-widget-heading" data-id="21a9223d" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
              <h2 className="elementor-heading-title elementor-size-default">
                <Link to="/contact">
                  Contact me
                </Link>
              </h2>
            </div>
          </div>
        </div>
        <div className="elementor-element elementor-element-72592591 fit e-flex e-con-boxed e-con e-child" data-id="72592591" data-element_type="container" data-e-type="container">
          <div className="e-con-inner">
            <a className="elementor-element elementor-element-374ca91f e-con-full e-flex e-con e-child" data-id="374ca91f" data-element_type="container" data-e-type="container" onClick={openMenu}>
              <div className="elementor-element elementor-element-510c0ae0 hambar e-transform elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="510c0ae0" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator" />
                </div>
              </div>
              <div className="elementor-element elementor-element-4bda0e60 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="4bda0e60" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator" />
                </div>
              </div>
              <div className="elementor-element elementor-element-673fc459 hambar e-transform elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="673fc459" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                <div className="elementor-divider">
                  <span className="elementor-divider-separator" />
                </div>
              </div>
            </a>
          </div>
        </div>
      </LazyContainer>
    </header>
  );
}
