"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_works_WorkDetail_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/works/WorkDetail.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/works/WorkDetail.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  data: function data() {
    return {
      loading: false,
      work: '',
      latest_works: []
    };
  },
  mounted: function mounted() {},
  metaInfo: function metaInfo() {
    return {
      title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | 仕事実績詳細",
      meta: [{
        vmid: "description",
        name: "description",
        content: "アイデンブリッド社がこれまでに担当した案件の一部を紹介致します。フロントエンドの実装はReact JS、Vue JS、HTML、BootStrap、jQueryを主軸とし、バックエンド・API開発はLaravel(PHP)、Node JS、Pythonを基本に開発を行なっています。CMSではWordPress（ワードプレス）を用いて実装を行うこともあり、プラグインの開発に特化した案件もございます。スマホアプリではFultter(Dart)でフロント実装を行い、サーバー周りはGCPまたはAWSを用いています。"
      }]
    };
  },
  created: function created() {
    var _this = this;
    this.loading = true;
    axios.get('/api/work-detail/' + this.$route.params.id).then(function (res) {
      _this.work = res.data.work;
      _this.latest_works = res.data.latest_works;
    })["catch"](function (err) {});
    setTimeout(function () {
      _this.loading = false;
    }, 1000);
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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/works/WorkDetail.vue?vue&type=template&id=852c8cf6&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/works/WorkDetail.vue?vue&type=template&id=852c8cf6&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_vm.loading ? _c("div", {
    staticClass: "preloader"
  }, [_vm._m(0)]) : _vm._e(), _vm._v(" "), _c("Navbar"), _vm._v(" "), _c("main", [_c("div", {
    staticClass: "mycontents-wide"
  }, [_c("img", {
    staticClass: "thumbnail",
    attrs: {
      src: "http://admin.idenbrid.jp/public/storage/work_images/" + _vm.work.image,
      alt: "",
      loading: "lazy"
    }
  })]), _vm._v(" "), _c("section", {
    staticClass: "work-text mycontents-wide"
  }, [_c("h2", {
    staticClass: "subcontent-title subcontent-title_about"
  }, [_vm._v(_vm._s(_vm.work.company))]), _vm._v(" "), _c("p", {
    staticClass: "work-text__category"
  }, [_c("a", {
    attrs: {
      rel: "tag"
    }
  }, [_vm._v(_vm._s(_vm.work.title))])]), _vm._v(" "), _c("p", {
    staticClass: "work-text__tags"
  }, [_vm._v("\n                    " + _vm._s(_vm.work.content) + "\n                ")]), _vm._v(" "), _c("div", {
    staticClass: "work-text__about",
    domProps: {
      innerHTML: _vm._s(_vm.work.description)
    }
  })]), _vm._v(" "), _c("section", {
    staticClass: "work mycontents-wide"
  }, [_c("h2", {
    staticClass: "subcontent-title subcontent-title_about",
    attrs: {
      "data-v-f008eaba": ""
    }
  }, [_vm._v("その他のプロジェクト ")]), _vm._v(" "), _c("ul", {
    staticClass: "work-contents"
  }, _vm._l(_vm.latest_works, function (work) {
    return _c("li", {
      key: work.id,
      staticClass: "work-contents__list"
    }, [_c("router-link", {
      attrs: {
        to: "/work/detail/" + work.id + "/"
      }
    }, [_c("img", {
      staticClass: "work-contents__list__thumbnail",
      attrs: {
        src: "http://admin.idenbrid.jp/public/storage/work_images/" + work.image,
        alt: "",
        loading: "lazy"
      }
    }), _vm._v(" "), _c("p", {
      staticClass: "work-contents__list__company"
    }, [_vm._v(_vm._s(work.company))]), _vm._v(" "), _c("p", {
      staticClass: "work-contents__list__title"
    }, [_vm._v(_vm._s(work.title))]), _vm._v(" "), _c("p", {
      staticClass: "work-contents__list__tags"
    }, [_vm._v(_vm._s(work.content))])])], 1);
  }), 0), _vm._v(" "), _c("router-link", {
    staticClass: "viewmore-btn viewmore-btn_center",
    attrs: {
      to: "/works/"
    }
  }, [_vm._v("View More\n                        ")])], 1), _vm._v(" "), _c("section", {
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
      src: "/public/assets/img/icons/Policy-icon.svg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "menu-contents__list__text"
  }, [_c("p", {
    staticClass: "menu-contents__list__subtitle"
  }, [_vm._v("経営理念")]), _vm._v(" "), _c("h4", {
    staticClass: "menu-contents__list__title"
  }, [_vm._v("Policy")])])])], 1), _vm._v(" "), _c("li", {
    staticClass: "menu-contents__list"
  }, [_c("router-link", {
    attrs: {
      to: "/blog/"
    }
  }, [_c("img", {
    staticClass: "menu-contents__list__thumbnail menu-contents__list__thumbnail_news",
    attrs: {
      src: "/public/assets/img/icons/Bussines-icon.svg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "menu-contents__list__text"
  }, [_c("p", {
    staticClass: "menu-contents__list__subtitle"
  }, [_vm._v("事業紹介")]), _vm._v(" "), _c("h4", {
    staticClass: "menu-contents__list__title"
  }, [_vm._v("Business")])])])], 1), _vm._v(" "), _c("li", {
    staticClass: "menu-contents__list"
  }, [_c("router-link", {
    attrs: {
      to: "/onlinedevelopmenthub/"
    }
  }, [_c("img", {
    staticClass: "menu-contents__list__thumbnail",
    attrs: {
      src: "/public/assets/img/icons/Company-icon.svg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "menu-contents__list__text"
  }, [_c("p", {
    staticClass: "menu-contents__list__subtitle"
  }, [_vm._v("会社概要")]), _vm._v(" "), _c("h4", {
    staticClass: "menu-contents__list__title"
  }, [_vm._v("Company")])])])], 1)])])]), _vm._v(" "), _c("Footer")], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "ddback"
  }, [_c("div", {
    staticClass: "loader"
  }, [_c("div", {
    staticClass: "loader-inner box-1"
  }), _vm._v(" "), _c("div", {
    staticClass: "loader-inner box-2"
  }), _vm._v(" "), _c("div", {
    staticClass: "loader-inner box-3"
  }), _vm._v(" "), _c("div", {
    staticClass: "loader-inner box-4"
  }), _vm._v(" "), _c("div", {
    staticClass: "loader-inner box-5"
  }), _vm._v(" "), _c("div", {
    staticClass: "loader-inner box-6"
  }), _vm._v(" "), _c("div", {
    staticClass: "loader-inner box-7"
  }), _vm._v(" "), _c("div", {
    staticClass: "loader-inner box-8"
  }), _vm._v(" "), _c("div", {
    staticClass: "loader-inner box-9"
  }), _vm._v(" "), _c("div", {
    staticClass: "loader-inner box-10"
  }), _vm._v(" "), _c("div", {
    staticClass: "loader-inner box-11"
  }), _vm._v(" "), _c("div", {
    staticClass: "loader-inner box-12"
  })])]);
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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/works/WorkDetail.vue?vue&type=style&index=0&id=852c8cf6&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/works/WorkDetail.vue?vue&type=style&index=0&id=852c8cf6&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n    /*works*/\n.thumbnail[data-v-852c8cf6] {\n        display: block;\n        margin: 150px auto 60px auto;\n        width: 100%;\n        max-width: 660px;\n}\n@media (max-width: 767px) {\n.thumbnail[data-v-852c8cf6] {\n            margin-top: 73px;\n            margin-bottom: 50px;\n}\n}\n\n    /*works-pc*/\n.works-pc[data-v-852c8cf6] {\n        display: flex;\n        justify-content: space-between;\n        margin-bottom: 60px;\n}\n.works-pc img[data-v-852c8cf6] {\n        -o-object-fit: cover;\n           object-fit: cover;\n}\n.work-text__category a[data-v-852c8cf6] {\n        margin-bottom: 20px;\n        margin-right: 32px;\n        display: inline-block;\n        min-width: 150px;\n        height: 40px;\n        background: var(--textcolor);\n        color: #fff;\n        border-radius: 30px;\n        text-align: center;\n        font-weight: bold;\n        font-size: 14px;\n        line-height: 40px;\n        pointer-events: none;\n        padding: 0px 20px;\n}\n.work-text__tags[data-v-852c8cf6] {\n        margin-bottom: 20px;\n        font-weight: bold;\n        font-size: 14px;\n        line-height: 21px;\n        color: #727171;\n}\n.work-text__url[data-v-852c8cf6] {\n        padding-left: 30px;\n        position: relative;\n        display: inline-block;\n        font-weight: 500;\n        font-size: 14px;\n        line-height: 21px;\n        color: var(--textcolor);\n}\n.work-text__url img[data-v-852c8cf6] {\n        position: absolute;\n        top: -1px;\n        left: 0;\n}\n.work-text__about[data-v-852c8cf6] {\n        margin-bottom: 60px;\n        font-weight: 500;\n        font-size: 16px;\n        line-height: 24px;\n        color: var(--textcolor);\n}\n.works-pc__img1[data-v-852c8cf6],\n    .works-pc__right[data-v-852c8cf6] {\n        width: calc((100% - 60px) / 2);\n}\n.works-pc__img2[data-v-852c8cf6],\n    .works-pc__img3[data-v-852c8cf6] {\n        width: 100%;\n}\n.works-pc__img2[data-v-852c8cf6] {\n        margin-bottom: 60px;\n}\n\n    /*ãŒãã†sp*/\n.works-sp[data-v-852c8cf6] {\n        padding-top: 60px;\n        padding-bottom: 60px;\n        background-color: #f6f6f6;\n}\n.works-sp img[data-v-852c8cf6] {\n        -o-object-fit: cover;\n           object-fit: cover;\n}\n.works-sp__contents[data-v-852c8cf6] {\n        display: flex;\n        justify-content: space-between;\n}\n.works-sp__list[data-v-852c8cf6] {\n        width: calc((100% - 65px * 2) / 3);\n}\n.works-sp__img[data-v-852c8cf6] {\n        width: 100%;\n}\n@media (max-width: 767px) {\n.subcontent-title_about[data-v-852c8cf6] {\n            margin-bottom: 20px;\n}\n.work-text__category a[data-v-852c8cf6] {\n            margin-right: 20px;\n            height: 34px;\n            min-width: 130px;\n            font-size: 13px;\n            line-height: 34px;\n}\n.work-text__tags[data-v-852c8cf6] {\n            font-size: 13px;\n            line-height: 19px;\n}\n.work-text__url[data-v-852c8cf6] {\n            margin-bottom: 30px;\n}\n.work-text__about[data-v-852c8cf6] {\n            font-size: 13px;\n            line-height: 19px;\n            margin-bottom: 30px;\n}\n.works-pc__img1[data-v-852c8cf6],\n        .works-pc__right[data-v-852c8cf6] {\n            width: calc((100% - 8px) / 2);\n}\n.works-pc[data-v-852c8cf6] {\n            margin-bottom: 30px;\n}\n.works-sp[data-v-852c8cf6] {\n            padding-top: 30px;\n            padding-bottom: 30px;\n}\n.works-sp__list[data-v-852c8cf6] {\n            width: calc((100% - 6px * 2) / 3);\n}\n}\n\n    /*workæœ€è¿‘ã®å®Ÿç¸¾*/\n.work[data-v-852c8cf6] {\n        margin-top: 60px;\n        margin-bottom: 120px;\n}\n.subcontent-title_works[data-v-852c8cf6] {\n        margin-bottom: 110px;\n}\n.work-contents[data-v-852c8cf6] {\n        display: flex;\n        justify-content: space-between;\n        margin-bottom: 80px;\n}\n.work-contents__list[data-v-852c8cf6] {\n        width: calc((100% - 65px * 2) / 3);\n}\n@media (max-width: 767px) {\n.work[data-v-852c8cf6] {\n            margin-bottom: 60px;\n}\n.subcontent-title_works[data-v-852c8cf6] {\n            margin-bottom: 30px;\n}\n.work-contents[data-v-852c8cf6] {\n            margin-bottom: 0;\n            padding-bottom: 30px;\n            margin-bottom: 60px;\n            margin-top: -20px;\n            overflow-x: scroll;\n            width: 100vw;\n            margin-left: calc(var(--content-padding-side-sp) * -1);\n}\n.work-contents__list[data-v-852c8cf6] {\n            margin-top: 20px;\n            min-width: 230px;\n            margin-left: 30px;\n}\n}\n.work-contents__list[data-v-852c8cf6] {\n    background: #FFFFFF;\n    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);\n    border-radius: 10px;\n    transition: 1s;\n    transition-property: transform;\n}\n.work-contents__list[data-v-852c8cf6]:hover {\n    transform: scale(1.05);\n}\n.work-contents__list__thumbnail[data-v-852c8cf6] {\n    width: 100%;\n}\n.work-contents__list__company[data-v-852c8cf6] {\n    margin: 20px auto 5px 20px;\n    font-weight: bold;\n    font-size: 14px;\n    line-height: 21px;\n}\n.work-contents__list__title[data-v-852c8cf6] {\n    margin-bottom: 5px;\n    margin-left: 20px;\n    font-weight: bold;\n    font-size: 16px;\n    line-height: 24px;\n}\n.work-contents__list__tags[data-v-852c8cf6] {\n    margin-left: 20px;\n    padding-bottom: 14px;\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 21px;\n    color: #727171;\n}\n@media (max-width: 767px) {\n.work-contents__list__thumbnail[data-v-852c8cf6] {\n        margin-bottom: 12px;\n}\n.work-contents__list__company[data-v-852c8cf6] {\n        margin: 0 12px 5px 12px;\n        font-size: 14px;\n        line-height: 21px;\n}\n.work-contents__list__title[data-v-852c8cf6] {\n        margin: 0 12px 12px 12px;\n        font-size: 15px;\n        line-height: 22px;\n}\n.work-contents__list__tags[data-v-852c8cf6] {\n        margin: 0 12px;\n        padding-bottom: 12px;\n        font-size: 13px;\n        line-height: 19px;\n}\n}\n\n/*work*/\n.work[data-v-852c8cf6] {\n    margin-bottom: 120px;\n}\n.work-contents[data-v-852c8cf6] {\n    display: flex;\n    margin-bottom: 40px;\n    flex-wrap: wrap;\n}\n.work-contents__list[data-v-852c8cf6] {\n    width: calc((100% - 65px * 2) / 3);\n    margin-bottom: 60px;\n    margin-left: 65px;\n}\n.work-contents .work-contents__list[data-v-852c8cf6]:nth-child(3n + 1){\n    margin-left: 0;\n}\n@media (max-width: 767px) {\n.work[data-v-852c8cf6] {\n        margin-bottom: 60px;\n}\n.work-contents[data-v-852c8cf6]{\n        margin-bottom: 20px;\n}\n.work-contents .work-contents__list[data-v-852c8cf6]:nth-child(2n){\n        margin-left: 35px;\n}\n.work-contents .work-contents__list[data-v-852c8cf6]:nth-child(2n + 1){\n        margin-left: 0;\n}\n.work-contents__list[data-v-852c8cf6] {\n        width: calc((100% - 35px) / 2);\n        margin-bottom: 30px;\n}\n}\n@media (max-width: 500px) {\n.work-contents[data-v-852c8cf6] {\n        display: block;\n}\n.work-contents__list[data-v-852c8cf6] {\n        width: 100%;\n        margin-bottom: 30px;\n        margin-left: 0 !important;\n}\n}\n", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/works/WorkDetail.vue?vue&type=style&index=0&id=852c8cf6&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/works/WorkDetail.vue?vue&type=style&index=0&id=852c8cf6&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkDetail_vue_vue_type_style_index_0_id_852c8cf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkDetail.vue?vue&type=style&index=0&id=852c8cf6&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/works/WorkDetail.vue?vue&type=style&index=0&id=852c8cf6&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkDetail_vue_vue_type_style_index_0_id_852c8cf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkDetail_vue_vue_type_style_index_0_id_852c8cf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/pages/works/WorkDetail.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/pages/works/WorkDetail.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _WorkDetail_vue_vue_type_template_id_852c8cf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WorkDetail.vue?vue&type=template&id=852c8cf6&scoped=true& */ "./resources/js/components/pages/works/WorkDetail.vue?vue&type=template&id=852c8cf6&scoped=true&");
/* harmony import */ var _WorkDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WorkDetail.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/works/WorkDetail.vue?vue&type=script&lang=js&");
/* harmony import */ var _WorkDetail_vue_vue_type_style_index_0_id_852c8cf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WorkDetail.vue?vue&type=style&index=0&id=852c8cf6&scoped=true&lang=css& */ "./resources/js/components/pages/works/WorkDetail.vue?vue&type=style&index=0&id=852c8cf6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WorkDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WorkDetail_vue_vue_type_template_id_852c8cf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _WorkDetail_vue_vue_type_template_id_852c8cf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "852c8cf6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/works/WorkDetail.vue"
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

/***/ "./resources/js/components/pages/works/WorkDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/pages/works/WorkDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/works/WorkDetail.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/pages/works/WorkDetail.vue?vue&type=template&id=852c8cf6&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/pages/works/WorkDetail.vue?vue&type=template&id=852c8cf6&scoped=true& ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkDetail_vue_vue_type_template_id_852c8cf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkDetail_vue_vue_type_template_id_852c8cf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkDetail_vue_vue_type_template_id_852c8cf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkDetail.vue?vue&type=template&id=852c8cf6&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/works/WorkDetail.vue?vue&type=template&id=852c8cf6&scoped=true&");


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

/***/ "./resources/js/components/pages/works/WorkDetail.vue?vue&type=style&index=0&id=852c8cf6&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/pages/works/WorkDetail.vue?vue&type=style&index=0&id=852c8cf6&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WorkDetail_vue_vue_type_style_index_0_id_852c8cf6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./WorkDetail.vue?vue&type=style&index=0&id=852c8cf6&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/works/WorkDetail.vue?vue&type=style&index=0&id=852c8cf6&scoped=true&lang=css&");


/***/ })

}]);