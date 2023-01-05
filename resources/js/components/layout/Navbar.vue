<template>
    <div>
        <header>
            <div class="header-pc">
                <div class="header-pc__fixed">
                    <h1 class="header-pc__img">
                        <router-link to="/" id="logo" aria-label="Idenbrid logo">
                            <img class="header-pc__img__img" src="/public/assets/img/logo/idenbrid-logo.png" alt="">
                            <img class="header-pc__img__img_white" src="/public/assets/img/logo/idenbrid-logo.png"
                                alt="">
                        </router-link>
                    </h1>
                    <div class="header-pc__fixed__menu">

                        <div class="header-pc__fixed__menu__right">

                            <ul class="header-pc__fixed__menu__left">
                                <li class="header-pc__fixed__menu__left__list">
                                    <router-link to="/"><span class="jp">トップページ</span><span class="en">Home</span>
                                    </router-link>
                                </li>
                                <li class="header-pc__nav__list">
                                    <router-link to="/blog/">ブログ</router-link>
                                </li>
                                <li class="header-pc__nav__list">
                                    <router-link to="/policy/">経営理念</router-link>
                                </li>
                                <li class="header-pc__nav__list">
                                    <router-link to="/business/">事業紹介</router-link>
                                </li>
                                <li class="header-pc__nav__list">
                                    <router-link to="/works/">仕事実績</router-link>
                                </li>
                                <li class="header-pc__nav__list">
                                    <router-link to="/about/">会社情報</router-link>
                                </li>
                                <li class="header-pc__nav__list header-pc__nav__list_img mr-0 pr-0">
                                    <router-link to="/contact/">お問い合わせ</router-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <nav class="header-pc__nav">
                    <ul>
                        <li class="header-pc__nav__list">
                            <router-link to="/blog/">ブログ</router-link>
                        </li>
                        <li class="header-pc__nav__list">
                            <router-link to="/policy/">経営理念</router-link>
                        </li>
                        <li class="header-pc__nav__list">
                            <router-link to="/business/">事業紹介</router-link>
                        </li>
                        <li class="header-pc__nav__list">
                            <router-link to="/works/">仕事実績</router-link>
                        </li>
                        <li class="header-pc__nav__list">
                            <router-link to="/about/">会社情報</router-link>
                        </li>
                        <li class="header-pc__nav__list header-pc__nav__list_img mr-0 pr-0">
                            <router-link to="/contact/">お問い合わせ</router-link>
                        </li>
                        <li class="header-pc__nav__lists header-pc__nav__list_img mr-0 pr-0 ml-2">
                            <router-link to="/quote/" class="get-start-btn">開発見積依頼</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div class="header-sp">
                <h1 class="header-sp__img">
                    <router-link :to="'/'">
                        <img class="header-sp__img__img" src="/public/assets/img/logo/idenbrid-logo.png" alt="">
                        <img class="header-sp__img__img_white" src="/public/assets/img/idenbrid-logo.png" alt="">
                    </router-link>
                </h1>
                <button class="header-sp__btn"><span></span><span></span><span></span></button>

                <div class="header-sp__fixed__menu">
                    <ul class="header-sp__fixed__menu__left">
                        <li class="header-sp__fixed__menu__left__list header-sp__fixed__menu__left__list_service">
                            <p>
                                <router-link to="/">トップページ</router-link>
                            </p>

                        </li>
                        <li class="header-sp__fixed__menu__left__list">
                            <router-link to="/blog/">ブログ</router-link>
                        </li>
                        <li class="header-sp__fixed__menu__left__list">
                            <router-link to="/policy/">経営理念</router-link>
                        </li>
                        <li class="header-sp__fixed__menu__left__list">
                            <router-link to="/business/">事業紹介</router-link>
                        </li>
                        <li class="header-sp__fixed__menu__left__list">
                            <router-link to="/works/">仕事実績</router-link>
                        </li>
                        <li class="header-sp__fixed__menu__left__list">
                            <router-link to="/about/">会社情報</router-link>
                        </li>
                        <li class="header-sp__fixed__menu__left__list">
                            <router-link to="/contact/">お問い合わせ</router-link>
                        </li>
                        </ul>
                </div>
            </div>
        </header>

        <div class="side_fix on">
            <div class="fix_btn">
                <router-link to="/doc/"><span class="txt">資料ダウンロード</span></router-link>
            </div>
            <div class="pararel fix_btn">
                <router-link to="/faq" class="key">
                    <span class="txt">よくある質問</span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        components: {

        },
        mounted() {

            /* left side humbger menu */
            jQuery('.header-pc__btn').on('click', function () {
                jQuery("header").toggleClass("header_active");
                jQuery(".header-pc__btn").toggleClass("header-pc__btn_active");
                jQuery(".header-sp__btn").toggleClass("header-sp__btn_active");
            })

            jQuery('.header-sp__btn').on('click', function () {
                jQuery("header").toggleClass("header_active");
                jQuery(".header-pc__btn").toggleClass("header-pc__btn_active");
                jQuery(".header-sp__btn").toggleClass("header-sp__btn_active");
            })

            jQuery('.header-sp__fixed__menu__left__list__pulus_service').on('click', function () {
                jQuery(".header-sp__fixed__menu__left__list_service").toggleClass(
                    "header-sp__fixed__menu__left__list_service_active");
                console.log("hoge");
            })

            jQuery('.header-sp__fixed__menu__left__list__pulus_blog').on('click', function () {
                jQuery(".header-sp__fixed__menu__left__list_blog").toggleClass(
                    "header-sp__fixed__menu__left__list_blog_active");
                console.log("hoge");
            })
        }
        /*end*/

    };
</script>
<style scoped>
    .header-pc__nav__lists {
        position: relative;
        display: inline-block;
        height: 35px;
        margin-top: 18px;
        margin-right: 32px;
        font-weight: bold;
        font-size: 14px;
        line-height: 21px;
    }

    .get-start-btn {

        display: flex;
        align-items: center;
        border: 2px solid rgba(37, 115, 176, 1);
        color: rgba(37, 115, 176, 1);
        min-height: 42px;
        text-decoration: none;
        text-transform: uppercase;
        font-family: "Barlow", sans-serif;
        font-size: 0.875rem;
        line-height: 1.25;
        padding: 9px 20px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }

    .get-start-btn:hover {
        background-color: rgba(37, 115, 176, 1);
        color: #fff;
    }

    .side_fix {
        position: fixed;
        right: 0;
        top: 50%;
        transform: translate(100%, -50%);
        z-index: 100001;
        transition: 0.4s;
        width: 45px;
    }

    .side_fix.on {
        transform: translate(0, -50%);
    }

    .side_fix .fix_btn {
        transition: 0.4s;
    }

    .side_fix .fix_btn a {
        background-color: rgb(57, 108, 162);
        display: flex;
        border: solid 1px rgb(57, 108, 162);
        cursor: pointer;
        justify-content: center;
        align-items: center;
        padding: 25px 0;
        height: 22vh;
    }

    .side_fix .fix_btn a .txt {
        display: block;
        -webkit-writing-mode: vertical-rl;
        -ms-writing-mode: tb-rl;
        -o-writing-mode: vertical-rl;
        writing-mode: vertical-rl;
        font-size: 14px;
        color: #FFFFFF;
        font-family: NotoSansJP-Medium;
        letter-spacing: 0.18px;
        transition: 0.4s;
        position: relative;
    }

    .side_fix .fix_btn {
        transition: 0.4s;
    }

    .side_fix .fix_btn.pararel {
        margin-top: 20px;
    }

    .side_fix .fix_btn {
        transition: 0.4s;
    }

    @media screen and (max-width: 896px) {
        .side_fix {
            width: 35px;
        }

        .side_fix .fix_btn a {
            padding: 15px 0;
        }

        .side_fix .fix_btn a .txt {
            color: #FFFFFF;
            font-size: 12px;
        }
    }
</style>