<template>
    <div>
        <Navbar />
        <div class="mv_textarea">
            <h2>
                <strong class="en entxt">ABOUT / 会社情報</strong>
                <span class="jptxt">こちらはIDENBRID INC.の会社に関してをご覧頂けるページになります。</span>
            </h2>
        </div>
        <section class="about-section">
            <div class="link-set">
                <router-link to="/company/">
                    <div class="link-card">
                        <div class="link-img">
                            <img src="/assets/img/Company.png" alt="Company image" loading="lazy">
                        </div>
                        <div class="link-haeding">
                            <h6>COMPANY / 会社概要</h6>
                            <div class="text">IDENBRID社の概要をご覧頂けます。</div>

                        </div>
                    </div>
                </router-link>
                <router-link to="/message/">
                    <div class="link-card">
                        <div class="link-img">
                            <img src="/assets/img/CEO-Mesasge.png" alt="CEO message image" loading="lazy">
                        </div>
                        <div class="link-haeding">
                            <h6>CEO MESSAGE / 代表メッセージ</h6>
                            <div class="text">IDENBRID社CEO中村のメッセージをご覧頂けます。</div>

                        </div>
                    </div>
                </router-link>
                <router-link to="/member/">
                    <div class="link-card">
                        <div class="link-img">
                            <img src="/assets/img/team.png" alt="Team image" loading="lazy">
                        </div>
                        <div class="link-haeding">
                            <h6>TEAM / チーム</h6>
                            <div class="text">IDENBRIDの愉快なメンバーをご覧頂けます。</div>

                        </div>
                    </div>
                </router-link>
                <router-link to="/office/">
                    <div class="link-card">
                        <div class="link-img">
                            <img src="/assets/img/officeandaccess.png" alt="Office access image" loading="lazy">
                        </div>
                        <div class="link-haeding">
                            <h6>OFFICE & ACCESS / オフィス&アクセス</h6>
                            <div class="text">会社のオフィスやアクセスをご覧頂けます。</div>

                        </div>
                    </div>
                </router-link>

                <router-link to="/digitalasset/">
                    <div class="link-card">
                        <div class="link-img">
                            <img src="/assets/img/digitalasset.png" alt="Digital access image" loading="lazy">
                        </div>
                        <div class="link-haeding">
                            <h6>DIGITAL ASSETS / デジタルアセット</h6>
                            <div class="text">IDENBRID社の公式ロゴやキービジュアルを提供しております。</div>

                        </div>
                    </div>
                </router-link>
            </div>
        </section>
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
                title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | 会社情報",
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
    .more-arrow .in:before {
        width: 27px;
        right: 8px;
        top: 50%;
    }

    .more-arrow .in:after {
        width: 6px;
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        right: 7px;
        top: 50%;
        margin-top: -2px;
    }

    .more-arrow {
        margin-top: 10px;
        line-height: 1;
    }

    .more-arrow .in {
        display: inline-block;
        background: #fff100;
        font-size: 11px;
        font-weight: bold;
        font-family: "Ropa Sans", sans-serif;
        padding: 3px 45px 2px 10px;
        letter-spacing: 0.02em;
        position: relative;
    }

    .more-arrow .in:before,
    .more-arrow .in:after {
        content: "";
        background: #231815;
        position: absolute;
        height: 1px;
    }

    .company--index {
        padding: 60px 10% 120px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .company--item {
        width: 32.4%;
        transform: translateY(5%);
        transition: .6s;
    }

    .company.loaded .company--item {
        transform: translateY(0);
        opacity: 1;
    }

    .company--item:nth-of-type(1),
    .company--item:nth-of-type(2) {
        width: 49.4%;
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
        backface-visibility: hidden;
    }

    img {
        max-width: 100%;
        height: auto;
        vertical-align: bottom;
    }

    .company--item .company_ttl {
        margin-top: 20px;
    }

    .company--item .company_ttl strong {
        color: #000;
        font-size: 18px;
        letter-spacing: 0.12px;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
    }

    .company--item .company_ttl span {
        font-size: 14px;
        font-family: "DIN";
        color: #929191;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        display: block;
        margin-top: 15px;
        font-weight: bold;
    }

    /*new-design*/
    .about-section {
        padding: 60px 10% 120px;
    }

    .link-set {
        display: grid;
        grid-gap: 20px;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        margin-top: 30px;
    }

    .link-card {
        background: #fff;
        width: 100%;
    }

    .link-img {
        position: relative;
        overflow: hidden;
    }

    .link-img img {
        transition: transform .5s ease;
        height: 319px;
        object-fit: cover;
        width: 100%;
    }

    .link-img img:hover {
        transform: scale(1.5);
    }

    .link-haeding {
        padding: 20px 10px;
    }

    .link-haeding h3 {
        font-size: 17px;
        font-weight: bold;
    }

    .link-haeding h6 {
        font-size: 17px;
        color: #231815;
        font-family: 'Noto Sans JP', sans-serif;
        font-weight: 700;
        margin-bottom: 20px;
    }

    /*end*/
    @media screen and (max-width: 1800px) and (min-width: 1600px)
{
    .link-img img {
    height: 250px;
    width: 100%;
}
}
    @media screen and (min-width: 897px) {

        .company--item:nth-of-type(1),
        .company--item:nth-of-type(2) {
            margin-bottom: 75px;
        }
    }

    @media screen and (max-width: 767px) {
        .link-img img {
          height:auto;
        }
        .company--index {
            padding: 20px 6% 60px;
        }

        .hero {
            padding-top: 60px;
            padding-bottom: 10px;
        }
    }

    @media screen and (max-width: 500px) {
        .company--item {
            width: 100%;
        }

        .company--item:nth-of-type(1),
        .company--item:nth-of-type(2) {
            width: 100%;
        }
        .link-set{
            grid-template-columns: repeat(auto-fit, minmax(100%, 1fr))
        }
    }
</style>