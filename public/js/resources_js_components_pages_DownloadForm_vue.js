"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_DownloadForm_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/DownloadForm.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/DownloadForm.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/Navbar.vue */ "./resources/js/components/layout/Navbar.vue");
/* harmony import */ var _layout_Footer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layout/Footer.vue */ "./resources/js/components/layout/Footer.vue");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      record: {
        name: '',
        company_name: '',
        email: ''
      }
    };
  },
  components: {
    Navbar: _layout_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Footer: _layout_Footer_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  methods: {
    requestDoc: function requestDoc() {
      var _this = this;
      axios.post('/api/request-doc', this.record).then(function (res) {
        if (res.data.success == true) {
          _this.record = {
            name: '',
            company_name: '',
            email: ''
          };
          alert('すぐにご連絡いたします。 ありがとう');
        } else {
          alert('全ての項目をご記入ください。');
        }
      })["catch"](function (err) {
        alert('全ての項目をご記入ください。');
      });
    }
  },
  metaInfo: function metaInfo() {
    return {
      title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | 資料ダウンロード",
      meta: [{
        vmid: "description",
        name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
        content: "アイデンブリッドではお知らせやブログを定期的に更新しており、皆様が日々抱くサイト構築やアプリ開発の疑問やサイトをローンチした後の運用に関しての疑問に答えるブログ記事を公開しています。"
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/DownloadForm.vue?vue&type=template&id=37608402&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/DownloadForm.vue?vue&type=template&id=37608402& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("Navbar"), _vm._v(" "), _vm._m(0), _vm._v(" "), _c("main", [_c("section", {}, [_c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-0e16e919-25dd-47be-9410-c87b0ca48625": ""
    }
  }, [_vm._m(1), _vm._v(" "), _c("form", {
    staticClass: "sd",
    attrs: {
      "data-s-52f5ada1-f2f2-4938-a67e-ed3a1ca95bfc": ""
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.requestDoc();
      }
    }
  }, [_vm._m(2), _vm._v(" "), _vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-35332035-c140-45dd-b60a-8621c8b5808d": ""
    }
  }, [_c("label", {
    staticClass: "sd",
    attrs: {
      "data-s-96950b18-e375-45a4-8c53-565ab7b63484": ""
    }
  }, [_vm._m(4), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.name,
      expression: "record.name"
    }],
    staticClass: "sd",
    attrs: {
      name: "会社名",
      placeholder: "ご入力ください",
      required: "required",
      type: "text",
      autocomplete: "off",
      "data-s-5878e812-d2f0-42ec-88de-15db7d7183ed": ""
    },
    domProps: {
      value: _vm.record.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.record, "name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("label", {
    staticClass: "sd",
    attrs: {
      "data-s-96950b18-e375-45a4-8c53-565ab7b63484": ""
    }
  }, [_vm._m(5), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.company_name,
      expression: "record.company_name"
    }],
    staticClass: "sd",
    attrs: {
      name: "会社名",
      placeholder: "ご入力ください",
      type: "text",
      autocomplete: "off",
      "data-s-5878e812-d2f0-42ec-88de-15db7d7183ed": ""
    },
    domProps: {
      value: _vm.record.company_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.record, "company_name", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-35332035-c140-45dd-b60a-8621c8b5808d": ""
    }
  }, [_c("label", {
    staticClass: "sd",
    attrs: {
      "data-s-96950b18-e375-45a4-8c53-565ab7b63484": ""
    }
  }, [_vm._m(6), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.email,
      expression: "record.email"
    }],
    staticClass: "sd",
    attrs: {
      name: "会社名",
      placeholder: "ご入力ください",
      required: "required",
      type: "email",
      autocomplete: "off",
      "data-s-5878e812-d2f0-42ec-88de-15db7d7183ed": ""
    },
    domProps: {
      value: _vm.record.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.record, "email", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm._m(7)])])]), _vm._v(" "), _c("section", {
    staticClass: "sd",
    attrs: {
      "data-s-696cf783-82e5-46e8-ba9c-cc3bb7d7386f": ""
    }
  }, [_c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-da52b47a-4058-4b2c-9bd2-b32d932d7a94": ""
    }
  }, [_c("h2", {
    staticClass: "text sd",
    attrs: {
      "data-s-5e66522a-4a6f-4642-b8eb-c760e25a2e6f": "",
      "data-r-0_0_1_1_5e66522a-4a6f-4642-b8eb-c760e25a2e6f": ""
    }
  }, [_vm._v("IDENBRIDのサービスSDHの特徴")]), _vm._v(" "), _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-9e377fd2-bb01-4a4a-b2c6-12fc2f4e4804": ""
    }
  }, [_c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-814e84ce-087a-4283-9e08-c914c41ddd7a": ""
    }
  }, [_c("p", {
    staticClass: "text sd",
    attrs: {
      "data-s-b5862f2d-974a-4069-8398-72830dd372a5": "",
      "data-r-0_0_1_0_1_1_b5862f2d-974a-4069-8398-72830dd372a5": ""
    }
  }, [_vm._v("01")]), _vm._v(" "), _vm._m(8), _vm._v(" "), _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-f0282e23-9495-40ef-9153-57b634611910": ""
    }
  }, [_c("p", {
    staticClass: "text sd",
    attrs: {
      "data-s-d20dd355-9671-44c9-ac72-d7c4c612e0c1": "",
      "data-r-0_2_0_1_0_1_1_d20dd355-9671-44c9-ac72-d7c4c612e0c1": ""
    }
  }, [_c("video", {
    attrs: {
      "data-v-a9aac016": "",
      width: "100%",
      autoplay: "autoplay",
      loop: "loop",
      muted: "muted"
    },
    domProps: {
      muted: true
    }
  }, [_c("source", {
    attrs: {
      "data-v-a9aac016": "",
      src: "/assets/videos/acomputer.mp4",
      type: "video/mp4"
    }
  })])])])]), _vm._v(" "), _vm._m(9), _vm._v(" "), _vm._m(10)]), _vm._m(11)])]), _vm._v(" "), _c("div", {
    staticClass: "branding--contact"
  }, [_vm._m(12), _vm._v(" "), _c("div", {
    staticClass: "fade_y on"
  }, [_c("router-link", {
    staticClass: "contactbtn fade_y on",
    attrs: {
      to: "/contact/"
    }
  }, [_vm._v("今すぐ相談してみる")])], 1)])]), _vm._v(" "), _c("Footer")], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "mv_textarea",
    attrs: {
      id: "form"
    }
  }, [_c("h2", [_c("strong", {
    staticClass: "en entxt"
  }, [_vm._v("DOCUMENT REQUEST / 資料ダウンロード")]), _vm._v(" "), _c("span", {
    staticClass: "jptxt"
  }, [_vm._v("こちらではIDENBRIDの事業に関する資料のダウンロードができます")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-02bbc519-c345-4334-95d8-54c8794e13a6": ""
    }
  }, [_c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-8c456275-d38c-4330-9861-5284c2ecf314": ""
    }
  }, [_c("img", {
    staticClass: "sd",
    attrs: {
      "data-s-5431fa2f-020d-4ebf-b26b-64990a3d6381": "",
      alt: "",
      src: "/assets/img/docment-download.png"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-eb910213-5e90-4c74-962c-99e6f7cb752c": ""
    }
  }, [_c("div", {
    staticClass: "richText sd",
    attrs: {
      "data-s-5d7bf798-6408-460a-a17b-3abceae4a8cf": ""
    }
  }, [_c("h2", {
    attrs: {
      "data-uid": "lVjvymHy",
      "data-time": ""
    }
  }, [_vm._v("IDENBRIDのサービスが3分でわかる")])]), _vm._v(" "), _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-1a3235d6-c717-41c7-ab1a-4714c7f220b5": ""
    }
  }, [_c("h2", {
    staticClass: "text sd",
    attrs: {
      "data-s-4c350f65-b9ff-40e6-b04c-3cef6dc9d38a": "",
      "data-r-0_1_0_1_0_0_1_4c350f65-b9ff-40e6-b04c-3cef6dc9d38a": ""
    }
  }, [_vm._v("無料\n                             ")]), _vm._v(" "), _c("h2", {
    staticClass: "text sd",
    attrs: {
      "data-s-6c3a9e98-c115-41d3-8327-87de3d8e3848": "",
      "data-r-1_1_0_1_0_0_1_6c3a9e98-c115-41d3-8327-87de3d8e3848": ""
    }
  }, [_vm._v("\n                                 資料をダウンロード")])]), _vm._v(" "), _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-3ce2e5a2-cf7d-48a7-94c9-24ccb7a155ca": ""
    }
  }, [_c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-fd53b6d5-1a29-41c3-b65e-03be391b0212": ""
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-e44b0b5f-e59d-4645-87b8-2a24111ea66a": ""
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "text sd",
    attrs: {
      "data-s-d408094e-7400-4e6f-90d2-dcfaebd9ec06": "",
      "data-r-1_1_0_0_1_d408094e-7400-4e6f-90d2-dcfaebd9ec06": ""
    }
  }, [_vm._v("全ての項目をご入力ください"), _c("br")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-b44f44b9-21f2-4df5-93a7-53f0aeb07100": ""
    }
  }, [_c("p", {
    staticClass: "text sd",
    attrs: {
      "data-s-5739f3dc-f3ea-4a89-9abb-661e6de01f16": "",
      "data-r-0_0_0_2_1_0_0_1_5739f3dc-f3ea-4a89-9abb-661e6de01f16": ""
    }
  }, [_vm._v("\n                                     お名前"), _c("br")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-b44f44b9-21f2-4df5-93a7-53f0aeb07100": ""
    }
  }, [_c("p", {
    staticClass: "text sd",
    attrs: {
      "data-s-5739f3dc-f3ea-4a89-9abb-661e6de01f16": "",
      "data-r-0_0_0_2_1_0_0_1_5739f3dc-f3ea-4a89-9abb-661e6de01f16": ""
    }
  }, [_vm._v("\n                                     会社名"), _c("br")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-b44f44b9-21f2-4df5-93a7-53f0aeb07100": ""
    }
  }, [_c("p", {
    staticClass: "text sd",
    attrs: {
      "data-s-5739f3dc-f3ea-4a89-9abb-661e6de01f16": "",
      "data-r-0_0_0_2_1_0_0_1_5739f3dc-f3ea-4a89-9abb-661e6de01f16": ""
    }
  }, [_vm._v("\n                                     Email"), _c("br")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("button", {
    staticClass: "button sd",
    attrs: {
      "data-s-6515d892-7269-4cdb-aa2c-63ffa4072f0b": ""
    }
  }, [_c("p", {
    staticClass: "text sd",
    attrs: {
      "data-s-0d898219-478c-43d2-b058-d1926a8d2536": "",
      "data-r-0_3_1_0_0_1_0d898219-478c-43d2-b058-d1926a8d2536": ""
    }
  }, [_vm._v("資料請求（無料）")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("p", {
    staticClass: "text sd",
    attrs: {
      "data-s-a7eb9c4b-36f0-4661-b299-7961242fd327": "",
      "data-r-1_0_1_0_1_1_a7eb9c4b-36f0-4661-b299-7961242fd327": ""
    }
  }, [_vm._v("\n                             受託開発・ラボ型"), _c("br"), _vm._v("どちらでも対応可能")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-ab163740-b698-4815-a66d-b49d8bbe6ba2": ""
    }
  }, [_c("p", {
    staticClass: "text sd",
    attrs: {
      "data-s-c83c6dec-139a-476d-82cb-498c11a1575c": "",
      "data-r-0_1_1_0_1_1_c83c6dec-139a-476d-82cb-498c11a1575c": ""
    }
  }, [_vm._v("02")]), _vm._v(" "), _c("h3", {
    staticClass: "text sd",
    attrs: {
      "data-s-37dd72c5-a053-4a6e-b2fb-2e6425306e10": "",
      "data-r-1_1_1_0_1_1_37dd72c5-a053-4a6e-b2fb-2e6425306e10": ""
    }
  }, [_vm._v("\n                             IT知識がなくても"), _c("br"), _vm._v("開発可能"), _c("br")]), _c("img", {
    staticClass: "sd",
    attrs: {
      "data-s-e860154c-014f-474a-ade9-1974f133f903": "",
      alt: "",
      src: "/assets/img/01babns.png"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "sd",
    attrs: {
      "data-s-56bb3cc6-2cfb-4030-81d8-8e2924c36099": ""
    }
  }, [_c("p", {
    staticClass: "text sd",
    attrs: {
      "data-s-a556ea1d-b257-490d-b188-1b96e82dbc21": "",
      "data-r-0_2_1_0_1_1_a556ea1d-b257-490d-b188-1b96e82dbc21": ""
    }
  }, [_vm._v("03")]), _vm._v(" "), _c("p", {
    staticClass: "text sd",
    attrs: {
      "data-s-9fae1e38-fb2b-4bfa-93ce-3c8d1edffccd": "",
      "data-r-1_2_1_0_1_1_9fae1e38-fb2b-4bfa-93ce-3c8d1edffccd": ""
    }
  }, [_vm._v("\n                             デザインから実装まで"), _c("br"), _vm._v("ワンストップで受付")]), _c("img", {
    staticClass: "sd",
    attrs: {
      "data-s-859cc6a4-4f36-4142-b069-562b48b33c8c": "",
      alt: "",
      src: "/assets/img/download02.png"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("a", {
    staticClass: "sd",
    attrs: {
      href: "#form",
      "data-s-2af694e2-d08a-446b-bf98-d310f82e8ff5": ""
    }
  }, [_c("p", {
    staticClass: "text sd",
    attrs: {
      "data-s-b459a42f-88c6-490e-b0d8-9120ea7cf040": "",
      "data-r-0_2_0_1_1_b459a42f-88c6-490e-b0d8-9120ea7cf040": ""
    }
  }, [_vm._v("まずは資料ダウンロード")]), _c("i", {
    staticClass: "icon material-icons sd",
    attrs: {
      "data-s-77c856ad-f6c9-481f-8601-a07478774b1f": ""
    }
  }, [_c("i", {
    staticClass: "fa fa-angle-right",
    attrs: {
      "aria-hidden": "true"
    }
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h3", {
    staticClass: "fade_y on"
  }, [_vm._v("IT開発：UIUXデザイン、ウェブやスマホアプリそしてクラウド構築まで"), _c("br"), _vm._v("\n    ご質問がありましたらお気軽にご相談ください。")]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/DownloadForm.vue?vue&type=style&index=0&id=37608402&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/DownloadForm.vue?vue&type=style&index=0&id=37608402&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.sd[data-s-c83c6dec-139a-476d-82cb-498c11a1575c],\n.sd[data-s-a556ea1d-b257-490d-b188-1b96e82dbc21] {\n    color: #bbbbbb;\n    font-family: var(--s-font-95b5397d);\n    font-size: 32px;\n    font-weight: 700;\n    height: auto;\n    line-height: 1.4;\n    text-align: center;\n    width: auto;\n    max-width: 100%;\n    justify-content: center;\n}\n.sd[data-s-0d898219-478c-43d2-b058-d1926a8d2536] {\n    border-radius: 0;\n    color: #FFFFFF;\n    font-family: var(--s-font-d5b4301d);\n    font-size: 18px;\n    font-weight: 700;\n    letter-spacing: 0em;\n    line-height: 1;\n    margin: 0 0 0 0;\n    opacity: 1;\n    padding: 0px 0px 0px 0px;\n    text-align: center;\n    justify-content: center;\n}\n.sd[data-s-0e16e919-25dd-47be-9410-c87b0ca48625] {\n    align-content: flex-start;\n    align-items: flex-start;\n    background: rgba(0, 0, 0, 0.0);\n    flex: none;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    height: auto;\n    justify-content: space-between;\n    margin: auto;\n    padding: 60px 10% 120px;\n    max-width: 100%;\n    margin-top: 60px;\n}\n.sd {\n    max-width: 100%;\n    z-index: 0;\n    pointer-events: all;\n    flex-wrap: nowrap;\n    -webkit-overflow-scrolling: touch;\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    align-content: center;\n    align-items: center;\n    flex: none;\n}\n.sd[data-s-02bbc519-c345-4334-95d8-54c8794e13a6] {\n    align-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.0);\n    flex: none;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    height: auto;\n    justify-content: flex-start;\n    margin: 0px 0px 0px 0px;\n    transition-delay: 0ms;\n    transition-duration: 1000ms;\n    width: 60%;\n    max-width: 60%;\n}\n.sd[data-s-8c456275-d38c-4330-9861-5284c2ecf314] {\n    align-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.0);\n    flex: none;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    height: auto;\n    justify-content: flex-start;\n    margin: 0px 0px 0px 0px;\n    transform: translate(1px, 1px);\n    width: 100%;\n    max-width: 100%;\n}\n.sd[data-s-5431fa2f-020d-4ebf-b26b-64990a3d6381] {\n    box-shadow: 0 2px 5px rgb(0 0 0 / 20%);\n    flex: none;\n    height: auto;\n    margin: 0px 31px 0px 0px;\n    width: 100%;\n    max-width: calc(100% - 31px);\n}\n.sd[data-s-0243ebae-e5d6-4323-9039-768daadc1521] {\n    align-content: flex-start;\n    align-items: flex-start;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: center;\n    padding: 0px;\n}\n.sd[data-s-2fe10181-ad99-47d9-a5bb-2653c12abff7] {\n    align-content: center;\n    align-items: center;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: center;\n    padding: 0px;\n}\n.sd[data-s-53b38df5-93d7-476b-bda6-2d568b64a54c] {\n    color: #333333;\n    font-family: var(--s-font-d5b4301d);\n    font-size: 24px;\n    font-weight: 700;\n    height: auto;\n    line-height: 1.4;\n    text-align: left;\n    text-decoration: none;\n    width: auto;\n    max-width: 100%;\n    justify-content: flex-start;\n}\n.sd[data-s-9e677be2-2318-4cc6-890a-d21b592d5278] {\n    background: #f5c019;\n    border-radius: 0;\n    flex: none;\n    height: 5px;\n    margin: -7px 0px 0px 0px;\n    opacity: 0.4;\n    width: 100%;\n    z-index: -2;\n    max-width: 100%;\n}\n.sd[data-s-1fefdbc9-e489-4b86-83d4-d02c074fee7d] {\n    align-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.0);\n    flex: none;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    height: auto;\n    justify-content: center;\n    margin: 48px 0px 0px 0px;\n    width: auto;\n    max-width: 100%;\n}\n.sd[data-s-03763973-61ce-4d2d-8b23-9ebd1668a6a7] {\n    flex: none;\n    height: auto;\n    margin: 0px 0px 0px 20px;\n    width: 242px;\n    max-width: calc(100% - 20px);\n}\n.sd[data-s-701808c5-6eb2-44bb-b181-f3f9226328db] {\n    color: #333333;\n    flex: none;\n    font-family: var(--s-font-d5b4301d);\n    font-size: 24px;\n    font-weight: 700;\n    height: auto;\n    letter-spacing: 0.15em;\n    line-height: 1.5;\n    margin: 0px 0px 0px 0px;\n    text-align: left;\n    width: auto;\n    max-width: 100%;\n    justify-content: flex-start;\n}\n.sd[data-s-52f5ada1-f2f2-4938-a67e-ed3a1ca95bfc] {\n    align-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.0);\n    border-bottom: 0px solid rgba(10, 124, 237, 0.46);\n    border-left: 0px solid rgba(10, 124, 237, 0.46);\n    border-radius: 0;\n    border-right: 0px solid rgba(10, 124, 237, 0.46);\n    border-top: 0px solid rgba(10, 124, 237, 0.46);\n    box-shadow: none;\n    display: flex;\n    flex: none;\n    height: auto;\n    justify-content: flex-start;\n    margin: 0px 0px 0px 20px;\n    opacity: 1;\n    padding: 0px 16px 0px 16px;\n    width: 40%;\n    max-width: calc(100% - 20px);\n}\n.sd[data-s-eb910213-5e90-4c74-962c-99e6f7cb752c] {\n    align-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.0);\n    flex: none;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    height: auto;\n    justify-content: center;\n    margin: -20px 0px 20px 0px;\n    width: 100%;\n    max-width: 100%;\n}\n.sd[data-s-5d7bf798-6408-460a-a17b-3abceae4a8cf] {\n    color: #333;\n    flex: none;\n    font-family: var(--s-font-d5b4301d);\n    font-size: 14px;\n    font-weight: 400;\n    height: auto;\n    line-height: 1.4;\n    padding: 0px 0px 0px;\n    text-align: left;\n    width: auto;\n    max-width: 100%;\n}\n.richText {\n    display: block;\n    word-break: break-word;\n}\n.sd[data-s-1a3235d6-c717-41c7-ab1a-4714c7f220b5] {\n    align-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.0);\n    flex: none;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    height: auto;\n    justify-content: center;\n    margin: 10px 0px 0px 0px;\n    width: auto;\n    max-width: 100%;\n}\n.sd[data-s-4c350f65-b9ff-40e6-b04c-3cef6dc9d38a] {\n    border-bottom: 3px solid #0a7ced;\n    border-left: 3px solid #0a7ced;\n    border-radius: 24px;\n    border-right: 3px solid #0a7ced;\n    border-top: 3px solid #0a7ced;\n    color: #0a7ced;\n    flex: none;\n    font-family: var(--s-font-d5b4301d);\n    font-size: 20px;\n    font-weight: 700;\n    height: auto;\n    letter-spacing: 0.05em;\n    line-height: 1;\n    margin: 0px 8px 0px 0px;\n    padding: 5px 20px 5px;\n    text-align: center;\n    width: auto;\n    max-width: calc(100% - 8px);\n    justify-content: center;\n}\n.sd[data-s-6c3a9e98-c115-41d3-8327-87de3d8e3848] {\n    color: #021839;\n    flex: none;\n    font-family: var(--s-font-d5b4301d);\n    font-size: 24px;\n    font-weight: 700;\n    height: auto;\n    letter-spacing: 0.04em;\n    line-height: 1;\n    margin: 0px 0px 0px 0px;\n    text-align: left;\n    width: auto;\n    max-width: 100%;\n    justify-content: flex-start;\n}\n.sd[data-s-3ce2e5a2-cf7d-48a7-94c9-24ccb7a155ca] {\n    align-content: center;\n    align-items: center;\n    bottom: 0px;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    justify-content: center;\n    left: auto;\n    margin: 0 0 0 0;\n    padding: 0px;\n    position: absolute;\n    right: -32px;\n    top: -4px;\n    transform: rotate(6deg);\n    z-index: -1;\n}\n.sd[data-s-fd53b6d5-1a29-41c3-b65e-03be391b0212] {\n    background: #FFFFFF;\n    border-bottom: 0px solid #00c4fb;\n    border-left: 0px solid #00c4fb;\n    border-right: 0px solid #00c4fb;\n    border-top: 0px solid #00c4fb;\n    box-shadow: 4px 4px 24px rgb(0 0 0 / 6%);\n    flex: none;\n    height: 140px;\n    width: 200px;\n    max-width: 100%;\n}\n.sd[data-s-e44b0b5f-e59d-4645-87b8-2a24111ea66a] {\n    background: #FFFFFF;\n    border-bottom: 0px solid #00c4fb;\n    border-left: 0px solid #00c4fb;\n    border-right: 0px solid #00c4fb;\n    border-top: 0px solid #00c4fb;\n    box-shadow: 4px 4px 24px rgb(0 0 0 / 6%);\n    flex: none;\n    height: 140px;\n    left: 0;\n    margin: 0 0 0 0;\n    position: absolute;\n    top: 0;\n    transform: rotate(12deg);\n    transform-origin: bottom left;\n    width: 200px;\n    max-width: 100%;\n}\n.sd[data-s-d408094e-7400-4e6f-90d2-dcfaebd9ec06] {\n    border-radius: 0;\n    color: #333333;\n    font-family: var(--s-font-d5b4301d);\n    font-size: 14px;\n    font-weight: 700;\n    letter-spacing: 0em;\n    line-height: 1.4;\n    margin: 0px 0px 0px 0px;\n    opacity: 1;\n    padding: 0px 0px 0px 0px;\n    text-align: center;\n    justify-content: center;\n}\n.sd[data-s-35332035-c140-45dd-b60a-8621c8b5808d] {\n    align-content: center;\n    align-items: center;\n    flex-wrap: nowrap;\n    justify-content: center;\n    margin: 15px 0px 0px 0px;\n    padding: 0px;\n    width: 100%;\n    max-width: 100%;\n}\n.sd[data-s-b44f44b9-21f2-4df5-93a7-53f0aeb07100] {\n    align-content: center;\n    align-items: center;\n    flex: none;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: space-between;\n    margin: 0px 0px 0px 0px;\n    padding: 0px 0px 0px 0px;\n    width: 91px;\n    max-width: 100%;\n}\n.sd[data-s-5878e812-d2f0-42ec-88de-15db7d7183ed] {\n    background: #FFFFFF;\n    border-bottom: 1px solid #d9d9d9;\n    border-left: 1px solid #d9d9d9;\n    border-radius: 4px;\n    border-right: 1px solid #d9d9d9;\n    border-top: 1px solid #d9d9d9;\n    box-shadow: none;\n    color: #333;\n    flex: 1;\n    font-family: var(--s-font-d5b4301d);\n    font-size: 14px;\n    font-weight: 500;\n    height: 40px;\n    justify-content: center;\n    letter-spacing: 0em;\n    line-height: 1.4;\n    margin: 0px 0px 0px 0px;\n    opacity: 1;\n    padding: 10px 10px 10px 10px;\n    text-align: left;\n    width: auto;\n    max-width: 100%;\n}\n.sd[data-s-96950b18-e375-45a4-8c53-565ab7b63484] {\n    align-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.0);\n    border-radius: 0;\n    flex: none;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    height: 50px;\n    justify-content: space-between;\n    margin: 0px 0px 20px 0px;\n    opacity: 1;\n    overflow-x: visible;\n    overflow-y: visible;\n    padding: 0 0 0 0;\n    width: 100%;\n    max-width: 100%;\n}\n.sd[data-s-6515d892-7269-4cdb-aa2c-63ffa4072f0b] {\n    background: var(--textcolor);\n    border-radius: 5px;\n    box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 20%);\n    color: #333;\n    flex: none;\n    font-size: 15px;\n    height: 52px;\n    justify-content: center;\n    margin: 24px 0px 0px 0px;\n    opacity: 1;\n    padding: 15px;\n    width: 100%;\n    max-width: 100%;\n}\n\n/*second-seaction*/\n.sd[data-s-696cf783-82e5-46e8-ba9c-cc3bb7d7386f] {\n    align-content: center;\n    align-items: center;\n    background: #f4f4f4;\n    flex: none;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    height: auto;\n    justify-content: flex-start;\n    margin: 0px 0px 0px 0px;\n    width: 100%;\n    max-width: 100%;\n}\n.sd[data-s-da52b47a-4058-4b2c-9bd2-b32d932d7a94] {\n    align-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.0);\n    flex: none;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    height: auto;\n    justify-content: space-between;\n    margin: 0px 0px 0px;\n    padding: 60px 32px 60px;\n    width: 1200px;\n    max-width: 100%;\n}\n.sd[data-s-5e66522a-4a6f-4642-b8eb-c760e25a2e6f] {\n    color: #333;\n    font-family: var(--s-font-d5b4301d);\n    font-size: 32px;\n    font-weight: 700;\n    height: auto;\n    letter-spacing: 0.05em;\n    line-height: 1.4;\n    text-align: center;\n    width: auto;\n    max-width: 100%;\n    justify-content: center;\n}\n.sd[data-s-9e377fd2-bb01-4a4a-b2c6-12fc2f4e4804] {\n    align-content: center;\n    align-items: center;\n    background: rgba(0, 0, 0, 0.0);\n    flex: none;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    height: 310px;\n    justify-content: center;\n    margin: 34px 0px 0px 0px;\n    width: 100%;\n    max-width: 100%;\n}\n.sd[data-s-814e84ce-087a-4283-9e08-c914c41ddd7a] {\n    align-content: center;\n    align-items: center;\n    background: #FFFFFF;\n    flex: none;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    height: 100%;\n    justify-content: flex-start;\n    margin: 0px 12px 0px;\n    padding: 16px 24px 24px;\n    width: calc(33.3% - 24px);\n    max-width: calc(33.3% - 24px)\n}\n.sd[data-s-b5862f2d-974a-4069-8398-72830dd372a5] {\n    color: #bbbbbb;\n    font-family: var(--s-font-95b5397d);\n    font-size: 32px;\n    font-weight: 700;\n    height: auto;\n    line-height: 1.4;\n    text-align: center;\n    width: auto;\n    max-width: 100%;\n    justify-content: center;\n}\n.sd.icon,\n.sd.text {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    align-content: center;\n    justify-content: center;\n    overflow: visible;\n    word-break: break-word;\n    word-wrap: anywhere;\n}\n.sd[data-s-a7eb9c4b-36f0-4661-b299-7961242fd327],\n.sd[data-s-37dd72c5-a053-4a6e-b2fb-2e6425306e10],\n.sd[data-s-9fae1e38-fb2b-4bfa-93ce-3c8d1edffccd] {\n    color: #0a7ced;\n    font-family: var(--s-font-d5b4301d);\n    font-size: 24px;\n    font-weight: 700;\n    height: auto;\n    letter-spacing: 0.05em;\n    line-height: 1.56;\n    margin: 0px 0px 0px 0px;\n    padding: 0px 0px 0px 0px;\n    text-align: center;\n    width: auto;\n    max-width: 100%;\n    justify-content: center;\n}\nsd[data-s-f0282e23-9495-40ef-9153-57b634611910] {\n    align-content: flex-end;\n    align-items: flex-end;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    justify-content: center;\n    margin: 20px 0px 0px 0px;\n    padding: 0px;\n}\n.sd[data-s-d20dd355-9671-44c9-ac72-d7c4c612e0c1] {\n    margin: 15px 0px 0px 0px;\n    width: 145px;\n    max-width: calc(100% - 8px);\n    justify-content: center;\n}\n.sd[data-s-a40c9b85-3163-4087-aa6a-a5b9961fe66d] {\n    color: #333333;\n    flex: none;\n    font-size: 200px;\n    height: 106px;\n    width: 75px;\n    max-width: 100%;\n}\n.sd[data-s-005cd78e-8c51-4108-8c2b-ac8ea213a47a] {\n    color: #0a7ced;\n    flex: none;\n    font-family: var(--s-font-d5b4301d);\n    font-size: 72px;\n    font-weight: 700;\n    height: auto;\n    letter-spacing: 0.01em;\n    line-height: 1;\n    margin: 0px 4px 0px 0px;\n    text-align: left;\n    width: auto;\n    max-width: calc(100% - 4px);\n    justify-content: flex-start;\n}\n.sd[data-s-809c75b8-7c53-4826-8434-9f2caec3986a] {\n    color: #333333;\n    font-family: var(--s-font-d5b4301d);\n    font-size: 44px;\n    font-weight: 700;\n    height: auto;\n    letter-spacing: -0.05em;\n    line-height: 1;\n    margin: 0px 0px 0px 0px;\n    text-align: left;\n    width: auto;\n    max-width: 100%;\n    justify-content: flex-start;\n}\n.sd[data-s-db4c0203-bf47-4eaa-bf80-2853b430c19d] {\n    align-content: flex-start;\n    align-items: flex-start;\n    background: rgba(0, 0, 0, 0.0);\n    flex: none;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    height: auto;\n    justify-content: center;\n    margin: 12px 0px 0px 0px;\n    width: auto;\n    max-width: 100%;\n}\n.sd[data-s-b04cb8fc-be48-455d-a276-d81e1c150ecb] {\n    align-content: flex-end;\n    align-items: flex-end;\n    background: rgba(0, 0, 0, 0.0);\n    flex: none;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    height: auto;\n    justify-content: flex-start;\n    margin: 0px 0px 0px 0px;\n    width: 100%;\n    max-width: 100%;\n}\n.sd[data-s-191e357f-d464-4c53-8878-10740a4a7eb8] {\n    color: #0a7ced;\n    font-family: var(--s-font-d5b4301d);\n    font-size: 44px;\n    font-weight: 700;\n    height: auto;\n    letter-spacing: 0.1em;\n    line-height: 1;\n    margin: 32px 0px 0px 0px;\n    padding: 0px 0px 0px 0px;\n    text-align: left;\n    width: auto;\n    max-width: 100%;\n    justify-content: flex-start;\n}\n.sd[data-s-c268f161-192e-49bc-bae5-831cd26fc413] {\n    color: #333333;\n    font-family: var(--s-font-d5b4301d);\n    font-size: 44px;\n    font-weight: 700;\n    height: auto;\n    letter-spacing: 0.1em;\n    line-height: 1;\n    margin: 32px 0px 0px 0px;\n    padding: 0px 0px 0px 0px;\n    text-align: left;\n    width: auto;\n    max-width: 100%;\n    justify-content: flex-start;\n}\n.sd[data-s-ab163740-b698-4815-a66d-b49d8bbe6ba2] {\n    align-content: center;\n    align-items: center;\n    background: #FFFFFF;\n    flex: none;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    height: 100%;\n    justify-content: flex-start;\n    margin: 0px 12px 0px;\n    padding: 16px 24px 24px;\n    width: calc(33.3% - 24px);\n    max-width: calc(33.3% - 24px);\n}\n.sd[data-s-e860154c-014f-474a-ade9-1974f133f903] {\n    flex: none;\n    height: auto;\n    margin: 20px 0px 0px 0px;\n    width: 140px;\n    max-width: 100%;\n}\n.sd[data-s-859cc6a4-4f36-4142-b069-562b48b33c8c] {\n    flex: none;\n    height: auto;\n    margin: 20px 0px 0px 0px;\n    width: 150px;\n    max-width: 100%;\n}\n.sd[data-s-56bb3cc6-2cfb-4030-81d8-8e2924c36099] {\n    align-content: center;\n    align-items: center;\n    background: #FFFFFF;\n    flex: none;\n    flex-direction: column;\n    flex-wrap: nowrap;\n    height: 100%;\n    justify-content: flex-start;\n    margin: 0px 12px 0px;\n    padding: 16px 24px 24px;\n    width: calc(33.3% - 24px);\n    max-width: calc(33.3% - 24px);\n}\n.sd[data-s-2af694e2-d08a-446b-bf98-d310f82e8ff5] {\n    align-content: center;\n    align-items: center;\n    background: var(--textcolor);\n    border-radius: 5px;\n    flex: none;\n    flex-direction: row;\n    flex-wrap: nowrap;\n    height: 52px;\n    justify-content: center;\n    margin: 60px 0px 0px 0px;\n    padding: 0px;\n    width: 382px;\n    max-width: 100%;\n}\n.sd[data-s-b459a42f-88c6-490e-b0d8-9120ea7cf040] {\n    background: rgba(0, 0, 0, 0.0);\n    border-radius: 0;\n    color: #FFFFFF;\n    flex: none;\n    font-family: var(--s-font-d5b4301d);\n    font-size: 18px;\n    font-weight: 700;\n    letter-spacing: 0.1em;\n    line-height: 2;\n    margin: 0px 8px 0px 0px;\n    padding: 0px 0px 0px 0px;\n    text-align: center;\n    width: auto;\n    max-width: calc(100% - 8px);\n    justify-content: center;\n}\n.sd[data-s-2af694e2-d08a-446b-bf98-d310f82e8ff5]:hover .sd[data-s-77c856ad-f6c9-481f-8601-a07478774b1f] {\n    transform: translate(12px, 0px);\n    transition-delay: 100ms;\n}\n.sd[data-s-2af694e2-d08a-446b-bf98-d310f82e8ff5]:hover {\n    background: #fda546;\n}\n@media screen and (max-width: 840px) {\n.sd[data-s-02bbc519-c345-4334-95d8-54c8794e13a6] {\n        flex-direction: column;\n        flex-wrap: nowrap;\n        margin: 0px 0px 0px 0px;\n        width: 100%;\n        max-width: 100%;\n}\n.sd[data-s-1fefdbc9-e489-4b86-83d4-d02c074fee7d] {\n        flex: none;\n        margin: 30px 0px 30px 0px;\n        padding: 24px 0px 24px;\n        width: 100%;\n        max-width: 100%;\n}\n.sd[data-s-0243ebae-e5d6-4323-9039-768daadc1521] {\n        justify-content: flex-start;\n        margin: 13px 0px 0px 0px;\n        width: 100%;\n}\n.sd[data-s-03763973-61ce-4d2d-8b23-9ebd1668a6a7] {\n        margin: 20px 0px 20px 0px;\n        width: 100%;\n        max-width: calc(100% - 20px);\n}\n.sd[data-s-53b38df5-93d7-476b-bda6-2d568b64a54c] {\n        font-size: 14px;\n}\n.sd[data-s-005cd78e-8c51-4108-8c2b-ac8ea213a47a] {\n        font-size: 32px;\n}\n.sd[data-s-c268f161-192e-49bc-bae5-831cd26fc413] {\n        font-size: 24px;\n        margin: 12px 0px 0px 0px;\n        max-width: 100%;\n}\n.sd[data-s-191e357f-d464-4c53-8878-10740a4a7eb8] {\n        font-size: 24px;\n        margin: 12px 0px 0px 0px;\n        max-width: 100%;\n}\n.sd[data-s-5431fa2f-020d-4ebf-b26b-64990a3d6381] {\n        flex: none;\n        height: auto;\n        margin: 0px 24px 0px 0px;\n        width: 100%;\n        max-width: calc(100% - 24px);\n}\n.sd[data-s-c0b9c0e0-8df5-464b-be90-970932b4cfd2] {\n        display: none;\n        margin: 0px 20px 0px;\n        width: calc(40% - 40px);\n        max-width: calc(40% - 40px);\n        height: 100%;\n}\n.sd[data-s-814e84ce-087a-4283-9e08-c914c41ddd7a] {\n        margin: 0px 0px 0px;\n        width: 100%;\n        max-width: 100%;\n        height: 100%;\n}\n.sd[data-s-ab163740-b698-4815-a66d-b49d8bbe6ba2] {\n        margin: 24px 0px 0px;\n        width: 100%;\n        max-width: 100%;\n        height: 100%;\n}\n.sd[data-s-56bb3cc6-2cfb-4030-81d8-8e2924c36099] {\n        margin: 24px 0px 0px;\n        width: 100%;\n        max-width: 100%;\n        height: 100%;\n}\n.sd[data-s-52f5ada1-f2f2-4938-a67e-ed3a1ca95bfc] {\n        display: flex;\n        flex: none;\n        height: auto;\n        margin: 24px 0px 0px 0px;\n        padding: 0px 0px 0px 0px;\n        width: 100%;\n        max-width: 100%;\n}\n.sd[data-s-1a4a5300-0cd5-4afe-a17a-85b7fccad9e6] {\n        flex-direction: column;\n}\n.sd[data-s-8c456275-d38c-4330-9861-5284c2ecf314] {\n        flex-direction: column;\n}\n.sd[data-s-0e16e919-25dd-47be-9410-c87b0ca48625] {\n        flex-direction: column;\n        padding: 0px 5% 120px;\n        margin-top: 40px;\n}\n.sd[data-s-1fefdbc9-e489-4b86-83d4-d02c074fee7d] {\n        flex-direction: column;\n}\n.sd[data-s-9e377fd2-bb01-4a4a-b2c6-12fc2f4e4804] {\n        flex-direction: column;\n        height: 100%;\n}\n.sd[data-s-a7eb9c4b-36f0-4661-b299-7961242fd327],\n    .sd[data-s-37dd72c5-a053-4a6e-b2fb-2e6425306e10],\n    .sd[data-s-9fae1e38-fb2b-4bfa-93ce-3c8d1edffccd] {\n        font-size: 20px;\n}\n}\n@media only screen and (max-width: 1185px) and (min-width: 840px) {\n.sd[data-s-005cd78e-8c51-4108-8c2b-ac8ea213a47a] {\n        font-size: 40px;\n}\n.sd[data-s-c268f161-192e-49bc-bae5-831cd26fc413] {\n        font-size: 28px;\n}\n.sd[data-s-191e357f-d464-4c53-8878-10740a4a7eb8] {\n        font-size: 22px;\n}\n.sd[data-s-53b38df5-93d7-476b-bda6-2d568b64a54c] {\n        font-size: 18px;\n}\n.sd[data-s-03763973-61ce-4d2d-8b23-9ebd1668a6a7] {\n        width: 180px;\n}\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/DownloadForm.vue?vue&type=style&index=0&id=37608402&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/DownloadForm.vue?vue&type=style&index=0&id=37608402&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadForm_vue_vue_type_style_index_0_id_37608402_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DownloadForm.vue?vue&type=style&index=0&id=37608402&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/DownloadForm.vue?vue&type=style&index=0&id=37608402&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadForm_vue_vue_type_style_index_0_id_37608402_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadForm_vue_vue_type_style_index_0_id_37608402_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/pages/DownloadForm.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/pages/DownloadForm.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DownloadForm_vue_vue_type_template_id_37608402___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DownloadForm.vue?vue&type=template&id=37608402& */ "./resources/js/components/pages/DownloadForm.vue?vue&type=template&id=37608402&");
/* harmony import */ var _DownloadForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DownloadForm.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/DownloadForm.vue?vue&type=script&lang=js&");
/* harmony import */ var _DownloadForm_vue_vue_type_style_index_0_id_37608402_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DownloadForm.vue?vue&type=style&index=0&id=37608402&lang=css& */ "./resources/js/components/pages/DownloadForm.vue?vue&type=style&index=0&id=37608402&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DownloadForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DownloadForm_vue_vue_type_template_id_37608402___WEBPACK_IMPORTED_MODULE_0__.render,
  _DownloadForm_vue_vue_type_template_id_37608402___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/DownloadForm.vue"
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

/***/ "./resources/js/components/pages/DownloadForm.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/pages/DownloadForm.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DownloadForm.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/DownloadForm.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadForm_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/pages/DownloadForm.vue?vue&type=template&id=37608402&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/pages/DownloadForm.vue?vue&type=template&id=37608402& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadForm_vue_vue_type_template_id_37608402___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadForm_vue_vue_type_template_id_37608402___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadForm_vue_vue_type_template_id_37608402___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DownloadForm.vue?vue&type=template&id=37608402& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/DownloadForm.vue?vue&type=template&id=37608402&");


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

/***/ "./resources/js/components/pages/DownloadForm.vue?vue&type=style&index=0&id=37608402&lang=css&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/components/pages/DownloadForm.vue?vue&type=style&index=0&id=37608402&lang=css& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DownloadForm_vue_vue_type_style_index_0_id_37608402_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DownloadForm.vue?vue&type=style&index=0&id=37608402&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/DownloadForm.vue?vue&type=style&index=0&id=37608402&lang=css&");


/***/ })

}]);