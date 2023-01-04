<template>
    <div>
        <Navbar />
        <div class="mv_textarea">
            <h2>
                <strong class="en entxt">OFFICE & ACCESS / オフィス&アクセス</strong>
                <span class="jptxt">パキスタンラホール市の本社をご紹介</span>
            </h2>
        </div>
        <main>
            <div class="lead_area">
                <div class="lead_inner">
                    <h3 class="lead_ttl fade_y on">
                        <h3 class="content-title">OFFICE ENVIRONMENT</h3>
                        大切なのは、<br>チームが働きたい環境構築
                    </h3>
                    <p class="lead_txt fade_y on">
                        1日の多くの時間を過ごすオフィス。<br
                            class="pc">コロナがあってからリモート環境で仕事することも増えましたが<br>当社では今でもオフィスの存在を大切にしています。<br>チームが１箇所に集まって、集中した時のパワーは凄い。<br
                            class="pc">この会社で仕事したいと思ってもらえるようなスペース作りが<br>私たちのクリエイティブを支える今後も目指していく方向性です。</p>
                </div>
            </div>
            <div class="slider-title">
                <div class="swiper-pagination office-swiper-pagination"></div>
                <div class="swiper-button-next office-button-next"></div>
                <div class="swiper-button-prev office-button-prev"></div>
                <div class="swiper mySwiper-main">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <img src="/assets/img/officeand-access.png" alt="Office access image">
                            <p>エントランス / アプローチ</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="/assets/img/officeand-access.png" alt="Office access image">
                            <p>エントランス / アプローチ</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="/assets/img/officeand-access.png" alt="Office access image">
                            <p>エントランス / アプローチ</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="/assets/img/officeand-access.png" alt="Office access image">
                            <p>エントランス / アプローチ</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="/assets/img/officeand-access.png" alt="Office access image">
                            <p>エントランス / アプローチ</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="/assets/img/officeand-access.png" alt="Office access image">
                            <p>エントランス / アプローチ</p>
                        </div>
                        <div class="swiper-slide">
                            <img src="/assets/img/officeand-access.png" alt="Office access image">
                            <p>エントランス / アプローチ</p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="access--index highlight_blk">
                <div class="logo">
                    <h1>ACCEESS to Us</h1>
                </div>
                <div class="box flx aic jfc_sb">
                    <div class="map">

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5116.628349312717!2d74.37810117146583!3d31.47108330229046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391907530d966bf3%3A0x99ab6b175fc81d7d!2zSURFTkJSSUQgSU5DLiAvIOOCouOCpOODh-ODs-ODluODquODg-ODieekvg!5e0!3m2!1sen!2s!4v1668775614632!5m2!1sen!2s"
                            style="border:0;" allowfullscreen="" loading="lazy"></iframe>
                    </div>
                    <div class="text_area">
                        <p class="place">パキスタン本社<br>〒54000<br>Basement 1st floor, 176 Y-Block, DHA Phase3, Lahore,
                            Pakistan</p>
                        <p class="number">
                            TEL : <a href="tel:+923064041221" class="tel_link no_link">+92306-404-1221</a><br>
                            MAIL : <a href="mailto:helloworld@idenbrid.com">helloworld@idenbrid.com</a>
                        </p>
                        <p class="station">
                            Lahore Airportよ<br class="sp">り車で15分<br>
                            Gulberg中心地よ<br class="sp">り車で20分
                        </p>
                        <a href="https://www.google.com/maps/search/176+Y-Block,+DHA+Phase3,+Lahore,+Pakistan/@31.4722224,74.3767664,21z"
                            class="more_txt fade_y on" target="_blank">
                            <span class="underline">Google Map</span></a>
                    </div>
                </div>
            </div>

            <section class="menu-list">
                <div class="menu-box">
                    <div class="item">

                        <router-link to="/company/" class="text"><img src="/assets/img/icons/Person-icon.svg" alt="img" />会社概要
                        </router-link>
                    </div>
                    <div class="item">

                        <router-link to="/message/" class="text"><img src="/assets/img/icons/Message-icon.svg" alt="img" />代表メッセージ
                        </router-link>
                    </div>
                    <div class="item">

                        <router-link to="/office/" class="text"><img src="/assets/img/icons/Building-icon.svg" alt="img" />オフィス＆アクセス
                        </router-link>
                    </div>
                    <div class="item">

                        <router-link to="/member/" class="text"><img src="/assets/img/icons/Members-icon.svg" alt="img" />メンバー
                        </router-link>
                    </div>
                    <div class="item">

                        <router-link to="/digitalasset/" class="text"><img
                                src="/assets/img/icons/Digital-Assets.svg" alt="img" />デジタルアセット</router-link>
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
                title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | オフィス・アクセス",
                meta: [{
                    vmid: "description",
                    name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
                    content: "IDENBRID/アイデンブリッドは日本及びパキスタンにてIT受託開発を行なっているグローバル企業です。ウェブシステムやiOS・Androidのモバイルアプリを初め、ワンストップにてシステム設計、要件定義、UIUXデザイン、ウェブ開発、アプリ開発、クラウドまで一社完結にて対応しています。オフショア開発のみでなく、日本国内でもIT開発を行なっており、スタートアップから東証プライム上場企業まで幅広いクライアントの開発を支えています。",
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
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
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
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 500;
        letter-spacing: 0.06em;
        line-height: 32.2px;
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
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
    }

    .office-button-next:after {

        font-size: 15px;
        font-family: 'Noto Sans JP', sans-serif;
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