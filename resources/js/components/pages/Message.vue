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
                                    <h3>日本人が創業したパキスタンから<br class="pc">世界一必要とされるIT企業になる</h3>
                                </div>
                                <p class="lead">
                                    2020年1月私たち日本人の手によってIDENBRIDがパキスタンにて産声をあげました。
                                </p>
                                <p class="lead">
                                    それから今まで私たちはパキスタンから世界一必要とされるIT企業になるという目標に向けてひたすら走り続けています。
                                </p>
                                <p class="lead">
                                    毎日の私たちを突き動かすのはひとえに私たちを頼りにしてくれるクライアントそして共にお客様の「ユーザーペインをITで解決する」というビジョンを共有しているチーム、仲間の存在です。
                                </p>
                                <p class="lead">
                                    私たちは世界一必要とされるIT企業グループへという目標に辿り着くため、単純な売上だけでなくお客様ファーストが会社全体として実行されてこそ、必要とされるという目標が達成されると信じています。
                                </p>
                               <p  class="lead">そのためにOLPを導入し、リーダーの育成にも力を入れています。海外における日本人起業家の1人として、目標に向かって、足を止めずにただただ突き進んで参ります。</p>
                               <p class="lead">皆様のご支援、応援、何卒引き続きよろしくお願いします。</p> 
                               <p class="lead name">2022年10月<br>IDENBRID INC.<br>創業者兼CEO 中村 奏画</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section class="menu-list">
                <div class="menu-box">
                    <div class="item">

                        <router-link to="/company/" class="text"><img src="/assets/img/icons/Person-icon.svg">会社概要
                        </router-link>
                    </div>
                    <div class="item">

                        <router-link to="/message/" class="text"><img src="/assets/img/icons/Message-icon.svg">代表メッセージ
                        </router-link>
                    </div>
                    <div class="item">

                        <router-link to="/office/" class="text"><img src="/assets/img/icons/Building-icon.svg">オフィス＆アクセス
                        </router-link>
                    </div>
                    <div class="item">

                        <router-link to="/member/" class="text"><img src="/assets/img/icons/Members-icon.svg">メンバー
                        </router-link>
                    </div>
                    <div class="item">

                        <router-link to="/digitalasset/" class="text"><img
                                src="/assets/img/icons/Digital-Assets.svg">デジタルアセット</router-link>
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
                    content: "IDENBRID/アイデンブリッドは日本及びパキスタンにてIT受託開発を行なっているグローバル企業です。ウェブシステムやiOS・Androidのモバイルアプリを初め、ワンストップにてシステム設計、要件定義、UIUXデザイン、ウェブ開発、アプリ開発、クラウドまで一社完結にて対応しています。オフショア開発のみでなく、日本国内でもIT開発を行なっており、スタートアップから東証プライム上場企業まで幅広いクライアントの開発を支えています。",
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
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 600;
        margin-bottom: 25px;
    }

    .message--index .message_inner .message_box .box .text_area .lead {
        margin-bottom: 15px;
        font-family: 'Noto Sans JP', sans-serif;
        font-size: 14px;
        font-weight: 500;
        line-height: 2.2;
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
        font-family: 'Noto Sans JP', sans-serif;
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