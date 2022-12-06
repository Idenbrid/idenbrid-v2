"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_pages_Home_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
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
      blogs: [],
      works: [],
      news: []
    };
  },
  metaInfo: function metaInfo() {
    return {
      title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | ホーム",
      meta: [{
        vmid: "description",
        name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
        content: "ウェブデザインからシステム・モバイルアプリ開発まで一括で受けているアイデンブリッド社はIT業界の中でもトップクラスのコミュニケーション能力でお客様のプロジェクトに対してご提案します。案件の対して要件定義、設計、開発実装そしてテストまで包括的にお受けします。無料でのお見積りのご相談はこちらからです。技術的な内容やご予算などわからないことがありましたらお問合せください。"
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;
    axios.get('/api/blogs').then(function (res) {
      _this.blogs = res.data.blogs;
    })["catch"](function (err) {});
    axios.get('/api/news').then(function (res) {
      _this.news = res.data.news;
    })["catch"](function (err) {});
    axios.get('/api/works').then(function (res) {
      _this.works = res.data.works;
      _this.$nextTick(function () {
        var swiper = new Swiper(".WorkSlider", {
          slidesPerView: 3,
          spaceBetween: 30,
          slidesPerGroup: 1,
          loop: true,
          loopFillGroupWithBlank: true,
          breakpoints: {
            320: {
              slidesPerView: 1,
              spaceBetween: 30
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
            nextEl: ".swiper-button-next"
            /* prevEl: ".swiper-button-prev",*/
          }
        });
      });
    })["catch"](function (err) {});
    /* work slider end*/
    window.setTimeout(top_hero_title, 300);
    function top_hero_title() {
      jQuery(".top-hero__title .horo-text-b").css({
        "filter": "blur(0)",
        "opacity": 1
      });
    }
    /*text-typed*/
    var TxtRotate = function TxtRotate(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
    };
    TxtRotate.prototype.tick = function () {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];
      if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
      this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';
      var that = this;
      var delta = 300 - Math.random() * 100;
      if (this.isDeleting) {
        delta /= 2;
      }
      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }
      setTimeout(function () {
        that.tick();
      }, delta);
    };
    var elements = document.getElementsByClassName('txt-rotate');
    for (var i = 0; i < elements.length; i++) {
      var toRotate = elements[i].getAttribute('data-rotate');
      var period = elements[i].getAttribute('data-period');
      if (toRotate) {
        new TxtRotate(elements[i], JSON.parse(toRotate), period);
      }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #2FA5DE }";
    document.body.appendChild(css);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", [_c("Navbar"), _vm._v(" "), _c("main", [_c("section", {
    staticClass: "mycontents-wide top-hero",
    attrs: {
      id: "/"
    }
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("router-link", {
    staticClass: "btn-views",
    attrs: {
      to: "/doc/"
    }
  }, [_vm._v("資料ダウンロード"), _c("i", {
    staticClass: "fa fa-download ml-2",
    attrs: {
      "aria-hidden": "true"
    }
  })]), _vm._v(" "), _c("video", {
    staticClass: "top-hero__video",
    attrs: {
      src: "/public/assets/videos/idenbridopeningvideo.mp4",
      autoplay: "",
      muted: "",
      loop: "",
      playsinline: ""
    },
    domProps: {
      muted: true
    }
  })], 1), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _c("section", [_c("div", {
    staticClass: "c-message"
  }, [_c("div", {
    staticClass: "c-message__bgimg",
    staticStyle: {
      "background-image": "url('/assets/img/CEO-Message background.png')",
      visibility: "visible",
      opacity: "1",
      transition: "opacity 0.8s cubic-bezier(0.5, 0, 0, 1) 0.5s"
    },
    attrs: {
      "data-sr-id": "2"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mycontents-wide p-0"
  }, [_c("div", {
    staticClass: "c-message__content"
  }, [_c("div", {
    staticClass: "c-message__box large-7 small-12"
  }, [_c("h3", {
    staticClass: "content-title c-message__title"
  }, [_vm._v("CEO MESSAGE")]), _vm._v(" "), _vm._m(5), _vm._v(" "), _c("div", {
    staticClass: "c-message__button u-hidden-sm"
  }, [_c("router-link", {
    staticClass: "viewmore-btn viewmore-btn_service mt-3",
    attrs: {
      to: "/message/"
    }
  }, [_vm._v("View\n                                    More")])], 1)]), _vm._v(" "), _vm._m(6), _vm._v(" "), _c("div", {
    staticClass: "c-message__button u-hidden-lg"
  }, [_c("router-link", {
    staticClass: "c-button is-md",
    attrs: {
      to: "/about-company/"
    }
  }, [_vm._v("View More")])], 1)])])])]), _vm._v(" "), _c("section", {
    staticClass: "otherservice mycontents-wide"
  }, [_c("h3", {
    staticClass: "content-title"
  }, [_vm._v("SERVICE")]), _vm._v(" "), _c("div", {
    staticClass: "service-row my-5"
  }, [_c("div", {
    staticClass: "service-col"
  }, [_vm._m(7), _vm._v(" "), _c("p", {
    staticClass: "service-p"
  }, [_vm._v("\n                        スタジオ開発ハブは、日本企業またグローバル企業とのIT受託開発。そして一般的なオフショア開発にあたるパキスタンエンジニア人材を人月ベースでご提供致します。\n                    ")]), _vm._v(" "), _c("router-link", {
    staticClass: "viewmore-btn viewmore-btn_service mt-5",
    attrs: {
      to: "/studiodevelopmenthub/"
    }
  }, [_vm._v("View\n                        More")])], 1), _vm._v(" "), _vm._m(8)]), _vm._v(" "), _c("div", {
    staticClass: "service-row my-5"
  }, [_vm._m(9), _vm._v(" "), _c("div", {
    staticClass: "service-col"
  }, [_vm._m(10), _vm._v(" "), _c("p", {
    staticClass: "service-p"
  }, [_vm._v("\n                        当社のエンジニアスタイルというのは、エンジニア採用支援サービスを指し、SESサービスのように社内外の優秀なエンジニアやデザイナー人材を必要とされている会社様に対して人材の発掘、ご紹介、人材との面談設定、そして採用までのオンボーディング過程を支援いたします。\n                    ")]), _vm._v(" "), _c("router-link", {
    staticClass: "viewmore-btn viewmore-btn_service mt-5",
    attrs: {
      to: "/engineerstyle/"
    }
  }, [_vm._v("View\n                        More")])], 1)])]), _vm._v(" "), _c("section", {
    staticClass: "news mycontents-wide"
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(11), _vm._v(" "), _c("div", {
    staticClass: "service-col"
  }, [_c("router-link", {
    staticClass: "viewmore-btn",
    attrs: {
      to: "/solutions"
    }
  }, [_vm._v("View More\n            ")])], 1)])]), _vm._v(" "), _c("section", {
    staticClass: "news mycontents-wide"
  }, [_c("h3", {
    staticClass: "content-title content-title_blog"
  }, [_vm._v("NEWS")]), _vm._v(" "), _c("p", {
    staticClass: "content-text content-text_blog"
  }, [_vm._v("アイデンブリッドからのお知らせやイベント、そしてプレスリリースを発信致します。")]), _vm._v(" "), _c("div", {
    staticClass: "new-box new"
  }, [_vm._l(_vm.news, function (detail, Detail) {
    return Detail < 5 ? _c("div", {
      key: Detail,
      staticClass: "new-listing new"
    }, [_c("router-link", {
      staticClass: "new-link new",
      attrs: {
        to: "/news/detail/" + detail.id + "/"
      }
    }, [_c("div", {
      staticClass: "img_box"
    }, [_c("img", {
      attrs: {
        src: "http://admin.idenbrid.jp/public/storage/news/" + detail.image,
        alt: ""
      }
    })]), _vm._v(" "), _c("div", {
      staticClass: "new-item new"
    }, [_c("div", {
      staticClass: "new-meta"
    }, [_c("p", {
      staticClass: "text new mr-2 mt-0 new-date"
    }, [_vm._v("\n                                    " + _vm._s(detail.date))]), _vm._v(" "), _c("div", {
      staticClass: "new new-tag"
    }, [_c("p", {
      staticClass: "text new mt-0"
    }, [_vm._v("NEWS")])])]), _vm._v(" "), _c("p", {
      staticClass: "text new-content"
    }, [_vm._v("\n                                " + _vm._s(detail.title))])])])], 1) : _vm._e();
  }), _vm._v(" "), _c("router-link", {
    staticClass: "viewmore-btn viewmore-btn_center",
    attrs: {
      to: "/news/"
    }
  }, [_vm._v("View More\n                ")])], 2)]), _vm._v(" "), _c("section", {
    staticClass: "about mycontents-wide"
  }, [_c("h3", {
    staticClass: "content-title content-title_about"
  }, [_vm._v("ABOUT")]), _vm._v(" "), _c("p", {
    staticClass: "content-subtitle content-subtitle_about"
  }, [_vm._v("「Update the future in style」")]), _vm._v(" "), _c("p", {
    staticClass: "content-text content-text_about"
  }, [_vm._v("\n                テクノロジーで未来をかっこよくアップデートを会社のミッションに掲げるアイデンブリッドはお客様目線に立って、どのようにIT開発がビジネスに貢献できるかクリエイティブな提案をし、それに沿ったITソルーションを提供します。\n            ")]), _vm._v(" "), _c("ul", {
    staticClass: "about-contents"
  }, [_c("li", {
    staticClass: "about-contents__list"
  }, [_c("router-link", {
    attrs: {
      to: "/policy/"
    }
  }, [_c("img", {
    staticClass: "about-contents__list__thumbnail",
    attrs: {
      src: "/public/assets/img/icons/Policy-icon.svg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "about-contents__list__text"
  }, [_c("p", {
    staticClass: "about-contents__list__subtitle"
  }, [_vm._v("経営理念")]), _vm._v(" "), _c("h4", {
    staticClass: "about-contents__list__title"
  }, [_vm._v("Policy")])])])], 1), _vm._v(" "), _c("li", {
    staticClass: "about-contents__list"
  }, [_c("router-link", {
    attrs: {
      to: "/business/"
    }
  }, [_c("img", {
    staticClass: "about-contents__list__thumbnail about-contents__list__thumbnail_news",
    attrs: {
      src: "/public/assets/img/icons/Bussines-icon.svg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "about-contents__list__text"
  }, [_c("p", {
    staticClass: "about-contents__list__subtitle"
  }, [_vm._v("事業紹介")]), _vm._v(" "), _c("h4", {
    staticClass: "about-contents__list__title"
  }, [_vm._v("Business")])])])], 1), _vm._v(" "), _c("li", {
    staticClass: "about-contents__list"
  }, [_c("router-link", {
    attrs: {
      to: "/about/"
    }
  }, [_c("img", {
    staticClass: "about-contents__list__thumbnail",
    attrs: {
      src: "/public/assets/img/icons/Company-icon.svg",
      alt: "",
      loading: "lazy"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "about-contents__list__text"
  }, [_c("p", {
    staticClass: "about-contents__list__subtitle"
  }, [_vm._v("会社概要")]), _vm._v(" "), _c("h4", {
    staticClass: "about-contents__list__title"
  }, [_vm._v("Company")])])])], 1)])]), _vm._v(" "), _c("section", {
    staticClass: "mt-5"
  }, [_c("div", {
    staticClass: "c-recruit"
  }, [_vm._m(12), _vm._v(" "), _c("div", {
    staticClass: "c-recruit__bottom"
  }, [_c("div", {
    staticClass: "mycontents-wide"
  }, [_c("div", {
    staticClass: "c-recruit__bottom-block row"
  }, [_c("div", {
    staticClass: "large-6 small-12"
  }, [_c("router-link", {
    staticClass: "c-recruit__bottom-item",
    attrs: {
      to: "/video/"
    }
  }, [_c("div", {
    staticClass: "c-recruit__bottom-bgimg"
  }, [_c("video", {
    attrs: {
      width: "100%",
      autoplay: "",
      loop: "",
      muted: ""
    },
    domProps: {
      muted: true
    }
  }, [_c("source", {
    attrs: {
      src: "/assets/videos/Video.mp4",
      type: "video/mp4"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "c-recruit__bottom-content"
  }, [_c("div", {
    staticClass: "c-recruit__bottom-button"
  }, [_vm._v("VIDEOを見る")])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "large-6 small-12"
  }, [_c("router-link", {
    staticClass: "c-recruit__bottom-item",
    attrs: {
      to: "/blog/"
    }
  }, [_c("div", {
    staticClass: "c-recruit__bottom-bgimg"
  }, [_c("video", {
    attrs: {
      width: "100%",
      autoplay: "",
      loop: "",
      muted: ""
    },
    domProps: {
      muted: true
    }
  }, [_c("source", {
    attrs: {
      src: "/assets/videos/blog.mp4",
      type: "video/mp4"
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "c-recruit__bottom-content"
  }, [_c("div", {
    staticClass: "c-recruit__bottom-button"
  }, [_vm._v("BLOGを見る")])])])], 1)])])])])]), _vm._v(" "), _c("section", {
    staticClass: "blog-home mycontents-wide"
  }, [_c("h3", {
    staticClass: "content-title content-title_blog"
  }, [_vm._v("BLOG")]), _vm._v(" "), _c("p", {
    staticClass: "content-text content-text_blog"
  }, [_vm._v("ウェブや業務システムそしてモバイルアプリ開発の際のお役立ち記事を掲載しています。")]), _vm._v(" "), _c("ul", {
    staticClass: "blog-contents"
  }, _vm._l(_vm.blogs.slice(_vm.Blog, 3), function (blog, Blog) {
    return _c("li", {
      key: Blog,
      staticClass: "blog-contents__list"
    }, [_c("router-link", {
      attrs: {
        to: "/blog/detail/" + blog.id + "/"
      }
    }, [_c("p", {
      staticClass: "blog-contents__list__tags"
    }, [_c("span", [_vm._v("BLOG")])]), _vm._v(" "), _c("img", {
      staticClass: "blog-contents__list__thumbnail",
      attrs: {
        src: "http://admin.idenbrid.jp/public/storage/blog_images/" + blog.image,
        alt: "",
        loading: "lazy"
      }
    }), _vm._v(" "), _c("p", {
      staticClass: "blog-contents__list__title"
    }, [_vm._v(_vm._s(blog.title))]), _vm._v(" "), _c("p", {
      staticClass: "blog-contents__list__date"
    }, [_vm._v(_vm._s(blog.date))])])], 1);
  }), 0), _vm._v(" "), _c("router-link", {
    staticClass: "viewmore-btn viewmore-btn_center",
    attrs: {
      to: "/blog/"
    }
  }, [_vm._v("View More\n\n            ")])], 1), _vm._v(" "), _vm._m(13)]), _vm._v(" "), _c("Footer")], 1);
};
var staticRenderFns = [function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h1", {
    staticClass: "top-hero__title"
  }, [_c("span", {
    staticClass: "horo-text-b",
    staticStyle: {
      "transition-delay": "1.15s"
    }
  }, [_vm._v("クリエイティブな発想と")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h2", [_c("span", {
    staticClass: "txt-rotate ml-0",
    attrs: {
      "data-period": "2000",
      "data-rotate": '[ "ONE TEAMで", "豊富なEXPERIENCEによって", "TECHNOLOGYによって", "熱いPASSIONによって" ]'
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h2", {
    staticClass: "top-hero__title"
  }, [_c("span", {
    staticClass: "horo-text-b",
    staticStyle: {
      "transition-delay": "1.15s"
    }
  }, [_vm._v("お客様のユーザーペインを解決します。")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "scroll scroll_top"
  }, [_c("p", {
    staticClass: "scroll__text"
  }, [_vm._v("SCROLL")]), _vm._v(" "), _c("span", {
    staticClass: "scroll__arrow"
  }, [_c("span", {
    staticClass: "scroll__arrow__box"
  })])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("section", {
    staticClass: "mycontents-wide"
  }, [_c("h3", {
    staticClass: "content-title"
  }, [_vm._v("IDENBRIDとは")]), _vm._v(" "), _c("div", {
    staticClass: "service-row"
  }, [_c("div", {
    staticClass: "mycontents-wide p-0"
  }, [_c("h2", {
    staticClass: "service_h2"
  }, [_vm._v("日本とパキスタンにおいてIT受託開発を行う企業です。\n                    ")]), _vm._v(" "), _c("p", {
    staticClass: "service-p"
  }, [_vm._v("\n                        IDENRBIDは開発チームを日本及びパキスタンにて組んでいるIT受託開発会社です。スタートアップ企業様から東証プライム上場企業までお客様の幅は広く、要件定義からシステム設計、UIUXデザイン、ウェブからスマホアプリ開発そしてクラウドまでワンストップで開発しております。高度な大規模開発は日本チームで、そしてラボ型開発はパキスタンにてとグローバル企業だからできる対応力でクライアント様にご好評頂いています。\n                    ")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "c-message__title-sub"
  }, [_vm._v("「パキスタンから世界一必要とされるIT企業になる」"), _c("br"), _vm._v("\n                                なぜ私たちはパキスタンでIT企業を設立したのか")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "large-5 small-12"
  }, [_c("img", {
    staticClass: "c-message__img ceo-desktop",
    attrs: {
      src: "/assets/img/CEO Person.png",
      alt: ""
    }
  }), _vm._v(" "), _c("img", {
    staticClass: "c-message__img ceo-mbl",
    attrs: {
      src: "/assets/img/CEO Person.png",
      alt: ""
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h2", {
    staticClass: "service_h2"
  }, [_c("img", {
    staticClass: "image-icon",
    attrs: {
      src: "/assets/img/icons/SHD.png"
    }
  }), _vm._v("SDH：スタジオ開発ハブ\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "service-col"
  }, [_c("img", {
    attrs: {
      alt: "",
      src: "/assets/img/sdh.png",
      width: "100%"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "service-col"
  }, [_c("img", {
    attrs: {
      alt: "",
      src: "/assets/img/ses.png",
      width: "100%"
    }
  })]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("h2", {
    staticClass: "service_h2"
  }, [_c("img", {
    staticClass: "image-icon",
    attrs: {
      src: "/assets/img/icons/SES.png"
    }
  }), _vm._v("SES：エンジニアスタイル\n                    ")]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "service-col"
  }, [_c("h3", {
    staticClass: "content-title content-title_blog"
  }, [_vm._v("OUR EXPERTISE")]), _vm._v(" "), _c("p", {
    staticClass: "content-text"
  }, [_vm._v("IDENBRIDがご提供している開発サービスのご紹介です。")])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "c-recruit__head"
  }, [_c("div", {
    staticClass: "c-recruit__bgimg",
    staticStyle: {
      "background-image": "url('/assets/img/Culture-background.png')"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "mycontents-wide"
  }, [_c("div", {
    staticClass: "c-recruit__head-inner"
  }, [_c("h3", {
    staticClass: "content-title is-color-white recruit-title"
  }, [_vm._v("CULTURE")]), _vm._v(" "), _c("div", {
    staticClass: "c-recruit__head-text"
  }, [_vm._v("私たちの自慢は個性と責任がある仲間たち。"), _c("br"), _vm._v("\n                                YouTube動画とブログから会社の雰囲気を感じて頂けます。")])])])]);
}, function () {
  var _vm = this,
    _c = _vm._self._c;
  return _c("div", {
    staticClass: "bnr_area"
  }, [_c("a", {
    staticClass: "hoverScale",
    attrs: {
      href: "https://twitter.com/idenbridinc",
      target: "_blank"
    }
  }, [_c("div", {
    staticClass: "thumb"
  }, [_c("div", {
    staticClass: "hvrtxt en"
  }, [_c("span", {
    staticClass: "more_txt"
  }, [_c("span", {
    staticClass: "underline"
  }, [_vm._v("MORE")])])]), _vm._v(" "), _c("div", {
    staticClass: "scaleImg"
  }, [_c("img", {
    attrs: {
      src: "https://tomorrowgate.co.jp/asset/img/top/tw-bnr.jpg",
      alt: ""
    }
  })])])]), _vm._v(" "), _c("a", {
    staticClass: "hoverScale",
    attrs: {
      href: "https://www.youtube.com/channel/UC5ENsxgAQIqVfBIMy-Fp-0w",
      target: "_blank"
    }
  }, [_c("div", {
    staticClass: "thumb"
  }, [_c("div", {
    staticClass: "hvrtxt en"
  }, [_c("span", {
    staticClass: "more_txt"
  }, [_c("span", {
    staticClass: "underline"
  }, [_vm._v("MORE")])])]), _vm._v(" "), _c("div", {
    staticClass: "scaleImg"
  }, [_c("img", {
    attrs: {
      src: "https://tomorrowgate.co.jp/asset/img/top/yt-bnr.jpg",
      alt: ""
    }
  })])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=style&index=0&id=a9aac016&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=style&index=0&id=a9aac016&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.image-icon[data-v-a9aac016] {\n        width: 60px;\n        height: 60px;\n        -o-object-fit: cover;\n           object-fit: cover;\n        margin-right: 10px;\n}\n.service_h2[data-v-a9aac016] {\n        font-weight: bold;\n        font-size: 30px;\n        line-height: 72px;\n        letter-spacing: 0.05em;\n        display: flex;\n        align-items: center;\n}\n.c-recruit__bottom-item:hover .c-recruit__bottom-bgimg[data-v-a9aac016] {\n        transform: scale(1.1);\n        transition: 0.4s;\n        -webkit-backface-visibility: hidden;\n        backface-visibility: hidden;\n}\nf .recruit-title[data-v-a9aac016]::after {\n        background-color: #fff;\n}\n.blog-home[data-v-a9aac016] {\n        margin-bottom: 120px;\n        margin-top: 120px;\n}\n.is-color-white[data-v-a9aac016] {\n        color: #fff;\n}\n.otherservice[data-v-a9aac016] {\n        margin-top: 60px;\n        margin-bottom: 60px;\n}\n.col-content[data-v-a9aac016] {\n        border: 1px solid #2B2B2B;\n}\n.bnr_area[data-v-a9aac016] {\n        z-index: 1;\n        display: flex;\n        position: relative;\n        background: #000;\n}\n.bnr_area a[data-v-a9aac016] {\n        width: 50%;\n        border: 1px solid #2b2b2b;\n}\n.hoverScale .thumb[data-v-a9aac016] {\n        overflow: hidden;\n        position: relative;\n}\n.hoverScale .thumb .hvrtxt[data-v-a9aac016] {\n        position: absolute;\n        top: 50%;\n        left: 50%;\n        transition: 0.4s;\n        transform: translate(-34%, -20%);\n        opacity: 0;\n        z-index: 1;\n        -webkit-backface-visibility: hidden;\n                backface-visibility: hidden;\n}\n.hoverScale .thumb .hvrtxt .more_txt[data-v-a9aac016] {\n        color: #dadada;\n        font-size: 1.4rem;\n        font-family: \"DIN\";\n        letter-spacing: 0.06em;\n        text-transform: uppercase;\n        position: relative;\n        padding-right: 20px;\n        font-weight: 700;\n}\n.hoverScale .thumb .hvrtxt .more_txt[data-v-a9aac016]::before {\n        width: 10px;\n}\n.hoverScale .thumb .hvrtxt .more_txt[data-v-a9aac016]::after,\n    .hoverScale .thumb .hvrtxt .more_txt[data-v-a9aac016]::before {\n        content: \"\";\n        height: 1px;\n        background-color: #dadada;\n        position: absolute;\n        right: 0;\n        top: 50%;\n        transition: 0.3s;\n}\n.hoverScale .thumb .hvrtxt .more_txt .underline[data-v-a9aac016] {\n        position: relative;\n}\n.hoverScale .thumb .hvrtxt .more_txt .underline[data-v-a9aac016]::after {\n        content: \"\";\n        background: #dadada;\n        width: 100%;\n        height: 1px;\n        position: absolute;\n        bottom: -4px;\n        left: 0;\n        transform: scale(0, 1);\n        transition: transform 0.3s;\n        transform-origin: right top;\n}\n.hoverScale .thumb .hvrtxt .more_txt[data-v-a9aac016]::after {\n        width: 6px;\n        transform: rotate(45deg) translateY(-3px);\n}\n.bnr-img[data-v-a9aac016] {\n        width: 100%;\n        height: auto;\n}\n@media screen and (max-width: 896px) {\n.bnr_area[data-v-a9aac016] {\n            display: block;\n}\n.bnr_area a[data-v-a9aac016] {\n            width: 100%;\n            display: block;\n}\n}\n.btn-views[data-v-a9aac016] {\n        border: 2px solid rgba(37, 115, 176, 1);\n        border-radius: 5px;\n        color: rgba(37, 115, 176, 1);\n        cursor: pointer;\n        display: block;\n        font-size: 18px;\n        font-weight: 700;\n        letter-spacing: .1em;\n        margin-left: 8px;\n        margin-top: 90px;\n        opacity: 1;\n        padding: 19px 0;\n        position: relative;\n        text-align: center;\n        transition: .4s;\n        width: 250px;\n        /* z-index: 999; */\n        z-index: 99;\n}\n.btn-views[data-v-a9aac016]:hover {\n        color: #fff;\n        border: 1px solid rgba(37, 115, 176, 1);\n        transition: 0.4s;\n        background: rgba(37, 115, 176, 1);\n}\n.btn-view[data-v-a9aac016]:hover {\n        background: var(--textcolor);\n}\n.footer-section[data-v-a9aac016] {\n        background-color: #000;\n}\n.service-content-img[data-v-a9aac016] {\n        height: auto;\n        width: 300px;\n        max-width: 100%;\n}\n.service-p[data-v-a9aac016] {\n        color: #333;\n        flex: none;\n        font-family: 'Noto Sans JP';\n        font-size: 14px;\n        font-style: normal;\n        font-weight: 400;\n        height: auto;\n        letter-spacing: 0.15em;\n        line-height: 1.8;\n        margin: 10px 0px 0px 0px;\n        text-align: left;\n        width: 100%;\n        max-width: 100%;\n        justify-content: flex-start;\n}\n.service-col[data-v-a9aac016] {\n        display: flex;\n        align-content: flex-start;\n        align-items: flex-start;\n        flex: none;\n        flex-direction: column;\n        flex-wrap: nowrap;\n        justify-content: center;\n        padding: 0px;\n        width: 49%;\n        max-width: 49%;\n        padding: 0px 15px;\n}\n.service-row[data-v-a9aac016] {\n        display: flex;\n}\n.new[data-v-a9aac016] {\n        z-index: 0;\n        pointer-events: all;\n        flex-wrap: nowrap;\n        flex: none;\n        display: flex;\n        position: relative;\n        flex-direction: column;\n}\n.new-content[data-v-a9aac016] {\n        color: #333;\n        font-family: 'Noto Sans JP';\n        font-size: 14px;\n        font-weight: 700;\n        letter-spacing: 0.05em;\n        line-height: 1.7;\n        margin: 12px 0px 0px 0px;\n        text-align: left;\n        justify-content: flex-start;\n}\n.new-listing .img_box[data-v-a9aac016] {\n        margin-right: 25px;\n        width: 160px;\n}\n.new-listing[data-v-a9aac016]:nth-child(1) {\n        border-top: 0px solid #bbbbbb;\n}\n.new-link[data-v-a9aac016]:hover {\n        opacity: 0.6;\n}\n.new-link[data-v-a9aac016] {\n        background: rgba(0, 0, 0, 0.0);\n        flex: none;\n        flex-direction: row;\n        height: auto;\n        justify-content: flex-start;\n        margin: 0px 0px 0px 0px;\n        padding: 16px 0px 16px 0px;\n        width: 100%;\n        max-width: 100%;\n}\n.new-date[data-v-a9aac016] {\n        color: #666666;\n        font-size: 14px;\n        font-weight: 400;\n}\n.new-tag[data-v-a9aac016] {\n        align-content: center;\n        align-items: center;\n        background: #FFFFFF;\n        flex-wrap: nowrap;\n        justify-content: center;\n        padding: 4px 8px 4px 8px;\n        font-size: 10px;\n}\n.new-box[data-v-a9aac016] {\n        align-content: center;\n        align-items: center;\n        background: #f7f7f7;\n        flex-wrap: nowrap;\n        flex: none;\n        justify-content: center;\n        padding: 30px 0px 40px 0px;\n}\n.new-listing[data-v-a9aac016] {\n        align-content: flex-start;\n        align-items: flex-start;\n        background: rgba(0, 0, 0, 0.0);\n        justify-content: flex-start;\n        width: 960px;\n        max-width: 100%;\n        border-bottom: 0px solid #bbbbbb;\n        border-left: 0px solid #bbbbbb;\n        border-right: 0px solid #bbbbbb;\n        border-top: 1px solid #bbbbbb;\n}\n.new-item[data-v-a9aac016] {\n        align-content: flex-start;\n        align-items: flex-start;\n        flex: 1;\n        margin: 0px 0px 0px 0px;\n        max-width: 100%;\n}\n.news[data-v-a9aac016] {\n        padding-bottom: 50px;\n}\n.news-contents[data-v-a9aac016] {\n        display: flex;\n        justify-content: space-between;\n        margin-bottom: 0px;\n}\n.new.icon[data-v-a9aac016],\n    .new.text[data-v-a9aac016] {\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        align-content: center;\n        justify-content: center;\n        overflow: visible;\n        word-break: break-word;\n        word-wrap: anywhere;\n}\n.new-meta[data-v-a9aac016] {\n        align-content: center;\n        align-items: center;\n        flex-direction: row;\n        flex-wrap: nowrap;\n        justify-content: center;\n        padding: 0px;\n        display: flex;\n}\n.WorkSlider[data-v-a9aac016] {\n        overflow: inherit;\n}\n.WorkSlider .swiper-button-next[data-v-a9aac016] {\n        top: -50px;\n        width: 35px;\n        height: 35px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background-color: #333333;\n        border-radius: 50px;\n        color: #fff;\n}\n.WorkSlider .swiper-button-next[data-v-a9aac016]:after {\n        font-size: 14px;\n}\n\n    /*hero*/\n.top-hero[data-v-a9aac016] {\n        position: relative;\n        margin-top: 60px;\n        height: 500px;\n}\n.top-hero[data-v-a9aac016]::before {\n        content: \"\";\n        position: absolute;\n        top: 49px;\n        display: inline-block;\n        width: calc(100vw - 80px + (100% - 100vw) / 2);\n        height: 450px;\n        background-color: rgba(255, 255, 255, 0.6);\n        border-radius: 30px 0px 0px 30px;\n        z-index: 1;\n}\n.top-hero__title__br-sp[data-v-a9aac016] {\n        display: none;\n}\n.top-hero__video[data-v-a9aac016] {\n        position: absolute;\n        top: 49px;\n        display: inline-block;\n        width: calc(100vw - 80px + (100% - 100vw) / 2);\n        height: 450px;\n        border-radius: 30px 0px 0px 30px;\n        z-index: 0;\n        -o-object-fit: cover;\n           object-fit: cover;\n}\n.top-hero__title[data-v-a9aac016] {\n        position: relative;\n        margin-left: 0px;\n        font-weight: bold;\n        font-size: 40px;\n        line-height: 96px;\n        letter-spacing: 0.05em;\n        z-index: 2;\n}\n.top-hero__title .horo-text-b[data-v-a9aac016] {\n        transition: all 800ms;\n}\n.top-hero__title span[data-v-a9aac016] {\n        filter: blur(10px);\n        opacity: 0;\n}\n.devlop-content-text[data-v-a9aac016] {\n        max-width: 675px;\n        font-weight: bold;\n        font-size: 16px;\n        line-height: 24px;\n        color: #333333;\n}\n.ceo-mbl[data-v-a9aac016] {\n        display: none;\n}\n.ceo-desktop[data-v-a9aac016] {\n        display: block;\n}\n@media (max-width: 1200px) {\n.WorkSlider[data-v-a9aac016] {\n            overflow: hidden;\n}\n}\n@media (max-width: 767px) {\n.ceo-mbl[data-v-a9aac016] {\n            display: block;\n            height: auto;\n            -o-object-fit: contain;\n               object-fit: contain;\n            width: 100%;\n}\n``\n        .ceo-desktop[data-v-a9aac016] {\n            display: none;\n}\n.new-box[data-v-a9aac016] {\n            padding: 32px 15px;\n            max-width: 100%;\n}\n.new-date[data-v-a9aac016] {\n            font-size: 10px;\n}\n.new-listing .img_box[data-v-a9aac016] {\n            margin-right: 10px;\n            width: 116px;\n}\n.service-col[data-v-a9aac016] {\n            max-width: 100%;\n            width: 100%;\n            margin: 25px 0px;\n}\n.otherservice .service-row[data-v-a9aac016] {\n            flex-direction: column;\n}\n.WorkSlider[data-v-a9aac016] {\n            overflow: hidden;\n}\n.WorkSlider .swiper-button-next[data-v-a9aac016] {\n            top: -15px;\n}\n.devlop-content-text[data-v-a9aac016] {\n            max-width: inherit;\n            font-weight: 500;\n            font-size: 13px;\n            line-height: 20px;\n}\n.movie-inner iframe[data-v-a9aac016] {\n            height: 200px;\n}\n.about-iden-container[data-v-a9aac016] {\n            padding: 0px;\n}\n.about-iden-container .text[data-v-a9aac016] {\n            padding: 0px !important;\n}\n.txt-rotate[data-v-a9aac016] {\n            font-size: 32px;\n}\n.top-hero[data-v-a9aac016] {\n            margin-top: 53px;\n            height: 330px;\n}\n.top-hero__title__br-sp[data-v-a9aac016] {\n            display: block;\n}\n.top-hero__title__br-pc[data-v-a9aac016] {\n            display: none;\n}\n.top-hero[data-v-a9aac016]::before {\n            width: 97%;\n            top: 0;\n            background-color: rgba(255, 255, 255, 0.6);\n            border-radius: 10px 0 0 10px;\n}\n.top-hero__video[data-v-a9aac016] {\n            width: 97%;\n            top: 0;\n            border-radius: 10px 0 0 10px;\n            height: 340px;\n}\n.top-hero__title[data-v-a9aac016] {\n            padding-top: 12px;\n            margin-left: 0px;\n            font-size: 24px;\n            line-height: 150%;\n            letter-spacing: 0.05em;\n}\n}\n\n    /*scroll*/\n.scroll_top[data-v-a9aac016] {\n        margin-top: 8px;\n        margin-bottom: 40px;\n        font-weight: bold;\n        font-size: 12px;\n        line-height: 18px;\n        letter-spacing: 0.15em;\n}\n@media (max-width: 767px) {\n.scroll_top[data-v-a9aac016] {\n            margin-top: 30px;\n            margin-bottom: 30px;\n}\n}\n\n    /*about*/\n.about[data-v-a9aac016] {\n        margin-bottom: 102px;\n}\n\n    /*work*/\n.work[data-v-a9aac016] {\n        margin-bottom: 120px;\n        position: relative;\n        margin-top: 120px;\n}\n.content-title_work[data-v-a9aac016] {\n        margin-bottom: 20px;\n}\n.content-text_work[data-v-a9aac016] {\n        margin-top: 0px;\n        margin-bottom: 60px;\n}\n.work-contents[data-v-a9aac016] {\n        display: none;\n        justify-content: space-between;\n}\n.work__right[data-v-a9aac016] {\n        top: 190px;\n        right: 0;\n        display: block;\n        width: 30px;\n        height: 30px;\n        margin: 2px 0 20px auto;\n        transform: rotate(180deg);\n}\n.work-contents__pc-frame[data-v-a9aac016] {\n        position: relative;\n        width: 100vw;\n        margin-left: calc((100% - 100vw) / 2);\n        overflow: hidden;\n        margin-top: -20px;\n        padding-top: 20px;\n}\n.work-contents__pc-frame[data-v-a9aac016]::before {\n        height: 430px;\n        display: block;\n        content: \"\";\n}\n.work-contents__pc[data-v-a9aac016] {\n        position: absolute;\n        left: 0;\n        top: 20px;\n        display: flex;\n        width: calc(330px * 8 + 65px * 7);\n        height: 400px;\n}\n.work-contents__pc .work-contents__list[data-v-a9aac016] {\n        position: absolute;\n        width: 350px;\n        min-height: 350px;\n}\n@media (max-width: 767px) {\n.recruit__spacer-sp[data-v-a9aac016] {\n            height: auto;\n}\n.blog[data-v-a9aac016] {\n            margin-top: 0px !important;\n}\n.work[data-v-a9aac016] {\n            margin-bottom: 60px;\n            margin-top: 0px;\n}\n.content-text_work[data-v-a9aac016] {\n            margin-bottom: 30px;\n            font-weight: bold;\n            font-size: 14px;\n            line-height: 22px;\n}\n.work__right[data-v-a9aac016] {\n            display: none;\n}\n.work-contents[data-v-a9aac016] {\n            display: flex;\n            padding-top: 20px;\n            margin-top: -20px;\n            margin-bottom: 0;\n            padding-bottom: 30px;\n            margin-bottom: 50px;\n            overflow-x: scroll;\n            overflow-y: visible;\n            width: 100vw;\n            margin-left: calc(var(--content-padding-side-sp) * -1);\n}\n.work-contents__pc-frame[data-v-a9aac016] {\n            display: none;\n}\n.work-contents__pc[data-v-a9aac016] {\n            display: none;\n}\n.work-contents__list[data-v-a9aac016] {\n            width: 100%;\n}\n.work-contents .work-contents__list[data-v-a9aac016]:last-child {\n            margin-right: 30px;\n}\n}\n\n    /*blog*/\n.blog[data-v-a9aac016] {\n        margin-bottom: 120px;\n        margin-top: 120px;\n}\n.content-title_blog[data-v-a9aac016] {\n        margin-bottom: 20px;\n}\n.content-text_blog[data-v-a9aac016] {\n        margin-top: 0px;\n        margin-bottom: 60px;\n}\n.blog-contents[data-v-a9aac016] {\n        display: flex;\n        justify-content: space-between;\n        margin-bottom: 60px;\n}\n.blog-contents__list[data-v-a9aac016] {\n        width: calc((100% - 65px * 2) / 3);\n}\n@media (max-width: 767px) {\n.blog-home[data-v-a9aac016] {\n            margin: 50px auto 60px;\n}\n.blog[data-v-a9aac016] {\n            margin: 50px auto 60px;\n}\n.content-text_blog[data-v-a9aac016] {\n            margin-bottom: 30px;\n            font-weight: bold;\n            font-size: 14px;\n            line-height: 22px;\n}\n.blog-contents[data-v-a9aac016] {\n            margin-top: -20px;\n            padding-top: 20px;\n            margin-bottom: 0;\n            padding-bottom: 30px;\n            margin-bottom: 50px;\n            overflow-x: scroll;\n            overflow-y: visible;\n            /* width: 100vw; */\n            margin-left: calc(var(--content-padding-side-sp) * -1);\n}\n.blog-contents .blog-contents__list[data-v-a9aac016]:last-child {\n            margin-right: 0px;\n}\n.blog-contents__list__tags[data-v-a9aac016] {\n            top: 78px !important;\n}\n.blog-contents__list[data-v-a9aac016] {\n            width: 100%;\n            /* margin-left: 30px; */\n}\n}\n\n    /*recruit*/\n.recruit[data-v-a9aac016] {\n        margin-bottom: 60px;\n}\n\n    /* about idenbrid */\n.about_iden[data-v-a9aac016] {\n        display: flex;\n        max-width: 1500px;\n        margin: 0 auto;\n}\n.about_iden .text[data-v-a9aac016] {\n        letter-spacing: 2px;\n        font-weight: 600;\n        font-size: 16px;\n}\n.about-iden-container .text[data-v-a9aac016] {\n        background-color: #fff;\n        max-width: 700px;\n        padding: 0px 20px;\n}\n.about-iden-container[data-v-a9aac016] {\n        position: relative;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        width: 100%;\n        padding: 0px;\n}\n@media screen and (min-width: 767px) {\n.about-iden-container[data-v-a9aac016] {\n            flex-direction: row;\n}\n}\n\n    /* service section */\n.service[data-v-a9aac016] {\n        padding-bottom: 80px;\n        padding-top: 160px;\n        /*影の調整 160 - 20*/\n}\n.text[data-v-a9aac016] {\n        margin-top: 10px;\n}\n.about[data-v-a9aac016] {\n        margin-bottom: 0px;\n}\n#MOVIE .container[data-v-a9aac016] {\n        padding: 0px;\n}\n.service-subcontents__text[data-v-a9aac016] {\n        font-weight: bold;\n        font-size: 16px;\n        line-height: 24px;\n        width: calc((100% - 415px) / 1);\n        text-align: center;\n        margin: auto;\n}\n.service-contents[data-v-a9aac016] {\n        position: relative;\n        display: flex;\n        justify-content: space-between;\n        flex-wrap: wrap;\n        flex-direction: row-reverse;\n}\n.service-contents__text[data-v-a9aac016] {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: calc((100% - 60px) / 2);\n}\n.service-contents__list[data-v-a9aac016] {\n        width: calc((100% - 60px) / 2);\n        margin-bottom: 60px;\n}\n.service-contents .service-contents__list[data-v-a9aac016]:nth-child(2n+1) {\n        position: relative;\n        top: 132px;\n}\n.service-contents__text[data-v-a9aac016] {\n        font-weight: bold;\n        font-size: 16px;\n        line-height: 24px;\n}\n.service-contents__list[data-v-a9aac016] {\n        background: #FFFFFF;\n        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);\n        border-radius: 15px;\n        min-height: 360px;\n}\n.service-contents__list .service-items[data-v-a9aac016] {\n        position: relative;\n        display: inline-block;\n        width: 100%;\n        height: 100%;\n}\n.service-contents__list .service-items:hover .service-contents__list__thumbnail[data-v-a9aac016] {\n        transform: translateY(-6%) scale(1.15);\n}\n.service-contents__list__thumbnail-frame[data-v-a9aac016] {\n        position: absolute;\n        border-radius: 15px 15px 0 0;\n        top: 0;\n        left: 0;\n        height: 221px;\n        width: 100%;\n        overflow: hidden;\n}\n.service-contents__list__thumbnail[data-v-a9aac016] {\n        height: 221px;\n        width: 100%;\n        -o-object-fit: cover;\n           object-fit: cover;\n        transition: 0.5s;\n        position: relative;\n        z-index: 1;\n}\n.service-contents__list__subtitle[data-v-a9aac016] {\n        margin-top: 189px;\n        margin-left: 30px;\n        font-weight: bold;\n        font-size: 14px;\n        line-height: 21px;\n        letter-spacing: 0.05em;\n        position: relative;\n        z-index: 2;\n}\n.service-contents__list__title[data-v-a9aac016] {\n        margin: 0 30px 10px 30px;\n        font-weight: bold;\n        font-size: 24px;\n        line-height: 36px;\n        letter-spacing: 0.05em;\n        position: relative;\n        z-index: 2;\n}\n.service-contents__list__text[data-v-a9aac016] {\n        margin: 0 30px;\n        padding-bottom: 20px;\n        font-weight: 500;\n        font-size: 14px;\n        line-height: 21px;\n}\n.viewmore-btn_service[data-v-a9aac016] {\n        margin-top: 15px;\n}\n.idenbrid-background[data-v-a9aac016] {\n        border-radius: 15px;\n}\n@media (max-width: 767px) {\n.idenbrid-background[data-v-a9aac016] {\n            width: 100%;\n}\n.service[data-v-a9aac016] {\n            padding-bottom: 60px;\n            padding-top: 20px;\n}\n.service-contents[data-v-a9aac016] {\n            display: block;\n}\n.service-contents__text[data-v-a9aac016] {\n            position: relative;\n            width: 100%;\n}\n.service-contents__list[data-v-a9aac016] {\n            width: 100%;\n            min-height: 270px;\n}\n.service-contents__list .service-item[data-v-a9aac016] {\n            height: auto;\n}\n.service-contents .service-contents__list[data-v-a9aac016]:nth-child(2n+1) {\n            top: inherit;\n}\n.service-contents__text[data-v-a9aac016],\n        .service-contents__list[data-v-a9aac016] {\n            margin-bottom: 30px !important;\n}\n.service-contents .service-contents__list[data-v-a9aac016]:nth-child(5) {\n            margin-bottom: 0 !important;\n}\n.service-contents__list__thumbnail-frame[data-v-a9aac016] {\n            height: 120px;\n}\n.service-contents__list__thumbnail[data-v-a9aac016] {\n            height: 120px;\n            -o-object-position: bottom;\n               object-position: bottom;\n}\n.service-contents__list__subtitle[data-v-a9aac016] {\n            margin-top: 112px;\n            margin-bottom: 0;\n            margin-left: 10px;\n            font-size: 10px;\n            line-height: 15px;\n}\n.service-contents__list__title[data-v-a9aac016] {\n            margin: 0 30px 10px 10px;\n            font-size: 14px;\n            line-height: 21px;\n}\n.service-contents__list__text[data-v-a9aac016] {\n            margin: 0 10px 12px 10px;\n            font-size: 13px;\n            line-height: 19px;\n}\n.viewmore-btn_service[data-v-a9aac016] {\n            margin: 50px auto 0 auto;\n}\n}\n\n    /* work section */\n.work-contents__list[data-v-a9aac016] {\n        background: #FFFFFF;\n        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);\n        border-radius: 10px;\n        transition: 1s;\n        transition-property: transform;\n        min-height: 320px;\n}\n.work-contents__list[data-v-a9aac016]:hover {\n        transform: scale(1.05);\n}\n.work-contents__list__thumbnail[data-v-a9aac016] {\n        width: 100%;\n}\n.work-contents__list__company[data-v-a9aac016] {\n        margin: 20px auto 5px 20px;\n        font-weight: bold;\n        font-size: 14px;\n        line-height: 21px;\n}\n.work-contents__list__title[data-v-a9aac016] {\n        margin-bottom: 5px;\n        margin-left: 20px;\n        font-weight: bold;\n        font-size: 16px;\n        line-height: 24px;\n}\n.work-contents__list__tags[data-v-a9aac016] {\n        margin-left: 20px;\n        padding-bottom: 1px;\n        font-weight: 500;\n        font-size: 14px;\n        line-height: 21px;\n        color: #727171;\n}\n@media (max-width: 767px) {\n.new-listing .img_box[data-v-a9aac016] {\n            width: 115px;\n}\n.work-contents__list__thumbnail[data-v-a9aac016] {\n            margin-bottom: 12px;\n}\n.work-contents__list__company[data-v-a9aac016] {\n            margin: 0 12px 5px 12px;\n            font-size: 14px;\n            line-height: 21px;\n}\n.work-contents__list__title[data-v-a9aac016] {\n            margin: 0 12px 12px 12px;\n            font-size: 15px;\n            line-height: 22px;\n}\n.work-contents__list__tags[data-v-a9aac016] {\n            margin: 0 12px;\n            padding-bottom: 12px;\n            font-size: 13px;\n            line-height: 19px;\n}\n}\n.c-recruit__bottom[data-v-a9aac016] {\n        background: #fff;\n        padding-bottom: 0.71429rem;\n}\n.c-recruit__bottom-block[data-v-a9aac016] {\n        background: #fff;\n        position: relative;\n        margin-top: -6.78571rem;\n        padding-top: 1.07143rem;\n}\n.large-6[data-v-a9aac016] {\n        width: 50%;\n        padding-left: 18px;\n        padding-right: 18px;\n}\n.c-recruit__bottom-item[data-v-a9aac016] {\n        position: relative;\n        display: block;\n        text-decoration: none;\n}\n.c-recruit__bottom-bgimg[data-v-a9aac016] {\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center center;\n        height: 100%;\n        width: 100%;\n        z-index: 0;\n}\n.c-recruit__bottom-content[data-v-a9aac016] {\n        margin-top: 20px;\n}\n.c-recruit__bottom-title[data-v-a9aac016] {\n        padding-top: 4.64286rem;\n        color: #fff;\n        text-align: center;\n        padding-bottom: 0 !important;\n}\n.c-recruit__bottom-text[data-v-a9aac016] {\n        color: #fff;\n        margin-top: 50px;\n        padding-bottom: 3.64286rem;\n        text-align: center;\n        font-size: 1.28571rem;\n}\n.c-recruit__bottom-button[data-v-a9aac016] {\n        position: relative;\n        display: block;\n        width: 240px;\n        height: 58px;\n        text-align: center;\n        line-height: 58px;\n        font-weight: bold;\n        font-size: 16px;\n        letter-spacing: 0.1em;\n        color: #FFFFFF;\n        background: var(--textcolor);\n        box-shadow: 0px 4px 7px rgb(0 0 0 / 15%);\n        border-radius: 5px;\n        transition: 1s;\n        margin: auto;\n}\n.c-recruit__bottom-title span[data-v-a9aac016] {\n        font-size: 2.85714rem;\n}\n.u-hidden-lg[data-v-a9aac016] {\n        display: none !important;\n}\n.c-recruit__bottom-item[data-v-a9aac016]:hover {\n        opacity: 0.8;\n}\n.c-recruit__bottom-title small[data-v-a9aac016] {\n        display: block;\n        font-size: 14px;\n}\n.c-message[data-v-a9aac016] {\n        height: 35.42857rem;\n        margin-top: 0rem;\n        position: relative;\n        overflow: hidden;\n}\n.c-message__bgimg[data-v-a9aac016] {\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center bottom;\n        width: 100%;\n        height: calc(100% - 90px);\n        position: absolute;\n        z-index: -1;\n        right: 0;\n        bottom: 0;\n        left: 0;\n}\n.c-message__bgimg[data-v-a9aac016]::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        margin: auto;\n        width: 100%;\n        height: 100%;\n}\n.c-message__content[data-v-a9aac016] {\n        display: flex;\n}\n.large-7[data-v-a9aac016] {\n        width: 58.33333%;\n        padding: 50px 0px 0px;\n}\n.large-5[data-v-a9aac016] {\n        width: 41.66667%;\n        padding-left: 18px;\n        padding-right: 18px;\n}\n.c-message__title[data-v-a9aac016] {\n        text-align: left;\n        margin-top: 5rem;\n}\n.c-message__title small[data-v-a9aac016] {\n        font-size: 1rem;\n        line-height: 2.14286;\n        font-weight: normal;\n}\n.c-message__title-sub[data-v-a9aac016] {\n        margin-top: 0rem;\n        font-size: 1.7rem;\n        letter-spacing: 0.1em;\n        line-height: 1.5625;\n        color: #102855;\n        font-weight: bold;\n}\n.c-button[data-v-a9aac016],\n    .c-button-social>a[data-v-a9aac016] {\n        outline: none;\n        display: inline-block;\n        width: 100%;\n        max-width: 14.5rem;\n        text-align: center;\n        background-color: #102855;\n        color: #fff;\n        border: 1px solid #102855;\n        text-decoration: none;\n        padding: 0.92857rem 1.71429rem;\n        position: relative;\n        transition: all .3s;\n        font-weight: 700;\n        font-family: 'Lato', sans-serif;\n        font-weight: 400;\n}\n.c-button.is-md[data-v-a9aac016],\n    .c-button-social>a.is-md[data-v-a9aac016] {\n        max-width: 15rem;\n        height: 58px;\n        font-size: 16px;\n        font-weight: bold;\n        transition: .3s all;\n        margin: 0;\n        position: relative;\n        border-radius: 5px;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n}\n.c-button.is-white[data-v-a9aac016],\n    .c-button-social>a.is-white[data-v-a9aac016] {\n        background: #fff;\n        color: #102855;\n}\n.c-button.is-white[data-v-a9aac016]:hover,\n    .c-button-social>a.is-white[data-v-a9aac016]:hover {\n        background: #102855;\n        color: #fff;\n        transition: .3s all;\n}\n.c-button[data-v-a9aac016]:hover,\n    .c-button-social>a[data-v-a9aac016]:hover {\n        opacity: 1;\n        background-color: #fff;\n        color: #102855;\n}\n.c-button.is-md[data-v-a9aac016]:hover::before,\n    .c-button-social>a.is-md[data-v-a9aac016]:hover::before {\n        background: #333;\n}\n.c-button.is-md[data-v-a9aac016]:hover,\n    .c-button-social>a.is-md[data-v-a9aac016]:hover {\n        transition: .3s all;\n}\n.c-recruit[data-v-a9aac016] {\n        position: relative;\n        padding-bottom: 30px;\n        margin-bottom: 5.71429rem;\n}\n.c-recruit__head[data-v-a9aac016] {\n        position: relative;\n        background: #102855;\n}\n.c-recruit__bgimg[data-v-a9aac016] {\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center center;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        opacity: .3;\n}\n.c-recruit__head-title[data-v-a9aac016]::after {\n        content: \"\";\n        position: absolute;\n        bottom: 0;\n        left: 5px;\n        margin: auto;\n        width: 65px;\n        height: 1px;\n        background: #fff;\n}\n.c-recruit__head-inner[data-v-a9aac016] {\n        width: 50%;\n        padding: 4.2rem 0 9.42857rem;\n}\n.c-recruit__head-title[data-v-a9aac016] {\n        color: #fff;\n        display: flex;\n        align-items: center;\n        margin: 0;\n        position: relative;\n        padding-bottom: 3rem;\n}\n.c-recruit__head-title span[data-v-a9aac016] {\n        font-size: 85px;\n        line-height: 1.03529;\n        letter-spacing: 0.1em;\n}\n.c-recruit__head-title small[data-v-a9aac016] {\n        font-size: 14px;\n        line-height: 2.14286;\n        margin-left: 2.14286rem;\n}\n.c-recruit__head-text[data-v-a9aac016] {\n        color: #fff;\n        margin-top: 1.85714rem;\n        font-size: 26px;\n        font-weight: bold;\n}\n.c-recruit__head-button[data-v-a9aac016] {\n        margin-top: 2.35714rem;\n}\n.c-button[data-v-a9aac016],\n    .c-button-social>a[data-v-a9aac016] {\n        outline: none;\n        display: inline-block;\n        width: 100%;\n        max-width: 14.5rem;\n        text-align: center;\n        background-color: #102855;\n        color: #fff;\n        border: 1px solid #102855;\n        text-decoration: none;\n        padding: 0.92857rem 1.71429rem;\n        position: relative;\n        transition: all .3s;\n        font-weight: 700;\n        font-family: 'Lato', sans-serif;\n        font-weight: 400;\n}\n.c-button.is-white[data-v-a9aac016]::before,\n    .c-button-social>a.is-white[data-v-a9aac016]::before {\n        background: #102855;\n}\n.c-button.is-white[data-v-a9aac016]::after,\n    .c-button-social>a.is-white[data-v-a9aac016]::after {\n        background: #102855;\n}\n.c-message__bgimg[data-v-a9aac016] {\n        background-repeat: no-repeat;\n        background-size: cover;\n        background-position: center bottom;\n        width: 100%;\n        height: calc(100% - 90px);\n        position: absolute;\n        z-index: -1;\n        right: 0;\n        bottom: 0;\n        left: 0;\n}\n.c-message__bgimg[data-v-a9aac016]::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        margin: auto;\n        width: 100%;\n        height: 100%;\n}\n.large-5[data-v-a9aac016] {\n        width: 41.66667%;\n        padding-left: 18px;\n        padding-right: 18px;\n}\n.c-message__title span[data-v-a9aac016] {\n        font-size: 65px;\n        letter-spacing: 0.1em;\n        font-weight: bold;\n        line-height: 1.03896;\n        color: #102855;\n        display: block;\n}\n.c-message__title small[data-v-a9aac016] {\n        font-size: 1rem;\n        line-height: 2.14286;\n        font-weight: normal;\n}\n.c-message__title-sub[data-v-a9aac016] {\n        margin-top: 0rem;\n        font-size: 1.7rem;\n        letter-spacing: 0.1em;\n        line-height: 1.5625;\n        color: #102855;\n        font-weight: bold;\n}\n.c-message__button[data-v-a9aac016] {\n        margin-top: 3.85714rem;\n}\n@media (max-width:1200px) {\n.c-message__title-sub[data-v-a9aac016] {\n            font-size: 1.8rem;\n}\n.large-5[data-v-a9aac016] {\n            align-items: center;\n            display: flex;\n}\n.c-message__button[data-v-a9aac016] {\n            margin-top: 0.85714rem;\n}\n.c-message[data-v-a9aac016] {\n            padding: 30px 0px;\n            height: auto;\n}\n}\n@media (max-width: 945px) {\n.c-message__button[data-v-a9aac016] {\n            margin-bottom: 3.85714rem;\n}\n.c-message__title-sub[data-v-a9aac016] {\n            font-size: 24px;\n            margin-top: 2rem;\n}\n.c-message__button[data-v-a9aac016] {\n            margin-top: 1.85714rem;\n}\n.c-message__title span[data-v-a9aac016] {\n            font-size: 30px;\n}\n.c-message[data-v-a9aac016] {\n            height: 100%;\n}\n.c-recruit__head-title[data-v-a9aac016] {\n            text-align: center;\n            display: block;\n            padding-bottom: 2.42857rem;\n}\n.c-recruit__bottom[data-v-a9aac016] {\n            background: #102855;\n            padding-bottom: 0.71429rem;\n}\n.c-message__content[data-v-a9aac016] {\n            align-items: center;\n}\n.c-message__title[data-v-a9aac016] {\n            text-align: left;\n            margin-top: 10rem;\n}\n.content-title[data-v-a9aac016] {\n            font-size: 36px;\n}\n.small-12[data-v-a9aac016] {\n            width: 100%;\n            padding-left: 8px;\n            padding-right: 8px;\n}\n.c-recruit[data-v-a9aac016] {\n            padding-bottom: 0;\n            margin-bottom: 0;\n}\n.c-recruit__head[data-v-a9aac016]::after {\n            background-position: center right;\n            width: 100%;\n}\n.c-recruit__head-title[data-v-a9aac016] {\n            text-align: center;\n            display: block;\n            padding-bottom: 2.42857rem;\n}\n.c-recruit__head-title span[data-v-a9aac016] {\n            font-size: 40px;\n            display: block;\n}\n.c-recruit__head-title[data-v-a9aac016]::after {\n            right: 0;\n            left: 0;\n}\n.c-recruit__head-title small[data-v-a9aac016] {\n            margin-left: 0;\n}\n.c-recruit__bottom-item[data-v-a9aac016] {\n            padding-bottom: 2rem;\n            margin-bottom: 1.21429rem;\n}\n.c-recruit__head-title[data-v-a9aac016]::after {\n            right: 0;\n            left: 0;\n}\n.c-recruit__head-text[data-v-a9aac016] {\n            font-size: 1.07143rem;\n            padding: 0 1.14286rem;\n}\n.c-recruit__head-inner[data-v-a9aac016] {\n            width: 100%;\n}\n.c-recruit__head-button[data-v-a9aac016] {\n            text-align: center;\n            position: relative;\n            z-index: 9;\n}\n.c-recruit__bottom-block[data-v-a9aac016] {\n            background: #102855;\n}\n.c-recruit__bottom-text[data-v-a9aac016] {\n            margin-top: 25px;\n}\n.c-recruit__bottom-button[data-v-a9aac016] {\n            bottom: 0px;\n}\n.c-recruit__bottom-title[data-v-a9aac016] {\n            padding-top: 50px;\n}\n}\n@media (max-width: 945px) {\n.c-message__content[data-v-a9aac016] {\n            flex-direction: column;\n}\n}\n@media (max-width: 475px) {\n.content-title[data-v-a9aac016] {\n            font-size: 24px;\n}\n.otherservice[data-v-a9aac016] {\n        margin-bottom: 0px;\n}\n.c-message[data-v-a9aac016] {\n        margin-top: 0px;\n}\n.c-message__title-sub[data-v-a9aac016] {\n            font-size: 16px;\n}\n.c-message__content[data-v-a9aac016] {\n            flex-direction: column;\n}\n.content-title[data-v-a9aac016] {\n            font-size: 28px;\n}\n.service_h2[data-v-a9aac016] {\n            flex-direction: row;\n            font-size: 20px;\n}\n.otherservice .service-row[data-v-a9aac016] {\n            margin-top: 0px !important;\n}\n.service_h2 .otherservice[data-v-a9aac016] {\n            margin-bottom: 0px;\n}\n.news[data-v-a9aac016] {\n            margin-bottom: 0px;\n}\n}\n@media (max-width: 320px) {\n.service_h2[data-v-a9aac016]{\n            font-size: 15px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=style&index=0&id=a9aac016&scoped=true&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=style&index=0&id=a9aac016&scoped=true&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_a9aac016_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=a9aac016&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=style&index=0&id=a9aac016&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_a9aac016_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_a9aac016_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/pages/Home.vue":
/*!************************************************!*\
  !*** ./resources/js/components/pages/Home.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_a9aac016_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=a9aac016&scoped=true& */ "./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _Home_vue_vue_type_style_index_0_id_a9aac016_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=a9aac016&scoped=true&lang=css& */ "./resources/js/components/pages/Home.vue?vue&type=style&index=0&id=a9aac016&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_a9aac016_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_a9aac016_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a9aac016",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Home.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/pages/Home.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_a9aac016_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=a9aac016&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=template&id=a9aac016&scoped=true&");


/***/ }),

/***/ "./resources/js/components/pages/Home.vue?vue&type=style&index=0&id=a9aac016&scoped=true&lang=css&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/pages/Home.vue?vue&type=style&index=0&id=a9aac016&scoped=true&lang=css& ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_a9aac016_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&id=a9aac016&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/pages/Home.vue?vue&type=style&index=0&id=a9aac016&scoped=true&lang=css&");


/***/ })

}]);