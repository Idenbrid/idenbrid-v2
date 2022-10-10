<template>
    <div>
        <Navbar />
        <main>
            <div class="mv_textarea">
                <h2>
                    <strong class="en entxt">CEO MESSAGE / 代表メッセージ</strong>
                    <span class="jptxt">皆様へのご挨拶</span>
                </h2>
            </div>
            <div class="message--index highlight_blk">
                <div class="message_inner">
                    <div class="message_box">
                        <div class="box">
                            <div class="text_area">
                                <div class="ttl">
                                    <h3>私たちが戦うフィールドは「全世界」<br class="pc">テクノロジーでかっこよく世界をアップデート</h3>
                                </div>
                                <p class="lead">
                                    新型コロナウイルスが依然として猛威を振るう中、日々の生活が困難な状況におられる皆様に心よりお見舞いを申し上げるとともに一所懸命に治療などに取り組まれている医療従事者の方々には深く心より御礼を申し上げます。
                                </p>
                                <p class="lead">
                                    さて、私たちの創業から、そしてコロナ禍における生活が始まって約2年が経過しました。私たちIDENBRIDは2030年までにこの競争激しいインドを含む南アジアの中でパキスタン拠点の会社としてNo.1になることを掲げています。
                                </p>
                                <p class="lead">
                                    IT開発業界の中にいる私たちは世界中でこのコロナによって更にビジネスのIT化を進める動きが顕著になっていることを感じていています。日本においてもこれまでDXと散々騒がれていても変わっていなかった業務に「改革のメス」を入れる企業も増え、互いが競い合うように効率化をITで実現しているのが見えるようになってきました。
                                </p>
                                <p class="lead">
                                    当社ではグローバルマーケットへのアクセスができる稀有な企業としてのアドバンテージを最大限活かしたビジネス展開を今後も行い、加速するIT化の波を更に大きなものにできるよう積極的に世界中のITイノベーションに取り組んでいきます。
                                </p>
                                <p class="lead">
                                    当社ではグローバルマーケットへのアクセスができる稀有な企業としてのアドバンテージを最大限活かしたビジネス展開を今後も行い、加速するIT化の波を更に大きなものにできるよう積極的に世界中のITイノベーションに取り組んでいきます。
                                </p>
                                <p>そしてその根幹には「ユーザーペイン解消」という最も大切なお客様の声を大事にした開発が現場レベルで実現されるよう今後も会社として各クライアントに貢献して参ります。</p>
                                <p class="lead name">2022年9月<br>IDENBRID INC.<br>代表CEO 中村 奏画</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="menu-list">
                <div class="menu-box">
                    <div class="item">

                        <router-link to="/access/" class="text"><img src="/assets/img/icons/Person-icon.svg">会社概要
                        </router-link>
                    </div>
                    <div class="item">

                        <router-link to="/message/" class="text"><img src="/assets/img/icons/Message-icon.svg">代表メッセージ
                        </router-link>
                    </div>
                    <div class="item">

                        <router-link to="/office/" class="text"><img src="/assets/img/icons/Building-icon.svg">オフィス
                        </router-link>
                    </div>
                    <div class="item">

                        <router-link to="/member/" class="text"><img src="/assets/img/icons/Members-icon.svg">チーム
                        </router-link>
                    </div>
                    <div class="item">

                        <router-link to="/digitalasset/" class="text"><img
                                src="/assets/img/icons/Digital-Assets.svg">デジタル資産</router-link>
                    </div>
                </div>

            </section>
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
    .message--index {
        padding: 140px 10%;
        background-color: #fff;
    }

    .message--index .message_inner {
        transform: translateY(2%);
        transition: .6s;
    }

    .message--index .message_inner .message_box {
        position: relative;
    }

    .message--index .message_inner .message_box::after {
        content: "";
        background: url(/assets/img/ceo.jpg) no-repeat center;
        background-size: cover;
        width: 42%;
        height: 100%;
        max-height: 680px;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
    }

    .message--index .message_inner .message_box .box .text_area {
        width: 52%;
    }

    .message--index .message_inner .message_box .box .text_area .ttl span {
        font-size: 14px;
        font-family: DIN-Regular;
        font-weight: 500;
        color: #000;
    }

    .message--index .message_inner .message_box .box .text_area .ttl h3 {
        font-size: 28.8px;
        line-height: 1.9;
        font-weight: 600;
        font-family: NotoSansJP-Bold;
        margin-bottom: 25px;
    }

    .message--index .message_inner .message_box .box .text_area .lead {
        margin-bottom: 15px;
        font-size: 14px;
        font-weight: 500;
        line-height: 2.2;
        font-family: NotoSansJP-Regular;
        letter-spacing: 0.04em;
        color: #000;
    }

    .message--index .message_inner .message_box .box .text_area .more_txt {
        color: gray;
        font-size: 12px;
        font-family: "DIN";
        letter-spacing: 0.06em;
        text-transform: uppercase;
        position: relative;
        padding-right: 20px;
        font-weight: 500;
    }

    .message--index .message_inner .message_box .box .text_area .more_txt .underline {
        font-size: 12px;
        font-weight: 500;
        position: relative;
    }

    .message--index .message_inner .message_box .box .text_area .more_txt .underline::after {
        content: "";
        background: gray;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -4px;
        left: 0;
        transform: scale(0, 1);
        transition: transform 0.3s;
        transform-origin: right top;
    }

    .message--index .message_inner .message_box .box .text_area .more_txt:hover .underline::after {
        transform-origin: left top;
        transform: scale(1, 1);
    }

    .message--index .message_inner .message_box .box .text_area .lead.name {
        margin-top: 35px;
        margin-bottom: 0;
    }

    .message--index .message_inner .message_box .box .text_area .more_txt::after {
        width: 6px;
        transform: rotate(45deg) translateY(-3px);
    }

    .message--index .message_inner .message_box .box .text_area .more_txt:hover::after,
    .message--index .message_inner .message_box .box .text_area .more_txt:hover::before {
        right: -5%;
    }

    .message--index .message_inner .message_box .box .text_area .more_txt::after,
    .message--index .message_inner .message_box .box .text_area .more_txt::before {
        content: "";
        height: 1px;
        background-color: gray;
        position: absolute;
        right: 0;
        top: 50%;
        transition: 0.3s;
    }

    .message--index .message_inner .message_box .box .text_area .more_txt::before {
        width: 10px;
    }

    @media screen and (max-width: 767px) {
        .message--index {
            padding: 80px 5%;
        }

        .message--index .message_inner {
            padding-top: 0;
        }

        .message--index .message_inner .message_box::after {
            width: 100%;
            height: 400px;
            max-height: none;
            position: relative;
            right: auto;
            top: auto;
            transform: translateY(0);
            display: block;
            margin-top: 40px;
        }

        .message--index .message_inner .message_box .box .text_area {
            width: 100%;
        }

        .message--index .message_inner .message_box .box .text_area .ttl h3 {
            font-size: 20px;
            margin-top: 10px;
            margin-bottom: 30px;
        }

        .message--index .message_inner .message_box .box .text_area .more_txt {
            border-bottom: 1px solid #000;
            padding-right: 0;
            padding-bottom: 0px;
        }

        .message--index .message_inner .message_box .box .text_area .more_txt .underline {
            line-height: 2;
        }
    }
</style>