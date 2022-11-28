<template>
  <div>
    <footer>
      <section class="bg-color">
        <div class="loopCopy isAnim anim-fadeIn inView">
          <div class="area">
            <div class="copy"></div>
          </div>
        </div>
      </section>
      <section class="mycontents-wide section-request">

        <div class="">
          <div class="contents-section">
            <div class="mb-4 contents-box pr-4">
              <div class="card">
                <div class="card-body contact-request-col">
                  <router-link to="/doc/">
                    <h4 class="request-contact-heading">
                      資料ダウンロード <br />
                      <span class="contact-col-sub-heading">ITコンサル・開発に関する資料はこちら</span>
                    </h4>
                  </router-link>
                </div>
              </div>
            </div>
            <div class="mb-4 contents-box pl-4">
              <div class="card">
                <div class="card-body contact-request-col">
                  <router-link to="/contact/" class="">
                    <h4 class="request-contact-heading">
                      お問い合わせ<br />
                      <span class="contact-col-sub-heading">仕事や見積りの依頼・取材の相談はこちら</span>
                    </h4>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="contact-main">
        <p class="content-text content-text_contact fonter-text">
          お問い合わせは企画時点からお受けしております。またこんなことが実現可能かなどITに関する相談事も受け付けています。
        </p>
        <div class="contact__btns">
          <a class="btn-wide btn-wide_call" href="https://line.me/ti/p/x16bH4B8yd" target="_blank">
            <div class="btn-wide__imgs">
              <img class="btn-wide__img" src="/public/assets/img/icons/Line-Black.png" alt="" loading="lazy">
              <img class="btn-wide__img" src="/public/assets/img/icons/Line-white.png" alt="" loading="lazy">
            </div>
            <p class="btn-wide__text btn-wide__text_call">会社LINE ID</p>
          </a>
          <a class="btn-wide btn-wide_call" href="mailto:helloworld@idenbrid.com" target="_blank">
            <div class="btn-wide__imgs">
              <img class="btn-wide__img" src="/public/assets/img/icons/Mail-Black.png " alt="" loading="lazy">
              <img class="btn-wide__img" src="/public/assets/img/icons/Mail-White.png" alt="" loading="lazy">
            </div>
            <p class="btn-wide__text btn-wide__text_call">
              helloworld@idenbrid.com
            </p>
          </a>
          <a class="btn-wide" href="skype:live:.cid.3145b74a3504693c?chat" target="_blank">
            <div class="btn-wide__imgs">
              <img class="btn-wide__img" src="/public/assets/img/icons/Skype-Black.png" alt="" loading="lazy">
              <img class="btn-wide__img" src="/public/assets/img/icons/Skype-White.png" alt="" loading="lazy">
            </div>
            <p class="btn-wide__text btn-wide__text_contact">会社Skype ID</p>
          </a>
        </div>
      </section>

      <section class="section-footer-menu">
        <div class="container pad">
          <div class="footer-menu-heading mb-4">
            <router-link to="/">
              <img src="/assets/img/logo/footer-idenbrid-logo.png" class="footer-logo" />
            </router-link>
          </div>
          <div class="footer-menu">
            <div class="foot-menu-group">
              <h4>
          
                <router-link to="/blog/">ブログ</router-link>
              </h4>
            </div>
            <div class="foot-menu-group">
              <h4>
          
                <router-link to="/policy/">経営理念</router-link>
              </h4>
            </div>
            <div class="foot-menu-group">
              <h4>
                <router-link to="/solutions/" class="">事業紹介</router-link>
         
              </h4>
            </div>
            <div class="foot-menu-group">
              <h4>
          
                <router-link to="/works/">仕事実績</router-link>
              </h4>
            </div>
            <div class="foot-menu-group">
              <h4>
          
                <router-link to="/about/">会社情報</router-link>
              </h4>
            </div>
            <div class="foot-menu-group">
              <h4>
                <router-link to="/news/" class="">お知らせ</router-link>
            
              </h4>
            </div>
          </div>
          <div class="social-links">
            <div>
              <a href="https://twitter.com/idenbridinc" target="_blank"><i class="fa fa-twitter twitter"></i></a>
            </div>
            <div>
              <a href="https://www.youtube.com/channel/UC5ENsxgAQIqVfBIMy-Fp-0w" target="_blank"><i
                  class="fa fa-youtube twitter"></i></a>
            </div>
            <div>
              <a href="https://www.linkedin.com/company/idenbrid" target="_blank"><i
                  class="fa fa-linkedin twitter"></i></a>
            </div>
            <div>
              <a href="https://www.facebook.com/idenbrid/" target="_blank"><i class="fa fa-facebook-f twitter"></i></a>
            </div>
            <div>
              <router-link to="/blog/"><i class="fa fa-file-text twitter" target="_blank"></i></router-link>
            </div>
          </div>
          <p class="copyright">
            <small>©IDENBRID INC.™, 2021. All rights reserved.</small>
          </p>
        </div>
      </section>
    </footer>
  </div>
</template>
<style>
  .loopCopy {
    width: 100%;
    overflow: hidden;
    -webkit-box-sizing: content-box;
    box-sizing: content-box;
  }

  .bg-color {
    background-color: #1a202c;
    padding: 60px 0px 0px;
  }

  .inView .isAnim.inView.anim-fadeIn,
  .inView .isAnim.inView .anim-fadeIn,
  .inView .anim-fadeIn,
  .inView.anim-fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }

  .loopCopy .area {
    white-space: nowrap;
    width: 100%;
    padding-right: 100%;
    box-sizing: content-box;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-name: ticker;
    animation-name: ticker;
    -webkit-animation-duration: 10s;
    animation-duration: 10s;
    height: 60px;
    background: url(/assets/img/footer-heading.svg) repeat-x left top/945px 65px;
  }

  @-webkit-keyframes ticker {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate(-962px, 0);
      transform: translate(-962px, 0);
    }
  }

  @keyframes ticker {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate(-962px, 0);
      transform: translate(-962px, 0);
    }
  }

  @-webkit-keyframes ticker_sp {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate(-603px, 0);
      transform: translate(-603px, 0);
    }
  }

  @keyframes ticker_sp {
    0% {
      -webkit-transform: translate(0, 0);
      transform: translate(0, 0);
      visibility: visible;
    }

    100% {
      -webkit-transform: translate(-603px, 0);
      transform: translate(-603px, 0);
    }
  }

  .anim-fadeIn {
    opacity: 1;
    -webkit-animation-duration: 0.5s;
    animation-duration: 0.5s;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
    -webkit-animation-timing-function: cubic-bezier(0.67, 0, 0.18, 1);
    animation-timing-function: cubic-bezier(0.67, 0, 0.18, 1);
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }


  footer {
    background: #1a202c;
  }

  .container-request {
    padding: 0px 74px !important;
  }

  .fonter-text {
    color: #DADADA;
  }

  .footer-logo {
    width: 20%;
    margin: auto;
    display: flex;
  }

  .col-content {
    border: 1px solid #2B2B2B;
  }

  .bnr-img {
    width: 100%;
    height: auto;
  }

  .section-request {
    padding: 80px 0px 60px;
  }

  .contact-main {
    margin-bottom: 60px;
  }

  .col-main-heading h2 {
    color: #fff;
    font-size: 40px;
  }

  .contact-request-col {
    padding: 50px 0px;
  }

  .request-contact-heading {
    font-size: 20px;
    letter-spacing: 0.1em;
    color: #DADADA;
    text-align: center;
    font-weight: 700;
    font-family: DIN-Bold;
  }

  .contact-request-col::after,
  .contact-request-col::before {
    content: "";
    background-color: #000;
    height: 1px;
    width: 40px;
    position: absolute;
    right: 6.5%;
    top: 50%;
    opacity: 0;
    transition: 0.4s ease;
  }

  .contact-request-col:hover:after,
  .contact-request-col:hover:before {
    opacity: 1;
    right: 5%;
    transition-delay: 0.2s;
  }

  .contact-request-col::before {
    transform: rotate(45deg);
    width: 10px;
    top: calc(50% - 4px);
  }

  .contact-col-sub-heading {
    font-size: 12px;
    letter-spacing: 0.06em;
    color: #DADADA;
    font-weight: 400;
    font-family: NotoSansJP-Regular;
  }

  .content-text_contact {
    font-weight: 400;
    font-family: NotoSansJP-Regular;
  }

  .section-request .card {
    border: 1px solid #ffffff;
    background: none !important;
    transition: 0.6s ease;
    cursor: pointer;
    height: 149.25px;
    border-radius: 0px;
  }

  .card:hover {
    background: #FFFFFF !important;
  }

  .card:hover .contact-col-sub-heading,
  .card:hover .request-contact-heading {
    color: #000000;
  }

  .footer-menu-heading h2 {
    text-align: center;
    color: #ffff;
  }

  .foot-menu-group {
    margin: 0px 30px 0px 0px;
  }

  .footer-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
  }

  .foot-menu-group h4 a {
    color: #DADADA;
    font-size: 14px;
    letter-spacing: 0.1em;
    font-weight: bold;
    font-family: NotoSansJP-Bold;
  }

  .social-links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    margin: 25px 0px 0px;
  }

  .twitter {
    color: #fff;
    font-size: 27px;
  }

  .copyright {
    margin-top: 40px;
    font-size: 14px;
    color: #777;
    letter-spacing: 0.18em;
    text-align: center;
    text-transform: uppercase;
    font-weight: 400;
    font-family: NotoSansJP-Regular;
  }

  .btn-wide {
    width: 100%;
    height: 85px;
    padding-top: 20px;
    margin: 0px 40px;
  }

  .contact__btns {
    padding: 0px 150px;
  }

  .content-text_contact {
    padding: 0px 30px;
  }

  @media screen and (min-width: 897px) {
    footer {
      padding: 0 0 160px;
    }
  }

  @media only screen and (max-width: 425px) {
    .footer-menu {
      flex-wrap: wrap;
      justify-content: space-around;
      width: 85%;
      column-gap: 100px;
      margin: 2px auto;
    }

    .foot-menu-group {
      margin-right: 0px;
    }

    .footer-menu-heading h2 {
      font-size: 1.7rem;
    }

    .pad {
      padding: 60px 0px !important;
    }

    .contact__btns {
      padding: 0px 15px;
    }
  }

  @media screen and (min-width: 425px) and (max-width: 767px) {
    .footer-menu {
      flex-wrap: wrap;
      justify-content: space-around;
      width: 90%;
      column-gap: 180px;
    }

    .pad {
      padding: 60px 0px !important;
    }

    .foot-menu-group {
      margin-right: 0px;
    }

    h2 {
      font-size: 1.5rem;
    }

    .contact__btns {
      padding: 0px 100px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 999px) {
    .footer-menu {
      flex-wrap: wrap;
      justify-content: space-around;
      width: 80%;
      column-gap: 230px;
    }

    .foot-menu-group {
      margin-right: 0px;
    }

    .btn-wide {
      margin: 0px 18px 30px;
    }

    .contact__btns {
      padding: 0px 100px;
    }
  }

  @media only screen and (max-width: 767px) {
    .section-request {
      display: none;
    }

    .pad {
      padding: 60px 0px !important;
    }

    .content-text_contact {
      padding: 40px 30px;
      margin: 0;
      font-size: 14px;
    }

    .btn-wide {
      margin: 0px 0px 30px;
    }
  }
</style>