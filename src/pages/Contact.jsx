import BlurReveal, { RevealText } from '../components/elementor/BlurReveal.jsx';
import LazyContainer from '../components/elementor/LazyContainer.jsx';
import { profile } from '../data/profile.js';

export default function Contact() {
  // No backend: open the visitor's email app with the message addressed to me.
  const onSubmit = (event) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const field = (name) => form.get(`form_fields[${name}]`) || '';
    const subject = `Project enquiry from ${field('name') || 'your website'}`;
    const body = [
      field('field_b812327'),
      '',
      `Name: ${field('name')}`,
      `Email: ${field('email')}`,
      `Phone: ${field('field_5272083')}`,
      `Country: ${field('field_0e3efbd')}`,
    ].join('\n');
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main id="content" className="site-main post-74 page type-page status-publish hentry">
      <div className="page-content">
        <div data-elementor-type="wp-page" data-elementor-id="74" className="elementor elementor-74" data-elementor-post-type="page">
          <LazyContainer className="elementor-element elementor-element-6dc89658 e-con-full e-flex e-con e-parent" data-id="6dc89658" data-element_type="container" data-e-type="container">
            <div className="elementor-element elementor-element-46815056 e-con-full e-flex e-con e-child" data-id="46815056" data-element_type="container" data-e-type="container">
              <BlurReveal className="elementor-element elementor-element-6c5d4fb7 blur-reveal elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="6c5d4fb7" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <h2 className="elementor-heading-title elementor-size-default">
                  <RevealText text={"Work with me"} offset={0} />
                </h2>
              </BlurReveal>
            </div>
            <div className="elementor-element elementor-element-371b82c3 e-flex e-con-boxed e-con e-child" data-id="371b82c3" data-element_type="container" data-e-type="container">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-dcd264d e-flex e-con-boxed e-con e-child" data-id="dcd264d" data-element_type="container" data-e-type="container">
                  <div className="e-con-inner">
                    <div className="elementor-element elementor-element-37ad0017 e-con-full e-flex e-con e-child" data-id="37ad0017" data-element_type="container" data-e-type="container">
                      <div className="elementor-element elementor-element-7717d7ed elementor-widget__width-initial elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="7717d7ed" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                        <div className="elementor-divider">
                          <span className="elementor-divider-separator" />
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-697c50dc elementor-widget elementor-widget-heading" data-id="697c50dc" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                        <h2 className="elementor-heading-title elementor-size-default">
                          Contact me
                        </h2>
                      </div>
                      <div className="elementor-element elementor-element-9f86d47 elementor-widget__width-initial elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="9f86d47" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                        <div className="elementor-divider">
                          <span className="elementor-divider-separator" />
                        </div>
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-13b28c83 elementor-widget__width-initial elementor-widget elementor-widget-heading" data-id="13b28c83" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                      <h2 className="elementor-heading-title elementor-size-default">
                        HAVE A PROJECT IN MIND? LET’S BUILD SOMETHING GREAT.
                      </h2>
                    </div>
                    <div className="elementor-element elementor-element-2dd20b77 elementor-button-align-stretch elementor-widget elementor-widget-form" data-id="2dd20b77" data-element_type="widget" data-e-type="widget" data-widget_type="form.default">
                      <form className="elementor-form" method="post" name="New Form" aria-label="New Form" onSubmit={onSubmit}>
                        <input type="hidden" name="post_id" defaultValue="74" />
                        {" "}
                        <input type="hidden" name="form_id" defaultValue="2dd20b77" />
                        {" "}
                        <input type="hidden" name="referer_title" defaultValue="Contact" />
                        {" "}
                        <input type="hidden" name="queried_id" defaultValue="74" />
                        {" "}
                        <div className="elementor-form-fields-wrapper elementor-labels-above">
                          <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-name elementor-col-50">
                            <label htmlFor="form-field-name" className="elementor-field-label">
                              {" Name "}
                            </label>
                            {" "}
                            <input size="1" type="text" name="form_fields[name]" id="form-field-name" className="elementor-field elementor-size-lg  elementor-field-textual" placeholder="Name" />
                          </div>
                          <div className="elementor-field-type-email elementor-field-group elementor-column elementor-field-group-email elementor-col-50 elementor-field-required">
                            <label htmlFor="form-field-email" className="elementor-field-label">
                              {" Email "}
                            </label>
                            {" "}
                            <input size="1" type="email" name="form_fields[email]" id="form-field-email" className="elementor-field elementor-size-lg  elementor-field-textual" placeholder="Email" required />
                          </div>
                          <div className="elementor-field-type-tel elementor-field-group elementor-column elementor-field-group-field_5272083 elementor-col-50 elementor-field-required">
                            <label htmlFor="form-field-field_5272083" className="elementor-field-label">
                              {" Phone Number "}
                            </label>
                            {" "}
                            <input size="1" type="tel" name="form_fields[field_5272083]" id="form-field-field_5272083" className="elementor-field elementor-size-lg  elementor-field-textual" placeholder="+234 800 000 0000" required pattern={"[0-9()#&+*-=.]+"} title="Only numbers and phone characters (#, -, *, etc) are accepted." />
                          </div>
                          <div className="elementor-field-type-text elementor-field-group elementor-column elementor-field-group-field_0e3efbd elementor-col-50 elementor-field-required">
                            <label htmlFor="form-field-field_0e3efbd" className="elementor-field-label">
                              {" Country "}
                            </label>
                            {" "}
                            <input size="1" type="text" name="form_fields[field_0e3efbd]" id="form-field-field_0e3efbd" className="elementor-field elementor-size-lg  elementor-field-textual" placeholder="Nigeria" required />
                          </div>
                          <div className="elementor-field-type-textarea elementor-field-group elementor-column elementor-field-group-field_b812327 elementor-col-100 elementor-field-required">
                            <label htmlFor="form-field-field_b812327" className="elementor-field-label">
                              {" Tell me about your project "}
                            </label>
                            {" "}
                            <textarea className="elementor-field-textual elementor-field  elementor-size-lg" name="form_fields[field_b812327]" id="form-field-field_b812327" rows="6" placeholder="I need a web app, API or dashboard that…" required />
                          </div>
                          <div className="elementor-field-group elementor-column elementor-field-type-submit elementor-col-100 e-form__buttons">
                            <button className="elementor-button elementor-size-sm" type="submit">
                              <span className="elementor-button-content-wrapper">
                                <span className="elementor-button-text">
                                  Send message
                                </span>
                              </span>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="elementor-element elementor-element-3d6e832c e-con-full e-flex e-con e-child" data-id="3d6e832c" data-element_type="container" data-e-type="container">
                  <div className="elementor-element elementor-element-728c6516 elementor-widget elementor-widget-heading" data-id="728c6516" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <h2 className="elementor-heading-title elementor-size-default">
                      <a href={`mailto:${profile.email}`}>{profile.email}</a>
                    </h2>
                  </div>
                  <div className="elementor-element elementor-element-58756456 elementor-widget elementor-widget-heading" data-id="58756456" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <h2 className="elementor-heading-title elementor-size-default">
                      ◇
                    </h2>
                  </div>
                  <div className="elementor-element elementor-element-834d4d8 elementor-widget elementor-widget-heading" data-id="834d4d8" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                    <h2 className="elementor-heading-title elementor-size-default">
                      <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </LazyContainer>
          <LazyContainer className="elementor-element elementor-element-f3b2c86 e-flex e-con-boxed e-con e-parent" data-id="f3b2c86" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-1d22dbff e-con-full e-flex e-con e-child" data-id="1d22dbff" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-b7314c2 elementor-widget elementor-widget-html" data-id="b7314c2" data-element_type="widget" data-e-type="widget" data-widget_type="html.default" />
                <div className="elementor-element elementor-element-3cd5f9ea elementor-widget elementor-widget-html" data-id="3cd5f9ea" data-element_type="widget" data-e-type="widget" data-widget_type="html.default" />
              </div>
            </div>
          </LazyContainer>
        </div>
      </div>
    </main>
  );
}
