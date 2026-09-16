// A project row on the My Work page (uses the original template's card markup and styles).
export default function ProjectCard({ project }) {
  const { title, image, link, description } = project;

  return (
    <div className="elementor-element elementor-element-4249afa6 e-con-full e-flex e-con e-child" data-element_type="container" data-e-type="container">
      <div className="elementor-element elementor-element-163e093 elementor-widget__width-initial elementor-widget-mobile__width-initial elementor-widget elementor-widget-image" data-element_type="widget" data-e-type="widget" data-widget_type="image.default">
        <img loading="lazy" decoding="async" width="700" height="900" src={image} className="attachment-large size-large" alt={title} />
      </div>
      <div className="elementor-element elementor-element-5f57ab7e e-con-full e-flex e-con e-child" data-element_type="container" data-e-type="container">
        <div className="elementor-element elementor-element-596915be e-con-full e-flex e-con e-child" data-element_type="container" data-e-type="container">
          <div className="elementor-element elementor-element-661aefb6 elementor-widget elementor-widget-heading" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
            <h2 className="elementor-heading-title elementor-size-default">
              {title}
            </h2>
          </div>
          <div className="elementor-element elementor-element-30128210 elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
            <div className="elementor-divider">
              <span className="elementor-divider-separator" />
            </div>
          </div>
          <div className="elementor-element elementor-element-4ab9b9c0 elementor-widget elementor-widget-heading" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
            <h2 className="elementor-heading-title elementor-size-default">
              {link.href ? <a href={link.href} target="_blank" rel="noreferrer">{link.label}</a> : link.label}
            </h2>
          </div>
        </div>
        <div className="elementor-element elementor-element-28918d3e elementor-widget elementor-widget-heading" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
          <h2 className="elementor-heading-title elementor-size-default">
            {description}
          </h2>
        </div>
      </div>
    </div>
  );
}
