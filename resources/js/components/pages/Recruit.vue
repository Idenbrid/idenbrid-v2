<template>
    <div>
        <Navbar />
        <main>

            <div class="mv_textarea-recruit">
                <h2>
                    <strong class="en entxt">BUSINESS / 事業紹介</strong>
                    <span class="jptxt">IDENBRIDがお届けしているIT開発・営業支援のサービス内容</span>
                </h2>
            </div>
            <div class="recruit--leadtxt">
                <h3>私たちのITサービスはユーザーペインの解消<br class="pc">つまりお客様の課題をITで解決することです</h3>
                <p>単純にUIUXデザイン、ウェブシステム、モバイルアプリ、クラウドインフラ開発をするのではなく、
                    <br class="pc">お客様の困っていることを解決してこそ、その先のユーザーに届くITサービスが実現できるのです。
                </p>
            </div>
            <div class="recruit--person highlight_blk">
                <div class="heading">
                    <span class="sub en fade_y on">SERVICES</span>
                    <h3 class="fade_y on">サービスのご紹介</h3>
                </div>
                <div class="recruit--person--list">

                    <div class="recruit--person--item hoverScale">
                        <router-link to="/studiodevelopmenthub/">
                            <div class="thumb">
                                <div class="hvrtxt en"><span class="more_txt"><span class="underline">MORE</span></span>
                                </div>
                                <div class="scaleImg"><img
                                        src="https://tomorrowgate.co.jp/asset/img/recruit/design_photo.jpg" alt="">
                                </div>
                            </div>
                            <h4>
                                <span class="department fade_y on">SDH：スタジオ開発ハブ</span>
                                <strong class="phrase fade_y on">受託開発またはラボ型開発サービスになります。<br
                                        class="pc">設計・デザイン、ウェブ、スマホまでワンストップにて当社でお受けしております。</strong>
                            </h4>
                            <p class="fade_y on">
                                STUDIO DEVELOPMENT
                                HUB通称SDHでは、ITサービスを開発されたい企業様や自社にはITに詳しい人材やエンジニアがいないので外注したいお客様に向けた受託開発サービスです。
                            </p>
                        </router-link>
                    </div>
                    <div class="recruit--person--item hoverScale">
                        <router-link to="/engineerstyle/">
                            <div class="thumb">
                                <div class="hvrtxt en"><span class="more_txt"><span class="underline">MORE</span></span>
                                </div>
                                <div class="scaleImg"><img
                                        src="https://tomorrowgate.co.jp/asset/img/recruit/design_photo.jpg" alt="">
                                </div>
                            </div>
                            <h4>
                                <span class="department fade_y on">SES：エンジニア採用営業支援</span>
                                <strong
                                    class="phrase fade_y on">常駐やリモートで業務委託できる日本人エンジニアなどのリソースベースのサービスになります。<br>協業ご希望のBP様も常に募集しております。</strong>
                            </h4>
                            <p class="fade_y on">
                                SESサービスでは当社は社内外の優秀なエンジニアやデザイナー人材を必要とされている会社様に対して人材の発掘、ご紹介、人材との面談設定、そして採用までのオンボーディング過程を支援いたします。
                            </p>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="recruit_fix visibility">
                <ul class="entryarea recruit--contactarea--bnr">

                    <li>
                        <router-link to="/studiodevelopmenthub" class="studio-dev-hieght" >STUDIO DEVELOPMENT HUB : SDH<br><span
                                class="label pc ">スタジオ開発ハブ（受託開発）</span></router-link>
                    </li>
                    <li>
                        <router-link to="/engineerstyle/" class="studio-dev-hieght" >SES<br><span
                                class="label pc ">エンジニア採用支援（常駐・フルリモート業務委託）</span><span class="label sp">気軽にメール登録</span>
                        </router-link>
                    </li>
                </ul>
            </div>
            <div class="branding--contact">
                <h3 class="fade_y on">ブランディングに関するご質問があれば<br class="pc">まずはお気軽にご相談ください</h3>
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
        metaInfo() {
            return {
                title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | 事業紹介",
                meta: [{
                    vmid: "description",
                    name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
                    content: "アイデンブリッドではお知らせやブログを定期的に更新しており、皆様が日々抱くサイト構築やアプリ開発の疑問やサイトをローンチした後の運用に関しての疑問に答えるブログ記事を公開しています。",
                }, ],
            };
        },

    };
</script>

<style>
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
        font-family: DIN-Bold;
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
        font-family: DIN-Bold;
        font-size: 14px;
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
    }

    .recruit_fix {
        position: sticky;
        left: 0;
        right: 0;
        bottom: -50%;
        /* left: 50%; */
        opacity: 0;
        /* transform: translateX(-50%); */
        z-index: 20;
        padding: 10px 0;
        width: 80%;
        transition: 0.4s;
    }

    .recruit_fix.visibility {
        bottom: 12px;
        opacity: 1;
    }

    .recruit_fix {
        margin: auto;
        z-index: 20;
        width: 82%;
    }

    .recruit_fix ul {
        justify-content: space-between;
    }

    .recruit_fix ul li {
        margin: auto;
        width: 40%;
    }

    .recruit_fix ul li a {
        width: 100%;
        padding: 16px 0;
        margin-top: 0;
        font-size: 1.6rem;
        line-height: 1.7;
    }

    .recruit--leadtxt h3 {
        font-size: 38px;
    }
    .recruit--leadtxt {
        /* padding: 40px 10% 100px; */
        padding: 130px 10% 170px;
        color: #dadada;
        position: relative;
        z-index: 1;
        margin-top: 0px;
        background-color: #000;
        background: url('/assets/img/all-member.png') no-repeat center;
        background-blend-mode: overlay;
        background-color: rgba(0, 0, 0, 0.5);
    }
@media screen and (max-width:1160px) and (min-width: 768px){
    .recruit--leadtxt {
padding: 80px 10% 50px;
}
}
    @media screen and (min-width: 897px) {


        .recruit--contactarea--bnr.entryarea li a {
            padding: 25px 0;
            margin-top: 20px;
            font-size: 16px;
        }

        .recruit--contactarea--bnr.entryarea li a:hover {
            background-color: #fff;
            color: #000;
        }
    }

    .recruit .recruit_fix ul li a .label {
        font-size: 12px;
        font-weight: 500;
    }

    .recruit--contactarea--bnr.entryarea li .label {
        font-size: 12px;
        font-family: NotoSansJP-Medium;
        letter-spacing: 0.05em;
        text-align: center;
    }

    .recruit--contactarea--bnr.entryarea li a {
        position: relative;
        display: block;
        border: 1px solid #2b2b2b;
        background-color: #000;
        letter-spacing: 0.12em;
        text-align: center;
        color: #dadada;
        font-size: 16px;
        transition: 0.6s ease;
        font-weight: bold;
        font-family: NotoSansJP-Bold;
    }

    @media screen and (min-width: 897px) {
        .recruit--contactarea--bnr {
            display: flex;
            justify-content: center;
        }
    }

    .recruit_fix ul {
        justify-content: space-between;
    }

    .recruit-fix {
        bottom: 12px;
        opacity: 1;
    }

    .mv_textarea-recruit {
        /* color: #dadada; */
        background-color: #000;

    }

    @media screen and (max-width: 896px) {


        .recruit_fix ul {
            display: flex;
            padding: 0;
        }

        .recruit_fix ul li a {
            font-size: 14px;
            padding: 13px 0;
        }

        .recruit_fix ul li a .label {
            font-size: 10px;
        }

        .recruit_fix {
            width: 100%;
        }
    }

    .mv_textarea-recruit .entxt {
        display: block;
        font-size: 40px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        transform: translateY(15%);
        transition: 0.6s;
        opacity: 1;
        color: #fff;
        font-weight: bold;
        text-align: left;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 896px) {
        .mv_textarea-recruit {
            padding: 30px 5% 0px;
            font-size: 2.8rem;
        }
    }

    .mv_textarea-recruit .jptxt {
        transform: translateY(15%);
        transition: 0.6s;
        opacity: 1;
        font-size: 13px;
        letter-spacing: 0.08em;
        color: #fff;
    }


    .sp {
        display: none;
    }

    @media screen and (max-width: 896px) {
        .sp {
            display: block;
        }
    }



  

    /* .recruit--leadtxt::after {
        content: "";
        background: url('/assets/img/all_member.jpg') no-repeat center;
        background-size: 100%;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0.3;
        z-index: -1;
    } */

    @media screen and (max-width: 896px) {
        .recruit--leadtxt::after {
            background: url('/assets/img/all_member.jpg') no-repeat center;
            background-size: 300%;
        }
    }

    @media screen and (max-width: 896px) {
        .recruit--leadtxt {
            padding: 30px 5% 60px;
        }
    }

    .recruit--leadtxt h3 {
        line-height: 1.63;
        transform: translateY(10%);
        transition: 0.6s;
        opacity: 1;
        color: #dadada;
        font-weight: bold;
        font-family: NotoSansJP-Bold;
    }

    @media screen and (min-width: 897px) {
        .recruit--leadtxt h3 {
            font-size: 38px;
            letter-spacing: 0.2em;
        }
    }

    @media screen and (max-width: 896px) {
        .recruit--leadtxt h3 {
            font-size: 20px;
            letter-spacing: 0.12em;
        }
    }

    .recruit--leadtxt p {
        transform: translateY(10%);
        transition: 0.9s;
        opacity: 1;
        margin-top: 30px;
        letter-spacing: 0.12em;
        line-height: 2;
        font-size: 16px;
        font-family: NotoSansJP-Regular;
        font-weight: 400;
        color: #dadada;
    }

    @media screen and (max-width: 896px) {
        .recruit--leadtxt p {
            font-size: 14px;
        }
    }

    @media screen and (max-width: 500px) {
        .recruit--contactarea--bnr.entryarea li a {
            font-size: 10px;
        }

        .recruit--contactarea--bnr.entryarea li .label {
            font-size: 8px;
        }

        .recruit_fix.visibility {
            bottom: -10px;
        }

        .recruit_fix ul li {
            width: 49%;
            margin: 0px auto 0px 0px;
        }


        .recruit--leadtxt {
            margin-top: 0px;
        }
    }

    .recruit.loaded .recruit--leadtxt h3 {
        transform: translateY(0);
        opacity: 1;
    }

    .recruit.loaded .recruit--leadtxt p {
        transform: translateY(0);
        opacity: 1;
    }

    .recruit.loaded .recruit--leadtxt .photo {
        transform: translateY(0);
        opacity: 1;
    }

    @media screen and (max-width: 896px) {
        .recruit .pararel {
            bottom: 90px;
        }
    }

    .recruit .mv_textarea-recruit {
        position: relative;
        z-index: 2;
    }

    .recruit .recruit_fix {
        position: fixed;
        bottom: -50px;
        left: 50%;
        opacity: 0;
        transform: translateX(-50%);
        z-index: 20;
        padding: 10px 2%;
        width: 60%;
        transition: 0.4s;
    }

    @media screen and (max-width: 896px) {
        .recruit .recruit_fix {
            left: 0;
            width: 100%;
            transform: translateX(0);
        }
    }

    .recruit .recruit_fix.visibility {
        bottom: 12px;
        opacity: 1;
    }

    @media screen and (max-width: 896px) {
        .recruit .recruit_fix.visibility {
            bottom: 8px;
        }
    }

    .recruit .recruit_fix ul {
        justify-content: space-between;
    }

    @media screen and (max-width: 896px) {
        .recruit .recruit_fix ul {
            display: flex;
            padding: 0;
        }
    }

    .recruit .recruit_fix ul li {
        margin: 0;
        width: 49%;
    }

    .recruit .recruit_fix ul li a {
        width: 100%;
        padding: 16px 0;
        margin-top: 0;
        font-size: 1.6rem;
        line-height: 1.7;
    }

    @media screen and (max-width: 896px) {
        .recruit .recruit_fix ul li a {
            font-size: 1.4rem;
            padding: 13px 0;
        }
    }

    .recruit .recruit_fix ul li a::before,
    .recruit .recruit_fix ul li a::after {
        content: none;
    }

    .recruit .recruit_fix ul li a .label {
        font-size: 1.2rem;
        font-weight: 500;
    }

    @media screen and (max-width: 896px) {
        .recruit .recruit_fix ul li a .label {
            font-size: 1rem;
        }
    }


    .recruit--person {
        background-color: #fff;
        position: relative;
    }

    @media screen and (min-width: 897px) {
        .recruit_fix.visibility {
            margin-bottom: 80px;
        }

        .recruit--person {
            padding: 180px 10% 100px;
        }

        .mv_textarea-recruit {
            padding: 40px 10% 40px;
        }
    }

    @media screen and (max-width: 896px) {
        .recruit--person {
            padding: 40px 5%;
        }
    }

    .recruit--person .heading .sub {

        font-size: 16px;
        letter-spacing: 0.08em;
        line-height: 16px;
        font-family: "Noto Sans JP", sans-serif;
        color: #000;
        font-weight: 400;
    }

    .recruit--person .heading h3 {
        font-size: 20px;
        margin-top: 23px;
        letter-spacing: 0.08em;
        line-height: 20px;
        font-family: "Noto Sans JP", sans-serif;
        color: #000;
        font-weight: 700;
    }

    .recruit--person--list {
        margin-top: 80px;
    }

    @media screen and (min-width: 897px) {
        .recruit--person--list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
        }
    }

    @media screen and (max-width: 896px) {
        .recruit--person--list {
            margin-top: 0;
        }
    }

    @media screen and (min-width: 897px) {
        .recruit--person--item {
            width: 48.5%;
        }
    }

    @media screen and (max-width: 896px) {
        .recruit--person--item {
            margin-top: 40px;
        }
    }

    @media screen and (min-width: 897px) {


        .recruit--person--item:nth-child(4) {
            margin-top: 140px;
        }
    }

    @media screen and (min-width: 897px) {
        .recruit--person--item h4 {
            margin-top: 40px;
        }
    }

    @media screen and (max-width: 896px) {
        .recruit--person--item h4 {
            margin-top: 24px;
        }
    }

    .recruit--person--item h4 .department {
        display: block;
        font-size: 16px;
        font-weight: 700;
        letter-spacing: 0.1em;
        margin-bottom: 0px;
        font-family: "Noto Sans JP", sans-serif;
        color: #000;
        line-height: 16px;
    }

    @media screen and (max-width: 896px) {
        .recruit--person--item h4 .department {
            font-size: 14px;
        }
    }

    .recruit--person--item h4 .phrase {
        display: block;
        margin-top: 15px;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.1em;
        font-family: "Noto Sans JP", sans-serif;
        color: #000;
        background-color: #dadada;
        padding: 15px 5px;
        min-height: 105px;
    }

    @media screen and (max-width: 896px) {
        .recruit--person--item h4 .phrase {
            font-size: 20px;
        }
    }

    .recruit--person--item p {
        margin-top: 20px;
        font-size: 14px;
        line-height: 2;
        letter-spacing: 0.1em;
        font-family: "Noto Sans JP", sans-serif;
        color: #000;
    }
    @media only screen and (max-width: 1024px) {
        .studio-dev-hieght{
            height: 100px;
        }
        }


    @media screen and (max-width: 425px) {
        .mv_textarea-recruit .jptxt {
            font-size: 12px;
        }
    }
</style>