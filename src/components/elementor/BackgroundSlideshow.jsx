import { Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { prefersReducedMotion } from './motion.js';

const KEN_BURNS_ACTIVE = 'elementor-ken-burns--active';

// Elementor container background slideshow (fade transition, looping, optional Ken Burns zoom).
export default function BackgroundSlideshow({ images, slideDuration, transitionDuration, kenBurns }) {
  let imageClass = 'elementor-background-slideshow__slide__image';
  if (kenBurns) imageClass += ` elementor-ken-burns elementor-ken-burns--${kenBurns}`;

  const handleKenBurns = (swiper) => {
    if (!kenBurns) return;
    swiper.el.querySelectorAll(`.${KEN_BURNS_ACTIVE}`).forEach((el) => el.classList.remove(KEN_BURNS_ACTIVE));
    swiper.slides[swiper.activeIndex]
      ?.querySelector('.elementor-background-slideshow__slide__image')
      ?.classList.add(KEN_BURNS_ACTIVE);
  };

  const reducedMotion = prefersReducedMotion();

  return (
    <Swiper
      className="elementor-background-slideshow"
      dir="rtl"
      modules={[Autoplay, EffectFade]}
      slidesPerView={1}
      slidesPerGroup={1}
      loop
      loopedSlides={images.length}
      speed={reducedMotion ? 0 : transitionDuration}
      autoplay={reducedMotion ? false : { delay: slideDuration, stopOnLastSlide: false }}
      effect="fade"
      fadeEffect={{ crossFade: true }}
      onAfterInit={handleKenBurns}
      onSlideChange={handleKenBurns}
    >
      {images.map((url) => (
        <SwiperSlide key={url} className="elementor-background-slideshow__slide">
          <div className={imageClass} style={{ backgroundImage: `url("${url}")` }} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
