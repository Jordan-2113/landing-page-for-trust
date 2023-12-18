class SectionBaseLogoSlider {
  static init() {
    this.swiperInit();
  }

  static swiperInit() {
    const elms = document.getElementsByClassName("logoSlider__splide");

    for (var i = 0; i < elms.length; i++) {
      new Splide(elms[i], {
        fixedWidth: "150px",
        fixedHeight: "150px",
        arrows: false,
        pagination: false,
        type: "loop",
        drag: false,
        focus: "center",
        perPage: 2,
        autoScroll: {
          speed: 0.5,
          pauseOnHover: false,
          pauseOnFocus: false,
        },
      }).mount(window.splide.Extensions);
    }
  }
}

SectionBaseLogoSlider.init();

