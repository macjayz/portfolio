// Same browser detection Elementor uses to add `e--ua-*` classes to <body>
// (apple-webkit.min.css depends on `e--ua-appleWebkit`).
export function userAgentClasses() {
  const ua = navigator.userAgent;
  const match = (s) => ua.includes(s);
  const opera = (!!window.opr && !!window.opr.addons) || !!window.opera || match(' OPR/');
  const firefox = match('Firefox');
  const safari = /^((?!chrome|android).)*safari/i.test(ua);
  const ie = /Trident|MSIE/.test(ua) && !!document.documentMode;
  const edge = (!ie && !!window.StyleMedia) || match('Edg');
  const chrome = !!window.chrome && match('Chrome') && !(edge || opera);
  const blink = match('Chrome') && !!window.CSS;
  const appleWebkit = match('AppleWebKit') && !blink;

  const env = {
    isTouchDevice: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
    appleWebkit,
    blink,
    chrome,
    edge,
    firefox,
    ie,
    mac: match('Macintosh'),
    opera,
    safari,
    webkit: match('AppleWebKit'),
  };

  return Object.keys(env).filter((key) => env[key]).map((key) => `e--ua-${key}`);
}
