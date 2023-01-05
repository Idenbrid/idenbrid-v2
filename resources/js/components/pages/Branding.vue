<template>
    <div>
        <Navbar />
        <div class="mv_textarea">
            <h2>
                <strong class="en entxt">STUDIO DEVELOPMENT HUB / スタジオ開発ハブ</strong>
                <span class="jptxt">ITシステム設計、UIUXデザイン、ウェブシステム、モバイルアプリ構築、クラウドサーバー、ウェブ制作</span>
            </h2>
        </div>
        <main>
            <div id="contents">
                <div class="branding--mv">
                    <div class="text_area">
                        <h3 class="fade_y on">プロジェクトを基本とした受託開発、<br class="pc">エンジニア要員：リソース型の２方式サービスを展開</h3>
                        <p class="fade_y on">
                            IDENBRIDではワンストップにて、ウェブシステムとスマホアプリ開発を得意とするソフトウェア開発会社です。<br>要件定義からシステム設計、UIUXデザインそして開発、またウェブからスマホそしてクラウドまで一社で完結開発致します<br
                                class="pc">
                        </p>
                        <router-link class="btn-views" to="/doc/">資料ダウンロード<i class="fa fa-download ml-2"
                                aria-hidden="true"></i></router-link>
                    </div>

                </div>
                <div class="branding--service">
                    <div class="branding--service--inner">
                        <div class="head">
                            <div class="heading">
                                <span class="sub en fade_y on">
                                    SERVICE
                                </span>
                                <h3 class="fade_y on">IDENBRID DEVELOPMENT ISM<br>アイデンブリッドの開発主義</h3>
                            </div>
                            <p class="lead fade_y on">
                                要件定義、基本設計など他社が見切り発車しがちな開発の基礎となる設計・書類作成フェーズを丁寧に行い、お客様が実現されたいシステムとの乖離がないようにきちんと対応します。そして単純にソフトウェアの開発だけではなく、お客さまが何に困られているのかつまり「ユーザーペイン」をきちんとヒアリングし、その課題の解消を得意としています。
                            </p>
                        </div>
                    </div>
                </div>
                <div class="branding--strengths">
                    <div class="heading">
                        <span class="sub en fade_y on">STRENGTH</span>
                        <h3 class="fade_y on">アイデンブリッドの強み</h3>
                    </div>

                    <div class="branding--strengths--content">
                        <div class="item">
                            <div class="en num fade_y on">01</div>
                            <div class="textarea">
                                <h4 class="fade_y on">ワンストップ開発フロー<br class="pc">【システム・アプリの開発は当社のみで完結】</h4>
                                <p class="fade_y on">
                                    私たちは上流工程、要件定義・基本設計、システム設計<br class="pc">UIUXデザイン、ウェブからアプリそしてクラウドまで一社にて構築を可能としております。
                                </p>
                            </div>
                        </div>

                        <div class="item">
                            <div class="en num fade_y on">02</div>
                            <div class="textarea">
                                <h4 class="fade_y on">ITに詳しくないお客様の開発を得意<br class="pc">【ユーザーペイン解消の最優先】</h4>
                                <p class="fade_y on">
                                    当社はほとんどIT会社の下請けとして仕事をしておらず、エンド様と直接契約して開発を行なっています。
                                    <br class="pc">その中でたくさんのITに詳しくない企業様の要件をシステムやアプリに落とし込むことにご好評頂いております。
                                </p>
                            </div>
                        </div>

                        <div class="item">
                            <div class="en num fade_y on">03</div>
                            <div class="textarea">
                                <h4 class="fade_y on">開発マネジメントとスピード感<br class="pc">【圧倒的なコストパフォーマンス】</h4>
                                <p class="fade_y on">
                                    当社では「ワン・スリーシステム」（1時間返信3日以内書類作成提出）を導入し、<br
                                        class="pc">お客様のアウトプットに対するタイムマネジメントをしっかりしています。
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <section class="solution-page my-5" id="expertise">
                    <h3 class="content-title">OUR EXPERTISE</h3>
                    <ul class="service-contents">
                        <li class="service-contents__text">
                            <p>アイデンブリッドはワンストップ開発を展開しており、要件定義そしてシステム設計からUIUXデザイン、ウェブ開発、モバイルアプリ開発またクラウドまで対応しています。そして実現されたい要件をシステムやアプリに落とし込むことを得意としています。
                            </p>
                        </li>
                        <li class="service-contents__list">
                            <router-link to="/mobileapp/">
                                <div class="service-items">
                                    <div class="service-contents__list__thumbnail-frame">
                                        <img class="service-contents__list__thumbnail"
                                            src="/public/assets/img/solution/Solution_Img_01.png"
                                            alt="Service contents image" loading="lazy">
                                    </div>
                                    <p class="service-contents__list__subtitle">Mobile app development</p>
                                    <h4 class="service-contents__list__title"> スマホiOS/Androidアプリ開発</h4>
                                    <p class="service-contents__list__text">
                                        ライブ配信アプリ・SNSアプリ・チャットアプリ・マッチングアプリ・業務管理アプリなどカテゴリーを問わずに設計・デザイン・開発そして審査申請から保守までワンストップでお受けしております。またウェブとの連携を前提としたマイクロサービスアーキテクチャでの開発も得意としており、お客様のユーザービリティ向上を目指した開発を進めています。
                                    </p>
                                </div>
                            </router-link>
                        </li>
                        <li class="service-contents__list">
                            <router-link to="/development/">
                                <div class="service-items">
                                    <div class="service-contents__list__thumbnail-frame">
                                        <img class="service-contents__list__thumbnail"
                                            src="/public/assets/img/solution/Solution_Img_02.png"
                                            alt="Service contents image" loading="lazy">
                                    </div>
                                    <p class="service-contents__list__subtitle">Software development</p>
                                    <h4 class="service-contents__list__title">ウェブシステム開発</h4>
                                    <p class="service-contents__list__text">
                                        ユーザー管理システム・在庫管理システム・マッチングシステム・管理者ダッシュボード・分析BIツール・EC販売システム・決済システムなどのウェブサービスのスクラッチ開発やメンテナンス保守・セキュリティ対策など企業様向けの受託開発を行っています。またクラウドにも精通しているエンジニアを抱えており、AWS・GCP・Azureまで幅広く対応可能です。
                                    </p>
                                </div>
                            </router-link>
                        </li>
                        <li class="service-contents__list">
                            <router-link to="/webitconsulting/">
                                <div class="service-items">
                                    <div class="service-contents__list__thumbnail-frame">
                                        <img class="service-contents__list__thumbnail"
                                            src="/public/assets/img/solution/Solution_Img_03.png"
                                            alt="Service contents image" loading="lazy">
                                    </div>
                                    <p class="service-contents__list__subtitle">Off-shore Labo Development</p>
                                    <h4 class="service-contents__list__title">ラボ型オフショア開発</h4>
                                    <p class="service-contents__list__text">
                                        当社ではパキスタンに拠点を持っており、リソースベースのエンジニア要員やチームをご提供可能です。先進国のエンジニアに比べてコストパフォーマンスは高く、またチャットツールをベースに日本語のコミュニケーションも全く問題ございません。またフロントには全て日本人が立っているのも好評を頂いてる理由です。
                                    </p>
                                </div>
                            </router-link>
                        </li>
                        <li class="service-contents__list">
                            <router-link to="/uiuxdesign/">
                                <div class="service-items">
                                    <div class="service-contents__list__thumbnail-frame">
                                        <img class="service-contents__list__thumbnail"
                                            src="/public/assets/img/solution/Solution_Img_04.png"
                                            alt="Service contents image" loading="lazy">
                                    </div>
                                    <p class="service-contents__list__subtitle">Web design / UIUX design</p>
                                    <h4 class="service-contents__list__title">UIUXデザイン制作</h4>
                                    <p class="service-contents__list__text service-contents__list_last__text">当社ではAdobe
                                        XDやFigmaを使いワイヤーフレームからウェブ・アプリデザインを展開しています。画面遷移から各ボタンの配置、そしてコンポートネント単位でのデザイン設計など見た目のUIそしてユーザー体験を担保するためのUXに重きを置いたデザイン処理を施しています。見た目の良さだけなく、ユーザーから管理者まで使いやすいにこだわったデザインのご提供を行っています。
                                    </p>
                                </div>
                            </router-link>
                        </li>
                    </ul>

                </section>
                <section class="quote-us">
                    <h2 class="heading cont-h1">お問い合わせ</h2>
                    <span>開発のご相談、お見積りが知りたい、どんなお悩みもお伺いします！ </span>
                    <div class="qoute-button">


                        <router-link to="/contact/" bis_skin_checked="1" class="contactbtn fade_y on">今すぐ相談してみる
                        </router-link>
                    </div>
                </section>
                <div class="branding--result">
                    <div class="heading">
                        <span class="sub en fade_y on">OUR COMMITMENT</span>
                        <h3 class="fade_y on">私たちの使命</h3>
                    </div>
                    <div class="branding--result--list">
                        <div class="branding--result--item">
                            <div class="icon fade_y on"><img
                                    src="https://tomorrowgate.co.jp/asset/img/service/branding/result01.svg"
                                    alt="Branding image">
                            </div>
                            <h4 class="fade_y on">お客様のご希望を実現</h4>
                            <p class="fade_y on">クライアントが作りたいもの、困っていることにフォーカスし、ご要望をITにて叶えます</p>
                        </div>
                        <div class="branding--result--item">
                            <div class="icon fade_y on"><img
                                    src="https://tomorrowgate.co.jp/asset/img/service/branding/result02.svg"
                                    alt="Branding image">
                            </div>
                            <h4 class="fade_y on">コストパフォーマンスの高い開発</h4>
                            <p class="fade_y on">お客さまが価格以上の価値を実感していただくとともに、他社との比較においても費用対効果の高い仕事をします</p>
                        </div>
                        <div class="branding--result--item">
                            <div class="icon fade_y on"><img
                                    src="https://tomorrowgate.co.jp/asset/img/service/branding/result03.svg"
                                    alt="Branding image">
                            </div>
                            <h4 class="fade_y on">ビジネスのグロースに並走</h4>
                            <p class="fade_y on">お客様の成長をITという側面よりともに支える存在としてご一緒に走ります</p>
                        </div>
                        <div class="branding--result--item">
                            <div class="icon fade_y on"><img
                                    src="https://tomorrowgate.co.jp/asset/img/service/branding/result04.svg"
                                    alt="Branding image">
                            </div>
                            <h4 class="fade_y on">カスタマーサクセス</h4>
                            <p class="fade_y on">クライアントのアラートをすぐに察知できるよう常にお客様担当が寄り添って開発を進めます</p>
                        </div>
                        <div class="branding--result--item">
                            <div class="icon fade_y on"><img
                                    src="https://tomorrowgate.co.jp/asset/img/service/branding/result05.svg"
                                    alt="Branding image">
                            </div>
                            <h4 class="fade_y on">タイムマネジメントの徹底</h4>
                            <p class="fade_y on">各タスクごと、チームごとの時間管理をツールを使って徹底しています</p>
                        </div>
                        <div class="branding--result--item">
                            <div class="icon fade_y on"><img
                                    src="https://tomorrowgate.co.jp/asset/img/service/branding/result06.svg"
                                    alt="Branding image">
                            </div>
                            <h4 class="fade_y on">作業効率の改善</h4>
                            <p class="fade_y on">コミュニケーションプラットフォームや自社システムにおいて仕事の効率化を図っています</p>
                        </div>
                        <div class="branding--result--item">
                            <div class="icon fade_y on"><img
                                    src="https://tomorrowgate.co.jp/asset/img/service/branding/result07.svg"
                                    alt="Branding image">
                            </div>
                            <h4 class="fade_y on">クライアントとのリレーションの構築</h4>
                            <p class="fade_y on">プロダクトファーストではなく、あくまでお客様ファーストの精神でお客様との関係構築を大切にしています</p>
                        </div>
                        <div class="branding--result--item">
                            <div class="icon fade_y on"><img
                                    src="https://tomorrowgate.co.jp/asset/img/service/branding/result08.svg"
                                    alt="Branding image">
                            </div>
                            <h4 class="fade_y on">マーケットへのインパクトをともに</h4>
                            <p class="fade_y on">一つひとつのプロジェクトがマーケットにインパクトを与えられるよう真剣に向き合って仕事します</p>
                        </div>
                    </div>
                </div>
                <div class="branding--compare">
                    <div class="heading">
                        <span class="sub en fade_y on">CHECK OTHERS</span>
                        <h3 class="fade_y on">IDENBRIDと他社開発会社の比較</h3>
                    </div>
                    <div class="scroll">
                        <p class="en">SCROLL</p>
                        <span class="bdr"></span>
                    </div>
                    <div class="branding--compare--table">
                        <table class="w-100">
                            <tbody>
                                <tr class="fade_y on">
                                    <th></th>
                                    <th>デザイン専門会社</th>
                                    <th>オフショア開発会社</th>
                                    <th>日本開発Sler会社</th>
                                    <th class="tg">IDENBRID</th>
                                </tr>
                                <tr class="fade_y on">
                                    <th>上流工程・システム設計</th>
                                    <td><span class="marks">×</span>システム設計はできない</td>
                                    <td><span class="marks">◯</span>できる会社もあるが、要件が伝わりづらい</td>
                                    <td><span class="marks">△</span>専門人材がいれば設計可能</td>
                                    <td class="tg"><span class="marks">◯</span>ワンストップでシステム設計もできる</td>
                                </tr>
                                <tr class="fade_y on">
                                    <th>UIUXデザイン</th>
                                    <td><span class="marks">△</span>UIUXデザインの作成ができる</td>
                                    <td><span class="marks">△</span>別会社に発注する必要あり</td>
                                    <td><span class="marks">△</span>専門人材がいればUIUXデザイン可能</td>
                                    <td class="tg"><span class="marks">◯</span>ワンストップでUIUXデザインもできる
                                    </td>
                                </tr>
                                <tr class="fade_y on">
                                    <th>保守・メンテナンス</th>
                                    <td><span class="marks">◯</span>保守を受けることはできない</td>
                                    <td><span class="marks">×</span>保守を受けることはできるが、<br>コミュニケーションが多く必要</td>
                                    <td><span class="marks">△</span>保守を受けることができる</td>
                                    <td class="tg"><span class="marks">◯</span>ワンストップで保守もできる</td>
                                </tr>
                                <tr class="fade_y on">
                                    <th>価格</th>
                                    <td><span class="marks">△</span>デザインのみなので割高となる</td>
                                    <td><span class="marks">×</span>単価は日本企業より安い可能性が大</td>
                                    <td><span class="marks">×</span>金額感は割高可能性大</td>
                                    <td class="tg"><span class="marks">◯</span>日本とパキスタンの混合チームでリーズナブル</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="branding--contact">
                    <h3 class="fade_y on">ブランディングに関するご質問があれば<br class="pc">まずはお気軽にご相談ください</h3>
                    <div class="fade_y on">
                        <a href="https://tomorrowgate.co.jp/contact/" class="contactbtn fade_y on">今すぐ相談してみる</a>
                    </div>
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
        metaInfo() {
            return {
                title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | スタジオ開発ハブ",
                meta: [{
                    vmid: "description",
                    name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
                    content: "IDENBRID/アイデンブリッドは日本及びパキスタンにてIT受託開発を行なっているグローバル企業です。ウェブシステムやiOS・Androidのモバイルアプリを初め、ワンストップにてシステム設計、要件定義、UIUXデザイン、ウェブ開発、アプリ開発、クラウドまで一社完結にて対応しています。オフショア開発のみでなく、日本国内でもIT開発を行なっており、スタートアップから東証プライム上場企業まで幅広いクライアントの開発を支えています。",
                }, ],
            };
        },
        data() {
            return {
                blogs: []
            }
        },
        mounted() {
            var swiper = new Swiper(".voiceSlider", {
                centeredSlides: true,
                loop: true,
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
                breakpoints: {
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 3.8,
                        spaceBetween: 50,
                    },
                },

            });


            function loadedPageFunc() {
                if ($(".home").length) {
                    $("#contents").addClass("open");
                    setTimeout(function () {
                        $(".loading").addClass("on");
                    }, 300);
                    $(window).on("load", function () {
                        $(".loading").addClass("on2");
                        setTimeout(function () {
                            $(".loading").fadeOut();
                        }, 800);
                        setTimeout(function () {
                            $("body").addClass("loaded");
                            $(".header, .nav, .tg_catch").addClass("visibility");
                            if ($(".pararel").length) {
                                $(".pararel").addClass("on");
                            }
                        }, 1000);
                    });
                } else {
                    $(window).on("load", function () {
                        $("body").addClass("loaded");
                        $(".header, .nav, .fix_share").addClass("visibility");
                        if ($(".pararel").length) {
                            $(".pararel").addClass("on");
                        }
                        if ($(".recruit_fix").length) {
                            $(".recruit_fix").addClass("visibility");
                        }
                        if ($(".member_content").length) {
                            $(".lead_ttl, .lead_txt").addClass("on");
                            $(".header").removeClass("visibility");
                            $(".pararel").removeClass("on");
                        }
                    });
                }
            }

        }
    };
</script>

<style>
    .quote-us .contactbtn {
        border: 1px solid #fdfdfd;
        color: #fdfdfd;
        display: block;
        font-size: 16px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
        letter-spacing: .1em;
        padding: 22px 0;
        text-align: center;
        transition: .4s;
        width: 260px;
    }

    .quote-us .contactbtn:hover {
        background-color: #fdfdfd;
        color: #000;
    }

    .quote-us .heading {
        margin: 0;
        color: #ffffff;
        font-size: 46px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        line-height: 1.2;
        padding-bottom: 10px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
    }

    .quote-us {
        background-image: url('/assets/img/contact-us-background-widget-img.png');
        height: 320px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;

    }

    .quote-us span {
        font-size: 22px;
        color: #ffffff;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 500;
        word-spacing: 4px;
    }

    .qoute-button {
        padding: 40px 0 0px;
    }

    .btn-views {
        border: 2px solid #fff;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
        display: block;
        font-size: 18px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
        letter-spacing: .1em;
        margin-left: 8px;
        margin-top: 50px;
        opacity: 1;
        padding: 19px 0;
        position: relative;
        text-align: center;
        transition: .4s;
        width: 250px;
        z-index: 999;
    }

    .btn-views:hover {
        background: #2573b0;
        border: 2px solid #2573b0;
        color: #fff;
        transition: .4s;
    }

    .voiceSlider {
        height: 100%;
    }

    .voiceSlider .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }

    .slick-list:focus {
        outline: none !important;
    }

    .fade_y {
        transform: translateY(10%);
        opacity: 0;
        transition: 0.5s ease;
        backface-visibility: hidden;
    }

    .fade_y.on {
        opacity: 1;
        transform: translateY(0%);
    }

    .fade_y_min {
        transform: translateY(3%);
        opacity: 0;
        transition: 0.5s ease;
        backface-visibility: hidden;
    }

    .fade_y_min.on {
        opacity: 1;
        transform: translateY(0%);
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
        background-color: #dadada;
        position: absolute;
        right: 0;
        top: 50%;
        transition: 0.3s;
    }

    .hoverScale .thumb .hvrtxt .more_txt::after {
        width: 6px;
        transform: rotate(45deg) translateY(-3px);
    }

    .hoverScale .thumb .hvrtxt .more_txt::before {
        width: 10px;
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

    @media screen and (min-width: 897px) {

        .hoverScale .thumb .hvrtxt .more_txt:hover::after,
        .hoverScale .thumb .hvrtxt .more_txt:hover::before {
            right: -5%;
        }

        .hoverScale .thumb .hvrtxt .more_txt:hover .underline::after {
            transform-origin: left top;
            transform: scale(1, 1);
        }
    }

    .hoverScale .thumb::after {
        content: "";
        background-color: rgba(0, 0, 0, 0.8);
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        transition: 0.4s;
        backface-visibility: hidden;
    }

    .hoverScale .thumb .scaleImg {
        transition: 0.4s;
        backface-visibility: hidden;
    }

    .sp {
        display: none;
    }



    @media screen and (min-width: 897px) {
        .hoverScale:hover .thumb::after {
            opacity: 1;
        }

        .hoverScale:hover .thumb .hvrtxt {
            transform: translate(-34%, -50%);
            opacity: 1;
            transition-delay: 0.3s;
        }

        .hoverScale:hover .thumb .hvrtxt .more_txt::after,
        .hoverScale:hover .thumb .hvrtxt .more_txt::before {
            right: -5px;
            transition-delay: 0.3s;
        }

        .hoverScale:hover .thumb .hvrtxt .more_txt .underline::after {
            transform-origin: left top;
            transform: scale(1, 1);
            transition-delay: 0.3s;
        }

        .hoverScale:hover .thumb .scaleImg {
            transform: scale(1.1);
        }
    }

    .hoverScaleIcon {
        transition: 0.35s;
        display: block;
    }

    .hoverScaleIcon img {
        backface-visibility: hidden;
    }

    @media screen and (min-width: 897px) {
        .hoverScaleIcon:hover {
            transform: scale(1.2);
        }
    }


    .slide_area {
        position: relative;
    }

    .slide_area .slick-arrow {
        cursor: pointer;
        position: absolute;
        z-index: 2;
        background-color: #868686;
        transition: background-color 0.45s;
        color: #fff;
    }

    @media screen and (min-width: 897px) {
        .slide_area .slick-arrow {
            top: -100px;
            width: 70px;
            height: 70px;
            border-radius: 70px;
        }

        .slide_area .slick-arrow:hover {
            background-color: #000;
        }
    }

    @media screen and (max-width: 896px) {
        .slide_area .slick-arrow {
            bottom: -80px;
            width: 50px;
            height: 50px;
            border-radius: 50px;
        }
    }


    .slide_area .slick-prev {
        right: calc(10% + 85px);
    }

    @media screen and (max-width: 896px) {
        .slide_area .slick-prev {
            right: calc(5% + 60px);
        }
    }

    .slide_area .slick-prev:before {
        transform: translate(-50%, -50%) rotate(45deg);
        margin-top: 3px;
    }

    .slide_area .slick-prev:after {
        transform: translate(-50%, -50%) rotate(-45deg);
        margin-top: -3px;
    }

    @media screen and (min-width: 897px) {
        .slide_area .slick-next {
            right: 10%;
        }
    }

    @media screen and (max-width: 896px) {
        .slide_area .slick-next {
            right: 5%;
        }
    }

    .slide_area .slick-next:before {
        transform: translate(-50%, -50%) rotate(-45deg);
        margin-top: 3px;
    }

    .slide_area .slick-next:after {
        transform: translate(-50%, -50%) rotate(45deg);
        margin-top: -3px;
    }

    .slide_area .count {
        position: absolute;
        color: #000;
        font-size: 1.6rem;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 400;
    }

    .slide_area .count::after {
        content: "";
        width: 40px;
        height: 1px;
        background-color: #000;
        transform: rotate(-30deg);
        position: absolute;
        top: 0;
        left: -25px;
    }

    @media screen and (max-width: 896px) {
        .slide_area .count::after {
            top: -2px;
        }
    }

    .company_nav {
        position: relative;
        background-color: #fff;
        border-top: #d1d1d1 2px solid;
        padding: 120px 10%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (max-width: 896px) {
        .company_nav {
            display: block;
            padding: 70px 7%;
        }
    }

    .company_nav.branding_nav .company_nav_list li a {
        font-size: 1.4rem;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 500;
    }

    .company_nav .head_area .entxt {
        display: block;
        margin-top: 16px;
        font-size: 4.2rem;
        letter-spacing: 0.06em;
    }

    @media screen and (max-width: 896px) {
        .company_nav .head_area .entxt {
            font-size: 2.2rem;
            margin-top: 10px;
        }
    }

    .company_nav .head_area .jptxt {
        font-size: 1.3rem;
        letter-spacing: 0.04em;
        color: #cfcfcf;
    }

    @media screen and (max-width: 896px) {
        .company_nav .head_area .jptxt {
            font-size: 1.2rem;
        }
    }

    @media screen and (max-width: 896px) {
        .company_nav .company_nav_list {
            margin-top: 40px;
        }
    }

    .company_nav .company_nav_list li:not(:first-child) {
        margin-top: 25px;
    }

    .company_nav .company_nav_list li a {
        position: relative;
        color: #d1d1d1;
        font-size: 1.6rem;
        letter-spacing: 0.05em;
        position: relative;
        transition: 0.4s;
    }

    .company_nav .company_nav_list li a::after {
        content: "";
        background: #d1d1d1;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -4px;
        left: 0;
        transform: scale(0, 1);
        transition: transform 0.3s;
        transform-origin: right top;
    }

    @media screen and (min-width: 897px) {
        .company_nav .company_nav_list li a:hover::after {
            transform-origin: left top;
            transform: scale(1, 1);
        }
    }

    .company_nav .company_nav_list li a.current {
        pointer-events: none;
        color: #000;
    }

    .company_nav .company_nav_list li a.current::after {
        background: #000;
        transform: scale(1, 1);
    }

    @media screen and (min-width: 897px) {
        .company_nav .company_nav_list li a:hover {
            color: #000;
        }

        .company_nav .company_nav_list li a:hover::after {
            background: #000;
        }
    }

    .service--content {
        background-color: #fff;
    }

    @media screen and (min-width: 897px) {
        .service--content {
            padding: 120px 10%;
        }
    }

    @media screen and (max-width: 896px) {
        .service--content {
            padding: 80px 5%;
        }
    }

    @media screen and (min-width: 897px) {
        .service--content {
            display: flex;
            justify-content: space-between;
        }
    }

    .service.loaded .service--item {
        transform: translateY(0);
        opacity: 1;
    }

    .service--item {
        color: #000;
        transform: translateY(5%);
        transition: 0.6s;
        opacity: 0;
    }

    @media screen and (min-width: 897px) {
        .service--item {
            width: 48%;
        }
    }

    @media screen and (max-width: 896px) {
        .service--item {
            display: block;
            margin-bottom: 50px;
        }
    }

    @media screen and (min-width: 897px) {
        .service--item a:hover .viewmore::after {
            transform-origin: right top;
            transform: scale(0, 1);
        }
    }

    .service--item a .servicename {
        margin-top: 24px;
    }

    .service--item a .servicename .jp {
        display: block;
        margin-bottom: 12px;
        font-size: 2.2rem;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
        color: #000;
    }

    .service--item a .servicename .en {
        font-size: 1.4rem;
        color: #c6c6c6;
    }

    .branding.loaded .branding--mv h3 {
        transform: translateY(0);
        opacity: 1;
    }

    .branding.loaded .branding--mv p {
        transform: translateY(0);
        opacity: 1;
    }

    .branding.loaded .branding--mv .download {
        transform: translateY(0);
        opacity: 1;
    }

    .branding--mv {
        background: url(/assets/img/sdh-bg-img.png) no-repeat center;
        background-size: cover;
        background-position: top center;
        padding: 100px 10%;
        margin-top: 0px;
    }

    @media screen and (max-width: 896px) {
        .branding--mv {
            padding: 80px 5%;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--mv .text_area {
            margin-top: 0;
            padding: 0;
        }
    }

    .branding--mv .text_area h3 {
        color: #fff;
        font-size: 40px;
        line-height: 1.35;
        letter-spacing: 0.12em;
        text-align: left;
        margin-bottom: 45px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 600;
    }

    @media screen and (max-width: 896px) {
        .branding--mv .text_area h3 {
            font-size: 2.4rem;
            margin-bottom: 30px;
        }
    }

    .branding--mv .text_area p {
        font-size: 14px;
        line-height: 2;
        letter-spacing: 0.04px;
        color: #fff;
        text-align: left;
        font-family: 'Noto Sans JP', sans-serif;
    }

    .branding--mv .text_area .download {
        text-align: center;
        margin-top: 55px;
        width: 280px;
        display: block;
        font-size: 16px;
        color: #fff;
        padding: 22px 0;
        border: 1px solid #fdfdfd;
        transition: 0.4s;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 500;
    }

    @media screen and (min-width: 897px) {
        .branding--mv .text_area .download:hover {
            background: #fff;
            color: #000;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--mv .text_area .download {
            margin: 30px auto 0;
            width: 100%;
            font-size: 1.4rem;
        }
    }

    @media screen and (min-width: 897px) {
        .branding--service {
            padding: 160px 10%;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--service {
            padding: 80px 7%;
        }
    }

    .branding--service--inner .head {
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 896px) {
        .branding--service--inner .head {
            display: block;
        }
    }

    .branding--service--inner .head .heading {
        padding-right: 70px;
        width: 50%;
    }

    .branding--service--inner .head .heading .sub {
        color: #333333;
        font-size: 18px;
        letter-spacing: 0.08px;
        font-weight: 500;
        font-family: DIN-Regular;
    }

    .branding--service--inner .head .heading h3 {
        color: #333333;
        font-size: 26px;
        /* margin-top: 23px; */
        letter-spacing: 0.08px;
        font-family: 'Noto Sans JP', sans-serif;
    }

    @media screen and (max-width: 896px) {
        .branding--service--inner .head .heading {
            line-height: 1.5;
            width: 100%;
            padding-right: 0;
        }

        .branding--service--inner .head .heading .sub {
            color: #333333;
            font-size: 1.4rem;
            letter-spacing: 0.08em;
        }

        .branding--service--inner .head .heading h3 {
            color: #cfcfcf;
            font-size: 2rem;
            margin-top: 23px;
            letter-spacing: 0.08em;
        }
    }

    .branding--service--inner .head .lead {
        width: 50%;
        font-size: 14px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 500;
        color: #333;
        line-height: 2.1;
        letter-spacing: 0.04px;
    }

    @media screen and (max-width: 896px) {
        .branding--service--inner .head .lead {
            width: 100%;
            margin-top: 30px;
        }
    }

    .branding--service--wrap {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    @media screen and (max-width: 896px) {
        .branding--service--wrap {
            display: block;
        }
    }

    .branding--service--wrap--box {
        margin-top: 100px;
        width: 48%;
    }

    @media screen and (max-width: 896px) {
        .branding--service--wrap--box {
            width: 100%;
            margin-top: 80px;
        }
    }

    .branding--service--wrap--box:nth-of-type(1) {
        width: 100%;
    }

    .branding--service--wrap--box:nth-of-type(1) .text_area {
        display: flex;
        justify-content: flex-start;
    }

    @media screen and (max-width: 896px) {
        .branding--service--wrap--box:nth-of-type(1) .text_area {
            display: block;
        }
    }

    .branding--service--wrap--box:nth-of-type(1) .text_area .heading {
        margin-bottom: 0;
        margin-right: 80px;
    }

    @media screen and (max-width: 896px) {
        .branding--service--wrap--box:nth-of-type(1) .text_area .heading {
            margin-right: 0;
        }
    }

    .branding--service--wrap--box .text_area {
        margin-top: 45px;
    }

    @media screen and (max-width: 896px) {
        .branding--service--wrap--box .text_area {
            margin-top: 30px;
        }
    }

    .branding--service--wrap--box .text_area .heading {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 25px;
    }

    @media screen and (max-width: 896px) {
        .branding--service--wrap--box .text_area .heading {
            display: block;
        }
    }

    .branding--service--wrap--box .text_area .heading h4 {
        margin-right: 15px;
        color: #333333;
        letter-spacing: 0.04px;
        font-size: 20px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 500;
    }

    @media screen and (max-width: 896px) {
        .branding--service--wrap--box .text_area .heading h4 {
            margin-right: 0;
        }
    }

    .branding--service--wrap--box .text_area .heading .label {
        color: #cfcfcf;
        padding: 7px 11px;
        font-size: 13px;
        letter-spacing: 0.04px;
        background-color: #222;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 500;

    }

    @media screen and (max-width: 896px) {
        .branding--service--wrap--box .text_area .heading .label {
            font-size: 12px;
            padding: 5px 10px;
            display: inline-block;
            margin-top: 15px;
        }
    }

    .branding--service--wrap--box .text_area .lead {
        color: #333333;
        font-size: 14px;
        line-height: 1.8;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 500;
    }

    @media screen and (max-width: 896px) {
        .branding--service--wrap--box .text_area .lead {
            margin-top: 25px;
        }
    }

    .branding--service--wrap--box .more_txt {
        color: #333333;
        font-size: 16px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
        font-family: DIN-Regular;
        font-weight: 400;
        position: relative;
        padding-right: 20px;
        margin-top: 30px;
        display: inline-block;
    }

    .branding--service--wrap--box .more_txt::after,
    .branding--service--wrap--box .more_txt::before {
        content: "";
        height: 1px;
        background-color: #333333;
        position: absolute;
        right: 0;
        top: 50%;
        transition: 0.3s;
    }

    .branding--service--wrap--box .more_txt::after {
        width: 6px;
        transform: rotate(45deg) translateY(-3px);
    }

    .branding--service--wrap--box .more_txt::before {
        width: 10px;
    }

    .branding--service--wrap--box .more_txt .underline {
        position: relative;
    }

    .branding--service--wrap--box .more_txt .underline::after {
        content: "";
        background: #333;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -4px;
        left: 0;
        transform: scale(0, 1);
        transition: transform 0.3s;
        transform-origin: right top;
    }

    @media screen and (min-width: 897px) {

        .branding--service--wrap--box .more_txt:hover::after,
        .branding--service--wrap--box .more_txt:hover::before {
            right: -5%;
        }

        .branding--service--wrap--box .more_txt:hover .underline::after {
            transform-origin: left top;
            transform: scale(1, 1);
        }
    }

    .branding--strength {
        background-color: #f6f6f6;
    }

    @media screen and (min-width: 897px) {
        .branding--strength {
            padding: 150px 10%;
        }
    }

    .branding--strength .heading .sub {
        color: #000;
        font-size: 1.6rem;
        letter-spacing: 0.08em;
    }

    .branding--strength .heading h3 {
        color: #000;
        font-size: 2rem;
        margin-top: 23px;
        letter-spacing: 0.08em;
    }

    .branding--strengths {
        background-color: #f6f6f6;
    }

    @media screen and (min-width: 897px) {
        .branding--strengths {
            padding: 160px 20% 160px 10%;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--strengths {
            padding: 80px 5% 120px;
        }
    }

    .branding--strengths .heading .sub {
        color: #000;
        font-size: 16px;
        letter-spacing: 0.08px;
        font-family: DIN-Regular;
        font-weight: 400;
    }

    .branding--strengths .heading h3 {
        color: #000;
        font-size: 20px;
        font-family: 'Noto Sans JP', sans-serif;
        /* margin-top: 23px; */
        letter-spacing: 0.08em;
        font-weight: 700;
    }

    .branding--strengths--content .num {
        color: #333333;
    }

    @media screen and (min-width: 897px) {
        .branding--strengths--content .item {
            display: flex;
            justify-content: space-between;
            margin-top: 100px;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--strengths--content .item {
            margin-top: 60px;
        }
    }

    @media screen and (min-width: 897px) {
        .branding--strengths--content .num {
            font-size: 100px;
            font-family: DIN-Regular;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--strengths--content .num {
            font-size: 42px;
            margin-bottom: 10px;
        }
    }

    @media screen and (min-width: 897px) {
        .branding--strengths--content .textarea {
            width: 83.5%;
        }
    }

    .branding--strengths--content .textarea h4 {
        margin-bottom: 34px;
        letter-spacing: 0.12px;
        line-height: 1.5;
    }

    @media screen and (min-width: 897px) {
        .branding--strengths--content .textarea h4 {
            font-size: 24px;
            font-family: 'Noto Sans JP', sans-serif;
            font-weight: 700;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--strengths--content .textarea h4 {
            margin-bottom: 25px;
            font-size: 21px;
        }
    }

    .branding--strengths--content .textarea p {
        font-size: 14px;
        line-height: 2;
        letter-spacing: 0.04px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 500;
        color: #868686;
    }

    .branding--result {
        background-color: rgb(57, 108, 162);
    }

    @media screen and (min-width: 897px) {
        .branding--result {
            padding: 140px 10%;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--result {
            padding: 80px 7% 120px;
        }
    }

    .branding--result .heading .sub {
        color: #cfcfcf;
        font-size: 1.6rem;
        letter-spacing: 0.08em;
    }

    .branding--result .heading h3 {
        color: #cfcfcf;
        font-size: 2rem;
        margin-top: 23px;
        letter-spacing: 0.08em;
    }

    @media screen and (min-width: 897px) {
        .branding--result--list {
            margin-top: 80px;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--result--list {
            margin-top: 45px;
        }
    }

    .branding--result--item {
        background-color: #fff;
        margin-top: 20px;
        padding: 40px 15px;
    }

    @media screen and (min-width: 897px) {
        .branding--result--item {
            width: 24%;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--result--item {
            margin-top: 30px;
            padding: 20px 15px;
        }
    }

    .branding--result--item .icon {
        position: relative;
        width: 25px;
        margin: 0 auto 20px;
        filter: invert(1);
    }

    .branding--result--item h4 {
        position: relative;
        font-size: 1.8rem;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 500;
        letter-spacing: 0.06em;
        text-align: center;
        color: #000;
    }

    .branding--result--item p {
        position: relative;
        margin-top: 25px;
        font-size: 12px;
        line-height: 1.85;
        color: #000;
    }

    @media screen and (max-width: 896px) {
        .branding--result--item p {
            margin-top: 20px;
        }
    }

    .branding--compare {
        background-color: #fff;
    }

    @media screen and (min-width: 897px) {
        .branding--compare {
            padding: 140px 10%;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--compare {
            padding: 80px 7%;
        }
    }

    .branding--compare .heading .sub {
        color: #000;
        font-size: 1.6rem;
        letter-spacing: 0.08em;
    }

    .branding--compare .heading h3 {
        color: #000;
        font-size: 2rem;
        margin-top: 23px;
        letter-spacing: 0.08em;
    }

    @media screen and (max-width: 896px) {
        .branding--compare .heading {
            line-height: 1.5;
        }
    }

    @media screen and (min-width: 897px) {
        .branding--compare .scroll {
            display: none;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--compare .scroll {
            display: flex;
            align-items: center;
            margin-top: 50px;
            margin-left: 1em;
        }
    }

    .branding--compare .scroll .bdr {
        width: 40px;
        height: 1px;
        background-color: #fff;
        overflow: hidden;
        position: relative;
    }

    .branding--compare .scroll .bdr::before {
        content: "";
        background-color: #000;
        width: 0%;
        height: 3px;
        position: absolute;
        top: 0;
        left: 0;
        animation: scranim 3s infinite;
    }

    .branding--compare .scroll p {
        color: #000;
        font-size: 1.4rem;
        margin-right: 15px;
        letter-spacing: 0.04em;
    }

    .branding--compare--table {
        margin-top: 100px;
    }

    @media screen and (max-width: 896px) {
        .branding--compare--table {
            overflow-x: scroll;
            margin-top: 60px;
        }
    }

    .branding--compare--table table {
        border-collapse: collapse;
    }

    @media screen and (max-width: 896px) {
        .branding--compare--table table {
            width: 800px;
        }
    }

    .branding--compare--table table tr th,
    .branding--compare--table table tr td {
        border: 1px solid #1c1c1c;
        font-size: 17.6px;
        letter-spacing: 0.04em;
        color: #000;
        padding: 25px 20px;
        line-height: 1.6;
        text-align: center;
        vertical-align: baseline;
    }

    @media screen and (max-width: 896px) {

        .branding--compare--table table tr th,
        .branding--compare--table table tr td {
            font-size: 1.2rem;
            padding: 18px 1em;
        }
    }

    .branding--compare--table table tr th.tg,
    .branding--compare--table table tr td.tg {
        background-color: rgb(57, 108, 162);
        color: #dadada;
    }

    .branding--compare--table table tr th {
        color: #000;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 600;
        background-color: #e2e2e2;
        vertical-align: middle;
    }

    .branding--compare--table table tr td {
        font-size: 11px;
        border: 1px solid #1c1c1c;
    }

    .branding--compare--table table tr td .marks {
        display: block;
        font-size: 4rem;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 600;
    }

    .branding--flow {
        background-color: #000;
    }

    @media screen and (min-width: 897px) {
        .branding--flow {
            padding: 140px 10%;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--flow {
            padding: 80px 7%;
        }
    }

    .branding--flow .heading .sub {
        color: #cfcfcf;
        font-size: 1.6rem;
        letter-spacing: 0.08em;
    }

    .branding--flow .heading h3 {
        color: #cfcfcf;
        font-size: 2rem;
        margin-top: 23px;
        letter-spacing: 0.08em;
    }

    .branding--flow .flow_box {
        margin-top: 100px;
        display: flex;
    }

    @media screen and (max-width: 896px) {
        .branding--flow .flow_box {
            margin-top: 60px;
            display: block;
        }
    }

    .branding--flow .flow_box .flow_item {
        opacity: 0;
        transition: 0.4s;
    }

    @media screen and (max-width: 896px) {
        .branding--flow .flow_box .flow_item {
            width: 100%;
            transform: translateY(-3%);
        }
    }

    .branding--flow .flow_box .flow_item.on {
        opacity: 1;
        transform: translate(0);
    }

    @media screen and (min-width: 897px) {
        .branding--flow .flow_box .flow_item {
            transform: translateX(-3%);
        }

        .branding--flow .flow_box .flow_item.flow02 {
            transition-delay: 0.2s;
        }

        .branding--flow .flow_box .flow_item.flow03 {
            transition-delay: 0.4s;
        }

        .branding--flow .flow_box .flow_item.flow04 {
            transition-delay: 0.6s;
        }
    }

    .branding--voice {
        background-color: #fff;
    }

    @media screen and (min-width: 897px) {
        .branding--voice {
            padding: 140px 0;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--voice {
            padding: 80px 0 50px;
        }
    }

    .branding--voice .heading {
        margin-left: 10%;
    }

    .branding--voice .heading .sub {
        color: #000;
        font-size: 16px;
        letter-spacing: 0.08em;
    }

    .branding--voice .heading h3 {
        color: #000;
        font-size: 20px;
        margin-top: 23px;
        letter-spacing: 0.08em;
    }

    .branding--voice--content .slide_area {
        margin-top: 40px;
    }

    .branding--voice--content .slide_area .swiper-button-prev:after,
    .branding--voice--content .slide_area .swiper-button-next:after {
        font-size: 18px;
    }

    @media screen and (max-width: 896px) {
        .branding--voice--content .slide_area {
            margin-top: 40px;
            padding: 0 7%;
        }

        .branding--voice--content .slide_area .slick-arrow {
            top: -80px;
        }
    }

    .branding--voice--content .slide_area .swiper-button-prev {
        right: calc(10% + 40px);
        left: auto;
    }

    @media screen and (max-width: 896px) {
        .branding--voice--content .slide_area .swiper-button-prev {
            right: 60px;
        }
    }

    .branding--voice--content .slide_area .swiper-button-next {
        right: calc(10% - 45px);
    }

    @media screen and (max-width: 896px) {
        .branding--voice--content .slide_area .swiper-button-next {
            right: 0;
        }
    }

    .branding--voice--content .slide_area h3 {
        font-size: 1.6rem;
        color: #000;
        letter-spacing: 0.05em;
        margin-bottom: 80px;
    }

    @media screen and (max-width: 896px) {
        .branding--voice--content .slide_area h3 {
            margin-bottom: 45px;
        }
    }

    .branding--voice--content .slide_area .voice_slide {
        position: relative;
    }

    .branding--voice--content .slide_area .voice_slide .slide_item {
        margin-right: 70px;
    }

    @media screen and (max-width: 896px) {
        .branding--voice--content .slide_area .voice_slide .slide_item {
            margin: 0;
        }
    }

    .branding--voice--content .slide_area .slide_item .img_box {
        margin-bottom: 30px;
    }

    .branding--voice--content .slide_area .slide_item .text_area h4 {
        letter-spacing: 0.1em;
        font-size: 20px;
        text-align: left;
        margin-bottom: 20px;
        line-height: 1.5;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 600;
    }

    .branding--voice--content .slide_area .slide_item .text_area .logo {
        margin-top: 30px;
        margin-right: 0;
        margin-left: auto;
    }

    .branding--voice--content .slide_area .slide_item .text_area .logo.logo01 {
        width: 68px;
    }

    .branding--voice--content .slide_area .slide_item .text_area .logo.logo02 {
        width: 110px;
    }

    .branding--voice--content .slide_area .slide_item .text_area .logo.logo03 {
        width: 140px;
    }

    .branding--voice--content .slide_area .slide_item .text_area .logo.logo04 {
        width: 100px;
    }

    .branding--voice--content .slide_area .slide_item .text_area .logo.logo05 {
        width: 120px;
    }

    .branding--voice--content .slide_area .slide_item .text_area .logo.logo06 {
        width: 120px;
    }

    .branding--voice--content .slide_area .slide_item .text_area .logo.logo07 {
        width: 80px;
    }

    .branding--voice--content .slide_area .slide_item .text_area .logo.logo08 {
        width: 170px;
    }

    .branding--voice--content .slide_area .slide_item .text_area p {
        font-size: 14px;
        line-height: 2;
        text-align: left;
        letter-spacing: 0.04em;
        color: #000;
    }

    .branding--voice--content .slide_area .slide_item .text_area .who {
        color: #868686;
        text-align: right;
        line-height: 1.8;
        margin-top: 15px;
    }

    .branding--contact {
        background-image: url(/assets/img/bottom-banner-background-image.png);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: 0 0;
    }

    @media screen and (min-width: 897px) {
        .branding--contact {
            padding: 180px 0;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--contact {
            padding: 100px 5%;
        }
    }

    .branding--contact h3 {
        letter-spacing: 0.1em;
        line-height: 1.85;
        color: #dadada;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 600;
    }

    @media screen and (min-width: 897px) {
        .branding--contact h3 {
            text-align: center;
            font-size: 40px;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--contact h3 {
            font-size: 20px;
        }
    }

    .branding--contact p {
        font-size: 1.4rem;
        line-height: 2;
        letter-spacing: 0.04em;
        color: #dadada;
    }

    @media screen and (min-width: 897px) {
        .branding--contact p {
            text-align: center;
            margin-top: 42px;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--contact p {
            margin-top: 32px;
        }
    }

    .branding--contact .contactbtn {
        display: block;
        width: 260px;
        padding: 22px 0;
        margin: 50px auto 0;
        border: 1px solid #fdfdfd;
        font-size: 16px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
        letter-spacing: 0.1em;
        color: #fdfdfd;
        text-align: center;
        transition: 0.4s;
    }

    @media screen and (min-width: 897px) {
        .branding--contact .contactbtn:hover {
            background-color: #fdfdfd;
            color: #000;
        }
    }

    .branding.loaded .branding--intro .textarea .label {
        transform: translateY(0);
        opacity: 1;
    }

    .branding.loaded .branding--intro .textarea h3 {
        transform: translateY(0);
        opacity: 1;
    }

    .branding.loaded .branding--intro .textarea p {
        transform: translateY(0);
        opacity: 1;
    }

    .branding.loaded .branding--intro .photo .base {
        transform: translateY(0);
        opacity: 1;
    }

    .branding.loaded .branding--intro .photo .parts.parts01 {
        transform: translateY(0);
        opacity: 1;
        transition-delay: 0.2s;
    }

    .branding.loaded .branding--intro .photo .parts.parts02 {
        transform: translateY(0);
        opacity: 1;
        transition-delay: 0.4s;
    }

    .branding--intro {
        z-index: 1;
        padding: 40px 0 180px 10%;
        position: relative;
    }

    @media screen and (max-width: 896px) {
        .branding--intro {
            display: block;
            padding: 30px 0 80px;
        }
    }



    @media screen and (max-width: 896px) {}

    .branding--intro.policy .textarea .photo {
        left: 94%;
        width: 80%;
        max-width: 700px;
    }

    @media screen and (max-width: 896px) {
        .branding--intro.policy .textarea .photo {
            left: auto;
            bottom: auto;
            width: 100%;
        }
    }

    .branding--intro.policy .textarea .photo .parts01 {
        width: 43%;
        bottom: 4%;
        left: -10%;
        z-index: 2;
    }

    @media screen and (max-width: 896px) {
        .branding--intro.policy .textarea .photo .parts01 {
            width: 45%;
            bottom: 9%;
            left: -15%;
        }
    }

    .branding--intro.policy .textarea .photo .parts02 {
        width: 55%;
        right: 0;
        top: -9%;
        z-index: 2;
    }

    @media screen and (max-width: 896px) {
        .branding--intro.policy .textarea .photo .parts02 {
            width: 50%;
            right: -5%;
            top: -17%;
        }
    }

    .branding--intro.policy .textarea .photo .base {
        position: relative;
        z-index: 1;
    }

    .branding--intro.recbranding .textarea .photo {
        left: 114%;
        width: 67%;
        max-width: 700px;
    }

    @media screen and (max-width: 896px) {
        .branding--intro.recbranding .textarea .photo {
            left: auto;
            bottom: auto;
            width: 80%;
            margin-right: 0;
            margin-left: auto;
        }
    }

    .branding--intro.recbranding .textarea .photo .parts01 {
        width: 64%;
        bottom: -5%;
        left: -29%;
        z-index: 2;
    }

    .branding--intro.recbranding .textarea .photo .parts02 {
        width: 108%;
        left: -49%;
        top: -36%;
    }

    .branding--intro.recbranding .textarea .photo .base {
        position: relative;
        z-index: 1;
    }

    .branding--intro.outer .textarea .photo {
        left: 108%;
        max-width: 680px;
        width: 72%;
    }

    @media screen and (max-width: 896px) {
        .branding--intro.outer .textarea .photo {
            left: auto;
            bottom: auto;
            width: 80%;
            margin-right: 0;
            margin-left: auto;
        }
    }

    .branding--intro.outer .textarea .photo .parts01 {
        width: 46%;
        bottom: 0;
        left: -38%;
        z-index: 2;
    }

    .branding--intro.outer .textarea .photo .parts02 {
        width: 70%;
        left: -54%;
        top: -13%;
    }

    .branding--intro.outer .textarea .photo .base {
        position: relative;
        z-index: 1;
    }

    .branding--intro.inner .textarea .photo {
        left: 110%;
        width: 71%;
        max-width: 530px;
    }

    @media screen and (max-width: 896px) {
        .branding--intro.inner .textarea .photo {
            left: auto;
            bottom: auto;
            width: 80%;
            margin-right: 0;
            margin-left: auto;
        }
    }

    .branding--intro.inner .textarea .photo .parts01 {
        width: 89%;
        bottom: -23%;
        left: -39%;
        z-index: 2;
    }

    @media screen and (max-width: 896px) {
        .branding--intro.inner .textarea .photo .parts01 {
            width: 82%;
            bottom: -16%;
            left: -39%;
        }
    }

    .branding--intro.inner .textarea .photo .parts02 {
        width: 59%;
        left: -45%;
        top: -13%;
    }

    .branding--intro.inner .textarea .photo .base {
        position: relative;
        z-index: 1;
    }

    .branding--intro.snsbranding::before {
        opacity: 0.4;
    }


    .branding--intro.snsbranding .textarea .photo {
        left: 92%;
        width: 57%;
        max-width: 460px;
        z-index: 1;
    }

    @media screen and (max-width: 896px) {
        .branding--intro.snsbranding .textarea .photo {
            left: auto;
            bottom: auto;
            width: 70%;
            margin: 60px auto 0;
        }
    }

    .branding--intro.snsbranding .textarea .photo .parts01 {
        width: 86%;
        bottom: -1%;
        left: 3%;
        z-index: 2;
    }

    .branding--intro.snsbranding .textarea .photo .parts02 {
        width: 102%;
        left: -9%;
        top: 23%;
        z-index: 2;
    }

    .branding--intro.snsbranding .textarea .photo .base {
        position: relative;
        z-index: 1;
    }

    .branding--intro .textarea {
        width: 60%;
        color: #dadada;
        position: relative;
    }

    @media screen and (max-width: 896px) {
        .branding--intro .textarea {
            width: 100%;
            padding: 0 5%;
        }
    }

    .branding--intro .textarea h3 {
        line-height: 1.54;
        letter-spacing: 0.14em;
        transform: translateY(10%);
        transition: 1s;
        opacity: 0;
    }

    @media screen and (min-width: 897px) {
        .branding--intro .textarea h3 {
            font-size: 3.2rem;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--intro .textarea h3 {
            font-size: 2.4rem;
            letter-spacing: 0.1em;
        }
    }

    .branding--intro .textarea p {
        margin-top: 50px;
        transform: translateY(10%);
        transition: 1.4s;
        opacity: 0;
        font-size: 1.4rem;
        line-height: 2.5;
        letter-spacing: 0.04em;
        color: #dadada;
    }

    @media screen and (max-width: 896px) {
        .branding--intro .textarea p {
            margin-top: 30px;
        }
    }

    .branding--intro .textarea .photo {
        position: absolute;
        z-index: -1;
        bottom: 50%;
        transform: translateY(50%);
    }

    @media screen and (max-width: 896px) {
        .branding--intro .textarea .photo {
            position: relative;
            transform: translateY(0);
            margin-top: 80px;
        }
    }

    .branding--intro .textarea .photo .base {
        transform: translateY(2%);
        transition: 1s;
        opacity: 0;
    }

    .branding--intro .textarea .photo .parts {
        position: absolute;
    }

    .branding--intro .textarea .photo .parts.parts01 {
        transform: translateY(4%);
        transition: 1.4s;
        opacity: 0;
    }

    .branding--intro .textarea .photo .parts.parts02 {
        transform: translateY(4%);
        transition: 1.8s;
        opacity: 0;
    }

    .branding--anchor {
        background-color: #fff;
    }

    @media screen and (min-width: 897px) {
        .branding--anchor {
            padding: 150px 10% 120px;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--anchor {
            padding: 100px 5% 30px;
        }
    }

    .branding--anchor h3 {
        font-size: 2rem;
        letter-spacing: 0.06em;
    }

    .branding--anchor h3.space {
        margin-top: 180px;
    }

    @media screen and (max-width: 896px) {
        .branding--anchor h3 {
            font-size: 1.8rem;
        }
    }

    .branding--anchor ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }

    @media screen and (min-width: 897px) {
        .branding--anchor ul {
            margin-top: 70px;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--anchor ul {
            margin-top: 45px;
        }
    }

    .branding--anchor ul.x3 li {
        width: 32%;
    }

    @media screen and (max-width: 896px) {
        .branding--anchor ul.x3 li {
            width: 100%;
        }
    }

    .branding--anchor ul.x3 li .logo {
        width: 122px;
        margin: 20px auto;
    }

    .branding--anchor ul.x4 li {
        width: 24%;
        margin-bottom: 50px;
    }

    @media screen and (max-width: 896px) {
        .branding--anchor ul.x4 li {
            width: 48%;
            margin-bottom: 40px;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--anchor ul li {
            width: 47.5%;
            margin-bottom: 30px;
        }
    }

    .branding--anchor p {
        margin-top: 10px;
        font-size: 1.4rem;
        line-height: 1.8;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
        letter-spacing: 0.06em;
        color: #000;
        text-align: center;
    }

    .branding--anchor p.tl {
        text-align: left;
    }

    .branding--area {
        background-color: #000;
    }

    @media screen and (min-width: 897px) {
        .branding--area {
            padding: 120px 10%;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--area {
            padding: 80px 5%;
        }
    }

    @media screen and (min-width: 897px) {
        .branding--baselayout {
            margin-bottom: 120px;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--baselayout {
            margin-bottom: 80px;
        }

        .branding--baselayout:last-of-type {
            margin-bottom: 0;
        }
    }

    @media screen and (min-width: 897px) {
        .branding--baselayout .textarea {
            display: flex;
            justify-content: space-between;
            margin-top: 60px;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--baselayout .textarea {
            margin-top: 30px;
        }
    }

    .branding--baselayout .eventname {
        font-size: 1.8rem;
        letter-spacing: 0.06em;
        color: #dadada;
        text-transform: uppercase;
    }

    @media screen and (max-width: 896px) {
        .branding--baselayout .eventname {
            font-size: 1.4rem;
            margin-bottom: 20px;
        }
    }

    @media screen and (min-width: 897px) {
        .branding--baselayout .explain {
            width: 72.5%;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--baselayout .explain {
            margin-top: 10px;
        }
    }

    .branding--baselayout .phrase {
        font-size: 2.4rem;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 600;
        line-height: 1.58;
        color: #dadada;
    }

    @media screen and (max-width: 896px) {
        .branding--baselayout .phrase {
            font-size: 2.2rem;
        }
    }

    .branding--baselayout p {
        font-size: 1.4rem;
        line-height: 2;
        letter-spacing: 0.04em;
        color: #dadada;
    }

    @media screen and (min-width: 897px) {
        .branding--baselayout p {
            margin-top: 28px;
        }
    }

    @media screen and (max-width: 896px) {
        .branding--baselayout p {
            margin-top: 18px;
        }
    }

    .branding--baselayout .more_txt {
        color: #dadada;
        font-size: 1.4rem;
        font-family: "DIN";
        letter-spacing: 0.06em;
        text-transform: uppercase;
        position: relative;
        padding-right: 20px;
        display: inline-block;
        margin-top: 30px;
    }

    .branding--baselayout .more_txt::after,
    .branding--baselayout .more_txt::before {
        content: "";
        height: 1px;
        background-color: #dadada;
        position: absolute;
        right: 0;
        top: 50%;
        transition: 0.3s;
    }

    .branding--baselayout .more_txt::after {
        width: 6px;
        transform: rotate(45deg) translateY(-3px);
    }

    .branding--baselayout .more_txt::before {
        width: 10px;
    }

    .branding--baselayout .more_txt .underline {
        position: relative;
    }

    .branding--baselayout .more_txt .underline::after {
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

    @media screen and (min-width: 897px) {

        .branding--baselayout .more_txt:hover::after,
        .branding--baselayout .more_txt:hover::before {
            right: -5%;
        }

        .branding--baselayout .more_txt:hover .underline::after {
            transform-origin: left top;
            transform: scale(1, 1);
        }
    }

    @media screen and (min-width: 897px) {
        .branding .branding_flow {
            padding: 178px 20% 150px 10%;
        }
    }

    @media screen and (max-width: 896px) {
        .branding .branding_flow {
            padding: 90px 5%;
        }
    }

    .branding .branding_flow .heading .label {
        font-size: 1.4rem;
        font-family: "DIN";
        color: #cfcfcf;
        letter-spacing: 0.08em;
        text-transform: uppercase;
    }

    .branding .branding_flow .heading h3 {
        margin-top: 20px;
        font-size: 2rem;
        letter-spacing: 0.08em;
        color: #dadada;
    }

    @media screen and (max-width: 896px) {
        .branding .branding_flow .heading h3 {
            line-height: 1.5;
            font-size: 1.8rem;
        }
    }

    .branding .branding_flow--content {
        margin-top: 100px;
    }

    @media screen and (max-width: 896px) {
        .branding .branding_flow--content {
            margin-top: 60px;
        }
    }

    .branding .branding_flow--content .item {
        margin-bottom: 80px;
    }

    @media screen and (min-width: 897px) {
        .branding .branding_flow--content .item {
            display: flex;
        }
    }

    .branding .branding_flow--content .num {
        letter-spacing: 0.06em;
        color: #dadada;
    }

    @media screen and (min-width: 897px) {
        .branding .branding_flow--content .num {
            font-size: 10rem;
        }
    }

    @media screen and (max-width: 896px) {
        .branding .branding_flow--content .num {
            font-size: 4.4rem;
        }
    }

    @media screen and (min-width: 897px) {
        .branding .branding_flow--content .textarea {
            margin-left: 60px;
        }
    }

    @media screen and (max-width: 896px) {
        .branding .branding_flow--content .textarea {
            margin-top: 10px;
        }
    }

    .branding .branding_flow--content .textarea h4 {
        font-size: 2.4rem;
        line-height: 1.35;
        letter-spacing: 0.1em;
        color: #dadada;
    }

    @media screen and (max-width: 896px) {
        .branding .branding_flow--content .textarea h4 {
            font-size: 2rem;
            line-height: 1.5;
        }
    }

    .branding .branding_flow--content .textarea p {
        margin-top: 28px;
        font-size: 1.4rem;
        line-height: 2;
        letter-spacing: 0.04em;
        color: #dadada;
    }

    @media screen and (max-width: 896px) {
        .branding .branding_flow--content .textarea p {
            margin-top: 20px;
        }
    }

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
        /*影の調整 160 - 20*/
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
        font-family: 'Noto Sans JP', sans-serif;
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
        font-family: 'Noto Sans JP', sans-serif;
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