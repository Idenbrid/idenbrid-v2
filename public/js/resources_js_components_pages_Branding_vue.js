"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Branding_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Navbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Navbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {},
  mounted: function mounted() {
    /* left side humbger menu */
    jQuery('.header-pc__btn').on('click', function () {
      jQuery("header").toggleClass("header_active");
      jQuery(".header-pc__btn").toggleClass("header-pc__btn_active");
      jQuery(".header-sp__btn").toggleClass("header-sp__btn_active");
    });
    jQuery('.header-sp__btn').on('click', function () {
      jQuery("header").toggleClass("header_active");
      jQuery(".header-pc__btn").toggleClass("header-pc__btn_active");
      jQuery(".header-sp__btn").toggleClass("header-sp__btn_active");
    });
    jQuery('.header-sp__fixed__menu__left__list__pulus_service').on('click', function () {
      jQuery(".header-sp__fixed__menu__left__list_service").toggleClass("header-sp__fixed__menu__left__list_service_active");
      console.log("hoge");
    });
    jQuery('.header-sp__fixed__menu__left__list__pulus_blog').on('click', function () {
      jQuery(".header-sp__fixed__menu__left__list_blog").toggleClass("header-sp__fixed__menu__left__list_blog_active");
      console.log("hoge");
    });
  } /*end*/
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Branding.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Branding.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/Navbar.vue */ "./resources/js/components/layout/Navbar.vue");
/* harmony import */ var _layout_Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Footer.vue */ "./resources/js/components/layout/Footer.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Navbar: _layout_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _layout_Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | スタジオ開発ハブ",
      meta: [{
        vmid: "description",
        name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
        content: "IDENBRID/アイデンブリッドは日本及びパキスタンにてIT受託開発を行なっているグローバル企業です。ウェブシステムやiOS・Androidのモバイルアプリを初め、ワンストップにてシステム設計、要件定義、UIUXデザイン、ウェブ開発、アプリ開発、クラウドまで一社完結にて対応しています。オフショア開発のみでなく、日本国内でもIT開発を行なっており、スタートアップから東証プライム上場企業まで幅広いクライアントの開発を支えています。"
      }]
    };
  },
  data: function data() {
    return {
      blogs: []
    };
  },
  mounted: function mounted() {
    var swiper = new Swiper(".voiceSlider", {
      centeredSlides: true,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 3.8,
          spaceBetween: 50
        }
      }
    });
    function loadedPageFunc() {
      if ($(".home").length) {
        $("#contents").addClass("open");
        setTimeout(function () {
          $(".loading").addClass("on");
        }, 300);
        $(window).on("load", function () {
          $(".loading").addClass("on2");
          setTimeout(function () {
            $(".loading").fadeOut();
          }, 800);
          setTimeout(function () {
            $("body").addClass("loaded");
            $(".header, .nav, .tg_catch").addClass("visibility");
            if ($(".pararel").length) {
              $(".pararel").addClass("on");
            }
          }, 1000);
        });
      } else {
        $(window).on("load", function () {
          $("body").addClass("loaded");
          $(".header, .nav, .fix_share").addClass("visibility");
          if ($(".pararel").length) {
            $(".pararel").addClass("on");
          }
          if ($(".recruit_fix").length) {
            $(".recruit_fix").addClass("visibility");
          }
          if ($(".member_content").length) {
            $(".lead_ttl, .lead_txt").addClass("on");
            $(".header").removeClass("visibility");
            $(".pararel").removeClass("on");
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Footer.vue?vue&type=template&id=e4df7ff6&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Footer.vue?vue&type=template&id=e4df7ff6& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("footer", [_vm._m(0), _vm._v(" "), _c("section", {
    staticClass: "mycontents-wide section-request"
  }, [_c("div", {}, [_c("div", {
    staticClass: "contents-section"
  }, [_c("div", {
    staticClass: "mb-4 contents-box pr-4"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body contact-request-col"
  }, [_c("router-link", {
    attrs: {
      to: "/doc/"
    }
  }, [_c("h4", {
    staticClass: "request-contact-heading"
  }, [_vm._v("\n                    資料ダウンロード "), _c("br"), _vm._v(" "), _c("span", {
    staticClass: "contact-col-sub-heading"
  }, [_vm._v("ITコンサル・開発に関する資料はこちら")])])])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "mb-4 contents-box pl-4"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body contact-request-col"
  }, [_c("router-link", {
    attrs: {
      to: "/contact/"
    }
  }, [_c("h4", {
    staticClass: "request-contact-heading"
  }, [_vm._v("\n                    お問い合わせ"), _c("br"), _vm._v(" "), _c("span", {
    staticClass: "contact-col-sub-heading"
  }, [_vm._v("仕事や見積りの依頼・取材の相談はこちら")])])])], 1)])])])])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("section", {
    staticClass: "section-footer-menu"
  }, [_c("div", {
    staticClass: "container pad"
  }, [_c("div", {
    staticClass: "footer-menu-heading mb-4"
  }, [_c("router-link", {
    attrs: {
      to: "/"
    }
  }, [_c("img", {
    staticClass: "footer-logo",
    attrs: {
      src: "/assets/img/logo/footer-idenbrid-logo.png"
    }
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "footer-menu"
  }, [_c("div", {
    staticClass: "foot-menu-group"
  }, [_c("h4", [_c("router-link", {
    attrs: {
      to: "/blog/"
    }
  }, [_vm._v("ブログ")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "foot-menu-group"
  }, [_c("h4", [_c("router-link", {
    attrs: {
      to: "/policy/"
    }
  }, [_vm._v("経営理念")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "foot-menu-group"
  }, [_c("h4", [_c("router-link", {
    attrs: {
      to: "/business/"
    }
  }, [_vm._v("事業紹介")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "foot-menu-group"
  }, [_c("h4", [_c("router-link", {
    attrs: {
      to: "/works/"
    }
  }, [_vm._v("仕事実績")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "foot-menu-group"
  }, [_c("h4", [_c("router-link", {
    attrs: {
      to: "/about/"
    }
  }, [_vm._v("会社情報")])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "foot-menu-group"
  }, [_c("h4", [_c("router-link", {
    attrs: {
      to: "/news/"
    }
  }, [_vm._v("お知らせ")])], 1)])]), _vm._v(" "), _c("div", {
    staticClass: "social-links"
  }, [_vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("div", [_c("router-link", {
    attrs: {
      to: "/blog/"
    }
  }, [_c("i", {
    staticClass: "fa fa-file-text twitter",
    attrs: {
      target: "_blank"
    }
  })])], 1)]), _vm._v(" "), _vm._m(6)])])])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "bg-color"
  }, [_c("div", {
    staticClass: "loopCopy isAnim anim-fadeIn inView"
  }, [_c("div", {
    staticClass: "area"
  }, [_c("div", {
    staticClass: "copy"
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "contact-main"
  }, [_c("p", {
    staticClass: "content-text content-text_contact fonter-text"
  }, [_vm._v("\n        お問い合わせは企画時点からお受けしております。またこんなことが実現可能かなどITに関する相談事も受け付けています。\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "contact__btns"
  }, [_c("a", {
    staticClass: "btn-wide btn-wide_call",
    attrs: {
      href: "https://line.me/ti/p/x16bH4B8yd",
      target: "_blank"
    }
  }, [_c("div", {
    staticClass: "btn-wide__imgs"
  }, [_c("img", {
    staticClass: "btn-wide__img",
    attrs: {
      src: "/public/assets/img/icons/Line-Black.png",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "btn-wide__img",
    attrs: {
      src: "/public/assets/img/icons/Line-white.png",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "btn-wide__text btn-wide__text_call"
  }, [_vm._v("会社LINE ID")])]), _vm._v(" "), _c("a", {
    staticClass: "btn-wide btn-wide_call",
    attrs: {
      href: "mailto:helloworld@idenbrid.com",
      target: "_blank"
    }
  }, [_c("div", {
    staticClass: "btn-wide__imgs"
  }, [_c("img", {
    staticClass: "btn-wide__img",
    attrs: {
      src: "/public/assets/img/icons/Mail-Black.png ",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "btn-wide__img",
    attrs: {
      src: "/public/assets/img/icons/Mail-White.png",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "btn-wide__text btn-wide__text_call"
  }, [_vm._v("\n            helloworld@idenbrid.com\n          ")])]), _vm._v(" "), _c("a", {
    staticClass: "btn-wide",
    attrs: {
      href: "skype:live:.cid.3145b74a3504693c?chat",
      target: "_blank"
    }
  }, [_c("div", {
    staticClass: "btn-wide__imgs"
  }, [_c("img", {
    staticClass: "btn-wide__img",
    attrs: {
      src: "/public/assets/img/icons/Skype-Black.png",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "btn-wide__img",
    attrs: {
      src: "/public/assets/img/icons/Skype-White.png",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "btn-wide__text btn-wide__text_contact"
  }, [_vm._v("会社Skype ID")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("a", {
    attrs: {
      href: "https://twitter.com/idenbridinc",
      target: "_blank"
    }
  }, [_c("i", {
    staticClass: "fa fa-twitter twitter"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("a", {
    attrs: {
      href: "https://www.youtube.com/channel/UC5ENsxgAQIqVfBIMy-Fp-0w",
      target: "_blank"
    }
  }, [_c("i", {
    staticClass: "fa fa-youtube twitter"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("a", {
    attrs: {
      href: "https://www.linkedin.com/company/idenbrid",
      target: "_blank"
    }
  }, [_c("i", {
    staticClass: "fa fa-linkedin twitter"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("a", {
    attrs: {
      href: "https://www.facebook.com/idenbrid/",
      target: "_blank"
    }
  }, [_c("i", {
    staticClass: "fa fa-facebook-f twitter"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "copyright"
  }, [_c("small", [_vm._v("©IDENBRID INC.™, 2021. All rights reserved.")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Navbar.vue?vue&type=template&id=2c4263fa&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Navbar.vue?vue&type=template&id=2c4263fa&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("header", [_c("div", {
    staticClass: "header-pc"
  }, [_c("div", {
    staticClass: "header-pc__fixed"
  }, [_c("h1", {
    staticClass: "header-pc__img"
  }, [_c("router-link", {
    attrs: {
      to: "/",
      id: "logo"
    }
  }, [_c("img", {
    staticClass: "header-pc__img__img",
    attrs: {
      src: "/public/assets/img/logo/idenbrid-logo.png",
      alt: ""
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "header-pc__img__img_white",
    attrs: {
      src: "/public/assets/img/logo/idenbrid-logo.png",
      alt: ""
    }
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "header-pc__fixed__menu"
  }, [_c("div", {
    staticClass: "header-pc__fixed__menu__right"
  }, [_c("ul", {
    staticClass: "header-pc__fixed__menu__left"
  }, [_c("li", {
    staticClass: "header-pc__fixed__menu__left__list"
  }, [_c("router-link", {
    attrs: {
      to: "/"
    }
  }, [_c("span", {
    staticClass: "jp"
  }, [_vm._v("トップページ")]), _c("span", {
    staticClass: "en"
  }, [_vm._v("Home")])])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-pc__nav__list"
  }, [_c("router-link", {
    attrs: {
      to: "/blog/"
    }
  }, [_vm._v("ブログ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-pc__nav__list"
  }, [_c("router-link", {
    attrs: {
      to: "/policy/"
    }
  }, [_vm._v("経営理念")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-pc__nav__list"
  }, [_c("router-link", {
    attrs: {
      to: "/business/"
    }
  }, [_vm._v("事業紹介")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-pc__nav__list"
  }, [_c("router-link", {
    attrs: {
      to: "/works/"
    }
  }, [_vm._v("仕事実績")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-pc__nav__list"
  }, [_c("router-link", {
    attrs: {
      to: "/about/"
    }
  }, [_vm._v("会社情報")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-pc__nav__list header-pc__nav__list_img mr-0 pr-0"
  }, [_c("router-link", {
    attrs: {
      to: "/contact/"
    }
  }, [_vm._v("お問い合わせ")])], 1)])])])]), _vm._v(" "), _c("nav", {
    staticClass: "header-pc__nav"
  }, [_c("ul", [_c("li", {
    staticClass: "header-pc__nav__list"
  }, [_c("router-link", {
    attrs: {
      to: "/blog/"
    }
  }, [_vm._v("ブログ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-pc__nav__list"
  }, [_c("router-link", {
    attrs: {
      to: "/policy/"
    }
  }, [_vm._v("経営理念")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-pc__nav__list"
  }, [_c("router-link", {
    attrs: {
      to: "/business/"
    }
  }, [_vm._v("事業紹介")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-pc__nav__list"
  }, [_c("router-link", {
    attrs: {
      to: "/works/"
    }
  }, [_vm._v("仕事実績")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-pc__nav__list"
  }, [_c("router-link", {
    attrs: {
      to: "/about/"
    }
  }, [_vm._v("会社情報")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-pc__nav__list header-pc__nav__list_img mr-0 pr-0"
  }, [_c("router-link", {
    attrs: {
      to: "/contact/"
    }
  }, [_vm._v("お問い合わせ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-pc__nav__lists header-pc__nav__list_img mr-0 pr-0 ml-2"
  }, [_c("router-link", {
    staticClass: "get-start-btn",
    attrs: {
      to: "/quote/"
    }
  }, [_vm._v("開発見積依頼")])], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "header-sp"
  }, [_c("h1", {
    staticClass: "header-sp__img"
  }, [_c("router-link", {
    attrs: {
      to: "/"
    }
  }, [_c("img", {
    staticClass: "header-sp__img__img",
    attrs: {
      src: "/public/assets/img/logo/idenbrid-logo.png",
      alt: ""
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "header-sp__img__img_white",
    attrs: {
      src: "/public/assets/img/idenbrid-logo.png",
      alt: ""
    }
  })])], 1), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "header-sp__fixed__menu"
  }, [_c("ul", {
    staticClass: "header-sp__fixed__menu__left"
  }, [_c("li", {
    staticClass: "header-sp__fixed__menu__left__list header-sp__fixed__menu__left__list_service"
  }, [_c("p", [_c("router-link", {
    attrs: {
      to: "/"
    }
  }, [_vm._v("トップページ")])], 1)]), _vm._v(" "), _c("li", {
    staticClass: "header-sp__fixed__menu__left__list"
  }, [_c("router-link", {
    attrs: {
      to: "/blog/"
    }
  }, [_vm._v("ブログ")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-sp__fixed__menu__left__list"
  }, [_c("router-link", {
    attrs: {
      to: "/policy/"
    }
  }, [_vm._v("経営理念")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-sp__fixed__menu__left__list"
  }, [_c("router-link", {
    attrs: {
      to: "/business/"
    }
  }, [_vm._v("事業紹介")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-sp__fixed__menu__left__list"
  }, [_c("router-link", {
    attrs: {
      to: "/works/"
    }
  }, [_vm._v("仕事実績")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-sp__fixed__menu__left__list"
  }, [_c("router-link", {
    attrs: {
      to: "/about/"
    }
  }, [_vm._v("会社情報")])], 1), _vm._v(" "), _c("li", {
    staticClass: "header-sp__fixed__menu__left__list"
  }, [_c("router-link", {
    attrs: {
      to: "/contact/"
    }
  }, [_vm._v("お問い合わせ")])], 1)])])])]), _vm._v(" "), _c("div", {
    staticClass: "side_fix on"
  }, [_c("div", {
    staticClass: "fix_btn"
  }, [_c("router-link", {
    attrs: {
      to: "/doc/"
    }
  }, [_c("span", {
    staticClass: "txt"
  }, [_vm._v("資料ダウンロード")])])], 1), _vm._v(" "), _c("div", {
    staticClass: "pararel fix_btn"
  }, [_c("router-link", {
    staticClass: "key",
    attrs: {
      to: "/faq"
    }
  }, [_c("span", {
    staticClass: "txt"
  }, [_vm._v("よくある質問")])])], 1)])]);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "header-sp__btn"
  }, [_c("span"), _c("span"), _c("span")]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Branding.vue?vue&type=template&id=55c9d911&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Branding.vue?vue&type=template&id=55c9d911& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("Navbar"), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("main", [_c("div", {
    attrs: {
      id: "contents"
    }
  }, [_c("div", {
    staticClass: "branding--mv"
  }, [_c("div", {
    staticClass: "text_area"
  }, [_vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("router-link", {
    staticClass: "btn-views",
    attrs: {
      to: "/doc/"
    }
  }, [_vm._v("資料ダウンロード"), _c("i", {
    staticClass: "fa fa-download ml-2",
    attrs: {
      "aria-hidden": "true"
    }
  })])], 1)]), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("section", {
    staticClass: "solution-page my-5",
    attrs: {
      id: "expertise"
    }
  }, [_c("h3", {
    staticClass: "content-title"
  }, [_vm._v("OUR EXPERTISE")]), _vm._v(" "), _c("ul", {
    staticClass: "service-contents"
  }, [_vm._m(5), _vm._v(" "), _c("li", {
    staticClass: "service-contents__list"
  }, [_c("router-link", {
    attrs: {
      to: "/mobileapp/"
    }
  }, [_c("div", {
    staticClass: "service-items"
  }, [_c("div", {
    staticClass: "service-contents__list__thumbnail-frame"
  }, [_c("img", {
    staticClass: "service-contents__list__thumbnail",
    attrs: {
      src: "/public/assets/img/solution/Solution_Img_01.png",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "service-contents__list__subtitle"
  }, [_vm._v("Mobile app development")]), _vm._v(" "), _c("h4", {
    staticClass: "service-contents__list__title"
  }, [_vm._v(" スマホiOS/Androidアプリ開発")]), _vm._v(" "), _c("p", {
    staticClass: "service-contents__list__text"
  }, [_vm._v("\n                                ライブ配信アプリ・SNSアプリ・チャットアプリ・マッチングアプリ・業務管理アプリなどカテゴリーを問わずに設計・デザイン・開発そして審査申請から保守までワンストップでお受けしております。またウェブとの連携を前提としたマイクロサービスアーキテクチャでの開発も得意としており、お客様のユーザービリティ向上を目指した開発を進めています。\n                            ")])])])], 1), _vm._v(" "), _c("li", {
    staticClass: "service-contents__list"
  }, [_c("router-link", {
    attrs: {
      to: "/development/"
    }
  }, [_c("div", {
    staticClass: "service-items"
  }, [_c("div", {
    staticClass: "service-contents__list__thumbnail-frame"
  }, [_c("img", {
    staticClass: "service-contents__list__thumbnail",
    attrs: {
      src: "/public/assets/img/solution/Solution_Img_02.png",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "service-contents__list__subtitle"
  }, [_vm._v("Software development")]), _vm._v(" "), _c("h4", {
    staticClass: "service-contents__list__title"
  }, [_vm._v("ウェブシステム開発")]), _vm._v(" "), _c("p", {
    staticClass: "service-contents__list__text"
  }, [_vm._v("\n                                ユーザー管理システム・在庫管理システム・マッチングシステム・管理者ダッシュボード・分析BIツール・EC販売システム・決済システムなどのウェブサービスのスクラッチ開発やメンテナンス保守・セキュリティ対策など企業様向けの受託開発を行っています。またクラウドにも精通しているエンジニアを抱えており、AWS・GCP・Azureまで幅広く対応可能です。\n                            ")])])])], 1), _vm._v(" "), _c("li", {
    staticClass: "service-contents__list"
  }, [_c("router-link", {
    attrs: {
      to: "/webitconsulting/"
    }
  }, [_c("div", {
    staticClass: "service-items"
  }, [_c("div", {
    staticClass: "service-contents__list__thumbnail-frame"
  }, [_c("img", {
    staticClass: "service-contents__list__thumbnail",
    attrs: {
      src: "/public/assets/img/solution/Solution_Img_03.png",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "service-contents__list__subtitle"
  }, [_vm._v("Off-shore Labo Development")]), _vm._v(" "), _c("h4", {
    staticClass: "service-contents__list__title"
  }, [_vm._v("ラボ型オフショア開発")]), _vm._v(" "), _c("p", {
    staticClass: "service-contents__list__text"
  }, [_vm._v("\n                                当社ではパキスタンに拠点を持っており、リソースベースのエンジニア要員やチームをご提供可能です。先進国のエンジニアに比べてコストパフォーマンスは高く、またチャットツールをベースに日本語のコミュニケーションも全く問題ございません。またフロントには全て日本人が立っているのも好評を頂いてる理由です。\n                            ")])])])], 1), _vm._v(" "), _c("li", {
    staticClass: "service-contents__list"
  }, [_c("router-link", {
    attrs: {
      to: "/uiuxdesign/"
    }
  }, [_c("div", {
    staticClass: "service-items"
  }, [_c("div", {
    staticClass: "service-contents__list__thumbnail-frame"
  }, [_c("img", {
    staticClass: "service-contents__list__thumbnail",
    attrs: {
      src: "/public/assets/img/solution/Solution_Img_04.png",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("p", {
    staticClass: "service-contents__list__subtitle"
  }, [_vm._v("Web design / UIUX design")]), _vm._v(" "), _c("h4", {
    staticClass: "service-contents__list__title"
  }, [_vm._v("UIUXデザイン制作")]), _vm._v(" "), _c("p", {
    staticClass: "service-contents__list__text service-contents__list_last__text"
  }, [_vm._v("当社ではAdobe\n                                XDやFigmaを使いワイヤーフレームからウェブ・アプリデザインを展開しています。画面遷移から各ボタンの配置、そしてコンポートネント単位でのデザイン設計など見た目のUIそしてユーザー体験を担保するためのUXに重きを置いたデザイン処理を施しています。見た目の良さだけなく、ユーザーから管理者まで使いやすいにこだわったデザインのご提供を行っています。\n                            ")])])])], 1)])]), _vm._v(" "), _c("section", {
    staticClass: "quote-us"
  }, [_c("h2", {
    staticClass: "heading cont-h1"
  }, [_vm._v("お問い合わせ")]), _vm._v(" "), _c("span", [_vm._v("開発のご相談、お見積りが知りたい、どんなお悩みもお伺いします！ ")]), _vm._v(" "), _c("div", {
    staticClass: "qoute-button"
  }, [_c("router-link", {
    staticClass: "contactbtn fade_y on",
    attrs: {
      to: "/contact/",
      bis_skin_checked: "1"
    }
  }, [_vm._v("今すぐ相談してみる")])], 1)]), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _vm._m(8)])]), _vm._v(" "), _c("Footer")], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mv_textarea"
  }, [_c("h2", [_c("strong", {
    staticClass: "en entxt"
  }, [_vm._v("STUDIO DEVELOPMENT HUB / スタジオ開発ハブ")]), _vm._v(" "), _c("span", {
    staticClass: "jptxt"
  }, [_vm._v("ITシステム設計、UIUXデザイン、ウェブシステム、モバイルアプリ構築、クラウドサーバー、ウェブ制作")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h3", {
    staticClass: "fade_y on"
  }, [_vm._v("プロジェクトを基本とした受託開発、"), _c("br", {
    staticClass: "pc"
  }), _vm._v("エンジニア要員：リソース型の２方式サービスを展開")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "fade_y on"
  }, [_vm._v("\n                        IDENBRIDではワンストップにて、ウェブシステムとスマホアプリ開発を得意とするソフトウェア開発会社です。"), _c("br"), _vm._v("要件定義からシステム設計、UIUXデザインそして開発、またウェブからスマホそしてクラウドまで一社で完結開発致します"), _c("br", {
    staticClass: "pc"
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "branding--service"
  }, [_c("div", {
    staticClass: "branding--service--inner"
  }, [_c("div", {
    staticClass: "head"
  }, [_c("div", {
    staticClass: "heading"
  }, [_c("span", {
    staticClass: "sub en fade_y on"
  }, [_vm._v("\n                                SERVICE\n                            ")]), _vm._v(" "), _c("h3", {
    staticClass: "fade_y on"
  }, [_vm._v("IDENBRID DEVELOPMENT ISM"), _c("br"), _vm._v("アイデンブリッドの開発主義")])]), _vm._v(" "), _c("p", {
    staticClass: "lead fade_y on"
  }, [_vm._v("\n                            要件定義、基本設計など他社が見切り発車しがちな開発の基礎となる設計・書類作成フェーズを丁寧に行い、お客様が実現されたいシステムとの乖離がないようにきちんと対応します。そして単純にソフトウェアの開発だけではなく、お客さまが何に困られているのかつまり「ユーザーペイン」をきちんとヒアリングし、その課題の解消を得意としています。\n                        ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "branding--strengths"
  }, [_c("div", {
    staticClass: "heading"
  }, [_c("span", {
    staticClass: "sub en fade_y on"
  }, [_vm._v("STRENGTH")]), _vm._v(" "), _c("h3", {
    staticClass: "fade_y on"
  }, [_vm._v("アイデンブリッドの強み")])]), _vm._v(" "), _c("div", {
    staticClass: "branding--strengths--content"
  }, [_c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "en num fade_y on"
  }, [_vm._v("01")]), _vm._v(" "), _c("div", {
    staticClass: "textarea"
  }, [_c("h4", {
    staticClass: "fade_y on"
  }, [_vm._v("ワンストップ開発フロー"), _c("br", {
    staticClass: "pc"
  }), _vm._v("【システム・アプリの開発は当社のみで完結】")]), _vm._v(" "), _c("p", {
    staticClass: "fade_y on"
  }, [_vm._v("\n                                私たちは上流工程、要件定義・基本設計、システム設計"), _c("br", {
    staticClass: "pc"
  }), _vm._v("UIUXデザイン、ウェブからアプリそしてクラウドまで一社にて構築を可能としております。\n                            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "en num fade_y on"
  }, [_vm._v("02")]), _vm._v(" "), _c("div", {
    staticClass: "textarea"
  }, [_c("h4", {
    staticClass: "fade_y on"
  }, [_vm._v("ITに詳しくないお客様の開発を得意"), _c("br", {
    staticClass: "pc"
  }), _vm._v("【ユーザーペイン解消の最優先】")]), _vm._v(" "), _c("p", {
    staticClass: "fade_y on"
  }, [_vm._v("\n                                当社はほとんどIT会社の下請けとして仕事をしておらず、エンド様と直接契約して開発を行なっています。\n                                  "), _c("br", {
    staticClass: "pc"
  }), _vm._v("その中でたくさんのITに詳しくない企業様の要件をシステムやアプリに落とし込むことにご好評頂いております。\n                            ")])])]), _vm._v(" "), _c("div", {
    staticClass: "item"
  }, [_c("div", {
    staticClass: "en num fade_y on"
  }, [_vm._v("03")]), _vm._v(" "), _c("div", {
    staticClass: "textarea"
  }, [_c("h4", {
    staticClass: "fade_y on"
  }, [_vm._v("開発マネジメントとスピード感"), _c("br", {
    staticClass: "pc"
  }), _vm._v("【圧倒的なコストパフォーマンス】")]), _vm._v(" "), _c("p", {
    staticClass: "fade_y on"
  }, [_vm._v("\n                                当社では「ワン・スリーシステム」（1時間返信3日以内書類作成提出）を導入し、"), _c("br", {
    staticClass: "pc"
  }), _vm._v("お客様のアウトプットに対するタイムマネジメントをしっかりしています。\n                            ")])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("li", {
    staticClass: "service-contents__text"
  }, [_c("p", [_vm._v("アイデンブリッドはワンストップ開発を展開しており、要件定義そしてシステム設計からUIUXデザイン、ウェブ開発、モバイルアプリ開発またクラウドまで対応しています。そして実現されたい要件をシステムやアプリに落とし込むことを得意としています。\n                    ")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "branding--result"
  }, [_c("div", {
    staticClass: "heading"
  }, [_c("span", {
    staticClass: "sub en fade_y on"
  }, [_vm._v("OUR COMMITMENT")]), _vm._v(" "), _c("h3", {
    staticClass: "fade_y on"
  }, [_vm._v("私たちの使命")])]), _vm._v(" "), _c("div", {
    staticClass: "branding--result--list"
  }, [_c("div", {
    staticClass: "branding--result--item"
  }, [_c("div", {
    staticClass: "icon fade_y on"
  }, [_c("img", {
    attrs: {
      src: "https://tomorrowgate.co.jp/asset/img/service/branding/result01.svg",
      alt: ""
    }
  })]), _vm._v(" "), _c("h4", {
    staticClass: "fade_y on"
  }, [_vm._v("お客様のご希望を実現")]), _vm._v(" "), _c("p", {
    staticClass: "fade_y on"
  }, [_vm._v("クライアントが作りたいもの、困っていることにフォーカスし、ご要望をITにて叶えます")])]), _vm._v(" "), _c("div", {
    staticClass: "branding--result--item"
  }, [_c("div", {
    staticClass: "icon fade_y on"
  }, [_c("img", {
    attrs: {
      src: "https://tomorrowgate.co.jp/asset/img/service/branding/result02.svg",
      alt: ""
    }
  })]), _vm._v(" "), _c("h4", {
    staticClass: "fade_y on"
  }, [_vm._v("コストパフォーマンスの高い開発")]), _vm._v(" "), _c("p", {
    staticClass: "fade_y on"
  }, [_vm._v("お客さまが価格以上の価値を実感していただくとともに、他社との比較においても費用対効果の高い仕事をします")])]), _vm._v(" "), _c("div", {
    staticClass: "branding--result--item"
  }, [_c("div", {
    staticClass: "icon fade_y on"
  }, [_c("img", {
    attrs: {
      src: "https://tomorrowgate.co.jp/asset/img/service/branding/result03.svg",
      alt: ""
    }
  })]), _vm._v(" "), _c("h4", {
    staticClass: "fade_y on"
  }, [_vm._v("ビジネスのグロースに並走")]), _vm._v(" "), _c("p", {
    staticClass: "fade_y on"
  }, [_vm._v("お客様の成長をITという側面よりともに支える存在としてご一緒に走ります")])]), _vm._v(" "), _c("div", {
    staticClass: "branding--result--item"
  }, [_c("div", {
    staticClass: "icon fade_y on"
  }, [_c("img", {
    attrs: {
      src: "https://tomorrowgate.co.jp/asset/img/service/branding/result04.svg",
      alt: ""
    }
  })]), _vm._v(" "), _c("h4", {
    staticClass: "fade_y on"
  }, [_vm._v("カスタマーサクセス")]), _vm._v(" "), _c("p", {
    staticClass: "fade_y on"
  }, [_vm._v("クライアントのアラートをすぐに察知できるよう常にお客様担当が寄り添って開発を進めます")])]), _vm._v(" "), _c("div", {
    staticClass: "branding--result--item"
  }, [_c("div", {
    staticClass: "icon fade_y on"
  }, [_c("img", {
    attrs: {
      src: "https://tomorrowgate.co.jp/asset/img/service/branding/result05.svg",
      alt: ""
    }
  })]), _vm._v(" "), _c("h4", {
    staticClass: "fade_y on"
  }, [_vm._v("タイムマネジメントの徹底")]), _vm._v(" "), _c("p", {
    staticClass: "fade_y on"
  }, [_vm._v("各タスクごと、チームごとの時間管理をツールを使って徹底しています")])]), _vm._v(" "), _c("div", {
    staticClass: "branding--result--item"
  }, [_c("div", {
    staticClass: "icon fade_y on"
  }, [_c("img", {
    attrs: {
      src: "https://tomorrowgate.co.jp/asset/img/service/branding/result06.svg",
      alt: ""
    }
  })]), _vm._v(" "), _c("h4", {
    staticClass: "fade_y on"
  }, [_vm._v("作業効率の改善")]), _vm._v(" "), _c("p", {
    staticClass: "fade_y on"
  }, [_vm._v("コミュニケーションプラットフォームや自社システムにおいて仕事の効率化を図っています")])]), _vm._v(" "), _c("div", {
    staticClass: "branding--result--item"
  }, [_c("div", {
    staticClass: "icon fade_y on"
  }, [_c("img", {
    attrs: {
      src: "https://tomorrowgate.co.jp/asset/img/service/branding/result07.svg",
      alt: ""
    }
  })]), _vm._v(" "), _c("h4", {
    staticClass: "fade_y on"
  }, [_vm._v("クライアントとのリレーションの構築")]), _vm._v(" "), _c("p", {
    staticClass: "fade_y on"
  }, [_vm._v("プロダクトファーストではなく、あくまでお客様ファーストの精神でお客様との関係構築を大切にしています")])]), _vm._v(" "), _c("div", {
    staticClass: "branding--result--item"
  }, [_c("div", {
    staticClass: "icon fade_y on"
  }, [_c("img", {
    attrs: {
      src: "https://tomorrowgate.co.jp/asset/img/service/branding/result08.svg",
      alt: ""
    }
  })]), _vm._v(" "), _c("h4", {
    staticClass: "fade_y on"
  }, [_vm._v("マーケットへのインパクトをともに")]), _vm._v(" "), _c("p", {
    staticClass: "fade_y on"
  }, [_vm._v("一つひとつのプロジェクトがマーケットにインパクトを与えられるよう真剣に向き合って仕事します")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "branding--compare"
  }, [_c("div", {
    staticClass: "heading"
  }, [_c("span", {
    staticClass: "sub en fade_y on"
  }, [_vm._v("CHECK OTHERS")]), _vm._v(" "), _c("h3", {
    staticClass: "fade_y on"
  }, [_vm._v("IDENBRIDと他社開発会社の比較")])]), _vm._v(" "), _c("div", {
    staticClass: "scroll"
  }, [_c("p", {
    staticClass: "en"
  }, [_vm._v("SCROLL")]), _vm._v(" "), _c("span", {
    staticClass: "bdr"
  })]), _vm._v(" "), _c("div", {
    staticClass: "branding--compare--table"
  }, [_c("table", {
    staticClass: "w-100"
  }, [_c("tbody", [_c("tr", {
    staticClass: "fade_y on"
  }, [_c("th"), _vm._v(" "), _c("th", [_vm._v("デザイン専門会社")]), _vm._v(" "), _c("th", [_vm._v("オフショア開発会社")]), _vm._v(" "), _c("th", [_vm._v("日本開発Sler会社")]), _vm._v(" "), _c("th", {
    staticClass: "tg"
  }, [_vm._v("IDENBRID")])]), _vm._v(" "), _c("tr", {
    staticClass: "fade_y on"
  }, [_c("th", [_vm._v("上流工程・システム設計")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "marks"
  }, [_vm._v("×")]), _vm._v("システム設計はできない")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "marks"
  }, [_vm._v("◯")]), _vm._v("できる会社もあるが、要件が伝わりづらい")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "marks"
  }, [_vm._v("△")]), _vm._v("専門人材がいれば設計可能")]), _vm._v(" "), _c("td", {
    staticClass: "tg"
  }, [_c("span", {
    staticClass: "marks"
  }, [_vm._v("◯")]), _vm._v("ワンストップでシステム設計もできる")])]), _vm._v(" "), _c("tr", {
    staticClass: "fade_y on"
  }, [_c("th", [_vm._v("UIUXデザイン")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "marks"
  }, [_vm._v("△")]), _vm._v("UIUXデザインの作成ができる")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "marks"
  }, [_vm._v("△")]), _vm._v("別会社に発注する必要あり")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "marks"
  }, [_vm._v("△")]), _vm._v("専門人材がいればUIUXデザイン可能")]), _vm._v(" "), _c("td", {
    staticClass: "tg"
  }, [_c("span", {
    staticClass: "marks"
  }, [_vm._v("◯")]), _vm._v("ワンストップでUIUXデザインもできる\n                                ")])]), _vm._v(" "), _c("tr", {
    staticClass: "fade_y on"
  }, [_c("th", [_vm._v("保守・メンテナンス")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "marks"
  }, [_vm._v("◯")]), _vm._v("保守を受けることはできない")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "marks"
  }, [_vm._v("×")]), _vm._v("保守を受けることはできるが、"), _c("br"), _vm._v("コミュニケーションが多く必要")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "marks"
  }, [_vm._v("△")]), _vm._v("保守を受けることができる")]), _vm._v(" "), _c("td", {
    staticClass: "tg"
  }, [_c("span", {
    staticClass: "marks"
  }, [_vm._v("◯")]), _vm._v("ワンストップで保守もできる")])]), _vm._v(" "), _c("tr", {
    staticClass: "fade_y on"
  }, [_c("th", [_vm._v("価格")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "marks"
  }, [_vm._v("△")]), _vm._v("デザインのみなので割高となる")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "marks"
  }, [_vm._v("×")]), _vm._v("単価は日本企業より安い可能性が大")]), _vm._v(" "), _c("td", [_c("span", {
    staticClass: "marks"
  }, [_vm._v("×")]), _vm._v("金額感は割高可能性大")]), _vm._v(" "), _c("td", {
    staticClass: "tg"
  }, [_c("span", {
    staticClass: "marks"
  }, [_vm._v("◯")]), _vm._v("日本とパキスタンの混合チームでリーズナブル")])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "branding--contact"
  }, [_c("h3", {
    staticClass: "fade_y on"
  }, [_vm._v("ブランディングに関するご質問があれば"), _c("br", {
    staticClass: "pc"
  }), _vm._v("まずはお気軽にご相談ください")]), _vm._v(" "), _c("div", {
    staticClass: "fade_y on"
  }, [_c("a", {
    staticClass: "contactbtn fade_y on",
    attrs: {
      href: "https://tomorrowgate.co.jp/contact/"
    }
  }, [_vm._v("今すぐ相談してみる")])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Footer.vue?vue&type=style&index=0&id=e4df7ff6&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Footer.vue?vue&type=style&index=0&id=e4df7ff6&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.loopCopy {\n  width: 100%;\n  overflow: hidden;\n  box-sizing: content-box;\n}\n.bg-color {\n  background-color: #1a202c;\n  padding: 60px 0px 0px;\n}\n.inView .isAnim.inView.anim-fadeIn,\n.inView .isAnim.inView .anim-fadeIn,\n.inView .anim-fadeIn,\n.inView.anim-fadeIn {\n  animation-name: fadeIn;\n}\n.loopCopy .area {\n  white-space: nowrap;\n  width: 100%;\n  padding-right: 100%;\n  box-sizing: content-box;\n  animation-iteration-count: infinite;\n  animation-timing-function: linear;\n  animation-name: ticker;\n  animation-duration: 10s;\n  height: 60px;\n  background: url(/assets/img/footer-heading.svg) repeat-x left top/945px 65px;\n}\n@keyframes ticker {\n0% {\n    transform: translate(0, 0);\n    visibility: visible;\n}\n100% {\n    transform: translate(-962px, 0);\n}\n}\n@keyframes ticker_sp {\n0% {\n    transform: translate(0, 0);\n    visibility: visible;\n}\n100% {\n    transform: translate(-603px, 0);\n}\n}\n.anim-fadeIn {\n  opacity: 1;\n  animation-duration: 0.5s;\n  animation-iteration-count: 1;\n  animation-timing-function: cubic-bezier(0.67, 0, 0.18, 1);\n  animation-fill-mode: both;\n}\nfooter {\n  background: #1a202c;\n}\n.container-request {\n  padding: 0px 74px !important;\n}\n.fonter-text {\n  color: #DADADA;\n}\n.footer-logo {\n  width: 20%;\n  margin: auto;\n  display: flex;\n}\n.col-content {\n  border: 1px solid #2B2B2B;\n}\n.bnr-img {\n  width: 100%;\n  height: auto;\n}\n.section-request {\n  padding: 80px 0px 60px;\n}\n.contact-main {\n  margin-bottom: 60px;\n}\n.col-main-heading h2 {\n  color: #fff;\n  font-size: 40px;\n}\n.contact-request-col {\n  padding: 50px 0px;\n}\n.request-contact-heading {\n  font-size: 20px;\n  letter-spacing: 0.1em;\n  color: #DADADA;\n  text-align: center;\n  font-weight: 700;\n  font-family: DIN-Bold;\n}\n.contact-request-col::after,\n.contact-request-col::before {\n  content: \"\";\n  background-color: #000;\n  height: 1px;\n  width: 40px;\n  position: absolute;\n  right: 6.5%;\n  top: 50%;\n  opacity: 0;\n  transition: 0.4s ease;\n}\n.contact-request-col:hover:after,\n.contact-request-col:hover:before {\n  opacity: 1;\n  right: 5%;\n  transition-delay: 0.2s;\n}\n.contact-request-col::before {\n  transform: rotate(45deg);\n  width: 10px;\n  top: calc(50% - 4px);\n}\n.contact-col-sub-heading {\n  font-size: 12px;\n  letter-spacing: 0.06em;\n  color: #DADADA;\n  font-weight: 400;\n  font-family: NotoSansJP-Regular;\n}\n.content-text_contact {\n  font-weight: 400;\n  font-family: NotoSansJP-Regular;\n}\n.section-request .card {\n  border: 1px solid #ffffff;\n  background: none !important;\n  transition: 0.6s ease;\n  cursor: pointer;\n  height: 149.25px;\n  border-radius: 0px;\n}\n.card:hover {\n  background: #FFFFFF !important;\n}\n.card:hover .contact-col-sub-heading,\n.card:hover .request-contact-heading {\n  color: #000000;\n}\n.footer-menu-heading h2 {\n  text-align: center;\n  color: #ffff;\n}\n.foot-menu-group {\n  margin: 0px 30px 0px 0px;\n}\n.footer-menu {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 40px auto;\n}\n.foot-menu-group h4 a {\n  color: #DADADA;\n  font-size: 14px;\n  letter-spacing: 0.1em;\n  font-weight: bold;\n  font-family: NotoSansJP-Bold;\n}\n.social-links {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 30px;\n  margin: 25px 0px 0px;\n}\n.twitter {\n  color: #fff;\n  font-size: 27px;\n}\n.copyright {\n  margin-top: 40px;\n  font-size: 14px;\n  color: #777;\n  letter-spacing: 0.18em;\n  text-align: center;\n  text-transform: uppercase;\n  font-weight: 400;\n  font-family: NotoSansJP-Regular;\n}\n.btn-wide {\n  width: 100%;\n  height: 85px;\n  padding-top: 20px;\n  margin: 0px 40px;\n}\n.contact__btns {\n  padding: 0px 150px;\n}\n.content-text_contact {\n  padding: 0px 30px;\n}\n@media screen and (min-width: 897px) {\nfooter {\n    padding: 0 0 160px;\n}\n}\n@media only screen and (max-width: 425px) {\n.footer-menu {\n    flex-wrap: wrap;\n    justify-content: space-around;\n    width: 85%;\n    -moz-column-gap: 100px;\n         column-gap: 100px;\n    margin: 2px auto;\n}\n.foot-menu-group {\n    margin-right: 0px;\n}\n.footer-menu-heading h2 {\n    font-size: 1.7rem;\n}\n.pad {\n    padding: 60px 0px !important;\n}\n.contact__btns {\n    padding: 0px 15px;\n}\n}\n@media screen and (min-width: 425px) and (max-width: 767px) {\n.footer-menu {\n    flex-wrap: wrap;\n    justify-content: space-around;\n    width: 90%;\n    -moz-column-gap: 180px;\n         column-gap: 180px;\n}\n.pad {\n    padding: 60px 0px !important;\n}\n.foot-menu-group {\n    margin-right: 0px;\n}\nh2 {\n    font-size: 1.5rem;\n}\n.contact__btns {\n    padding: 0px 100px;\n}\n}\n@media screen and (min-width: 768px) and (max-width: 999px) {\n.footer-menu {\n    flex-wrap: wrap;\n    justify-content: space-around;\n    width: 80%;\n    -moz-column-gap: 230px;\n         column-gap: 230px;\n}\n.foot-menu-group {\n    margin-right: 0px;\n}\n.btn-wide {\n    margin: 0px 18px 30px;\n}\n.contact__btns {\n    padding: 0px 100px;\n}\n}\n@media only screen and (max-width: 767px) {\n.section-request {\n    display: none;\n}\n.pad {\n    padding: 60px 0px !important;\n}\n.content-text_contact {\n    padding: 40px 30px;\n    margin: 0;\n    font-size: 14px;\n}\n.btn-wide {\n    margin: 0px 0px 30px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.header-pc__nav__lists[data-v-2c4263fa] {\n    position: relative;\n    display: inline-block;\n    height: 35px;\n    margin-top: 18px;\n    margin-right: 32px;\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 21px;\n}\n.get-start-btn[data-v-2c4263fa] {\n\n    display: flex;\n    align-items: center;\n    border: 2px solid rgba(37, 115, 176, 1);\n    color: rgba(37, 115, 176, 1);\n    min-height: 42px;\n    text-decoration: none;\n    text-transform: uppercase;\n    font-family: \"Barlow\", sans-serif;\n    font-size: 0.875rem;\n    line-height: 1.25;\n    padding: 9px 20px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n}\n.get-start-btn[data-v-2c4263fa]:hover {\n    background-color: rgba(37, 115, 176, 1);\n    color: #fff;\n}\n.side_fix[data-v-2c4263fa] {\n    position: fixed;\n    right: 0;\n    top: 50%;\n    transform: translate(100%, -50%);\n    z-index: 100001;\n    transition: 0.4s;\n    width: 45px;\n}\n.side_fix.on[data-v-2c4263fa] {\n    transform: translate(0, -50%);\n}\n.side_fix .fix_btn[data-v-2c4263fa] {\n    transition: 0.4s;\n}\n.side_fix .fix_btn a[data-v-2c4263fa] {\n    background-color: rgb(57, 108, 162);\n    display: flex;\n    border: solid 1px rgb(57, 108, 162);\n    cursor: pointer;\n    justify-content: center;\n    align-items: center;\n    padding: 25px 0;\n    height: 22vh;\n}\n.side_fix .fix_btn a .txt[data-v-2c4263fa] {\n    display: block;\n    -o-writing-mode: vertical-rl;\n    writing-mode: vertical-rl;\n    font-size: 14px;\n    color: #dadada;\n    font-family: NotoSansJP-Medium;\n    letter-spacing: 0.18px;\n    transition: 0.4s;\n    position: relative;\n}\n.side_fix .fix_btn[data-v-2c4263fa] {\n    transition: 0.4s;\n}\n.side_fix .fix_btn.pararel[data-v-2c4263fa] {\n    margin-top: 20px;\n}\n.side_fix .fix_btn[data-v-2c4263fa] {\n    transition: 0.4s;\n}\n@media screen and (max-width: 896px) {\n.side_fix[data-v-2c4263fa] {\n        width: 35px;\n}\n.side_fix .fix_btn a[data-v-2c4263fa] {\n        padding: 15px 0;\n}\n.side_fix .fix_btn a .txt[data-v-2c4263fa] {\n        color: #dadada;\n        font-size: 12px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Branding.vue?vue&type=style&index=0&id=55c9d911&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Branding.vue?vue&type=style&index=0&id=55c9d911&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.quote-us  .contactbtn {\n    border: 1px solid #fdfdfd;\n    color: #fdfdfd;\n    display: block;\n    font-size: 16px;\n    font-weight: 700;\n    letter-spacing: .1em;\n    padding: 22px 0;\n    text-align: center;\n    transition: .4s;\n    width: 260px;\n}\n.quote-us  .contactbtn:hover {\n    background-color: #fdfdfd;\n    color: #000;\n}\n.quote-us .heading {\n    margin: 0;\n    color: #ffffff;\n    font-size: 46px;\n    text-transform: uppercase;\n    letter-spacing: 0.5px;\n    line-height: 1.2;\n    padding-bottom: 10px;\n    font-weight: 700;\n}\n.quote-us{\n        background-image: url('/assets/img/contact-us-background-widget-img.png');\n        height: 320px;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        align-items: center;\n        text-align: center;\n}\n.quote-us span {\n    font-size: 22px;\n    color: #ffffff;\n    font-weight: 500;\n    word-spacing: 4px;\n}\n.qoute-button {\n    padding: 40px 0 0px;\n}\n.btn-views{\n    border: 2px solid #fff;\n    border-radius: 5px;\n    color: #fff;\n    cursor: pointer;\n    display: block;\n    font-size: 18px;\n    font-weight: 700;\n    letter-spacing: .1em;\n    margin-left: 8px; \n    margin-top: 50px;\n    opacity: 1;\n    padding: 19px 0;\n    position: relative;\n    text-align: center;\n    transition: .4s;\n    width: 250px;\n    z-index: 999;\n}\n.btn-views:hover {\n    background: #2573b0;\n    border: 2px solid #2573b0;\n    color: #fff;\n    transition: .4s;\n}\n.voiceSlider {\n        height: 100%;\n}\n.voiceSlider .swiper-slide {\n        text-align: center;\n        font-size: 18px;\n        background: #fff;\n        display: flex;\n        flex-direction: column;\n        justify-content: flex-start;\n        align-items: center;\n}\n.slick-list:focus {\n        outline: none !important;\n}\n.fade_y {\n        transform: translateY(10%);\n        opacity: 0;\n        transition: 0.5s ease;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n}\n.fade_y.on {\n        opacity: 1;\n        transform: translateY(0%);\n}\n.fade_y_min {\n        transform: translateY(3%);\n        opacity: 0;\n        transition: 0.5s ease;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n}\n.fade_y_min.on {\n        opacity: 1;\n        transform: translateY(0%);\n}\n.hoverScale .thumb {\n        overflow: hidden;\n        position: relative;\n}\n.hoverScale .thumb .hvrtxt {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transition: 0.4s;\n        transform: translate(-34%, -20%);\n        opacity: 0;\n        z-index: 1;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n}\n.hoverScale .thumb .hvrtxt .more_txt {\n        color: #dadada;\n        font-size: 14px;\n        font-family: DIN-Bold;\n        letter-spacing: 0.06px;\n        text-transform: uppercase;\n        position: relative;\n        padding-right: 20px;\n        font-weight: 700;\n}\n.hoverScale .thumb .hvrtxt .more_txt::after,\n    .hoverScale .thumb .hvrtxt .more_txt::before {\n        content: \"\";\n        height: 1px;\n        background-color: #dadada;\n        position: absolute;\n        right: 0;\n        top: 50%;\n        transition: 0.3s;\n}\n.hoverScale .thumb .hvrtxt .more_txt::after {\n        width: 6px;\n        transform: rotate(45deg) translateY(-3px);\n}\n.hoverScale .thumb .hvrtxt .more_txt::before {\n        width: 10px;\n}\n.hoverScale .thumb .hvrtxt .more_txt .underline {\n        position: relative;\n}\n.hoverScale .thumb .hvrtxt .more_txt .underline::after {\n        content: \"\";\n        background: #dadada;\n        width: 100%;\n        height: 1px;\n        position: absolute;\n        bottom: -4px;\n        left: 0;\n        transform: scale(0, 1);\n        transition: transform 0.3s;\n        transform-origin: right top;\n}\n@media screen and (min-width: 897px) {\n.hoverScale .thumb .hvrtxt .more_txt:hover::after,\n        .hoverScale .thumb .hvrtxt .more_txt:hover::before {\n            right: -5%;\n}\n.hoverScale .thumb .hvrtxt .more_txt:hover .underline::after {\n            transform-origin: left top;\n            transform: scale(1, 1);\n}\n}\n.hoverScale .thumb::after {\n        content: \"\";\n        background-color: rgba(0, 0, 0, 0.8);\n        width: 100%;\n        height: 100%;\n        position: absolute;\n        top: 0;\n        left: 0;\n        opacity: 0;\n        transition: 0.4s;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n}\n.hoverScale .thumb .scaleImg {\n        transition: 0.4s;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n}\n.sp {\n        display: none;\n}\n@media screen and (min-width: 897px) {\n.hoverScale:hover .thumb::after {\n            opacity: 1;\n}\n.hoverScale:hover .thumb .hvrtxt {\n            transform: translate(-34%, -50%);\n            opacity: 1;\n            transition-delay: 0.3s;\n}\n.hoverScale:hover .thumb .hvrtxt .more_txt::after,\n        .hoverScale:hover .thumb .hvrtxt .more_txt::before {\n            right: -5px;\n            transition-delay: 0.3s;\n}\n.hoverScale:hover .thumb .hvrtxt .more_txt .underline::after {\n            transform-origin: left top;\n            transform: scale(1, 1);\n            transition-delay: 0.3s;\n}\n.hoverScale:hover .thumb .scaleImg {\n            transform: scale(1.1);\n}\n}\n.hoverScaleIcon {\n        transition: 0.35s;\n        display: block;\n}\n.hoverScaleIcon img {\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n}\n@media screen and (min-width: 897px) {\n.hoverScaleIcon:hover {\n            transform: scale(1.2);\n}\n}\n.slide_area {\n        position: relative;\n}\n.slide_area .slick-arrow {\n        cursor: pointer;\n        position: absolute;\n        z-index: 2;\n        background-color: #868686;\n        transition: background-color 0.45s;\n        color: #fff;\n}\n@media screen and (min-width: 897px) {\n.slide_area .slick-arrow {\n            top: -100px;\n            width: 70px;\n            height: 70px;\n            border-radius: 70px;\n}\n.slide_area .slick-arrow:hover {\n            background-color: #000;\n}\n}\n@media screen and (max-width: 896px) {\n.slide_area .slick-arrow {\n            bottom: -80px;\n            width: 50px;\n            height: 50px;\n            border-radius: 50px;\n}\n}\n.slide_area .slick-prev {\n        right: calc(10% + 85px);\n}\n@media screen and (max-width: 896px) {\n.slide_area .slick-prev {\n            right: calc(5% + 60px);\n}\n}\n.slide_area .slick-prev:before {\n        transform: translate(-50%, -50%) rotate(45deg);\n        margin-top: 3px;\n}\n.slide_area .slick-prev:after {\n        transform: translate(-50%, -50%) rotate(-45deg);\n        margin-top: -3px;\n}\n@media screen and (min-width: 897px) {\n.slide_area .slick-next {\n            right: 10%;\n}\n}\n@media screen and (max-width: 896px) {\n.slide_area .slick-next {\n            right: 5%;\n}\n}\n.slide_area .slick-next:before {\n        transform: translate(-50%, -50%) rotate(-45deg);\n        margin-top: 3px;\n}\n.slide_area .slick-next:after {\n        transform: translate(-50%, -50%) rotate(45deg);\n        margin-top: -3px;\n}\n.slide_area .count {\n        position: absolute;\n        color: #000;\n        font-size: 1.6rem;\n        font-weight: 400;\n}\n.slide_area .count::after {\n        content: \"\";\n        width: 40px;\n        height: 1px;\n        background-color: #000;\n        transform: rotate(-30deg);\n        position: absolute;\n        top: 0;\n        left: -25px;\n}\n@media screen and (max-width: 896px) {\n.slide_area .count::after {\n            top: -2px;\n}\n}\n.company_nav {\n        position: relative;\n        background-color: #fff;\n        border-top: #d1d1d1 2px solid;\n        padding: 120px 10%;\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n}\n@media screen and (max-width: 896px) {\n.company_nav {\n            display: block;\n            padding: 70px 7%;\n}\n}\n.company_nav.branding_nav .company_nav_list li a {\n        font-size: 1.4rem;\n        font-weight: 500;\n}\n.company_nav .head_area .entxt {\n        display: block;\n        margin-top: 16px;\n        font-size: 4.2rem;\n        letter-spacing: 0.06em;\n}\n@media screen and (max-width: 896px) {\n.company_nav .head_area .entxt {\n            font-size: 2.2rem;\n            margin-top: 10px;\n}\n}\n.company_nav .head_area .jptxt {\n        font-size: 1.3rem;\n        letter-spacing: 0.04em;\n        color: #cfcfcf;\n}\n@media screen and (max-width: 896px) {\n.company_nav .head_area .jptxt {\n            font-size: 1.2rem;\n}\n}\n@media screen and (max-width: 896px) {\n.company_nav .company_nav_list {\n            margin-top: 40px;\n}\n}\n.company_nav .company_nav_list li:not(:first-child) {\n        margin-top: 25px;\n}\n.company_nav .company_nav_list li a {\n        position: relative;\n        color: #d1d1d1;\n        font-size: 1.6rem;\n        letter-spacing: 0.05em;\n        position: relative;\n        transition: 0.4s;\n}\n.company_nav .company_nav_list li a::after {\n        content: \"\";\n        background: #d1d1d1;\n        width: 100%;\n        height: 1px;\n        position: absolute;\n        bottom: -4px;\n        left: 0;\n        transform: scale(0, 1);\n        transition: transform 0.3s;\n        transform-origin: right top;\n}\n@media screen and (min-width: 897px) {\n.company_nav .company_nav_list li a:hover::after {\n            transform-origin: left top;\n            transform: scale(1, 1);\n}\n}\n.company_nav .company_nav_list li a.current {\n        pointer-events: none;\n        color: #000;\n}\n.company_nav .company_nav_list li a.current::after {\n        background: #000;\n        transform: scale(1, 1);\n}\n@media screen and (min-width: 897px) {\n.company_nav .company_nav_list li a:hover {\n            color: #000;\n}\n.company_nav .company_nav_list li a:hover::after {\n            background: #000;\n}\n}\n.service--content {\n        background-color: #fff;\n}\n@media screen and (min-width: 897px) {\n.service--content {\n            padding: 120px 10%;\n}\n}\n@media screen and (max-width: 896px) {\n.service--content {\n            padding: 80px 5%;\n}\n}\n@media screen and (min-width: 897px) {\n.service--content {\n            display: flex;\n            justify-content: space-between;\n}\n}\n.service.loaded .service--item {\n        transform: translateY(0);\n        opacity: 1;\n}\n.service--item {\n        color: #000;\n        transform: translateY(5%);\n        transition: 0.6s;\n        opacity: 0;\n}\n@media screen and (min-width: 897px) {\n.service--item {\n            width: 48%;\n}\n}\n@media screen and (max-width: 896px) {\n.service--item {\n            display: block;\n            margin-bottom: 50px;\n}\n}\n@media screen and (min-width: 897px) {\n.service--item a:hover .viewmore::after {\n            transform-origin: right top;\n            transform: scale(0, 1);\n}\n}\n.service--item a .servicename {\n        margin-top: 24px;\n}\n.service--item a .servicename .jp {\n        display: block;\n        margin-bottom: 12px;\n        font-size: 2.2rem;\n        font-weight: 700;\n        color: #000;\n}\n.service--item a .servicename .en {\n        font-size: 1.4rem;\n        color: #c6c6c6;\n}\n.branding.loaded .branding--mv h3 {\n        transform: translateY(0);\n        opacity: 1;\n}\n.branding.loaded .branding--mv p {\n        transform: translateY(0);\n        opacity: 1;\n}\n.branding.loaded .branding--mv .download {\n        transform: translateY(0);\n        opacity: 1;\n}\n.branding--mv {\n        background: url(/assets/img/sdh-bg-img.png) no-repeat center;\n        background-size: cover;\n        background-position: top center;\n        padding: 100px 10%;\n        margin-top: 0px;\n}\n@media screen and (max-width: 896px) {\n.branding--mv {\n            padding: 80px 5%;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--mv .text_area {\n            margin-top: 0;\n            padding: 0;\n}\n}\n.branding--mv .text_area h3 {\n        color: #fff;\n        font-size: 40px;\n        line-height: 1.35;\n        letter-spacing: 0.12em;\n        text-align: left;\n        margin-bottom: 45px;\n        font-weight: 600;\n        font-family: NotoSansJP-Bold;\n}\n@media screen and (max-width: 896px) {\n.branding--mv .text_area h3 {\n            font-size: 2.4rem;\n            margin-bottom: 30px;\n}\n}\n.branding--mv .text_area p {\n        font-size: 14px;\n        line-height: 2;\n        letter-spacing: 0.04px;\n        color: #fff;\n        text-align: left;\n        font-family: NotoSansJP-Regular;\n}\n.branding--mv .text_area .download {\n        text-align: center;\n        margin-top: 55px;\n        width: 280px;\n        display: block;\n        font-size: 16px;\n        color: #fff;\n        padding: 22px 0;\n        border: 1px solid #fdfdfd;\n        transition: 0.4s;\n        font-weight: 500;\n        font-family: NotoSansJP-Medium;\n}\n@media screen and (min-width: 897px) {\n.branding--mv .text_area .download:hover {\n            background: #fff;\n            color: #000;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--mv .text_area .download {\n            margin: 30px auto 0;\n            width: 100%;\n            font-size: 1.4rem;\n}\n}\n@media screen and (min-width: 897px) {\n.branding--service {\n            padding: 160px 10%;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--service {\n            padding: 80px 7%;\n}\n}\n.branding--service--inner .head {\n        display: flex;\n        justify-content: space-between;\n}\n@media screen and (max-width: 896px) {\n.branding--service--inner .head {\n            display: block;\n}\n}\n.branding--service--inner .head .heading {\n        padding-right: 70px;\n        width: 50%;\n}\n.branding--service--inner .head .heading .sub {\n        color: #333333;\n        font-size: 18px;\n        letter-spacing: 0.08px;\n        font-weight: 500;\n        font-family: DIN-Regular;\n}\n.branding--service--inner .head .heading h3 {\n        color: #333333;\n        font-size: 26px;\n        /* margin-top: 23px; */\n        letter-spacing: 0.08px;\n        font-family: NotoSansJP-Bold;\n}\n@media screen and (max-width: 896px) {\n.branding--service--inner .head .heading {\n            line-height: 1.5;\n            width: 100%;\n            padding-right: 0;\n}\n.branding--service--inner .head .heading .sub {\n            color: #333333;\n            font-size: 1.4rem;\n            letter-spacing: 0.08em;\n}\n.branding--service--inner .head .heading h3 {\n            color: #cfcfcf;\n            font-size: 2rem;\n            margin-top: 23px;\n            letter-spacing: 0.08em;\n}\n}\n.branding--service--inner .head .lead {\n        width: 50%;\n        font-size: 14px;\n        font-weight: 500;\n        color: #333;\n        line-height: 2.1;\n        letter-spacing: 0.04px;\n}\n@media screen and (max-width: 896px) {\n.branding--service--inner .head .lead {\n            width: 100%;\n            margin-top: 30px;\n}\n}\n.branding--service--wrap {\n        display: flex;\n        justify-content: space-between;\n        flex-wrap: wrap;\n}\n@media screen and (max-width: 896px) {\n.branding--service--wrap {\n            display: block;\n}\n}\n.branding--service--wrap--box {\n        margin-top: 100px;\n        width: 48%;\n}\n@media screen and (max-width: 896px) {\n.branding--service--wrap--box {\n            width: 100%;\n            margin-top: 80px;\n}\n}\n.branding--service--wrap--box:nth-of-type(1) {\n        width: 100%;\n}\n.branding--service--wrap--box:nth-of-type(1) .text_area {\n        display: flex;\n        justify-content: flex-start;\n}\n@media screen and (max-width: 896px) {\n.branding--service--wrap--box:nth-of-type(1) .text_area {\n            display: block;\n}\n}\n.branding--service--wrap--box:nth-of-type(1) .text_area .heading {\n        margin-bottom: 0;\n        margin-right: 80px;\n}\n@media screen and (max-width: 896px) {\n.branding--service--wrap--box:nth-of-type(1) .text_area .heading {\n            margin-right: 0;\n}\n}\n.branding--service--wrap--box .text_area {\n        margin-top: 45px;\n}\n@media screen and (max-width: 896px) {\n.branding--service--wrap--box .text_area {\n            margin-top: 30px;\n}\n}\n.branding--service--wrap--box .text_area .heading {\n        display: flex;\n        align-items: center;\n        justify-content: flex-start;\n        margin-bottom: 25px;\n}\n@media screen and (max-width: 896px) {\n.branding--service--wrap--box .text_area .heading {\n            display: block;\n}\n}\n.branding--service--wrap--box .text_area .heading h4 {\n        margin-right: 15px;\n        color: #333333;\n        letter-spacing: 0.04px;\n        font-size: 20px;\n        font-family: NotoSansJP-Medium;\n        font-weight: 500;\n}\n@media screen and (max-width: 896px) {\n.branding--service--wrap--box .text_area .heading h4 {\n            margin-right: 0;\n}\n}\n.branding--service--wrap--box .text_area .heading .label {\n        color: #cfcfcf;\n        padding: 7px 11px;\n        font-size: 13px;\n        letter-spacing: 0.04px;\n        background-color: #222;\n        font-family: NotoSansJP-Regular;\n        font-weight: 500;\n}\n@media screen and (max-width: 896px) {\n.branding--service--wrap--box .text_area .heading .label {\n            font-size: 12px;\n            padding: 5px 10px;\n            display: inline-block;\n            margin-top: 15px;\n}\n}\n.branding--service--wrap--box .text_area .lead {\n        color: #333333;\n        font-size: 14px;\n        line-height: 1.8;\n        font-family: NotoSansJP-Regular;\n        font-weight: 500;\n}\n@media screen and (max-width: 896px) {\n.branding--service--wrap--box .text_area .lead {\n            margin-top: 25px;\n}\n}\n.branding--service--wrap--box .more_txt {\n        color: #333333;\n        font-size: 16px;\n        letter-spacing: 0.06em;\n        text-transform: uppercase;\n        font-family: DIN-Regular;\n        font-weight: 400;\n        position: relative;\n        padding-right: 20px;\n        margin-top: 30px;\n        display: inline-block;\n}\n.branding--service--wrap--box .more_txt::after,\n    .branding--service--wrap--box .more_txt::before {\n        content: \"\";\n        height: 1px;\n        background-color: #333333;\n        position: absolute;\n        right: 0;\n        top: 50%;\n        transition: 0.3s;\n}\n.branding--service--wrap--box .more_txt::after {\n        width: 6px;\n        transform: rotate(45deg) translateY(-3px);\n}\n.branding--service--wrap--box .more_txt::before {\n        width: 10px;\n}\n.branding--service--wrap--box .more_txt .underline {\n        position: relative;\n}\n.branding--service--wrap--box .more_txt .underline::after {\n        content: \"\";\n        background: #333;\n        width: 100%;\n        height: 1px;\n        position: absolute;\n        bottom: -4px;\n        left: 0;\n        transform: scale(0, 1);\n        transition: transform 0.3s;\n        transform-origin: right top;\n}\n@media screen and (min-width: 897px) {\n.branding--service--wrap--box .more_txt:hover::after,\n        .branding--service--wrap--box .more_txt:hover::before {\n            right: -5%;\n}\n.branding--service--wrap--box .more_txt:hover .underline::after {\n            transform-origin: left top;\n            transform: scale(1, 1);\n}\n}\n.branding--strength {\n        background-color: #f6f6f6;\n}\n@media screen and (min-width: 897px) {\n.branding--strength {\n            padding: 150px 10%;\n}\n}\n.branding--strength .heading .sub {\n        color: #000;\n        font-size: 1.6rem;\n        letter-spacing: 0.08em;\n}\n.branding--strength .heading h3 {\n        color: #000;\n        font-size: 2rem;\n        margin-top: 23px;\n        letter-spacing: 0.08em;\n}\n.branding--strengths {\n        background-color: #f6f6f6;\n}\n@media screen and (min-width: 897px) {\n.branding--strengths {\n            padding: 160px 20% 160px 10%;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--strengths {\n            padding: 80px 5% 120px;\n}\n}\n.branding--strengths .heading .sub {\n        color: #000;\n        font-size: 16px;\n        letter-spacing: 0.08px;\n        font-family: DIN-Regular;\n        font-weight: 400;\n}\n.branding--strengths .heading h3 {\n        color: #000;\n        font-size: 20px;\n        font-family: NotoSansJP-Bold;\n        /* margin-top: 23px; */\n        letter-spacing: 0.08em;\n        font-weight: 700;\n}\n.branding--strengths--content .num{\n    color:#333333;\n}\n@media screen and (min-width: 897px) {\n.branding--strengths--content .item {\n            display: flex;\n            justify-content: space-between;\n            margin-top: 100px;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--strengths--content .item {\n            margin-top: 60px;\n}\n}\n@media screen and (min-width: 897px) {\n.branding--strengths--content .num {\n            font-size: 100px;\n            font-family: DIN-Regular;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--strengths--content .num {\n            font-size: 42px;\n            margin-bottom: 10px;\n}\n}\n@media screen and (min-width: 897px) {\n.branding--strengths--content .textarea {\n            width: 83.5%;\n}\n}\n.branding--strengths--content .textarea h4 {\n        margin-bottom: 34px;\n        letter-spacing: 0.12px;\n        line-height: 1.5;\n}\n@media screen and (min-width: 897px) {\n.branding--strengths--content .textarea h4 {\n            font-size: 24px;\n            font-family: NotoSansJP-Bold;\n            font-weight: 700;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--strengths--content .textarea h4 {\n            margin-bottom: 25px;\n            font-size: 21px;\n}\n}\n.branding--strengths--content .textarea p {\n        font-size: 14px;\n        line-height: 2;\n        letter-spacing: 0.04px;\n        font-family: NotoSansJP-Regular;\n        font-weight: 500;\n        color: #868686;\n}\n.branding--result {\n        background-color: #000;\n}\n@media screen and (min-width: 897px) {\n.branding--result {\n            padding: 140px 10%;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--result {\n            padding: 80px 7% 120px;\n}\n}\n.branding--result .heading .sub {\n        color: #cfcfcf;\n        font-size: 1.6rem;\n        letter-spacing: 0.08em;\n}\n.branding--result .heading h3 {\n        color: #cfcfcf;\n        font-size: 2rem;\n        margin-top: 23px;\n        letter-spacing: 0.08em;\n}\n@media screen and (min-width: 897px) {\n.branding--result--list {\n            margin-top: 80px;\n            display: flex;\n            flex-wrap: wrap;\n            justify-content: space-between;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--result--list {\n            margin-top: 45px;\n}\n}\n.branding--result--item {\n        background-color: #fff;\n        margin-top: 20px;\n        padding: 40px 15px;\n}\n@media screen and (min-width: 897px) {\n.branding--result--item {\n            width: 24%;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--result--item {\n            margin-top: 30px;\n            padding: 20px 15px;\n}\n}\n.branding--result--item .icon {\n        position: relative;\n        width: 25px;\n        margin: 0 auto 20px;\n        filter: invert(1);\n}\n.branding--result--item h4 {\n        position: relative;\n        font-size: 1.8rem;\n        font-weight: 500;\n        letter-spacing: 0.06em;\n        text-align: center;\n        color: #000;\n}\n.branding--result--item p {\n        position: relative;\n        margin-top: 25px;\n        font-size: 12px;\n        line-height: 1.85;\n        color: #000;\n}\n@media screen and (max-width: 896px) {\n.branding--result--item p {\n            margin-top: 20px;\n}\n}\n.branding--compare {\n        background-color: #fff;\n}\n@media screen and (min-width: 897px) {\n.branding--compare {\n            padding: 140px 10%;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--compare {\n            padding: 80px 7%;\n}\n}\n.branding--compare .heading .sub {\n        color: #000;\n        font-size: 1.6rem;\n        letter-spacing: 0.08em;\n}\n.branding--compare .heading h3 {\n        color: #000;\n        font-size: 2rem;\n        margin-top: 23px;\n        letter-spacing: 0.08em;\n}\n@media screen and (max-width: 896px) {\n.branding--compare .heading {\n            line-height: 1.5;\n}\n}\n@media screen and (min-width: 897px) {\n.branding--compare .scroll {\n            display: none;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--compare .scroll {\n            display: flex;\n            align-items: center;\n            margin-top: 50px;\n            margin-left: 1em;\n}\n}\n.branding--compare .scroll .bdr {\n        width: 40px;\n        height: 1px;\n        background-color: #fff;\n        overflow: hidden;\n        position: relative;\n}\n.branding--compare .scroll .bdr::before {\n        content: \"\";\n        background-color: #000;\n        width: 0%;\n        height: 3px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        animation: scranim 3s infinite;\n}\n.branding--compare .scroll p {\n        color: #000;\n        font-size: 1.4rem;\n        margin-right: 15px;\n        letter-spacing: 0.04em;\n}\n.branding--compare--table {\n        margin-top: 100px;\n}\n@media screen and (max-width: 896px) {\n.branding--compare--table {\n            overflow-x: scroll;\n            margin-top: 60px;\n}\n}\n.branding--compare--table table {\n        border-collapse: collapse;\n}\n@media screen and (max-width: 896px) {\n.branding--compare--table table {\n            width: 800px;\n}\n}\n.branding--compare--table table tr th,\n    .branding--compare--table table tr td {\n        border: 1px solid #1c1c1c;\n        font-size: 17.6px;\n        letter-spacing: 0.04em;\n        color: #000;\n        padding: 25px 20px;\n        line-height: 1.6;\n        text-align: center;\n        vertical-align: baseline;\n}\n@media screen and (max-width: 896px) {\n.branding--compare--table table tr th,\n        .branding--compare--table table tr td {\n            font-size: 1.2rem;\n            padding: 18px 1em;\n}\n}\n.branding--compare--table table tr th.tg,\n    .branding--compare--table table tr td.tg {\n        background-color: #000;\n        color: #dadada;\n}\n.branding--compare--table table tr th {\n        color: #000;\n        font-weight: 600;\n        background-color: #e2e2e2;\n        vertical-align: middle;\n}\n.branding--compare--table table tr td {\n        font-size: 11px;\n        border: 1px solid #1c1c1c;\n}\n.branding--compare--table table tr td .marks {\n        display: block;\n        font-size: 4rem;\n        font-weight: 600;\n}\n.branding--flow {\n        background-color: #000;\n}\n@media screen and (min-width: 897px) {\n.branding--flow {\n            padding: 140px 10%;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--flow {\n            padding: 80px 7%;\n}\n}\n.branding--flow .heading .sub {\n        color: #cfcfcf;\n        font-size: 1.6rem;\n        letter-spacing: 0.08em;\n}\n.branding--flow .heading h3 {\n        color: #cfcfcf;\n        font-size: 2rem;\n        margin-top: 23px;\n        letter-spacing: 0.08em;\n}\n.branding--flow .flow_box {\n        margin-top: 100px;\n        display: flex;\n}\n@media screen and (max-width: 896px) {\n.branding--flow .flow_box {\n            margin-top: 60px;\n            display: block;\n}\n}\n.branding--flow .flow_box .flow_item {\n        opacity: 0;\n        transition: 0.4s;\n}\n@media screen and (max-width: 896px) {\n.branding--flow .flow_box .flow_item {\n            width: 100%;\n            transform: translateY(-3%);\n}\n}\n.branding--flow .flow_box .flow_item.on {\n        opacity: 1;\n        transform: translate(0);\n}\n@media screen and (min-width: 897px) {\n.branding--flow .flow_box .flow_item {\n            transform: translateX(-3%);\n}\n.branding--flow .flow_box .flow_item.flow02 {\n            transition-delay: 0.2s;\n}\n.branding--flow .flow_box .flow_item.flow03 {\n            transition-delay: 0.4s;\n}\n.branding--flow .flow_box .flow_item.flow04 {\n            transition-delay: 0.6s;\n}\n}\n.branding--voice {\n        background-color: #fff;\n}\n@media screen and (min-width: 897px) {\n.branding--voice {\n            padding: 140px 0;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--voice {\n            padding: 80px 0 50px;\n}\n}\n.branding--voice .heading {\n        margin-left: 10%;\n}\n.branding--voice .heading .sub {\n        color: #000;\n        font-size: 16px;\n        letter-spacing: 0.08em;\n}\n.branding--voice .heading h3 {\n        color: #000;\n        font-size: 20px;\n        margin-top: 23px;\n        letter-spacing: 0.08em;\n}\n.branding--voice--content .slide_area {\n        margin-top: 40px;\n}\n.branding--voice--content .slide_area .swiper-button-prev:after,\n    .branding--voice--content .slide_area .swiper-button-next:after {\n        font-size: 18px;\n}\n@media screen and (max-width: 896px) {\n.branding--voice--content .slide_area {\n            margin-top: 40px;\n            padding: 0 7%;\n}\n.branding--voice--content .slide_area .slick-arrow {\n            top: -80px;\n}\n}\n.branding--voice--content .slide_area .swiper-button-prev {\n        right: calc(10% + 40px);\n        left: auto;\n}\n@media screen and (max-width: 896px) {\n.branding--voice--content .slide_area .swiper-button-prev {\n            right: 60px;\n}\n}\n.branding--voice--content .slide_area .swiper-button-next {\n        right: calc(10% - 45px);\n}\n@media screen and (max-width: 896px) {\n.branding--voice--content .slide_area .swiper-button-next {\n            right: 0;\n}\n}\n.branding--voice--content .slide_area h3 {\n        font-size: 1.6rem;\n        color: #000;\n        letter-spacing: 0.05em;\n        margin-bottom: 80px;\n}\n@media screen and (max-width: 896px) {\n.branding--voice--content .slide_area h3 {\n            margin-bottom: 45px;\n}\n}\n.branding--voice--content .slide_area .voice_slide {\n        position: relative;\n}\n.branding--voice--content .slide_area .voice_slide .slide_item {\n        margin-right: 70px;\n}\n@media screen and (max-width: 896px) {\n.branding--voice--content .slide_area .voice_slide .slide_item {\n            margin: 0;\n}\n}\n.branding--voice--content .slide_area .slide_item .img_box {\n        margin-bottom: 30px;\n}\n.branding--voice--content .slide_area .slide_item .text_area h4 {\n        letter-spacing: 0.1em;\n        font-size: 20px;\n        text-align: left;\n        margin-bottom: 20px;\n        line-height: 1.5;\n        font-weight: 600;\n}\n.branding--voice--content .slide_area .slide_item .text_area .logo {\n        margin-top: 30px;\n        margin-right: 0;\n        margin-left: auto;\n}\n.branding--voice--content .slide_area .slide_item .text_area .logo.logo01 {\n        width: 68px;\n}\n.branding--voice--content .slide_area .slide_item .text_area .logo.logo02 {\n        width: 110px;\n}\n.branding--voice--content .slide_area .slide_item .text_area .logo.logo03 {\n        width: 140px;\n}\n.branding--voice--content .slide_area .slide_item .text_area .logo.logo04 {\n        width: 100px;\n}\n.branding--voice--content .slide_area .slide_item .text_area .logo.logo05 {\n        width: 120px;\n}\n.branding--voice--content .slide_area .slide_item .text_area .logo.logo06 {\n        width: 120px;\n}\n.branding--voice--content .slide_area .slide_item .text_area .logo.logo07 {\n        width: 80px;\n}\n.branding--voice--content .slide_area .slide_item .text_area .logo.logo08 {\n        width: 170px;\n}\n.branding--voice--content .slide_area .slide_item .text_area p {\n        font-size: 14px;\n        line-height: 2;\n        text-align: left;\n        letter-spacing: 0.04em;\n        color: #000;\n}\n.branding--voice--content .slide_area .slide_item .text_area .who {\n        color: #868686;\n        text-align: right;\n        line-height: 1.8;\n        margin-top: 15px;\n}\n.branding--contact {\n        background-image: url(/assets/img/bottom-banner-background-image.png);\n        background-size: cover;\n        background-repeat: no-repeat;\n        background-position: 0 0;\n}\n@media screen and (min-width: 897px) {\n.branding--contact {\n            padding: 180px 0;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--contact {\n            padding: 100px 5%;\n}\n}\n.branding--contact h3 {\n        letter-spacing: 0.1em;\n        line-height: 1.85;\n        color: #dadada;\n        font-weight: 600;\n}\n@media screen and (min-width: 897px) {\n.branding--contact h3 {\n            text-align: center;\n            font-size: 40px;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--contact h3 {\n            font-size: 20px;\n}\n}\n.branding--contact p {\n        font-size: 1.4rem;\n        line-height: 2;\n        letter-spacing: 0.04em;\n        color: #dadada;\n}\n@media screen and (min-width: 897px) {\n.branding--contact p {\n            text-align: center;\n            margin-top: 42px;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--contact p {\n            margin-top: 32px;\n}\n}\n.branding--contact .contactbtn {\n        display: block;\n        width: 260px;\n        padding: 22px 0;\n        margin: 50px auto 0;\n        border: 1px solid #fdfdfd;\n        font-size: 16px;\n        font-weight: 700;\n        letter-spacing: 0.1em;\n        color: #fdfdfd;\n        text-align: center;\n        transition: 0.4s;\n}\n@media screen and (min-width: 897px) {\n.branding--contact .contactbtn:hover {\n            background-color: #fdfdfd;\n            color: #000;\n}\n}\n.branding.loaded .branding--intro .textarea .label {\n        transform: translateY(0);\n        opacity: 1;\n}\n.branding.loaded .branding--intro .textarea h3 {\n        transform: translateY(0);\n        opacity: 1;\n}\n.branding.loaded .branding--intro .textarea p {\n        transform: translateY(0);\n        opacity: 1;\n}\n.branding.loaded .branding--intro .photo .base {\n        transform: translateY(0);\n        opacity: 1;\n}\n.branding.loaded .branding--intro .photo .parts.parts01 {\n        transform: translateY(0);\n        opacity: 1;\n        transition-delay: 0.2s;\n}\n.branding.loaded .branding--intro .photo .parts.parts02 {\n        transform: translateY(0);\n        opacity: 1;\n        transition-delay: 0.4s;\n}\n.branding--intro {\n        z-index: 1;\n        padding: 40px 0 180px 10%;\n        position: relative;\n}\n@media screen and (max-width: 896px) {\n.branding--intro {\n            display: block;\n            padding: 30px 0 80px;\n}\n}\n@media screen and (max-width: 896px) {\n}\n.branding--intro.policy .textarea .photo {\n        left: 94%;\n        width: 80%;\n        max-width: 700px;\n}\n@media screen and (max-width: 896px) {\n.branding--intro.policy .textarea .photo {\n            left: auto;\n            bottom: auto;\n            width: 100%;\n}\n}\n.branding--intro.policy .textarea .photo .parts01 {\n        width: 43%;\n        bottom: 4%;\n        left: -10%;\n        z-index: 2;\n}\n@media screen and (max-width: 896px) {\n.branding--intro.policy .textarea .photo .parts01 {\n            width: 45%;\n            bottom: 9%;\n            left: -15%;\n}\n}\n.branding--intro.policy .textarea .photo .parts02 {\n        width: 55%;\n        right: 0;\n        top: -9%;\n        z-index: 2;\n}\n@media screen and (max-width: 896px) {\n.branding--intro.policy .textarea .photo .parts02 {\n            width: 50%;\n            right: -5%;\n            top: -17%;\n}\n}\n.branding--intro.policy .textarea .photo .base {\n        position: relative;\n        z-index: 1;\n}\n.branding--intro.recbranding .textarea .photo {\n        left: 114%;\n        width: 67%;\n        max-width: 700px;\n}\n@media screen and (max-width: 896px) {\n.branding--intro.recbranding .textarea .photo {\n            left: auto;\n            bottom: auto;\n            width: 80%;\n            margin-right: 0;\n            margin-left: auto;\n}\n}\n.branding--intro.recbranding .textarea .photo .parts01 {\n        width: 64%;\n        bottom: -5%;\n        left: -29%;\n        z-index: 2;\n}\n.branding--intro.recbranding .textarea .photo .parts02 {\n        width: 108%;\n        left: -49%;\n        top: -36%;\n}\n.branding--intro.recbranding .textarea .photo .base {\n        position: relative;\n        z-index: 1;\n}\n.branding--intro.outer .textarea .photo {\n        left: 108%;\n        max-width: 680px;\n        width: 72%;\n}\n@media screen and (max-width: 896px) {\n.branding--intro.outer .textarea .photo {\n            left: auto;\n            bottom: auto;\n            width: 80%;\n            margin-right: 0;\n            margin-left: auto;\n}\n}\n.branding--intro.outer .textarea .photo .parts01 {\n        width: 46%;\n        bottom: 0;\n        left: -38%;\n        z-index: 2;\n}\n.branding--intro.outer .textarea .photo .parts02 {\n        width: 70%;\n        left: -54%;\n        top: -13%;\n}\n.branding--intro.outer .textarea .photo .base {\n        position: relative;\n        z-index: 1;\n}\n.branding--intro.inner .textarea .photo {\n        left: 110%;\n        width: 71%;\n        max-width: 530px;\n}\n@media screen and (max-width: 896px) {\n.branding--intro.inner .textarea .photo {\n            left: auto;\n            bottom: auto;\n            width: 80%;\n            margin-right: 0;\n            margin-left: auto;\n}\n}\n.branding--intro.inner .textarea .photo .parts01 {\n        width: 89%;\n        bottom: -23%;\n        left: -39%;\n        z-index: 2;\n}\n@media screen and (max-width: 896px) {\n.branding--intro.inner .textarea .photo .parts01 {\n            width: 82%;\n            bottom: -16%;\n            left: -39%;\n}\n}\n.branding--intro.inner .textarea .photo .parts02 {\n        width: 59%;\n        left: -45%;\n        top: -13%;\n}\n.branding--intro.inner .textarea .photo .base {\n        position: relative;\n        z-index: 1;\n}\n.branding--intro.snsbranding::before {\n        opacity: 0.4;\n}\n.branding--intro.snsbranding .textarea .photo {\n        left: 92%;\n        width: 57%;\n        max-width: 460px;\n        z-index: 1;\n}\n@media screen and (max-width: 896px) {\n.branding--intro.snsbranding .textarea .photo {\n            left: auto;\n            bottom: auto;\n            width: 70%;\n            margin: 60px auto 0;\n}\n}\n.branding--intro.snsbranding .textarea .photo .parts01 {\n        width: 86%;\n        bottom: -1%;\n        left: 3%;\n        z-index: 2;\n}\n.branding--intro.snsbranding .textarea .photo .parts02 {\n        width: 102%;\n        left: -9%;\n        top: 23%;\n        z-index: 2;\n}\n.branding--intro.snsbranding .textarea .photo .base {\n        position: relative;\n        z-index: 1;\n}\n.branding--intro .textarea {\n        width: 60%;\n        color: #dadada;\n        position: relative;\n}\n@media screen and (max-width: 896px) {\n.branding--intro .textarea {\n            width: 100%;\n            padding: 0 5%;\n}\n}\n.branding--intro .textarea h3 {\n        line-height: 1.54;\n        letter-spacing: 0.14em;\n        transform: translateY(10%);\n        transition: 1s;\n        opacity: 0;\n}\n@media screen and (min-width: 897px) {\n.branding--intro .textarea h3 {\n            font-size: 3.2rem;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--intro .textarea h3 {\n            font-size: 2.4rem;\n            letter-spacing: 0.1em;\n}\n}\n.branding--intro .textarea p {\n        margin-top: 50px;\n        transform: translateY(10%);\n        transition: 1.4s;\n        opacity: 0;\n        font-size: 1.4rem;\n        line-height: 2.5;\n        letter-spacing: 0.04em;\n        color: #dadada;\n}\n@media screen and (max-width: 896px) {\n.branding--intro .textarea p {\n            margin-top: 30px;\n}\n}\n.branding--intro .textarea .photo {\n        position: absolute;\n        z-index: -1;\n        bottom: 50%;\n        transform: translateY(50%);\n}\n@media screen and (max-width: 896px) {\n.branding--intro .textarea .photo {\n            position: relative;\n            transform: translateY(0);\n            margin-top: 80px;\n}\n}\n.branding--intro .textarea .photo .base {\n        transform: translateY(2%);\n        transition: 1s;\n        opacity: 0;\n}\n.branding--intro .textarea .photo .parts {\n        position: absolute;\n}\n.branding--intro .textarea .photo .parts.parts01 {\n        transform: translateY(4%);\n        transition: 1.4s;\n        opacity: 0;\n}\n.branding--intro .textarea .photo .parts.parts02 {\n        transform: translateY(4%);\n        transition: 1.8s;\n        opacity: 0;\n}\n.branding--anchor {\n        background-color: #fff;\n}\n@media screen and (min-width: 897px) {\n.branding--anchor {\n            padding: 150px 10% 120px;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--anchor {\n            padding: 100px 5% 30px;\n}\n}\n.branding--anchor h3 {\n        font-size: 2rem;\n        letter-spacing: 0.06em;\n}\n.branding--anchor h3.space {\n        margin-top: 180px;\n}\n@media screen and (max-width: 896px) {\n.branding--anchor h3 {\n            font-size: 1.8rem;\n}\n}\n.branding--anchor ul {\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: space-between;\n}\n@media screen and (min-width: 897px) {\n.branding--anchor ul {\n            margin-top: 70px;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--anchor ul {\n            margin-top: 45px;\n}\n}\n.branding--anchor ul.x3 li {\n        width: 32%;\n}\n@media screen and (max-width: 896px) {\n.branding--anchor ul.x3 li {\n            width: 100%;\n}\n}\n.branding--anchor ul.x3 li .logo {\n        width: 122px;\n        margin: 20px auto;\n}\n.branding--anchor ul.x4 li {\n        width: 24%;\n        margin-bottom: 50px;\n}\n@media screen and (max-width: 896px) {\n.branding--anchor ul.x4 li {\n            width: 48%;\n            margin-bottom: 40px;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--anchor ul li {\n            width: 47.5%;\n            margin-bottom: 30px;\n}\n}\n.branding--anchor p {\n        margin-top: 10px;\n        font-size: 1.4rem;\n        line-height: 1.8;\n        font-weight: 700;\n        letter-spacing: 0.06em;\n        color: #000;\n        text-align: center;\n}\n.branding--anchor p.tl {\n        text-align: left;\n}\n.branding--area {\n        background-color: #000;\n}\n@media screen and (min-width: 897px) {\n.branding--area {\n            padding: 120px 10%;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--area {\n            padding: 80px 5%;\n}\n}\n@media screen and (min-width: 897px) {\n.branding--baselayout {\n            margin-bottom: 120px;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--baselayout {\n            margin-bottom: 80px;\n}\n.branding--baselayout:last-of-type {\n            margin-bottom: 0;\n}\n}\n@media screen and (min-width: 897px) {\n.branding--baselayout .textarea {\n            display: flex;\n            justify-content: space-between;\n            margin-top: 60px;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--baselayout .textarea {\n            margin-top: 30px;\n}\n}\n.branding--baselayout .eventname {\n        font-size: 1.8rem;\n        letter-spacing: 0.06em;\n        color: #dadada;\n        text-transform: uppercase;\n}\n@media screen and (max-width: 896px) {\n.branding--baselayout .eventname {\n            font-size: 1.4rem;\n            margin-bottom: 20px;\n}\n}\n@media screen and (min-width: 897px) {\n.branding--baselayout .explain {\n            width: 72.5%;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--baselayout .explain {\n            margin-top: 10px;\n}\n}\n.branding--baselayout .phrase {\n        font-size: 2.4rem;\n        font-weight: 600;\n        line-height: 1.58;\n        color: #dadada;\n}\n@media screen and (max-width: 896px) {\n.branding--baselayout .phrase {\n            font-size: 2.2rem;\n}\n}\n.branding--baselayout p {\n        font-size: 1.4rem;\n        line-height: 2;\n        letter-spacing: 0.04em;\n        color: #dadada;\n}\n@media screen and (min-width: 897px) {\n.branding--baselayout p {\n            margin-top: 28px;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--baselayout p {\n            margin-top: 18px;\n}\n}\n.branding--baselayout .more_txt {\n        color: #dadada;\n        font-size: 1.4rem;\n        font-family: \"DIN\";\n        letter-spacing: 0.06em;\n        text-transform: uppercase;\n        position: relative;\n        padding-right: 20px;\n        display: inline-block;\n        margin-top: 30px;\n}\n.branding--baselayout .more_txt::after,\n    .branding--baselayout .more_txt::before {\n        content: \"\";\n        height: 1px;\n        background-color: #dadada;\n        position: absolute;\n        right: 0;\n        top: 50%;\n        transition: 0.3s;\n}\n.branding--baselayout .more_txt::after {\n        width: 6px;\n        transform: rotate(45deg) translateY(-3px);\n}\n.branding--baselayout .more_txt::before {\n        width: 10px;\n}\n.branding--baselayout .more_txt .underline {\n        position: relative;\n}\n.branding--baselayout .more_txt .underline::after {\n        content: \"\";\n        background: #dadada;\n        width: 100%;\n        height: 1px;\n        position: absolute;\n        bottom: -4px;\n        left: 0;\n        transform: scale(0, 1);\n        transition: transform 0.3s;\n        transform-origin: right top;\n}\n@media screen and (min-width: 897px) {\n.branding--baselayout .more_txt:hover::after,\n        .branding--baselayout .more_txt:hover::before {\n            right: -5%;\n}\n.branding--baselayout .more_txt:hover .underline::after {\n            transform-origin: left top;\n            transform: scale(1, 1);\n}\n}\n@media screen and (min-width: 897px) {\n.branding .branding_flow {\n            padding: 178px 20% 150px 10%;\n}\n}\n@media screen and (max-width: 896px) {\n.branding .branding_flow {\n            padding: 90px 5%;\n}\n}\n.branding .branding_flow .heading .label {\n        font-size: 1.4rem;\n        font-family: \"DIN\";\n        color: #cfcfcf;\n        letter-spacing: 0.08em;\n        text-transform: uppercase;\n}\n.branding .branding_flow .heading h3 {\n        margin-top: 20px;\n        font-size: 2rem;\n        letter-spacing: 0.08em;\n        color: #dadada;\n}\n@media screen and (max-width: 896px) {\n.branding .branding_flow .heading h3 {\n            line-height: 1.5;\n            font-size: 1.8rem;\n}\n}\n.branding .branding_flow--content {\n        margin-top: 100px;\n}\n@media screen and (max-width: 896px) {\n.branding .branding_flow--content {\n            margin-top: 60px;\n}\n}\n.branding .branding_flow--content .item {\n        margin-bottom: 80px;\n}\n@media screen and (min-width: 897px) {\n.branding .branding_flow--content .item {\n            display: flex;\n}\n}\n.branding .branding_flow--content .num {\n        letter-spacing: 0.06em;\n        color: #dadada;\n}\n@media screen and (min-width: 897px) {\n.branding .branding_flow--content .num {\n            font-size: 10rem;\n}\n}\n@media screen and (max-width: 896px) {\n.branding .branding_flow--content .num {\n            font-size: 4.4rem;\n}\n}\n@media screen and (min-width: 897px) {\n.branding .branding_flow--content .textarea {\n            margin-left: 60px;\n}\n}\n@media screen and (max-width: 896px) {\n.branding .branding_flow--content .textarea {\n            margin-top: 10px;\n}\n}\n.branding .branding_flow--content .textarea h4 {\n        font-size: 2.4rem;\n        line-height: 1.35;\n        letter-spacing: 0.1em;\n        color: #dadada;\n}\n@media screen and (max-width: 896px) {\n.branding .branding_flow--content .textarea h4 {\n            font-size: 2rem;\n            line-height: 1.5;\n}\n}\n.branding .branding_flow--content .textarea p {\n        margin-top: 28px;\n        font-size: 1.4rem;\n        line-height: 2;\n        letter-spacing: 0.04em;\n        color: #dadada;\n}\n@media screen and (max-width: 896px) {\n.branding .branding_flow--content .textarea p {\n            margin-top: 20px;\n}\n}\n.solution-page {\n        padding: 60px 10% 120px;\n}\n.service-section {\n        padding: 60px 10% 120px;\n}\n\n    /*servive*/\n.service {\n        padding-bottom: 160px;\n        padding-top: 0px;\n        /*影の調整 160 - 20*/\n}\n\n\n    /*.service-contents {\n    columns: 2;\n    column-fill: auto;\n    column-gap: 60px;\n}\n\n.service-contents__text, .service-contents__list {\n    margin-bottom: 60px;\n    break-inside: avoid;\n    transform: translateZ(0);\n}*/\n.service-subcontents__text {\n        font-weight: bold;\n        font-size: 16px;\n        line-height: 24px;\n        width: calc((100% - 415px) / 1);\n        text-align: center;\n        margin: auto;\n}\n.service-contents {\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        flex-wrap: wrap;\n        flex-direction: row-reverse;\n}\n.service-contents__text {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: calc((100% - 60px) / 2);\n}\n.service-contents__list {\n        width: calc((100% - 60px) / 2);\n        margin-bottom: 60px;\n}\n.service-contents .service-contents__list:nth-child(2n+1) {\n        position: relative;\n        top: 132px;\n}\n.service-contents__text {\n        font-weight: bold;\n        font-size: 16px;\n        line-height: 24px;\n}\n.service-contents__list {\n        background: #FFFFFF;\n        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);\n        border-radius: 15px;\n        min-height: 360px;\n}\n.service-contents__list a {\n        position: relative;\n        display: inline-block;\n        width: 100%;\n        height: 100%;\n}\n.service-contents__list a:hover .service-contents__list__thumbnail {\n        transform: translateY(-6%) scale(1.15);\n}\n.service-contents__list__thumbnail-frame {\n        position: absolute;\n        border-radius: 15px 15px 0 0;\n        top: 0;\n        left: 0;\n        height: 300px;\n        width: 100%;\n        overflow: hidden;\n}\n.service-contents__list__thumbnail {\n        height: 300px;\n        width: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        transition: 0.5s;\n        position: relative;\n        z-index: 1;\n}\n.service-contents__list__subtitle {\n        margin-top: 285px;\n        margin-left: 30px;\n        font-weight: bold;\n        font-size: 14px;\n        line-height: 21px;\n        letter-spacing: 0.05em;\n        position: relative;\n        z-index: 2;\n}\n.service-contents__list__title {\n        margin: 0 30px 10px 30px;\n        font-weight: bold;\n        font-size: 24px;\n        line-height: 36px;\n        letter-spacing: 0.05em;\n        position: relative;\n        z-index: 2;\n}\n.service-contents__list__text {\n        margin: 0 30px;\n        padding-bottom: 20px;\n        font-weight: 500;\n        font-size: 14px;\n        line-height: 21px;\n}\n.viewmore-btn_service {\n        margin-top: 15px;\n}\n.service-contents__list .service-items {\n        position: relative;\n        display: inline-block;\n        width: 100%;\n        height: 100%;\n}\n.service-contents__list .service-items:hover .service-contents__list__thumbnail {\n        transform: translateY(-6%) scale(1.15);\n}\n@media (max-width: 767px) {\n.service {\n            padding-bottom: 60px;\n}\n.service-contents {\n            display: block;\n}\n.service-contents__text {\n            position: relative;\n            width: 100%;\n}\n.service-contents__list {\n            width: 100%;\n            min-height: 270px;\n}\n.service-contents__list a {\n            height: auto;\n}\n.service-contents .service-contents__list:nth-child(2n+1) {\n            top: inherit;\n}\n.service-contents__text,\n        .service-contents__list {\n            margin-bottom: 30px !important;\n}\n.service-contents .service-contents__list:nth-child(5) {\n            margin-bottom: 0 !important;\n}\n.service-contents__list__thumbnail-frame {\n            height: 150px;\n}\n.service-contents__list__thumbnail {\n            height: 120px;\n            -o-object-position: bottom;\n               object-position: bottom;\n}\n.service-contents__list__subtitle {\n            margin-top: 112px;\n            margin-bottom: 0;\n            margin-left: 10px;\n            font-size: 10px;\n            line-height: 15px;\n}\n.service-contents__list__title {\n            margin: 0 30px 10px 10px;\n            font-size: 14px;\n            line-height: 21px;\n}\n.service-contents__list__text {\n            margin: 0 10px 12px 10px;\n            font-size: 13px;\n            line-height: 19px;\n}\n.viewmore-btn_service {\n            margin: 50px auto 0 auto;\n}\n}\n\n    /*product section*/\n.product {\n        padding-bottom: 60px;\n        /*蠖ｱ縺ｮ隱ｿ謨ｴ 160 - 20*/\n}\n.product-contents {\n        -moz-columns: 2;\n             columns: 2;\n        -moz-column-fill: auto;\n             column-fill: auto;\n        -moz-column-gap: 60px;\n             column-gap: 60px;\n}\n.product-contents__text,\n    .product-contents__list {\n        margin-bottom: 60px;\n        -moz-column-break-inside: avoid;\n             break-inside: avoid;\n        transform: translateZ(0);\n}\nul .product-contents__list:nth-child(3) {\n        margin-bottom: 0;\n}\n.product-contents__text {\n        font-weight: bold;\n        font-size: 16px;\n        line-height: 24px;\n}\n.product-contents__list {\n        background: #FFFFFF;\n        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);\n        border-radius: 15px;\n}\n.product-contents__list__thumbnail {\n        width: 100%;\n        border-radius: 15px 15px 0 0;\n}\n.product-contents__list__sorrytext {\n        /*issue: 繝�じ繧､繝ｳ蟠ｩ繧後ｋ*/\n        position: absolute;\n        width: 100%;\n        top: 80px;\n        text-align: center;\n        color: #FFFFFF;\n        font-weight: bold;\n        font-size: 14px;\n        line-height: 21px;\n        letter-spacing: 0.05em;\n}\n.product-contents__list__sorrytext_last {\n        top: 60px;\n}\n.product-contents__list__subtitle {\n        margin-top: -23px;\n        margin-left: 30px;\n        font-weight: bold;\n        font-size: 14px;\n        line-height: 21px;\n        letter-spacing: 0.05em;\n}\n.product-contents__list__title {\n        margin: 0 30px 10px 30px;\n        font-weight: bold;\n        font-size: 24px;\n        line-height: 36px;\n        letter-spacing: 0.05em;\n}\n.product-contents__list__text {\n        margin: 0 30px;\n        padding-bottom: 20px;\n        font-weight: 500;\n        font-size: 14px;\n        line-height: 21px;\n}\n.viewmore-btn_product {\n        margin-top: -58px;\n}\n@media (max-width: 767px) {\n.solution-page {\n            padding: 60px 5%;\n}\n.profileGallery {\n            grid-gap: 10px;\n}\n.button-fit {\n            width: 100%;\n}\n.product {\n            padding-bottom: 0px;\n            /*蠖ｱ縺ｮ隱ｿ謨ｴ 160 - 20*/\n}\n.product-contents {\n            -moz-columns: 1;\n                 columns: 1;\n}\n.product-contents__text,\n        .product-contents__list {\n            margin-bottom: 30px !important;\n}\n.product-contents .product-contents__list:nth-child(5) {\n            margin-bottom: 0 !important;\n}\n.product-contents__list_last {\n            margin-bottom: 0 !important;\n}\n.product-contents__list__thumbnail {\n            width: 100%;\n}\n.product-contents__list__sorrytext {\n            top: 40px;\n            font-size: 13px;\n            line-height: 19px;\n}\n.product-contents__list__sorrytext_last {\n            top: 30px;\n}\n.product-contents__list__subtitle {\n            margin-top: -8px;\n            margin-bottom: 0;\n            margin-left: 10px;\n            font-size: 10px;\n            line-height: 15px;\n}\n.product-contents__list__title {\n            margin: 0 30px 10px 10px;\n            font-size: 14px;\n            line-height: 21px;\n}\n.product-contents__list__text {\n            margin: 0 10px 12px 10px;\n            font-size: 13px;\n            line-height: 19px;\n}\n.viewmore-btn_product {\n            margin: 50px auto 0 auto;\n}\n.service-subcontents__text {\n            width: 95%;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Footer.vue?vue&type=style&index=0&id=e4df7ff6&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Footer.vue?vue&type=style&index=0&id=e4df7ff6&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_e4df7ff6_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=e4df7ff6&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Footer.vue?vue&type=style&index=0&id=e4df7ff6&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_e4df7ff6_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_e4df7ff6_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_2c4263fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_2c4263fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_2c4263fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Branding.vue?vue&type=style&index=0&id=55c9d911&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Branding.vue?vue&type=style&index=0&id=55c9d911&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Branding_vue_vue_type_style_index_0_id_55c9d911_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Branding.vue?vue&type=style&index=0&id=55c9d911&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Branding.vue?vue&type=style&index=0&id=55c9d911&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Branding_vue_vue_type_style_index_0_id_55c9d911_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Branding_vue_vue_type_style_index_0_id_55c9d911_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/components/layout/Footer.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/layout/Footer.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Footer_vue_vue_type_template_id_e4df7ff6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Footer.vue?vue&type=template&id=e4df7ff6& */ "./resources/js/components/layout/Footer.vue?vue&type=template&id=e4df7ff6&");
/* harmony import */ var _Footer_vue_vue_type_style_index_0_id_e4df7ff6_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Footer.vue?vue&type=style&index=0&id=e4df7ff6&lang=css& */ "./resources/js/components/layout/Footer.vue?vue&type=style&index=0&id=e4df7ff6&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}
;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  script,
  _Footer_vue_vue_type_template_id_e4df7ff6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Footer_vue_vue_type_template_id_e4df7ff6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/Footer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/Navbar.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/layout/Navbar.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Navbar_vue_vue_type_template_id_2c4263fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=2c4263fa&scoped=true& */ "./resources/js/components/layout/Navbar.vue?vue&type=template&id=2c4263fa&scoped=true&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/components/layout/Navbar.vue?vue&type=script&lang=js&");
/* harmony import */ var _Navbar_vue_vue_type_style_index_0_id_2c4263fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css& */ "./resources/js/components/layout/Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_2c4263fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Navbar_vue_vue_type_template_id_2c4263fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "2c4263fa",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/layout/Navbar.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Branding.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/Branding.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Branding_vue_vue_type_template_id_55c9d911___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Branding.vue?vue&type=template&id=55c9d911& */ "./resources/js/components/pages/Branding.vue?vue&type=template&id=55c9d911&");
/* harmony import */ var _Branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Branding.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Branding.vue?vue&type=script&lang=js&");
/* harmony import */ var _Branding_vue_vue_type_style_index_0_id_55c9d911_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Branding.vue?vue&type=style&index=0&id=55c9d911&lang=css& */ "./resources/js/components/pages/Branding.vue?vue&type=style&index=0&id=55c9d911&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Branding_vue_vue_type_template_id_55c9d911___WEBPACK_IMPORTED_MODULE_0__.render,
  _Branding_vue_vue_type_template_id_55c9d911___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Branding.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/layout/Navbar.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/layout/Navbar.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Navbar.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Branding.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/Branding.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Branding.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Branding.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Branding_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/layout/Footer.vue?vue&type=template&id=e4df7ff6&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/layout/Footer.vue?vue&type=template&id=e4df7ff6& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_e4df7ff6___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_e4df7ff6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_template_id_e4df7ff6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=template&id=e4df7ff6& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Footer.vue?vue&type=template&id=e4df7ff6&");


/***/ }),

/***/ "./resources/js/components/layout/Navbar.vue?vue&type=template&id=2c4263fa&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/layout/Navbar.vue?vue&type=template&id=2c4263fa&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_2c4263fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_2c4263fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_2c4263fa_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navbar.vue?vue&type=template&id=2c4263fa&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Navbar.vue?vue&type=template&id=2c4263fa&scoped=true&");


/***/ }),

/***/ "./resources/js/components/pages/Branding.vue?vue&type=template&id=55c9d911&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/Branding.vue?vue&type=template&id=55c9d911& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Branding_vue_vue_type_template_id_55c9d911___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Branding_vue_vue_type_template_id_55c9d911___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Branding_vue_vue_type_template_id_55c9d911___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Branding.vue?vue&type=template&id=55c9d911& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Branding.vue?vue&type=template&id=55c9d911&");


/***/ }),

/***/ "./resources/js/components/layout/Footer.vue?vue&type=style&index=0&id=e4df7ff6&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/layout/Footer.vue?vue&type=style&index=0&id=e4df7ff6&lang=css& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_e4df7ff6_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Footer.vue?vue&type=style&index=0&id=e4df7ff6&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Footer.vue?vue&type=style&index=0&id=e4df7ff6&lang=css&");


/***/ }),

/***/ "./resources/js/components/layout/Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/layout/Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_2c4263fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/pages/Branding.vue?vue&type=style&index=0&id=55c9d911&lang=css&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/components/pages/Branding.vue?vue&type=style&index=0&id=55c9d911&lang=css& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Branding_vue_vue_type_style_index_0_id_55c9d911_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Branding.vue?vue&type=style&index=0&id=55c9d911&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Branding.vue?vue&type=style&index=0&id=55c9d911&lang=css&");


/***/ })

}]);