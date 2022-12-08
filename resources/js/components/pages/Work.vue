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
                            <div class="hvrtxt en">
                                <span class="more_txt">
                                    <span class="underline">MORE</span>
                                </span>
                            </div>
                            <div class="scaleImg">
                                <img :src="'http://admin.idenbrid.jp/public/storage/work_images/'+work.image" alt="">
                                <img :src="'http://admin-idenbrid.idenbrid.com/public/storage/work_images/'+work.image" alt="">
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
            <!-- <section>
                <video src="/assets/img/workpage.mp4" width="100%" class="coming-img mt-2" autoplay muted loop
                    playsinline></video>
            </section>  -->
        <section class="section-portfolio my-5">
                <div class="container">
                    <div class="row">
                        <div v-for="work in works" :key="work.id" class="col-lg-4 col-md-6">
                            <router-link :to="'/work/detail/'+work.id">
                                <div class="single-services">
                                    <div class="services-image">
                                        <a class="">
                                            <img :src="'http://admin.idenbrid.jp/public/storage/work_images/'+work.image"
                                                alt="image">
                                        </a>
                                        <div class="icon">
                                            <a class="">
                                                
                                                <i class="flaticon-chair d-flex justify-content-center align-items-center"><img class="work-detail-icon " src="http://development.idenbrid.jp/assets/img/logo/idenbrid-fav-icon.png" alt=""></img></i>

                                            </a>
                                        </div>
                                    </div>
                                    <div class="services-content">
                                        <h3>
                                            <a class="">{{work.title}}</a>
                                        </h3>
                                        <p v-html="work.description" class="work-detail-prgh"></p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        
                    </div>
                </div>
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
                    content: "IDENBRID/アイデンブリッドは日本及びパキスタンにてIT受託開発を行なっているグローバル企業です。ウェブシステムやiOS・Androidのモバイルアプリを初め、ワンストップにてシステム設計、要件定義、UIUXデザイン、ウェブ開発、アプリ開発、クラウドまで一社完結にて対応しています。オフショア開発のみでなく、日本国内でもIT開発を行なっており、スタートアップから東証プライム上場企業まで幅広いクライアントの開発を支えています。",
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

.work-detail-icon{
    height: 30px !important;
    width: 30px !important;
}
.work-detail-prgh{
    
  width: 100%;
  line-height: 1.2em;
  height: 3.6em;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;

}
    .coming-img {
        height: 650px;
        object-fit: contain;
    }

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
        .coming-img{
            height: auto;
        }
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







    /* portfolio css start  */



    .single-services {
        margin-bottom: 30px;
        transition: .6s
    }

    .single-services .services-image {
        position: relative;
        overflow: hidden
    }

    .single-services .services-image img {
        border-radius: 10px 10px 0 0;
        transition: .6s;
        width: 100%;
        height: 250px;
        object-fit: cover;

    }

    .single-services .services-image .icon {
        position: absolute;
        bottom: 20px;
        right: 20px;
        transition: .6s
    }

    .single-services .services-image .icon a i {
        display: inline-block;
        height: 75px;
        width: 75px;
        line-height: 75px;
        background-color: #fff;
        box-shadow: 0 10px 30px rgba(0, 0, 0, .07);
        color: #06a3da;
        font-size: 45px;
        text-align: center;
        border-radius: 50px;
        transition: .6s
    }

    .single-services .services-content {
        background-color: #fff;
        box-shadow: 0 0 1.25rem rgba(108, 118, 134, .1);
        padding: 30px;
        border-bottom: 1px solid #06a3da;
        border-radius: 0 0 10px 10px;
        transition: .6s
    }

    .single-services .services-content h3 {
        font-size: 25px;
        margin-bottom: 12px;
        font-weight: 500
    }

    .single-services .services-content h3 a {
        color: #222
    }

    .single-services .services-content p {
        font-size: 15px;
        transition: .6s
    }

    .single-services:hover {
        transform: translateY(-10px)
    }

    .single-services:hover .services-image img {
        transform: rotate(2deg) scale(1.2)
    }

    .single-services:hover .services-image .icon i {
        background-color: #06a3da;
        color: #fff
    }

    .single-services:hover .services-content {
        background-color: #06a3da
    }

    .single-services:hover .services-content h3 a,
    .single-services:hover .services-content p {
        color: #fff
    }

    .single-services-box {
        margin-bottom: 30px;
        background-color: #fff;
        box-shadow: 0 15px 35px rgba(0, 0, 0, .1);
        padding: 30px;
        border-radius: 10px;
        transition: .6s
    }

    .single-services-box .icon {
        margin-bottom: 25px
    }

    .single-services-box .icon i {
        display: inline-block;
        height: 80px;
        width: 80px;
        line-height: 80px;
        font-size: 45px;
        background-color: #06a3da;
        color: #fff;
        text-align: center;
        border-radius: 15px
    }

    .single-services-box h3 {
        font-size: 25px;
        font-weight: 500;
        margin-bottom: 15px
    }

    .single-services-box h3 a {
        color: #222
    }

    .single-services-box h3 a:hover {
        color: #06a3da
    }

    .single-services-box p {
        font-size: 15px;
        margin-bottom: 20px
    }

    .single-services-box .services-btn {
        display: inline-block;
        background-color: transparent;
        border: 1px solid #06a3da;
        color: #06a3da;
        padding: 15px 35px;
        font-size: 15px;
        font-weight: 500;
        transition: .6s;
        border-radius: 5px
    }

    .single-services-box .services-btn:hover {
        background-color: #06a3da;
        color: #fff
    }

    .single-services-box:hover {
        transform: translateY(-10px)
    }

    .single-services-box:hover .icon i {
        -webkit-animation: bounce 1s;
        animation: bounce 1s
    }

    .single-services-item {
        margin-bottom: 30px;
        transition: .6s;
        background-color: #fff;
        box-shadow: 0 0 1.25rem rgba(108, 118, 134, .1);
        padding: 10px;
        padding-bottom: 0;
        border-radius: 10px
    }

    .single-services-item .services-image {
        position: relative;
        overflow: hidden
    }

    .single-services-item .services-image img {
        border-radius: 10px;
        transition: .6s
    }

    .single-services-item .services-image .icon {
        position: absolute;
        bottom: 20px;
        right: 20px;
        transition: .6s
    }

    .single-services-item .services-image .icon a i {
        display: inline-block;
        height: 75px;
        width: 75px;
        line-height: 75px;
        background-color: #fff;
        box-shadow: 0 10px 30px rgba(0, 0, 0, .07);
        color: #06a3da;
        font-size: 45px;
        text-align: center;
        border-radius: 50px;
        transition: .6s
    }

    .single-services-item .services-content {
        padding: 35px 20px
    }

    .single-services-item .services-content h3 {
        font-size: 25px;
        margin-bottom: 12px;
        font-weight: 500
    }

    .single-services-item .services-content h3 a {
        color: #222
    }

    .single-services-item .services-content p {
        font-size: 15px;
        margin-bottom: 20px
    }

    .single-services-item .services-content .default-btn {
        width: 100%;
        border-radius: 50px;
        text-align: center
    }

    .single-services-item:hover {
        transform: translateY(-10px)
    }

    .single-services-item:hover .services-image img {
        transform: rotate(2deg) scale(1.2)
    }

    .single-services-item:hover .services-image .icon i {
        background-color: #06a3da;
        color: #fff
    }

    .container {
        width: 100%;
        padding-right: var(--bs-gutter-x, .75rem);
        padding-left: var(--bs-gutter-x, .75rem);
        margin-right: auto;
        margin-left: auto
    }

    .single-services .services-image {
        position: relative;
        overflow: hidden
    }

    .single-services .services-image img {
        border-radius: 10px 10px 0 0;
        transition: .6s
    }

    .single-services .services-image .icon {
        position: absolute;
        bottom: 20px;
        right: 20px;
        transition: .6s
    }

    .single-services .services-image .icon a i {
        display: inline-block;
        height: 75px;
        width: 75px;
        line-height: 75px;
        background-color: #fff;
        box-shadow: 0 10px 30px rgba(0, 0, 0, .07);
        color: #06a3da;
        font-size: 45px;
        text-align: center;
        border-radius: 50px;
        transition: .6s
    }

    .single-services:hover .services-image img {
        transform: rotate(2deg) scale(1.2)
    }

    .single-services:hover .services-image .icon i {
        background-color: #06a3da;
        color: #fff
    }

    .single-services-item .services-image {
        position: relative;
        overflow: hidden
    }

    .single-services-item .services-image img {
        border-radius: 10px;
        transition: .6s
    }

    .single-services-item .services-image .icon {
        position: absolute;
        bottom: 20px;
        right: 20px;
        transition: .6s
    }

    .single-services-item .services-image .icon a i {
        display: inline-block;
        height: 75px;
        width: 75px;
        line-height: 75px;
        background-color: #fff;
        box-shadow: 0 10px 30px rgba(0, 0, 0, .07);
        color: #06a3da;
        font-size: 45px;
        text-align: center;
        border-radius: 50px;
        transition: .6s
    }

    .single-services-item:hover .services-image img {
        transform: rotate(2deg) scale(1.2)
    }

    .single-services-item:hover .services-image .icon i {
        background-color: #06a3da;
        color: #fff
    }

    .single-services .services-content {
        background-color: #fff;
        box-shadow: 0 0 1.25rem rgba(108, 118, 134, .1);
        padding: 30px;
        border-bottom: 1px solid #06a3da;
        border-radius: 0 0 10px 10px;
        transition: .6s
    }

    .single-services .services-content h3 {
        font-size: 25px;
        margin-bottom: 12px;
        font-weight: 500
    }

    .single-services .services-content h3 a {
        color: #222
    }

    .single-services .services-content p {
        font-size: 15px;
        transition: .6s
    }

    .single-services:hover .services-content {
        background-color: #06a3da
    }

    .single-services:hover .services-content h3 a,
    .single-services:hover .services-content p {
        color: #fff
    }

    .single-services-item .services-content {
        padding: 35px 20px
    }

    .single-services-item .services-content h3 {
        font-size: 25px;
        margin-bottom: 12px;
        font-weight: 500
    }

    .single-services-item .services-content h3 a {
        color: #222
    }

    .single-services-item .services-content p {
        font-size: 15px;
        margin-bottom: 20px
    }

    .single-services-item .services-content .default-btn {
        width: 100%;
        border-radius: 50px;
        text-align: center
    }

    .services-details-image img {
        border-radius: 30px;
    }

    .services-details-content {
        margin-top: 30px;
    }

    .detail-prgh {

        margin-bottom: 15px;
        line-height: 1.8;
        color: #6a6c72;
        font-weight: 400;
        font-family: Poppins, sans-serif;
        font-size: 16px;

    }

    .services-details-list {
        padding-left: 0;
        margin-bottom: 30px;
        margin-top: 30px;
    }

    .services-details-list li {
        list-style-type: none;
        position: relative;
        padding-left: 45px;
        margin-bottom: 30px;
    }

    .services-details-list li i {
        display: inline-block;
        position: absolute;
        top: -8px;
        left: 0;
        height: 35px;
        width: 35px;
        line-height: 38px;
        background-color: #06a3da;
        color: #fff;
        font-size: 16px;
        text-align: center;
        border-radius: 50px;
    }

    .single-gallery {
        position: relative;
        margin-bottom: 30px;
        transition: .6s;
    }

    .single-gallery .content,
    .single-gallery:before {
        width: 100%;
        left: 0;
        bottom: 0;
        position: absolute;
        transition: .6s;
    }

    .single-gallery:before {
        content: "";
        background: linear-gradient(180deg, transparent, #000);
        height: 95%;
        z-index: 1;
        border-radius: 10px;
    }

    .single-gallery img {
        border-radius: 10px;
    }

    .single-gallery .content {
        right: 0;
        padding: 30px;
        z-index: 5;
    }

    .single-gallery .content,
    .single-gallery:before {
        width: 100%;
        left: 0;
        bottom: 0;
        position: absolute;
        transition: .6s;
    }

    .single-gallery .content h3 {
        font-size: 25px;
        font-weight: 500;
        margin-bottom: 12px;
    }

    .single-gallery .content span {
        color: #fff;
        font-size: 15px;
    }

    .single-gallery .content .icon {
        margin-top: 15px;
    }

    .single-gallery:hover {
        transform: translateY(-10px);
    }

    .single-gallery:hover .content {
        bottom: 5px;
    }

    .single-gallery .content h3 a {
        color: #fff;
        text-decoration: none;
    }

    .single-gallery .content .icon a i {
        display: inline-block;
        height: 40px;
        width: 40px;
        line-height: 40px;
        background-color: #fff;
        color: #06a3da;
        text-align: center;
        font-size: 25px;
        border-radius: 50px;
        transition: .6s;
    }

    .single-gallery .content .icon a i:hover {
        background-color: #06a3da;
        color: #fff;
    }

    @media(min-width:576px) {

        .container {
            max-width: 540px
        }
    }

    @media only screen and (max-width:767px) {
        .single-services .services-content {
            padding: 30px 25px
        }

        .single-services .services-content h3 {
            font-size: 22px
        }

        .single-services .services-content p {
            font-size: 14px
        }

        .single-services .services-content {
            padding: 35px 25px
        }

        .single-services .services-content p {
            font-size: 14px
        }

        .single-services-item .services-content {
            padding: 35px 15px
        }

        .single-services-item .services-content {
            padding: 35px 15px
        }

        .single-services-item .services-content h3 {
            font-size: 22px
        }
    }

    @media(min-width:768px) {

        .container {
            max-width: 720px
        }
    }

    @media(min-width:992px) {

        .container {
            max-width: 960px
        }
    }

    @media(min-width:1200px) {

        .container {
            max-width: 1140px
        }
    }

    @media(min-width:1400px) {

        .container {
            max-width: 1320px
        }
    }

    @media only screen and (min-width:992px)and (max-width:1199px) {

        .single-services .services-content {
            padding: 35px 25px
        }

        .single-services .services-content p {
            font-size: 14px
        }



        .single-services-box {
            padding: 25px
        }



        .single-services-item .services-content {
            padding: 35px 15px
        }
    }

    /* portfolio css start  */
</style>