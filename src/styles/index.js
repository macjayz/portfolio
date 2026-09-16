// Stylesheets are injected in exactly the order the original WordPress pages loaded them.
// Each page's Elementor CSS contains unscoped rules, so only the active page's
// stylesheet is enabled; it sits at its original position in the cascade.
import imgAutoSizes from './wordpress/img-auto-sizes.css?inline';
import emoji from './wordpress/emoji.css?inline';
import globalStyles from './wordpress/global-styles.css?inline';
import reset from './theme/reset.css?inline';
import theme from './theme/theme.css?inline';
import headerFooter from './theme/header-footer.css?inline';
import frontend from './elementor/frontend.min.css?inline';
import frontendInline from './elementor/frontend-inline.css?inline';
import kit from './elementor/kit-51.css?inline';
import divider from './elementor/widgets/divider.min.css?inline';
import heading from './elementor/widgets/heading.min.css?inline';
import fadeIn from './elementor/animations/fadeIn.min.css?inline';
import offCanvas from './elementor/widgets/off-canvas.min.css?inline';
import imageBox from './elementor/widgets/image-box.min.css?inline';
import shareButtons from './elementor/widgets/share-buttons.min.css?inline';
import appleWebkit from './elementor/apple-webkit.min.css?inline';
import swiper from './elementor/swiper.min.css?inline';
import eSwiper from './elementor/e-swiper.min.css?inline';
import nestedCarousel from './elementor/widgets/nested-carousel.min.css?inline';
import rating from './elementor/widgets/rating.min.css?inline';
import form from './elementor/widgets/form.min.css?inline';
import image from './elementor/widgets/image.min.css?inline';
import home from './pages/home.css?inline';
import about from './pages/about.css?inline';
import contact from './pages/contact.css?inline';
import myWork from './pages/my-work.css?inline';
import baseDesktop from './elementor/base-desktop.css?inline';
import baseMobile from './elementor/base-mobile.css?inline';
import header from './elementor/header-55.css?inline';
import footer from './elementor/footer-53.css?inline';
import lazyload from './elementor/lazyload.css?inline';
import blurReveal from './custom/blur-reveal.css?inline';
import responsiveFixes from './custom/responsive-fixes.css?inline';

const STYLESHEETS = [
  { css: imgAutoSizes },
  { css: emoji },
  { css: globalStyles },
  { css: reset },
  { css: theme },
  { css: headerFooter },
  { css: frontend },
  { css: frontendInline },
  { css: kit },
  { css: divider },
  { css: heading },
  { css: fadeIn },
  { css: offCanvas },
  { css: imageBox },
  { css: shareButtons },
  { css: appleWebkit },
  { css: swiper },
  { css: eSwiper },
  { css: nestedCarousel },
  { css: rating },
  { css: form },
  { css: image },
  { css: home, page: 'home' },
  { css: about, page: 'about' },
  { css: contact, page: 'contact' },
  { css: myWork, page: 'my-work' },
  { css: baseDesktop },
  { css: baseMobile, media: '(max-width:767px)' },
  { css: header },
  { css: footer },
  { css: lazyload },
  { css: blurReveal },
  { css: responsiveFixes },
];

const pageStyles = new Map();

export function injectStyles() {
  const fragment = document.createDocumentFragment();
  for (const { css, page, media } of STYLESHEETS) {
    const style = document.createElement('style');
    style.textContent = css;
    if (media) style.media = media;
    if (page) {
      style.dataset.page = page;
      style.media = 'not all';
      pageStyles.set(page, style);
    }
    fragment.appendChild(style);
  }
  document.head.appendChild(fragment);
}

export function setPageStyles(activePage) {
  for (const [page, style] of pageStyles) {
    style.media = page === activePage ? 'all' : 'not all';
  }
}
