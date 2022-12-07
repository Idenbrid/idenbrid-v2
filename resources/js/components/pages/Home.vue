<template>
    <div>
        <Navbar />
        <main>
            <section class="mycontents-wide top-hero" id="/">
                <h1 class="top-hero__title">
                    <span class="horo-text-b" style="transition-delay: 1.15s;">クリエイティブな発想と</span>
                </h1>
                <h2>
                    <span class="txt-rotate ml-0" data-period="2000"
                        data-rotate='[ "ONE TEAMで", "豊富なEXPERIENCEによって", "TECHNOLOGYによって", "熱いPASSIONによって" ]'></span>
                </h2>
                <h2 class="top-hero__title">
                    <span class="horo-text-b" style="transition-delay: 1.15s;">お客様のユーザーペインを解決します。</span>

                </h2>
                <router-link class="btn-views" to="/doc/">資料ダウンロード<i class="fa fa-download ml-2" aria-hidden="true"></i>
                </router-link>
                <video class="top-hero__video" src="/public/assets/videos/idenbridopeningvideo.mp4" autoplay muted loop
                    playsinline></video>
            </section>
            <div class="scroll scroll_top">
                <p class="scroll__text">SCROLL</p>
                <span class="scroll__arrow"><span class="scroll__arrow__box"></span></span>
            </div>
             <!-- About company work-->
             <section class="mycontents-wide">
                <h3 class="content-title">IDENBRIDとは</h3>
                <div class="service-row">
                    <div class="mycontents-wide p-0">

                        <h2 class="service_h2">日本とパキスタンにおいてIT受託開発を行う企業です。
                        </h2>
                        <p class="service-p">
                            IDENRBIDは開発チームを日本及びパキスタンにて組んでいるIT受託開発会社です。スタートアップ企業様から東証プライム上場企業までお客様の幅は広く、要件定義からシステム設計、UIUXデザイン、ウェブからスマホアプリ開発そしてクラウドまでワンストップで開発しております。高度な大規模開発は日本チームで、そしてラボ型開発はパキスタンにてとグローバル企業だからできる対応力でクライアント様にご好評頂いています。
                        </p>
                    </div>
                </div>
            </section>
            <!-- About company work-->
            <!-- Who is Idenbrid-->
            <section>
                <div class="c-message">
                    <div class="c-message__bgimg"
                        style="background-image: url('/assets/img/CEO-Message background.png'); visibility: visible; opacity: 1; transition: opacity 0.8s cubic-bezier(0.5, 0, 0, 1) 0.5s;"
                        data-sr-id="2"></div>
                    <div class="mycontents-wide p-0">
                        <div class="c-message__content">
                            <div class="c-message__box large-7 small-12">
                                <h3 class="content-title c-message__title">CEO MESSAGE</h3>
                                <div class="c-message__title-sub">「パキスタンから世界一必要とされるIT企業になる」<br>
                                    なぜ私たちはパキスタンでIT企業を設立したのか</div>
                                <div class="c-message__button u-hidden-sm">
                                    <router-link to="/message/" class="viewmore-btn  viewmore-btn_service mt-3">View
                                        More</router-link>
                                </div>
                            </div>
                            <div class="large-5 small-12">
                                <img class="c-message__img ceo-desktop" src="/assets/img/CEO Person.png" alt="">
                                <img class="c-message__img ceo-mbl" src="/assets/img/CEO Person.png" alt="">
                                <!-- <img class="c-message__img ceo-mbl" src="/assets/img/CEO-Person-mbl.png" alt=""> -->
                            </div>
                            <div class="c-message__button u-hidden-lg">
                                <router-link class="c-button is-md" to="/about-company/">View More</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end -->
            <!-- other service -->
            <section class="otherservice mycontents-wide">
                <h3 class="content-title">SERVICE</h3>
                <div class="service-row  my-5">
                    <div class="service-col">

                        <h2 class="service_h2"><img src="/assets/img/icons/SHD.png" class="image-icon">SDH：スタジオ開発ハブ
                        </h2>
                        <p class="service-p">
                            スタジオ開発ハブは、日本企業またグローバル企業とのIT受託開発。そして一般的なオフショア開発にあたるパキスタンエンジニア人材を人月ベースでご提供致します。
                        </p>
                        <router-link to="/studiodevelopmenthub/" class="viewmore-btn  viewmore-btn_service mt-5">View
                            More</router-link>
                    </div>
                    <div class="service-col">
                        <img alt="" src="/assets/img/sdh.png" class="" width="100%">
                    </div>
                </div>
                <div class="service-row my-5">
                    <div class="service-col">
                        <img alt="" src="/assets/img/ses.png" class="" width="100%">
                    </div>
                    <div class="service-col">
                        <h2 class="service_h2"><img src="/assets/img/icons/SES.png" class="image-icon">SES：エンジニアスタイル
                        </h2>
                        <p class="service-p">
                            当社のエンジニアスタイルというのは、エンジニア採用支援サービスを指し、SESサービスのように社内外の優秀なエンジニアやデザイナー人材を必要とされている会社様に対して人材の発掘、ご紹介、人材との面談設定、そして採用までのオンボーディング過程を支援いたします。
                        </p>
                        <router-link to="/engineerstyle/" class="viewmore-btn  viewmore-btn_service mt-5">View
                            More</router-link>
                    </div>
                </div>
            </section>
            <!--Our experties-->
            <section class="news mycontents-wide">
              <div class="row">
                <div class="service-col">
                <h3 class="content-title content-title_blog">OUR EXPERTISE</h3>
                <p class="content-text">IDENBRIDがご提供している開発サービスのご紹介です。</p>
               </div>
               <div class="service-col">
                <router-link class="viewmore-btn" to="/solutions">View More
                </router-link>
               </div>
              </div>
            </section>
            <!--our experties-->
            <!--news-->
            <section class="news mycontents-wide">
                <h3 class="content-title content-title_blog">NEWS</h3>
                <p class="content-text content-text_blog">アイデンブリッドからのお知らせやイベント、そしてプレスリリースを発信致します。</p>
                <div class="new-box new">
                    <div class="new-listing new" v-for="(detail,Detail) in news" :key="Detail" v-if="Detail < 5">
                        <router-link :to="'/news/detail/'+detail.id+'/'" class="new-link new">
                            <div class="img_box">
                                <img :src="'http://admin.idenbrid.jp/public/storage/news/'+detail.image" alt=""></div>
                            <div class="new-item new">
                                <div class="new-meta">
                                    <p class="text new mr-2 mt-0 new-date">
                                        {{detail.date}}</p>
                                    <div class="new new-tag">
                                        <p class="text new mt-0">NEWS</p>
                                    </div>
                                </div>
                                <p class="text new-content">
                                    {{detail.title}}</p>
                            </div>
                        </router-link>
                    </div>
                    <router-link class="viewmore-btn viewmore-btn_center" to="/news/">View More
                    </router-link>
                </div>
            </section>
            <!--news-->
            <section class="about mycontents-wide">
                <h3 class="content-title content-title_about">ABOUT</h3>
                <p class="content-subtitle content-subtitle_about">「Update the future in style」</p>
                <p class="content-text content-text_about">
                    テクノロジーで未来をかっこよくアップデートを会社のミッションに掲げるアイデンブリッドはお客様目線に立って、どのようにIT開発がビジネスに貢献できるかクリエイティブな提案をし、それに沿ったITソルーションを提供します。
                </p>
                <ul class="about-contents">
                    <li class="about-contents__list">
                        <router-link to="/policy/">
                            <img class="about-contents__list__thumbnail" src="/public/assets/img/icons/Policy-icon.svg"
                                alt="" loading="lazy">
                            <div class="about-contents__list__text">
                                <p class="about-contents__list__subtitle">経営理念</p>
                                <h4 class="about-contents__list__title">Policy</h4>
                            </div>
                        </router-link>
                    </li>
                    <li class="about-contents__list">
                        <router-link to="/business/">
                            <img class="about-contents__list__thumbnail about-contents__list__thumbnail_news"
                                src="/public/assets/img/icons/Bussines-icon.svg" alt="" loading="lazy">
                            <div class="about-contents__list__text">
                                <p class="about-contents__list__subtitle">事業紹介</p>
                                <h4 class="about-contents__list__title">Business</h4>
                            </div>
                        </router-link>
                    </li>
                    <li class="about-contents__list">
                        <router-link to="/about/">
                            <img class="about-contents__list__thumbnail" src="/public/assets/img/icons/Company-icon.svg"
                                alt="" loading="lazy">
                            <div class="about-contents__list__text">
                                <p class="about-contents__list__subtitle">会社概要</p>
                                <h4 class="about-contents__list__title">Company</h4>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </section>
            <section class="mt-5">
                <div class="c-recruit">
                    <div class="c-recruit__head">
                        <div class="c-recruit__bgimg"
                            style="background-image: url('/assets/img/Culture-background.png');">
                        </div>
                        <div class="mycontents-wide">
                            <div class="c-recruit__head-inner">

                                <h3 class="content-title is-color-white recruit-title">CULTURE</h3>
                                <div class="c-recruit__head-text">私たちの自慢は個性と責任がある仲間たち。<br>
                                    YouTube動画とブログから会社の雰囲気を感じて頂けます。</div>
                            </div>
                        </div>
                    </div>
                    <div class="c-recruit__bottom">
                        <div class="mycontents-wide">
                            <div class="c-recruit__bottom-block row">
                                <div class="large-6 small-12">
                                    <router-link class="c-recruit__bottom-item" to="/video/">
                                        <div class="c-recruit__bottom-bgimg">
                                            <video width="100%" autoplay loop muted>
                                                <source src="/assets/videos/Video.mp4" type="video/mp4">
                                            </video>
                                        </div>
                                        <div class="c-recruit__bottom-content">
                                            <div class="c-recruit__bottom-button">VIDEOを見る</div>
                                        </div>
                                    </router-link>
                                </div>
                                <div class="large-6 small-12">
                                    <router-link class="c-recruit__bottom-item" to="/blog/">

                                        <div class="c-recruit__bottom-bgimg">

                                            <video width="100%" autoplay loop muted>
                                                <source src="/assets/videos/blog.mp4" type="video/mp4">
                                            </video>
                                        </div>
                                        <div class="c-recruit__bottom-content">

                                            <div class="c-recruit__bottom-button">BLOGを見る</div>
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- end -->
            <section class="blog-home mycontents-wide">
                <h3 class="content-title content-title_blog">BLOG</h3>
                <p class="content-text content-text_blog">ウェブや業務システムそしてモバイルアプリ開発の際のお役立ち記事を掲載しています。</p>
                <ul class="blog-contents">
                    <li v-for="(blog,Blog) in blogs.slice(Blog, 3)" :key="Blog" class="blog-contents__list">
                        <router-link :to="'/blog/detail/'+blog.id+'/'">
                            <p class="blog-contents__list__tags"><span>BLOG</span></p>
                            <img class="blog-contents__list__thumbnail"
                                :src="'http://admin.idenbrid.jp/public/storage/blog_images/'+blog.image"
                                alt="" loading="lazy">
                            <p class="blog-contents__list__title">{{blog.title}}</p>
                            <p class="blog-contents__list__date">{{blog.date}}</p>
                        </router-link>
                    </li>
                </ul>
                <router-link class="viewmore-btn viewmore-btn_center" to="/blog/">View More

                </router-link>
            </section>
            <div class="bnr_area">
                <a href="https://twitter.com/idenbridinc" target="_blank" class="hoverScale">
                    <div class="thumb">
                        <div class="hvrtxt en"><span class="more_txt"><span class="underline">MORE</span></span></div>
                        <div class="scaleImg">
                            <img src="https://tomorrowgate.co.jp/asset/img/top/tw-bnr.jpg" alt="">
                        </div>
                    </div>
                </a>
                <a href="https://www.youtube.com/channel/UC5ENsxgAQIqVfBIMy-Fp-0w" target="_blank" class="hoverScale">
                    <div class="thumb">
                        <div class="hvrtxt en"><span class="more_txt"><span class="underline">MORE</span></span></div>
                        <div class="scaleImg">
                            <img src="https://tomorrowgate.co.jp/asset/img/top/yt-bnr.jpg" alt="">
                        </div>
                    </div>
                </a>

            </div>

        </main>
        <Footer />
    </div>
</template>
<script>
    import Navbar from "../layout/Navbar.vue";
    import Footer from "../layout/Footer.vue";
    export default {
        components: {
            Navbar,
            Footer,
        },
        data() {
            return {
                blogs: [],
                works: [],
                news: []
            }
        },
        metaInfo() {
            return {
                title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | ホーム",
                meta: [{
                    vmid: "description",
                    name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
                    content: "ウェブデザインからシステム・モバイルアプリ開発まで一括で受けているアイデンブリッド社はIT業界の中でもトップクラスのコミュニケーション能力でお客様のプロジェクトに対してご提案します。案件の対して要件定義、設計、開発実装そしてテストまで包括的にお受けします。無料でのお見積りのご相談はこちらからです。技術的な内容やご予算などわからないことがありましたらお問合せください。",
                }, ],
            };
        },
        mounted() {

            axios.get('/api/blogs').then((res) => {
                this.blogs = res.data.blogs;
            }).catch((err) => {});

            axios.get('/api/news').then((res) => {
                this.news = res.data.news;
            }).catch((err) => {});

            axios.get('/api/works').then((res) => {
                this.works = res.data.works;
                this.$nextTick(() => {
                    var swiper = new Swiper(".WorkSlider", {
                        slidesPerView: 3,
                        spaceBetween: 30,
                        slidesPerGroup: 1,
                        loop: true,
                        loopFillGroupWithBlank: true,

                        breakpoints: {
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 30,
                            },
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 50,
                            },
                        },
                        navigation: {
                            nextEl: ".swiper-button-next",
                            /* prevEl: ".swiper-button-prev",*/
                        },
                    });

                });
            }).catch((err) => {});
            /* work slider end*/
            window.setTimeout(top_hero_title, 300);

            function top_hero_title() {
                jQuery(".top-hero__title .horo-text-b").css({
                    "filter": "blur(0)",
                    "opacity": 1
                });
            }
            /*text-typed*/
            var TxtRotate = function (el, toRotate, period) {
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
    };
</script>
<style scoped>
    .image-icon {
        width: 60px;
        height: 60px;
        object-fit: cover;
        margin-right: 10px;
    }

    .service_h2 {
        font-weight: bold;
        font-size: 30px;
        line-height: 72px;
        letter-spacing: 0.05em;
        display: flex;
        align-items: center;
    }

    .c-recruit__bottom-item:hover .c-recruit__bottom-bgimg {
        transform: scale(1.1);
        transition: 0.4s;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
    }

    f .recruit-title::after {
        background-color: #fff;
    }

    .blog-home {
        margin-bottom: 120px;
        margin-top: 120px;
    }

    .is-color-white {
        color: #fff;
    }

    .otherservice {
        margin-top: 60px;
        margin-bottom: 60px;
    }

    .col-content {
        border: 1px solid #2B2B2B;
    }

    .bnr_area {
        z-index: 1;
        display: flex;
        position: relative;
        background: #000;
    }

    .bnr_area a {
        width: 50%;
        border: 1px solid #2b2b2b;
    }

    .hoverScale .thumb {
        overflow: hidden;
        position: relative;
    }

    .hoverScale .thumb .hvrtxt {
        position: absolute;
        top: 50%;
        left: 50%;
        transition: 0.4s;
        transform: translate(-34%, -20%);
        opacity: 0;
        z-index: 1;
        backface-visibility: hidden;
    }

    .hoverScale .thumb .hvrtxt .more_txt {
        color: #dadada;
        font-size: 1.4rem;
        font-family: "DIN";
        letter-spacing: 0.06em;
        text-transform: uppercase;
        position: relative;
        padding-right: 20px;
        font-weight: 700;
    }

    .hoverScale .thumb .hvrtxt .more_txt::before {
        width: 10px;
    }

    .hoverScale .thumb .hvrtxt .more_txt::after,
    .hoverScale .thumb .hvrtxt .more_txt::before {
        content: "";
        height: 1px;
        background-color: #dadada;
        position: absolute;
        right: 0;
        top: 50%;
        transition: 0.3s;
    }

    .hoverScale .thumb .hvrtxt .more_txt .underline {
        position: relative;
    }

    .hoverScale .thumb .hvrtxt .more_txt .underline::after {
        content: "";
        background: #dadada;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -4px;
        left: 0;
        transform: scale(0, 1);
        transition: transform 0.3s;
        transform-origin: right top;
    }

    .hoverScale .thumb .hvrtxt .more_txt::after {
        width: 6px;
        transform: rotate(45deg) translateY(-3px);
    }

    .bnr-img {
        width: 100%;
        height: auto;
    }

    @media screen and (max-width: 896px) {
        .bnr_area {
            display: block;
        }

        .bnr_area a {
            width: 100%;
            display: block;
        }
    }

    .btn-views {
        border: 2px solid rgba(37, 115, 176, 1);
        border-radius: 5px;
        color: rgba(37, 115, 176, 1);
        cursor: pointer;
        display: block;
        font-size: 18px;
        font-weight: 700;
        letter-spacing: .1em;
        margin-left: 8px;
        margin-top: 90px;
        opacity: 1;
        padding: 19px 0;
        position: relative;
        text-align: center;
        transition: .4s;
        width: 250px;
        /* z-index: 999; */
        z-index: 99;
    }

    .btn-views:hover {
        color: #fff;
        border: 1px solid rgba(37, 115, 176, 1);
        transition: 0.4s;
        background: rgba(37, 115, 176, 1);
    }

    .btn-view:hover {
        background: var(--textcolor);
    }

    .footer-section {
        background-color: #000;
    }

    .service-content-img {
        height: auto;
        width: 300px;
        max-width: 100%;
    }

    .service-p {
        color: #333;
        flex: none;
        font-family: 'Noto Sans JP';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        height: auto;
        letter-spacing: 0.15em;
        line-height: 1.8;
        margin: 10px 0px 0px 0px;
        text-align: left;
        width: 100%;
        max-width: 100%;
        justify-content: flex-start;
    }

    .service-col {
        display: flex;
        align-content: flex-start;
        align-items: flex-start;
        flex: none;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: center;
        padding: 0px;
        width: 49%;
        max-width: 49%;
        padding: 0px 15px;
    }

    .service-row {
        display: flex;
    }

    .new {
        z-index: 0;
        pointer-events: all;
        flex-wrap: nowrap;
        flex: none;
        display: flex;
        position: relative;
        flex-direction: column;
    }

    .new-content {
        color: #333;
        font-family: 'Noto Sans JP';
        font-size: 14px;
        font-weight: 700;
        letter-spacing: 0.05em;
        line-height: 1.7;
        margin: 12px 0px 0px 0px;
        text-align: left;
        justify-content: flex-start;
    }

    .new-listing .img_box {
        margin-right: 25px;
        width: 160px;
    }

    .new-listing:nth-child(1) {
        border-top: 0px solid #bbbbbb;
    }

    .new-link:hover {
        opacity: 0.6;
    }

    .new-link {
        background: rgba(0, 0, 0, 0.0);
        flex: none;
        flex-direction: row;
        height: auto;
        justify-content: flex-start;
        margin: 0px 0px 0px 0px;
        padding: 16px 0px 16px 0px;
        width: 100%;
        max-width: 100%;
    }

    .new-date {
        color: #666666;
        font-size: 14px;
        font-weight: 400;
    }

    .new-tag {
        align-content: center;
        align-items: center;
        background: #FFFFFF;
        flex-wrap: nowrap;
        justify-content: center;
        padding: 4px 8px 4px 8px;
        font-size: 10px;
    }

    .new-box {
        align-content: center;
        align-items: center;
        background: #f7f7f7;
        flex-wrap: nowrap;
        flex: none;
        justify-content: center;
        padding: 30px 0px 40px 0px;
    }

    .new-listing {
        align-content: flex-start;
        align-items: flex-start;
        background: rgba(0, 0, 0, 0.0);
        justify-content: flex-start;
        width: 960px;
        max-width: 100%;
        border-bottom: 0px solid #bbbbbb;
        border-left: 0px solid #bbbbbb;
        border-right: 0px solid #bbbbbb;
        border-top: 1px solid #bbbbbb;

    }

    .new-item {
        align-content: flex-start;
        align-items: flex-start;
        flex: 1;
        margin: 0px 0px 0px 0px;
        max-width: 100%;

    }

    .news {
        padding-bottom: 50px;
    }

    .news-contents {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0px;
    }

    .new.icon,
    .new.text {
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        justify-content: center;
        overflow: visible;
        word-break: break-word;
        word-wrap: anywhere;
    }

    .new-meta {
        align-content: center;
        align-items: center;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        padding: 0px;
        display: flex;
    }

    .WorkSlider {
        overflow: inherit;
    }

    .WorkSlider .swiper-button-next {
        top: -50px;
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #333333;
        border-radius: 50px;
        color: #fff;
    }

    .WorkSlider .swiper-button-next:after {
        font-size: 14px;

    }

    /*hero*/

    .top-hero {
        position: relative;
        margin-top: 60px;
        height: 500px;
    }

    .top-hero::before {
        content: "";
        position: absolute;
        top: 49px;
        display: inline-block;
        width: calc(100vw - 80px + (100% - 100vw) / 2);
        height: 450px;
        background-color: rgba(255, 255, 255, 0.6);
        border-radius: 30px 0px 0px 30px;
        z-index: 1;
    }

    .top-hero__title__br-sp {
        display: none;
    }

    .top-hero__video {
        position: absolute;
        top: 49px;
        display: inline-block;
        width: calc(100vw - 80px + (100% - 100vw) / 2);
        height: 450px;
        border-radius: 30px 0px 0px 30px;
        z-index: 0;
        object-fit: cover;
    }

    .top-hero__title {
        position: relative;
        margin-left: 0px;
        font-weight: bold;
        font-size: 40px;
        line-height: 96px;
        letter-spacing: 0.05em;
        z-index: 2;
    }

    .top-hero__title .horo-text-b {
        transition: all 800ms;
    }

    .top-hero__title span {
        filter: blur(10px);
        opacity: 0;
    }

    .devlop-content-text {
        max-width: 675px;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: #333333;
    }

    .ceo-mbl {
        display: none;
    }

    .ceo-desktop {
        display: block;
    }

    @media (max-width: 1200px) {
        .WorkSlider {
            overflow: hidden;
        }
    }

    @media (max-width: 767px) {
        .ceo-mbl {
            display: block;
            height: auto;
            object-fit: contain;
            width: 100%;
        }
``
        .ceo-desktop {
            display: none;
        }

        .new-box {
            padding: 32px 15px;
            max-width: 100%;
        }

        .new-date {
            font-size: 10px;
        }

        .new-listing .img_box {
            margin-right: 10px;
            width: 116px;
        }

        .service-col {
            max-width: 100%;
            width: 100%;
            margin: 25px 0px;
        }

        .otherservice .service-row {
            flex-direction: column;
        }

        .WorkSlider {
            overflow: hidden;
        }

        .WorkSlider .swiper-button-next {
            top: -15px;
        }

        .devlop-content-text {
            max-width: inherit;
            font-weight: 500;
            font-size: 13px;
            line-height: 20px;
        }

        .movie-inner iframe {
            height: 200px;
        }

        .about-iden-container {
            padding: 0px;
        }

        .about-iden-container .text {
            padding: 0px !important;
        }

        .txt-rotate {
            font-size: 32px;
        }

        .top-hero {
            margin-top: 53px;
            height: 330px;
        }

        .top-hero__title__br-sp {
            display: block;
        }

        .top-hero__title__br-pc {
            display: none;
        }

        .top-hero::before {
            width: 97%;
            top: 0;
            background-color: rgba(255, 255, 255, 0.6);
            border-radius: 10px 0 0 10px;
        }

        .top-hero__video {
            width: 97%;
            top: 0;
            border-radius: 10px 0 0 10px;
            height: 340px;
        }

        .top-hero__title {
            padding-top: 12px;
            margin-left: 0px;
            font-size: 24px;
            line-height: 150%;
            letter-spacing: 0.05em;
        }
    }

    /*scroll*/

    .scroll_top {
        margin-top: 8px;
        margin-bottom: 40px;
        font-weight: bold;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.15em;
    }

    @media (max-width: 767px) {
        .scroll_top {
            margin-top: 30px;
            margin-bottom: 30px;
        }

    }

    /*about*/

    .about {
        margin-bottom: 102px;
    }

    /*work*/

    .work {
        margin-bottom: 120px;
        position: relative;
        margin-top: 120px;
    }

    .content-title_work {
        margin-bottom: 20px;
    }

    .content-text_work {
        margin-top: 0px;
        margin-bottom: 60px;
    }

    .work-contents {
        display: none;
        justify-content: space-between;
    }

    .work__right {
        top: 190px;
        right: 0;
        display: block;
        width: 30px;
        height: 30px;
        margin: 2px 0 20px auto;
        transform: rotate(180deg);
    }



    .work-contents__pc-frame {
        position: relative;
        width: 100vw;
        margin-left: calc((100% - 100vw) / 2);
        overflow: hidden;
        margin-top: -20px;
        padding-top: 20px;
    }

    .work-contents__pc-frame::before {
        height: 430px;
        display: block;
        content: "";
    }

    .work-contents__pc {
        position: absolute;
        left: 0;
        top: 20px;
        display: flex;
        width: calc(330px * 8 + 65px * 7);
        height: 400px;
    }

    .work-contents__pc .work-contents__list {
        position: absolute;
        width: 350px;
        min-height: 350px;
    }

    @media (max-width: 767px) {
        .recruit__spacer-sp {
            height: auto;
        }

        .blog {
            margin-top: 0px !important;
        }

        .work {
            margin-bottom: 60px;
            margin-top: 0px;
        }

        .content-text_work {
            margin-bottom: 30px;
            font-weight: bold;
            font-size: 14px;
            line-height: 22px;
        }

        .work__right {
            display: none;
        }

        .work-contents {
            display: flex;
            padding-top: 20px;
            margin-top: -20px;
            margin-bottom: 0;
            padding-bottom: 30px;
            margin-bottom: 50px;
            overflow-x: scroll;
            overflow-y: visible;
            width: 100vw;
            margin-left: calc(var(--content-padding-side-sp) * -1);
        }

        .work-contents__pc-frame {
            display: none;
        }

        .work-contents__pc {
            display: none;
        }

        .work-contents__list {
            width: 100%;

        }

        .work-contents .work-contents__list:last-child {
            margin-right: 30px;
        }
    }

    /*blog*/

    .blog {
        margin-bottom: 120px;
        margin-top: 120px;
    }

    .content-title_blog {
        margin-bottom: 20px;
    }

    .content-text_blog {
        margin-top: 0px;
        margin-bottom: 60px;
    }

    .blog-contents {
        display: flex;
        justify-content: space-between;
        margin-bottom: 60px;
    }

    .blog-contents__list {
        width: calc((100% - 65px * 2) / 3);
    }

    @media (max-width: 767px) {
        .blog-home {
            margin: 50px auto 60px;
        }

        .blog {
            margin: 50px auto 60px;
        }

        .content-text_blog {
            margin-bottom: 30px;
            font-weight: bold;
            font-size: 14px;
            line-height: 22px;
        }

        .blog-contents {
            margin-top: -20px;
            padding-top: 20px;
            margin-bottom: 0;
            padding-bottom: 30px;
            margin-bottom: 50px;
            overflow-x: scroll;
            overflow-y: visible;
            /* width: 100vw; */
            margin-left: calc(var(--content-padding-side-sp) * -1);
        }

        .blog-contents .blog-contents__list:last-child {
            margin-right: 0px;
        }

        .blog-contents__list__tags {
            top: 78px !important;
        }

        .blog-contents__list {
            width: 100%;
            /* margin-left: 30px; */
        }
    }

    /*recruit*/

    .recruit {
        margin-bottom: 60px;
    }

    /* about idenbrid */
    .about_iden {
        display: flex;
        max-width: 1500px;
        margin: 0 auto;
    }

    .about_iden .text {
        letter-spacing: 2px;
        font-weight: 600;
        font-size: 16px;
    }

    .about-iden-container .text {
        background-color: #fff;
        max-width: 700px;
        padding: 0px 20px;
    }

    .about-iden-container {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
        padding: 0px;
    }

    @media screen and (min-width: 767px) {
        .about-iden-container {
            flex-direction: row;
        }

    }

    /* service section */

    .service {
        padding-bottom: 80px;
        padding-top: 160px;
        /*影の調整 160 - 20*/
    }

    .text {
        margin-top: 10px;
    }

    .about {
        margin-bottom: 0px;
    }

    #MOVIE .container {
        padding: 0px;
    }


    .service-subcontents__text {
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        width: calc((100% - 415px) / 1);
        text-align: center;
        margin: auto;
    }

    .service-contents {
        position: relative;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        flex-direction: row-reverse;
    }

    .service-contents__text {
        position: absolute;
        top: 0;
        left: 0;
        width: calc((100% - 60px) / 2);
    }

    .service-contents__list {
        width: calc((100% - 60px) / 2);
        margin-bottom: 60px;
    }

    .service-contents .service-contents__list:nth-child(2n+1) {
        position: relative;
        top: 132px;
    }

    .service-contents__text {
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
    }

    .service-contents__list {
        background: #FFFFFF;
        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
        border-radius: 15px;
        min-height: 360px;
    }

    .service-contents__list .service-items {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    .service-contents__list .service-items:hover .service-contents__list__thumbnail {
        transform: translateY(-6%) scale(1.15);
    }

    .service-contents__list__thumbnail-frame {
        position: absolute;
        border-radius: 15px 15px 0 0;
        top: 0;
        left: 0;
        height: 221px;
        width: 100%;
        overflow: hidden;
    }

    .service-contents__list__thumbnail {
        height: 221px;
        width: 100%;
        object-fit: cover;
        transition: 0.5s;
        position: relative;
        z-index: 1;
    }

    .service-contents__list__subtitle {
        margin-top: 189px;
        margin-left: 30px;
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.05em;
        position: relative;
        z-index: 2;
    }

    .service-contents__list__title {
        margin: 0 30px 10px 30px;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: 0.05em;
        position: relative;
        z-index: 2;
    }

    .service-contents__list__text {
        margin: 0 30px;
        padding-bottom: 20px;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
    }

    .viewmore-btn_service {
        margin-top: 15px;
    }

    .idenbrid-background {
        border-radius: 15px;
    }

    @media (max-width: 767px) {
        .idenbrid-background {
            width: 100%;
        }

        .service {
            padding-bottom: 60px;
            padding-top: 20px;
        }

        .service-contents {
            display: block;
        }

        .service-contents__text {
            position: relative;
            width: 100%;
        }

        .service-contents__list {
            width: 100%;
            min-height: 270px;
        }

        .service-contents__list .service-item {
            height: auto;
        }

        .service-contents .service-contents__list:nth-child(2n+1) {
            top: inherit;
        }

        .service-contents__text,
        .service-contents__list {
            margin-bottom: 30px !important;
        }

        .service-contents .service-contents__list:nth-child(5) {
            margin-bottom: 0 !important;
        }

        .service-contents__list__thumbnail-frame {
            height: 120px;
        }

        .service-contents__list__thumbnail {
            height: 120px;
            object-position: bottom;
        }

        .service-contents__list__subtitle {
            margin-top: 112px;
            margin-bottom: 0;
            margin-left: 10px;
            font-size: 10px;
            line-height: 15px;
        }

        .service-contents__list__title {
            margin: 0 30px 10px 10px;
            font-size: 14px;
            line-height: 21px;
        }

        .service-contents__list__text {
            margin: 0 10px 12px 10px;
            font-size: 13px;
            line-height: 19px;
        }

        .viewmore-btn_service {
            margin: 50px auto 0 auto;
        }
    }

    /* work section */
    .work-contents__list {
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        transition: 1s;
        transition-property: transform;
        min-height: 320px;
    }

    .work-contents__list:hover {
        transform: scale(1.05);
    }

    .work-contents__list__thumbnail {
        width: 100%;
    }

    .work-contents__list__company {
        margin: 20px auto 5px 20px;
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
    }

    .work-contents__list__title {
        margin-bottom: 5px;
        margin-left: 20px;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
    }

    .work-contents__list__tags {
        margin-left: 20px;
        padding-bottom: 1px;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #727171;
    }

    @media (max-width: 767px) {
        .new-listing .img_box {
            width: 115px;
        }

        .work-contents__list__thumbnail {
            margin-bottom: 12px;
        }

        .work-contents__list__company {
            margin: 0 12px 5px 12px;
            font-size: 14px;
            line-height: 21px;
        }

        .work-contents__list__title {
            margin: 0 12px 12px 12px;
            font-size: 15px;
            line-height: 22px;
        }

        .work-contents__list__tags {
            margin: 0 12px;
            padding-bottom: 12px;
            font-size: 13px;
            line-height: 19px;
        }
    }


    .c-recruit__bottom {
        background: #fff;
        padding-bottom: 0.71429rem;
    }

    .c-recruit__bottom-block {
        background: #fff;
        position: relative;
        margin-top: -6.78571rem;
        padding-top: 1.07143rem;
    }

    .large-6 {
        width: 50%;
        padding-left: 18px;
        padding-right: 18px;
    }

    .c-recruit__bottom-item {
        position: relative;
        display: block;
        text-decoration: none;
    }

    .c-recruit__bottom-bgimg {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: 100%;
        width: 100%;
        z-index: 0;
    }

    .c-recruit__bottom-content {
        margin-top: 20px;
    }

    .c-recruit__bottom-title {
        padding-top: 4.64286rem;
        color: #fff;
        text-align: center;
        padding-bottom: 0 !important;
    }

    .c-recruit__bottom-text {
        color: #fff;
        margin-top: 50px;
        padding-bottom: 3.64286rem;
        text-align: center;
        font-size: 1.28571rem;
    }

    .c-recruit__bottom-button {
        position: relative;
        display: block;
        width: 240px;
        height: 58px;
        text-align: center;
        line-height: 58px;
        font-weight: bold;
        font-size: 16px;
        letter-spacing: 0.1em;
        color: #FFFFFF;
        background: var(--textcolor);
        box-shadow: 0px 4px 7px rgb(0 0 0 / 15%);
        border-radius: 5px;
        transition: 1s;
        margin: auto;
    }

    .c-recruit__bottom-title span {
        font-size: 2.85714rem;
    }

    .u-hidden-lg {
        display: none !important;
    }

    .c-recruit__bottom-item:hover {
        opacity: 0.8;
    }

    .c-recruit__bottom-title small {
        display: block;
        font-size: 14px;
    }

    .c-message {
        height: 35.42857rem;
        margin-top: 0rem;
        position: relative;
        overflow: hidden;
    }

    .c-message__bgimg {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center bottom;
        width: 100%;
        height: calc(100% - 90px);
        position: absolute;
        z-index: -1;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .c-message__bgimg::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 100%;
        height: 100%;

    }

    .c-message__content {
        display: flex;
    }

    .large-7 {
        width: 58.33333%;
        /* padding: 50px 0px 0px; */
        padding: 50px 0px 0px 80px;
    }

    .large-5 {
        width: 41.66667%;
        padding-left: 18px;
        padding-right: 18px;
    }



    .c-message__title {
        text-align: left;
        margin-top: 5rem;
    }



    .c-message__title small {
        font-size: 1rem;
        line-height: 2.14286;
        font-weight: normal;
    }
/* 
    .c-message__title-sub {
        margin-top: 0rem;
        font-size: 1.7rem;
        letter-spacing: 0.1em;
        line-height: 1.5625;
        color: #102855;
        font-weight: bold;
    } */


    .c-button,
    .c-button-social>a {
        outline: none;
        display: inline-block;
        width: 100%;
        max-width: 14.5rem;
        text-align: center;
        background-color: #102855;
        color: #fff;
        border: 1px solid #102855;
        text-decoration: none;
        padding: 0.92857rem 1.71429rem;
        position: relative;
        transition: all .3s;
        font-weight: 700;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }

    .c-button.is-md,
    .c-button-social>a.is-md {
        max-width: 15rem;
        height: 58px;
        font-size: 16px;
        font-weight: bold;
        transition: .3s all;
        margin: 0;
        position: relative;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .c-button.is-white,
    .c-button-social>a.is-white {
        background: #fff;
        color: #102855;
    }

    .c-button.is-white:hover,
    .c-button-social>a.is-white:hover {
        background: #102855;
        color: #fff;
        transition: .3s all;
    }


    .c-button:hover,
    .c-button-social>a:hover {
        opacity: 1;
        background-color: #fff;
        color: #102855;
    }

    .c-button.is-md:hover::before,
    .c-button-social>a.is-md:hover::before {
        background: #333;
    }

    .c-button.is-md:hover,
    .c-button-social>a.is-md:hover {
        transition: .3s all;
    }

    .c-recruit {
        position: relative;
        padding-bottom: 30px;
        margin-bottom: 5.71429rem;
    }

    .c-recruit__head {
        position: relative;
        background: #102855;
    }

    .c-recruit__bgimg {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        height: 100%;
        width: 100%;
        position: absolute;
        opacity: .3;
    }


    .c-recruit__head-title::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 5px;
        margin: auto;
        width: 65px;
        height: 1px;
        background: #fff;
    }

    .c-recruit__head-inner {
        width: 50%;
        padding: 4.2rem 0 9.42857rem;
    }

    .c-recruit__head-title {
        color: #fff;
        display: flex;
        align-items: center;
        margin: 0;
        position: relative;
        padding-bottom: 3rem;
    }

    .c-recruit__head-title span {
        font-size: 85px;
        line-height: 1.03529;
        letter-spacing: 0.1em;
    }

    .c-recruit__head-title small {
        font-size: 14px;
        line-height: 2.14286;
        margin-left: 2.14286rem;
    }

    .c-recruit__head-text {
        color: #fff;
        margin-top: 1.85714rem;
        font-size: 26px;
        font-weight: bold;
    }

    .c-recruit__head-button {
        margin-top: 2.35714rem;
    }

    .c-button,
    .c-button-social>a {
        outline: none;
        display: inline-block;
        width: 100%;
        max-width: 14.5rem;
        text-align: center;
        background-color: #102855;
        color: #fff;
        border: 1px solid #102855;
        text-decoration: none;
        padding: 0.92857rem 1.71429rem;
        position: relative;
        transition: all .3s;
        font-weight: 700;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
    }



    .c-button.is-white::before,
    .c-button-social>a.is-white::before {
        background: #102855;
    }

    .c-button.is-white::after,
    .c-button-social>a.is-white::after {
        background: #102855;
    }

    .c-message__bgimg {
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center bottom;
        width: 100%;
        height: calc(100% - 90px);
        position: absolute;
        z-index: -1;
        right: 0;
        bottom: 0;
        left: 0;
    }

    .c-message__bgimg::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        width: 100%;
        height: 100%;

    }



    .large-5 {
        width: 41.66667%;
        padding-left: 18px;
        padding-right: 18px;
    }

    .c-message__title span {
        font-size: 65px;
        letter-spacing: 0.1em;
        font-weight: bold;
        line-height: 1.03896;
        color: #102855;
        display: block;
    }

    .c-message__title small {
        font-size: 1rem;
        line-height: 2.14286;
        font-weight: normal;
    }

    .c-message__title-sub {
        margin-top: 0rem;
        font-size: 1.5rem;
        letter-spacing: 0.1em;
        line-height: 1.5625;
        color: #102855;
        font-weight: bold;
    }

    .c-message__button {
        margin-top: 3.85714rem;
    }

    @media (max-width:1200px) {
        .c-message__title-sub {
            font-size: 1.8rem;
        }

        .large-5 {
            align-items: center;
            display: flex;
        }

        .c-message__button {
            margin-top: 0.85714rem;
        }

        .c-message {
            padding: 30px 0px 0px;
            height: auto;
        }
    }

    @media (max-width: 945px) {

        .c-message__button {
            margin-bottom: 3.85714rem;
        }

        .c-message__title-sub {
            font-size: 24px;
            margin-top: 2rem;
        }

        .c-message__button {
            margin-top: 1.85714rem;
        }

        .c-message__title span {
            font-size: 30px;
        }

        .c-message {
            height: 100%;
        }

        .c-recruit__head-title {
            text-align: center;
            display: block;
            padding-bottom: 2.42857rem;
        }

        .c-recruit__bottom {
            background: #102855;
            padding-bottom: 0.71429rem;
        }

        .c-message__content {
            align-items: center;
        }

        .c-message__title {
            text-align: left;
            margin-top: 10rem;
        }

        .content-title {
            font-size: 36px;
        }

        .small-12 {
            width: 100%;
            padding-left: 8px;
            padding-right: 8px;
        }

        .c-recruit {
            padding-bottom: 0;
            margin-bottom: 0;
        }

        .c-recruit__head::after {
            background-position: center right;
            width: 100%;
        }

        .c-recruit__head-title {
            text-align: center;
            display: block;
            padding-bottom: 2.42857rem;
        }

        .c-recruit__head-title span {
            font-size: 40px;
            display: block;
        }

        .c-recruit__head-title::after {
            right: 0;
            left: 0;
        }

        .c-recruit__head-title small {
            margin-left: 0;
        }

        .c-recruit__bottom-item {
            padding-bottom: 2rem;
            margin-bottom: 1.21429rem;
        }

        .c-recruit__head-title::after {
            right: 0;
            left: 0;
        }

        .c-recruit__head-text {
            font-size: 1.07143rem;
            padding: 0 1.14286rem;
        }

        .c-recruit__head-inner {
            width: 100%;
        }

        .c-recruit__head-button {
            text-align: center;
            position: relative;
            z-index: 9;
        }

        .c-recruit__bottom-block {
            background: #102855;
        }

        .c-recruit__bottom-text {
            margin-top: 25px;
        }

        .c-recruit__bottom-button {
            bottom: 0px;
        }

        .c-recruit__bottom-title {
            padding-top: 50px;
        }
    }

    @media (max-width: 945px) {
        .c-message__content {
            flex-direction: column;
        }
    }

    @media (max-width: 475px) {
        .c-message__title {
        margin-top: 3rem;
    }
        .content-title {
            font-size: 24px;
        }
        .otherservice {
        margin-bottom: 0px;
    }
        .c-message {
        margin-top: 0px;
    }
        .c-message__title-sub {
            font-size: 16px;
        }

        .c-message__content {
            flex-direction: column;
        }

        .content-title {
            font-size: 28px;
        }

        .service_h2 {
            flex-direction: row;
            font-size: 20px;

        }

        .otherservice .service-row {
            margin-top: 0px !important;
        }

        .service_h2 .otherservice {
            margin-bottom: 0px;
        }

        .news {
            margin-bottom: 0px;
        }
    }
    @media (max-width: 320px) {
        .service_h2{
            font-size: 15px;
        }
    }
</style>