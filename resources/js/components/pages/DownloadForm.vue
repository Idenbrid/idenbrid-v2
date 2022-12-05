 <template>
     <div>
         <Navbar />
         <div class="mv_textarea"  id="form">
             <h2>
                 <strong class="en entxt">DOCUMENT REQUEST / 資料ダウンロード</strong>
                 <span class="jptxt">こちらではIDENBRIDの事業に関する資料のダウンロードができます</span>
             </h2>
         </div>
         <main>
             <section class="" >
                 <div data-s-0e16e919-25dd-47be-9410-c87b0ca48625="" class="sd">
                     <div data-s-02bbc519-c345-4334-95d8-54c8794e13a6="" class="sd">
                         <div data-s-8c456275-d38c-4330-9861-5284c2ecf314="" class="sd"><img
                                 data-s-5431fa2f-020d-4ebf-b26b-64990a3d6381="" alt=""
                                 src="/assets/img/docment-download.png" class="sd">
                         </div>

                     </div>
                    <form @submit.prevent="requestDoc()"  data-s-52f5ada1-f2f2-4938-a67e-ed3a1ca95bfc="" class="sd">
                         <div data-s-eb910213-5e90-4c74-962c-99e6f7cb752c="" class="sd">
                             <div data-s-5d7bf798-6408-460a-a17b-3abceae4a8cf="" class="richText sd">
                                 <h2 data-uid="lVjvymHy" data-time="">IDENBRIDのサービスが3分でわかる</h2>
                             </div>
                             <div data-s-1a3235d6-c717-41c7-ab1a-4714c7f220b5="" class="sd">
                                 <h2 data-s-4c350f65-b9ff-40e6-b04c-3cef6dc9d38a=""
                                     data-r-0_1_0_1_0_0_1_4c350f65-b9ff-40e6-b04c-3cef6dc9d38a="" class="text sd">無料
                                 </h2>
                                 <h2 data-s-6c3a9e98-c115-41d3-8327-87de3d8e3848=""
                                     data-r-1_1_0_1_0_0_1_6c3a9e98-c115-41d3-8327-87de3d8e3848="" class="text sd">
                                     資料をダウンロード</h2>
                             </div>
                             <div data-s-3ce2e5a2-cf7d-48a7-94c9-24ccb7a155ca="" class="sd">
                                 <div data-s-fd53b6d5-1a29-41c3-b65e-03be391b0212="" class="sd"></div>
                                 <div data-s-e44b0b5f-e59d-4645-87b8-2a24111ea66a="" class="sd"></div>
                             </div>
                         </div>
                         <p data-s-d408094e-7400-4e6f-90d2-dcfaebd9ec06=""
                             data-r-1_1_0_0_1_d408094e-7400-4e6f-90d2-dcfaebd9ec06="" class="text sd">全ての項目をご入力ください<br>
                         </p>
                         <div data-s-35332035-c140-45dd-b60a-8621c8b5808d="" class="sd">
                             <label data-s-96950b18-e375-45a4-8c53-565ab7b63484="" class="sd">
                                 <div data-s-b44f44b9-21f2-4df5-93a7-53f0aeb07100="" class="sd">
                                     <p data-s-5739f3dc-f3ea-4a89-9abb-661e6de01f16=""
                                         data-r-0_0_0_2_1_0_0_1_5739f3dc-f3ea-4a89-9abb-661e6de01f16="" class="text sd">
                                         お名前<br></p>
                                 </div><input name="会社名" placeholder="ご入力ください" required="required" type="text" v-model="record.name"
                                     autocomplete="off" data-s-5878e812-d2f0-42ec-88de-15db7d7183ed="" class="sd">
                             </label>
                             <label data-s-96950b18-e375-45a4-8c53-565ab7b63484="" class="sd">
                                 <div data-s-b44f44b9-21f2-4df5-93a7-53f0aeb07100="" class="sd">
                                     <p data-s-5739f3dc-f3ea-4a89-9abb-661e6de01f16=""
                                         data-r-0_0_0_2_1_0_0_1_5739f3dc-f3ea-4a89-9abb-661e6de01f16="" class="text sd">
                                         会社名<br></p>
                                 </div><input name="会社名" placeholder="ご入力ください" type="text" v-model="record.company_name"
                                     autocomplete="off" data-s-5878e812-d2f0-42ec-88de-15db7d7183ed="" class="sd">
                             </label>
                         </div>
                         <div data-s-35332035-c140-45dd-b60a-8621c8b5808d="" class="sd">
                             <label data-s-96950b18-e375-45a4-8c53-565ab7b63484="" class="sd">
                                 <div data-s-b44f44b9-21f2-4df5-93a7-53f0aeb07100="" class="sd">
                                     <p data-s-5739f3dc-f3ea-4a89-9abb-661e6de01f16=""
                                         data-r-0_0_0_2_1_0_0_1_5739f3dc-f3ea-4a89-9abb-661e6de01f16="" class="text sd">
                                         Email<br></p>
                                 </div><input name="会社名" placeholder="ご入力ください" required="required" type="email" v-model="record.email"
                                     autocomplete="off" data-s-5878e812-d2f0-42ec-88de-15db7d7183ed="" class="sd">
                             </label>
                         </div>
                         <button data-s-6515d892-7269-4cdb-aa2c-63ffa4072f0b="" class="button sd">
                             <p data-s-0d898219-478c-43d2-b058-d1926a8d2536=""
                                 data-r-0_3_1_0_0_1_0d898219-478c-43d2-b058-d1926a8d2536="" class="text sd">資料請求（無料）</p>
                         </button>
                     </form>
                 </div>
             </section>
             <section data-s-696cf783-82e5-46e8-ba9c-cc3bb7d7386f="" class="sd">
                 <div data-s-da52b47a-4058-4b2c-9bd2-b32d932d7a94="" class="sd">
                     <h2 data-s-5e66522a-4a6f-4642-b8eb-c760e25a2e6f=""
                         data-r-0_0_1_1_5e66522a-4a6f-4642-b8eb-c760e25a2e6f="" class="text sd">IDENBRIDのサービスSDHの特徴</h2>
                     <div data-s-9e377fd2-bb01-4a4a-b2c6-12fc2f4e4804="" class="sd">
                         <div data-s-814e84ce-087a-4283-9e08-c914c41ddd7a="" class="sd">
                             <p data-s-b5862f2d-974a-4069-8398-72830dd372a5=""
                                 data-r-0_0_1_0_1_1_b5862f2d-974a-4069-8398-72830dd372a5="" class="text sd">01</p>
                             <p data-s-a7eb9c4b-36f0-4661-b299-7961242fd327=""
                                 data-r-1_0_1_0_1_1_a7eb9c4b-36f0-4661-b299-7961242fd327="" class="text sd">
                                 受託開発・ラボ型<br>どちらでも対応可能</p>
                             <div data-s-f0282e23-9495-40ef-9153-57b634611910="" class="sd">
                                 <p data-s-d20dd355-9671-44c9-ac72-d7c4c612e0c1=""
                                     data-r-0_2_0_1_0_1_1_d20dd355-9671-44c9-ac72-d7c4c612e0c1="" class="text sd"><video
                                         data-v-a9aac016="" width="100%" autoplay="autoplay" loop="loop" muted="muted">
                                         <source data-v-a9aac016="" src="/assets/videos/acomputer.mp4" type="video/mp4">
                                         </video></p>
                                 <!-- <i data-s-a40c9b85-3163-4087-aa6a-a5b9961fe66d=""
                                    class="icon material-icons sd">exposure_zero</i> -->
                             </div>
                         </div>
                         <div data-s-ab163740-b698-4815-a66d-b49d8bbe6ba2="" class="sd">
                             <p data-s-c83c6dec-139a-476d-82cb-498c11a1575c=""
                                 data-r-0_1_1_0_1_1_c83c6dec-139a-476d-82cb-498c11a1575c="" class="text sd">02</p>
                             <h3 data-s-37dd72c5-a053-4a6e-b2fb-2e6425306e10=""
                                 data-r-1_1_1_0_1_1_37dd72c5-a053-4a6e-b2fb-2e6425306e10="" class="text sd">
                                 IT知識がなくても<br>開発可能<br></h3><img data-s-e860154c-014f-474a-ade9-1974f133f903="" alt=""
                                 src="/assets/img/01babns.png" class="sd">
                         </div>
                         <div data-s-56bb3cc6-2cfb-4030-81d8-8e2924c36099="" class="sd">
                             <p data-s-a556ea1d-b257-490d-b188-1b96e82dbc21=""
                                 data-r-0_2_1_0_1_1_a556ea1d-b257-490d-b188-1b96e82dbc21="" class="text sd">03</p>
                             <p data-s-9fae1e38-fb2b-4bfa-93ce-3c8d1edffccd=""
                                 data-r-1_2_1_0_1_1_9fae1e38-fb2b-4bfa-93ce-3c8d1edffccd="" class="text sd">
                                 デザインから実装まで<br>ワンストップで受付</p><img data-s-859cc6a4-4f36-4142-b069-562b48b33c8c="" alt=""
                                 src="/assets/img/download02.png" class="sd">
                         </div>
                     </div><a href="#form" data-s-2af694e2-d08a-446b-bf98-d310f82e8ff5="" class="sd">
                         <p data-s-b459a42f-88c6-490e-b0d8-9120ea7cf040=""
                             data-r-0_2_0_1_1_b459a42f-88c6-490e-b0d8-9120ea7cf040="" class="text sd">まずは資料ダウンロード</p><i
                             data-s-77c856ad-f6c9-481f-8601-a07478774b1f="" class="icon material-icons sd"><i
                                 class="fa fa-angle-right" aria-hidden="true"></i></i>
                     </a>
                 </div>
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
                                 alt="">
                             <div class="menu-contents__list__text">
                                 <p class="menu-contents__list__subtitle">経営理念 </p>
                                 <h4 class="menu-contents__list__title">Policy</h4>
                             </div>
                         </router-link>
                     </li>
                     <li class="menu-contents__list">
                         <router-link to="/blog/">
                             <img class="menu-contents__list__thumbnail menu-contents__list__thumbnail_news"
                                 src="/public/assets/img/icons/Bussines-icon.svg" alt="">
                             <div class="menu-contents__list__text">
                                 <p class="menu-contents__list__subtitle">事業紹介</p>
                                 <h4 class="menu-contents__list__title">Business</h4>
                             </div>
                         </router-link>
                     </li>
                     <li class="menu-contents__list">
                         <router-link to="/onlinedevelopmenthub/">
                             <img class="menu-contents__list__thumbnail" src="/public/assets/img/icons/Company-icon.svg"
                                 alt="">
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
     import Navbar from "../layout/Navbar.vue";
     import Footer from "../layout/Footer.vue";
     export default {
        data() {
            return {
                record:{
                    name: '',
                    company_name: '',
                    email: '',
                }
            }
        },
        components: {
            Navbar,
        Footer,
        },
        methods: {
            requestDoc() {
                axios.post('/api/request-doc', this.record).then((res) => {
                    if(res.data.success == true){
                        this.record = {
                            name: '',
                            company_name: '',
                            email: '',
                        };
                        alert('すぐにご連絡いたします。 ありがとう');
                    }else{
                        alert('全ての項目をご記入ください。')
                    }
                }).catch((err) => {
                    alert('全ての項目をご記入ください。');
                });
            },
        },
        metaInfo() {
            return {
                title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | 資料ダウンロード",
                meta: [{
                    vmid: "description",
                    name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
                    content: "アイデンブリッドではお知らせやブログを定期的に更新しており、皆様が日々抱くサイト構築やアプリ開発の疑問やサイトをローンチした後の運用に関しての疑問に答えるブログ記事を公開しています。",
                }, ],
            };
        },
     };
 </script>

 <style>
     .sd[data-s-c83c6dec-139a-476d-82cb-498c11a1575c],
     .sd[data-s-a556ea1d-b257-490d-b188-1b96e82dbc21] {
         color: #bbbbbb;
         font-family: var(--s-font-95b5397d);
         font-size: 32px;
         font-weight: 700;
         height: auto;
         line-height: 1.4;
         text-align: center;
         width: auto;
         max-width: 100%;
         justify-content: center;
     }

     .sd[data-s-0d898219-478c-43d2-b058-d1926a8d2536] {
         border-radius: 0;
         color: #FFFFFF;
         font-family: var(--s-font-d5b4301d);
         font-size: 18px;
         font-weight: 700;
         letter-spacing: 0em;
         line-height: 1;
         margin: 0 0 0 0;
         opacity: 1;
         padding: 0px 0px 0px 0px;
         text-align: center;
         justify-content: center;
     }

     .sd[data-s-0e16e919-25dd-47be-9410-c87b0ca48625] {
         align-content: flex-start;
         align-items: flex-start;
         background: rgba(0, 0, 0, 0.0);
         flex: none;
         flex-direction: row;
         flex-wrap: nowrap;
         height: auto;
         justify-content: space-between;
         margin: auto;
         padding: 60px 10% 120px;
         max-width: 100%;
         margin-top: 60px;
     }

     .sd {
         max-width: 100%;
         z-index: 0;
         pointer-events: all;
         flex-wrap: nowrap;
         -webkit-overflow-scrolling: touch;
         display: flex;
         position: relative;
         flex-direction: column;
         align-content: center;
         align-items: center;
         flex: none;
     }

     .sd[data-s-02bbc519-c345-4334-95d8-54c8794e13a6] {
         align-content: center;
         align-items: center;
         background: rgba(0, 0, 0, 0.0);
         flex: none;
         flex-direction: column;
         flex-wrap: nowrap;
         height: auto;
         justify-content: flex-start;
         margin: 0px 0px 0px 0px;
         transition-delay: 0ms;
         transition-duration: 1000ms;
         width: 60%;
         max-width: 60%;
     }

     .sd[data-s-8c456275-d38c-4330-9861-5284c2ecf314] {
         align-content: center;
         align-items: center;
         background: rgba(0, 0, 0, 0.0);
         flex: none;
         flex-direction: row;
         flex-wrap: nowrap;
         height: auto;
         justify-content: flex-start;
         margin: 0px 0px 0px 0px;
         transform: translate(1px, 1px);
         width: 100%;
         max-width: 100%;
     }

     .sd[data-s-5431fa2f-020d-4ebf-b26b-64990a3d6381] {
         box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
         flex: none;
         height: auto;
         margin: 0px 31px 0px 0px;
         width: 100%;
         max-width: calc(100% - 31px);
     }

     .sd[data-s-0243ebae-e5d6-4323-9039-768daadc1521] {
         align-content: flex-start;
         align-items: flex-start;
         flex-direction: column;
         flex-wrap: nowrap;
         justify-content: center;
         padding: 0px;
     }

     .sd[data-s-2fe10181-ad99-47d9-a5bb-2653c12abff7] {
         align-content: center;
         align-items: center;
         flex-direction: column;
         flex-wrap: nowrap;
         justify-content: center;
         padding: 0px;
     }

     .sd[data-s-53b38df5-93d7-476b-bda6-2d568b64a54c] {
         color: #333333;
         font-family: var(--s-font-d5b4301d);
         font-size: 24px;
         font-weight: 700;
         height: auto;
         line-height: 1.4;
         text-align: left;
         text-decoration: none;
         width: auto;
         max-width: 100%;
         justify-content: flex-start;
     }

     .sd[data-s-9e677be2-2318-4cc6-890a-d21b592d5278] {
         background: #f5c019;
         border-radius: 0;
         flex: none;
         height: 5px;
         margin: -7px 0px 0px 0px;
         opacity: 0.4;
         width: 100%;
         z-index: -2;
         max-width: 100%;
     }

     .sd[data-s-1fefdbc9-e489-4b86-83d4-d02c074fee7d] {
         align-content: center;
         align-items: center;
         background: rgba(0, 0, 0, 0.0);
         flex: none;
         flex-direction: row;
         flex-wrap: nowrap;
         height: auto;
         justify-content: center;
         margin: 48px 0px 0px 0px;
         width: auto;
         max-width: 100%;
     }

     .sd[data-s-03763973-61ce-4d2d-8b23-9ebd1668a6a7] {
         flex: none;
         height: auto;
         margin: 0px 0px 0px 20px;
         width: 242px;
         max-width: calc(100% - 20px);
     }

     .sd[data-s-701808c5-6eb2-44bb-b181-f3f9226328db] {
         color: #333333;
         flex: none;
         font-family: var(--s-font-d5b4301d);
         font-size: 24px;
         font-weight: 700;
         height: auto;
         letter-spacing: 0.15em;
         line-height: 1.5;
         margin: 0px 0px 0px 0px;
         text-align: left;
         width: auto;
         max-width: 100%;
         justify-content: flex-start;
     }

     .sd[data-s-52f5ada1-f2f2-4938-a67e-ed3a1ca95bfc] {
         align-content: center;
         align-items: center;
         background: rgba(0, 0, 0, 0.0);
         border-bottom: 0px solid rgba(10, 124, 237, 0.46);
         border-left: 0px solid rgba(10, 124, 237, 0.46);
         border-radius: 0;
         border-right: 0px solid rgba(10, 124, 237, 0.46);
         border-top: 0px solid rgba(10, 124, 237, 0.46);
         box-shadow: none;
         display: flex;
         flex: none;
         height: auto;
         justify-content: flex-start;
         margin: 0px 0px 0px 20px;
         opacity: 1;
         padding: 0px 16px 0px 16px;
         width: 40%;
         max-width: calc(100% - 20px);
     }

     .sd[data-s-eb910213-5e90-4c74-962c-99e6f7cb752c] {
         align-content: center;
         align-items: center;
         background: rgba(0, 0, 0, 0.0);
         flex: none;
         flex-direction: column;
         flex-wrap: nowrap;
         height: auto;
         justify-content: center;
         margin: -20px 0px 20px 0px;
         width: 100%;
         max-width: 100%;
     }

     .sd[data-s-5d7bf798-6408-460a-a17b-3abceae4a8cf] {
         color: #333;
         flex: none;
         font-family: var(--s-font-d5b4301d);
         font-size: 14px;
         font-weight: 400;
         height: auto;
         line-height: 1.4;
         padding: 0px 0px 0px;
         text-align: left;
         width: auto;
         max-width: 100%;
     }

     .richText {
         display: block;
         word-break: break-word;
     }

     .sd[data-s-1a3235d6-c717-41c7-ab1a-4714c7f220b5] {
         align-content: center;
         align-items: center;
         background: rgba(0, 0, 0, 0.0);
         flex: none;
         flex-direction: row;
         flex-wrap: nowrap;
         height: auto;
         justify-content: center;
         margin: 10px 0px 0px 0px;
         width: auto;
         max-width: 100%;
     }

     .sd[data-s-4c350f65-b9ff-40e6-b04c-3cef6dc9d38a] {
         border-bottom: 3px solid #0a7ced;
         border-left: 3px solid #0a7ced;
         border-radius: 24px;
         border-right: 3px solid #0a7ced;
         border-top: 3px solid #0a7ced;
         color: #0a7ced;
         flex: none;
         font-family: var(--s-font-d5b4301d);
         font-size: 20px;
         font-weight: 700;
         height: auto;
         letter-spacing: 0.05em;
         line-height: 1;
         margin: 0px 8px 0px 0px;
         padding: 5px 20px 5px;
         text-align: center;
         width: auto;
         max-width: calc(100% - 8px);
         justify-content: center;
     }

     .sd[data-s-6c3a9e98-c115-41d3-8327-87de3d8e3848] {
         color: #021839;
         flex: none;
         font-family: var(--s-font-d5b4301d);
         font-size: 24px;
         font-weight: 700;
         height: auto;
         letter-spacing: 0.04em;
         line-height: 1;
         margin: 0px 0px 0px 0px;
         text-align: left;
         width: auto;
         max-width: 100%;
         justify-content: flex-start;
     }

     .sd[data-s-3ce2e5a2-cf7d-48a7-94c9-24ccb7a155ca] {
         align-content: center;
         align-items: center;
         bottom: 0px;
         flex-direction: column;
         flex-wrap: nowrap;
         justify-content: center;
         left: auto;
         margin: 0 0 0 0;
         padding: 0px;
         position: absolute;
         right: -32px;
         top: -4px;
         transform: rotate(6deg);
         z-index: -1;
     }

     .sd[data-s-fd53b6d5-1a29-41c3-b65e-03be391b0212] {
         background: #FFFFFF;
         border-bottom: 0px solid #00c4fb;
         border-left: 0px solid #00c4fb;
         border-right: 0px solid #00c4fb;
         border-top: 0px solid #00c4fb;
         box-shadow: 4px 4px 24px rgb(0 0 0 / 6%);
         flex: none;
         height: 140px;
         width: 200px;
         max-width: 100%;
     }

     .sd[data-s-e44b0b5f-e59d-4645-87b8-2a24111ea66a] {
         background: #FFFFFF;
         border-bottom: 0px solid #00c4fb;
         border-left: 0px solid #00c4fb;
         border-right: 0px solid #00c4fb;
         border-top: 0px solid #00c4fb;
         box-shadow: 4px 4px 24px rgb(0 0 0 / 6%);
         flex: none;
         height: 140px;
         left: 0;
         margin: 0 0 0 0;
         position: absolute;
         top: 0;
         transform: rotate(12deg);
         transform-origin: bottom left;
         width: 200px;
         max-width: 100%;
     }

     .sd[data-s-d408094e-7400-4e6f-90d2-dcfaebd9ec06] {
         border-radius: 0;
         color: #333333;
         font-family: var(--s-font-d5b4301d);
         font-size: 14px;
         font-weight: 700;
         letter-spacing: 0em;
         line-height: 1.4;
         margin: 0px 0px 0px 0px;
         opacity: 1;
         padding: 0px 0px 0px 0px;
         text-align: center;
         justify-content: center;
     }

     .sd[data-s-35332035-c140-45dd-b60a-8621c8b5808d] {
         align-content: center;
         align-items: center;
         flex-wrap: nowrap;
         justify-content: center;
         margin: 15px 0px 0px 0px;
         padding: 0px;
         width: 100%;
         max-width: 100%;
     }

     .sd[data-s-b44f44b9-21f2-4df5-93a7-53f0aeb07100] {
         align-content: center;
         align-items: center;
         flex: none;
         flex-direction: row;
         flex-wrap: nowrap;
         justify-content: space-between;
         margin: 0px 0px 0px 0px;
         padding: 0px 0px 0px 0px;
         width: 91px;
         max-width: 100%;
     }

     .sd[data-s-5878e812-d2f0-42ec-88de-15db7d7183ed] {
         background: #FFFFFF;
         border-bottom: 1px solid #d9d9d9;
         border-left: 1px solid #d9d9d9;
         border-radius: 4px;
         border-right: 1px solid #d9d9d9;
         border-top: 1px solid #d9d9d9;
         box-shadow: none;
         color: #333;
         flex: 1;
         font-family: var(--s-font-d5b4301d);
         font-size: 14px;
         font-weight: 500;
         height: 40px;
         justify-content: center;
         letter-spacing: 0em;
         line-height: 1.4;
         margin: 0px 0px 0px 0px;
         opacity: 1;
         padding: 10px 10px 10px 10px;
         text-align: left;
         width: auto;
         max-width: 100%;
     }

     .sd[data-s-96950b18-e375-45a4-8c53-565ab7b63484] {
         align-content: center;
         align-items: center;
         background: rgba(0, 0, 0, 0.0);
         border-radius: 0;
         flex: none;
         flex-direction: row;
         flex-wrap: nowrap;
         height: 50px;
         justify-content: space-between;
         margin: 0px 0px 20px 0px;
         opacity: 1;
         overflow-x: visible;
         overflow-y: visible;
         padding: 0 0 0 0;
         width: 100%;
         max-width: 100%;
     }

     .sd[data-s-6515d892-7269-4cdb-aa2c-63ffa4072f0b] {
         background: var(--textcolor);
         border-radius: 5px;
         box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 20%);
         color: #333;
         flex: none;
         font-size: 15px;
         height: 52px;
         justify-content: center;
         margin: 24px 0px 0px 0px;
         opacity: 1;
         padding: 15px;
         width: 100%;
         max-width: 100%;
     }

     /*second-seaction*/
     .sd[data-s-696cf783-82e5-46e8-ba9c-cc3bb7d7386f] {
         align-content: center;
         align-items: center;
         background: #f4f4f4;
         flex: none;
         flex-direction: column;
         flex-wrap: nowrap;
         height: auto;
         justify-content: flex-start;
         margin: 0px 0px 0px 0px;
         width: 100%;
         max-width: 100%;
     }

     .sd[data-s-da52b47a-4058-4b2c-9bd2-b32d932d7a94] {
         align-content: center;
         align-items: center;
         background: rgba(0, 0, 0, 0.0);
         flex: none;
         flex-direction: column;
         flex-wrap: nowrap;
         height: auto;
         justify-content: space-between;
         margin: 0px 0px 0px;
         padding: 60px 32px 60px;
         width: 1200px;
         max-width: 100%;
     }

     .sd[data-s-5e66522a-4a6f-4642-b8eb-c760e25a2e6f] {
         color: #333;
         font-family: var(--s-font-d5b4301d);
         font-size: 32px;
         font-weight: 700;
         height: auto;
         letter-spacing: 0.05em;
         line-height: 1.4;
         text-align: center;
         width: auto;
         max-width: 100%;
         justify-content: center;
     }

     .sd[data-s-9e377fd2-bb01-4a4a-b2c6-12fc2f4e4804] {
         align-content: center;
         align-items: center;
         background: rgba(0, 0, 0, 0.0);
         flex: none;
         flex-direction: row;
         flex-wrap: nowrap;
         height: 310px;
         justify-content: center;
         margin: 34px 0px 0px 0px;
         width: 100%;
         max-width: 100%;
     }

     .sd[data-s-814e84ce-087a-4283-9e08-c914c41ddd7a] {
         align-content: center;
         align-items: center;
         background: #FFFFFF;
         flex: none;
         flex-direction: column;
         flex-wrap: nowrap;
         height: 100%;
         justify-content: flex-start;
         margin: 0px 12px 0px;
         padding: 16px 24px 24px;
         width: calc(33.3% - 24px);
         max-width: calc(33.3% - 24px)
     }

     .sd[data-s-b5862f2d-974a-4069-8398-72830dd372a5] {
         color: #bbbbbb;
         font-family: var(--s-font-95b5397d);
         font-size: 32px;
         font-weight: 700;
         height: auto;
         line-height: 1.4;
         text-align: center;
         width: auto;
         max-width: 100%;
         justify-content: center;
     }

     .sd.icon,
     .sd.text {
         display: flex;
         flex-direction: row;
         align-items: center;
         align-content: center;
         justify-content: center;
         overflow: visible;
         word-break: break-word;
         word-wrap: anywhere;
     }

     .sd[data-s-a7eb9c4b-36f0-4661-b299-7961242fd327],
     .sd[data-s-37dd72c5-a053-4a6e-b2fb-2e6425306e10],
     .sd[data-s-9fae1e38-fb2b-4bfa-93ce-3c8d1edffccd] {
         color: #0a7ced;
         font-family: var(--s-font-d5b4301d);
         font-size: 24px;
         font-weight: 700;
         height: auto;
         letter-spacing: 0.05em;
         line-height: 1.56;
         margin: 0px 0px 0px 0px;
         padding: 0px 0px 0px 0px;
         text-align: center;
         width: auto;
         max-width: 100%;
         justify-content: center;
     }

     sd[data-s-f0282e23-9495-40ef-9153-57b634611910] {
         align-content: flex-end;
         align-items: flex-end;
         flex-direction: row;
         flex-wrap: nowrap;
         justify-content: center;
         margin: 20px 0px 0px 0px;
         padding: 0px;
     }

     .sd[data-s-d20dd355-9671-44c9-ac72-d7c4c612e0c1] {
         margin: 15px 0px 0px 0px;
         width: 145px;
         max-width: calc(100% - 8px);
         justify-content: center;
     }

     .sd[data-s-a40c9b85-3163-4087-aa6a-a5b9961fe66d] {
         color: #333333;
         flex: none;
         font-size: 200px;
         height: 106px;
         width: 75px;
         max-width: 100%;
     }

     .sd[data-s-005cd78e-8c51-4108-8c2b-ac8ea213a47a] {
         color: #0a7ced;
         flex: none;
         font-family: var(--s-font-d5b4301d);
         font-size: 72px;
         font-weight: 700;
         height: auto;
         letter-spacing: 0.01em;
         line-height: 1;
         margin: 0px 4px 0px 0px;
         text-align: left;
         width: auto;
         max-width: calc(100% - 4px);
         justify-content: flex-start;
     }

     .sd[data-s-809c75b8-7c53-4826-8434-9f2caec3986a] {
         color: #333333;
         font-family: var(--s-font-d5b4301d);
         font-size: 44px;
         font-weight: 700;
         height: auto;
         letter-spacing: -0.05em;
         line-height: 1;
         margin: 0px 0px 0px 0px;
         text-align: left;
         width: auto;
         max-width: 100%;
         justify-content: flex-start;
     }

     .sd[data-s-db4c0203-bf47-4eaa-bf80-2853b430c19d] {
         align-content: flex-start;
         align-items: flex-start;
         background: rgba(0, 0, 0, 0.0);
         flex: none;
         flex-direction: column;
         flex-wrap: nowrap;
         height: auto;
         justify-content: center;
         margin: 12px 0px 0px 0px;
         width: auto;
         max-width: 100%;
     }

     .sd[data-s-b04cb8fc-be48-455d-a276-d81e1c150ecb] {
         align-content: flex-end;
         align-items: flex-end;
         background: rgba(0, 0, 0, 0.0);
         flex: none;
         flex-direction: row;
         flex-wrap: nowrap;
         height: auto;
         justify-content: flex-start;
         margin: 0px 0px 0px 0px;
         width: 100%;
         max-width: 100%;
     }

     .sd[data-s-191e357f-d464-4c53-8878-10740a4a7eb8] {
         color: #0a7ced;
         font-family: var(--s-font-d5b4301d);
         font-size: 44px;
         font-weight: 700;
         height: auto;
         letter-spacing: 0.1em;
         line-height: 1;
         margin: 32px 0px 0px 0px;
         padding: 0px 0px 0px 0px;
         text-align: left;
         width: auto;
         max-width: 100%;
         justify-content: flex-start;
     }

     .sd[data-s-c268f161-192e-49bc-bae5-831cd26fc413] {
         color: #333333;
         font-family: var(--s-font-d5b4301d);
         font-size: 44px;
         font-weight: 700;
         height: auto;
         letter-spacing: 0.1em;
         line-height: 1;
         margin: 32px 0px 0px 0px;
         padding: 0px 0px 0px 0px;
         text-align: left;
         width: auto;
         max-width: 100%;
         justify-content: flex-start;
     }

     .sd[data-s-ab163740-b698-4815-a66d-b49d8bbe6ba2] {
         align-content: center;
         align-items: center;
         background: #FFFFFF;
         flex: none;
         flex-direction: column;
         flex-wrap: nowrap;
         height: 100%;
         justify-content: flex-start;
         margin: 0px 12px 0px;
         padding: 16px 24px 24px;
         width: calc(33.3% - 24px);
         max-width: calc(33.3% - 24px);
     }

     .sd[data-s-e860154c-014f-474a-ade9-1974f133f903] {
         flex: none;
         height: auto;
         margin: 20px 0px 0px 0px;
         width: 140px;
         max-width: 100%;
     }

     .sd[data-s-859cc6a4-4f36-4142-b069-562b48b33c8c] {
         flex: none;
         height: auto;
         margin: 20px 0px 0px 0px;
         width: 150px;
         max-width: 100%;
     }

     .sd[data-s-56bb3cc6-2cfb-4030-81d8-8e2924c36099] {
         align-content: center;
         align-items: center;
         background: #FFFFFF;
         flex: none;
         flex-direction: column;
         flex-wrap: nowrap;
         height: 100%;
         justify-content: flex-start;
         margin: 0px 12px 0px;
         padding: 16px 24px 24px;
         width: calc(33.3% - 24px);
         max-width: calc(33.3% - 24px);
     }

     .sd[data-s-2af694e2-d08a-446b-bf98-d310f82e8ff5] {
         align-content: center;
         align-items: center;
         background: var(--textcolor);
         border-radius: 5px;
         flex: none;
         flex-direction: row;
         flex-wrap: nowrap;
         height: 52px;
         justify-content: center;
         margin: 60px 0px 0px 0px;
         padding: 0px;
         width: 382px;
         max-width: 100%;
     }

     .sd[data-s-b459a42f-88c6-490e-b0d8-9120ea7cf040] {
         background: rgba(0, 0, 0, 0.0);
         border-radius: 0;
         color: #FFFFFF;
         flex: none;
         font-family: var(--s-font-d5b4301d);
         font-size: 18px;
         font-weight: 700;
         letter-spacing: 0.1em;
         line-height: 2;
         margin: 0px 8px 0px 0px;
         padding: 0px 0px 0px 0px;
         text-align: center;
         width: auto;
         max-width: calc(100% - 8px);
         justify-content: center;
     }

     .sd[data-s-2af694e2-d08a-446b-bf98-d310f82e8ff5]:hover .sd[data-s-77c856ad-f6c9-481f-8601-a07478774b1f] {
         transform: translate(12px, 0px);
         transition-delay: 100ms;
     }

     .sd[data-s-2af694e2-d08a-446b-bf98-d310f82e8ff5]:hover {
         background: #fda546;
     }

     @media screen and (max-width: 840px) {
         .sd[data-s-02bbc519-c345-4334-95d8-54c8794e13a6] {
             flex-direction: column;
             flex-wrap: nowrap;
             margin: 0px 0px 0px 0px;
             width: 100%;
             max-width: 100%;
         }

         .sd[data-s-1fefdbc9-e489-4b86-83d4-d02c074fee7d] {
             flex: none;
             margin: 30px 0px 30px 0px;
             padding: 24px 0px 24px;
             width: 100%;
             max-width: 100%;
         }


         .sd[data-s-0243ebae-e5d6-4323-9039-768daadc1521] {
             justify-content: flex-start;
             margin: 13px 0px 0px 0px;
             width: 100%;
         }

         .sd[data-s-03763973-61ce-4d2d-8b23-9ebd1668a6a7] {
             margin: 20px 0px 20px 0px;
             width: 100%;
             max-width: calc(100% - 20px);
         }

         .sd[data-s-53b38df5-93d7-476b-bda6-2d568b64a54c] {
             font-size: 14px;
         }

         .sd[data-s-005cd78e-8c51-4108-8c2b-ac8ea213a47a] {
             font-size: 32px;
         }

         .sd[data-s-c268f161-192e-49bc-bae5-831cd26fc413] {
             font-size: 24px;
             margin: 12px 0px 0px 0px;
             max-width: 100%;
         }

         .sd[data-s-191e357f-d464-4c53-8878-10740a4a7eb8] {
             font-size: 24px;
             margin: 12px 0px 0px 0px;
             max-width: 100%;
         }

         .sd[data-s-5431fa2f-020d-4ebf-b26b-64990a3d6381] {
             flex: none;
             height: auto;
             margin: 0px 24px 0px 0px;
             width: 100%;
             max-width: calc(100% - 24px);
         }



         .sd[data-s-c0b9c0e0-8df5-464b-be90-970932b4cfd2] {
             display: none;
             margin: 0px 20px 0px;
             width: calc(40% - 40px);
             max-width: calc(40% - 40px);
             height: 100%;
         }

         .sd[data-s-814e84ce-087a-4283-9e08-c914c41ddd7a] {
             margin: 0px 0px 0px;
             width: 100%;
             max-width: 100%;
             height: 100%;
         }

         .sd[data-s-ab163740-b698-4815-a66d-b49d8bbe6ba2] {
             margin: 24px 0px 0px;
             width: 100%;
             max-width: 100%;
             height: 100%;
         }

         .sd[data-s-56bb3cc6-2cfb-4030-81d8-8e2924c36099] {
             margin: 24px 0px 0px;
             width: 100%;
             max-width: 100%;
             height: 100%;
         }

         .sd[data-s-52f5ada1-f2f2-4938-a67e-ed3a1ca95bfc] {
             display: flex;
             flex: none;
             height: auto;
             margin: 24px 0px 0px 0px;
             padding: 0px 0px 0px 0px;
             width: 100%;
             max-width: 100%;
         }

         .sd[data-s-1a4a5300-0cd5-4afe-a17a-85b7fccad9e6] {
             flex-direction: column;
         }

         .sd[data-s-8c456275-d38c-4330-9861-5284c2ecf314] {
             flex-direction: column;
         }

         .sd[data-s-0e16e919-25dd-47be-9410-c87b0ca48625] {
             flex-direction: column;
             padding: 0px 5% 120px;
             margin-top: 40px;
         }

         .sd[data-s-1fefdbc9-e489-4b86-83d4-d02c074fee7d] {
             flex-direction: column;
         }

         .sd[data-s-9e377fd2-bb01-4a4a-b2c6-12fc2f4e4804] {
             flex-direction: column;
             height: 100%;
         }

         .sd[data-s-a7eb9c4b-36f0-4661-b299-7961242fd327],
         .sd[data-s-37dd72c5-a053-4a6e-b2fb-2e6425306e10],
         .sd[data-s-9fae1e38-fb2b-4bfa-93ce-3c8d1edffccd] {
             font-size: 20px;
         }
     }

     @media only screen and (max-width: 1185px) and (min-width: 840px) {
         .sd[data-s-005cd78e-8c51-4108-8c2b-ac8ea213a47a] {
             font-size: 40px;
         }

         .sd[data-s-c268f161-192e-49bc-bae5-831cd26fc413] {
             font-size: 28px;
         }

         .sd[data-s-191e357f-d464-4c53-8878-10740a4a7eb8] {
             font-size: 22px;
         }

         .sd[data-s-53b38df5-93d7-476b-bda6-2d568b64a54c] {
             font-size: 18px;
         }

         .sd[data-s-03763973-61ce-4d2d-8b23-9ebd1668a6a7] {
             width: 180px;
         }
     }
 </style>