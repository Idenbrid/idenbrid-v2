"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_About_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
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
  mounted: function mounted() {
    var _this = this;
    this.$nextTick(function () {
      document.getElementById(_this.$route.params.string).scrollIntoView({
        behavior: 'smooth'
      });
    });
  },
  created: function created() {
    this.get_id = this.$route.params.string;
  },
  metaInfo: function metaInfo() {
    return {
      title: "企業情報 | システム開発はアイデンブリッド社 | IDENBRID INC.",
      meta: [{
        vmid: "description",
        name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
        content: "IDENBRID/アイデンブリッドは日本及びパキスタンにてIT受託開発を行なっているグローバル企業です。ウェブシステムやiOS・Androidのモバイルアプリを初め、ワンストップにてシステム設計、要件定義、UIUXデザイン、ウェブ開発、アプリ開発、クラウドまで一社完結にて対応しています。オフショア開発のみでなく、日本国内でもIT開発を行なっており、スタートアップから東証プライム上場企業まで幅広いクライアントの開発を支えています。"
      }]
    };
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=template&id=22a27132&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=template&id=22a27132& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("h2", {
    staticClass: "hero"
  }, [_vm._v("ABOUT / 会社情報")]), _vm._v(" "), _c("p", {
    staticClass: "about-subcontents__text"
  }, [_vm._v("こちらはIDENBRID社の会社に関してをご覧頂けるページになります。")])]), _vm._v(" "), _c("section", {
    staticClass: "mission mycontents-wide",
    attrs: {
      id: "mission"
    }
  }, [_c("h3", {
    staticClass: "content-title content-title_mission"
  }, [_vm._v("MISSION")]), _vm._v(" "), _c("p", {
    staticClass: "content-subtitle content-subtitle_mission"
  }, [_vm._v("テクノロジーで未来をかっこ良くアップデート")]), _vm._v(" "), _c("p", {
    staticClass: "content-text content-text_mission"
  }, [_vm._v("\n                当社のサービスを使ったお客様が喜んでくれたり、購入してくださったユーザーの悩みが解決したりなど私たちは持っているテクノロジーや技術を用いて未来を刷新していきます。")])]), _vm._v(" "), _c("section", {
    staticClass: "container pb-5",
    attrs: {
      id: "board-message"
    }
  }, [_c("h3", {
    staticClass: "subcontent-title subcontent-title_company"
  }, [_vm._v("CEO MESSAGE / 代表メッセージ")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-md-6"
  }, [_c("p", {
    staticClass: "missioncontent-text"
  }, [_vm._v("\n                        新型コロナウイルスが世界中で猛威を振るう中、困難な状況におられる皆様に心よりお見舞い申し上げます。また治療などに一所懸命に取り組まれている医療従事者を始めとする皆様に心より御礼申し上げます。\n                    ")]), _c("br"), _vm._v(" "), _c("p", {
    staticClass: "missioncontent-text"
  }, [_vm._v("\n                        世界中で経済的な困難な状況が続く中、当社は「テクノロジーで未来をかっこ良くアップデート」する会社をミッションに掲げ、2030年までにこの競争激しい南アジア：パキスタンのIT領域におけるNo.1の企業になることを目指しています。\n                    ")]), _c("br"), _vm._v(" "), _c("p", {
    staticClass: "missioncontent-text"
  }, [_vm._v("中長期的な当社のビジネス計画ドキュメント「Why\n                        IDENBRID:Vision計画書」において当社の強みである日本そして英語圏のクライアントのIT開発受託案件の事業基盤の強化を進め、当分野の成長のために集中的に人的資本の投資を実行しています。またその経済的基盤及び経験を活かし、自社SaaS事業の展開を加速度的に進めていきます。\n                    ")]), _c("br"), _vm._v(" "), _c("p", {
    staticClass: "missioncontent-text"
  }, [_vm._v("\n                        日本市場・グローバル市場・パキスタン国内市場、これらの各マーケットへのアクセスができる稀有な会社としてアドバンテージを最大限活かしたビジネス展開を通じ、そしてITを活用して世界中のイノベーションに積極的に取り組んでいきます。\n                    ")]), _c("br"), _vm._v(" "), _c("p", {
    staticClass: "missioncontent-text"
  }, [_vm._v("\n                        そして当社では特に自社SaaS事業を通じて「人々が正しくデータと関わり、情報格差が少ない」サステナブルな社会実現の舵取りをできるテックリーダーとなれるように社会へ会社として貢献して参ります。\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6"
  }, [_c("img", {
    attrs: {
      src: "/public/assets/img/ceo.jpg",
      width: "100%"
    }
  })])])]), _vm._v(" "), _c("section", {
    staticClass: "member mycontents-wide",
    attrs: {
      id: "member"
    }
  }, [_c("h3", {
    staticClass: "subcontent-title"
  }, [_vm._v("MEMBER")]), _vm._v(" "), _c("ul", {
    staticClass: "member__contents"
  }, [_c("li", {
    staticClass: "member__list"
  }, [_c("div", {
    staticClass: "member__list__hide"
  }, [_c("p", {
    staticClass: "member__list__hide__titile"
  }, [_vm._v("President / CEO")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__hide__text"
  }, [_vm._v("\n                            東京都町田市出身。青山学院大学法学部卒業。菓子製造販売会社を起業し、企業経営戦略、販売・ロジスティック、マーケティング事業を経てIDENBRID社を創業。社内では自社事業プロデュース及び日本を含む海外企業営業統括、エンジニアの現場管理を担当\n                        ")])]), _vm._v(" "), _c("img", {
    staticClass: "member__list__thumbnail",
    attrs: {
      src: "/public/assets/img/Team/Souga Nakamura.png",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "member__list__subtitle mt-4"
  }, [_vm._v("Souga Nakamura")]), _vm._v(" "), _c("h4", {
    staticClass: "member__list__title"
  }, [_vm._v("中村奏画")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__supplement"
  }, [_vm._v("President / CEO")])]), _vm._v(" "), _c("li", {
    staticClass: "member__list"
  }, [_c("div", {
    staticClass: "member__list__hide"
  }, [_c("p", {
    staticClass: "member__list__hide__titile"
  }, [_vm._v("Chief Digital Officer / CTO")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__hide__text"
  }, [_vm._v("\n                            静岡県沼津市出身。東京都市大学卒。マッチング事業サービス売却後、日立製作所でエンタープライズシステムの構築に携わり、ソフトバンクにてデータを用いた事業企画/戦略/エンジニアリングを経験。その後、IDENBRID社を共同創業し、技術の最高責任者を務める。。\n                        ")])]), _vm._v(" "), _c("img", {
    staticClass: "member__list__thumbnail",
    attrs: {
      src: "/public/assets/img/Team/ASKA.jpg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "member__list__subtitle"
  }, [_vm._v("Aska Ikeda")]), _vm._v(" "), _c("h4", {
    staticClass: "member__list__title"
  }, [_vm._v("池田飛鳥")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__supplement"
  }, [_vm._v("Chief Digital Officer / CTO")])]), _vm._v(" "), _c("li", {
    staticClass: "member__list member__list_last"
  }, [_c("div", {
    staticClass: "member__list__hide"
  }, [_c("p", {
    staticClass: "member__list__hide__titile"
  }, [_vm._v("Senior Engineer")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__hide__text"
  }, [_vm._v("\n                            愛知県名古屋市出身。情報系の大学を卒業後、SIerを渡り歩きながら経験を積む。WEBシステム開発を中心に、大規模ECサイト、官庁系システム、基礎研究開発など大小さまざまなプロジェクトにリーダおよびテックリードエンジニアとして参画。その後、ソフトバンク株式会社にてDataLake基盤のクラウドアーキテクト責任者として従事。当社ではフルスタックシニアエンジニアとして活躍。\n                        ")])]), _vm._v(" "), _c("img", {
    staticClass: "member__list__thumbnail",
    attrs: {
      src: "/public/assets/img/Team/Jpnes-2.png",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "member__list__subtitle"
  }, [_vm._v("Ken Suzuki")]), _vm._v(" "), _c("h4", {
    staticClass: "member__list__title"
  }, [_vm._v("鈴木健二朗")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__supplement"
  }, [_vm._v("Senior Engineer")])])]), _c("br"), _vm._v(" "), _c("ul", {
    staticClass: "member__contents"
  }, [_c("li", {
    staticClass: "member__list member__list"
  }, [_c("div", {
    staticClass: "member__list__hide"
  }, [_c("p", {
    staticClass: "member__list__hide__titile"
  }, [_vm._v("Executive Business Dev")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__hide__text"
  }, [_vm._v("\n                            茨城県取手市出身。インターネットがあれば大学は要らないと医学部進学を蹴り、某大手通信企業にて法人営業全国トップの成績を納め、移動体通信会社を創業。ビジネスモデル図解の研究・社会貢献活動の推進・デザイン経営及びスクラム開発領域などを担当するエクゼクティブITビジネスディベロッパーとして活躍。\n                        ")])]), _vm._v(" "), _c("img", {
    staticClass: "member__list__thumbnail",
    attrs: {
      src: "/public/assets/img/Team/Untitled-1.jpg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "member__list__subtitle"
  }, [_vm._v("Yuko Ebihara")]), _vm._v(" "), _c("h4", {
    staticClass: "member__list__title"
  }, [_vm._v("蛯原侑子")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__supplement"
  }, [_vm._v("Executive Business Dev")])]), _vm._v(" "), _c("li", {
    staticClass: "member__list member__list_last"
  }, [_c("div", {
    staticClass: "member__list__hide"
  }, [_c("p", {
    staticClass: "member__list__hide__titile"
  }, [_vm._v("Project Manager")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__hide__text"
  }, [_vm._v("\n                            岡山県高梁市出身。広島大学院情報工学専攻を修了後ソフトバンク株式会社に就職。社内のリアルタイムデータ収集/参照システムのPM/データエンジニアとして従事。要件定義・設計・開発・保守の一連の流れを主導。当社ではPMとして活躍。\n                        ")])]), _vm._v(" "), _c("img", {
    staticClass: "member__list__thumbnail",
    attrs: {
      src: "/public/assets/img/Team/japnese.png",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "member__list__subtitle"
  }, [_vm._v("Takahiro Nishimura")]), _vm._v(" "), _c("h4", {
    staticClass: "member__list__title"
  }, [_vm._v("西村 崇宏")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__supplement"
  }, [_vm._v("Project Manager")])]), _vm._v(" "), _c("li", {
    staticClass: "member__list member__list"
  }, [_c("div", {
    staticClass: "member__list__hide"
  }, [_c("p", {
    staticClass: "member__list__hide__titile"
  }, [_vm._v("Office General Manager")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__hide__text"
  }, [_vm._v("\n                            パンジャブ州ラホール出身。Garrison大学コンピューターサイエンス学部卒業。Python及びPHPを用いたバックエンドのシステム開発を経て、当社に入社。現在は工程管理マネジメントや本社人材管理そしてビジネスグロース責任者を務める。\n                        ")])]), _vm._v(" "), _c("img", {
    staticClass: "member__list__thumbnail",
    attrs: {
      src: "/public/assets/img/Team/Mujtaba.png",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "member__list__subtitle"
  }, [_vm._v("Mujtaba Tariq")]), _vm._v(" "), _c("h4", {
    staticClass: "member__list__title"
  }, [_vm._v("ムチュタバ タリック")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__supplement"
  }, [_vm._v("Project Manager")])])]), _vm._v(" "), _c("ul", {
    staticClass: "member__contents mt-4"
  }, [_c("li", {
    staticClass: "member__list member__list_last"
  }, [_c("div", {
    staticClass: "member__list__hide"
  }, [_c("p", {
    staticClass: "member__list__hide__titile"
  }, [_vm._v("Vice Manager")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__hide__text"
  }, [_vm._v("\n                            パンジャブ州ラホール出身。スーペリア大学のコンピュータサイエンス学部を卒業。前職ではプログラミング教室を展開する大手Vvork Cloud\n                            Technologyにてフルスタックエンジニアとしてインストラクターとして勤務。当社ではフロントエンドエンジニアのリードとして、そして技術部門の責任者としてオペレーショナルマネージャーとして活躍。\n                        ")])]), _vm._v(" "), _c("img", {
    staticClass: "member__list__thumbnail",
    attrs: {
      src: "/public/assets/img/Team/Ahamed.jpg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "member__list__subtitle"
  }, [_vm._v("Muhammad Ahmad")]), _vm._v(" "), _c("h4", {
    staticClass: "member__list__title"
  }, [_vm._v("ムハンマド アハマッド")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__supplement"
  }, [_vm._v("Vice Manager")])]), _vm._v(" "), _c("li", {
    staticClass: "member__list member__list"
  }, [_c("div", {
    staticClass: "member__list__hide"
  }, [_c("p", {
    staticClass: "member__list__hide__titile"
  }, [_vm._v("HR Executive")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__hide__text"
  }, [_vm._v("\n                            パンジャブ州ラホール出身。リファインターナショナル大学のプロジェクト管理の修士過程を卒業。前職ではTracking\n                            World社にてHR部門の管理者としてチームをまとめあげていました。2022年当社入社後は主にIT人材採用のプロフェッショナルとして活躍しています。\n                        ")])]), _vm._v(" "), _c("img", {
    staticClass: "member__list__thumbnail",
    attrs: {
      src: "/public/assets/img/Team/Syeda-Rija-Hasnain.jpg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "member__list__subtitle"
  }, [_vm._v("Syeda Rijah Husnain")]), _vm._v(" "), _c("h4", {
    staticClass: "member__list__title"
  }, [_vm._v("セイダ リジャ ハスネン")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__supplement"
  }, [_vm._v("HR Executive")])]), _vm._v(" "), _c("li", {
    staticClass: "member__list member__list"
  }, [_c("div", {
    staticClass: "member__list__hide"
  }, [_c("p", {
    staticClass: "member__list__hide__titile"
  }, [_vm._v("Executive Business Dev")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__hide__text"
  }, [_vm._v("\n                            パンジャブ州ハルーンアバード出身。パンジャブ大学の植物学の修士課程を卒業。前職では英語及び植物学の助教授として働き、当社のIdenSpireにSNS管理及びビジネスオペレーターとして入社。現在は主に英語圏企業を相手にビジネスエグゼクティブとして活躍。\n                        ")])]), _vm._v(" "), _c("img", {
    staticClass: "member__list__thumbnail",
    attrs: {
      src: "/public/assets/img/Team/bushra.jpg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "member__list__subtitle"
  }, [_vm._v("Bushra Riaz")]), _vm._v(" "), _c("h4", {
    staticClass: "member__list__title"
  }, [_vm._v("ブシュラ リアーズ")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__supplement"
  }, [_vm._v("Executive Business Dev")])])]), _vm._v(" "), _c("ul", {
    staticClass: "member__contents mt-4"
  }, [_c("li", {
    staticClass: "member__list member__list"
  }, [_c("div", {
    staticClass: "member__list__hide"
  }, [_c("p", {
    staticClass: "member__list__hide__titile"
  }, [_vm._v("Wordpress/Frontend Lead")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__hide__text"
  }, [_vm._v("パンジャブ州ラホールに生まれる。 彼はPMAS有道農業大学のコンピュータサイエンス学部を卒業しました。\n                            彼は以前、NOVAPEXでWordPressおよびフロントエンドエンジニアとして働いていました。\n                            その後、彼はCorePHPのフロントエンドエンジニアおよびフルスタックエンジニアとして私たちに加わりました。\n                            彼は現在、プラグイン開発とVueJS開発プロジェクトを担当しています。")])]), _vm._v(" "), _c("img", {
    staticClass: "member__list__thumbnail",
    attrs: {
      src: "/public/assets/img/Team/kashif.jpg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "member__list__subtitle"
  }, [_vm._v("Kashif Zia")]), _vm._v(" "), _c("h4", {
    staticClass: "member__list__title"
  }, [_vm._v("カシフ ジア")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__supplement"
  }, [_vm._v("Wordpress/Frontend Lead")])]), _vm._v(" "), _c("li", {
    staticClass: "member__list member__list"
  }, [_c("div", {
    staticClass: "member__list__hide"
  }, [_c("p", {
    staticClass: "member__list__hide__titile"
  }, [_vm._v("Backend Lead")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__hide__text"
  }, [_vm._v("ラホール、パンジャブから。 ヴァーチャル大学コンピュータサイエンス学部卒業。\n                            IDENBRIDINC。に参加。Laravel+Vuejs開発者としてクライアントおよび社内プロジェクトに取り組んでいます。\n                            また、開発スキルを通じて海外のクライアントに付加価値を提供します。")])]), _vm._v(" "), _c("img", {
    staticClass: "member__list__thumbnail",
    attrs: {
      src: "/public/assets/img/Team/hamza.jpg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "member__list__subtitle"
  }, [_vm._v("Hamza Malik")]), _vm._v(" "), _c("h4", {
    staticClass: "member__list__title"
  }, [_vm._v("ハムザ　マリック")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__supplement"
  }, [_vm._v("Backend Lead")])]), _vm._v(" "), _c("li", {
    staticClass: "member__list member__list"
  }, [_c("div", {
    staticClass: "member__list__hide"
  }, [_c("p", {
    staticClass: "member__list__hide__titile"
  }, [_vm._v("Backend Lead")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__hide__text"
  }, [_vm._v("パンジャブ州ラホール出身。GCUF大学のコンピューターサイエンス学部を卒業。前職ではANZGlobal\n                            Soft社にてバックエンドエンジニアとして勤務。その後当社にLaravel及びVue\n                            JSのフルスタックエンジニアして入社。現在バックエンドリード職として多くの顧客案件にて開発を担当。")])]), _vm._v(" "), _c("img", {
    staticClass: "member__list__thumbnail",
    attrs: {
      src: "/public/assets/img/Team/Abdul-Samad.jpg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "member__list__subtitle"
  }, [_vm._v("Abdul Samad")]), _vm._v(" "), _c("h4", {
    staticClass: "member__list__title"
  }, [_vm._v("アブドォル サマッド")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__supplement"
  }, [_vm._v("Backend Lead")])])]), _vm._v(" "), _c("ul", {
    staticClass: "member__contents mt-4"
  }, [_c("li", {
    staticClass: "member__list member__list"
  }, [_c("div", {
    staticClass: "member__list__hide"
  }, [_c("p", {
    staticClass: "member__list__hide__titile"
  }, [_vm._v("Writing Expert")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__hide__text"
  }, [_vm._v("\n                            パンジャブ州ラホール出身。当社入社前までフリーランスとして多くの企業のコンテンツライティング・ライティングコンサルタントとして活動。当社ではコンテンツ生成のみでなく、内容調査や論理展開の設定なども行うコンテンツライターとして活躍。\n                        ")])]), _vm._v(" "), _c("img", {
    staticClass: "member__list__thumbnail",
    attrs: {
      src: "/public/assets/img/Team/faizan-haider.jpg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "member__list__subtitle"
  }, [_vm._v("Faizan Haider")]), _vm._v(" "), _c("h4", {
    staticClass: "member__list__title"
  }, [_vm._v("フェザン ヘイダ")]), _vm._v(" "), _c("p", {
    staticClass: "member__list__supplement"
  }, [_vm._v("Writing Expert")])])])]), _vm._v(" "), _c("section", {
    staticClass: "company-bg",
    attrs: {
      id: "company"
    }
  }, [_c("div", {
    staticClass: "company mycontents-wide"
  }, [_c("h3", {
    staticClass: "subcontent-title subcontent-title_company"
  }, [_vm._v("COMPANY")]), _vm._v(" "), _c("table", {
    staticClass: "company__contents"
  }, [_c("tbody", {
    staticClass: "company__contents__left"
  }, [_c("tr", [_c("th", [_c("h3", {
    staticClass: "company__list__tr"
  }, [_vm._v("会社名")]), _vm._v(" "), _c("span", {
    staticClass: "company__list__hr"
  })]), _vm._v(" "), _c("td", {
    staticClass: "company__list__td"
  }, [_vm._v("IDENBRID INC. / アイデンブリッド社")])]), _vm._v(" "), _c("tr", [_c("th", [_c("h3", {
    staticClass: "company__list__tr"
  }, [_vm._v("設立日")]), _vm._v(" "), _c("span", {
    staticClass: "company__list__hr"
  })]), _vm._v(" "), _c("td", {
    staticClass: "company__list__td"
  }, [_vm._v("2020年1月")])]), _vm._v(" "), _c("tr", [_c("th", [_c("h3", {
    staticClass: "company__list__tr"
  }, [_vm._v("資本金")]), _vm._v(" "), _c("span", {
    staticClass: "company__list__hr"
  })]), _vm._v(" "), _c("td", {
    staticClass: "company__list__td"
  }, [_vm._v("1,500万円 (2022年4月1日現在)")])]), _vm._v(" "), _c("tr", [_c("th", [_c("h3", {
    staticClass: "company__list__tr"
  }, [_vm._v("代表者")]), _vm._v(" "), _c("span", {
    staticClass: "company__list__hr"
  })]), _vm._v(" "), _c("td", {
    staticClass: "company__list__td"
  }, [_vm._v("President & CEO 中村奏画")])]), _vm._v(" "), _c("tr", [_c("th", [_c("h3", {
    staticClass: "company__list__tr"
  }, [_vm._v("法人登記")]), _vm._v(" "), _c("span", {
    staticClass: "company__list__hr"
  })]), _vm._v(" "), _c("td", {
    staticClass: "company__list__td"
  }, [_vm._v("パキスタン法人")])]), _vm._v(" "), _c("tr", [_c("th", [_c("h3", {
    staticClass: "company__list__tr"
  }, [_vm._v("従業員数")]), _vm._v(" "), _c("span", {
    staticClass: "company__list__hr"
  })]), _vm._v(" "), _c("td", {
    staticClass: "company__list__td"
  }, [_vm._v("全体30名 / 業務委託稼働人材20名 / 開発業務提携3社")])]), _vm._v(" "), _c("tr", [_c("th", [_c("h3", {
    staticClass: "company__list__tr"
  }, [_vm._v("事務所")]), _vm._v(" "), _c("span", {
    staticClass: "company__list__hr"
  })]), _vm._v(" "), _c("td", {
    staticClass: "company__list__td"
  }, [_vm._v("B1F 176 Yblock DHA Phase3, Lahore　>>"), _c("a", {
    attrs: {
      href: "https://goo.gl/maps/CV364GyvjGyQv3X97",
      target: "_blank"
    }
  }, [_vm._v("Google Map")])])]), _vm._v(" "), _c("tr", [_c("th", [_c("h3", {
    staticClass: "company__list__tr"
  }, [_vm._v("提携会社")]), _vm._v(" "), _c("span", {
    staticClass: "company__list__hr"
  })]), _vm._v(" "), _c("td", {
    staticClass: "company__list__td"
  }, [_vm._v("Zanzibar Holdings")])]), _vm._v(" "), _c("tr", [_c("th", [_c("h3", {
    staticClass: "company__list__tr"
  }, [_vm._v("事業内容")]), _vm._v(" "), _c("span", {
    staticClass: "company__list__hr"
  })]), _vm._v(" "), _c("td", {
    staticClass: "company__list__td"
  }, [_vm._v("システム・アプリ開発 / ウェブ・デザイン制作 / SES事業 / SaaS事業 / プログラミングスクール事業\n                            ")])])])])])]), _vm._v(" "), _c("section", {
    staticClass: "mycontents-wide history-section",
    attrs: {
      id: "history"
    }
  }, [_c("h3", {
    staticClass: "subcontent-title subcontent-title_company"
  }, [_vm._v("CORPORATE HISTORY")]), _vm._v(" "), _c("div", {
    staticClass: "history-list"
  }, [_c("ol", [_c("li", [_c("span", {
    staticClass: "year"
  }, [_c("span", [_vm._v("2020/01")])]), _c("span", {
    staticClass: "year-description"
  }, [_vm._v("リモートベースでIdenbrid Inc.設立")])]), _vm._v(" "), _c("li", [_c("span", {
    staticClass: "year"
  }, [_c("span", [_vm._v("2020/09")])]), _c("span", {
    staticClass: "year-description"
  }, [_vm._v("本社オフィスをDD Block\n                            Phase3に移設")])]), _vm._v(" "), _c("li", [_c("span", {
    staticClass: "year"
  }, [_c("span", [_vm._v("2020/10")])]), _c("span", {
    staticClass: "year-description"
  }, [_vm._v("日本向け受託開発開始")])]), _vm._v(" "), _c("li", [_c("span", {
    staticClass: "year"
  }, [_c("span", [_vm._v("2021/04")])]), _c("span", {
    staticClass: "year-description"
  }, [_vm._v("本社オフィスをY Block\n                            Phase3に移転")])]), _vm._v(" "), _c("li", [_c("span", {
    staticClass: "year"
  }, [_c("span", [_vm._v("2021/08")])]), _c("span", {
    staticClass: "year-description"
  }, [_vm._v("社名を「IDENBRID\n                            INC.」に変更")])]), _vm._v(" "), _c("li", [_c("span", {
    staticClass: "year"
  }, [_c("span", [_vm._v("2021/11")])]), _c("span", {
    staticClass: "year-description"
  }, [_vm._v("「Online\n                            Development Hub」サービス開始")])]), _vm._v(" "), _c("li", [_c("span", {
    staticClass: "year"
  }, [_c("span", [_vm._v("2022/02")])]), _c("span", {
    staticClass: "year-description"
  }, [_vm._v("プログラミンスクール「IdenSpire」開始")])]), _vm._v(" "), _c("li", [_c("span", {
    staticClass: "year"
  }, [_c("span", [_vm._v("2022/04")])]), _c("span", {
    staticClass: "year-description"
  }, [_vm._v("現在、世界12カ国の企業とIT開発取引")])])])])])]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=style&index=0&id=22a27132&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=style&index=0&id=22a27132&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.history-list li {\n    display: flex;\n}\n.history-list li .year {\n    width: 190px;\n    position: relative;\n    padding: 1.56rem 0 2.5rem 0;\n}\n.history-list li .year-description {\n    width: calc(100% - 190px);\n    border-top: solid 2px rgba(43, 47, 56, 0.05);\n    font-size: 1.12rem;\n    line-height: 1.7em;\n    padding: 1.56rem 0 2.5rem 0;\n    font-weight: 700;\n}\n.history-list li .year span {\n    position: relative;\n    padding-left: 20px;\n    font-size: 1.12rem;\n    color: var(--basecolor);\n    font-weight: 700;\n    font-style: normal;\n}\n.history-list li .year span:before {\n    content: \"\";\n    position: absolute;\n    width: 4px;\n    height: 4px;\n    left: 0;\n    top: 50%;\n    background-color: var(--basecolor);\n    margin-top: -1px;\n}\n.history-list li .year:before {\n    content: \"\";\n    width: 4px;\n    height: 100%;\n    background-color: rgba(43, 47, 56, 0.05);\n    left: 0;\n    top: 0;\n    position: absolute;\n}\n.about-subcontents__text {\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 24px;\n    /* width: calc((100% - 415px) / 1);\ntext-align: center; */\n    margin: auto;\n    color: #ffffff;\n}\n\n/*mission*/\n.mission {\n    position: relative;\n    min-height: 492px;\n    margin-bottom: 120px;\n    display: flex;\n    flex-direction: column;\n}\n.mission::after {\n    content: \"\";\n    position: absolute;\n    display: inline-block;\n    top: 92px;\n    left: calc(var(--content-padding-side) + 160px);\n    height: 400px;\n    width: calc(100vw - var(--content-padding-side) - 160px + (100% - 100vw) / 2);\n    background-image: url('/public/assets/img/about_mission.png');\n    background-size: cover;\n    border-radius: 30px 0px 0px 30px;\n    z-index: 2;\n}\n\n/* broad-message */\n.broad_message {\n    position: relative;\n    min-height: 492px;\n    margin-bottom: 120px;\n}\n.broad_message::after {\n    content: \"\";\n    position: absolute;\n    display: inline-block;\n    top: 92px;\n    left: calc(var(--content-padding-side) + 160px);\n    height: 400px;\n    width: calc(100vw - var(--content-padding-side) - 160px + (100% - 100vw) / 2);\n    background-image: url('/assets/img/broad-message.png');\n    background-size: cover;\n    border-radius: 30px 0px 0px 30px;\n    z-index: 2;\n}\n\n/* end */\n.content-subtitle_mission,\n.content-title_mission,\n.content-text_mission {\n    position: relative;\n    z-index: 3;\n}\n.content-subtitle_mission {\n    margin-top: 30px;\n}\n.content-text_mission {\n    margin-top: 10px;\n    margin-bottom: 184px;\n}\n@media (max-width: 767px) {\n.history-list li .year {\n        width: 115px;\n}\n.history-list li .year-description {\n        width: 100%;\n}\n.about-subcontents__text {\n        width: calc((100% - 25px) / 1);\n}\n.history-list li .year span {\n        font-size: 0.8rem;\n}\n.history-list li .year-description {\n        font-size: 0.8rem;\n}\n.mission {\n        min-height: auto;\n        margin-bottom: 0px;\n}\n.mission::after {\n        position: relative;\n        display: block;\n        margin-right: calc(-1 * var(--content-padding-side-sp));\n        width: calc(100% + var(--content-padding-side-sp));\n        height: 150px;\n        top: auto;\n        left: auto;\n        border-radius: 5px 0 0 5px;\n}\n.broad_message {\n        min-height: auto;\n        margin-bottom: 60px;\n}\n.broad_message::after {\n        position: relative;\n        display: block;\n        margin-right: calc(-1 * var(--content-padding-side-sp));\n        width: calc(100% + var(--content-padding-side-sp));\n        height: 150px;\n        top: auto;\n        left: auto;\n        border-radius: 5px 0 0 5px;\n}\n.content-text_mission {\n        margin-bottom: 20px;\n}\n}\n\n/*member*/\n.member {\n    margin-bottom: 100px;\n}\n.member__contents {\n    display: flex;\n    justify-content: space-between;\n}\n.member__list__hide {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding: 15px 15px 0 15px;\n    opacity: 0;\n    transition: 0.5s;\n}\n.member__list__hide__titile {\n    font-weight: bold;\n    font-size: 13px;\n    line-height: 19px;\n    margin-bottom: 5px;\n    color: var(--textcolor);\n}\n.member__list__hide__text {\n    font-weight: 500;\n    font-size: 13px;\n    line-height: 19px;\n    color: var(--textcolor);\n}\n.member__list:hover .member__list__hide {\n    opacity: 1;\n}\n.member__list {\n    position: relative;\n    width: calc((100% - 35px * 2) / 3);\n    max-width: 350px;\n    background: #ffffff;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);\n    border-radius: 15px;\n}\n.member__list__thumbnail {\n    width: 100%;\n    transition: 0.5s;\n}\n.member__list:hover .member__list__thumbnail {\n    opacity: 0.1;\n}\n.member__list__subtitle {\n    margin-top: 5px;\n    margin-left: 15px;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 18px;\n}\n.member__list__title {\n    display: inline-block;\n    margin-top: 10px;\n    margin-left: 15px;\n    padding-bottom: 20px;\n    font-weight: bold;\n    font-size: 18px;\n    line-height: 36px;\n    letter-spacing: 0.05em;\n}\n.member__list__supplement {\n    display: inline-block;\n    margin-left: 10px;\n    line-height: 36px;\n    font-size: 14px;\n}\n.missioncontent-text {\n    /* max-width: 460px; */\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 24px;\n    color: #333333;\n}\n.history-section {\n    padding-bottom: 40px;\n}\n@media (max-width: 767px) {\n.member {\n        margin-bottom: 60px;\n}\n.subcontent-title {\n        margin-bottom: 30px;\n}\n.member__contents {\n        display: block;\n}\n.member__list {\n        margin-bottom: 30px;\n        width: 100%;\n        max-width: inherit;\n}\n.member__list_last {\n        margin-bottom: 0;\n}\n.member__list__thumbnail {\n        margin-bottom: 30px;\n}\n.member__list__subtitle {\n        font-size: 10px;\n        line-height: 15px;\n}\n.member__list__title {\n        font-size: 18px;\n        line-height: 27px;\n}\n.member__list__subtitle {\n        font-size: 10px;\n        line-height: 15px;\n}\n}\n\n/*company*/\n.company-bg {\n    margin-bottom: 100px;\n    padding-top: 60px;\n    background: #f6f6f6;\n}\n.company {\n    padding-bottom: 60px;\n    /*90-30*/\n}\n.subcontent-title_company {\n    margin-bottom: 30px;\n}\n.company__contents {\n    -moz-columns: 2;\n         columns: 2;\n    -moz-column-gap: 120px;\n         column-gap: 120px;\n}\n.company__list {\n    position: relative;\n    display: flex;\n    margin-bottom: 30px;\n}\n.company__contents {\n    border-collapse: separate;\n    margin: 0 auto;\n    display: flex;\n    justify-content: space-between;\n    width: calc(100% - 20px * 2);\n    border-spacing: 0 30px;\n}\n.company__contents__left,\n.company__contents__right {\n    width: 100%;\n}\n.company__contents th {\n    position: relative;\n    width: 170px;\n    height: 21px;\n}\n.company__list__tr {\n    position: relative;\n    display: inline-block;\n    padding-right: 30px;\n    background-color: #f6f6f6;\n    z-index: 3;\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 21px;\n}\n.company__list__hr {\n    display: inline-block;\n    position: absolute;\n    left: 0;\n    top: 9px;\n    height: 0.5px;\n    width: 150px;\n    background-color: var(--basecolor);\n    z-index: 2;\n}\n.company__list__td {\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 21px;\n}\n.company__list__tr br {\n    display: none;\n}\n@media (max-width: 767px) {\n.company__contents {\n        border-collapse: separate;\n        display: inline;\n        justify-content: space-between;\n        width: calc(100% - 20px * 2);\n        border-spacing: 0 20px;\n        width: 100%;\n}\n.company__contents__left,\n    .company__contents__right {\n        width: 100%;\n}\n.company__contents th {\n        width: 110px;\n}\n.company__list__tr {\n        padding-right: 10px;\n        font-size: 13px;\n        line-height: 18px;\n}\n.company__list__hr {\n        width: 100px;\n}\n.company__list__td {\n        font-size: 13px;\n        line-height: 20px;\n}\n.company__list__tr br {\n        display: block;\n}\n}\n\n/*client*/\n.client {\n    margin-bottom: 100px;\n}\n.client__contents {\n    display: flex;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n.client__list {\n    width: calc((100% - 40px * 3) / 4);\n    margin-bottom: 60px;\n}\n.client__list_pc {\n    margin-bottom: 0;\n}\n.client__list img {\n    width: 100%;\n}\n@media (max-width: 767px) {\n.client {\n        margin-bottom: 60px;\n}\n.client__list {\n        width: calc((100% - 15px) / 2);\n        margin-bottom: 20px;\n}\n.client__list_sp {\n        margin-bottom: 0;\n}\n}\n\n/*access*/\n.access {\n    position: relative;\n    margin-bottom: 60px;\n}\n.access__contents {\n    position: relative;\n}\n.access__map {\n    position: absolute;\n    top: 0;\n    right: calc((100% - 100vw) / 2);\n    width: calc(50% - (100% - 100vw) / 2);\n    height: 100%;\n}\n.access__text {\n    width: 50%;\n}\n.access__text__contents {\n    margin-left: 20px;\n    margin-bottom: 46px;\n    border-collapse: separate;\n    border-spacing: 0 30px;\n}\n.access__text__contents th {\n    position: relative;\n    width: 170px;\n    height: 21px;\n}\n.access__text__list__tr {\n    position: relative;\n    display: inline-block;\n    z-index: 3;\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 21px;\n}\n.access__text__list__hr {\n    display: inline-block;\n    position: absolute;\n    right: 0;\n    top: 9px;\n    height: 0.5px;\n    width: 92px;\n    background-color: var(--basecolor);\n    z-index: 2;\n}\n.access__text__list__hr__sec {\n    width: 78px;\n}\n.access__text__list__td {\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 21px;\n}\n.access__text__list__td span {\n    display: inline-block;\n    margin-top: 10px;\n}\n.btn-wide_map {\n    padding-top: 0;\n    margin: 0 auto;\n    text-align: center;\n    position: relative;\n}\n.btn-wide__img_map {\n    position: absolute;\n    top: 25px;\n    left: 70px;\n}\n.btn-wide__text_map {\n    display: inline-block;\n    padding-left: 45px;\n    line-height: 70px;\n}\n.btn-wide__img_map img:nth-child(1) {\n    opacity: 1;\n}\n.btn-wide__img_map img:nth-child(2) {\n    opacity: 0;\n}\n.btn-wide_map:hover .btn-wide__img_map img:nth-child(1) {\n    opacity: 0;\n}\n.btn-wide_map:hover .btn-wide__img_map img:nth-child(2) {\n    opacity: 1;\n}\n@media (max-width: 767px) {\n.access__map {\n        height: 135px;\n        width: 100%;\n        top: 166px;\n        right: inherit;\n}\n.access__text {\n        width: 100%;\n}\n.access__text__contents {\n        margin-bottom: 165px;\n        margin-left: 0;\n}\n.access__text__contents th {\n        position: relative;\n        width: 100px;\n        height: 20px;\n}\n.access__text__list__hr {\n        width: 63px;\n}\n.access__text__list__hr__sec {\n        width: 50px;\n}\n.access__text__list__tr {\n        padding-right: 10px;\n}\n.access__text__list__td {\n        font-size: 13px;\n        line-height: 20px;\n}\n.access__text__list__td span {\n        margin-top: 0;\n}\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=style&index=0&id=22a27132&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=style&index=0&id=22a27132&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_22a27132_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=style&index=0&id=22a27132&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=style&index=0&id=22a27132&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_22a27132_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_22a27132_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/pages/About.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/pages/About.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _About_vue_vue_type_template_id_22a27132___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=22a27132& */ "./resources/js/components/pages/About.vue?vue&type=template&id=22a27132&");
/* harmony import */ var _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/About.vue?vue&type=script&lang=js&");
/* harmony import */ var _About_vue_vue_type_style_index_0_id_22a27132_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About.vue?vue&type=style&index=0&id=22a27132&lang=css& */ "./resources/js/components/pages/About.vue?vue&type=style&index=0&id=22a27132&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _About_vue_vue_type_template_id_22a27132___WEBPACK_IMPORTED_MODULE_0__.render,
  _About_vue_vue_type_template_id_22a27132___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/About.vue"
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

/***/ "./resources/js/components/pages/About.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/pages/About.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/pages/About.vue?vue&type=template&id=22a27132&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/pages/About.vue?vue&type=template&id=22a27132& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_22a27132___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_22a27132___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_22a27132___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=template&id=22a27132& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=template&id=22a27132&");


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

/***/ "./resources/js/components/pages/About.vue?vue&type=style&index=0&id=22a27132&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/pages/About.vue?vue&type=style&index=0&id=22a27132&lang=css& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_style_index_0_id_22a27132_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=style&index=0&id=22a27132&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/About.vue?vue&type=style&index=0&id=22a27132&lang=css&");


/***/ })

}]);