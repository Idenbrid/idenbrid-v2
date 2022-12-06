"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_services_Idenspire_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/services/Idenspire.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/services/Idenspire.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../layout/Navbar.vue */ "./resources/js/components/layout/Navbar.vue");
/* harmony import */ var _layout_Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout/Footer.vue */ "./resources/js/components/layout/Footer.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    Navbar: _layout_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _layout_Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: "お知らせ・ブログ | システム開発はアイデンブリッド社 | IDENBRID INC.",
      meta: [{
        vmid: "description",
        name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
        content: "アイデンブリッドではお知らせやブログを定期的に更新しており、皆様が日々抱くサイト構築やアプリ開発の疑問やサイトをローンチした後の運用に関しての疑問に答えるブログ記事を公開しています。"
      }]
    };
  },
  mounted: function mounted() {}
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/services/Idenspire.vue?vue&type=template&id=44a1e8c0&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/services/Idenspire.vue?vue&type=template&id=44a1e8c0& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("Navbar"), _vm._v(" "), _c("main", [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7), _vm._v(" "), _c("section", {
    staticClass: "menu"
  }, [_c("ul", {
    staticClass: "menu-contents mycontents-wide"
  }, [_c("li", {
    staticClass: "menu-contents__list"
  }, [_c("router-link", {
    attrs: {
      to: "/about/"
    }
  }, [_c("img", {
    staticClass: "menu-contents__list__thumbnail",
    attrs: {
      src: "/public/assets/img/icons/company.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "menu-contents__list__text"
  }, [_c("p", {
    staticClass: "menu-contents__list__subtitle"
  }, [_vm._v("会社概要")]), _vm._v(" "), _c("h4", {
    staticClass: "menu-contents__list__title"
  }, [_vm._v("COMPANY")])])])], 1), _vm._v(" "), _c("li", {
    staticClass: "menu-contents__list"
  }, [_c("router-link", {
    attrs: {
      to: "/blog/"
    }
  }, [_c("img", {
    staticClass: "menu-contents__list__thumbnail menu-contents__list__thumbnail_news",
    attrs: {
      src: "/public/assets/img/icons/WWW.png",
      alt: ""
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "menu-contents__list__text"
  }, [_c("p", {
    staticClass: "menu-contents__list__subtitle"
  }, [_vm._v("ブログ")]), _vm._v(" "), _c("h4", {
    staticClass: "menu-contents__list__title"
  }, [_vm._v("BLOG")])])])], 1), _vm._v(" "), _c("li", {
    staticClass: "menu-contents__list"
  }, [_c("router-link", {
    attrs: {
      to: "/onlinedevelopmenthub/"
    }
  }, [_c("img", {
    staticClass: "menu-contents__list__thumbnail",
    attrs: {
      src: "/public/assets/img/icons/Partnership.png",
      alt: ""
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "menu-contents__list__text"
  }, [_c("p", {
    staticClass: "menu-contents__list__subtitle"
  }, [_vm._v("オンライン開発ハブ")]), _vm._v(" "), _c("h4", {
    staticClass: "menu-contents__list__title"
  }, [_vm._v("DEVELOPEMENT")])])])], 1)])])]), _vm._v(" "), _c("Footer")], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "hero_Heading"
  }, [_c("h2", {
    staticClass: "hero"
  }, [_vm._v("Idenspire")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "system-sec mycontents-wide"
  }, [_c("h2", {
    staticClass: "system-sec__tiile"
  }, [_vm._v("IOS、Androidアプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__text"
  }, [_vm._v("\n                IOSアプリ、Androidアプリどちらも対応を行っております。"), _c("br"), _vm._v("お客様のニーズに合わせてコストを抑えられるハイブリットアプリののご提案も可能です。")]), _vm._v(" "), _c("ul", {
    staticClass: "system-sec__contents"
  }, [_c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/app01.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("IOSアプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        SwiftやObjective-Cでのネイティブアプリ開発を行っております。iPhoneをはじめとしiPadアプリの開発も可能です。"), _c("br"), _vm._v("開発からAppleストアへの申請まで一貫して対応しております。\n                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/app02.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("Androidアプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        KotlinやJavaでのネイティブアプリ開発を行っております。"), _c("br"), _vm._v("ネイティブ開発の利点を最大限生かしたプログラムを提供しております。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/app03.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("ハイブリットアプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        IOS、Androidアプリケーションを別々で作ることなくワンソースでの開発により、開発予算や開発期間の削減に向いている制作方法です。また、リリース後の更新作業も単に行える利点があります。\n                    ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "system-sec mycontents-wide"
  }, [_c("h2", {
    staticClass: "system-sec__tiile"
  }, [_vm._v("サービスアプリケーション")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__text"
  }, [_vm._v("顧客の情報管理や、従業員管理、業務効率化のためのシステム開発など"), _c("br"), _vm._v("クライアントの課題に沿ったご提案をさせていただきます。")]), _vm._v(" "), _c("ul", {
    staticClass: "system-sec__contents"
  }, [_c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/service-app01.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("マッチングアプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        BtoBマッチングのみならず、CtoCサービスのWEBサービス主にオークションサービスやフリマサービスなど開発いたします。"), _c("br"), _vm._v("エスクロー決済の導入も可能です。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/service-app02.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("位置情報アプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("位置情報システムを利用した店舗検索アプリやマッチングアプリ、GPSアプリなどを開発いたします。"), _c("br"), _vm._v("Google\n                        APIを利用した開発も行うことができます。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/service-app03.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("SNSアプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        TwitterやInstagramなどのソーシャルアプリケーションやビジネスSNSアプリを開発を行うことが可能です。"), _c("br"), _vm._v("オリジナルの機能を組み込むことで差別化を図ることも可能です。\n                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/service-app04.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("フリマアプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        売りたい人、買いたい人をつなげるフリマアプリをご提供しております。"), _c("br"), _vm._v("決済システムから売上出金申請、ポイントシステムなど多くの機能をご提供しております。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/service-app05.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("LIVE配信アプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        リアルタイムのLIVE配信機能からスーパーチェット、スタンプ送信機能を搭載したシステムをご提供しております。"), _c("br"), _vm._v("SNSアプリと掛け合わせた開発など新規事業開発にご利用いただいております。\n                    ")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/service-app06.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("チャットアプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        社内チャットツールの開発やWEBサービスと連携したアプリの開発が可能です。業務効率化やWEBサービスのアプリ版の開発をお任せください。")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "system-sec mycontents-wide"
  }, [_c("h2", {
    staticClass: "system-sec__tiile"
  }, [_vm._v("ビジネスアプリケーション")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__text"
  }, [_vm._v("業務用アプリや社内アプリの開発を行っております。"), _c("br"), _vm._v("アプリによる業務効率化やWEBシステムからの切り替えなどご相談ください。")]), _vm._v(" "), _c("ul", {
    staticClass: "system-sec__contents"
  }, [_c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/business-app01.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("予約アプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        飲食店や美容室、ホテルなどで使用されております。導入により電話やメール対応の人的ソースの削減、営業時間外でも対応できる為予約の取りこぼし防止対策になります。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/business-app02.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("スケジュール管理アプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        アルバイトのシフトや打刻管理など業務効率化向けアプリから一般ユーザー層使用を想定したスケジュール管理アプリを提供いたします。細かな時間管理や与管理機能まで開発可能です。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/business-app03.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("画像解析アプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        画像を分析して、様々なデータへの変換や、画像から肌の状態など分析し状態データの解析など幅広い画像解析系のアプリを開発いたします。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/business-app04.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("プロジェクト管理アプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        建築現場などで利用されている施工管理や、プロジェクトの進捗管理ができるアプリを開発しております。ToDoやガントチャート機能などが搭載されております。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/business-app05.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("日報アプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        リモートワークで便利な日報アプリの開発をいたします。"), _c("br"), _vm._v("在宅ワークのコミュニケーション課題を解決するアプリをご提供いたします。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/business-app06.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("打刻アプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        リモートワークが進んでいる現代で、どこからでも打刻ができるアプリを開発いたします。給与計算システムと連動することでより労務の負担を軽減することが可能です。")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "system-sec mycontents-wide"
  }, [_c("h2", {
    staticClass: "system-sec__tiile"
  }, [_vm._v("情報管理・データベース設計")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__text"
  }, [_vm._v("顧客の情報管理や、従業員管理、業務効率化のためのシステム開発など"), _c("br"), _vm._v("クライアントの課題に沿ったご提案をさせていただきます。")]), _vm._v(" "), _c("ul", {
    staticClass: "system-sec__contents system-sec__contents_last"
  }, [_c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/infrastructure01.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("保守運用")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        WEBサイト運営で起こりうるリスク回避の支援を行います。"), _c("br"), _vm._v("脆弱なシステムによるハッキング被害などからお客様の大切な情報をお守りします。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/infrastructure02.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("インフラ構築")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        リモート業務が進む今、社外からの利用も多いため運用範囲を拡大し、利便性の高いインフラを構築致します。それに伴うセキュリティー対策も万全に行います。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/infrastructure03.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("クラウド開発")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        サーバーコストの削減やオンプレミスからの移管支援などを行っております。"), _c("br"), _vm._v("様々なシステムのクラウド化による業務効率化を得意としております。")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "system-sec mycontents-wide"
  }, [_c("h2", {
    staticClass: "system-sec__tiile"
  }, [_vm._v("ビジネスアプリケーション")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__text"
  }, [_vm._v("業務用アプリや社内アプリの開発を行っております。"), _c("br"), _vm._v("アプリによる業務効率化やWEBシステムからの切り替えなどご相談ください。")]), _vm._v(" "), _c("ul", {
    staticClass: "system-sec__contents"
  }, [_c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/business-app01.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("予約アプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        飲食店や美容室、ホテルなどで使用されております。導入により電話やメール対応の人的ソースの削減、営業時間外でも対応できる為予約の取りこぼし防止対策になります。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/business-app02.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("スケジュール管理アプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        アルバイトのシフトや打刻管理など業務効率化向けアプリから一般ユーザー層使用を想定したスケジュール管理アプリを提供いたします。細かな時間管理や与管理機能まで開発可能です。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/business-app03.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("画像解析アプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        画像を分析して、様々なデータへの変換や、画像から肌の状態など分析し状態データの解析など幅広い画像解析系のアプリを開発いたします。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/business-app04.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("プロジェクト管理アプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        建築現場などで利用されている施工管理や、プロジェクトの進捗管理ができるアプリを開発しております。ToDoやガントチャート機能などが搭載されております。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/business-app05.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("日報アプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        リモートワークで便利な日報アプリの開発をいたします。"), _c("br"), _vm._v("在宅ワークのコミュニケーション課題を解決するアプリをご提供いたします。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/business-app06.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("打刻アプリ")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        リモートワークが進んでいる現代で、どこからでも打刻ができるアプリを開発いたします。給与計算システムと連動することでより労務の負担を軽減することが可能です。")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "system-sec mycontents-wide"
  }, [_c("h2", {
    staticClass: "system-sec__tiile"
  }, [_vm._v("情報管理・データベース設計")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__text"
  }, [_vm._v("顧客の情報管理や、従業員管理、業務効率化のためのシステム開発など"), _c("br"), _vm._v("クライアントの課題に沿ったご提案をさせていただきます。")]), _vm._v(" "), _c("ul", {
    staticClass: "system-sec__contents system-sec__contents_last"
  }, [_c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/infrastructure01.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("保守運用")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        WEBサイト運営で起こりうるリスク回避の支援を行います。"), _c("br"), _vm._v("脆弱なシステムによるハッキング被害などからお客様の大切な情報をお守りします。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/infrastructure02.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("インフラ構築")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        リモート業務が進む今、社外からの利用も多いため運用範囲を拡大し、利便性の高いインフラを構築致します。それに伴うセキュリティー対策も万全に行います。")])]), _vm._v(" "), _c("li", {
    staticClass: "system-sec__list"
  }, [_c("img", {
    staticClass: "system-sec__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/system/infrastructure03.svg",
      alt: ""
    }
  }), _vm._v(" "), _c("h3", {
    staticClass: "system-sec__list__title"
  }, [_vm._v("クラウド開発")]), _vm._v(" "), _c("p", {
    staticClass: "system-sec__list__text"
  }, [_vm._v("\n                        サーバーコストの削減やオンプレミスからの移管支援などを行っております。"), _c("br"), _vm._v("様々なシステムのクラウド化による業務効率化を得意としております。")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "flow"
  }, [_c("div", {
    staticClass: "mycontents-wide"
  }, [_c("h3", {
    staticClass: "content-title content-title_flow"
  }, [_vm._v("PROCESS")]), _vm._v(" "), _c("p", {
    staticClass: "content-text content-subtitle_flow"
  }, [_vm._v("\n                    契約と開発の流れ")])]), _vm._v(" "), _c("div", {
    staticClass: "flow__scroll mycontents-wide"
  }, [_c("ul", {
    staticClass: "flow__contents"
  }, [_c("li", {
    staticClass: "flow__list flow__list_border"
  }, [_c("img", {
    staticClass: "flow__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/flow01.png",
      alt: ""
    }
  }), _vm._v(" "), _c("h4", {
    staticClass: "flow__list__title"
  }, [_vm._v("ヒヤリング・お見積もり")]), _vm._v(" "), _c("p", {
    staticClass: "flow__list__text"
  }, [_vm._v("制作したい内容、予算、スケジュール、目的をもとに概算費用をお出し致します。")])]), _vm._v(" "), _c("li", {
    staticClass: "flow__list flow__list_border"
  }, [_c("img", {
    staticClass: "flow__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/flow02.png",
      alt: ""
    }
  }), _vm._v(" "), _c("h4", {
    staticClass: "flow__list__title"
  }, [_vm._v("仕様・要件定義")]), _vm._v(" "), _c("p", {
    staticClass: "flow__list__text"
  }, [_vm._v("Web戦略立案、サイトマップ、デザイン定義、機能要件などを定義致します。")])]), _vm._v(" "), _c("li", {
    staticClass: "flow__list flow__list_border"
  }, [_c("img", {
    staticClass: "flow__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/flow03.png",
      alt: ""
    }
  }), _vm._v(" "), _c("h4", {
    staticClass: "flow__list__title"
  }, [_vm._v("デザイン制作・システム開発")]), _vm._v(" "), _c("p", {
    staticClass: "flow__list__text"
  }, [_vm._v("\n                            ラフデザイン案提案、その後お客様の意見を取り入れた最終デザイン決定。"), _c("br"), _vm._v("そして開発工程のコーディング、システム開発を行います。")])]), _vm._v(" "), _c("li", {
    staticClass: "flow__list"
  }, [_c("img", {
    staticClass: "flow__list__thumbnail",
    attrs: {
      src: "https://whitecanvas.jp/wp-content/themes/whitecanvas_fix_thema-main/img/icon/flow04.png",
      alt: ""
    }
  }), _vm._v(" "), _c("h4", {
    staticClass: "flow__list__title"
  }, [_vm._v("リリース・保守・運営")]), _vm._v(" "), _c("p", {
    staticClass: "flow__list__text"
  }, [_vm._v("テストをおえて修正完了後、本番環境へのリリースを行います。"), _c("br"), _vm._v("リリース後のサイト分析、保守、運営までサポート致します。\n                        ")])])])])]);
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

/***/ "./resources/js/components/pages/services/Idenspire.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/pages/services/Idenspire.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Idenspire_vue_vue_type_template_id_44a1e8c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Idenspire.vue?vue&type=template&id=44a1e8c0& */ "./resources/js/components/pages/services/Idenspire.vue?vue&type=template&id=44a1e8c0&");
/* harmony import */ var _Idenspire_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Idenspire.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/services/Idenspire.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Idenspire_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Idenspire_vue_vue_type_template_id_44a1e8c0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Idenspire_vue_vue_type_template_id_44a1e8c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/services/Idenspire.vue"
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

/***/ "./resources/js/components/pages/services/Idenspire.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pages/services/Idenspire.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Idenspire_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Idenspire.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/services/Idenspire.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Idenspire_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/pages/services/Idenspire.vue?vue&type=template&id=44a1e8c0&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/pages/services/Idenspire.vue?vue&type=template&id=44a1e8c0& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Idenspire_vue_vue_type_template_id_44a1e8c0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Idenspire_vue_vue_type_template_id_44a1e8c0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Idenspire_vue_vue_type_template_id_44a1e8c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Idenspire.vue?vue&type=template&id=44a1e8c0& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/services/Idenspire.vue?vue&type=template&id=44a1e8c0&");


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


/***/ })

}]);