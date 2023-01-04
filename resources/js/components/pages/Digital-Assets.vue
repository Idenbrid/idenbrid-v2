<template>
    <div>
        <Navbar />
        <div class="mv_textarea" bis_skin_checked="1">
            <h2><strong class="en entxt">DIGITAL ASEETS / デジタルアセットデータ</strong>
                 <span class="jptxt">
                    アイデンブリッドが公式に提供している当社のロゴなどのデジタルデータになります。</span>
                </h2>
        </div>
        <main>
            <section class="work mycontents-wide my-5">
                <div class="section mediakit ">
                    <div class="container-slim">
                        <div class="mb-50">
                            <h5>Logo / ロゴ</h5>
                            <div class="kit kit-slim"><a href="/assets/img/logo/4.png" download="image"
                                    target="_blank" rel="noopener">
                                    <img src="/public/assets/img/logo/4.png" alt="" />
                                </a>
                            </div>
                            <div class="kit kit-slim"><a href="/assets/img/1.png">
                                    <img src="/public/assets/img/1.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div>
                            <h5>Key Visual / キュービジュアル</h5>
                            <p> 当社のブランド・サービスを表現しているアセットになります。</p>
                            <div class="kit"><a href="/assets/img/main-banner-2.png" download="image" rel="noopener">
                                    <img src="/public/assets/img/main-banner-2.png" alt="Digital assets Banner image" />
                                </a>
                            </div>
                            <div class="kit"><a href="/assets/img/key-visual-2.png" download="image" rel="noopener">
                                    <img src="/public/assets/img/key-visual-2.png" alt="Digital assets key visual image" />
                                </a>
                            </div>
                            <div class="kit"><a href="/assets/img/key-visual-3.png" download="image" rel="noopener">
                                    <img src="/public/assets/img/key-visual-3.png" alt="Digital assets key visual image" />
                                </a>
                            </div>
                            <div class="kit"><a href="/assets/img/key-visual-4.png" download="image" rel="noopener">
                                    <img src="/public/assets/img/key-visual-4.png" alt="Digital assets key visual image" />
                                </a>
                            </div>
                            <div class="kit"><a href="/assets/img/key-visual-5.png" download="image" rel="noopener">
                                    <img src="/public/assets/img/key-visual-5.png" alt="Digital assets key visual image" />
                                </a>
                            </div>
                            <div class="kit"><a href="/assets/img/key-visual-6.png" download="image" rel="noopener">
                                    <img src="/public/assets/img/key-visual-6.png" alt="Digital assets key visual image" />
                                </a>
                            </div>
                            <div class="kit"><a href="/assets/img/key-visual-7.png" download="image" rel="noopener">
                                    <img src="/public/assets/img/key-visual-7.png" alt="Digital assets key visual image" />
                                </a>
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </section>
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

                        <router-link to="/digitalasset/" class="text">
                            <img  src="/assets/img/icons/Digital-Assets.svg">デジタルアセット</router-link>  
                    </div>
                </div>

            </section>
            <div class="branding--contact">
                <h3 class="fade_y on">ブランディングに関するご質問があれば<br class="pc">まずはお気軽にご相談ください</h3>
                <div class="fade_y on"><router-link to="/contact/"
                        class="contactbtn fade_y on">今すぐ相談してみる</router-link></div>
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
                title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | デジタルアセットデータ",
                meta: [{
                    vmid: "description",
                    name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
                    content: "IDENBRID/アイデンブリッドは日本及びパキスタンにてIT受託開発を行なっているグローバル企業です。ウェブシステムやiOS・Androidのモバイルアプリを初め、ワンストップにてシステム設計、要件定義、UIUXデザイン、ウェブ開発、アプリ開発、クラウドまで一社完結にて対応しています。オフショア開発のみでなく、日本国内でもIT開発を行なっており、スタートアップから東証プライム上場企業まで幅広いクライアントの開発を支えています。",
                }, ],
            };
        },

    };
</script>
<style>


</style>