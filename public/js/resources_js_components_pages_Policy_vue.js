"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Policy_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Policy.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Policy.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
      title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | 経営理念",
      meta: [{
        vmid: "description",
        name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
        content: "アイデンブリッドではお知らせやブログを定期的に更新しており、皆様が日々抱くサイト構築やアプリ開発の疑問やサイトをローンチした後の運用に関しての疑問に答えるブログ記事を公開しています。"
      }]
    };
  },
  mounted: function mounted() {
    var swiper = new Swiper(".policySlider", {
      spaceBetween: 50,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Policy.vue?vue&type=template&id=18fe3170&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Policy.vue?vue&type=template&id=18fe3170& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("Navbar"), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "branding--contact"
  }, [_vm._m(4), _vm._v(" "), _c("div", {
    staticClass: "fade_y on"
  }, [_c("router-link", {
    staticClass: "contactbtn fade_y on",
    attrs: {
      to: "/contact/"
    }
  }, [_vm._v("今すぐ相談してみる")])], 1)]), _vm._v(" "), _c("Footer")], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mv_textarea"
  }, [_c("h2", [_c("strong", {
    staticClass: "en entxt"
  }, [_vm._v("POLICY / 経営理念")]), _vm._v(" "), _c("span", {
    staticClass: "jptxt"
  }, [_vm._v("IDENBRIDとは")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "section-policy"
  }, [_c("div", {
    staticClass: "d-flex flex-wrap"
  }, [_c("div", {
    staticClass: "col-md-6 policy-content"
  }, [_c("div", {
    staticClass: "policy-title"
  }, [_c("h3", [_vm._v("日本人によって起業された"), _c("br"), _vm._v("パキスタン発のグローバルIT開発企業")])]), _vm._v(" "), _c("div", {
    staticClass: "policy-prgh"
  }, [_c("p", [_vm._v("\n            私たちIDENBRID INC.は、パキスタンのラホールを拠点とするグローバルIT企業です。\n            "), _c("br"), _vm._v("社名は、「Identity」と「Hybrid」を組み合わせたもので、\n            "), _c("br"), _c("br"), _vm._v("国際色豊かなスタッフがそれぞれの国の良さを引き出し、\n            "), _c("br"), _vm._v("\n            共存していくという意味が込められています。\n            "), _c("br"), _c("br"), _vm._v("日本人が海外の地で創業した会社がITを通じて世界中の人々に価値を提供し、\n            "), _c("br"), _vm._v("日々直面する課題をITの力を持って解決することが当社の大きな目標です。\n          ")])])]), _vm._v(" "), _c("div", {
    staticClass: "col-md-6 policy-img"
  }, [_c("img", {
    attrs: {
      src: "/assets/img/policy.png",
      alt: ""
    }
  })])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "medium-term-vision"
  }, [_c("div", {
    staticClass: "medium-tern-content text-center"
  }, [_c("div", {
    staticClass: "medium-tern-title text-center"
  }, [_c("h2", [_vm._v("IDENBRIDの存在意義")]), _vm._v(" "), _c("span", [_vm._v("制定：2020年1月")])]), _vm._v(" "), _c("div", {
    staticClass: "most-intersting"
  }, [_c("h2", [_vm._v("\n          アイデンブリッドのMVV：ミッション・ビジョン・バリューとは\n        ")]), _vm._v(" "), _c("span", [_vm._v(" 私たちの目指す道")])]), _vm._v(" "), _c("hr", {
    staticClass: "bg-white m-0"
  })]), _vm._v(" "), _c("div", {
    staticClass: "policy-slider position-relative"
  }, [_c("div", {
    staticClass: "swiper-slider-title"
  }, [_c("div", {
    staticClass: "swiper-pagination custom-swiper-pagination"
  }), _vm._v(" "), _c("div", {
    staticClass: "swiper-button-next custom-button-next"
  }), _vm._v(" "), _c("div", {
    staticClass: "swiper-button-prev custom-button-prev"
  })]), _vm._v(" "), _c("div", {
    staticClass: "swiper policySlider"
  }, [_c("div", {
    staticClass: "swiper-wrapper"
  }, [_c("div", {
    staticClass: "swiper-slide flex-column"
  }, [_c("h2", {
    staticClass: "policy-h"
  }, [_vm._v("MISSION / ミッション")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex w-100 policy-content"
  }, [_c("div", {
    staticClass: "mbl-col col-md-6"
  }, [_c("div", {
    staticClass: "swiper-content text-left"
  }, [_c("span", {
    staticClass: "num"
  }, [_vm._v("01.")]), _vm._v(" "), _c("div", {
    staticClass: "slider-img-title"
  }, [_c("span", [_vm._v("テクノロジーで未来をかっこよくアップデート")]), _vm._v(" "), _c("h2", [_vm._v("Update the future in style")])]), _vm._v(" "), _c("div", {
    staticClass: "slider-img-about"
  }, [_c("h2", [_vm._v("ITを通じて私たちが未来を変えるって本気で信じてます")])])])]), _vm._v(" "), _c("div", {
    staticClass: "mbl-col col-md-6"
  }, [_c("div", {
    staticClass: "slider-img"
  }, [_c("img", {
    attrs: {
      src: "/assets/img/update.png",
      alt: "img"
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "swiper-slide flex-column"
  }, [_c("h2", {
    staticClass: "policy-h"
  }, [_vm._v("VISION / ビジョン")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex w-100 policy-content"
  }, [_c("div", {
    staticClass: "mbl-col col-md-6"
  }, [_c("div", {
    staticClass: "swiper-content text-left"
  }, [_c("span", {
    staticClass: "num"
  }, [_vm._v("02.")]), _vm._v(" "), _c("div", {
    staticClass: "slider-img-title"
  }, [_c("span", [_vm._v("クライアントのユーザーペインの解決こそが我々の提供価値")]), _vm._v(" "), _c("h2", [_vm._v("Client User Pain Resolution")])]), _vm._v(" "), _c("div", {
    staticClass: "slider-img-about"
  }, [_c("h2", [_vm._v("クライアントファーストを実行するために私たちのできることを押し付けるのでなく"), _c("br"), _vm._v("\n                      お客様の困っていることを解決します")])])])]), _vm._v(" "), _c("div", {
    staticClass: "mbl-col col-md-6"
  }, [_c("div", {
    staticClass: "slider-img"
  }, [_c("img", {
    attrs: {
      src: "/assets/img/2.png",
      alt: ""
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "swiper-slide flex-column"
  }, [_c("h2", {
    staticClass: "policy-h"
  }, [_vm._v("VALUE / バリュー")]), _vm._v(" "), _c("div", {
    staticClass: "d-flex w-100 policy-content"
  }, [_c("div", {
    staticClass: "mbl-col col-md-6"
  }, [_c("div", {
    staticClass: "swiper-content text-left"
  }, [_c("span", {
    staticClass: "num"
  }, [_vm._v("03.")]), _vm._v(" "), _c("div", {
    staticClass: "slider-img-title"
  }, [_c("span", [_vm._v("10条からなるリーダーシップ論に沿った判断基準")]), _vm._v(" "), _c("h2", [_vm._v("Our Leadership Philosophy")])]), _vm._v(" "), _c("div", {
    staticClass: "slider-img-about"
  }, [_c("h2", [_vm._v("このOLPに沿って会社経営、"), _c("br"), _vm._v("\n                      採用活動、事業判断を行っています")])])])]), _vm._v(" "), _c("div", {
    staticClass: "mbl-col col-md-6"
  }, [_c("div", {
    staticClass: "slider-img"
  }, [_c("img", {
    attrs: {
      src: "/assets/img/3.png",
      alt: ""
    }
  })])])])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "sd",
    attrs: {
      id: "issue",
      "data-s-d3444163-5430-4969-9af2-0a184f625a59": ""
    }
  }, [_c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-53d29141-a411-493c-8496-cceefa2e509b": ""
    }
  }, [_c("section", {
    staticClass: "sd",
    attrs: {
      id: "values",
      "data-s-8663e993-4cc7-4929-9f30-5d17a44f5bed": ""
    }
  }, [_c("h2", {
    staticClass: "text sd",
    attrs: {
      "data-s-b20f914c-17e4-4a7c-b734-7b81b5904637": "",
      "data-r-1_0_0_2_b20f914c-17e4-4a7c-b734-7b81b5904637": ""
    }
  }, [_vm._v("\n          IDENBRIDの取り組む3つの大きな挑戦")])]), _vm._v(" "), _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-1a890182-2468-4c25-afbe-34ef0a944bce": ""
    }
  }, [_c("div", {
    staticClass: "image sd",
    attrs: {
      "data-s-7176ffac-e55a-4752-a76d-c0084eaf6d23": "",
      "data-r-0_0_1_2_7176ffac-e55a-4752-a76d-c0084eaf6d23": ""
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-65d7cf93-f18b-4086-bf36-33ccb8b2e9b6": ""
    }
  }, [_c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-8f6f55eb-3214-43e5-9e5d-2caab78e564a": ""
    }
  }, [_c("p", {
    staticClass: "text sd",
    attrs: {
      "data-s-43881428-4fb8-49b3-a8b6-581f27d95706": "",
      "data-r-1_0_1_0_1_2_43881428-4fb8-49b3-a8b6-581f27d95706": ""
    }
  }, [_vm._v("\n              日本市場におけるリソース型の"), _c("br"), _vm._v("エンジニア採用シェアをベトナム市場から奪取")]), _vm._v(" "), _c("p", {
    staticClass: "text sd",
    attrs: {
      "data-s-3488d0a9-bd1d-449b-b109-0c53335de055": "",
      "data-r-2_0_1_0_1_2_3488d0a9-bd1d-449b-b109-0c53335de055": ""
    }
  }, [_vm._v("\n              スタジオ開発ハブサービス：SDHを促進し、10年後の世界における"), _c("br"), _vm._v("\n              開発中心地が南アジアに移った際のイニシアチブをIDNEBRIDが握っていきます。")]), _vm._v(" "), _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-21e4a63e-e023-411e-a192-303946499407": ""
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-1a890182-2468-4c25-afbe-34ef0a944bce": ""
    }
  }, [_c("div", {
    staticClass: "image sd imag-02",
    attrs: {
      "data-s-7176ffac-e55a-4752-a76d-c0084eaf6d23": "",
      "data-r-0_4_1_2_7176ffac-e55a-4752-a76d-c0084eaf6d23": ""
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-65d7cf93-f18b-4086-bf36-33ccb8b2e9b6": ""
    }
  }, [_c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-8f6f55eb-3214-43e5-9e5d-2caab78e564a": ""
    }
  }, [_c("p", {
    staticClass: "text sd appear",
    attrs: {
      "data-s-43881428-4fb8-49b3-a8b6-581f27d95706": "",
      "data-r-1_0_1_4_1_2_43881428-4fb8-49b3-a8b6-581f27d95706": ""
    }
  }, [_vm._v("\n              2025年末までに国際市場と日本における売上高比率を"), _c("br"), _vm._v("\n              9：1を目標とし、圧倒的グルーバル企業へ成長")]), _vm._v(" "), _c("p", {
    staticClass: "text sd appear",
    attrs: {
      "data-s-3488d0a9-bd1d-449b-b109-0c53335de055": "",
      "data-r-2_0_1_4_1_2_3488d0a9-bd1d-449b-b109-0c53335de055": ""
    }
  }, [_vm._v("\n              売上の大半を占める日本からの売上高を下げることなく、"), _c("br"), _vm._v("パキスタンエンジニアチームの組織改革を徹底し、期間内に目標を達成します。")]), _vm._v(" "), _c("div", {
    staticClass: "sd appear",
    attrs: {
      "data-s-21e4a63e-e023-411e-a192-303946499407": ""
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-1a890182-2468-4c25-afbe-34ef0a944bce": ""
    }
  }, [_c("div", {
    staticClass: "image sd image-03",
    attrs: {
      "data-s-7176ffac-e55a-4752-a76d-c0084eaf6d23": "",
      "data-r-0_5_1_2_7176ffac-e55a-4752-a76d-c0084eaf6d23": ""
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-65d7cf93-f18b-4086-bf36-33ccb8b2e9b6": ""
    }
  }, [_c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-8f6f55eb-3214-43e5-9e5d-2caab78e564a": ""
    }
  }, [_c("p", {
    staticClass: "text sd appear",
    attrs: {
      "data-s-43881428-4fb8-49b3-a8b6-581f27d95706": "",
      "data-r-1_0_1_5_1_2_43881428-4fb8-49b3-a8b6-581f27d95706": ""
    }
  }, [_vm._v("\n              パキスタンの「車ライフスタイル」を"), _c("br"), _vm._v("\n              アプリを通じて日本と繋げる")]), _vm._v(" "), _c("p", {
    staticClass: "text sd appear",
    attrs: {
      "data-s-3488d0a9-bd1d-449b-b109-0c53335de055": "",
      "data-r-2_0_1_5_1_2_3488d0a9-bd1d-449b-b109-0c53335de055": ""
    }
  }, [_vm._v("\n              グローバル目線を持った企業に進化するために、パキスタン市場を"), _c("br"), _vm._v("リードする日本からの輸入車閲覧アプリをリリースし、社内売上の2割を目指しています。")])])])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h3", {
    staticClass: "fade_y on"
  }, [_vm._v("IT開発：UIUXデザイン、ウェブやスマホアプリそしてクラウド構築まで"), _c("br"), _vm._v("\n      ご質問がありましたらお気軽にご相談ください。")]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Policy.vue?vue&type=style&index=0&id=18fe3170&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Policy.vue?vue&type=style&index=0&id=18fe3170&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.branding--contact h3 {\r\n    color: #dadada;\r\n    font-weight: 600;\r\n    letter-spacing: .1em;\r\n    line-height: 1.85;\n}\n.fade_y.on {\r\n    opacity: 1;\r\n    transform: translateY(0);\n}\n.branding--contact .contactbtn {\r\n    border: 1px solid #fdfdfd;\r\n    color: #fdfdfd;\r\n    display: block;\r\n    font-size: 16px;\r\n    font-weight: 700;\r\n    letter-spacing: .1em;\r\n    margin: 50px auto 0;\r\n    padding: 22px 0;\r\n    text-align: center;\r\n    transition: .4s;\r\n    width: 260px;\n}\r\n  /* new vision */\n.branding--contact {\r\n    background-image: url(/assets/img/bottom-banner-background-image.png);\r\n    background-position: 0 0;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\n}\n.sd {\r\n    max-width: 100%;\r\n    z-index: 0;\r\n    pointer-events: all;\r\n    flex-wrap: nowrap;\r\n    -webkit-overflow-scrolling: touch;\r\n    display: flex;\r\n    position: relative;\r\n    flex-direction: column;\r\n    align-content: center;\r\n    align-items: center;\r\n    flex: none;\n}\n.sd[data-s-d3444163-5430-4969-9af2-0a184f625a59] {\r\n    align-content: center;\r\n    align-items: center;\r\n    background: rgba(0, 0, 0, 0.0);\r\n    flex: none;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    height: auto;\r\n    justify-content: center;\r\n    margin: 0px 0px 0px 0px;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n    padding: 120px 0px 80px 0px;\r\n    width: 100%;\r\n    max-width: 100%;\n}\n.sd[data-s-dd57a7e5-5f3a-4dcd-afb8-a288ce7987e7] {\r\n    align-content: center;\r\n    align-items: center;\r\n    flex: none;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    justify-content: center;\r\n    margin: 0px 32px 0px;\r\n    padding: 0px;\r\n    width: 1000px;\r\n    z-index: 1;\r\n    max-width: calc(100% - 64px);\n}\n.sd[data-s-8663e993-4cc7-4929-9f30-5d17a44f5bed] {\r\n    align-content: flex-start;\r\n    align-items: flex-start;\r\n    flex: none;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    height: auto;\r\n    justify-content: center;\r\n    margin: 0px 0px 40px;\r\n    padding: 0px 0px 0px 0px;\r\n    width: 100%;\r\n    max-width: 100%;\n}\n.sd[data-s-1773e167-0e92-4305-bae3-0b993b900af1] {\r\n    align-content: center;\r\n    align-items: center;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    height: auto;\r\n    justify-content: center;\r\n    margin: 0px 0px 40px 0px;\r\n    padding: 0px;\r\n    transition-timing-function: cubic-bezier(0, 0.53, 0.35, 0.97);\n}\n.sd[data-s-45478c4e-877c-4fbf-83b3-ffcf8388e647] {\r\n    background: #f94406;\r\n    border-radius: 6px;\r\n    flex: none;\r\n    height: 2px;\r\n    margin: 0px 16px 0px 0px;\r\n    transition-timing-function: cubic-bezier(0, 0.53, 0.35, 0.97);\r\n    width: 40px;\r\n    max-width: calc(100% - 16px);\n}\n.sd[data-s-2ab396ff-b009-48ae-ac13-527c5014fb75] {\r\n    color: #333333;\r\n    font-family: var(--s-font-d08cf475);\r\n    font-feature-settings: 'palt'1;\r\n    font-size: 20px;\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    height: auto;\r\n    letter-spacing: normal;\r\n    line-height: 1.2;\r\n    margin: 0px 0px 0px 0px;\r\n    text-align: left;\r\n    width: auto;\r\n    max-width: 100%;\r\n    justify-content: flex-start;\n}\n.sd[data-s-b20f914c-17e4-4a7c-b734-7b81b5904637] {\r\n    color: #111111;\r\n    font-family: var(--s-font-d08cf475);\r\n    font-feature-settings: 'palt'1;\r\n    font-size: 42px;\r\n    font-weight: 400;\r\n    height: auto;\r\n    line-height: 1.2;\r\n    margin: 0px 0px 40px 0px;\r\n    text-align: left;\r\n    transition-timing-function: cubic-bezier(0, 0.53, 0.35, 0.97);\r\n    width: auto;\r\n    max-width: 100%;\r\n    justify-content: flex-start;\n}\n.sd[data-s-53d29141-a411-493c-8496-cceefa2e509b] {\r\n    align-content: flex-start;\r\n    align-items: flex-start;\r\n    background: rgba(0, 0, 0, 0.0);\r\n    flex: none;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    height: auto;\r\n    justify-content: flex-start;\r\n    margin: 0px 80px 0px;\r\n    overflow-x: visible;\r\n    overflow-y: visible;\r\n    width: 1400px;\r\n    max-width: calc(100% - 160px);\n}\n.sd[data-s-1a890182-2468-4c25-afbe-34ef0a944bce] {\r\n    align-content: center;\r\n    align-items: center;\r\n    background: #111111;\r\n    border-bottom: 0px solid #000;\r\n    border-left: 0px solid #000;\r\n    border-radius: 6px;\r\n    border-right: 0px solid #000;\r\n    border-top: 0px solid #000;\r\n    box-shadow: 0px 0px 0px rgb(100 100 100 / 10%);\r\n    flex: none;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    height: 640px;\r\n    justify-content: flex-start;\r\n    margin: 0px 40px 40px 0px;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n    padding: 0px;\r\n    width: calc(33.3% - 40px);\r\n    max-width: calc(33.3% - 40px);\n}\n.sd[data-s-7176ffac-e55a-4752-a76d-c0084eaf6d23] {\r\n    align-content: center;\r\n    align-items: center;\r\n    border-radius: 0;\r\n    flex: none;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    height: 100%;\r\n    justify-content: flex-start;\r\n    left: 0;\r\n    margin: 0 0 0 0;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n    padding: 0px 0px 0px;\r\n    position: absolute;\r\n    top: 0;\r\n    transition-duration: 2000ms;\r\n    transition-timing-function: cubic-bezier(0, 0.53, 0.35, 0.97);\r\n    width: 100%;\r\n    z-index: 0;\r\n    max-width: 100%;\n}\n.image:before {\r\n    content: \"\";\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    position: absolute;\r\n    border-radius: inherit;\r\n    z-index: -2;\r\n    pointer-events: none;\r\n    background-size: cover;\r\n    background-position: 50%;\r\n    transition: inherit;\n}\n.sd[data-r-0_0_1_2_7176ffac-e55a-4752-a76d-c0084eaf6d23]:before {\r\n    background-image: url('/assets/img/01.png');\n}\n.imag-02:before {\r\n    background-image: url('/assets/img/02.png');\n}\n.image-03:before {\r\n    background-image: url('/assets/img/03.png');\n}\n.sd[data-s-65d7cf93-f18b-4086-bf36-33ccb8b2e9b6] {\r\n    align-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    height: 100%;\r\n    justify-content: flex-end;\r\n    overflow-x: hidden;\r\n    overflow-y: hidden;\r\n    padding: 40px 30px 40px 30px;\r\n    width: 100%;\r\n    z-index: 1;\r\n    max-width: 100%;\n}\n.sd[data-s-8f6f55eb-3214-43e5-9e5d-2caab78e564a] {\r\n    align-content: flex-start;\r\n    align-items: flex-start;\r\n    flex: none;\r\n    flex-direction: column;\r\n    flex-wrap: nowrap;\r\n    height: auto;\r\n    justify-content: flex-start;\r\n    margin: 0px 0px 0px 0px;\r\n    width: 100%;\r\n    max-width: 100%;\n}\n.sd[data-s-68a07ee8-4455-4e1e-947d-b9a303e5940a] {\r\n    flex: none;\r\n    height: 32px;\r\n    margin: 0px 0px 32px 0px;\r\n    transition-timing-function: cubic-bezier(0, 0.53, 0.35, 0.97);\r\n    width: auto;\r\n    max-width: 100%;\n}\n.sd[data-s-43881428-4fb8-49b3-a8b6-581f27d95706] {\r\n    color: #FFFFFF;\r\n    flex: none;\r\n    font-family: var(--s-font-d08cf475);\r\n    font-feature-settings: 'palt'1;\r\n    font-size: 24px;\r\n    font-weight: 900;\r\n    height: auto;\r\n    line-height: 1.3;\r\n    margin: 0px 0px 16px 0px;\r\n    text-align: left;\r\n    transition-timing-function: cubic-bezier(0, 0.53, 0.35, 0.97);\r\n    width: auto;\r\n    max-width: 100%;\r\n    justify-content: flex-start;\n}\n.sd[data-s-3488d0a9-bd1d-449b-b109-0c53335de055] {\r\n    color: #FFFFFF;\r\n    flex: none;\r\n    font-family: var(--s-font-b0b9646f);\r\n    font-feature-settings: 'palt'1;\r\n    font-size: 13px;\r\n    font-weight: 900;\r\n    height: auto;\r\n    line-height: 1.8;\r\n    margin: 0px 0px 24px 0px;\r\n    padding: 0px 0px 0px 0px;\r\n    text-align: left;\r\n    transition-timing-function: cubic-bezier(0, 0.53, 0.35, 0.97);\r\n    width: auto;\r\n    max-width: 100%;\r\n    justify-content: flex-start;\n}\n.sd[data-s-21e4a63e-e023-411e-a192-303946499407] {\r\n    color: #111111;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    padding: 0px;\r\n    transition-timing-function: cubic-bezier(0, 0.53, 0.35, 0.97);\r\n    width: 100%;\r\n    max-width: 100%;\n}\n@media screen and (max-width: 1140px) {\n.sd[data-s-dd57a7e5-5f3a-4dcd-afb8-a288ce7987e7] {\r\n      margin: 0px 80px 0px;\r\n      max-width: calc(100% - 160px);\n}\n.sd[data-s-53d29141-a411-493c-8496-cceefa2e509b] {\r\n      margin: 80px 20px 100px;\r\n      max-width: calc(100% - 40px);\n}\n.sd[data-s-1a890182-2468-4c25-afbe-34ef0a944bce] {\r\n      margin: 0px 24px 24px 0px;\r\n      width: calc(33.3% - 24px);\r\n      max-width: calc(33.3% - 24px);\n}\n}\n@media screen and (max-width: 768px) {\n.sd[data-s-d3444163-5430-4969-9af2-0a184f625a59] {\r\n      padding: 120px 0px 40px 0px;\n}\n.sd[data-s-dd57a7e5-5f3a-4dcd-afb8-a288ce7987e7] {\r\n      margin: 0px 80px 0px;\n}\n.sd[data-s-8663e993-4cc7-4929-9f30-5d17a44f5bed] {\r\n      margin: 0px 0px 0px;\r\n      width: 100%;\r\n      max-width: 100%;\n}\n.sd[data-s-b20f914c-17e4-4a7c-b734-7b81b5904637] {\r\n      margin: 0px 0px 0px 0px;\r\n      max-width: 100%;\n}\n.sd[data-s-53d29141-a411-493c-8496-cceefa2e509b] {\r\n      margin: 80px 20px 100px;\r\n      max-width: calc(100% - 40px);\n}\n.sd[data-s-1a890182-2468-4c25-afbe-34ef0a944bce] {\r\n      flex: none;\r\n      flex-direction: column;\r\n      flex-wrap: nowrap;\r\n      margin: 0px 15px 30px;\r\n      overflow-x: hidden;\r\n      overflow-y: hidden;\r\n      width: calc(50% - 30px);\r\n      max-width: calc(50% - 30px);\n}\n.sd[data-s-7176ffac-e55a-4752-a76d-c0084eaf6d23] {\r\n      flex: none;\n}\n.sd[data-s-65d7cf93-f18b-4086-bf36-33ccb8b2e9b6] {\r\n      padding: 40px 40px 40px 20px;\n}\n.sd[data-s-8f6f55eb-3214-43e5-9e5d-2caab78e564a] {\r\n      margin: 0px 0px 0px 0px;\n}\n.sd[data-s-43881428-4fb8-49b3-a8b6-581f27d95706] {\r\n      font-size: 20px;\n}\n}\n@media screen and (max-width: 480px) {\n.sd[data-s-d3444163-5430-4969-9af2-0a184f625a59] {\r\n      padding: 80px 0px 40px 0px;\n}\n.sd[data-s-dd57a7e5-5f3a-4dcd-afb8-a288ce7987e7] {\r\n      margin: 0px 24px 0px;\r\n      max-width: calc(100% - 48px);\n}\n.sd[data-s-45478c4e-877c-4fbf-83b3-ffcf8388e647] {\r\n      flex: none;\r\n      margin: 0px 8px 0px 0px;\r\n      width: 20px;\r\n      max-width: calc(100% - 8px);\n}\n.sd[data-s-2ab396ff-b009-48ae-ac13-527c5014fb75] {\r\n      font-size: 14px;\n}\n.sd[data-s-b20f914c-17e4-4a7c-b734-7b81b5904637] {\r\n      font-size: 24px;\r\n      margin: 0px 0px 0px 0px;\n}\n.sd[data-s-53d29141-a411-493c-8496-cceefa2e509b] {\r\n      margin: 40px 16px 0px;\r\n      max-width: calc(100% - 32px);\n}\n.sd[data-s-1a890182-2468-4c25-afbe-34ef0a944bce] {\r\n      flex: none;\r\n      flex-direction: column;\r\n      flex-wrap: nowrap;\r\n      height: 540px;\r\n      margin: 0px 0px 30px;\r\n      overflow-x: hidden;\r\n      overflow-y: hidden;\r\n      width: 100%;\r\n      max-width: 100%;\n}\n.sd[data-s-65d7cf93-f18b-4086-bf36-33ccb8b2e9b6] {\r\n      padding: 40px 40px 40px 24px;\n}\n.sd[data-s-43881428-4fb8-49b3-a8b6-581f27d95706] {\r\n      font-size: 20px;\r\n      margin: 0px 0px 8px 0px;\r\n      max-width: 100%;\n}\n.sd[data-s-3488d0a9-bd1d-449b-b109-0c53335de055] {\r\n      margin: 0px 0px 24px 0px;\n}\n}\r\n\r\n  /*end*/\n.policy-img {\r\n    position: relative;\r\n    /* background-color: #FEF8ED; */\r\n    margin-top: 20px;\n}\n.policy-img img {\r\n    width: 100%;\r\n    height: 550px;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\n}\n.policy-slider {\r\n    padding: 0px 10% 0px;\n}\n.policy-h {\r\n    display: inline-flex;\r\n    padding: 0px 24px;\r\n    font-family: NotoSansJP-Bold;\r\n    font-size: 16px;\r\n    margin-bottom: 50px;\r\n    color: #fff;\n}\n.vision-sitemap {\r\n    margin: 72px auto 0;\n}\n.swiper-content .num {\r\n    font-family: DIN-Bold;\n}\n.policySlider {\r\n    height: 100% !important;\n}\n.vision-title-text {\r\n    width: 640px;\r\n    margin: 15px auto 0;\n}\n.vision-title-text h3 {\r\n    font-weight: bold;\r\n    font-size: 27px;\r\n    font-family: DIN-Medium;\n}\r\n\r\n  /* .policy-content {\r\n    padding: 30px 75px;\r\n  } */\n.swiper-pagination-current,\r\n  .swiper-pagination-total {\r\n    font-family: DIN-Bold;\r\n    font-size: 16px;\n}\n.swiper-slider-title {\r\n    display: inline-flex;\n}\n.policySlider .swiper-slide {\r\n    align-items: flex-start;\n}\n.section-policy {\r\n    padding: 60px 10% 120px;\r\n    background-color: #fff;\n}\n.policy-title {\r\n    margin: 0px 0 70px;\n}\n.policy-title h3 {\r\n    font-family: NotoSansJP-Bold;\r\n    font-size: 54px;\r\n    font-weight: 600;\r\n    line-height: 1.4;\r\n    /* color: #000000; */\r\n    color: #000;\r\n    letter-spacing: 0.1em;\n}\n.policy-prgh p {\r\n    font-size: 16px;\r\n    line-height: 2;\r\n    /* color: #000; */\r\n    color: #000;\r\n    font-weight: 500;\r\n    font-family: NotoSansJP-Regular;\r\n    /* letter-spacing: 0.4px; */\r\n    display: inline-flex;\n}\r\n\r\n  /* section mission css  */\n.section-mission {\r\n    background-color: #fff;\n}\n.mission-content {\r\n    padding: 140px 0 90px;\n}\n.mission-title {\r\n    text-align: center;\n}\n.mission-title h2 {\r\n    /* color: #fff; */\r\n    color: #000;\r\n    margin-bottom: 0px;\r\n    font-size: 30px;\r\n    font-family: DIN-Medium;\r\n    line-height: 1.5;\r\n    letter-spacing: 3px;\r\n    font-weight: 700;\n}\n.mission-title span {\r\n    text-align: center;\r\n    color: #000;\r\n    font-weight: 400;\r\n    font-size: 14px;\r\n    font-family: NotoSansJP-Regular;\n}\n.policy-title-text {\r\n    width: 520px;\r\n    margin: 15px auto 0;\n}\n.vission-content {\r\n    padding: 100px 0 150px;\n}\n.vision-title {\r\n    text-align: center;\n}\n.vision-title h2 {\r\n    font-family: DIN-Medium;\r\n    font-size: 30px;\r\n    color: #000;\r\n    line-height: 1.5;\r\n    letter-spacing: 3px;\r\n    font-weight: 700;\r\n    margin-bottom: 0px;\n}\n.vision-title span {\r\n    font-family: NotoSansJP-Regular;\r\n    text-align: center;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    font-style: normal;\r\n    color: #000;\r\n    line-height: 30px;\r\n    letter-spacing: 0.56px;\n}\n.vision-content {\r\n    padding: 90px 0px 140px;\n}\r\n\r\n\r\n  /* medium-term-vision css start  */\n.medium-tern-content {\r\n    margin: 0 5% 100px;\n}\n.medium-term-vision {\r\n    padding: 150px 0px 180px;\r\n    background-color: #1d5594;\n}\n.medium-tern-title h2 {\r\n    font-family: NotoSansJP-Bold;\r\n    font-size: 22px;\r\n    margin-bottom: 16px;\r\n    font-style: normal;\r\n    color: #fff;\r\n    line-height: 22px;\n}\n.medium-tern-title span {\r\n    font-size: 14px;\r\n    font-family: NotoSansJP-Regular;\r\n    font-style: normal;\r\n    Color: #fff;\r\n    line-height: 14px;\r\n    margin-top: 14px;\n}\n.most-intersting {\r\n    margin-top: 37px;\r\n    padding: 0 0 80px;\n}\n.most-intersting h2 {\r\n    font-family: NotoSansJP-Bold;\r\n    font-size: 50px;\r\n    font-style: normal;\r\n    Color: #fff;\r\n    margin-top: 10px;\r\n    margin-bottom: 15px;\r\n    letter-spacing: 0.1rem;\n}\n.most-intersting span {\r\n    font-family: NotoSansJP-Bold;\r\n    letter-spacing: 0.1em;\r\n    font-size: 20px;\r\n    font-weight: 700;\r\n    font-style: normal;\r\n    Color: #fff;\r\n    line-height: 20px;\n}\r\n\r\n\r\n  /* swiper csss */\n.swiper {\r\n    width: 100%;\r\n    height: 100%;\n}\n.swiper-slide {\r\n    text-align: center;\r\n    font-size: 18px;\r\n    /* background: #000; */\r\n\r\n    /* Center slide text vertically */\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\n}\n.swiper-slide img {\r\n    display: block;\r\n    width: 94%;\r\n    height: 100%;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\n}\n.swiper {\r\n    width: 100%;\r\n    height: 500px;\r\n    margin: 20px auto;\n}\r\n\r\n  /* custom css swiper   */\n.swiper-heading h2 {\r\n    font-family: NotoSansJP-Bold;\r\n    font-size: 1.4rem;\r\n    margin-bottom: 50px;\r\n    font-weight: 700;\r\n    letter-spacing: 0.06em;\r\n    color: #fff;\n}\n.num {\r\n    font-weight: 700;\r\n    font-size: 130px;\r\n    color: #fff;\n}\n.slider-img-title span {\r\n    font-size: 16px;\r\n    color: #fff;\r\n    font-family: NotoSansJP-Medium;\n}\n.slider-img-title h2 {\r\n    font-size: 30px;\r\n    color: #fff;\r\n    font-family: NotoSansJP-Bold;\r\n    margin-top: 22px;\r\n    font-weight: 700;\n}\n.slider-img-about h2 {\r\n    font-size: 20px;\r\n    color: #fff;\r\n    font-family: NotoSansJP-Bold;\r\n    margin: 67px 0px 30px;\n}\n.slider-img-about ul li {\r\n    font-size: 14px;\r\n    line-height: 2;\r\n    letter-spacing: 0.04em;\r\n    color: #fff;\r\n    font-family: NotoSansJP-Regular;\n}\r\n\r\n  /* swiper next previous buttons  */\n.custom-button-prev:after {\r\n\r\n    font-size: 15px;\r\n    font-weight: 700;\n}\n.custom-button-next:after {\r\n\r\n    font-size: 15px;\r\n    font-weight: 700;\n}\n.custom-button-next,\r\n  .swiper-rtl .custom-button-prev {\r\n    top: 0%;\r\n    right: 10%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #929191;\r\n    height: 70px;\r\n    width: 70px;\r\n    border-radius: 50%;\r\n    color: #fff;\n}\n.custom-button-prev,\r\n  .swiper-rtl .custom-button-next {\r\n    left: auto;\r\n    right: 15%;\r\n    top: 0%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background-color: #868686;\r\n    ;\r\n    height: 70px;\r\n    width: 70px;\r\n    border-radius: 50%;\r\n    color: #fff;\n}\n.custom-swiper-pagination {\r\n    left: 28%;\r\n    width: 100%;\r\n    top: 0%;\r\n    font-size: 16px;\r\n    font-weight: 600;\r\n    color: #fff;\n}\r\n\r\n  /* section sitemap  */\n.section-sitemap {\r\n    padding: 190px 0 120px;\r\n    background: #1d5594;\n}\n.sitemap-title {\r\n    text-align: center;\n}\n.sitemap-title h2 {\r\n    font-family: DIN-Bold;\r\n    color: #dadada;\r\n    font-size: 30px;\r\n    font-weight: 700;\n}\n.policy-title-text h3 {\r\n    font-weight: bold;\r\n    font-size: 22px;\r\n    font-family: DIN-Medium;\n}\n.sitemap-title span {\r\n    font-family: NotoSansJP-Bold;\r\n    color: #fff;\r\n    font-weight: 700;\r\n    font-size: 14px;\n}\n.vision-sitemap img {\r\n    width: 100%;\r\n    height: 100%;\r\n    -o-object-fit: contain;\r\n       object-fit: contain;\n}\n@media screen and (max-width: 1300px) and (min-width: 897px) {\n.branding--contact h3 {\r\n    font-size: 40px;\r\n    text-align: center;\n}\n.branding--contact {\r\n    padding: 180px 0;\n}\n.custom-swiper-pagination {\r\n      left: 30%;\n}\n.custom-button-next,\r\n    .swiper-rtl .custom-button-prev,\r\n    .custom-button-prev,\r\n    .swiper-rtl .custom-button-next {\r\n      height: 50px;\r\n      width: 50px;\n}\n.custom-button-next,\r\n    .swiper-rtl .custom-button-prev {\r\n      right: 3%;\n}\n.custom-button-prev,\r\n    .swiper-rtl .custom-button-next {\r\n      right: 9%;\n}\n}\n@media screen and (max-width: 896px) {\n.branding--contact {\r\n    padding: 100px 5%;\n}\n.branding--contact h3 {\r\n    font-size: 20px;\n}\n.branding--contact {\r\n    padding: 100px 5%;\n}\n.swiper-slide img {\r\n      width: 100%;\n}\n.mbl-col {\r\n      flex: 0 0 100%;\r\n      max-width: 100%;\r\n      padding: 0px;\n}\n.policy-content {\r\n      padding: 0px;\n}\n.slider-img-title {\r\n      margin-bottom: 20px;\n}\n.custom-swiper-pagination {\r\n      left: 10%;\r\n      top: 20%;\n}\n.custom-button-prev,\r\n    .swiper-rtl .custom-button-next {\r\n      right: 100px;\r\n      top: 20%;\n}\n.custom-button-next,\r\n    .swiper-rtl .custom-button-prev {\r\n      right: 40px;\r\n      top: 20%;\n}\n.policy-content {\r\n      flex-direction: column;\n}\n.slider-img-about {\r\n      display: none;\n}\n.slider-img-title h2 {\r\n      font-size: 20px;\r\n      margin-top: 0px;\n}\n.slider-img-title span {\r\n      font-size: 14px;\n}\n.num {\r\n      font-size: 80px;\n}\n.medium-term-vision {\r\n      padding: 100px 0px 80px;\n}\n.policy-h {\r\n      padding: 0px;\r\n      font-size: 14px;\n}\n.custom-button-next,\r\n    .swiper-rtl .custom-button-prev,\r\n    .custom-button-prev,\r\n    .swiper-rtl .custom-button-next {\r\n      width: 50px;\r\n      height: 50px;\n}\n}\n@media screen and (max-width: 560px) {\n.custom-swiper-pagination {\r\n      left: 8%;\r\n      top: 25%;\n}\n.policy-title-img {\r\n      width: 65%;\r\n      margin: 35px auto 0;\n}\n.vision-title-img {\r\n      width: 80%;\r\n      margin: 35px auto 0;\n}\n.custom-button-next,\r\n    .swiper-rtl .custom-button-prev {\r\n      top: 25%;\n}\n.custom-button-prev,\r\n    .swiper-rtl .custom-button-next {\r\n      top: 25%;\n}\n.most-intersting h2 {\r\n      font-size: 40px;\n}\n}\n@media screen and (max-width: 400px) {\n.custom-swiper-pagination {\r\n      left: 2%;\r\n      top: 35%;\n}\n.custom-button-next,\r\n    .swiper-rtl .custom-button-prev,\r\n    .custom-button-prev,\r\n    .swiper-rtl .custom-button-next {\r\n      top: 13%;\n}\n.policy-title-img {\r\n      width: 65%;\r\n      margin: 35px auto 0;\n}\n.vision-title-img {\r\n      width: 80%;\r\n      margin: 35px auto 0;\n}\n.custom-button-next,\r\n    .swiper-rtl .custom-button-prev {\r\n      top: 30%;\n}\n.custom-button-prev,\r\n    .swiper-rtl .custom-button-next {\r\n      top: 30%;\n}\n.most-intersting h2 {\r\n      font-size: 20px;\n}\n}\n@media only screen and (max-width:767px) {\n.section-policy {\r\n      padding: 30px 5% 60px;\n}\n.policy-title {\r\n      margin: 30px auto;\n}\n.policy-title h3 {\r\n      font-size: 26px;\r\n      letter-spacing: 2.8px;\r\n      line-height: 2;\n}\n.policy-title-img {\r\n      width: 65%;\r\n      margin: 35px auto 0;\n}\n.vision-title-img {\r\n      width: 80%;\r\n      margin: 35px auto 0;\n}\n.vision-content {\r\n      padding: 100px 0px;\n}\n.mission-content {\r\n      padding: 100px 0px 0px;\r\n      margin-bottom: -1px;\n}\n.policy-img img {\r\n      width: 100%;\r\n      height: auto;\r\n      -o-object-fit: cover;\r\n         object-fit: cover;\n}\n}\n@media only screen and (max-width:425px) {\n.policy-title h3 {\r\n      font-size: 18px;\n}\n}\r\n\r\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Policy.vue?vue&type=style&index=0&id=18fe3170&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Policy.vue?vue&type=style&index=0&id=18fe3170&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Policy_vue_vue_type_style_index_0_id_18fe3170_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Policy.vue?vue&type=style&index=0&id=18fe3170&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Policy.vue?vue&type=style&index=0&id=18fe3170&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Policy_vue_vue_type_style_index_0_id_18fe3170_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Policy_vue_vue_type_style_index_0_id_18fe3170_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/pages/Policy.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/pages/Policy.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Policy_vue_vue_type_template_id_18fe3170___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Policy.vue?vue&type=template&id=18fe3170& */ "./resources/js/components/pages/Policy.vue?vue&type=template&id=18fe3170&");
/* harmony import */ var _Policy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Policy.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Policy.vue?vue&type=script&lang=js&");
/* harmony import */ var _Policy_vue_vue_type_style_index_0_id_18fe3170_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Policy.vue?vue&type=style&index=0&id=18fe3170&lang=css& */ "./resources/js/components/pages/Policy.vue?vue&type=style&index=0&id=18fe3170&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Policy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Policy_vue_vue_type_template_id_18fe3170___WEBPACK_IMPORTED_MODULE_0__.render,
  _Policy_vue_vue_type_template_id_18fe3170___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Policy.vue"
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

/***/ "./resources/js/components/pages/Policy.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/pages/Policy.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Policy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Policy.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Policy.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Policy_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/pages/Policy.vue?vue&type=template&id=18fe3170&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/pages/Policy.vue?vue&type=template&id=18fe3170& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Policy_vue_vue_type_template_id_18fe3170___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Policy_vue_vue_type_template_id_18fe3170___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Policy_vue_vue_type_template_id_18fe3170___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Policy.vue?vue&type=template&id=18fe3170& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Policy.vue?vue&type=template&id=18fe3170&");


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

/***/ "./resources/js/components/pages/Policy.vue?vue&type=style&index=0&id=18fe3170&lang=css&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/pages/Policy.vue?vue&type=style&index=0&id=18fe3170&lang=css& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Policy_vue_vue_type_style_index_0_id_18fe3170_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Policy.vue?vue&type=style&index=0&id=18fe3170&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Policy.vue?vue&type=style&index=0&id=18fe3170&lang=css&");


/***/ })

}]);