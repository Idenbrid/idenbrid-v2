<template>
    <div>
        <Navbar />
        <div class="mv_textarea">
            <h2>
                <strong class="en entxt">VIDEO / ビデオ</strong>
                <span class="jptxt">アイデンブリッドで発信しているYouTube動画をご覧いただけます。</span>
            </h2>
        </div>
        <main>
            <section class="l-main">
                <div class="l-section">
                    <div class="mycontents-wide">
                        <article id="post-4936" class="page post-4936 type-page status-publish hentry">
                            <div class="l-post-content">
                                <p>&nbsp;</p>
                                <p>&nbsp;</p>
                            </div>
                            <!-- <h4 class="vission-text" style="text-align: center;">動画で楽しくアイデンブリッドを知ろう！</h4> -->
                            <p>&nbsp;</p>
                            <h3 class="vision-sub-heading"><span
                                    style="color: #102855;"><strong>ビデオ一覧</strong></span></h3>
                                    <div class="row">
                                        <div class="col-4 p-3 border-rounded">
                                            <iframe style="border: none; height: 200px; width: 360px;" id="moovy_iframe_thumbnail795"
                                            frameborder="0" scrolling="no" src="https://www.youtube.com/embed/zMGiD8g_ipE"></iframe>
                                            <h3>アイデントーク / IDENBRID TALK 後編</h3>
                                            
                                        </div>
                                        <div class="col-4 p-3"> 
                                            <iframe style="border: none; height: 200px; width: 360px;" id="moovy_iframe_thumbnail795"
                                            frameborder="0" scrolling="no" src="https://www.youtube.com/embed/m_e3HDdowqM"></iframe>
                                            <h3>必須インフラ】#5 : アイデントーク/ IDENTALK Zoom 後編</h3>
                                        </div>
                                        <div class="col-4 p-3"> 
                                            <iframe style="border: none; height: 200px; width: 360px;" id="moovy_iframe_thumbnail795"
                                            frameborder="0" scrolling="no" src="https://www.youtube.com/embed/MjWJ2deIOkg"></iframe>
                                            <h3>IDENBRID 会社紹介 短編</h3>
                                        </div>
                                        <div class="col-4 p-3"> 
                                            <iframe style="border: none; height: 200px; width: 360px;" id="moovy_iframe_thumbnail795"
                                            frameborder="0" scrolling="no" src="https://www.youtube.com/embed/bUvQQxvoiLU"></iframe>
                                            <h3>アイデントーク/IDENBRID TALK 前編</h3>
                                        </div>
                                        <div class="col-4 p-3"> 
                                            <iframe style="border: none; height: 200px; width: 360px;" id="moovy_iframe_thumbnail795"
                                            frameborder="0" scrolling="no" src="https://www.youtube.com/embed/tpY6birwBRY"></iframe>
                                            <h3>アイデントーク/ IDENTALK Zoom 前編</h3>
                                        </div>
                                        
                                        <div class="col-4 p-3"> 
                                            <iframe style="border: none; height: 200px; width: 360px;" id="moovy_iframe_thumbnail795"
                                                frameborder="0" scrolling="no" src="https://www.youtube.com/embed/knt5vVLJbX0"></iframe>
                                            <h3>アイデントーク/ IDENTALK</h3>
                                        </div>
                                    </div>
                        </article>
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
                title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | ビデオ",
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

iframe {
    border-radius: 15px;
}
h3{
    font-family: 'Noto Sans JP', sans-serif;
    font-weight: 700;
}
</style>
<style>

    .l-page-header {
        margin-top: 5.71429rem;
        width: 100%;
        height: 25rem;
        position: relative;
        overflow: hidden;
        visibility: hidden;
    }

    .l-page-header:after {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.2);
        top: 0;
        left: 0;
    }

    .l-page-header__image img {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        height: auto;
        min-height: 23.57143rem;
        min-width: 100rem;
    }

    .l-page-header__inner {
        text-align: center;
        color: #fff;
        position: absolute;
        width: 100%;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        z-index: 99;
        padding: 0 1.14286rem;
    }

    .l-page-header__title {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 58px;
        line-height: 1.03448;
        letter-spacing: 0.1em;
        margin: 0;
        font-weight: bold;
        color: #fff;
    }

    .l-page-header__subtitle {
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
        letter-spacing: 0.1em;
        font-size: 14px;
        margin-top: 0.57143rem;
    }

    .l-main {
        width: 100%;
        max-width: 137.14286rem;
        margin: 0 auto;
    }

    .l-section {
        padding-top: 4rem;
        padding-bottom: 4rem;
    }

    .l-post-content h4,
    #tinymce.post-type-post h4,
    #tinymce.post-type-page h4,
    #tinymce.mce-content-body.acf_content h4 {
        margin-top: 0;
        margin-bottom: 1.71429rem;
        color: #102855;
    }

    .l-post-content h3,
    #tinymce.post-type-post h3,
    #tinymce.post-type-page h3,
    #tinymce.mce-content-body.acf_content h3 {
        margin-bottom: 3.42857rem;
        margin-top: 0;
    }

    .c-heading span,
    .l-post-content h2 span,
    #tinymce.post-type-post h2 span,
    #tinymce.post-type-page h2 span,
    #tinymce.mce-content-body.acf_content h2 span,
    .l-post-content h3 span,
    #tinymce.post-type-post h3 span,
    #tinymce.post-type-page h3 span,
    #tinymce.mce-content-body.acf_content h3 span,
    .l-post-content h4 span,
    #tinymce.post-type-post h4 span,
    #tinymce.post-type-page h4 span,
    #tinymce.mce-content-body.acf_content h4 span,
    .l-post-content h5 span,
    #tinymce.post-type-post h5 span,
    #tinymce.post-type-page h5 span,
    #tinymce.mce-content-body.acf_content h5 span,
    .l-post-content h6 span,
    #tinymce.post-type-post h6 span,
    #tinymce.post-type-page h6 span,
    #tinymce.mce-content-body.acf_content h6 span {
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-weight: bold;
    }

    .vission-text {
        background-color: #EDEDED;
        padding: 1.14286rem 2rem;
        border-left: 4px solid #102855;
        text-align: left;
        margin-bottom: 1.71429rem;
    }

    .vision-sub-heading {
        border-bottom: 3px solid #E2E2E2;
        padding-bottom: 1.42857rem;
        margin-bottom: 3.42857rem;
        position: relative;
        text-align: left;
        font-size: 31px;
        font-family: 'Lato', sans-serif;
        font-weight: bold;
        letter-spacing: 0.1em;
    }

    .vision-sub-heading span::after {
        content: "";
        display: block;
        width: 7.14286rem;
        height: 0.21429rem;
        background-color: #102855;
        position: absolute;
        bottom: 0;
        left: 0;
        transform: translateY(100%);
    }

    @media (max-width: 945px) {
        .l-page-header__image img {
            min-width: 53rem;
            min-height: inherit;
        }

        .vision-sub-heading {
            font-size: 19px;
        }

        .l-page-header__title {
            font-size: 40px;
        }

        .l-page-header__subtitle {
            font-size: 13px;
        }

        .l-section {
            padding-top: 2rem;
            padding-bottom: 2rem;
        }

        .l-post-content h4,
        #tinymce.post-type-post h4,
        #tinymce.post-type-page h4,
        #tinymce.mce-content-body.acf_content h4 {
            margin-bottom: 1.14286rem
        }

        .l-post-content h3,
        #tinymce.post-type-post h3,
        #tinymce.post-type-page h3,
        #tinymce.mce-content-body.acf_content h3 {
            margin-bottom: 1.71429rem;
        }
    }
</style>