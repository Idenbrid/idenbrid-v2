<template>
    <div>
        <Navbar />
        <main>
            <div class="mv_textarea">
                <h2>
                    <strong class="en entxt">WORKS / 仕事実績</strong>
                    <span class="jptxt">アイデンブリッドの開発・制作事例の実績一覧です。</span>
                </h2>
            </div>
            <!-- <div class="works--content highlight_blk">
                <ul class="works--content--link">
                    <li><a href="#" class="en categoryitem current">全て</a>
                    </li>
                    <li><a href="#" class="en categoryitem">UIUXデザイン</a></li>
                    <li><a href="#" class="en categoryitem">ウェブ・システム</a>
                    </li>
                    <li><a href="#" class="en categoryitem">スマホアプリ</a>
                    </li>
                    <li><a href="#" class="en categoryitem">デスクトップアプリ</a>
                    </li>
                    <li><a href="#" class="en categoryitem">その他</a>
                    </li>
                </ul>
                <div class="works--content--mainarea">
                    <router-link :to="'/work/detail/'+work.id" v-for="work in works" :key="work.id"
                        class="works--content--item hoverScale">
                        <div class="thumb">
                            <div class="hvrtxt en"><span class="more_txt"><span class="underline">MORE</span></span>
                            </div>
                            <div class="scaleImg">
                                <img :src="'https://admin-idenbrid.idenbrid.com/public/storage/work_images/'+work.image"
                                    alt="">
                            </div>
                        </div>
                        <h3>{{work.title}}</h3>
                    </router-link>

                </div>
                <div class="wp-pagenavi" role="navigation">
                    <span aria-current="page" class="current">1</span><a class="page larger" title="ページ 2"
                        href="https://tomorrowgate.co.jp/works/page/2/">2</a><a class="nextpostslink" rel="next"
                        aria-label="Next Page" href="https://tomorrowgate.co.jp/works/page/2/"><i
                            class='fas fa-angle-right'></i></a>
                </div>
            </div> -->
            <section>
                <img src="/assets/img/comingsoonwork.gif" width="100%">
            </section>
            <!-- <section class="menu">
                <ul class="menu-contents mycontents-wide">
                    <li class="menu-contents__list">
                        <router-link to="/about/">
                            <img class="menu-contents__list__thumbnail" src="/public/assets/img/icons/Policy-icon.svg"
                                alt="" loading="lazy">
                            <div class="menu-contents__list__text">
                                <p class="about-contents__list__subtitle">経営理念</p>
                                <h4 class="menu-contents__list__title">Policy</h4>
                            </div>
                        </router-link>
                    </li>
                    <li class="menu-contents__list">
                        <router-link to="/blog/">
                            <img class="menu-contents__list__thumbnail menu-contents__list__thumbnail_news"
                                src="/public/assets/img/icons/Bussines-icon.svg" alt="" loading="lazy">
                            <div class="menu-contents__list__text">
                                <p class="menu-contents__list__subtitle">事業紹介</p>
                                <h4 class="menu-contents__list__title">Business</h4>
                            </div>
                        </router-link>
                    </li>
                    <li class="menu-contents__list">
                        <router-link to="/onlinedevelopmenthub/">
                            <img class="menu-contents__list__thumbnail" src="/public/assets/img/icons/Company-icon.svg"
                                alt="" loading="lazy">
                            <div class="menu-contents__list__text">
                                <p class="menu-contents__list__subtitle">会社概要</p>
                                <h4 class="menu-contents__list__title">Company</h4>
                            </div>
                        </router-link>
                    </li>
                </ul>
            </section> -->
            <div class="branding--contact">
      <h3 class="fade_y on">IT開発：UIUXデザイン、ウェブやスマホアプリそしてクラウド構築まで<br>
        ご質問がありましたらお気軽にご相談ください。</h3>
      <div class="fade_y on">
        <router-link to="/contact/" class="contactbtn fade_y on">今すぐ相談してみる</router-link>
      </div>
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
                works: []
            }
        },
        metaInfo() {
            return {
                title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | 仕事実績",
                meta: [{
                    vmid: "description",
                    name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
                    content: "アイデンブリッド社がこれまでに担当した案件の一部を紹介致します。フロントエンドの実装はReact JS、Vue JS、HTML、BootStrap、jQueryを主軸とし、バックエンド・API開発はLaravel(PHP)、Node JS、Pythonを基本に開発を行なっています。CMSではWordPress（ワードプレス）を用いて実装を行うこともあり、プラグインの開発に特化した案件もございます。スマホアプリではFultter(Dart)でフロント実装を行い、サーバー周りはGCPまたはAWSを用いています。",
                }, ],
            };
        },
        mounted() {
            axios.get('/api/works').then((res) => {
                this.works = res.data.works;
            }).catch((err) => {});
        }

    };
</script>
<style scoped>
    .work-subcontents__text {
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        width: calc((100% - 415px) / 1);
        text-align: center;
        margin: auto;
    }

    .work-contents__list {
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
        border-radius: 10px;
        transition: 1s;
        transition-property: transform;
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
        padding-bottom: 14px;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #727171;
    }

    @media (max-width: 767px) {
        .work-subcontents__text {
            width: 100%;
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

    /*work*/

    .work {
        margin-top: 100px;
        margin-bottom: 100px;
    }

    .work-contents {
        display: flex;
        margin-bottom: 40px;
        flex-wrap: wrap;
    }

    .work-contents__list {
        width: calc((100% - 65px * 2) / 3);
        margin-bottom: 60px;
        margin-left: 65px;
    }

    .work-contents .work-contents__list:nth-child(3n + 1) {
        margin-left: 0;
    }

    @media (max-width: 767px) {
        .work {
            margin-bottom: 60px;
        }

        .work-contents {
            margin-bottom: 20px;
        }

        .work-contents .work-contents__list:nth-child(2n) {
            margin-left: 35px;
        }

        .work-contents .work-contents__list:nth-child(2n + 1) {
            margin-left: 0;
        }

        .work-contents__list {
            width: calc((100% - 35px) / 2);
            margin-bottom: 30px;
        }
    }

    @media (max-width: 500px) {
        .work-contents {
            display: block;
        }

        .work-contents__list {
            width: 100%;
            margin-bottom: 30px;
            margin-left: 0 !important;
        }
    }



    .works--content {
        padding: 60px 10% 120px;
        background-color: #fff;
    }

    .works.loaded .works--content--link {
        transform: translateY(0);
        opacity: 1;
    }

    .works--content--link {
        display: flex;
        margin-bottom: 50px;
        transform: translateY(15%);
        transition: .6s;
        opacity: 1;
    }

    .works--content--link li {
        margin-right: 30px;
    }

    .works--content--link .categoryitem {
        color: #000;
        font-size: 14px;
        letter-spacing: .05px;
        position: relative;
        font-family: DIN-Bold;
        font-weight: 700;
        text-transform: uppercase;
    }

    .works--content--link .categoryitem::after {
        content: "";
        background: #000;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -4px;
        left: 0;
        transform: scale(0, 1);
        transition: transform 0.3s;
        transform-origin: right top;
    }

    .works--content--link .categoryitem:hover::after {
        transform-origin: left top;
        transform: scale(1, 1);
    }

    .works--content--link .categoryitem.current:after {
        transform: scale(1, 1);
    }

    .works--content--mainarea {
        display: flex;
        flex-wrap: wrap;
    }

    .works--content--item {
        margin-bottom: 72px;
        transform: translateY(5%);
        transition: .8s;
        opacity: 1;
    }

    .works--content--item {
        width: 33.333%;
    }

    .works.loaded .works--content--item {
        transform: translateY(0);
        opacity: 1;
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
        color: #DADADA;
        font-size: 14px;
        font-family: DIN-Bold;
        letter-spacing: 0.06px;
        text-transform: uppercase;
        position: relative;
        padding-right: 20px;
        font-weight: 700;
    }

    .hoverScale .thumb .hvrtxt .more_txt::after,
    .hoverScale .thumb .hvrtxt .more_txt::before {
        content: "";
        height: 1px;
        background-color: #DADADA;
        position: absolute;
        right: 0;
        top: 50%;
        transition: 0.3s;
    }

    .hoverScale .thumb .hvrtxt .more_txt::before {
        width: 10px;
    }

    .hoverScale .thumb .hvrtxt .more_txt .underline {
        position: relative;
    }

    .hoverScale .thumb .hvrtxt .more_txt .underline::after {
        content: "";
        background: #DADADA;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -4px;
        left: 0;
        transform: scale(0, 1);
        transition: transform 0.3s;
        transform-origin: right top;
    }

    .hoverScale .thumb .hvrtxt .more_txt::after,
    .hoverScale .thumb .hvrtxt .more_txt::before {
        content: "";
        height: 1px;
        background-color: #DADADA;
        position: absolute;
        right: 0;
        top: 50%;
        transition: 0.3s;
    }

    .hoverScale .thumb .hvrtxt .more_txt::after {
        width: 6px;
        transform: rotate(45deg) translateY(-3px);
    }

    .hoverScale .thumb .scaleImg {
        transition: 0.4s;
        backface-visibility: hidden;
    }

    .hoverScale .thumb::after {
        content: "";
        background-color: rgba(0, 0, 0, 0.6);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: 0.4s;
        backface-visibility: hidden;
    }

    .works--content--item h3 {
        margin: 20px 0 10px;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.06px;
        color: #000;
        display: inline-block;
        padding-bottom: 3px;
        font-family: NotoSansJP-Bold;
    }

    @media screen and (max-width: 556px) {
        .works--content {
            padding: 60px 5% 80px;
        }

        .works--content--link {
            flex-wrap: wrap;
            justify-content: space-between;
            margin-bottom: 40px;
        }

        .works--content--link li {
            width: 48%;
            margin-bottom: 25px;
            margin-right: 0;
            position: relative;
        }

        .works--content--link li::before {
            content: "";
            width: 100%;
            height: 1px;
            background: #DADADA;
            position: absolute;
            bottom: -5px;
            left: 0;
        }

        .works--content--item {
            display: block;
            margin-bottom: 40px;
        }

        .works--content--item h3 {
            margin: 10px 0 8px;
            font-size: 14px;
        }

        .works--content--item {
            width: 100%;
        }
    }
</style>