<template>
  <div>
    <Navbar />
    <div class="mv_textarea">
      <h2>
        <strong class="en entxt">CONTACT US / お問い合わせ</strong>
        <span class="jptxt">IDENBRIDに対してのお仕事・お見積りに関して問い合わせができます。</span>
      </h2>
    </div>
    <main>
      <!-- <h2 class="hero">CONTACT</h2>
    <section class="mycontents-wide">
        <p class="contact-text">
            当社に関心を持って頂きまして誠にありがとうございます。<br/>頂きましたお問い合わせは３営業日以内に返信させて頂きます。<br/>皆様からのご相談やお見積もりのお願いお待ちしております。
        </p>

        <div class="contact">
            <div id="mw_wp_form_mw-wp-form-1227" class="mw_wp_form mw_wp_form_input  ">
					<div class=" success-message w-50 m-auto" v-if="status == true">
                    <div class="alert alert-success text-center">送信に成功しました</div>
                    </div>
                    <form>

                        <table>
<tbody>
<tr class="company">
<th><label> 会社名</label></th>
<td>
<input type="text" name="company" v-model="form.company_name" class="hide-input" size="60" value="" placeholder="会社名を記入して下さい" />

</td>
</tr>
<tr class="company">
<th class="mast"><label> お名前</label></th>
<td>
<input type="text" name="your-name" v-model="form.name" class="full_name" size="60" value="" placeholder="お名前を記入して下さい" />
<div v-if="errors.name" class="text-danger">こちらは必須項目です。</div>
<div v-if="error.name == 'true'" class="text-danger">こちらは必須項目です。</div>


</td>
</tr> -->
      <!--<tr class="tell">
<th><label>電話番号</label></th>
<td>
<span class="mwform-tel-field">
	<input type="text" name="tel[data][0]" class="hide-input" size="6" maxlength="5" value="" data-conv-half-alphanumeric="true" />
	-	<input type="text" name="tel[data][1]" class="hide-input" size="5" maxlength="4" value="" data-conv-half-alphanumeric="true" />
	-	<input type="text" name="tel[data][2]" class="hide-input" size="5" maxlength="4" value="" data-conv-half-alphanumeric="true" />
</span>

<input type="hidden" name="tel[separator]" value="-" />
</td>
</tr>-->
      <!-- <tr class="mail">
<th class="mast"><label>メールアドレス</label></th>
<td>
<input type="email" v-model="form.email" name="mail" size="60" value="" data-conv-half-alphanumeric="true" placeholder="メールアドレスを記入して下さい"/>
<div v-if="errors.email" class="text-danger">こちらは必須項目です。</div>
<div v-if="error.email == 'true'" class="text-danger">こちらは必須項目です。</div>


</td>
</tr>
<tr class="body">
<th class="mast"><label> お問い合わせ内容</label></th>
<td>
<textarea name="other" v-model="form.inquiry" cols="50" rows="5" placeholder="どのような事でもお気軽にご相談ください"></textarea>
<div v-if="errors.inquiry" class="text-danger">こちらは必須項目です。</div>
<div v-if="error.inquiry == 'true'" class="text-danger">こちらは必須項目です。</div>


</td>
</tr>
</tbody>
</table>
<p class="privacy-check">

	<span class="mwform-checkbox-field horizontal-item">
		<label >
			<input type="checkbox" name="t_c" v-model="form.t_c" value="1" />
			<span class="mwform-checkbox-field-text"><router-link to="/privacypolicy/">個人情報保護方針</router-link>に同意しますか？</span>
		</label>
        <div v-if="errors.t_c" class="text-danger">こちらは必須項目です。</div>
        <div v-if="error.t_c == true" class="text-danger">こちらは必須項目です。</div>


	</span>


</p>
<div class="submit-btn col-md-6 m-auto"> -->
      <!--<a href="#" class="btn-download mr-2 mt-4"> <i class="mr-1 fa fa-download" aria-hidden="true"></i>Download</a>-->
      <!-- <button v-if="form.t_c == true" type="button" @click="checkError"  class="btn mt-4 confirmation-btn">確認画面</button>
<button v-else type="button" disabled class="btn mt-4 confirmation-btn" data-toggle="modal" data-target="#confirmationmodel">確認画面</button>




</div> -->
      <!-- Modal -->
      <!-- <div class="modal fade confirmationmodel" id="confirmationmodel" tabindex="-1" role="dialog" aria-labelledby="confirmationmodelTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
    <div class="modal-content">

      <div class="modal-body p-5">
          <div class="d-flex company-name">
                  <label class="w-50 font-weight-bold ">会社名</label><p class="w-75">{{form.company_name}}</p>
          </div>
          <div class="d-flex name">
                  <label class="w-50 font-weight-bold ">お名前</label><p class="w-75">{{form.name}}</p>
          </div>
           <div class="d-flex mail-address">
                  <label class="w-50 font-weight-bold ">メールアドレス</label><p class="w-75">{{form.email}}</p>
          </div>
          <div class="d-flex mail-address">
                  <label class="w-50 font-weight-bold ">お問い合わせ内容</label><p class="w-75">{{form.inquiry}}</p>
          </div>
      </div>
      <div class="modal-footer justify-content-center">
        <button type="button" @click="hide" class="viewmore-btn viewmore-btn_white" data-dismiss="modal">修正する</button>
        <button @click.prevent="sendMail"  class="btn confirmation-btn" name="submitConfirm" value="送信" >送信</button>

      </div>

    </div>
  </div>

</div>

</form>
				</div>        </div>
    </section> -->
      <!-- end .mw_wp_form -->
      <!-- <section class="menu">
    <ul class="menu-contents mycontents-wide">
        <li class="menu-contents__list">
            <router-link to="/about/">
                <img class="menu-contents__list__thumbnail" src="/public/assets/img/icons/company.svg" alt="" loading="lazy">
                <div class="menu-contents__list__text">
                    <p class="menu-contents__list__subtitle">会社概要</p>
                    <h4 class="menu-contents__list__title">COMPANY</h4>
                </div>
            </router-link>
        </li>
        <li class="menu-contents__list">
            <router-link to="/blog/">
                <img class="menu-contents__list__thumbnail menu-contents__list__thumbnail_news" src="/public/assets/img/icons/WWW.png" alt="" loading="lazy">
                <div class="menu-contents__list__text">
                    <p class="menu-contents__list__subtitle">お知らせ</p>
                    <h4 class="menu-contents__list__title">BLOG</h4>
                </div>
            </router-link>
        </li>
        <li class="menu-contents__list">
            <router-link to="/onlinedevelopmenthub/">
                <img class="menu-contents__list__thumbnail" src="/public/assets/img/icons/Partnership.png" alt="" loading="lazy">
                <div class="menu-contents__list__text">
                    <p class="menu-contents__list__subtitle">オンライン開発ハブ</p>
                    <h4 class="menu-contents__list__title">DEVELOPEMENT</h4>
                </div>
            </router-link>
        </li>
    </ul>
</section> -->
      <div class="mycontents-wides">
        <div class="contents anim-fadeInUp delay1">
          <div class="tableWrap">
            <div class="readCopyWrap">
              <div class="readCopy">
                お問い合わせ<br>以下のフォームにご入力の上、送信をお願いします。<small>（<strong class="f_def">※</strong>は必須項目です）</small>
              </div>
            </div>
            <div class="row">
              <div class="col-md-8 primary-contact-form contact">
                <div class="row m-0">
                  <div class="col-md-12">
                    <form @submit.prevent="sendMail" class="form" id="pardot-form">
                      <div class="form-group row form-field  Inquiry_type pd-select required   ">
                        <div class="formHeading col-md-3">
                          <label class="field-label col-form-label" for="880722_2634pi_880722_2634">お問い合わせ種類</label>
                        </div>
                        <div class="col-md-8">
                          <div class="formInputOuter  Inquiry_type">
                            <div class="formInputInner  Inquiry_type ">
                              <select v-model="form.inquiry_type" name="880722_2634pi_880722_2634" id="880722_2634pi_880722_2634" class="select form-control" onchange="">
                                <option value="" selected="selected">下記よりお選びください</option>
                                <option value="13990">IT開発の外注先を探している</option>
                                <option value="13992">プロジェクト案件の見積もりが欲しい</option>
                                <option value="13994">ビジネス協業をしたい</option>
                                <option value="13996">採用について</option>
                                <option value="13996">取材や会社について問い合わせ</option>
                              </select>
                              <div id="error_for_880722_2634pi_880722_2634" style="display:none"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row form-field  company-main pd-text    ">
                        <div class="formHeading  col-md-3">
                          <label class="field-label col-form-label" for="880722_2254pi_880722_2254">御社名</label>
                        </div>
                        <div class="col-md-8">
                          <div class="formInputOuter  company-main">
                            <div class="formInputInner  company-main ">
                              <input v-model="form.company_name" type="text" name="880722_2254pi_880722_2254" id="880722_2254pi_880722_2254" value="" class="text text form-control" size="30" maxlength="255" onchange="" onfocus="">
                              <div id="error_for_880722_2254pi_880722_2254" style="display:none"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row form-field  website pd-text    ">
                        <div class="formHeading col-md-3">
                          <label class="field-label col-form-label" for="880722_2636pi_880722_2636">URL</label>
                        </div>
                        <div class="col-md-8">
                          <div class="formInputOuter  website">
                            <div class="formInputInner  website ">
                              <input v-model="form.url" type="text" name="880722_2636pi_880722_2636" id="880722_2636pi_880722_2636" value="" class="text text form-control" size="30" maxlength="255" onchange="" onfocus="">
                              <div id="error_for_880722_2636pi_880722_2636" style="display:none"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row form-field  last_name pd-text required   ">
                        <div class="formHeading col-md-3">
                          <label class="field-label col-form-label" for="880722_2258pi_880722_2258">お名前</label>
                        </div>
                        <div class="col-md-8">
                          <div class="formInputOuter  last_name">
                            <div class="formInputInner  last_name ">
                              <input v-model="first_name" type="text" name="880722_2258pi_880722_2258" id="880722_2258pi_880722_2258" value="" class="text text form-control" size="30" maxlength="80" onchange="" onfocus="" placeholder="鈴木">
                              <div id="error_for_880722_2258pi_880722_2258" style="display:none"></div>
                            </div>
                            <div class="formInputInner  first_name ">
                              <input v-model="last_name" type="text" name="880722_2256pi_880722_2256" id="880722_2256pi_880722_2256" value="" class="text text form-control" size="30" maxlength="40" onchange="" onfocus="" placeholder="一郎">
                              <div id="error_for_880722_2256pi_880722_2256" style="display:none"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row form-field  email pd-text required   ">
                        <div class="formHeading col-md-3">
                          <label class="field-label col-form-label" for="880722_2260pi_880722_2260">メール</label>
                        </div>
                        <div class="col-md-8">
                          <div class="formInputOuter  email">
                            <div class="formInputInner  email ">
                              <input v-model="form.email" type="text" name="880722_2260pi_880722_2260" id="880722_2260pi_880722_2260" value="" class="text text form-control" size="30" maxlength="255" onchange="" onfocus="" placeholder="sample@xxx.co.jp">
                              <div id="error_for_880722_2260pi_880722_2260" style="display:none"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row form-field  phone pd-text required   ">
                        <div class="formHeading col-md-3">
                          <label class="field-label col-form-label" for="880722_2638pi_880722_2638">電話番号</label>
                        </div>
                        <div class="col-md-8">
                          <div class="formInputOuter  phone">
                            <div class="formInputInner  phone ">
                              <input v-model="form.phone_number" type="text" name="880722_2638pi_880722_2638" id="880722_2638pi_880722_2638" value="" class="text text form-control" size="30" maxlength="40" onchange="" onfocus="" placeholder="0000000000">
                              <div id="error_for_880722_2638pi_880722_2638" style="display:none"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row form-field  Contact_Us pd-textarea required   ">
                        <div class="formHeading col-md-3">
                          <label class="field-label col-form-label" for="880722_2640pi_880722_2640">お問い合わせ内容</label>
                        </div>
                        <div class="col-md-8">
                          <div class="formInputOuter  Contact_Us">
                            <div class="formInputInner  Contact_Us ">
                              <textarea v-model="form.summary" name="880722_2640pi_880722_2640" id="880722_2640pi_880722_2640" onchange="" cols="40" rows="10" class="form-control" placeholder="ご記入ください"></textarea>
                              <div id="error_for_880722_2640pi_880722_2640" style="display:none"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row form-field  CustomObject1607489477990 pd-select required   ">
                        <div class="formHeading col-md-3">
                          <label class="field-label col-form-label" for="880722_23336pi_880722_23336">当社を知ったきっかけ</label>
                        </div>
                        <div class="col-md-8">
                          <div class="formInputOuter  CustomObject1607489477990">
                            <div class="formInputInner  CustomObject1607489477990 ">
                              <select v-model="form.source" name="880722_23336pi_880722_23336" id="880722_23336pi_880722_23336" class="select form-control" onchange="">
                                <option value="" selected="selected">下記よりお選びください</option>
                                <option value="396408">ご紹介</option>
                                <option value="396410">SNS</option>
                                <option value="396412">ブログ</option>
                                <option value="396414">営業担当者より</option>
                                <option value="396416">送信されたメール</option>
                                <option value="963092">ウェブ検索</option>
                                <option value="963094">その他</option>
                              </select>
                              <div id="error_for_880722_23336pi_880722_23336" style="display:none"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-group row form-field  privacy_policy pd-checkbox required   ">
                        <!-- <div class="formHeading col-md-3">
                          <label class="field-label col-form-label" for="880722_2642pi_880722_2642">プライバシーポリシー</label>
                        </div> -->
                        <div class="col-md-10">
                          <div class="formInputOuter  privacy_policy">
                            <div class="formInputInner  privacy_policy ">
                             
                              <p class="description">
                                <label for="agreecheck">
                                  <router-link to="/privacypolicy" target="_top">
                                    プライバシーポリシー</router-link>
                                  をよくお読みの上、問題なければチェックしてください
                                </label>
                              </p>
                              <span class="value"><span>
                                  <input v-model="agree" type="checkbox" name="880722_2642pi_880722_2642_13998" id="880722_2642pi_880722_2642_13998" value="13998" onchange="">
                                  <label class="inline" for="880722_2642pi_880722_2642_13998">同意する</label>
                                </span>
                              </span>
                              <div id="error_for_880722_2642pi_880722_2642" style="display:none"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- forces IE5-8 to correctly submit UTF8 content -->
                      <input name="_utf8" type="hidden" value="☃">
                      <div class="contentFormAfter"></div>
                      <p class="submit d-flex justify-content-center">
                        <input type="submit" class="btn btn-lg btn btn-lg btn-contact" accesskey="s" value="送信する">
                      </p>
                      <input type="hidden" name="hiddenDependentFields" id="hiddenDependentFields" value="">
                    </form>
                  </div>
                </div>
              </div>
              <div class="col-md-6 mx-auto">
                <img src="/assets/img/contact-us.png" width="100%">
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
        title: "日本とパキスタンでIT受託開発・ラボ型開発 | IDENBRID / アイデンブリッド | 問い合わせ",
        meta: [{
          vmid: "description",
          name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
          content: "IDENBRID/アイデンブリッドは日本及びパキスタンにてIT受託開発を行なっているグローバル企業です。ウェブシステムやiOS・Androidのモバイルアプリを初め、ワンストップにてシステム設計、要件定義、UIUXデザイン、ウェブ開発、アプリ開発、クラウドまで一社完結にて対応しています。オフショア開発のみでなく、日本国内でもIT開発を行なっており、スタートアップから東証プライム上場企業まで幅広いクライアントの開発を支えています。",
        }, ],
      };
    },
    data() {
      return {
        form: {
          //   company_name: '',
          //   name: '',
          //   email: '',
          //   inquiry: '',
          //   t_c: '',
          inquiry_type: '',
          company_name: '',
          url: '',
          name: '',
          email: '',
          phone_number: '',
          summary: '',
          source: '',
        },
        first_name: '',
        last_name: '',
        agree: '',
        errors: [],
        status: false,
        error: {
          name: '',
          email: '',
          inquiry: '',
          t_c: ''
        }
      }
    },
    methods: {
      sendMail() {
        if (this.agree) {
          this.form={
            ...this.form,
            name: `${this.first_name} ${this.last_name}`
          }
          axios.post('/api/contact-us', this.form).then((res) => {
            this.inquiry_type = '',
              this.company_name = '',
              this.url = '',
              this.name = '',
              this.email = '',
              this.phone_number = '',
              this.summary = '',
              this.source = '',
              this.errors = [];
            this.successMessage();
            jQuery('#confirmationmodel').modal('hide');
          }).catch((err) => {
            this.errors = err.response.data.errors;
            jQuery('#confirmationmodel').modal('hide');
          });
        } else {
          alert("全ての項目をご記入ください。")
        }
      },
      successMessage() {
        this.status = true;
        jQuery('.alert-success').fadeOut(2000);
      },
      checkError() {
        if (this.form.email == '' && this.form.name == '' && this.form.inquiry == '') {
          this.error.email = 'true';
          this.error.inquiry = 'true';
          this.error.name = 'true';
          // this.error.t_c == true;
        } else {
          jQuery('#confirmationmodel').modal('show');
          this.error.email = '';
          this.error.inquiry = '';
          this.error.name = '';
        }

      },
      hide() {
        jQuery('#confirmationmodel').modal('hide');
      }
    },
    mounted() {

    }

  };
</script>
<style>
  .mycontents-wides {
    padding: 60px 10% 120px;
  }

  .btn-contact {
    background: var(--textcolor);
    border-radius: 5px;
    box-shadow: 0px 0px 0px 0px rgb(0 0 0 / 20%);
    color: #fff;
    flex: none;
    font-size: 15px;
    height: 60px;
    justify-content: center;
    margin: 24px 0px 0px 0px;
    opacity: 1;
    padding: 15px;
    width: 40%;
    max-width: 100%;
  }

  .btn-contact:hover {
    color: #fff
  }

  .contents {
    margin-top: 60px;
    margin-bottom: 60px;
  }

  .readCopy {
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0em;
    color: #000;
    text-align: center;
    margin-bottom: 30px;
  }

  .readCopy small {
    display: block;
    font-size: 15px;
    line-height: 1.8666666667;
    letter-spacing: 0em;
  }

  .readCopy small strong {
    color: #e60039;
  }

  .btn-download {
    position: relative;
    display: flex;
    width: 50%;
    height: 40px;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-weight: bold;
    font-size: 14px;
    color: #FFFFFF;
    background: var(--textcolor);
    box-shadow: 0px 4px 7px rgb(0 0 0 / 15%);
    border-radius: 30px;
  }

  .contact-text {
    margin-top: 0px;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #333333;
  }

  @media (max-width: 767px) {
    .contact-text {
      margin-top: -32px;
      margin-bottom: 30px;
      font-size: 15px;
      line-height: 22px;
    }
  }

  .contact {
    padding-top: 60px;
    padding-bottom: 60px;
    margin-bottom: 120px;
    background: #FFFFFF;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 20px;
  }

  .contact table {
    margin: 0 auto;
    width: 630px;
    border-collapse: separate;
    border-spacing: 0 30px;
    margin-bottom: 30px;
    /*60 - 30*/
  }

  .contact th {
    display: inline-block;
    width: 170px;
  }

  .contact th label {
    font-size: 16px;
    line-height: 154.7%;
    line-height: 40px;
    letter-spacing: 0.05em;
  }

  .contact td {
    display: inline-block;
    width: calc(100% - 170px);
  }

  .contact .company-main input,
  .contact .name input,
  .contact .mail input,
  .contact .tell input {
    padding: 0 15px;
    line-height: 40px;
    background: #FFFFFF;
    border: 1px solid #727171;
    box-sizing: border-box;
    border-radius: 3px;
    width: 100%;
  }

  .contact .name input {
    width: calc((100% - 30px) / 2);
    display: inline-block;
  }

  .contact .name td {
    position: relative;
  }

  .mw_wp_form_confirm td {
    padding-top: 7px;
  }

  .contact .name td input:last-child {
    position: absolute;
    top: 0;
    right: 0;
  }

  .contact .body textarea {
    padding: 15px;
    width: 100%;
    height: 230px;
    line-height: 25px;
    background: #FFFFFF;
    border: 1px solid #727171;
    box-sizing: border-box;
    border-radius: 3px;
  }

  .contact .company-main input,
  .contact .name input,
  .contact .mail input,
  .contact .tell input {
    height: 40px;
  }

  .contact input {
    display: block;
  }

  .contact .mast {
    position: relative;
  }

  .contact .mast::before {
    content: "必須";
    display: inline-block;
    position: absolute;
    width: 46px;
    height: 28px;
    top: 6px;
    left: -76px;
    background: #333333;
    border-radius: 3px;
    font-weight: 500;
    font-size: 12px;
    line-height: 28px;
    color: #FFFFFF;
    text-align: center;
  }

  .mw_wp_form_confirm .mast::before {
    display: none;
  }

  .mw_wp_form_confirm .privacy-check {
    display: none;
  }

  .privacy-check {
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    color: var(--textcolor);
  }

  .privacy-check a {
    text-decoration: underline;
  }

  .privacy-check label {
    display: inline-block;
    margin-top: 12px;
  }

  .mwform-checkbox-field input {
    display: inline-block;
  }

  .submit-btn {
    display: flex;
    justify-content: center;
  }

  .viewmore-btn_white {
    background-color: #fff !important;
    color: var(--textcolor) !important;
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15) !important;
  }

  .confirmation-btn {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 240px;
    text-align: center;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: 0.1em;
    color: #FFFFFF;
    background: var(--textcolor);
    box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    height: 60px;
  }

  .confirmation-btn:hover {
    color: #fff;
  }

  .confirmation-btn::after {
    position: absolute;
    content: "";
    display: inline-block;
    height: 40px;
    width: 40px;
    top: 10px;
    right: 8px;

  }

  .submit-btn br {
    display: none;
  }

  .mw_wp_form_confirm .submit-btn {
    display: flex;
    justify-content: center;
  }

  .mw_wp_form_confirm .submit-btn input:first-child {
    margin: 0;
  }

  .mw_wp_form_confirm .submit-btn input:last-child {
    margin-right: 0;
    margin-left: 60px;
  }




  @media (max-width: 1000px) {

    table,
    tbody,
    tr,
    th,
    td {
      display: block;
    }

    .contact table {
      margin: 0 auto;
      max-width: 600px;
      width: 100%;
      padding-left: 14px;
      padding-right: 14px;
      -webkit-appearance: none;
      -webkit-text-size-adjust: 100%;
    }

    .contact th,
    .contact td {
      -webkit-appearance: none;
      -webkit-text-size-adjust: 100%;
      display: block;
      width: 100%;
    }

    .contact th {
      margin-top: 30px;
      height: 32px;
    }

    .contact th label {
      font-size: 14px;
      line-height: 24px;
    }

    .mast {
      padding-left: 54px;
    }

    .contact .mast::before {
      width: 42px;
      height: 24px;
      line-height: 24px;
      left: 0;
      top: 0;
    }

    .contact .name input {
      width: 100%;
      position: relative !important;
      -webkit-appearance: none;
    }

    .contact .name td input:first-child {
      margin-bottom: 10px;
    }

    .mw_wp_form_confirm .mast {
      padding-left: 0;
    }

    .contact .company-main input,
    .contact .name input,
    .contact .mail input,
    .contact .tell input {
      -webkit-appearance: none;
      height: 50px;
      font-size: 14px;
      line-height: 21px;
      padding-left: 12px;
      padding-right: 12px;
    }

    .contact .body textarea {
      -webkit-appearance: none;
      padding: 14px 12px;
      font-size: 14px;
      line-height: 22px;
      color: #727171;
    }

    .mw_wp_form_confirm .submit-btn {
      display: block;
      margin-top: 20px;
      /*50 - 30*/
    }

    .mw_wp_form_confirm .submit-btn input:first-child {
      -webkit-appearance: none;
      margin: 0 auto 30px auto;
    }

    .mw_wp_form_confirm .submit-btn input:last-child {
      -webkit-appearance: none;
      margin: 0 auto;
    }

    .privacy-check {
      margin-top: 30px;
    }
  }

  @media (max-width: 500px) {
    .privacy-check {
      width: calc(100% - 30px);
      margin: 30px auto 0 auto;
      text-align: left;
    }

    .privacy-check .mwform-checkbox-field {
      text-align: center;
      display: block;
    }
  }

  .mw_wp_form_complete {
    margin-bottom: 120px;
    text-align: center;
  }

  .mw_wp_form_complete .complete-text {
    margin-bottom: 120px;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.05em;
    color: var(--textcolor);
  }

  .viewmore-btn__img {

    background-size: cover;
  }


  @media (max-width: 767px) {
    .mw_wp_form_complete {
      margin-bottom: 60px;
    }

    .mw_wp_form_complete .complete-text {
      margin-bottom: 50px;
      font-size: 15px;
      line-height: 22px;
    }
  }

  /*menu*/

  .menu {
    margin-bottom: 0;
  }

  .contact .entry_job select,
  .contact .entry_category select,
  .contact .year select {
    padding: 0 15px;
    line-height: 40px;
    background: #FFFFFF;
    border: 1px solid #727171;
    box-sizing: border-box;
    border-radius: 3px;
    width: 100%;
  }

  .select-contents {
    position: relative;
  }

  .year .select-contents {
    width: calc((100% - 80px) /2);
    display: inline-block;
  }

  .year p {
    display: inline-block;
    line-height: 100%;
    font-weight: 500;
    font-size: 16px;
  }

  .year td p:nth-child(3) {
    margin-right: 30px;
  }

  .select-contents::before {
    position: absolute;
    content: "â–¼";
    font-size: 8px;
    top: 16px;
    right: 16px;
    color: var(--textcolor);
  }

  .mw_wp_form_confirm .select-contents::before {
    display: none;
  }

  .mw_wp_form_confirm .select-contents {
    display: inline;
  }



  [type="file"] {
    display: none !important;
  }



  .mwform-file-delete {
    position: absolute;
    left: 0;
    top: 9px;
  }

  .file__name {
    display: inline-block;
    margin-left: 15px;
    line-height: 40px;
  }

  .file__text {
    margin-top: 10px;
    font-size: 12px;
    line-height: 19px;
    color: var(--textcolor);
  }

  .mw_wp_form_confirm .file__name {
    margin-left: 0;
  }

  .mw-wp-form_file {
    left: 0;
    position: absolute;
    display: inline-block;
    text-align: left;
    line-height: 40px;
    height: 40px;
    font-size: 16px;
    background-color: #fff;
    color: var(--textcolor);
  }

  .mw_wp_form_confirm .file__text {
    display: none;
  }

  .mw_wp_form_complete {
    margin-top: -120px;
    margin-bottom: -60px;
  }

  .mw_wp_form_complete .viewmore-btn__img {
    background-image: none;
  }

  @media (max-width: 767px) {
    .mw_wp_form_complete {
      margin-top: -90px;
      margin-bottom: -120px;
    }

  }









  .form-group.privacy_policy {
    flex-flow: column wrap;
  }

  .form-group.privacy_policy .formHeading {
    margin-bottom: 10px;
  }

  .form-group.privacy_policy .col-sm-9,
  .form-group.privacy_policy .formHeading {
    width: 100%;
    max-width: 1100px;
    text-align: center;
  }

  .btn-primary {
    line-height: 3;
    padding: 0;
    color: #fff;
    border-color: #e60039;
    border-radius: 32px;
    background-color: #e60039;
    font-size: 20px;
    width: 368px;
  }

  .form-group:after {
    display: block;
    margin: 0 15px 15px 15px;
    padding-bottom: 20px;
    height: auto;
    width: auto;
    border-bottom: dotted 1px #CCC;
  }

  .form-group:after {
    margin: 0;
    padding-bottom: 15px;
    border: none;
    flex: 0 0 100%;
  }

  .btn-primary:active,
  .btn-primary:focus,
  .btn-primary:hover {
    transition: .2s;
    color: #e60039;
    border-color: #e60039;
    border-radius: 32px;
    background-color: #fff;
  }

  .formInputOuter span.value span {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1em;
  }

  .privacy_policy .value {
    display: flex;
    justify-content: center;
  }

  .formInputOuter label {
    margin-left: 3px;
    font-weight: normal;
    margin-bottom: 0px;
  }

  .formInputInner p.description {
    font-size: 15px;
    margin: 7px 0 0 0;
  }

  form.form p label {
    color: #000000;
  }

  .privacy_policy {
    text-align: center;
  }

  .privacy_policy a {
    text-decoration: underline;
    color: #000;
  }

  .formInputOuter {
    display: inline-block;
    width: 100%;
  }

  .formInputInner.last_name,
  .formInputInner.first_name,
  .formInputInner.last_kana,
  .formInputInner.first_kana {
    display: block;
    float: left;
    width: 50%;
  }

  .formInputInner.last_name,
  .formInputInner.last_kana,
  .formInputInner.last_name p.description,
  .formInputInner.last_kana p.description {
    padding-right: 5px;
  }

  input[type=text].form-control:focus,
  select.form-control:focus,
  textarea.form-control:focus {
    box-shadow: none;
    background-color: #f5f5f5;
  }

  .primary-contact-form {
    margin: 0 auto 30px;
  }

  .form-group {
    flex-flow: row wrap;
    align-items: center;
    margin-bottom: 15px;
    display: flex;
  }

  .formHeading {
    margin-bottom: 0;
    text-align: right;
    margin-bottom: 10px;
  }

  .required .formHeading:before {
    display: inline-block;
    padding: 0;
    content: '※';
    color: #e60039;
  }

  .formHeading label {
    font-weight: 700;
    margin-bottom: 0;
    font-size: 12px;
  }

  .formInputOuter {
    display: inline-block;
    width: 100%;
  }

  input[type=text].form-control:focus,
  select.form-control:focus,
  textarea.form-control:focus {
    box-shadow: none;
  }

  input[type=text].form-control,
  select.form-control,
  textarea.form-control {
    padding: 7px 14px;
    border: none;
    border-radius: 0;
    background-color: #f5f5f5;
    box-shadow: none;
  }

  .formInputInner input,
  .formInputInner select,
  .formInputInner textarea {
    color: #1e1e1e !important;
  }

  @media screen and (max-width: 767px) {
    .contact {
      padding-top: 20px;
      padding-bottom: 20px;
    }

    .primary-contact-form {
      width: 100%;
    }

    .form-group {
      flex-flow: column wrap;
      text-align: left;
    }

    .formHeading {
      text-align: left;
    }

    .contents {
      margin: 0px;
    }
  }
</style>