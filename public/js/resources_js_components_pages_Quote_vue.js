"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Quote_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Quote.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Quote.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _layout_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout/Navbar.vue */ "./resources/js/components/layout/Navbar.vue");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      record: {
        step_1: '',
        step_2: '',
        step_3: '',
        step_4: [],
        step_5: '',
        step_6: '',
        step_7: '',
        project_name: '',
        name: '',
        email: '',
        phone: ''
      },
      options: ['ウェブアプリ・システム', 'モバイルアプリ', 'システム設計', 'UIUXデザイン', 'バックエンド・API', 'フロントエンド', 'DevOps', 'ブロックチェーン', 'データエンジニア', 'サイバーセキュリティー', 'ECサイト', 'API結合', 'AI（人工知能）', 'QA・テスト', 'その他', '']
    };
  },
  components: {
    Navbar: _layout_Navbar_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    Multiselect: (vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default())
  },
  methods: {
    saveRequest: function saveRequest(id) {
      var _this = this;
      axios.post("/api/submit-quotation", this.record).then(function (res) {
        if (res.data.success == true) {
          alert('近日中にご連絡いたします。ありがとうございました。');
          _this.record = {
            step_1: '',
            step_2: '',
            step_3: '',
            step_4: [],
            step_5: '',
            step_6: '',
            step_7: '',
            project_name: '',
            name: '',
            email: '',
            phone: ''
          };
        }
      })["catch"](function (err) {
        alert('全ての項目をご記入ください。');
      });
    }
  },
  mounted: function mounted() {
    window.setTimeout(function () {
      jQuery(document).ready(function () {
        var current_fs, next_fs, previous_fs; //fieldsets
        var opacity;
        var current = 1;
        var steps = jQuery("fieldset").length;
        jQuery(".next").click(function () {
          current_fs = jQuery(this).parent();
          next_fs = jQuery(this).parent().next();
          //show the next fieldset
          next_fs.show();
          //hide the current fieldset with style
          current_fs.animate({
            opacity: 0
          }, {
            step: function step(now) {
              // for making fielset appear animation
              opacity = 1 - now;
              current_fs.css({
                'display': 'none',
                'position': 'relative'
              });
              next_fs.css({
                'opacity': opacity
              });
            },
            duration: 500
          });
        });
        jQuery(".previous").click(function () {
          current_fs = jQuery(this).parent();
          previous_fs = jQuery(this).parent().prev();

          //show the previous fieldset
          previous_fs.show();

          //hide the current fieldset with style
          current_fs.animate({
            opacity: 0
          }, {
            step: function step(now) {
              // for making fielset appear animation
              opacity = 1 - now;
              current_fs.css({
                'display': 'none',
                'position': 'relative'
              });
              previous_fs.css({
                'opacity': opacity
              });
            },
            duration: 500
          });
        });

        // jQuery(".submit").click(function () {
        //     return false;
        // })
      });
    }, 1000);
  },
  metaInfo: function metaInfo() {
    return {
      title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | お見積もり",
      meta: [{
        vmid: "description",
        name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
        content: "アイデンブリッド社がこれまでに担当した案件の一部を紹介致します。フロントエンドの実装はReact JS、Vue JS、HTML、BootStrap、jQueryを主軸とし、バックエンド・API開発はLaravel(PHP)、Node JS、Pythonを基本に開発を行なっています。CMSではWordPress（ワードプレス）を用いて実装を行うこともあり、プラグインの開発に特化した案件もございます。スマホアプリではFultter(Dart)でフロント実装を行い、サーバー周りはGCPまたはAWSを用いています。"
      }]
    };
  }
});

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Quote.vue?vue&type=template&id=33b85a54&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Quote.vue?vue&type=template&id=33b85a54&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("Navbar"), _vm._v(" "), _c("main", [_c("div", {
    staticClass: "eXkYNB"
  }, [_c("div", {
    staticClass: "container position-relative"
  }, [_c("div", {}, [_c("div", {
    staticClass: "step-form-card"
  }, [_c("form", {
    attrs: {
      id: "msform"
    }
  }, [_c("fieldset", [_c("div", {
    staticClass: "form-card"
  }, [_vm._m(0), _vm._v(" "), _c("ul", {
    staticClass: "my-4"
  }, [_c("li", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_1,
      expression: "record.step_1"
    }],
    attrs: {
      type: "radio",
      id: "new-project",
      value: "New project",
      name: "selector2"
    },
    domProps: {
      checked: _vm._q(_vm.record.step_1, "New project")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.record, "step_1", "New project");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "new-project"
    }
  }, [_vm._v("新規開発プロジェクト\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "check"
  })]), _vm._v(" "), _c("li", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_1,
      expression: "record.step_1"
    }],
    attrs: {
      type: "radio",
      id: "current-project",
      value: "Current project that needs more developers",
      name: "selector2"
    },
    domProps: {
      checked: _vm._q(_vm.record.step_1, "Current project that needs more developers")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.record, "step_1", "Current project that needs more developers");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "current-project"
    }
  }, [_vm._v("現在進行形プロジェクトの追加エンジニア人材\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "check"
  })]), _vm._v(" "), _c("li", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_1,
      expression: "record.step_1"
    }],
    attrs: {
      type: "radio",
      id: "consultancy",
      value: "Consultancy, code review, or debugging",
      name: "selector2"
    },
    domProps: {
      checked: _vm._q(_vm.record.step_1, "Consultancy, code review, or debugging")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.record, "step_1", "Consultancy, code review, or debugging");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "consultancy"
    }
  }, [_vm._v("コンサルティング・コードレビュー・バグ直し\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "check"
  })]), _vm._v(" "), _c("li", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_1,
      expression: "record.step_1"
    }],
    attrs: {
      type: "radio",
      id: "something-else",
      value: "Something else",
      name: "selector2"
    },
    domProps: {
      checked: _vm._q(_vm.record.step_1, "Something else")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.record, "step_1", "Something else");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "something-else"
    }
  }, [_vm._v("その他\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "check"
  })])])]), _vm._v(" "), _c("input", {
    staticClass: "next action-button",
    attrs: {
      disabled: _vm.record.step_1 == "",
      type: "button",
      name: "next",
      value: "次へ"
    }
  })]), _vm._v(" "), _c("fieldset", [_c("div", {
    staticClass: "form-card mb-4"
  }, [_vm._m(1), _vm._v(" "), _c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_2,
      expression: "record.step_2"
    }],
    staticClass: "form-textfield",
    attrs: {
      placeholder: "例：現在社内にて新規ECサイトの構築を検討しており、クラウドをベースにしたサイト及びモバイルアプリをiOSのみ開発したいのですが、期間と費用を教えて欲しいです。",
      name: "",
      rows: "8",
      cols: "90"
    },
    domProps: {
      value: _vm.record.step_2
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.record, "step_2", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("input", {
    staticClass: "previous action-button-previous",
    attrs: {
      type: "button",
      name: "previous",
      value: "戻る"
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "next action-button",
    attrs: {
      disabled: _vm.record.step_2 == "",
      type: "button",
      name: "next",
      value: "次へ"
    }
  })]), _vm._v(" "), _c("fieldset", [_c("div", {
    staticClass: "form-card"
  }, [_vm._m(2), _vm._v(" "), _c("ul", {
    staticClass: "my-4"
  }, [_c("li", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_3,
      expression: "record.step_3"
    }],
    attrs: {
      value: "As Soon As Possible",
      type: "radio",
      id: "as-soon",
      name: "selector2"
    },
    domProps: {
      checked: _vm._q(_vm.record.step_3, "As Soon As Possible")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.record, "step_3", "As Soon As Possible");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "as-soon"
    }
  }, [_vm._v("なるべくすぐに\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "check"
  })]), _vm._v(" "), _c("li", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_3,
      expression: "record.step_3"
    }],
    attrs: {
      value: "In 2-4 weeks",
      type: "radio",
      id: "in-weeks",
      name: "selector2"
    },
    domProps: {
      checked: _vm._q(_vm.record.step_3, "In 2-4 weeks")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.record, "step_3", "In 2-4 weeks");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "in-weeks"
    }
  }, [_vm._v("2 - 4週間以内に着手\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "check"
  })]), _vm._v(" "), _c("li", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_3,
      expression: "record.step_3"
    }],
    attrs: {
      value: "No rush",
      type: "radio",
      id: "no-rush",
      name: "selector2"
    },
    domProps: {
      checked: _vm._q(_vm.record.step_3, "No rush")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.record, "step_3", "No rush");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "no-rush"
    }
  }, [_vm._v("時期は未定\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "check"
  })])])]), _vm._v(" "), _c("input", {
    staticClass: "previous action-button-previous",
    attrs: {
      type: "button",
      name: "previous",
      value: "戻る"
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "next action-button",
    attrs: {
      disabled: _vm.record.step_3 == "",
      type: "button",
      name: "next",
      value: "次へ"
    }
  })]), _vm._v(" "), _c("fieldset", [_c("div", {
    staticClass: "form-card mb-4"
  }, [_vm._m(3), _vm._v(" "), _c("div", {
    staticClass: "new-developer-form"
  }, [_c("div", {
    staticClass: "my-4"
  }, [_c("div", {
    staticClass: "checkbox-grid"
  }, [_c("div", {
    attrs: {
      id: "inputPreview"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_4,
      expression: "record.step_4"
    }],
    staticClass: "css-checkbox",
    attrs: {
      name: "cssCheckbox",
      value: "ウェブアプリ・システム",
      id: "demo_opt_1",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.record.step_4) ? _vm._i(_vm.record.step_4, "ウェブアプリ・システム") > -1 : _vm.record.step_4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.record.step_4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "ウェブアプリ・システム",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.record, "step_4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.record, "step_4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.record, "step_4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "demo_opt_1"
    }
  }, [_vm._v("ウェブアプリ・システム")])]), _vm._v(" "), _c("div", {
    attrs: {
      id: "inputPreview"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_4,
      expression: "record.step_4"
    }],
    staticClass: "css-checkbox",
    attrs: {
      name: "cssCheckbox",
      value: "フロントエンド",
      id: "demo_opt_2",
      type: "checkbox",
      checked: ""
    },
    domProps: {
      checked: Array.isArray(_vm.record.step_4) ? _vm._i(_vm.record.step_4, "フロントエンド") > -1 : _vm.record.step_4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.record.step_4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "フロントエンド",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.record, "step_4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.record, "step_4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.record, "step_4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "demo_opt_2"
    }
  }, [_vm._v("フロントエンド")])]), _vm._v(" "), _c("div", {
    attrs: {
      id: "inputPreview"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_4,
      expression: "record.step_4"
    }],
    staticClass: "css-checkbox",
    attrs: {
      name: "cssCheckbox",
      value: "ECサイト",
      id: "demo_opt_3",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.record.step_4) ? _vm._i(_vm.record.step_4, "ECサイト") > -1 : _vm.record.step_4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.record.step_4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "ECサイト",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.record, "step_4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.record, "step_4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.record, "step_4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "demo_opt_3"
    }
  }, [_vm._v("ECサイト")])])]), _vm._v(" "), _c("div", {
    staticClass: "checkbox-grid"
  }, [_c("div", {
    attrs: {
      id: "inputPreview"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_4,
      expression: "record.step_4"
    }],
    staticClass: "css-checkbox",
    attrs: {
      name: "cssCheckbox",
      value: "モバイルアプリ",
      id: "demo_opt_4",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.record.step_4) ? _vm._i(_vm.record.step_4, "モバイルアプリ") > -1 : _vm.record.step_4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.record.step_4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "モバイルアプリ",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.record, "step_4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.record, "step_4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.record, "step_4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "demo_opt_4"
    }
  }, [_vm._v("モバイルアプリ")])]), _vm._v(" "), _c("div", {
    attrs: {
      id: "inputPreview"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_4,
      expression: "record.step_4"
    }],
    staticClass: "css-checkbox",
    attrs: {
      name: "cssCheckbox",
      value: "ブロックチェーン",
      id: "demo_opt_5",
      type: "checkbox",
      checked: ""
    },
    domProps: {
      checked: Array.isArray(_vm.record.step_4) ? _vm._i(_vm.record.step_4, "ブロックチェーン") > -1 : _vm.record.step_4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.record.step_4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "ブロックチェーン",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.record, "step_4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.record, "step_4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.record, "step_4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "demo_opt_5"
    }
  }, [_vm._v("ブロックチェーン")])]), _vm._v(" "), _c("div", {
    attrs: {
      id: "inputPreview"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_4,
      expression: "record.step_4"
    }],
    staticClass: "css-checkbox",
    attrs: {
      name: "cssCheckbox",
      value: "API結合",
      id: "demo_opt_6",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.record.step_4) ? _vm._i(_vm.record.step_4, "API結合") > -1 : _vm.record.step_4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.record.step_4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "API結合",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.record, "step_4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.record, "step_4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.record, "step_4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "demo_opt_6"
    }
  }, [_vm._v("API結合")])])]), _vm._v(" "), _c("div", {
    staticClass: "checkbox-grid"
  }, [_c("div", {
    attrs: {
      id: "inputPreview"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_4,
      expression: "record.step_4"
    }],
    staticClass: "css-checkbox",
    attrs: {
      name: "cssCheckbox",
      value: "システム設計",
      id: "demo_opt_7",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.record.step_4) ? _vm._i(_vm.record.step_4, "システム設計") > -1 : _vm.record.step_4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.record.step_4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "システム設計",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.record, "step_4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.record, "step_4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.record, "step_4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "demo_opt_7"
    }
  }, [_vm._v("システム設計")])]), _vm._v(" "), _c("div", {
    attrs: {
      id: "inputPreview"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_4,
      expression: "record.step_4"
    }],
    staticClass: "css-checkbox",
    attrs: {
      name: "cssCheckbox",
      value: "ブロックチェーン",
      id: "demo_opt_8",
      type: "checkbox",
      checked: ""
    },
    domProps: {
      checked: Array.isArray(_vm.record.step_4) ? _vm._i(_vm.record.step_4, "ブロックチェーン") > -1 : _vm.record.step_4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.record.step_4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "ブロックチェーン",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.record, "step_4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.record, "step_4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.record, "step_4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "demo_opt_8"
    }
  }, [_vm._v("ブロックチェーン")])]), _vm._v(" "), _c("div", {
    attrs: {
      id: "inputPreview"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_4,
      expression: "record.step_4"
    }],
    staticClass: "css-checkbox",
    attrs: {
      name: "cssCheckbox",
      value: "AI（人工知能）",
      id: "demo_opt_9",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.record.step_4) ? _vm._i(_vm.record.step_4, "AI（人工知能）") > -1 : _vm.record.step_4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.record.step_4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "AI（人工知能）",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.record, "step_4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.record, "step_4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.record, "step_4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "demo_opt_9"
    }
  }, [_vm._v("AI（人工知能）")])])]), _vm._v(" "), _c("div", {
    staticClass: "checkbox-grid"
  }, [_c("div", {
    attrs: {
      id: "inputPreview"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_4,
      expression: "record.step_4"
    }],
    staticClass: "css-checkbox",
    attrs: {
      name: "cssCheckbox",
      value: "UIUXデザイン",
      id: "demo_opt_10",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.record.step_4) ? _vm._i(_vm.record.step_4, "UIUXデザイン") > -1 : _vm.record.step_4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.record.step_4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "UIUXデザイン",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.record, "step_4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.record, "step_4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.record, "step_4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "demo_opt_10"
    }
  }, [_vm._v("UIUXデザイン")])]), _vm._v(" "), _c("div", {
    attrs: {
      id: "inputPreview"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_4,
      expression: "record.step_4"
    }],
    staticClass: "css-checkbox",
    attrs: {
      name: "cssCheckbox",
      value: "データエンジニア",
      id: "demo_opt_11",
      type: "checkbox",
      checked: ""
    },
    domProps: {
      checked: Array.isArray(_vm.record.step_4) ? _vm._i(_vm.record.step_4, "データエンジニア") > -1 : _vm.record.step_4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.record.step_4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "データエンジニア",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.record, "step_4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.record, "step_4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.record, "step_4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "demo_opt_11"
    }
  }, [_vm._v("データエンジニア")])]), _vm._v(" "), _c("div", {
    attrs: {
      id: "inputPreview"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_4,
      expression: "record.step_4"
    }],
    staticClass: "css-checkbox",
    attrs: {
      name: "cssCheckbox",
      value: "QA・テスト",
      id: "demo_opt_12",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.record.step_4) ? _vm._i(_vm.record.step_4, "QA・テスト") > -1 : _vm.record.step_4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.record.step_4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "QA・テスト",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.record, "step_4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.record, "step_4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.record, "step_4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "demo_opt_12"
    }
  }, [_vm._v("QA・テスト")])])]), _vm._v(" "), _c("div", {
    staticClass: "checkbox-grid"
  }, [_c("div", {
    attrs: {
      id: "inputPreview"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_4,
      expression: "record.step_4"
    }],
    staticClass: "css-checkbox",
    attrs: {
      name: "cssCheckbox",
      value: "バックエンド・API",
      id: "demo_opt_13",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.record.step_4) ? _vm._i(_vm.record.step_4, "バックエンド・API") > -1 : _vm.record.step_4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.record.step_4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "バックエンド・API",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.record, "step_4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.record, "step_4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.record, "step_4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "demo_opt_13"
    }
  }, [_vm._v("バックエンド・API")])]), _vm._v(" "), _c("div", {
    attrs: {
      id: "inputPreview"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_4,
      expression: "record.step_4"
    }],
    staticClass: "css-checkbox",
    attrs: {
      name: "cssCheckbox",
      value: "サイバーセキュリティー",
      id: "demo_opt_14",
      type: "checkbox",
      checked: ""
    },
    domProps: {
      checked: Array.isArray(_vm.record.step_4) ? _vm._i(_vm.record.step_4, "サイバーセキュリティー") > -1 : _vm.record.step_4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.record.step_4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "サイバーセキュリティー",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.record, "step_4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.record, "step_4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.record, "step_4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "demo_opt_14"
    }
  }, [_vm._v("サイバーセキュリティー")])]), _vm._v(" "), _c("div", {
    attrs: {
      id: "inputPreview"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_4,
      expression: "record.step_4"
    }],
    staticClass: "css-checkbox",
    attrs: {
      name: "cssCheckbox",
      value: "その他",
      id: "demo_opt_15",
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.record.step_4) ? _vm._i(_vm.record.step_4, "その他") > -1 : _vm.record.step_4
    },
    on: {
      change: function change($event) {
        var $$a = _vm.record.step_4,
          $$el = $event.target,
          $$c = $$el.checked ? true : false;
        if (Array.isArray($$a)) {
          var $$v = "その他",
            $$i = _vm._i($$a, $$v);
          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.record, "step_4", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.record, "step_4", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.record, "step_4", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "demo_opt_15"
    }
  }, [_vm._v("その他")])])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex flex-column my-4"
  }, [_c("label", {
    attrs: {
      "for": "cars"
    }
  }, [_vm._v("技術指定（自由記載欄）")]), _vm._v(" "), _c("multiselect", {
    attrs: {
      options: _vm.options,
      multiple: true
    },
    model: {
      value: _vm.record.step_4,
      callback: function callback($$v) {
        _vm.$set(_vm.record, "step_4", $$v);
      },
      expression: "record.step_4"
    }
  })], 1)])])]), _vm._v(" "), _c("input", {
    staticClass: "previous action-button-previous",
    attrs: {
      type: "button",
      name: "previous",
      value: "戻る"
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "next action-button",
    attrs: {
      disabled: _vm.record.step_4.length == 0,
      type: "button",
      name: "next",
      value: "次へ"
    }
  })]), _vm._v(" "), _c("fieldset", [_c("div", {
    staticClass: "form-card"
  }, [_vm._m(4), _vm._v(" "), _c("ul", {
    staticClass: "my-4"
  }, [_c("li", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_5,
      expression: "record.step_5"
    }],
    attrs: {
      type: "radio",
      id: "short-term",
      name: "selector2",
      value: "I have a short-term project"
    },
    domProps: {
      checked: _vm._q(_vm.record.step_5, "I have a short-term project")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.record, "step_5", "I have a short-term project");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "short-term"
    }
  }, [_vm._v("短期で完了する小さなプロジェクト\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "check"
  })]), _vm._v(" "), _c("li", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_5,
      expression: "record.step_5"
    }],
    attrs: {
      type: "radio",
      id: "long-term",
      name: "selector2",
      value: "I have a long-term project with the need for\n                                                ongoing support"
    },
    domProps: {
      checked: _vm._q(_vm.record.step_5, "I have a long-term project with the need for\n                                                ongoing support")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.record, "step_5", "I have a long-term project with the need for\n                                                ongoing support");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "long-term"
    }
  }, [_vm._v("大きな規模で長期間必要なプロジェクト\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "check"
  })]), _vm._v(" "), _c("li", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_5,
      expression: "record.step_5"
    }],
    attrs: {
      type: "radio",
      id: "know-yet",
      name: "selector2",
      value: "I don’t know yet"
    },
    domProps: {
      checked: _vm._q(_vm.record.step_5, "I don’t know yet")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.record, "step_5", "I don’t know yet");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "know-yet"
    }
  }, [_vm._v("わからないので相談したい\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "check"
  })])])]), _vm._v(" "), _c("input", {
    staticClass: "previous action-button-previous",
    attrs: {
      type: "button",
      name: "previous",
      value: "戻る"
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "next action-button",
    attrs: {
      disabled: _vm.record.step_5 == "",
      type: "button",
      name: "next",
      value: "次へ"
    }
  })]), _vm._v(" "), _c("fieldset", [_c("div", {
    staticClass: "form-card"
  }, [_vm._m(5), _vm._v(" "), _c("ul", {
    staticClass: "my-4"
  }, [_c("li", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_6,
      expression: "record.step_6"
    }],
    attrs: {
      type: "radio",
      id: "just-me",
      name: "selector2",
      value: "Just me"
    },
    domProps: {
      checked: _vm._q(_vm.record.step_6, "Just me")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.record, "step_6", "Just me");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "just-me"
    }
  }, [_vm._v("1人の個人事業主\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "check"
  })]), _vm._v(" "), _c("li", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_6,
      expression: "record.step_6"
    }],
    attrs: {
      type: "radio",
      id: "10—100",
      name: "selector2",
      value: "10—100"
    },
    domProps: {
      checked: _vm._q(_vm.record.step_6, "10—100")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.record, "step_6", "10—100");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "10—100"
    }
  }, [_vm._v("10 - 100人規模\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "check"
  })]), _vm._v(" "), _c("li", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_6,
      expression: "record.step_6"
    }],
    attrs: {
      type: "radio",
      id: "101—500",
      name: "selector2",
      value: "101—500"
    },
    domProps: {
      checked: _vm._q(_vm.record.step_6, "101—500")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.record, "step_6", "101—500");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "101—500"
    }
  }, [_vm._v("101 - 500人規模\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "check"
  })]), _vm._v(" "), _c("li", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_6,
      expression: "record.step_6"
    }],
    attrs: {
      type: "radio",
      id: "501—1000",
      name: "selector2",
      value: "501—1000"
    },
    domProps: {
      checked: _vm._q(_vm.record.step_6, "501—1000")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.record, "step_6", "501—1000");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "501—1000"
    }
  }, [_vm._v("501 - 1000人規模\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "check"
  })]), _vm._v(" "), _c("li", [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.step_6,
      expression: "record.step_6"
    }],
    attrs: {
      type: "radio",
      id: "more-than-1000",
      name: "selector2",
      value: "More than 1000"
    },
    domProps: {
      checked: _vm._q(_vm.record.step_6, "More than 1000")
    },
    on: {
      change: function change($event) {
        return _vm.$set(_vm.record, "step_6", "More than 1000");
      }
    }
  }), _vm._v(" "), _c("label", {
    attrs: {
      "for": "more-than-1000"
    }
  }, [_vm._v("1000人以上規模\n                                            ")]), _vm._v(" "), _c("div", {
    staticClass: "check"
  })])])]), _vm._v(" "), _c("input", {
    staticClass: "previous action-button-previous",
    attrs: {
      type: "button",
      name: "previous",
      value: "戻る"
    }
  }), _vm._v(" "), _c("input", {
    staticClass: "next action-button",
    attrs: {
      disabled: _vm.record.step_6 == "",
      type: "button",
      name: "next",
      value: "次へ"
    }
  })]), _vm._v(" "), _c("fieldset", [_c("div", {
    staticClass: "form-card"
  }, [_vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "my-4"
  }, [_c("div", {
    staticClass: "inputCase"
  }, [_c("div", {
    staticClass: "sc-fzonjX hIMiPJ"
  }, [_c("span", [_vm._v("会社名*")]), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.project_name,
      expression: "record.project_name"
    }],
    staticClass: "text-field",
    attrs: {
      placeholder: "",
      autocomplete: "off",
      minlength: "3",
      name: "title",
      type: "text",
      required: "",
      value: ""
    },
    domProps: {
      value: _vm.record.project_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.record, "project_name", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "sc-fzonjX hIMiPJ"
  }, [_c("span", [_vm._v("お名前*")]), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.name,
      expression: "record.name"
    }],
    staticClass: "text-field",
    attrs: {
      placeholder: "",
      autocomplete: "off",
      minlength: "3",
      name: "name",
      type: "text",
      required: "",
      value: ""
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
  })])]), _vm._v(" "), _c("div", {
    staticClass: "inputCase"
  }, [_c("div", {
    staticClass: "sc-fzonjX hIMiPJ"
  }, [_c("span", [_vm._v("メールアドレス* ")]), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.email,
      expression: "record.email"
    }],
    staticClass: "text-field",
    attrs: {
      placeholder: "",
      autocomplete: "off",
      minlength: "3",
      name: "title",
      type: "email",
      required: "",
      value: ""
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
  })]), _vm._v(" "), _c("div", {
    staticClass: "sc-fzonjX hIMiPJ"
  }, [_c("span", [_vm._v("電話番号*")]), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.record.phone,
      expression: "record.phone"
    }],
    staticClass: "text-field",
    attrs: {
      placeholder: "",
      autocomplete: "off",
      minlength: "3",
      name: "name",
      type: "number",
      required: "",
      value: ""
    },
    domProps: {
      value: _vm.record.phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.$set(_vm.record, "phone", $event.target.value);
      }
    }
  })])])])]), _vm._v(" "), _c("input", {
    staticClass: "action-button",
    attrs: {
      type: "submit",
      name: "next",
      value: "送信"
    },
    on: {
      click: function click($event) {
        $event.preventDefault();
        return _vm.saveRequest();
      }
    }
  })])])])]), _vm._v(" "), _c("div", {
    staticClass: "sc-fzppAM vTcAG background"
  }, [_vm._m(7), _c("svg", {
    attrs: {
      version: "1.1",
      width: "100%",
      height: "100px",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink",
      "xml:space": "preserve",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none"
    }
  }, [_c("polygon", {
    attrs: {
      fill: "#f7f7f7",
      points: "0,100 100,0 100,100"
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "backgroundFill"
  })])])])])], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h2", {
    attrs: {
      id: "heading"
    }
  }, [_vm._v("どのような案件に対する見積もりでしょうか？")]), _vm._v(" "), _c("h2", {
    staticClass: "steps"
  }, [_vm._v("ステップ 1/7")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row mb-4"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h2", {
    attrs: {
      id: "heading"
    }
  }, [_vm._v("仕様や要件について下記にご記入ください")]), _vm._v(" "), _c("h2", {
    staticClass: "steps"
  }, [_vm._v("ステップ 2/7")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h2", {
    attrs: {
      id: "heading"
    }
  }, [_vm._v("開始時期はいつからですか？")]), _vm._v(" "), _c("h2", {
    staticClass: "steps"
  }, [_vm._v("ステップ 3/7")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row mb-4"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h2", {
    attrs: {
      id: "heading"
    }
  }, [_vm._v("どのような開発・エンジニアが必要ですか？\n                                            ")]), _vm._v(" "), _c("h2", {
    staticClass: "steps"
  }, [_vm._v("ステップ 4/7")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h2", {
    attrs: {
      id: "heading"
    }
  }, [_vm._v("どのようなプロジェクトですか？")]), _vm._v(" "), _c("h2", {
    staticClass: "steps"
  }, [_vm._v("ステップ 5/7")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h2", {
    attrs: {
      id: "heading"
    }
  }, [_vm._v("会社規模はどれくらいになりますか？")]), _vm._v(" "), _c("h2", {
    staticClass: "steps"
  }, [_vm._v("ステップ 6/7")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_c("h2", {
    attrs: {
      id: "heading"
    }
  }, [_vm._v("お見積作成のためのオンラインヒアリングURL送付先\n                                            ")]), _vm._v(" "), _c("h2", {
    staticClass: "steps"
  }, [_vm._v("ステップ 7/7")])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "vertical-wrapper"
  }, [_c("div", {
    staticClass: "wrapper"
  }, [_c("div", {
    staticClass: "logo-wrapper"
  }, [_c("div", [_c("img", {
    attrs: {
      src: "/assets/img/quoteimage.png",
      alt: "",
      width: "100%"
    }
  })])])])]);
}];
render._withStripped = true;


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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Quote.vue?vue&type=style&index=1&id=33b85a54&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Quote.vue?vue&type=style&index=1&id=33b85a54&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.vTcAG h3[data-v-33b85a54] {\n    margin-bottom: 28px;\n    margin-right: 30px;\n}\n.text-field[data-v-33b85a54] {\n    width: 100%;\n    height: 59px;\n    padding-left: 10px;\n    font-size: 16px;\n    border-radius: 3px;\n    border: solid 1px #d7d7d7;\n    background-color: #ffffff;\n}\n.hIMiPJ span[data-v-33b85a54] {\n    display: block;\n    margin-bottom: 10px;\n    font-size: 16px;\n    color: #35353B;\n}\n.inputCase[data-v-33b85a54] {\n    display: flex;\n    margin-bottom: 34px;\n}\n.inputCase>div[data-v-33b85a54] {\n    margin-right: 44px;\n    min-width: 310px;\n}\n.form-textfield[data-v-33b85a54] {\n    width: 100%;\n}\n.form-card[data-v-33b85a54] {\n    padding: 34px 0 65px;\n    min-height: 430px;\n}\n.eXkYNB .container[data-v-33b85a54] {\n    background: white;\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 15px;\n    padding-bottom: 60px;\n    padding-top: 60px;\n    position: relative;\n}\n.step-form-card[data-v-33b85a54] {\n    padding: 34px 0 0;\n    margin-bottom: 68px;\n    min-height: 430px;\n    height: 430px;\n    max-height: 430px;\n    width: 664px;\n    max-width: 690px;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n}\n.vTcAG .backgroundFill[data-v-33b85a54] {\n    background: #f7f7f7;\n    position: fixed;\n    height: 100%;\n    width: 20px;\n    width: calc((100% - 1280px) / 2 + 407px);\n    top: 0;\n    right: 0;\n}\n.eXkYNB[data-v-33b85a54] {\n    display: flex;\n    justify-content: center;\n    align-items: flex-start;\n    background: white;\n    padding-bottom: 70px;\n    min-height: calc(100% - 70px);\n    padding-top: 56px;\n}\n.vTcAG svg[data-v-33b85a54] {\n    position: fixed;\n    right: calc((100% - 1280px) / 2 + 407px);\n    bottom: 0;\n    height: 100%;\n    width: 10vh;\n}\n.vTcAG[data-v-33b85a54] {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    right: -15px;\n}\n.vTcAG .vertical-wrapper[data-v-33b85a54] {\n    position: relative;\n    z-index: 1;\n    height: 100%;\n    display: flex;\n    align-items: center;\n}\n.vTcAG .wrapper[data-v-33b85a54] {\n    display: flex;\n    z-index: 1;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: flex-end;\n}\n.vTcAG h3[data-v-33b85a54],\n.vTcAG p[data-v-33b85a54],\n.vTcAG span[data-v-33b85a54] {\n    font-size: 16px;\n    font-weight: bold;\n    text-align: right;\n    color: #b9b9b9;\n}\n.vTcAG h3[data-v-33b85a54] {\n    margin-bottom: 28px;\n    margin-right: 30px;\n}\n.vTcAG .logo-wrapper[data-v-33b85a54] {\n    width: 460px;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-end;\n}\n.vTcAG .logo-wrapper>div[data-v-33b85a54] {\n    margin: 0px 30px;\n    margin-bottom: 30px;\n}\n.select-control[data-v-33b85a54] {\n    padding: 10px;\n    border: solid 1px #d7d7d7;\n    border-radius: 3px;\n    cursor: pointer;\n    min-height: 59px;\n}\n.checkbox-grid[data-v-33b85a54] {\n    max-width: unset;\n    position: relative;\n    z-index: 5;\n    display: grid;\n    grid-auto-flow: row;\n    grid-template-columns: repeat(auto-fit, 220px);\n    grid-template-rows: repeat(5, auto);\n    margin: 10px 0px;\n}\n.form-textfield[data-v-33b85a54] {\n    font-size: 16px;\n    border-radius: 3px;\n    border: solid 1px #d7d7d7;\n    background-color: #ffffff;\n    color: #35353B;\n    padding: 10px;\n}\nli[data-v-33b85a54] {\n\n    position: relative;\n}\nli input[type=radio][data-v-33b85a54] {\n    position: absolute;\n    visibility: hidden;\n}\nli label[data-v-33b85a54] {\n    position: relative;\n    font-size: 18px;\n    padding: 0px 25px 0px 35px;\n    z-index: 9;\n    cursor: pointer;\n    -webkit-transition: all 0.25s linear;\n}\nli .check[data-v-33b85a54] {\n    display: block;\n    position: absolute;\n    border: 3px solid #AAAAAA;\n    border-radius: 100%;\n    height: 21px;\n    width: 22px;\n    top: 2px;\n    left: 0px;\n    z-index: 5;\n    transition: border .25s linear;\n    -webkit-transition: border .25s linear;\n}\nli .check[data-v-33b85a54]::before {\n    display: block;\n    position: absolute;\n    content: '';\n    border-radius: 100%;\n    height: 0.7rem;\n    width: 0.7rem;\n    top: 2px;\n    left: 3px;\n    margin: auto;\n    transition: background 0.25s linear;\n    -webkit-transition: background 0.25s linear;\n}\ninput[type=radio]:checked~.check[data-v-33b85a54] {\n    border: 3px solid rgb(57, 108, 162);\n}\ninput[type=radio]:checked~.check[data-v-33b85a54]::before {\n    background: rgb(57, 108, 162);\n}\n#heading[data-v-33b85a54] {\n\n    font-size: 26px;\n    font-weight: bold;\n    color: #282828;\n    text-align: left;\n}\n#msform[data-v-33b85a54] {\n    position: relative;\n}\n.form-card[data-v-33b85a54] {\n    text-align: left\n}\n#msform fieldset[data-v-33b85a54]:not(:first-of-type) {\n    display: none\n}\n#msform .action-button[data-v-33b85a54] {\n    width: 170px;\n    height: 67px;\n    background: rgb(57, 108, 162);\n    font-weight: bold;\n    color: white;\n    border: 0 none;\n    border-radius: 0px;\n    cursor: pointer;\n    padding: 10px 5px;\n    margin: 10px 0px 10px 5px;\n    float: left;\n    text-align: center;\n}\n#msform .action-button[data-v-33b85a54]:hover,\n#msform .action-button[data-v-33b85a54]:focus {\n    background-color: var(--textcolor);\n}\n#msform .action-button-previous[data-v-33b85a54] {\n    width: 100px;\n    height: 67px;\n    font-size: 20px;\n    font-weight: bold;\n    color: rgb(57, 108, 162);\n    border: 0 none;\n    border-radius: 0px;\n    cursor: pointer;\n    padding: 10px 5px;\n    margin: 10px 5px 10px 0px;\n    float: left;\n    text-align: center;\n}\n.card[data-v-33b85a54] {\n    z-index: 0;\n    border: none;\n    position: relative\n}\n.fs-title[data-v-33b85a54] {\n    font-size: 25px;\n    color: #673AB7;\n    margin-bottom: 15px;\n    font-weight: normal;\n    text-align: left\n}\n.purple-text[data-v-33b85a54] {\n    color: #673AB7;\n    font-weight: normal\n}\n.steps[data-v-33b85a54] {\n    font-size: 18px;\n    color: #b9b9b9;\n    font-weight: normal;\n}\n.fieldlabels[data-v-33b85a54] {\n    color: gray;\n    text-align: left\n}\n.fit-image[data-v-33b85a54] {\n    width: 100%;\n    -o-object-fit: cover;\n       object-fit: cover\n}\n.css-checkbox[data-v-33b85a54] {\n    position: absolute;\n    overflow: hidden;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    width: 1px;\n    margin: -1px;\n    padding: 0;\n    border: 0;\n}\n#inputPreview[data-v-33b85a54] {\n    display: flex;\n    gap: 20px;\n}\n.css-checkbox+label[data-v-33b85a54] {\n    position: relative;\n    font-size: 16px;\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    height: 19px;\n    color: #282828;\n}\n.css-checkbox+label[data-v-33b85a54]::before {\n    content: \" \";\n    display: inline-block;\n    vertical-align: middle;\n    margin-right: 10px;\n    width: 20px;\n    height: 20px;\n    background-color: white;\n    border-width: 1px;\n    border-style: solid;\n    border-color: rgb(57, 108, 162);\n    border-radius: 2px;\n    box-shadow: none;\n}\n.css-checkbox:checked+label[data-v-33b85a54]::after {\n    content: \" \";\n    background-image: url(\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSIjMDM5NWNhIiBkPSJNMTczLjg5OCA0MzkuNDA0bC0xNjYuNC0xNjYuNGMtOS45OTctOS45OTctOS45OTctMjYuMjA2IDAtMzYuMjA0bDM2LjIwMy0zNi4yMDRjOS45OTctOS45OTggMjYuMjA3LTkuOTk4IDM2LjIwNCAwTDE5MiAzMTIuNjkgNDMyLjA5NSA3Mi41OTZjOS45OTctOS45OTcgMjYuMjA3LTkuOTk3IDM2LjIwNCAwbDM2LjIwMyAzNi4yMDRjOS45OTcgOS45OTcgOS45OTcgMjYuMjA2IDAgMzYuMjA0bC0yOTQuNCAyOTQuNDAxYy05Ljk5OCA5Ljk5Ny0yNi4yMDcgOS45OTctMzYuMjA0LS4wMDF6Ii8+PC9zdmc+\");\n    background-repeat: no-repeat;\n    background-size: 10px 10px;\n    background-position: center center;\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-left: 0px;\n    left: 0px;\n    top: 0px;\n    text-align: center;\n    background-color: transparent;\n    font-size: 10px;\n    height: 19px;\n    width: 19px;\n}\n@media screen and (max-width: 1300px) and (min-width: 1150px) {\n.vTcAG .logo-wrapper[data-v-33b85a54] {\n        width: 347px;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: flex-end;\n}\n.vTcAG[data-v-33b85a54] {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        right: 45px;\n}\n}\n@media screen and (max-width: 1149px) and (min-width: 769px) {\n.step-form-card[data-v-33b85a54] {\n        margin: auto;\n        padding-top: 0px;\n}\n.eXkYNB[data-v-33b85a54] {\n        padding-top: 20px;\n}\n}\n@media (max-width: 1150px) {\n.vTcAG[data-v-33b85a54] {\n        display: none;\n}\n}\n@media (max-width: 1300px) {\n.inEYMP .container[data-v-33b85a54] {\n        padding-left: 32px;\n        padding-right: 32px;\n}\n}\n@media (max-width: 768px) {\n.step-form-card[data-v-33b85a54] {\n        width: 100%;\n        margin: auto;\n}\n.vTcAG img[data-v-33b85a54] {\n        height: 35px;\n}\n.inputCase[data-v-33b85a54] {\n        flex-direction: column;\n}\n.eXkYNB .container[data-v-33b85a54] {\n        padding-top: 0px;\n        padding-bottom: 0px;\n}\n.vTcAG .vertical-wrapper[data-v-33b85a54] {\n        background: #f7f7f7;\n        width: calc(100% + 30px);\n        margin-left: -15px;\n        padding-top: 40px;\n        display: flex;\n        justify-content: center;\n}\n.inEYMP .background[data-v-33b85a54] {\n        flex-grow: 1;\n}\n.vTcAG[data-v-33b85a54] {\n        position: unset;\n        width: 100%;\n        display: flex;\n        flex-direction: column-reverse;\n        margin-top: 16px;\n}\n.vTcAG svg[data-v-33b85a54] {\n        position: unset;\n        width: calc(100% + 30px);\n        margin-left: -15px;\n        height: 7vw;\n}\n.eXkYNB[data-v-33b85a54] {\n        padding-bottom: 0;\n}\n.step-form-card[data-v-33b85a54] {\n        height: 100%;\n        max-height: 100%;\n}\n.vTcAG .backgroundFill[data-v-33b85a54] {\n        position: unset;\n}\n.vTcAG .logo-wrapper[data-v-33b85a54] {\n        width: 100%;\n        justify-content: center;\n        padding-bottom: 16px;\n}\n.vTcAG .wrapper h3[data-v-33b85a54] {\n        font-size: 14px;\n        margin-right: 0;\n        margin-bottom: 19px;\n        width: 100%;\n        text-align: center;\n}\n.inputCase>div[data-v-33b85a54] {\n        max-width: 100%;\n}\n#msform .action-button-previous[data-v-33b85a54],\n    #msform .action-button[data-v-33b85a54] {\n        width: 100%;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border:2px solid transparent;border-top-color:#41b883;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{animation:spinning 2.4s cubic-bezier(.41,.26,.2,.62);animation-iteration-count:infinite}.multiselect__spinner:after{animation:spinning 2.4s cubic-bezier(.51,.09,.21,.8);animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:16px;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{background:#ededed;pointer-events:none;opacity:.6}.multiselect--active{z-index:50}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__input::-moz-placeholder{color:#35495e}.multiselect__input::placeholder{color:#35495e}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:5px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff;font-size:14px}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 30px 0 12px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-color:#999 transparent transparent;border-style:solid;border-width:5px 5px 0;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:50;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px;font-size:13px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{background:#ededed!important;color:#a6a6a6!important;cursor:text;pointer-events:none}.multiselect__option--group{background:#ededed;color:#35495e}.multiselect__option--group.multiselect__option--highlight{background:#35495e;color:#fff}.multiselect__option--group.multiselect__option--highlight:after{background:#35495e}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede}.multiselect__option--group-selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--group-selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@keyframes spinning{0%{transform:rotate(0)}to{transform:rotate(2turn)}}", ""]);
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

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Quote.vue?vue&type=style&index=1&id=33b85a54&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Quote.vue?vue&type=style&index=1&id=33b85a54&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Quote_vue_vue_type_style_index_1_id_33b85a54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Quote.vue?vue&type=style&index=1&id=33b85a54&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Quote.vue?vue&type=style&index=1&id=33b85a54&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Quote_vue_vue_type_style_index_1_id_33b85a54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Quote_vue_vue_type_style_index_1_id_33b85a54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

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

/***/ "./resources/js/components/pages/Quote.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/pages/Quote.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Quote_vue_vue_type_template_id_33b85a54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Quote.vue?vue&type=template&id=33b85a54&scoped=true& */ "./resources/js/components/pages/Quote.vue?vue&type=template&id=33b85a54&scoped=true&");
/* harmony import */ var _Quote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Quote.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Quote.vue?vue&type=script&lang=js&");
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");
/* harmony import */ var _Quote_vue_vue_type_style_index_1_id_33b85a54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Quote.vue?vue&type=style&index=1&id=33b85a54&scoped=true&lang=css& */ "./resources/js/components/pages/Quote.vue?vue&type=style&index=1&id=33b85a54&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _Quote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Quote_vue_vue_type_template_id_33b85a54_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Quote_vue_vue_type_template_id_33b85a54_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "33b85a54",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Quote.vue"
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

/***/ "./resources/js/components/pages/Quote.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/pages/Quote.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Quote.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Quote.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Quote_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

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

/***/ "./resources/js/components/pages/Quote.vue?vue&type=template&id=33b85a54&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/pages/Quote.vue?vue&type=template&id=33b85a54&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Quote_vue_vue_type_template_id_33b85a54_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Quote_vue_vue_type_template_id_33b85a54_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Quote_vue_vue_type_template_id_33b85a54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Quote.vue?vue&type=template&id=33b85a54&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Quote.vue?vue&type=template&id=33b85a54&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************!*\
  !*** ./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_loader_dist_cjs_js_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_vue_multiselect_min_css_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../style-loader/dist/cjs.js!../../css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../vue-loader/lib/loaders/stylePostLoader.js!../../postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./vue-multiselect.min.css?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-multiselect/dist/vue-multiselect.min.css?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/layout/Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/layout/Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_style_index_0_id_2c4263fa_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/layout/Navbar.vue?vue&type=style&index=0&id=2c4263fa&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/pages/Quote.vue?vue&type=style&index=1&id=33b85a54&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/pages/Quote.vue?vue&type=style&index=1&id=33b85a54&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Quote_vue_vue_type_style_index_1_id_33b85a54_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Quote.vue?vue&type=style&index=1&id=33b85a54&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Quote.vue?vue&type=style&index=1&id=33b85a54&scoped=true&lang=css&");


/***/ })

}]);