<template>
    <div>
        <Navbar />
        <div class="mv_textarea">
            <h2>
                <strong class="en entxt">SOLUTIONS</strong>
                <span class="jptxt">このページでは当社が提供しているITソリューションを紹介しています。アイデンブリッド社は日本企業を相手とした受託開発メインの法人です</span>
            </h2>
        </div>
        <main>
            <section class="solution-page mt-5" id="expertise">
                <h3 class="content-title">OUR EXPERTISE</h3>
                <ul class="service-contents">
                    <li class="service-contents__text">
                        <p>アイデンブリッド社はシステム開発やそれに伴うデザイン業務、またモバイルアプリの開発やウェブ制作などITに関わるプラットフォームに広く精通しています。特にDXを求めるお客様のコンサルも含めたトータルサポートを行なっています。
                        </p>
                    </li>
                    <li class="service-contents__list">
                        <router-link to="/mobile-app-development/">
                            <div class="service-items">
                                <div class="service-contents__list__thumbnail-frame">
                                    <img class="service-contents__list__thumbnail"
                                        src="/public/assets/img/solution/Solution_Img_01.png" alt="" loading="lazy">
                                </div>
                                <p class="service-contents__list__subtitle">スマホアプリ開発</p>
                                <h4 class="service-contents__list__title">Mobile app development</h4>
                                <p class="service-contents__list__text">
                                    SNSアプリやマッチングアプリ・チャットアプリそしてライブ配信アプリや性格診断占いアプリや業務用の管理アプリなどカテゴリーを問わず、設計・開発・審査申請から保守まで丸っと一括で承っています。
                                    また当社ではウェブシステムと連携したアプリ開発も得意としていますので出先から既存システムとのデータ共有されたアプリへのアクセスも可能とし、お客様の業務効率の改善に貢献します。
                                </p>
                            </div>
                        </router-link>
                    </li>
                    <li class="service-contents__list">
                        <router-link to="/system-application/">
                            <div class="service-items">
                                <div class="service-contents__list__thumbnail-frame">
                                    <img class="service-contents__list__thumbnail"
                                        src="/public/assets/img/solution/Solution_Img_02.png" alt="" loading="lazy">
                                </div>
                                <p class="service-contents__list__subtitle">システム開発</p>
                                <h4 class="service-contents__list__title">System application development</h4>
                                <p class="service-contents__list__text">
                                    情報システム・顧客管理システム・在庫管理システム・業務用システムのウェブサービス構築や運用保守・セキュリティー対策など企業様向けの受託開発を行なっています。当社のエンジニアは多様な言語を取り扱えるほどAWSやAzureなどクラウドインラフサービスも専門領域です。
                                </p>
                            </div>
                        </router-link>
                    </li>
                    <li class="service-contents__list">
                        <router-link to="/web-creative-digital-marketing/">
                            <div class="service-items">
                                <div class="service-contents__list__thumbnail-frame">
                                    <img class="service-contents__list__thumbnail"
                                        src="/public/assets/img/solution/Solution_Img_03.png" alt="" loading="lazy">
                                </div>
                                <p class="service-contents__list__subtitle">ウェブ制作・デジタルマーケティング</p>
                                <h4 class="service-contents__list__title">Web creative・Digital marketing</h4>
                                <p class="service-contents__list__text">
                                    コーポレイトサイトの作成やポートフォリオサイトそしてLP構築などを手がけています。WordPressを使用したり、最新のJavaScript系言語をフロント開発に用いています。またデジタルマーケティングではSEO、SMOやSNS運用そして英語圏ならば運用から保守まで一括して行います。
                                </p>
                            </div>
                        </router-link>
                    </li>
                    <li class="service-contents__list">
                        <router-link to="/web-design-UIUX-designing/">
                            <div class="service-items">
                                <div class="service-contents__list__thumbnail-frame">
                                    <img class="service-contents__list__thumbnail"
                                        src="/public/assets/img/solution/Solution_Img_04.png" alt="" loading="lazy">
                                </div>
                                <p class="service-contents__list__subtitle">デザイン制作</p>
                                <h4 class="service-contents__list__title">Web design・UIUX designing</h4>
                                <p class="service-contents__list__text service-contents__list_last__text">当社ではAdobe
                                    XDを用いてウェブサイト・ウェブシステムやアプリケーションそしてスマホアプリのUIUXデザイン制作を行なっています。最初にワイヤーフレームを組みお客様の意図がきちんと反映されるようにコミュニケーションをしっかり取らせて頂いております。
                                </p>
                            </div>
                        </router-link>
                    </li>
                </ul>

            </section>
            <div class="branding--contact" bis_skin_checked="1">
                <h3 class="fade_y on">ブランディングに関するご質問があれば<br class="pc">まずはお気軽にご相談ください</h3>
                <div class="fade_y on" bis_skin_checked="1"><a href="https://tomorrowgate.co.jp/contact/"
                        class="contactbtn fade_y on" bis_skin_checked="1">今すぐ相談してみる</a></div>
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
                get_id: ''
            }
        },
        mounted() {
            this.$nextTick(() => {
                document.getElementById(this.$route.params.string).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        },
        created() {
            this.get_id = this.$route.params.string;
        },
        metaInfo() {
            return {
                title: "開発実績 | システム開発はアイデンブリッド社 | IDENBRID INC.",
                meta: [{
                    vmid: "description",
                    name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
                    content: "アイデンブリッド社がこれまでに担当した案件の一部を紹介致します。フロントエンドの実装はReact JS、Vue JS、HTML、BootStrap、jQueryを主軸とし、バックエンド・API開発はLaravel(PHP)、Node JS、Pythonを基本に開発を行なっています。CMSではWordPress（ワードプレス）を用いて実装を行うこともあり、プラグインの開発に特化した案件もございます。スマホアプリではFultter(Dart)でフロント実装を行い、サーバー周りはGCPまたはAWSを用いています。",
                }, ],
            };
        },
    };
</script>
<style scoped>
    .solution-page {
        padding: 60px 10% 120px;
    }

    .service-section {
        padding: 60px 10% 120px;

    }

    /*servive*/

    .service {
        padding-bottom: 160px;
        padding-top: 0px;
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

    .service-contents__list a {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    .service-contents__list a:hover .service-contents__list__thumbnail {
        transform: translateY(-6%) scale(1.15);
    }

    .service-contents__list__thumbnail-frame {
        position: absolute;
        border-radius: 15px 15px 0 0;
        top: 0;
        left: 0;
        height: 300px;
        width: 100%;
        overflow: hidden;
    }

    .service-contents__list__thumbnail {
        height: 300px;
        width: 100%;
        object-fit: cover;
        transition: 0.5s;
        position: relative;
        z-index: 1;
    }

    .service-contents__list__subtitle {
        margin-top: 285px;
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

    .service-contents__list .service-items {
        position: relative;
        display: inline-block;
        width: 100%;
        height: 100%;
    }

    .service-contents__list .service-items:hover .service-contents__list__thumbnail {
        transform: translateY(-6%) scale(1.15);
    }

    @media (max-width: 767px) {
        .service {
            padding-bottom: 60px;
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

        .service-contents__list a {
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
            height: 150px;
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

    /*product section*/
    .product {
        padding-bottom: 60px;
        /*蠖ｱ縺ｮ隱ｿ謨ｴ 160 - 20*/
    }

    .product-contents {
        columns: 2;
        column-fill: auto;
        column-gap: 60px;
    }

    .product-contents__text,
    .product-contents__list {
        margin-bottom: 60px;
        break-inside: avoid;
        transform: translateZ(0);
    }

    ul .product-contents__list:nth-child(3) {
        margin-bottom: 0;
    }

    .product-contents__text {
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
    }

    .product-contents__list {
        background: #FFFFFF;
        box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
        border-radius: 15px;
    }

    .product-contents__list__thumbnail {
        width: 100%;
        border-radius: 15px 15px 0 0;
    }

    .product-contents__list__sorrytext {
        /*issue: 繝�じ繧､繝ｳ蟠ｩ繧後ｋ*/
        position: absolute;
        width: 100%;
        top: 80px;
        text-align: center;
        color: #FFFFFF;
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.05em;
    }

    .product-contents__list__sorrytext_last {
        top: 60px;
    }

    .product-contents__list__subtitle {
        margin-top: -23px;
        margin-left: 30px;
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.05em;
    }

    .product-contents__list__title {
        margin: 0 30px 10px 30px;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: 0.05em;
    }

    .product-contents__list__text {
        margin: 0 30px;
        padding-bottom: 20px;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
    }

    .viewmore-btn_product {
        margin-top: -58px;
    }

    @media (max-width: 767px) {
        .solution-page {
            padding: 60px 5%;
        }

        .profileGallery {
            grid-gap: 10px;
        }

        .button-fit {
            width: 100%;
        }

        .product {
            padding-bottom: 0px;
            /*蠖ｱ縺ｮ隱ｿ謨ｴ 160 - 20*/
        }

        .product-contents {
            columns: 1;
        }

        .product-contents__text,
        .product-contents__list {
            margin-bottom: 30px !important;
        }

        .product-contents .product-contents__list:nth-child(5) {
            margin-bottom: 0 !important;
        }

        .product-contents__list_last {
            margin-bottom: 0 !important;
        }

        .product-contents__list__thumbnail {
            width: 100%;
        }

        .product-contents__list__sorrytext {
            top: 40px;
            font-size: 13px;
            line-height: 19px;
        }

        .product-contents__list__sorrytext_last {
            top: 30px;
        }

        .product-contents__list__subtitle {
            margin-top: -8px;
            margin-bottom: 0;
            margin-left: 10px;
            font-size: 10px;
            line-height: 15px;
        }

        .product-contents__list__title {
            margin: 0 30px 10px 10px;
            font-size: 14px;
            line-height: 21px;
        }

        .product-contents__list__text {
            margin: 0 10px 12px 10px;
            font-size: 13px;
            line-height: 19px;
        }

        .viewmore-btn_product {
            margin: 50px auto 0 auto;
        }

        .service-subcontents__text {
            width: 95%;
        }
    }
</style>