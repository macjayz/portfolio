import { Children, useState } from 'react';
import { A11y, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { prefersReducedMotion } from './motion.js';

// Elementor Pro nested carousel: one slide per view, arrows inside, no loop/autoplay.
export default function NestedCarousel({ className, speed, spacing, children, ...props }) {
  // Arrow elements live outside the .swiper container (Elementor markup), so they're
  // handed to Swiper once mounted. Null (not undefined) stops Swiper React from
  // rendering its own default buttons.
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);
  const slides = Children.toArray(children);

  return (
    <div className={`${className} e-widget-swiper`} {...props}>
      <Swiper
        className="e-n-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label="Carousel"
        dir="ltr"
        modules={[Navigation, A11y]}
        slidesPerView={1}
        slidesPerGroup={1}
        spaceBetween={spacing}
        speed={prefersReducedMotion() ? 0 : speed}
        shortSwipes={false}
        maxBackfaceHiddenSlides={0}
        navigation={{ prevEl, nextEl }}
        a11y={{ enabled: true }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={slide.key} data-slide={index + 1} role="group" aria-roledescription="slide">
            {slide}
          </SwiperSlide>
        ))}
      </Swiper>
      <div ref={setPrevEl} className="elementor-swiper-button elementor-swiper-button-prev" role="button" tabIndex="0" aria-label="Previous">
        <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-left" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M646 125C629 125 613 133 604 142L308 442C296 454 292 471 292 487 292 504 296 521 308 533L604 854C617 867 629 875 646 875 663 875 679 871 692 858 704 846 713 829 713 812 713 796 708 779 692 767L438 487 692 225C700 217 708 204 708 187 708 171 704 154 692 142 675 129 663 125 646 125Z" />
        </svg>
      </div>
      <div ref={setNextEl} className="elementor-swiper-button elementor-swiper-button-next" role="button" tabIndex="0" aria-label="Next">
        <svg aria-hidden="true" className="e-font-icon-svg e-eicon-chevron-right" viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
          <path d="M696 533C708 521 713 504 713 487 713 471 708 454 696 446L400 146C388 133 375 125 354 125 338 125 325 129 313 142 300 154 292 171 292 187 292 204 296 221 308 233L563 492 304 771C292 783 288 800 288 817 288 833 296 850 308 863 321 871 338 875 354 875 371 875 388 867 400 854L696 533Z" />
        </svg>
      </div>
    </div>
  );
}
