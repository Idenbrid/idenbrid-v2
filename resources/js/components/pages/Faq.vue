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
                                    aria-selected="true"><span>発注先を探している方</span></button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="pills-profile-tab" data-toggle="pill"
                                    data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                    aria-selected="false"><span>プロジェクトを探している方</span></button>
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
                                    <dt class="f_bold">請負型開発とアジャイル型開発はどちらがいいですか？</dt>
                                    <dd>仕様や要件の詳細が確定している際には、請負契約を適用することができます。ただし、途中の仕様変更やスコープ外の要件への作業は別途で追加費用が発生する可能性があります。
                                        仕様が決まっていないか未確定部分が存在する、またはプロジェクトに参加する貴社のエンジニアがいれば、アジャイル型開発の方が費用対効果が高いと思われます
                                        請負型開発においては、弊社はプロジェクトの進捗についてリスク及び成果物に対する責任を取るため、開発費は発生する可能性がある最大の工数で見積もります。一方のアジャイル型開発は実際にかかった工数での請求になります。
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold"> クライアントは作成されたアプリなどの納品物の著作権を持っていますか？ </dt>
                                    <dd>当社では契約ごとに定めていますが、基本的に著作権はクライアントへ帰属します。
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold">成果物や納品の定義は何ですか？</dt>
                                    <dd>ソースコード（ZipファイルまたはGitにて連携)
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold"> 成果物や納品物は何が対象物でしょうか？ </dt>
                                    <dd>
                                        <div class="faq-inner" bis_skin_checked="1" style="display: block;">
                                            <ul style="list-style: disc; padding-left: 25px;">
                                                <li>ソースコード及び関連素材（圧縮されたファイルを提出）</li>
                                                <li>上記の所有権</li>
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
                                    <dt class="f_bold"> システムの開発において想定される契約書類はなんですか？ </dt>
                                    <dd>各お客様と基本的に基本契約書いわゆる業務委託契約書を締結します。他にも各プロジェクトごとに個別契約書を締結します
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold"> 当社にはITに詳しい担当がいないのですが問題ないでしょうか？ </dt>
                                    <dd>当社のクライアントの7-8割はIT担当者がいない企業様です。分かりやすく案内しますのでご安心ください。
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold"> 工数の単位、人日、人月などは何？ </dt>
                                    <dd>１人月はエンジニア1名で1ヶ月で作業できる作業量です。１人日はエンジニア1名で１日で作業する作業量です。
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold"> 新規アプリの開発の流れを教えてください。 </dt>
                                    <dd>
                                        <p>しっかりと品質管理と開発作業を効率化する為に、下記の工程にて</p>
                                        <p>作業を行っています。</p>
                                        <ul style="list-style: number; padding-left: 20px;">
                                            <li>要件や仕様のヒアリング</li>
                                            <li>機能別の詳細なお見積りを作成</li>
                                            <li>開発企画書とワイヤーフレームを作成</li>
                                            <li>画面のデザイン</li>
                                            <li>詳細設計</li>
                                            <li>開発（フロント、バックエンド、テスト）</li>
                                            <li>UAT：ユーザー受入テスト</li>
                                            <li>納品</li>
                                        </ul>
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold"> 開発開始するために、クライアントが準備すべき必要なものは何がありますか？ </dt>
                                    <dd>今回のプロジェクトに企画書や資料をご用意いただければ、当社の開発チームの理解が深まり少しでも早く設計や開発を開始することができます。企画書や書類が一切ない場合でも、どのようなことをしたいのかを説明して頂けましたらそれをベースにシステムの要件定義をサポートさせて頂きます。
                                    </dd>
                                </div>

                                <div class="tab-main">
                                    <dt class="f_bold"> 開発中などはどのように定期的にコミュニケーションをとれますか？ </dt>
                                    <dd>当社では開発中は定例や不定期の打ち合わせを設定させて頂き活発にコニュニケーションを取っています。Slack、Zoom、LINE、Skype、メール等様々なコミュニケーションツールに対応します。またスケジュール管理はAsanaにて、そして開発に関するドキュメントはGoogle
                                        Spreadsheetにて作成・管理しています。
                                    </dd>
                                </div>


                                <div class="tab-main">
                                    <dt class="f_bold"> アプリ開発の場合、Apple Store又はGoogle Playの審査に不合格になった場合、どうしますか？ </dt>
                                    <dd>不合格になった場合、iOSやAndroidから送付される不合格の理由を確認し、それにあった修正し、もう一回申請の代行を致します。ただし、その修正が新規機能開発やモジュールの追加と判断された場合には追加料金を請求します。そして申請代行は2回までを基本形態とし、それ以上は準委任契約にて発生した日数分を請求する形となります。
                                    </dd>
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
                                    <dt class="f_bold">人月単価を教えてください。</dt>
                                    <dd>作業場所とエンジニアのレベルによって異なりますが、参考価格を掲載いたします。

                                        パキスタンにいるエンジニアは30万円台
                                        日本にいるエンジニアは70万円〜140万円
                                        詳細はお問い合わせください。</dd>
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
                title: "よくある質問| システム開発はアイデンブリッド社 | IDENBRID INC.",
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