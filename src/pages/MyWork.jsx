import BlurReveal, { RevealText } from '../components/elementor/BlurReveal.jsx';
import { Link } from 'react-router-dom';
import LazyContainer from '../components/elementor/LazyContainer.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { profile, projectCategories, projects } from '../data/profile.js';

export default function MyWork() {
  return (
    <main id="content" className="site-main post-78 page type-page status-publish hentry">
      <div className="page-content">
        <div data-elementor-type="wp-page" data-elementor-id="78" className="elementor elementor-78" data-elementor-post-type="page">
          <LazyContainer className="elementor-element elementor-element-3a683cab e-con-full e-flex e-con e-parent" data-id="3a683cab" data-element_type="container" data-e-type="container">
            <div className="elementor-element elementor-element-be436d6 e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-id="be436d6" data-element_type="container" data-e-type="container">
              <BlurReveal className="elementor-element elementor-element-69305081 blur-reveal elementor-widget elementor-widget-heading" data-id="69305081" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <h2 className="elementor-heading-title elementor-size-default">
                  <RevealText text={"My WORK"} offset={0} />
                </h2>
              </BlurReveal>
            </div>
            <div className="elementor-element elementor-element-1e352a13 e-con-full elementor-hidden-desktop e-flex e-con e-child" data-id="1e352a13" data-element_type="container" data-e-type="container">
              <BlurReveal className="elementor-element elementor-element-7fe8cda blur-reveal elementor-widget elementor-widget-heading" data-id="7fe8cda" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                <h2 className="elementor-heading-title elementor-size-default">
                  <RevealText text={"My WORK"} offset={0} />
                </h2>
              </BlurReveal>
            </div>
            <div className="elementor-element elementor-element-2aa5c515 e-con-full elementor-hidden-tablet elementor-hidden-mobile e-flex e-con e-child" data-id="2aa5c515" data-element_type="container" data-e-type="container" />
            <div className="elementor-element elementor-element-645bb3a6 e-flex e-con-boxed e-con e-child" data-id="645bb3a6" data-element_type="container" data-e-type="container">
              <div className="e-con-inner">
                <div className="elementor-element elementor-element-44bb8e6e e-con-full e-flex e-con e-child" data-id="44bb8e6e" data-element_type="container" data-e-type="container">
                  <div className="elementor-element elementor-element-854a56c elementor-widget elementor-widget-button" data-id="854a56c" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                    <Link to="/my-work#brown" className="elementor-button elementor-button-link elementor-size-sm">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">
                          {projectCategories[0].label}
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="elementor-element elementor-element-6ff3c7f1 elementor-widget elementor-widget-button" data-id="6ff3c7f1" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                    <Link to="/my-work#dark" className="elementor-button elementor-button-link elementor-size-sm">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">
                          {projectCategories[1].label}
                        </span>
                      </span>
                    </Link>
                  </div>
                  <div className="elementor-element elementor-element-4bdea3b3 elementor-widget elementor-widget-button" data-id="4bdea3b3" data-element_type="widget" data-e-type="widget" data-widget_type="button.default">
                    <Link to="/my-work#vintage" className="elementor-button elementor-button-link elementor-size-sm">
                      <span className="elementor-button-content-wrapper">
                        <span className="elementor-button-text">
                          {projectCategories[2].label}
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
                <div className="elementor-element elementor-element-2bc24216 e-con-full e-flex e-con e-child" data-id="2bc24216" data-element_type="container" data-e-type="container" id="brown">
                  <div className="elementor-element elementor-element-68c68821 e-con-full e-flex e-con e-child" data-id="68c68821" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-12fcbf5e elementor-widget__width-initial elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="12fcbf5e" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                      <div className="elementor-divider">
                        <span className="elementor-divider-separator" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-2eee5b71 elementor-widget elementor-widget-heading" data-id="2eee5b71" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                      <h2 className="elementor-heading-title elementor-size-default">
                        {projectCategories[0].label}
                      </h2>
                    </div>
                    <div className="elementor-element elementor-element-645fe92b elementor-widget__width-initial elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="645fe92b" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                      <div className="elementor-divider">
                        <span className="elementor-divider-separator" />
                      </div>
                    </div>
                  </div>
                  {projects.filter((project) => project.category === 'products').map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
                <div className="elementor-element elementor-element-7ec41cc4 e-con-full e-flex e-con e-child" data-id="7ec41cc4" data-element_type="container" data-e-type="container" id="dark">
                  <div className="elementor-element elementor-element-6e4254fb e-con-full e-flex e-con e-child" data-id="6e4254fb" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-432df631 elementor-widget__width-initial elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="432df631" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                      <div className="elementor-divider">
                        <span className="elementor-divider-separator" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-14b3f73f elementor-widget elementor-widget-heading" data-id="14b3f73f" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                      <h2 className="elementor-heading-title elementor-size-default">
                        {projectCategories[1].label}
                      </h2>
                    </div>
                    <div className="elementor-element elementor-element-43e53c4 elementor-widget__width-initial elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="43e53c4" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                      <div className="elementor-divider">
                        <span className="elementor-divider-separator" />
                      </div>
                    </div>
                  </div>
                  {projects.filter((project) => project.category === 'backend').map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                </div>
                <div className="elementor-element elementor-element-6e9647b2 e-con-full e-flex e-con e-child" data-id="6e9647b2" data-element_type="container" data-e-type="container" id="vintage">
                  <div className="elementor-element elementor-element-2db61333 e-con-full e-flex e-con e-child" data-id="2db61333" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-516b6af1 elementor-widget__width-initial elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="516b6af1" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                      <div className="elementor-divider">
                        <span className="elementor-divider-separator" />
                      </div>
                    </div>
                    <div className="elementor-element elementor-element-54f9e064 elementor-widget elementor-widget-heading" data-id="54f9e064" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                      <h2 className="elementor-heading-title elementor-size-default">
                        {projectCategories[2].label}
                      </h2>
                    </div>
                    <div className="elementor-element elementor-element-70d357b7 elementor-widget__width-initial elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="70d357b7" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                      <div className="elementor-divider">
                        <span className="elementor-divider-separator" />
                      </div>
                    </div>
                  </div>
                  {projects.filter((project) => project.category === 'web3').map((project) => (
                    <ProjectCard key={project.title} project={project} />
                  ))}
                  <div className="elementor-element elementor-element-e136ba9 e-con-full e-flex e-con e-child" data-id="e136ba9" data-element_type="container" data-e-type="container">
                    <div className="elementor-element elementor-element-e678a5b e-con-full e-flex e-con e-child" data-id="e678a5b" data-element_type="container" data-e-type="container">
                      <div className="elementor-element elementor-element-17c7b75 e-con-full e-flex e-con e-child" data-id="17c7b75" data-element_type="container" data-e-type="container">
                        <div className="elementor-element elementor-element-c10aedd elementor-widget-divider--view-line elementor-widget elementor-widget-divider" data-id="c10aedd" data-element_type="widget" data-e-type="widget" data-widget_type="divider.default">
                          <div className="elementor-divider">
                            <span className="elementor-divider-separator" />
                          </div>
                        </div>
                        <div className="elementor-element elementor-element-2756457 elementor-widget elementor-widget-heading" data-id="2756457" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                          <h2 className="elementor-heading-title elementor-size-default">
                            <a href={profile.github} target="_blank" rel="noreferrer">More on GitHub ↗</a>
                          </h2>
                        </div>
                      </div>
                      <div className="elementor-element elementor-element-1998ca7 elementor-widget elementor-widget-heading" data-id="1998ca7" data-element_type="widget" data-e-type="widget" data-widget_type="heading.default">
                        <h2 className="elementor-heading-title elementor-size-default">
                          Design inspired by Paula Gola's free Framer template. Rebuilt in React.
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </LazyContainer>
          <LazyContainer className="elementor-element elementor-element-67d04ff2 e-flex e-con-boxed e-con e-parent" data-id="67d04ff2" data-element_type="container" data-e-type="container">
            <div className="e-con-inner">
              <div className="elementor-element elementor-element-30c5d529 e-con-full e-flex e-con e-child" data-id="30c5d529" data-element_type="container" data-e-type="container">
                <div className="elementor-element elementor-element-5ffe96c5 elementor-widget elementor-widget-html" data-id="5ffe96c5" data-element_type="widget" data-e-type="widget" data-widget_type="html.default" />
                <div className="elementor-element elementor-element-537a671d elementor-widget elementor-widget-html" data-id="537a671d" data-element_type="widget" data-e-type="widget" data-widget_type="html.default" />
              </div>
            </div>
          </LazyContainer>
        </div>
      </div>
    </main>
  );
}
