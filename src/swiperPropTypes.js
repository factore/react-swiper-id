import PropTypes from 'prop-types';
import Swiper from 'swiper';

const {
  string,
  number,
  bool,
  func,
  object,
  element,
  shape,
  oneOf,
  oneOfType,
} = PropTypes;

export default {
  initialSlide: number,
  direction: string,
  setWrapperSize: bool,
  virtualTranslate: bool,
  width: number,
  height: number,
  autoHeight: bool,
  roundLengths: bool,
  nested: bool,

  // Autoplay
  autoplay: oneOfType([number, oneOf([false])]),
  autoplayStopOnLast: bool,
  autoplayDisableOnInteraction: bool,

  // Progress
  watchSlidesProgress: bool,
  watchSlidesVisibility: bool,

  // Freemode
  freeMode: bool,
  freeModeMomentum: bool,
  freeModeMomentumRatio: number,
  freeModeMomentumVelocityRatio: number,
  freeModeMomentumBounce: bool,
  freeModeMomentumBounceRatio: number,
  freeModeMinimumVelocity: number,
  freeModeSticky: bool,

  // Effects
  effect: string,
  fade: shape({ crossFade: bool }),
  cube: shape({
    slideShadows: bool,
    shadow: bool,
    shadowOffset: number,
    shadowScale: number,
  }),
  coverflow: shape({
    rotate: number,
    stretch: number,
    depth: number,
    modifier: number,
    slideShadows: bool,
  }),
  flip: shape({ slideShadows: bool, limitRotation: bool }),

  // Parallax
  parallax: bool,

  // Slides grid
  spaceBetween: number,
  slidesPerView: oneOfType([number, string]),
  slidesPerColumn: number,
  slidesPerColumnFill: string,
  slidesPerGroup: number,
  centeredSlides: bool,
  slidesOffsetBefore: number,
  slidesOffsetAfter: number,

  // Grab Cursor
  grabCursor: bool,

  // Touches
  touchEventsTarget: string,
  touchRatio: number,
  touchAngle: number,
  simulateTouch: bool,
  shortSwipes: bool,
  longSwipes: bool,
  longSwipesRatio: number,
  longSwipesMs: number,
  followFinger: bool,
  onlyExternal: bool,
  threshold: number,
  touchMoveStopPropagation: bool,
  iOSEdgeSwipeDetection: bool,
  iOSEdgeSwipeThreshold: number,
  touchReleaseOnEdges: bool,
  passiveListeners: bool,

  // Touch Resistance
  resistance: bool,
  resistanceRatio: number,

  // Clicks
  preventClicks: bool,
  preventClicksPropagation: bool,
  slideToClickedSlide: bool,

  // Swiping / No swiping
  allowSwipeToPrev: bool,
  allowSwipeToNext: bool,
  noSwiping: bool,
  noSwipingClass: string,
  swipeHandler: oneOfType([string, element]),

  // Navigation Controls
  uniqueNavElements: bool,

  // Pagination
  pagination: oneOfType([string, element]),
  paginationType: string,
  paginationHide: bool,
  paginationClickable: bool,
  paginationElement: string,
  paginationBulletRender: func,
  paginationFractionRender: func,
  paginationProgressRender: func,
  paginationCustomRender: func,

  // Navigation Buttons
  nextButton: oneOfType([string, object]),
  prevButton: oneOfType([string, object]),

  // Scrollbar
  scrollbar: oneOfType([string, element]),
  scrollbarHide: bool,
  scrollbarDraggable: bool,
  scrollbarSnapOnRelease: bool,

  // Accessibility
  a11y: bool,
  prevSlideMessage: string,
  nextSlideMessage: string,
  firstSlideMessage: string,
  lastSlideMessage: string,
  paginationBulletMessage: string,

  // Keyboard / Mousewheel
  keyboardControl: bool,
  mousewheelControl: bool,
  mousewheelForceToAxis: bool,
  mousewheelReleaseOnEdges: bool,
  mousewheelInvert: bool,
  mousewheelSensitivity: number,
  mousewheelEventsTarged: oneOfType([string, element]),

  // Hash/History Navigation
  hashnav: bool,
  hasnavWatchState: bool,
  history: oneOfType([string, oneOf([false])]),
  replaceState: bool,

  // Images
  preloadImages: bool,
  updateOnImagesReady: bool,
  lazyLoading: bool,
  lazyLoadingInPrevNext: bool,
  lazyLoadingInPrevNextAmount: number,
  lazyLoadingOnTransitionStart: bool,

  // Loop
  loop: bool,
  loopAdditionalSlides: number,
  loopedSlides: number,

  // Zoom
  zoom: bool,
  zoomMax: number,
  zoomMin: number,
  zoomToggle: bool,

  // Controller
  control: PropTypes.instanceOf(Swiper),
  controlInverse: bool,
  controlBy: string,
  normalizeSlideIndex: bool,

  // Observer
  observer: bool,
  observeParents: bool,

  // Breakpoints
  breakpoints: object,

  // Callbacks
  runCallbacksOnInit: bool,
  onInit: func,
  onSlideChangeStart: func,
  onSlideChangeEnd: func,
  onSlideNextStart: func,
  onSlideNextEnd: func,
  onSlidePrevStart: func,
  onSlidePrevEnd: func,
  onTransitionStart: func,
  onTransitionEnd: func,
  onTouchStart: func,
  onTouchMove: func,
  onTouchMoveOpposite: func,
  onSliderMove: func,
  onTouchEnd: func,
  onClick: func,
  onTap: func,
  onDoubleTap: func,
  onImagesReady: func,
  onProgress: func,
  onReachBeginning: func,
  onReachEnd: func,
  onDestroy: func,
  onSetTranslate: func,
  onSetTransition: func,
  onAutoplay: func,
  onAutoplayStart: func,
  onAutoplayStop: func,
  onLazyImageLoad: func,
  onLazyImageReady: func,
  onPaginationRendered: func,
  onScroll: func,
  onBeforeResize: func,
  onAfterResize: func,
  onKeyPress: func,

  // Namespace
  containerModifierClass: string,
  slideClass: string,
  slideActiveClass: string,
  slideDuplicatedActiveClass: string,
  slideVisibleClass: string,
  slideDuplicateClass: string,
  slideNextClass: string,
  slideDuplicatedNextClass: string,
  slidePrevClass: string,
  slideDuplicatedPrevClass: string,
  containerClass: string,
  wrapperClass: string,
  bulletClass: string,
  bulletActiveClass: string,
  paginationHiddenClass: string,
  paginationCurrentClass: string,
  paginationTotalClass: string,
  paginationProgressbarClass: string,
  paginationClickableClass: string,
  paginationModifierClass: string,
  buttonDisabledClass: string,
  lazyLoadingClass: string,
  lazyStatusLoadingClass: string,
  lazyPreloaderClass: string,
  preloaderClass: string,
  zoomContainerClass: string,
  notificationClass: string,
};
