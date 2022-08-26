<template>
    <div>
        <Navbar />
        <div class="mv_textarea">
            <h2>
                <strong class="en entxt">Office</strong>
                <span class="jptxt">こちらのお知らせでは当社から皆様によりIT開発が好きになるようなニュースや当社からのリリースを発信する場所です。</span>
            </h2>
        </div>
        <main>
            <div class="lead_area">
                <div class="lead_inner">
                    <h3 class="lead_ttl fade_y on">
                        <h3 class="content-title">CONCEPT</h3>
                        目指したのは、<br>オトナも遊べる秘密基地
                    </h3>
                    <p class="lead_txt fade_y on">
                        すべり台がある。キッズスペースがある。<br class="sp">BARもある。<br
                            class="pc">卓球台やダーツ。カラオケまで完備されている。<br>こんなオフィス、非常識と思われるかもしれない。<br>だけど、こどもからオトナまで「訪れてみたくなる」場所が、<br
                            class="pc">社員やその家族にとって、オモシロイ場所になっていく。<br>幼い頃、時間を忘れて没頭することができた秘密基地のように。</p>
                </div>
            </div>
            <div class="slider-title">
                <div class="swiper-pagination office-swiper-pagination"></div>
                <div class="swiper-button-next office-button-next"></div>
                <div class="swiper-button-prev office-button-prev"></div>
                <div class="swiper mySwiper-main">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="https://tomorrowgate.co.jp/asset/img/company/office/office_photo04.jpg" alt="">
                            <p>エントランス / アプローチ</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://tomorrowgate.co.jp/asset/img/company/office/office_photo04.jpg" alt="">
                            <p>エントランス / アプローチ</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://tomorrowgate.co.jp/asset/img/company/office/office_photo04.jpg" alt="">
                            <p>エントランス / アプローチ</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://tomorrowgate.co.jp/asset/img/company/office/office_photo04.jpg" alt="">
                            <p>エントランス / アプローチ</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://tomorrowgate.co.jp/asset/img/company/office/office_photo04.jpg" alt="">
                            <p>エントランス / アプローチ</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://tomorrowgate.co.jp/asset/img/company/office/office_photo04.jpg" alt="">
                            <p>エントランス / アプローチ</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="https://tomorrowgate.co.jp/asset/img/company/office/office_photo04.jpg" alt="">
                            <p>エントランス / アプローチ</p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="access--index highlight_blk">
                <div class="logo">
                    <h1>IDENBRID</h1>
                </div>
                <div class="box flx aic jfc_sb">
                    <div class="map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.294228837741!2d135.496838015584!3d34.67252288044166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e71af1f6361f%3A0xf52c9f87c6acf471!2z44OI44Kl44Oi44Ot44O844Ky44O844OI5qCq5byP5Lya56S-!5e0!3m2!1sja!2sjp!4v1629469292178!5m2!1sja!2sjp"
                            style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div class="text_area">
                        <p class="place">【大阪本社】<br>〒542-0086<br>大阪市中央区西心斎橋1-6-32 <br class="sp">アニーズビル2階</p>
                        <p class="number">
                            TEL:<a href="tel:06-7167-3950" class="tel_link no_link">06-7167-3950</a><br>
                            FAX:06-4708-3636
                        </p>
                        <p class="station">
                            地下鉄御堂筋線「心斎橋駅」<br class="sp">7番出口より徒歩3分<br>
                            地下鉄四つ橋線「四ツ橋駅」<br class="sp">5番出口より徒歩4分
                        </p>
                        <a href="https://tomorrowgate.co.jp/company/office/" class="more_txt fade_y on"><span
                                class="underline">OFFICE</span></a>
                    </div>
                </div>
            </div>
        
           <section class="menu-list">
                <div class="menu-box">
                    <div class="item">

                        <router-link to="/access/" class="text"><img src="/assets/img/icons/Person-icon.svg">PROFILE</router-link>
                    </div>
                    <div class="item">

                        <router-link to="/message/" class="text"><img src="/assets/img/icons/Message-icon.svg">MESSAGE</router-link>
                        </div>
                    <div class="item">

                       <router-link to="/office/" class="text"><img src="/assets/img/icons/Building-icon.svg">OFFICE</router-link>
                    </div>
                    <div class="item">

                        <router-link to="/member/" class="text"><img src="/assets/img/icons/Members-icon.svg">MEMBER</router-link>
                    </div>
                    <div class="item">

                       <router-link to="/digitalasset/" class="text"><img src="/assets/img/icons/Digital-Assets.svg">DIGITAL ASSETS</router-link>
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
        mounted() {
            var swiper = new Swiper(".mySwiper-main", {
                slidesPerView: 2.5,
                spaceBetween: 50,
                centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },

                pagination: {
                    el: ".swiper-pagination",
                    type: "fraction",

                },
                navigation: {
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                },
                breakpoints: {
                    360: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    640: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 1.5,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2.3,
                        spaceBetween: 50,
                    },
                },
            });
        }
    };
</script>
<style>
.btns-group {
    padding-bottom: 120px;
    width: 100%;
    max-width: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
    .lead_area {
        padding: 120px 10% 250px;
    }

    .lead_area .lead_inner {
        display: flex;
        justify-content: flex-start;
    }

    .lead_area .lead_inner .lead_ttl {
        width: 50%;
        font-size: 26px;
        letter-spacing: 0.16px;
        line-height: 1.4;
        font-weight: bold;
        font-family: NotoSansJP-Bold;
    }

    .lead_area .lead_inner .lead_ttl span {
        font-size: 13px;
        letter-spacing: 0.08em;
        display: inline-block;
        font-weight: bold;
        margin-bottom: 10px;
        font-family: DIN-Bold;
    }

    .lead_area .lead_inner .lead_txt {
        width: 50%;
        color: #000;
        font-size: 16px;
        font-weight: 500;
        letter-spacing: 0.06em;
        line-height: 32.2px;
        font-family: NotoSansJP-Regular;
    }



    .mySwiper-main {
        margin: 20px auto;
        height: 100%;
    }

    .swiper-slide p {
        margin-top: 15px;
        display: block;
        color: black;
        font-size: 14px;
        text-align: left;
        margin-left: 30px;
        font-family: DIN-Bold;
        font-weight: bold;
    }

    .mySwiper-main .swiper-wrapper .swiper-slide {
        display: block;
    }

    .slider-title {
        position: relative;
        height: 500px;
        margin-bottom: 70px;
    }

    .office-button-prev:after {

        font-size: 15px;
        font-weight: 700;
    }

    .office-button-next:after {

        font-size: 15px;
        font-weight: 700;
    }

    .office-button-next,
    .swiper-rtl .office-button-prev {
        top: -15%;
        right: 29%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #929191;
        height: 70px;
        width: 70px;
        border-radius: 50%;
        color: #fff;
    }

    .office-button-prev,
    .swiper-rtl .office-button-next {
        left: auto;
        right: 34%;
        top: -15%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #868686;
        height: 70px;
        width: 70px;
        border-radius: 50%;
        color: #fff;
    }

    .office-swiper-pagination {
        left: 9%;
        width: 100%;
        top: -15%;
        font-size: 20px;
        font-weight: 600;
        font-family: DIN-Bold;
    }

    @media screen and (max-width: 896px) {
        .lead_area {
            padding: 80px 5%;
        }

        .lead_area .lead_inner {
            display: block;
            padding: 0;
        }

        .lead_area .lead_inner .lead_ttl {
            font-size: 18px;
            width: 100%;
        }

        .lead_area .lead_inner .lead_txt {
            margin-top: 30px;
            width: 100%;
            font-size: 14px;
        }

        .sp {
            display: block;
        }

        .lead_area .lead_inner .lead_ttl span {
            font-size: 14px;
        }

        .office-button-next,
        .swiper-rtl .office-button-prev {
            top: 90%;
            height: 50px;
            width: 50px;
            right: 40%;
        }

        .office-button-prev,
        .swiper-rtl .office-button-next {
            top: 90%;
            height: 50px;
            right: 30%;
            width: 50px;

        }

        .mySwiper-main img {
            height: 50%;
            object-fit: cover;
        }

        .office-swiper-pagination {
            top: 75%;
            left: 0%;
        }
    }
</style>