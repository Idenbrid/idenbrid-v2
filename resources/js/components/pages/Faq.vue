<template>
    <div>
        <Navbar />
        <div class="mv_textarea">
            <h2>
                <strong class="en entxt">FAQ</strong>
                <span class="jptxt">こちらでは当社のお問い合わせや商談にてお客様より頂くことの多い質問を回答とともにご覧頂けます。</span>
            </h2>
        </div>
        <main>
            <div id="FAQ">
                <div class="tab">
                    <div class="inner">
                        <ul class="nav nav-pills f_bold isAnim anim-fadeInUp inView" id="pills-tab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="pills-home-tab" data-toggle="pill"
                                    data-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                    aria-selected="true"><span>外注先を探しているお客様：開発編</span></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-toggle="pill"
                                    data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                    aria-selected="false"><span>外注先を探しているお客様：契約編</span></button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="faqList">
                    <div class="inner">
                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active isAnim anim-fadeInUp inView" id="pills-home"
                                role="tabpanel" aria-labelledby="pills-home-tab">
                                <div class="tab-main">
                                    <dt class="f_bold">SEH：スタジオ型開発ハブとはなんですか？</dt>
                                    <dd>アイデンブリッドが進めている開発サービスの総称です。当社では主にシステムやアプリの受託開発を受けております。また企業様からのリソースをベースとしたラボ型開発も受けてつけております。これからの開発サービスを当社ではSDHと呼んでいます。
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold">開発において社内にITに詳しい者がいませんが大丈夫でしょうか？ </dt>
                                    <dd>当社のお客様は8割以上が社内に詳しい方がいないので私たちを頼って頂いておりますのでご安心ください。
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold">ウェブのUIUXデザインはなんのツールを使って行いますか？</dt>
                                    <dd>当社では基本的にAdobe XDそしてFigmaを使っています。
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold">UIUXの修正は何回まで可能でしょうか？ </dt>
                                    <dd>
                                        <div class="faq-inner" bis_skin_checked="1" style="display: block;">
                                            <ul style="list-style: disc; padding-left: 25px;">
                                                <li>当社では初稿をお出しして最大その後2回（初稿を含めて3回）まで対応しております。</li>
                                                <!-- <li>上記の所有権</li> -->
                                            </ul>
                                            <div id="gtx-trans" style="position: absolute; left: -71px; top: 1.2px;"
                                                bis_skin_checked="1">
                                                <div class="gtx-trans-icon" bis_skin_checked="1">
                                                </div>
                                            </div>
                                        </div>
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold">アプリやシステムの開発期間はどれくらいになりますか？ </dt>
                                    <dd>規模や案件ごとに異なりますが通常2-6ヶ月規模のものが多いです。
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold">開発開始するために、クライアントが準備すべき必要なものは何がありますか？ </dt>
                                    <dd>お客様がどこまで担当して頂けるかによりますが、RFPや実現されたいページや機能の仕様など書類に落とし込まれたものがあると助かります。
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold">開発中にはどのようにプロジェクト管理をしますか？ </dt>
                                    <dd>ソースコードのバージョンコントロールはGitHubにて、進捗チケット管理はAsanaにて行っています。またその他、仕様要件などはGoogle
                                        Spreadsheetを使用しています。
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold">開発中などはどのように定期的にコミュニケーションをとれますか？ </dt>
                                    <dd>
                                        <p>開発中は定例や不定期の打ち合わせを設定させて頂き活発にコニュニケーションを取っています。
                                        </p>
                                        <p>作業を行っています。</p>
                                        <ul style="list-style: number; padding-left: 20px;">
                                            <li>lack、</li>
                                            <li>Zoom</li>
                                            <li>LINE、</li>
                                            <li>Skype、</li>
                                            <li>メール等様々なコミュニケーションツールに対応します。</li>

                                        </ul>
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold">完成したシステムやアプリをどのタイミング確認できますか？ </dt>
                                    <dd>今回のプロジェクトに企画書や資料をご用意いただければ、当社の開発チームの理解が深まり少しでも早く設計や開発を開始することができます。企画書や書類が一切ない場合でも、どのようなことをしたいのかを説明して頂けましたらそれをベースにシステムの要件定義をサポートさせて頂きます。
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold"> .納品後の製品の保証がありますか？ </dt>
                                    <dd>請負契約の場合には改正民法の瑕疵担保責任、また準委任契約の場合には契約書に沿って対応します。
                                    </dd>
                                </div>


                                <div class="tab-main">
                                    <dt class="f_bold">保守はどのように行ってくれますか？
                                    </dt>

                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold"> UIUXデザインやグラフィックはできますか？ </dt>
                                    <dd>デザイナー在籍していますので当社でお受けできます。弊社はAdobe
                                        XDとFigmaいうクラウドベースのデザインアプリを活用し、リアルタイムにクライアントにデザインの共有をします。当社ではデザインは３回までキャッチボールを最大としていまして、初稿の提出、そして頂いたフィードバックに対しての作業が2回目、それでも更に修正が必要な場合が3回目となります。
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold"> 納品後の製品の保証がありますか？ </dt>
                                    <dd>当社ではアジャイル開発つまり準委任契約で行われた開発の場合、納品から1ヶ月に対してソースコードに発生する不具合を無償で修理します。ただし、納品後の不具合の検証は保証の内容に入っていません（いわゆるデバッグ作業）。また、お客様側でソースコードに手を加えた場合や、お客様側で管理パスワードを流出させてしまった場合には、その対象外となりますのでご了承ください。
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold"> アプリ・システム保守の内容を教えてください。 </dt>
                                    <dd>保守の内容は下記の通りです。<br>
                                        クライアントからの問い合わせ対応（月当たり回数規定あり）<br>
                                        データベースにおける定期的なメンテナンス <br>
                                        OSアップデートにおけるメンテナンス <br>
                                        起動チェック<br>
                                        軽微な修正対応
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold"> 請負型契約において、途中の費用追加がないか？ </dt>
                                    <dd>仕様の変更・追加がない限り、途中の追加費用はありません。それでなくスコープ変更や要件追加などによって、実際に作業が発生した場合には追加業務に応じた費用分を請求します。
                                    </dd>
                                </div>
                                <div class="tab-main">
                                    <dt class="f_bold"> 請負型契約において、途中の費用追加がないか？ </dt>
                                    <dd>仕様の変更・追加がない限り、途中の追加費用はありません。それでなくスコープ変更や要件追加などによって、実際に作業が発生した場合には追加業務に応じた費用分を請求します。
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold">人月単価を教えてください。 </dt>
                                    <dd>作業場所とエンジニアのレベルによって異なりますが、参考価格を掲載いたします。

                                        パキスタンにいるエンジニアは30万円台
                                        日本にいるエンジニアは70万円〜140万円
                                        詳細はお問い合わせください。
                                    </dd>
                                </div>
                                <div class="tab-main">
                                    <dt class="f_bold"> システム保守費用はいくらですか？ </dt>
                                    <dd>当社では構築金額の30%を年間の保守金額の目安にご案内しています。また小さいシステムの場合には月額3万円よりご案内致します。
                                    </dd>
                                </div>
                                <div class="tab-main">
                                    <dt class="f_bold"> 支払いのタイミングはいつですか？ </dt>
                                    <dd>当社では契約時に50%の前金、そして作業マイルストーンの75%が終わった際に25%の支払い、そしてUAT終了後の納品前に残りの25%のお支払いをお願いしております。
                                    </dd>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="pills-profile" role="tabpanel"
                                aria-labelledby="pills-profile-tab">
                                <div class="tab-main">
                                    <dt class="f_bold">開発されたソフトウェアの著作権は誰にありますか？</dt>
                                    <dd>当社では契約ごとに定めていますが、基本的に著作権はクライアントへ帰属します。</dd>
                                </div>
                                <div class="tab-main">
                                    <dt class="f_bold">成果物の定義はどのように決まりますか？</dt>
                                    <dd>請負契約の場合には仕様要件の定義、品質基準の定義を行い、ソースコードなどの実装したシステム自体を成果物として定義します。準委任契約の場合には月末に稼働報告書をご提出致します。
                                    </dd>
                                </div>
                                <div class="tab-main">
                                    <dt class="f_bold">システムの開発において想定される契約書類はなんですか？</dt>
                                    <dd>各お客様と基本的に基本契約書いわゆる業務委託契約書を締結します。
                                        他にも各プロジェクトごとに個別契約書を締結します</dd>
                                </div>
                                <div class="tab-main">
                                    <dt class="f_bold">見積書はどのように作成するのですか？</dt>
                                    <dd>各仕事ごとの項目分けを行いその中で工数に沿って計算します。</dd>
                                </div>
                                <div class="tab-main">
                                    <dt class="f_bold">工数の単位で人月や人日とはなんですか？</dt>
                                    <dd>こちらは1人のエンジニアあたりが1ヶ月または1日稼働した場合という意味になります。</dd>
                                </div>
                            </div>
                        </div>
                    </div>
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
                title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | よくある質問",
                meta: [{
                    vmid: "description",
                    name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
                    content: "",
                }, ],
            };
        },
        mounted() {

            (function ($) {
                "use strict";
                $(document).ready(function () {
                    $('.faq-item > .faq-title').on('click', function (e) {
                        e.preventDefault();
                        $(this).parents('.faq-item').find('.faq-inner').slideToggle('active');
                        $(this).parents('.faq-item').find('.faq-title').toggleClass('active');
                        $('.faq-title').not(this).parents('.faq-item').find('.faq-inner').slideUp(
                            'active');
                        $('.faq-title').not(this).parents('.faq-item').find('.faq-title')
                            .removeClass('active');
                    });
                });
            })(jQuery);
        }
    };
</script>

<style scoped>
    .top-item .top-title {
        font-weight: 700;
        font-size: 25px;
        line-height: 45px;
        margin-left: 14px;
        text-transform: uppercase;
    }

    .list-faq {
        justify-content: space-between;
    }

    .d-flex {
        display: flex;
        flex-wrap: wrap;
    }

    .mw-780 {
        max-width: 780px;
        margin: 0 auto;
        width: 100%;
    }

    .faq-content .title-nav-info {
        padding-top: 0;
        text-transform: unset;
        color: #000;
    }

    .faq-inner .bialty-container p {
        margin-bottom: 5px;
    }

    .faq-inner .bialty-container p:last-child {
        margin-bottom: 0;
    }

    .list-faq {
        justify-content: space-between;
    }

    .item-faq {
        width: calc(50% - 54px);
        /* margin-right: 108px; */
    }

    .item-list-faq {
        margin-bottom: 70px;
    }

    .item-list-faq:nth-child(2n) {
        margin-right: 0;
    }

    .faq-content .faqs-group .faq-item {
        padding-left: 0;

    }

    .faq-content .faqs-group .faq-item .faq-title i {
        transition: all 0.3s ease-in-out 0s;
        -moz-transition: all 0.3s ease-in-out 0s;
        -o-transition: all 0.3s ease-in-out 0s;
        -webkit-transition: all 0.3s ease-in-out 0s;
        -ms-transition: all 0.3s ease-in-out 0s;
    }

    .faqs-group .faq-item .faq-title i {
        font-size: 22px;
        position: absolute;
        top: 28px;
        right: 0;
    }

    .faqs-group .faq-item {
        border-bottom: 1px solid #eee;
        padding-left: 15px;
    }

    .faq-content .faqs-group .faq-item .faq-title {
        font-weight: 700;
        font-size: 16px;
        line-height: 30px;
        padding: 25px 0 15px;
        padding-right: 68px;
        display: block;
        position: relative;
    }

    .faq-content .faqs-group .faq-item .faq-title.active {
        color: #1363AB;
        font-weight: 700;
        font-size: 18px;
        line-height: 30px;
    }

    .faq-content .faqs-group .faq-item .faq-title i {
        transition: all 0.3s ease-in-out 0s;
        -moz-transition: all 0.3s ease-in-out 0s;
        -o-transition: all 0.3s ease-in-out 0s;
        -webkit-transition: all 0.3s ease-in-out 0s;
        -ms-transition: all 0.3s ease-in-out 0s;
    }

    .faq-content .faqs-group .faq-item .faq-title.active i {
        color: #1363AB;
        transform: rotate(180deg);
    }

    .faq-content .faqs-group .faq-item .faq-inner {
        padding-bottom: 10px;
        display: none;
    }

    .item-list-faq .title-item-list {
        margin-left: 0;
    }

    @media (max-width: 767px) {
        .item-faq {
            width: 100%;
        }
    }

    #FAQ {
        margin-top: 89px;
    }

    .pageCopy {
        padding-bottom: 5%;
    }

    .inner {
        max-width: 1600px;
        margin-left: auto;
        margin-right: auto;
        padding-left: 5%;
        padding-right: 5%;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    .pageTitle {
        position: relative;
        display: inline-block;
        font-size: 24px;
        line-height: 1;
        letter-spacing: 0em;
        padding-bottom: 9px;
    }

    .pageTitle span {
        color: #2FA5DE;
    }

    .pageTitle::after {
        content: "";
        display: block;
        width: 100%;
        height: 4px;
        background: #2FA5DE;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    #FAQ .tab {
        margin-top: 61px;
    }

    #FAQ .tab ul {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }

    #FAQ .tab ul li {
        width: 34.7222222222%;
        min-width: 384px;
        margin: 0 1.3888888889%;
    }

    #FAQ .tab ul li button {
        position: relative;
        display: block;
        font-size: 20px;
        line-height: 4.6;
        letter-spacing: 0em;
        background-color: transparent !important;
        line-height: 1.2;
        padding-top: 33px;
        padding-bottom: 33px;
        color: #000;
        text-align: center;
        pointer-events: auto;
        -webkit-transition: all 0.15s ease-out;
        -o-transition: all 0.15s ease-out;
        transition: all 0.15s ease-out;
    }

    #FAQ .tab ul li button.active {
        color: #2FA5DE;
        pointer-events: none;
    }

    #FAQ .tab ul li button.active::before {
        display: inline-block;
        content: "";
        vertical-align: middle;
        margin-right: 5px;
        width: 22px;
        height: 22px;
        background-color: #2FA5DE;
        border-radius: 25px;
    }

    #FAQ .tab ul li button:hover {
        color: #2FA5DE;
    }

    #FAQ .tab ul li button::after {
        content: "";
        display: block;
        width: 0%;
        height: 4px;
        background: #2FA5DE;
        position: absolute;
        left: 50%;
        bottom: 0;
        -webkit-transform: translateX(-50%);
        -ms-transform: translateX(-50%);
        transform: translateX(-50%);
        -webkit-transition: all 0.15s ease-out;
        -o-transition: all 0.15s ease-out;
        transition: all 0.15s ease-out;
    }

    #FAQ .tab ul li button.active::after {
        width: 100%;
    }

    #FAQ .faqList {
        background: #f5f5f5;
        padding-top: 64px;
        padding-bottom: 64px;
    }

    #FAQ #tabA {
        display: none;
    }

    #FAQ .faqList .tab-main {
        margin-top: 46px;
        background: #FFF;
        padding: 40px 40px 40px 80px;
    }

    #FAQ .faqList .tab-main:first-child {
        margin-top: 0;
    }

    #FAQ .faqList .tab-pane dt,
    #FAQ .faqList .tab-pane dd {
        position: relative;
    }

    #FAQ .faqList .tab-pane dt {
        font-size: 22px;
        line-height: 1.0909090909;
        letter-spacing: 0em;
        font-weight: bold;
        color: #2FA5DE;
    }

    #FAQ .faqList .tab-pane dd {
        font-size: 18px;
        line-height: 1.7777777778;
        letter-spacing: 0em;
        color: #000;
        text-align: justify;
        text-justify: inter-ideograph;
        margin-top: 20px;
    }

    #FAQ .faqList .tab-pane dt::before,
    #FAQ .faqList .tab-pane dd::before {
        display: block;
        position: absolute;
        left: -50px;
        width: 40px;
        text-align: right;
        font-size: 30px;
        line-height: 1;
        font-family: "Lato", "Noto Sans JP", "Yu Gothic", "Yu Gothic Medium", "游ゴシック Medium", YuGothic, "游ゴシック体", "メイリオ", sans-serif;
    }

    #FAQ .faqList .tab-pane dt::before {
        content: "Q.";
        top: -5px;
    }

    #FAQ .faqList .tab-pane dd::before {
        content: "A.";
        top: 0px;
    }

    #FAQ .tab ul li a span {
        vertical-align: middle;
    }

    @media screen and (max-width: 767px) {
        #FAQ .tab .inner {
            padding-left: 3.2vw;
            padding-right: 3.2vw;
        }

        #FAQ .tab .inner {
            padding-left: 3.2vw;
            padding-right: 3.2vw;
        }

        #FAQ .tab ul {
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
        }

        #FAQ .tab ul li {
            width: 50%;
            min-width: initial;
            white-space: nowrap;
            margin: 0;
        }

        #FAQ .tab ul li a {
            font-size: 13px;
            font-size: 3.4666666667vw;
            line-height: 1;
            letter-spacing: -0.05em;
            padding-top: 5.6vw;
            padding-bottom: 5.6vw;
        }

        #FAQ .tab ul li a.active::before {
            display: inline-block;
            content: "";
            vertical-align: middle;
            margin-right: 0.6666666667vw;
            width: 2.9333333333vw;
            height: 2.9333333333vw;
        }

        #FAQ .tab ul li a::after {
            height: 0.5333333333vw;
        }

        #FAQ .faqList {
            background: #f5f5f5;
            padding-top: 12.8vw;
            padding-bottom: 12.8vw;
        }

        #FAQ .faqList .tab-pane dt {
            font-size: 16px;
            line-height: 1.375;
            letter-spacing: 0em;
        }

        #FAQ .faqList .tab-pane dd {
            font-size: 12px;
            margin-top: 10px;
        }

        #FAQ .faqList .tab-pane {

            padding: 35px 25px 35px 60px;
        }

        #FAQ .tab ul li button {
            font-size: 10px;
        }
    }

    @media screen and (max-width: 600px) {
        #FAQ .tab ul li button {
            font-size: 13px;
        }
    }

    @media screen and (max-width: 490px) {
        #FAQ .tab ul li button {
            font-size: 11px;
        }
    }
</style>