"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Partnerships_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Partnerships.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Partnerships.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      get_id: ''
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: "オンライン開発ハブ | システム開発はアイデンブリッド社 | IDENBRID INC.",
      meta: [{
        vmid: "description",
        name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
        content: "Online Development Hubとは世界のITサービスを構築する工場なハブとなる拠点を指しています。当社ではパキスタンに自社エンジニアを抱え日本を初め世界中の企業様と日々取引を行っています。このサービスの特徴はお客様ご自身でIT知識やエンジニアを抱える必要がなく、ITサービスの展開ができたり自社のサイトやアプリの運用が可能です。"
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;
    var swiper = new Swiper(".office_view_slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50
        }
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true
      }
    });
    this.$nextTick(function () {
      document.getElementById(_this.$route.params.string).scrollIntoView({
        behavior: 'smooth'
      });
    });
  },
  created: function created() {
    this.get_id = this.$route.params.string;
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Partnerships.vue?vue&type=template&id=7e8dd9f6&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Partnerships.vue?vue&type=template&id=7e8dd9f6&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("Navbar"), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("Footer")], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("main", [_c("div", {
    staticClass: "hero_Heading"
  }, [_c("div", {
    staticClass: "recruit-hero-sec mycontents-wide"
  }, [_c("h2", {
    staticClass: "recruit-hero-sec__title"
  }, [_vm._v("ONLINE DEVELOPEMENT HUB")]), _vm._v(" "), _c("p", {
    staticClass: "recruit-hero-sec__text"
  }, [_vm._v("こちらでは当社が進めるIT開発拠点Online Development Hubに関するご紹介です。")])])]), _vm._v(" "), _c("section", {
    staticClass: "mission mycontents-wide mt-4",
    attrs: {
      id: "overview"
    }
  }, [_c("h3", {
    staticClass: "subcontent-title content-title_mission"
  }, [_vm._v("OVERVIEW")]), _vm._v(" "), _c("p", {
    staticClass: "content-subtitle content-subtitle_mission"
  }, [_vm._v("競争だけでなく、「競合と協業」をテーマに成長を追求。")]), _vm._v(" "), _c("p", {
    staticClass: "content-text content-text_mission"
  }, [_vm._v("Online Development\n                Hubとは世界のITサービスを構築する工場なハブとなる拠点を指して"), _c("br"), _vm._v("います。当社ではパキスタンに自社エンジニアを抱え日本を初め世界中の企業様と日々取引"), _c("br"), _vm._v("を行っています。"), _c("br"), _vm._v("このサービスの特徴はお客様ご自身でIT知識やエンジニアを抱える必要がなく、ITサービス"), _c("br"), _vm._v("の展開ができたり自社のサイトやアプリの運用が可能です。そして正社員を抱える必要もな"), _c("br"), _vm._v("いので貴社のビジネスリスクの軽減になります。"), _c("br"), _vm._v("当社では上手く日本人エンジニアとハブ拠点の人材とで分業することで質の高いサービスを"), _c("br"), _vm._v("提供し続けています。\n            ")])]), _vm._v(" "), _c("section", {
    staticClass: "value mycontents-wide",
    attrs: {
      id: "bussiness_concept"
    }
  }, [_c("h3", {
    staticClass: "subcontent-title content-title_value"
  }, [_vm._v("BUSINESS CONCEPT")]), _vm._v(" "), _c("ul", {
    staticClass: "value__contets"
  }, [_c("li", {
    staticClass: "value__contets__list"
  }, [_c("div", {
    staticClass: "value__contets__list__head"
  }, [_c("p", {
    staticClass: "value__contets__list__head__title"
  }, [_vm._v("関係構築")]), _vm._v(" "), _c("img", {
    staticClass: "value__contets__list__head__img",
    attrs: {
      src: "/public/assets/img/icons/recruit-value-arrow.svg",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v("\n                    どの業界でもお客様とベンダーのリレーション構築は大変重要です。私たちがお受けする仕事は業界やお仕事を理解していないとできないこともありますので、まずはお客様を知るという基本をきちんと徹底させて頂き必要とされていることに最適なソルーション提供をできる関係構築に力を入れています。\n                ")]), _vm._v(" "), _c("li", {
    staticClass: "value__contets__list"
  }, [_c("div", {
    staticClass: "value__contets__list__head"
  }, [_c("p", {
    staticClass: "value__contets__list__head__title"
  }, [_vm._v("事業成長")]), _vm._v(" "), _c("img", {
    staticClass: "value__contets__list__head__img",
    attrs: {
      src: "/public/assets/img/icons/recruit-value-up.svg",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v("\n                    システムの開発は短期で開発して終わりではなく、お客様と長きに渡りご一緒する必要のある各事業のコアな部分に携わっていることが多くあります。そのため継続してご一緒するお客様のビジネスグロースの力になれるようアイデンブリッド社はITを通じた成長戦略への貢献を確認します。\n                ")]), _vm._v(" "), _c("li", {
    staticClass: "value__contets__list"
  }, [_c("div", {
    staticClass: "value__contets__list__head"
  }, [_c("p", {
    staticClass: "value__contets__list__head__title"
  }, [_vm._v("情報共有")]), _vm._v(" "), _c("img", {
    staticClass: "value__contets__list__head__img",
    attrs: {
      src: "/public/assets/img/icons/recruit-value-message.svg",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v("\n                    お客様に正しい判断をして頂くためには、それに必要なデータや話し合う環境が重要です。そのため当社ではお客様を大切な事業における戦略パートナーと認識し、意思決定するために必要なテーマを数値などの客観的データに基づいてきちんと情報共有して参ります。\n                ")])])]), _vm._v(" "), _c("div", {
    staticClass: "mycontents-wide",
    attrs: {
      id: "office_environment"
    }
  }, [_c("h3", {
    staticClass: "subcontent-title content-title_office"
  }, [_vm._v("OFFICE ENVIRONMENT")]), _vm._v(" "), _c("p", {
    staticClass: "content-subtitle content-subtitle_office"
  }, [_vm._v("働きやすい環境を常に追求しています。")]), _vm._v(" "), _c("p", {
    staticClass: "content-text content-text_office"
  }, [_vm._v("\n                リモートワークが進む現代で、課題に感じているメンタルケアや仲間同士のコミュニケーション課題"), _c("br"), _vm._v("を解決するため出社したくなるオフィス作りを行っています。")])]), _vm._v(" "), _c("section", {
    staticClass: "mycontents-wide office-slider"
  }, [_c("div", {
    staticClass: "swiper office_view_slider"
  }, [_c("div", {
    staticClass: "swiper-wrapper"
  }, [_c("div", {
    staticClass: "swiper-slide slide__list"
  }, [_c("img", {
    staticClass: "value__contets__list__head__img",
    attrs: {
      src: "/public/assets/img/office-img/Image-01.jpg",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "swiper-slide slide__list"
  }, [_c("img", {
    staticClass: "value__contets__list__head__img",
    attrs: {
      src: "/public/assets/img/office-img/Image-02.jpg",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "swiper-slide slide__list"
  }, [_c("img", {
    staticClass: "value__contets__list__head__img",
    attrs: {
      src: "/public/assets/img/office-img/Image-03.jpg",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "swiper-slide slide__list"
  }, [_c("img", {
    staticClass: "value__contets__list__head__img",
    attrs: {
      src: "/public/assets/img/office-img/Image-04.jpg",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "swiper-slide slide__list"
  }, [_c("img", {
    staticClass: "value__contets__list__head__img",
    attrs: {
      src: "/public/assets/img/office-img/Image-05.jpg",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "swiper-slide slide__list"
  }, [_c("img", {
    staticClass: "value__contets__list__head__img",
    attrs: {
      src: "/public/assets/img/office-img/Image-06.jpg",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "swiper-slide slide__list"
  }, [_c("img", {
    staticClass: "value__contets__list__head__img",
    attrs: {
      src: "/public/assets/img/office-img/Image-07.jpg",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "swiper-slide slide__list"
  }, [_c("img", {
    staticClass: "value__contets__list__head__img",
    attrs: {
      src: "/public/assets/img/office-img/Image-08.jpg",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "swiper-slide slide__list"
  }, [_c("img", {
    staticClass: "value__contets__list__head__img",
    attrs: {
      src: "/public/assets/img/office-img/Image-09.jpg",
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "swiper-slide slide__list"
  }, [_c("img", {
    staticClass: "value__contets__list__head__img",
    attrs: {
      src: "/public/assets/img/office-img/Image-10.jpg",
      alt: "",
      loading: "lazy"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "swiper-button-next"
  }), _vm._v(" "), _c("div", {
    staticClass: "swiper-button-prev"
  }), _vm._v(" "), _c("div", {
    staticClass: "swiper-pagination"
  })])]), _vm._v(" "), _c("section", {
    staticClass: "system-sec mycontents-wide",
    attrs: {
      id: "client_benifits"
    }
  }, [_c("h2", {
    staticClass: "system-sec__tiile"
  }, [_vm._v("CLIENT BENIFIT")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__text"
  }, [_vm._v("\n                私たちは日本国内や他国のオフショア拠点よりも人件費がよりリーズナブルな価格で世界のIT開発拠点となるHubを自社で構築しています。"), _c("br"), _vm._v("これを使って今後とも様々な企業とお仕事をするとともに、世界のIT開発を牽引するテックリードカンパニーになる足掛かりとしていきます。\n            ")]), _vm._v(" "), _c("ul", {
    staticClass: "system-sec__contents"
  }, [_c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "/public/assets/img/icons/where01.svg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("低価格高品質")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        当社では案件によっては新規人材をその場で確保することもできるほど、人材獲得に強みを持っており、かつ社内のエンジニア育成環境も整っています。また日本に在籍する上場企業出身技術集団がそこのサポートに入っており、安心してお任せ頂けます。。\n                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "/public/assets/img/icons/where02.svg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("顧客サービスの徹底")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        オフショア開発でもっと難題となるのは言語の壁です。当社では英語圏クライアントは直接開発拠点Hubのスタッフとのやりとりをしておりますが、日本の企業様相手では当社の日本人担当者しかフロントに立ちませんので顧客サービスは他社と徹底的に差別化を図っています。\n                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "/public/assets/img/icons/where03.svg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("IT人材拡大")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        当社ではお客様によって急に大きな人月工数を増やさざるを得ないほど大規模プロジェクトになってもその人材拡大に対応させて頂きます。まずはスモールスタートをさせ、小さく成功したら拡大したいというビジネスモデルへの理解はございます。お客様のニーズに合わせてリソースをマネジメントさせて頂きます。\n                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "/public/assets/img/icons/where04.svg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("最新技術探求")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        当社では日本において常に世界の最新技術に目を向けて仕事をしています。どうしても受託開発のみをしているとお客様の求められることのみをこなすことになりがちですが、当社ではきちんとITに強くないお客様にも必要な提案ができるよう日々最新技術やトレンドを会社としてアップデートしています。\n                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "/public/assets/img/icons/where05.svg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("契約体系")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        各お客様によってどのように契約をされたいか、また予算の上限など様々な条件があります。当社では受託開発型契約以外にラボ型契約をご用意しております。また予算上限が決まっているプロジェクトではその予算内で最大何ができるのかをしっかり提案させて頂きます\n                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "/public/assets/img/icons/where06.svg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("ビジネス理解")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        当社ではシステムの設計をITという観点のみで行うのではなく、このシステムが完成したらどのようにお客様が運用されるのか、日々オペレーションに落とされるのかなどビジネス理解を徹底することにより、より使い勝手の良いサービス構築を目指しています。\n                    ")])])])])]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Partnerships.vue?vue&type=style&index=0&id=7e8dd9f6&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Partnerships.vue?vue&type=style&index=0&id=7e8dd9f6&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.office-slider[data-v-7e8dd9f6] {\n    padding-top: 50px;\n    padding-bottom: 50px;\n}\n.slide__list img[data-v-7e8dd9f6] {\n    height: 240px;\n    border-radius: 10px;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n\n/*hero*/\n.recruit-hero-sec__title[data-v-7e8dd9f6] {\n    margin-top: 150px;\n    margin-bottom: 5px;\n    font-weight: bold;\n    font-size: 64px;\n    line-height: 96px;\n    letter-spacing: 0.05em;\n    color: var(--textcolor);\n    text-align: center;\n}\n.recruit-hero-sec__title br[data-v-7e8dd9f6] {\n    display: none;\n}\n.recruit-hero-sec__text[data-v-7e8dd9f6] {\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 36px;\n    letter-spacing: 0.05em;\n    color: var(--textcolor);\n}\n.recruit-hero-sec__title[data-v-7e8dd9f6],\n.recruit-hero-sec__text[data-v-7e8dd9f6] {\n    position: relative;\n    z-index: 4;\n    text-align: center;\n}\n@media (max-width: 767px) {\n.recruit-hero-sec[data-v-7e8dd9f6] {\n        height: 114px;\n        position: relative;\n        margin-bottom: 60px;\n}\n.recruit-hero-sec__title[data-v-7e8dd9f6] {\n        margin-top: 73px;\n        margin-left: 0px;\n        font-size: 28px;\n        line-height: 42px;\n        letter-spacing: 0.05em;\n        margin-bottom: 31px;\n}\n.recruit-hero-sec__title br[data-v-7e8dd9f6] {\n        display: block;\n}\n.recruit-hero-sec__text[data-v-7e8dd9f6] {\n        margin-left: -15px;\n        font-size: 15px;\n        line-height: 23px\n}\n}\n\n/*scroll*/\n.scroll_recruit[data-v-7e8dd9f6] {\n    margin-bottom: 123px;\n}\n@media (max-width: 767px) {\n.scroll_recruit[data-v-7e8dd9f6] {\n        display: none;\n}\n}\n\n/*mission*/\n.mission[data-v-7e8dd9f6] {\n    position: relative;\n    height: 468px;\n    margin-bottom: 50px;\n    flex-direction: column;\n}\n.content-title_mission[data-v-7e8dd9f6],\n.content-subtitle_mission[data-v-7e8dd9f6],\n.content-text_mission[data-v-7e8dd9f6] {\n    position: relative;\n    z-index: 4;\n}\n.content-title_mission[data-v-7e8dd9f6] {\n    margin-bottom: 10px;\n}\n.content-subtitle_mission[data-v-7e8dd9f6] {\n    margin-bottom: 10px;\n}\n.content-subtitle_mission br[data-v-7e8dd9f6] {\n    display: none;\n}\n.content-text_mission[data-v-7e8dd9f6] {\n    max-width: inherit;\n}\n.mission[data-v-7e8dd9f6]::before {\n    content: \"\";\n    position: absolute;\n    top: 68px;\n    display: inline-block;\n    width: calc(100vw - 80px - 160px + (100% - 100vw) / 2);\n    left: calc(80px + 160px);\n    height: 400px;\n    background: url(\"/public/assets/img/development.png\");\n    border-radius: 30px 0px 0px 30px;\n    z-index: 0;\n    background-size: cover;\n    background-position: center;\n    z-index: 3;\n}\n.mission[data-v-7e8dd9f6]::after {\n    display: none;\n}\n@media (max-width: 767px) {\n.mission[data-v-7e8dd9f6] {\n        margin-bottom: 60px;\n        height: inherit;\n}\n.content-title_mission[data-v-7e8dd9f6],\n    .content-subtitle_mission[data-v-7e8dd9f6],\n    .content-text_mission[data-v-7e8dd9f6] {\n        margin-bottom: 20px;\n}\n.content-subtitle_mission br[data-v-7e8dd9f6] {\n        display: block;\n}\n.mission[data-v-7e8dd9f6]::after {\n        content: \"\";\n        display: inline-block;\n        margin-right: -30px;\n        width: calc(100% + 30px);\n        height: 150px;\n        background: url(\"/public/assets/img/sample/recruit-mission.jpg\");\n        border-radius: 5px 0px 0px 5px;\n        background-size: cover;\n        background-position: center;\n}\n}\n\n/*value*/\n.value[data-v-7e8dd9f6] {\n    margin-bottom: 50px;\n}\n.content-title_value[data-v-7e8dd9f6] {\n    margin-bottom: 130px;\n}\n.value__contets[data-v-7e8dd9f6] {\n    display: flex;\n    justify-content: space-between;\n}\n.value__contets__list[data-v-7e8dd9f6] {\n    position: relative;\n    width: calc((100% - 20px * 2) / 3);\n    padding: 100px 20px 20px 20px;\n    background: #F6F6F6;\n    border-radius: 10px;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 22px;\n    color: var(--textcolor);\n}\n.value__contets__list__head[data-v-7e8dd9f6] {\n    position: absolute;\n    height: 150px;\n    width: 150px;\n    top: -70px;\n    left: calc((100% - 150px) / 2);\n    text-align: center;\n    border-radius: 50%;\n    background-color: var(--textcolor);\n}\n.value__contets__list__head__title[data-v-7e8dd9f6] {\n    margin-top: 38px;\n    margin-bottom: 3px;\n    font-weight: bold;\n    font-size: 24px;\n    line-height: 36px;\n    text-align: center;\n    letter-spacing: 0.05em;\n    color: #FFFFFF;\n}\n@media (max-width: 767px) {\n.value[data-v-7e8dd9f6] {\n        margin-bottom: 60px;\n}\n.content-title_value[data-v-7e8dd9f6] {\n        margin-bottom: 80px;\n}\n.value__contets[data-v-7e8dd9f6] {\n        display: block;\n}\n.value__contets__list[data-v-7e8dd9f6] {\n        width: 100%;\n        margin-bottom: 80px;\n}\n.value__contets__list__head[data-v-7e8dd9f6] {\n        width: 100px;\n        height: 100px;\n        top: -50px;\n        left: calc((100% - 100px) / 2);\n        text-align: center;\n        border-radius: 50%;\n}\n.value__contets__list__head__title[data-v-7e8dd9f6] {\n        margin-top: 21px;\n        margin-bottom: 10px;\n        font-size: 15px;\n        line-height: 22px;\n}\n.value__contets__list__head__img[data-v-7e8dd9f6] {\n        height: 28px;\n}\n.value__contets__list[data-v-7e8dd9f6] {\n        padding: 70px 15px 20px 15px;\n        font-size: 13px;\n        line-height: 20px;\n}\n}\n\n/*office*/\n.office[data-v-7e8dd9f6] {\n    position: relative;\n    margin-bottom: 80px;\n}\n.office .mycontents-wide[data-v-7e8dd9f6] {\n    position: relative;\n}\n.content-title_office[data-v-7e8dd9f6],\n.content-subtitle_office[data-v-7e8dd9f6],\n.content-text_office[data-v-7e8dd9f6] {\n    position: relative;\n    z-index: 4;\n}\n.content-title_office[data-v-7e8dd9f6] {\n    margin-bottom: 61px;\n}\n.content-subtitle_office[data-v-7e8dd9f6] {\n    margin-bottom: 10px;\n}\n.content-text_office[data-v-7e8dd9f6] {\n    max-width: inherit;\n}\n.office .thumbnail__list[data-v-7e8dd9f6] {\n    content: \"\";\n    position: absolute;\n    top: 68px;\n    display: inline-block;\n    width: calc(100vw - 80px - 160px + (100% - 100vw) / 2);\n    left: calc(80px + 160px);\n    height: 400px;\n    background: url(\"/assets/img/sample/recruit-office.png\");\n    border-radius: 30px 0px 0px 30px;\n    z-index: 0;\n    background-size: cover;\n    background-position: center;\n    z-index: 3;\n}\n.office .thumbnail__list img[data-v-7e8dd9f6] {\n    height: 100%;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n    border-radius: 30px 0px 0px 30px;\n}\n.office__gallery[data-v-7e8dd9f6] {\n    position: relative;\n}\n.office__gallery__left[data-v-7e8dd9f6],\n.office__gallery__right[data-v-7e8dd9f6] {\n    position: absolute;\n    top: -50px;\n    height: 30px;\n}\n.office__gallery__right[data-v-7e8dd9f6] {\n    right: 0;\n    transform: rotate(180deg);\n}\n.office__gallery__contents-frame[data-v-7e8dd9f6] {\n    position: relative;\n    overflow: hidden;\n}\n.office__gallery__contents-frame[data-v-7e8dd9f6]::before {\n    content: \"\";\n    display: block;\n    width: 100%;\n    height: 210px;\n}\n.office__gallery__contents-frame[data-v-7e8dd9f6] {\n    position: relative;\n    width: 100%;\n}\n.office__gallery__contents__list[data-v-7e8dd9f6] {\n    height: 180px;\n    border-radius: 10px;\n    position: absolute;\n    top: 0;\n}\n.office__gallery__contents__list img[data-v-7e8dd9f6] {\n    height: 100%;\n    width: 100%;\n    border-radius: 10px;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.office__gallery__contents-frame_sp[data-v-7e8dd9f6] {\n    display: none;\n}\n.office__gallery__contents-frame_sp[data-v-7e8dd9f6] {\n    position: relative;\n    height: 130px;\n    margin-bottom: 94px;\n    width: 100%;\n    overflow-x: scroll;\n}\n.office__gallery__contents-frame_sp .office__gallery__contents[data-v-7e8dd9f6] {\n    display: flex;\n    width: calc(260px * 8 + 30px) !important;\n}\n.office__gallery__contents-frame_sp .office__gallery__contents__list[data-v-7e8dd9f6] {\n    margin-left: 30px;\n    width: 230px;\n    height: 130px;\n    position: relative;\n}\n.office__gallery__contents-frame_sp .office__gallery__contents .office__gallery__contents__list[data-v-7e8dd9f6] {\n    margin-right: 30px;\n}\n\n/*slick setting*/\n.slick-prev[data-v-7e8dd9f6]:before,\n.slick-next[data-v-7e8dd9f6]:before {\n    color: #000;\n}\n.slick .slick__list[data-v-7e8dd9f6] {\n    margin-left: 65px;\n}\n.slick .slick__list img[data-v-7e8dd9f6] {\n    height: 180px;\n    border-radius: 10px;\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover;\n}\n.slick-slider[data-v-7e8dd9f6] {\n    height: 180px;\n}\n\n/*btn*/\n.slick-prev[data-v-7e8dd9f6] {\n    left: auto;\n    top: -35px;\n}\n.slick-next[data-v-7e8dd9f6] {\n    right: auto;\n    left: auto;\n    top: -50px;\n}\n.slick-arrow[data-v-7e8dd9f6] {\n    width: 30px;\n    height: 30px;\n}\n.slick-arrow[data-v-7e8dd9f6]::before {\n    display: none;\n}\n.thumbnail-slick[data-v-7e8dd9f6] {\n    position: absolute;\n    top: 68px;\n    display: inline-block;\n    width: calc(100vw - 80px - 160px + (100% - 100vw) / 2);\n    left: calc(80px + 160px);\n    height: 400px;\n    border-radius: 30px 0 0 30px;\n    overflow: hidden;\n}\n.thumbnail-slick__list[data-v-7e8dd9f6] {\n\n    width: 100%;\n    height: 100%;\n}\n.thumbnail-slick__list img[data-v-7e8dd9f6] {\n    -o-object-fit: cover;\n       object-fit: cover;\n    width: 100%;\n    height: 100%;\n}\n@media (max-width: 767px) {\n.thumbnail-slick[data-v-7e8dd9f6] {\n        margin-bottom: 30px;\n        position: relative;\n        height: 150px;\n        top: auto;\n        left: auto;\n        border-radius: 5px 0 0 5px;\n        width: calc(100% + 30px);\n}\n.office .thumbnail__list[data-v-7e8dd9f6] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        height: 100%;\n        width: 100%;\n}\n.content-title_office[data-v-7e8dd9f6],\n    .content-subtitle_office[data-v-7e8dd9f6],\n    .content-text_office[data-v-7e8dd9f6] {\n        margin-bottom: 20px;\n}\n.content-text_office[data-v-7e8dd9f6] {\n        margin-bottom: 20px;\n}\n.office[data-v-7e8dd9f6]::before {\n        display: none;\n}\n.office__gallery__contents-frame_sp[data-v-7e8dd9f6] {\n        display: block;\n}\n.office__gallery__contents-frame[data-v-7e8dd9f6] {\n        display: none;\n}\n.office__gallery[data-v-7e8dd9f6] {\n        display: none;\n}\n\n    /*slick*/\n.slick[data-v-7e8dd9f6] {\n        display: none;\n}\n}\n\n/*weafe*/\n\n/*entry*/\n.entry__btns[data-v-7e8dd9f6] {\n    width: 720px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    margin: 0 auto 60px auto;\n}\n.entry__btn[data-v-7e8dd9f6] {\n    margin-bottom: 20px;\n    position: relative;\n    width: 300px;\n    height: 60px;\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 60px;\n    text-align: center;\n    color: #FFFFFF;\n    background-color: var(--textcolor);\n    border-radius: 5px;\n    transition: 1s;\n    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);\n}\n.entry__btns .entry__btn[data-v-7e8dd9f6]:last-child {\n    margin-bottom: 0;\n}\n.entry__btn button[data-v-7e8dd9f6] {\n    width: 100%;\n    z-index: 5;\n    position: relative;\n}\n.entry__btn[data-v-7e8dd9f6]::after {\n    position: absolute;\n    display: inline-block;\n    content: \"\";\n    top: 20px;\n    right: 16px;\n    height: 21px;\n    width: 21px;\n    background: url(\"/assets/img/icon/recruit-entry-btn.svg\");\n    background-size: contain;\n    transition: 1s;\n    z-index: 4;\n}\n.entry__btn[data-v-7e8dd9f6]::before {\n    opacity: 0;\n    position: absolute;\n    display: inline-block;\n    content: \"\";\n    top: 20px;\n    right: 16px;\n    height: 21px;\n    width: 21px;\n    background: url(\"/assets/img/icon/recruit-entry-btn-white.svg\");\n    background-size: contain;\n    transition: 1s;\n}\n.entry__btn_selected[data-v-7e8dd9f6] {\n    background-color: #FFFFFF;\n    color: var(--textcolor);\n}\n.entry__btn_selected[data-v-7e8dd9f6]::after {\n    opacity: 0;\n}\n.entry__btn_selected[data-v-7e8dd9f6]::before {\n    opacity: 1;\n}\n.entry__texts[data-v-7e8dd9f6] {\n    margin-bottom: 80px;\n}\n.entry__text[data-v-7e8dd9f6] {\n    padding: 60px 100px;\n    font-weight: 500;\n    font-size: 18px;\n    line-height: 27px;\n    background-color: #FFFFFF;\n    box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);\n    border-radius: 20px;\n    color: var(--textcolor);\n}\n.entry__text span[data-v-7e8dd9f6] {\n    font-weight: bold;\n}\n.viewmore-btn__entry[data-v-7e8dd9f6] {\n    width: 700px;\n    margin-bottom: 80px;\n}\n@media (max-width: 767px) {\n.entry__btns[data-v-7e8dd9f6] {\n        display: block;\n        text-align: center;\n        width: 100%;\n        margin-bottom: 50px;\n}\n.entry__btn[data-v-7e8dd9f6] {\n        width: 240px;\n        height: 56px;\n        line-height: 56px;\n        font-size: 14px;\n        line-height: 56px;\n        margin: 0 auto 20px auto;\n}\n.entry__btn[data-v-7e8dd9f6]::after {\n        top: 17px;\n}\n.entry__text[data-v-7e8dd9f6] {\n        padding: 20px 12px;\n        font-size: 13px;\n        line-height: 19px;\n}\n.entry__texts[data-v-7e8dd9f6] {\n        margin-bottom: 50px;\n}\n.viewmore-btn__entry[data-v-7e8dd9f6] {\n        width: 240px;\n        height: 56px;\n        line-height: 56px;\n        margin-bottom: 60px;\n}\n}\n@media screen and (max-width: 768px) and (min-width: 550px) {\n.mission[data-v-7e8dd9f6]::before {\n        content: \"\";\n        position: absolute;\n        top: 315px;\n        display: inline-block;\n        width: calc(100% - 80px - 159px + (100%) / 2);\n        left: calc(-129px + 160px);\n        height: 237px;\n        background: url(\"/public/assets/img/development.png\");\n        border-radius: 30px 0px 0px 30px;\n        background-position: center;\n        z-index: 3;\n        background-size: cover;\n        background-repeat: no-repeat;\n}\n}\n@media screen and (max-width: 550px) and (min-width: 320px) {\n.mission[data-v-7e8dd9f6]::before {\n        background: url(/public/assets/img/development.png);\n        background-position: 50%;\n        background-repeat: no-repeat;\n        background-size: cover;\n        border-radius: 30px 0 0 30px;\n        content: \"\";\n        display: inline-block;\n        height: 237px;\n        left: 27px;\n        position: absolute;\n        top: 442px;\n        width: calc(150% - 150px);\n        z-index: 3;\n}\n}\n\n/* Slider */\n.slick-slider[data-v-7e8dd9f6] {\n    position: relative;\n    display: block;\n    box-sizing: border-box;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    user-select: none;\n    -webkit-touch-callout: none;\n    -khtml-user-select: none;\n    touch-action: pan-y;\n    -webkit-tap-highlight-color: transparent;\n}\n.slick-list[data-v-7e8dd9f6] {\n    position: relative;\n\n    display: block;\n    overflow: hidden;\n\n    margin: 0;\n    padding: 0;\n}\n.slick-list[data-v-7e8dd9f6]:focus {\n    outline: none;\n}\n.slick-list.dragging[data-v-7e8dd9f6] {\n    cursor: pointer;\n    cursor: hand;\n}\n.slick-slider .slick-track[data-v-7e8dd9f6],\n.slick-slider .slick-list[data-v-7e8dd9f6] {\n    transform: translate3d(0, 0, 0);\n}\n.slick-track[data-v-7e8dd9f6] {\n    position: relative;\n    top: 0;\n    left: 0;\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.slick-track[data-v-7e8dd9f6]:before,\n.slick-track[data-v-7e8dd9f6]:after {\n    display: table;\n\n    content: '';\n}\n.slick-track[data-v-7e8dd9f6]:after {\n    clear: both;\n}\n.slick-loading .slick-track[data-v-7e8dd9f6] {\n    visibility: hidden;\n}\n.slick-slide[data-v-7e8dd9f6] {\n    display: none;\n    float: left;\n\n    height: 100%;\n    min-height: 1px;\n}\n[dir='rtl'] .slick-slide[data-v-7e8dd9f6] {\n    float: right;\n}\n.slick-slide img[data-v-7e8dd9f6] {\n    display: block;\n}\n.slick-slide.slick-loading img[data-v-7e8dd9f6] {\n    display: none;\n}\n.slick-slide.dragging img[data-v-7e8dd9f6] {\n    pointer-events: none;\n}\n.slick-initialized .slick-slide[data-v-7e8dd9f6] {\n    display: block;\n}\n.slick-loading .slick-slide[data-v-7e8dd9f6] {\n    visibility: hidden;\n}\n.slick-vertical .slick-slide[data-v-7e8dd9f6] {\n    display: block;\n\n    height: auto;\n\n    border: 1px solid transparent;\n}\n.slick-arrow.slick-hidden[data-v-7e8dd9f6] {\n    display: none;\n}\n.office-slider .swiper-button-next[data-v-7e8dd9f6] {\n    align-items: center;\n    background-color: #333;\n    border-radius: 50px;\n    color: #fff;\n    display: flex;\n    height: 35px;\n    justify-content: center;\n    width: 35px;\n}\n.office-slider .swiper-button-prev[data-v-7e8dd9f6] {\n    align-items: center;\n    background-color: #333;\n    border-radius: 50px;\n    color: #fff;\n    display: flex;\n    height: 35px;\n    justify-content: center;\n    width: 35px;\n}\n.office-slider .swiper-button-next[data-v-7e8dd9f6]:after {\n    font-size: 14px;\n}\n.office-slider .swiper-button-prev[data-v-7e8dd9f6]:after {\n    font-size: 14px;\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Partnerships.vue?vue&type=style&index=0&id=7e8dd9f6&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Partnerships.vue?vue&type=style&index=0&id=7e8dd9f6&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partnerships_vue_vue_type_style_index_0_id_7e8dd9f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Partnerships.vue?vue&type=style&index=0&id=7e8dd9f6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Partnerships.vue?vue&type=style&index=0&id=7e8dd9f6&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partnerships_vue_vue_type_style_index_0_id_7e8dd9f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partnerships_vue_vue_type_style_index_0_id_7e8dd9f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/pages/Partnerships.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/pages/Partnerships.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Partnerships_vue_vue_type_template_id_7e8dd9f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Partnerships.vue?vue&type=template&id=7e8dd9f6&scoped=true& */ "./resources/js/components/pages/Partnerships.vue?vue&type=template&id=7e8dd9f6&scoped=true&");
/* harmony import */ var _Partnerships_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Partnerships.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Partnerships.vue?vue&type=script&lang=js&");
/* harmony import */ var _Partnerships_vue_vue_type_style_index_0_id_7e8dd9f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Partnerships.vue?vue&type=style&index=0&id=7e8dd9f6&scoped=true&lang=css& */ "./resources/js/components/pages/Partnerships.vue?vue&type=style&index=0&id=7e8dd9f6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Partnerships_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Partnerships_vue_vue_type_template_id_7e8dd9f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Partnerships_vue_vue_type_template_id_7e8dd9f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7e8dd9f6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Partnerships.vue"
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

/***/ "./resources/js/components/pages/Partnerships.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/pages/Partnerships.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Partnerships_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Partnerships.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Partnerships.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Partnerships_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/pages/Partnerships.vue?vue&type=template&id=7e8dd9f6&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/components/pages/Partnerships.vue?vue&type=template&id=7e8dd9f6&scoped=true& ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partnerships_vue_vue_type_template_id_7e8dd9f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partnerships_vue_vue_type_template_id_7e8dd9f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partnerships_vue_vue_type_template_id_7e8dd9f6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Partnerships.vue?vue&type=template&id=7e8dd9f6&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Partnerships.vue?vue&type=template&id=7e8dd9f6&scoped=true&");


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

/***/ "./resources/js/components/pages/Partnerships.vue?vue&type=style&index=0&id=7e8dd9f6&scoped=true&lang=css&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/pages/Partnerships.vue?vue&type=style&index=0&id=7e8dd9f6&scoped=true&lang=css& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Partnerships_vue_vue_type_style_index_0_id_7e8dd9f6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Partnerships.vue?vue&type=style&index=0&id=7e8dd9f6&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Partnerships.vue?vue&type=style&index=0&id=7e8dd9f6&scoped=true&lang=css&");


/***/ })

}]);