<template>
    <div>
        <div v-if="loading" class="preloader">
            <div class="ddback">
                <div class="loader">
                    <div class="loader-inner box-1"></div>
                    <div class="loader-inner box-2"></div>
                    <div class="loader-inner box-3"></div>
                    <div class="loader-inner box-4"></div>
                    <div class="loader-inner box-5"></div>
                    <div class="loader-inner box-6"></div>
                    <div class="loader-inner box-7"></div>
                    <div class="loader-inner box-8"></div>
                    <div class="loader-inner box-9"></div>
                    <div class="loader-inner box-10"></div>
                    <div class="loader-inner box-11"></div>
                    <div class="loader-inner box-12"></div>
                </div>

            </div>
        </div>
        <Navbar />
        <main>
            <div class="main-contents mycontents-wide">
                <section class="single">
                    <div class="single__head">
                        <h1 class="single__head__title">{{blog.title}}</h1>
                        <div class="single__head__flex">
                            <p class="single__head__date">{{blog.date}}</p>
                            <p class="single__head__tags">Blog</p>

                        </div>
                    </div>

                    <img class="single__thumbnail"
                        :src="'http://admin.idenbrid.jp/public/storage/blog_images/'+blog.image" alt=""
                        loading="lazy" />

                    <div class="single__contents" v-html="blog.description">

                    </div>
                </section>

                <aside class="aside">
                    <div class="aside__new">
                        <p class="aside__title aside__title__new"><img
                                src="/public/assets/img/icons/single-aside-new.png" alt="" loading="lazy"> 関連ブログ記事</p>

                        <ul class="aside__new__contents">
                            <li v-for="latest in latest_blogs" :key="latest.id" class="aside__new__list">
                                <router-link :to="'/blog/detail/'+latest.id">
                                    <img class="aside__new__list__thumbnail"
                                        :src="'http://admin.idenbrid.jp/public/storage/blog_images/'+latest.image"
                                        alt="" loading="lazy">
                                    <p class="aside__new__list__title">{{latest.title}}</p>
                                </router-link>
                            </li>
                        </ul>
                    </div>


                </aside>
            </div>

            <section class="btns">
                <a @click="prev(blog.id)" v-if="previous == true" to="" rel="prev">
                    <img class="btns__prev__img" src="/public/assets/img/icons/single-prev.svg" alt="前のニュースへ"
                        width="7" />
                    <p class="btns__prev__text">前の記事へ</p>
                </a>
                <router-link to="/blog/">
                    <img class="btns__prev__img" src="/public/assets/img/icons/single-blog.svg">
                    <p class="btns__prev__text">一覧に戻る</p>
                </router-link>
                <a @click="latests(blog.id)" v-if="latest == true" rel="next">
                    <img class="btns__prev__img btns__next__img" src="/public/assets/img/icons/single-prev.svg"
                        alt="前のニュースへ" width="7" />
                    <p class="btns__prev__text">前の記事へ</p>
                </a>
            </section>
            <div class="branding--contact">
      <h3 class="fade_y on">IT開発：UIUXデザイン、ウェブやスマホアプリそしてクラウド構築まで<br>
        ご質問がありましたらお気軽にご相談ください。</h3>
      <div class="fade_y on">
        <router-link to="/contact/" class="contactbtn fade_y on">今すぐ相談してみる</router-link>
      </div>
    </div>
            <!-- <section class="menu">
                <ul class="menu-contents mycontents-wide">
                    <li class="menu-contents__list">
                        <router-link to="/about/">
                            <img class="menu-contents__list__thumbnail" src="/public/assets/img/icons/Policy-icon.svg"
                                alt="" loading="lazy">
                            <div class="menu-contents__list__text">
                                <p class="menu-contents__list__subtitle">経営理念</p>
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
        </main>
        <Footer />
    </div>
</template>
<script>
    import Navbar from "../../layout/Navbar.vue";
    import Footer from "../../layout/Footer.vue";
    export default {
        components: {
            Navbar,
            Footer,
        },
        data() {
            return {
                loading: false,
                blog: '',
                latest_blogs: [],
                previous: false,
                latest: false,
            }
        },
        methods: {
            prev(id) {
                axios.get('/api/prev-blog-detail/' + id).then((res) => {
                    this.$router.push('/blog/detail/' + res.data.id + '/');
                }).catch((err) = {});
            },
            latests(id) {
                axios.get('/api/latest-blog-detail/' + id).then((res) => {
                    this.$router.push('/blog/detail/' + res.data.id + '/');
                }).catch((err) = {});
            }
        },
        mounted() {
            axios.get('/api/blog-detail/' + this.$route.params.id).then((res) => {
                    this.blog = res.data.blog;
                    this.latest_blogs = res.data.latest_blogs;
                    this.latest = res.data.latest;
                    this.previous = res.data.previous;
                })
                .catch((err) => {

                })
            setTimeout(() => {
                this.loading = false;
            }, 1000);
        },

        created() {
            this.loading = true;
        },


    };
</script>
<style>
    .main-contents {
        margin-top: 100px;
        margin-bottom: 100px;
        display: flex;
        justify-content: space-between;
    }

    .single {
        width: calc(100% - 440px);
    }

    .single__head {
        margin-bottom: 60px;
        padding: 30px 30px 20px 30px;
        background: #FFFFFF;
        border: none !important;
        ;
        box-sizing: border-box;
        border-radius: 10px;
    }

    .single__head__title {
        font-size: 35px;
        padding-bottom: 30px;
        margin-bottom: 30px;
        line-height: 1.4;
        letter-spacing: 0.04em;
        position: relative;
        transition: 0.8s;
        transform: translateY(5%);
        /* opacity: 0; */
        border-bottom: 2px solid #333;
        color: #333;
    }

    .single__head__flex {
        display: flex;
    }

    .single__head__tags {
        margin-left: auto !important;
        text-align: right;
        width: 50%;
        font-weight: bold;
        font-size: 12px;
        line-height: 18px;
        letter-spacing: 0.05em;
        color: var(--textcolor);
    }

    .single__head__date {
        width: 50%;
        margin-left: 0px !important;
        display: inline-block;
        text-align: left !important;
        font-size: 14px;
        line-height: 21px;
        letter-spacing: 0.05em;
        color: var(--textcolor);
    }

    .single__thumbnail {
        margin-bottom: 60px;
        width: 100%;
        height: 425px;
        object-fit: cover;
        border-radius: 10px;
    }

    /*mokuzi*/

    #rtoc-mokuji-wrapper {
        padding: 20px 30px;
        border-radius: 10px;
    }

    #rtoc-mokuji-title span {
        margin-bottom: 28px;
        display: inline-block;
        padding-left: 35px;
        position: relative;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: var(--textcolor);
    }

    #rtoc-mokuji-title span::before {
        position: absolute;
        left: 0;
        top: 4px;
        display: inline-block;
        width: 20px;
        height: 16px;
        content: "";
    }

    .rtoc_open_close {
        display: none;
    }

    .mokuji_ol {
        counter-reset: item;
    }

    .rtoc-item {
        margin-bottom: 10px;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
    }

    .rtoc-item::before {
        counter-increment: item;
        content: counter(item)'.';
    }

    /*å…±é€š*/

    .alignleft {
        float: left;
        margin-left: 0;
        margin-right: 1em;
    }

    .alignright {
        float: right;
        margin-left: 1em;
        margin-right: 0;
    }

    .aligncenter {
        margin-left: auto;
        margin-right: auto;
    }

    .wp-block-categories.aligncenter,
    .wp-block-latest-posts.aligncenter,
    .wp-block-archives.aligncenter,
    .wp-block-tag-cloud.aligncenter,
    .wp-block-latest-comments.aligncenter,
    .wp-block-rss.aligncenter {
        text-align: center;
    }

    figure {
        margin-left: 0;
        margin-right: 0;
    }

    body {
        box-sizing: border-box;
    }

    body *,
    body *::before,
    body *::after {
        box-sizing: inherit;
    }

    .single__contents h2 {
        position: relative;
        margin-bottom: 30px;
        margin-top: 30px;
        padding-left: 20px;
        font-weight: bold;
        font-size: 22px;
        line-height: 32px;
        letter-spacing: 0.05em;
    }

    .single__contents h2::after {
        content: "";
        position: absolute;
        left: 0;
        top: 3px;
        height: 26px;
        width: 5px;
        background-color: var(--basecolor);
    }

    #rtoc-1 {
        counter-reset: item;
    }

    .single__contents p {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: var(--textcolor)
    }

    .alignfull {
        margin-left: -20px;
        margin-right: -20px;
        width: 100vw;
    }

    @media (min-width: 768px) {
        .mycontainer {
            max-width: none;
            margin-left: calc((100vw - var(--myw)) / 2) !important;
            margin-right: calc((100vw - var(--myw)) / 2) !important;
        }

        .alignfull {
            margin-left: calc((100vw - 100%) / 2 * -1) !important;
            margin-right: calc((100vw - 100%) / 2 * -1) !important;
        }

        .alignwide {
            margin-left: calc((100vw - 100%) / 4 * -1) !important;
            margin-right: calc((100vw - 100%) / 4 * -1) !important;
            max-width: calc(var(--myw) + 300px) !important;
            width: auto;
        }
    }

    @media (min-width: 1320px) {
        .alignwide {
            margin-left: -150px !important;
            margin-right: -150px !important;
        }
    }

    .contents img {
        max-width: 100%;
        height: auto;
    }

    .contents p {
        margin-bottom: 30px;
    }

    /*aside*/

    .aside {
        width: 360px;
    }

    .aside__new {
        margin-bottom: 60px;
    }

    .aside__title {
        position: relative;
        margin-left: 160px;
        margin-bottom: 20px;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        text-align: left;
    }

    .aside__title__new img {
        position: absolute;
        left: -32px;
        top: 1px;
    }

    .aside__title__tags {
        padding-left: 180px;
    }

    .aside__new__list {
        margin-bottom: 10px;
        position: relative;
        height: 90px;
        background: #FFFFFF;
        border: 0.5px solid #C4C4C4;
        box-sizing: border-box;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 3px;
    }

    .aside__new__list__thumbnail {
        position: absolute;
        top: 15px;
        left: 20px;
        height: 60px;
        width: 60px;
        object-fit: cover;
    }

    .aside__new__list__title {
        padding-left: 95px;
        padding-top: 21px;
        font-weight: bold;
        font-size: 16px;
        line-height: 24px;
        color: var(--textcolor);
    }

    .aside__tags__list {
        position: relative;
        margin-left: 60px;
        padding-left: 35px;
        margin-bottom: 10px;
    }

    .aside__tags__list a {
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
        display: flex;
        align-items: center;
        letter-spacing: 0.05em;
        color: var(--textcolor);
    }

    .aside__tags__list a::before {
        position: absolute;
        content: "";
        display: inline-block;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        background: #FFFFFF;
        border: 1px solid #333333;
        box-sizing: border-box;
        border-radius: 2px;
    }

    @media (max-width: 1000px) {
        .main-contents {
            margin-bottom: 60px;
            margin-top: 73px;
            display: block;
        }

        .single {
            width: 100%;
        }

        .single__head {
            margin-bottom: 30px;
        }

        .aside {
            display: none;
        }

        .single__head__title {
            margin-bottom: 15px;
            font-size: 24px;
            line-height: 36px;
        }

        .single__head__title::before {
            height: 30px;
            width: 5px;
            top: 3px;
        }

        .single__head__tags,
        .single__head__date {
            font-size: 13px;
            line-height: 19px;
        }

        .single__thumbnail {
            height: 150px;
            margin-bottom: 30px;
        }

        #rtoc-mokuji-wrapper {
            padding: 20px 20px 5px 20px;
            border-radius: 5px;
        }

        #rtoc-mokuji-title span {
            padding-left: 30px;
            margin-bottom: 20px;
            font-size: 15px;
            line-height: 22px;
        }

        #rtoc-mokuji-title span::before {
            top: 4px;
            width: 17px;
            height: 13px;
            background-size: cover;
        }

        .rtoc-item {
            font-size: 13px;
            line-height: 19px;
            margin-bottom: 15px;
        }

        .single__contents h2 {
            font-size: 24px;
            line-height: 36px;
        }

        .single__contents h2::after {
            height: 30px;
            width: 5px;
            top: 3px;
        }

        .single__contents p {
            font-size: 14px;
            line-height: 21px;
        }

        .single__contents .single__contents__foot__title {
            font-size: 14px;
            line-height: 21px;
        }

        .single__contents__foot {
            margin-top: 50px;
            margin-bottom: 60px;
        }
    }

    /*btns*/

    .btns {
        padding-bottom: 120px;
        width: 100%;
        max-width: 370px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .btns a {
        text-align: center;
        display: inline-block;
        width: 70px;
    }

    .btns__prev__img {
        width: 40px;
        height: 40px;
        margin-bottom: 20px;
        cursor: pointer;
    }

    .btns__next__img {
        transform: rotate(180deg);
    }

    .btns__prev__text {
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: var(--textcolor);
    }

    @media (max-width: 767px) {
        .btns {
            padding-bottom: 60px;
        }

        .btns a {
            width: 65px;
        }

        .btns__prev__img {
            width: 60px;
            height: 60px;
            margin-bottom: 15px;
        }

        .btns__prev__text {
            font-size: 13px;
            line-height: 19px;
        }
    }
</style>