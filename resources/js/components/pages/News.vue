<template>
    <div>
        <Navbar />
        <main>

            <div class="mv_textarea">
                <h2>
                    <strong class="en entxt">NEWS / お知らせ</strong>
                    <span class="jptxt">アイデンブリッドからのお知らせやプレスリリースを配信します。</span>
                </h2>
            </div>
            <section class="news mycontents-wide">

                <div class="topic--content highlight_blk">
                    <div class="topic--content--mainarea">
                        <div v-for="detail in news" :key="detail.id">
                            <router-link :to="'/news/detail/'+detail.id+'/'" class="topic--content--item">
                                <div class="img_box">
                                    <img src="https://tomorrowgate.co.jp/asset/img/common/default.jpg" alt="">
                                </div>
                                <div class="text_area">
                                    <div class="topicinfo">
                                        <time class="time en">{{detail.date}}</time>
                                        <div class="new new-tag">
                                            <p class="text new mt-0">NEWS</p>
                                        </div>
                                    </div>
                                    <h3 class="hvrunder">{{detail.title}}</h3>
                                </div>
                            </router-link>
                        </div>


                        <div class="wp-pagenavi" role="navigation">
                            <span aria-current="page" class="current">1</span><a class="page larger" title="ページ 2"
                                href="https://tomorrowgate.co.jp/topic/page/2/">2</a><a class="page larger"
                                title="ページ 3" href="https://tomorrowgate.co.jp/topic/page/3/">3</a><a
                                class="page larger" title="ページ 4"
                                href="https://tomorrowgate.co.jp/topic/page/4/">4</a><a class="page larger"
                                title="ページ 5" href="https://tomorrowgate.co.jp/topic/page/5/">5</a><a
                                class="nextpostslink" rel="next" aria-label="Next Page"
                                href="https://tomorrowgate.co.jp/topic/page/2/"><i class='fas fa-angle-right'></i></a>
                        </div>
                    </div>

                    <ul class="topic--content--sidearea">
                        <li><a href="https://tomorrowgate.co.jp/topic/" class="en categoryitem current">全て</a></li>
                        <li><a href="https://tomorrowgate.co.jp/topic/category/news/" class="en categoryitem">ニュース</a>
                        </li>
                        <li><a href="https://tomorrowgate.co.jp/topic/category/media/" class="en categoryitem">メディア</a>
                        </li>
                        <li><a href="https://tomorrowgate.co.jp/topic/category/event/" class="en categoryitem">イベント</a>
                        </li>
                    </ul>
                </div>
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
        metaInfo() {
            return {
                title: "お知らせ・ブログ | システム開発はアイデンブリッド社 | IDENBRID INC.",
                meta: [{
                    vmid: "description",
                    name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
                    content: "アイデンブリッドではお知らせやブログを定期的に更新しており、皆様が日々抱くサイト構築やアプリ開発の疑問やサイトをローンチした後の運用に関しての疑問に答えるブログ記事を公開しています。",
                }, ],
            };
        },
        data() {
            return {
                news: []
            }
        },
        mounted() {
            axios.get('/api/news').then((res) => {
                this.news = res.data.news;
            }).catch((err) => {});


        }
    };
</script>
<style>
    /*blog-brns*/
    .news-contents__list {
        position: relative;
        background: #FFFFFF;
        box-shadow: 0px 4px 10px rgb(0 0 0 / 15%);
        border-radius: 10px;
        transition: 1s;
    }

    .news-subcontents__text {
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        width: calc((100% - 415px) / 1);
        text-align: center;
        margin: auto;
    }

    .news__btns {
        margin-bottom: 60px;
        position: relative;
        display: flex;
    }

    .news__btns__list {
        display: inline-block;
        margin-right: 60px;
    }

    .news__btns__list_hr {
        position: absolute;
        width: 0.7px;
        height: 50px;
        background-color: var(--textcolor);
        left: 156px;
        bottom: 0;
    }

    .news__btns__list__label {
        margin-bottom: 3px;
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
        letter-spacing: 0.05em;
        color: var(--textcolor);
    }

    .news__btns__list_select {
        display: inline-block;
        width: 124px;
        height: 24px;
        background: #FFFFFF;
        border: 0.5px solid #727171;
        box-sizing: border-box;
        border-radius: 2px;
        font-weight: 500;
        font-size: 13px;
        line-height: 20px;
    }

    .select-container {
        overflow: hidden;
        position: relative;
    }

    .select-container::before {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
        content: "▼";
        font-size: 6px;
        color: var(--textcolor);
    }

    /*blog-contents*/

    .news-contents__list__tags {
        width: 74px;
        top: 20px;
        left: -22px;
    }

    .news-contents {
        display: flex;
        margin-bottom: 40px;
        flex-wrap: wrap;
    }

    .news-contents__list {
        width: calc((100% - 65px * 2) / 3);
        margin-right: 65px;
        margin-bottom: 60px;
    }

    .news-contents .news-contents__list:nth-child(3n) {
        margin-right: 0;
    }

    .news-contents__list__tags {
        transform: rotate(90deg);
        position: absolute;
        width: 78px;
        height: 34px;
        top: 23px;
        left: -25px;
        text-align: right;
    }

    .news-contents__list__tags span {
        padding-left: 5px;
        display: inline-block;
        position: absolute;
        top: 10px;
        right: 0;
        font-weight: bold;
        font-size: 14px;
        line-height: 130%;
        letter-spacing: 0.1em;
        background-color: #FFFFFF;
    }

    .news-contents__list__tags::before {
        position: absolute;
        left: 0;
        top: 18px;
        content: "";
        display: inline-block;
        height: 2px;
        width: 100%;
        background-color: var(--textcolor);
    }

    .news-contents__list__title {
        margin: 10px 20px 21px 36px;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
    }

    .news-contents__list__date {
        margin-bottom: 20px;
        margin-right: 20px;
        display: block;
        text-align: right;
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
    }

    @media (max-width: 767px) {
        .news-subcontents__text {
            width: 100%;
        }

        .news {
            margin-bottom: 60px;
        }

        .news-contents {
            margin-bottom: 20px;
            justify-content: space-between;
        }

        .news-contents__list {
            width: calc((100% - 35px) / 2);
            margin-right: 0;
            margin-bottom: 30px;
        }

        .news-contents__list__tags {
            width: 74px;
            top: 20px;
            left: -22px;
        }
    }

    @media (max-width: 500px) {
        .news-contents {
            display: block;
            margin-bottom: 50px;
        }

        .news-contents__list {
            width: 100%;
            margin-bottom: 30px;
        }
    }


    .wp-pagenavi a,
    .wp-pagenavi span {
        text-decoration: none;
        border: 1px solid #BFBFBF;
        padding: 3px 5px;
        margin: 2px;
    }

    .wp-pagenavi {
        display: flex;
        justify-content: center
    }

    .wp-pagenavi span,
    .wp-pagenavi a {
        border: 1px solid #bfbfbf7a;
        color: #000;
        font-size: 16px;
        height: 50px;
        line-height: 46px;
        text-align: center;
        transition: .4s;
        width: 50px;
        background: #FFFFFF;
        box-shadow: 0px 10px 20px rgb(188 204 227 / 21%);
        border-radius: 5px;
    }


    .wp-pagenavi span:hover,
    .wp-pagenavi a:hover {
        border-color: #12355D;
        background-color: #12355D;
        color: #dadada
    }

    .wp-pagenavi span:hover::after,
    .wp-pagenavi a:hover::after {
        filter: invert(1)
    }

    .wp-pagenavi .nextpostslink,
    .wp-pagenavi .previouspostslink,
    .wp-pagenavi .first,
    .wp-pagenavi .last {
        overflow: hidden;
        position: relative
    }

    .wp-pagenavi .nextpostslink::after,
    .wp-pagenavi .previouspostslink::after,
    .wp-pagenavi .first::after,
    .wp-pagenavi .last::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.4s
    }

    .wp-pagenavi .nextpostslink::after {
        background: url(/) no-repeat center;
        background-size: 100%;
        width: 23px;
        height: 23px
    }

    .wp-pagenavi .previouspostslink::after {
        background: url(/) no-repeat center;
        background-size: 100%;
        width: 23px;
        height: 23px
    }

    .wp-pagenavi .first::after {
        background: url(/) no-repeat center;
        background-size: 100%;
        width: 12px;
        height: 12px
    }



    .wp-pagenavi .current {
        border-color: #12355D;
        background-color: #12355D;
        color: #dadada
    }

    .img_box img {
        max-width: 100%;
        height: auto;
        vertical-align: bottom;
    }

    .topic.loaded .topic--content--item {
        transform: translateY(0);
        opacity: 1
    }

    .topic.loaded .topic--content--sidearea li {
        transform: translateY(0);
        opacity: 1
    }

    .topic.loaded .topic--header .info {
        transform: translateY(0);
        opacity: 1
    }

    .topic.loaded .topic--header .title {
        transform: translateY(0);
        opacity: 1
    }

    .topic.loaded .topic--article {
        transform: translateY(0);
        opacity: 1
    }

    .topic--content {
        display: flex;
        background-color: #fff
    }

    .topic--content--mainarea {
        width: 100%
    }

    @media screen and (min-width: 897px) {
        .topic--content {
            flex-direction: row-reverse;
            justify-content: flex-end;
            padding: 60px 10% 100px;
        }
    }

    @media screen and (max-width: 896px) {
        .topic--content {
            flex-direction: column-reverse;
            padding: 80px 5%
        }
    }

    .topic--content--item {
        display: flex;
        align-items: center;
        transition: .6s;
        opacity: 1
    }

    @media screen and (min-width: 897px) {
        .topic--content--item {
            margin-bottom: 60px
        }

        .topic--content--item:hover .text_area h3 {
            background-position: left bottom;
            background-size: 100% 1px
        }
    }

    @media screen and (max-width: 896px) {
        .topic--content--item {
            margin-bottom: 40px
        }
    }

    .topic--content--item .img_box {
        width: 160px;
        margin-right: 25px
    }

    .topic--content--item .text_area {
        width: calc(100% - 160px)
    }

    .topic--content--item .text_area .topicinfo {
        margin-bottom: 10px;
        display: flex;
        align-items: center;
    }

    .topic--content--item .text_area .new-tag {
        background: rgb(224, 224, 224);
        padding: 4px 8px;
        font-size: 12px;

    }

    @media screen and (max-width: 896px) {
        .topic--content--item .text_area .topicinfo {
            margin-bottom: 5px
        }
    }

    .topic--content--item .text_area .topicinfo .time,
    .topic--content--item .text_area .topicinfo .cat {
        font-size: 11px;
        color: #929191
    }

    .topic--content--item .text_area .topicinfo .time {
        font-weight: 700;
        margin-right: 10px;

    }

    .topic--content--item .text_area .topicinfo .cat {
        display: inline-block;
        margin-left: 10px
    }

    .topic--content--item .text_area h3 {
        display: inline;
        background: url(/assets/img/line.jpg) no-repeat left bottom;
        transition: background-size 0.4s ease;
        background-position: right bottom;
        background-size: 0 1px;
        will-change: background-size;
        line-height: 1.8;
        color: #000
    }

    @media screen and (min-width: 897px) {
        .topic--content--item .text_area h3 {
            font-size: 18px;
            font-weight: 700;
        }
    }

    @media screen and (max-width: 896px) {
        .topic--content--item .text_area h3 {
            font-size: 1.4rem
        }
    }

    @media screen and (min-width: 897px) {
        .topic--content--sidearea {
            margin-right: 120px
        }
    }

    @media screen and (max-width: 896px) {
        .topic--content--sidearea {
            display: flex;
            margin: 0 0 60px
        }
    }

    .topic--content--sidearea li {
        transform: translateY(15%);
        transition: .6s;
        opacity: 1
    }

    @media screen and (min-width: 897px) {
        .topic--content--sidearea li {
            margin-bottom: 32px
        }
    }

    @media screen and (max-width: 896px) {
        .topic--content--sidearea li {
            margin-right: 20px
        }
    }

    .topic--content--sidearea .categoryitem {
        position: relative;
        color: #b7b7b7;
        font-size: 14px;
        letter-spacing: .05em;
        text-transform: uppercase
    }

    .topic--content--sidearea .categoryitem::after {
        content: "";
        background: #b7b7b7;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -4px;
        left: 0;
        transform: scale(0, 1);
        transition: transform 0.3s;
        transform-origin: right top
    }

    @media screen and (min-width: 897px) {
        .topic--content--sidearea .categoryitem:hover::after {
            transform-origin: left top;
            transform: scale(1, 1)
        }
    }

    .topic--content--sidearea .categoryitem.current {
        color: #000
    }

    .topic--content--sidearea .categoryitem.current::after {
        background: #000;
        transform: scale(1, 1)
    }

    @media screen and (min-width: 897px) {
        .topic--content--sidearea .categoryitem:hover {
            color: #000
        }

        .topic--content--sidearea .categoryitem:hover::after {
            background: #000
        }
    }

    .topic .topicarea {
        background-color: #fff
    }

    @media screen and (min-width: 897px) {
        .topic .topicarea {
            padding: 60px 15% 140px
        }
    }

    @media screen and (max-width: 896px) {
        .topic .topicarea {
            padding: 40px 5% 80px
        }
    }

    .topic--header .info {
        display: flex;
        align-items: center;
        transform: translateY(15%);
        transition: .6s;
        opacity: 1
    }

    .topic--header .info .time {
        font-size: 1.3rem;
        color: #929191
    }

    .topic--header .info .cat {
        margin-left: 10px;
        font-size: 1.3rem;
        color: #929191
    }

    .topic--header .title {
        transform: translateY(15%);
        transition: .8s;
        opacity: 1;
        margin-top: 30px;
        font-weight: 700;
        line-height: 1.3;
        letter-spacing: 0.08em
    }

    @media screen and (min-width: 897px) {
        .topic--header .title {
            font-size: 3.2rem
        }
    }

    @media screen and (max-width: 896px) {
        .topic--header .title {
            font-size: 2rem
        }
    }

    .topic--article {
        transform: translateY(1%);
        transition: 1s;
        opacity: 1;
        margin-top: 40px
    }

    .topic--article .photo {
        text-align: center
    }

    .topic--article h2 {
        margin-top: 60px;
        margin-bottom: 50px
    }

    @media screen and (min-width: 897px) {
        .topic--article h2 {
            font-size: 2rem
        }
    }

    @media screen and (max-width: 896px) {
        .topic--article h2 {
            font-size: 1.8rem
        }
    }

    .topic--article h2 {
        margin-top: 60px;
        margin-bottom: 50px;
        color: #929191
    }

    @media screen and (min-width: 897px) {
        .topic--article h2 {
            font-size: 1.8rem
        }
    }

    @media screen and (max-width: 896px) {
        .topic--article h2 {
            font-size: 1.6rem
        }
    }

    .topic--article p {
        margin-top: 30px;
        font-size: 1.4rem;
        line-height: 2
    }

    .topic--article a {
        font-size: 1.4rem;
        text-decoration: underline
    }

    .topic--article .wp-block-image {
        margin-top: 80px
    }

    @media screen and (min-width: 897px) {
        .topic--footer {
            margin-top: 140px
        }
    }

    @media screen and (max-width: 896px) {
        .topic--footer {
            margin-top: 60px
        }
    }

    .topic--footer ul {
        display: flex;
        justify-content: space-between;
        align-items: center
    }

    @media screen and (min-width: 897px) {
        .topic--footer .arrowbtn {
            width: 50px;
            height: 50px
        }
    }

    @media screen and (max-width: 896px) {
        .topic--footer .arrowbtn {
            width: 40px;
            height: 40px
        }
    }

    .topic--footer .arrowbtn a {
        position: relative;
        display: block;
        width: 100%;
        height: 100%;
        background-color: #000;
        border: 1px solid #000;
        transition: 0.6s ease
    }

    @media screen and (min-width: 897px) {
        .topic--footer .arrowbtn a:hover {
            background-color: #fff
        }

        .topic--footer .arrowbtn a:hover:before,
        .topic--footer .arrowbtn a:hover:after {
            background: #000
        }
    }

    .topic--footer .arrowbtn a:before,
    .topic--footer .arrowbtn a:after {
        transition: 0.6s ease;
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 10px;
        height: 1px;
        background-color: #fff
    }

    .topic--footer .prev a:before {
        transform: translate(-50%, -50%) rotate(45deg);
        margin-top: 4px
    }

    .topic--footer .prev a:after {
        transform: translate(-50%, -50%) rotate(-45deg);
        margin-top: -3px
    }

    .topic--footer .next a:before {
        transform: translate(-50%, -50%) rotate(45deg);
        margin-top: -4px
    }

    .topic--footer .next a:after {
        transform: translate(-50%, -50%) rotate(-45deg);
        margin-top: 3px
    }

    .topic--footer .listback {
        position: relative;
        color: #000;
        font-size: 1.8rem;
        letter-spacing: .05em;
        text-transform: uppercase;
        position: relative
    }

    .topic--footer .listback::after {
        content: "";
        background: #000;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -4px;
        left: 0;
        transform: scale(0, 1);
        transition: transform 0.3s;
        transform-origin: right top
    }

    @media screen and (min-width: 897px) {
        .topic--footer .listback:hover::after {
            transform-origin: left top;
            transform: scale(1, 1)
        }
    }

    @media screen and (max-width: 896px) {
        .topic--footer .listback {
            font-size: 1.4rem;
            letter-spacing: 0.05em
        }
    }
</style>