<template>
    <div>
        <Navbar />
        <main>
            <div class="mv_textarea">
                <h2>
                    <strong class="en entxt">MEMBER / メンバー</strong>
                </h2>
                <p class="about-subcontents__text">個性豊かなメンバーを知ることで当社をより深く知ることができます</p>
            </div>
            <div class="member--index highlight_blk">
                <div class="member_inner">
                    <ul class="nav nav-pills mb-3 member_tab" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="pills-home-tab" data-toggle="pill"
                                data-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                aria-selected="true">全て</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-profile-tab" data-toggle="pill"
                                data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                aria-selected="false">マネジメント</button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="pills-contact-tab" data-toggle="pill"
                                data-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                aria-selected="false">エンジニア</button>
                        </li>
                    </ul>
                    <!-- <ul class="member_tab">
                        <li class="active all">全て</li>
                        <li class="senki">マネジメント</li>
                        <li class="ishou">エンジニア</li>
                        <li class="jinji">ビジネス</li>
                        <li class="kouhou">オフィス</li>
                    </ul> -->
                    <!-- <div class="member_tab_block">
                        <ul class="member_list">
                            <li class="parent_li all on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member01.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">KOHEI NISHIZAKI</p>
                                    <p class="part">代表取締役</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member02.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">RYO IKEDA</p>
                                    <p class="part">取締役</p>
                                </div>
                            </li>
                            <li class="parent_li senki on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member03.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">JUNPEI NISHIZAKI</p>
                                    <p class="part">取締役</p>
                                </div>
                            </li>
                            <li class="parent_li senki on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member04.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">TATSUHIRO MIZUKI</p>
                                    <p class="part">執行役員</p>
                                </div>
                            </li>
                            <li class="parent_li kouhou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member05.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">SUSUMU YONEMURA</p>
                                    <p class="part">メディア戦略室長</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member06.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">NAOHIRO TAKAUMA</p>
                                    <p class="part">フロントエンドエンジニア</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member07.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">KEISUKE YOSHIMOTO</p>
                                    <p class="part">アートディレクター</p>
                                </div>
                            </li>
                            <li class="parent_li senki on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member08.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">HIROYUKI FUKUNARI</p>
                                    <p class="part">ブランディング<br class="sp">プロデューサー</p>
                                </div>
                            </li>
                            <li class="parent_li senki on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member09.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">TAKASHI SHIN</p>
                                    <p class="part">ブランディング<br class="sp">プロデューサー</p>
                                </div>
                            </li>
                            <li class="parent_li jinji kouhou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member10.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">MIHO OSAKABE</p>
                                    <p class="part">広報担当</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member11.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">HIROKI NISHIKAWA</p>
                                    <p class="part">フロントエンドエンジニア</p>
                                </div>
                            </li>
                            <li class="parent_li jinji on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member12.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">AYUMI URASHITA</p>
                                    <p class="part">採用担当</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member13.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">YUJI KUMEGAWA</p>
                                    <p class="part">アートディレクター</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member15.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">WEI YEH</p>
                                    <p class="part">クリエイティブデザイナー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou none on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member16.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">KANAKO OSAKA</p>
                                    <p class="part">クリエイティブデザイナー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member17.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">YOSHIYASU YAMASHITA</p>
                                    <p class="part">クリエイティブ<br class="sp">ディレクター</p>
                                </div>
                            </li>
                            <li class="parent_li senki on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member18.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">RISA TACHIBANA</p>
                                    <p class="part">ブランディング<br class="sp">プロデューサー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member19.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">MIYU KOHARA</p>
                                    <p class="part">クリエイティブディレクター</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member20.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">MARIKA NAKAHATA</p>
                                    <p class="part">クリエイティブデザイナー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member21.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">HSU YU CHENG</p>
                                    <p class="part">クリエイティブデザイナー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou kouhou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member22.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">SYUHEI MAKIGI</p>
                                    <p class="part">コピーライター</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member23.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">YUKI MINE</p>
                                    <p class="part">クリエイティブデザイナー</p>
                                </div>
                            </li>
                            <li class="parent_li senki on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member24.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">RYO FUMIOKA</p>
                                    <p class="part">ブランディング<br class="sp">プロデューサー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member25.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">LEE SOHEE</p>
                                    <p class="part">映像クリエイター</p>
                                </div>
                            </li>
                            <li class="parent_li senki on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member26.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">REMI ONISHI</p>
                                    <p class="part">ブランディング<br class="sp">プロデューサー</p>
                                </div>
                            </li>
                        </ul>
                    </div> -->
               

                     <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade active show" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
               
                <div class="member_inner">
                    <div class="member_tab_block">
                        <ul class="member_list">
                            <li class="parent_li all on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member01.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">KOHEI NISHIZAKI</p>
                                    <p class="part">代表取締役</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member02.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">RYO IKEDA</p>
                                    <p class="part">取締役</p>
                                </div>
                            </li>
                           
                            <li class="parent_li jinji kouhou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member10.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">MIHO OSAKABE</p>
                                    <p class="part">広報担当</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member11.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">HIROKI NISHIKAWA</p>
                                    <p class="part">フロントエンドエンジニア</p>
                                </div>
                            </li>
                            <li class="parent_li jinji on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member12.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">AYUMI URASHITA</p>
                                    <p class="part">採用担当</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member13.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">YUJI KUMEGAWA</p>
                                    <p class="part">アートディレクター</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member15.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">WEI YEH</p>
                                    <p class="part">クリエイティブデザイナー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou none on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member16.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">KANAKO OSAKA</p>
                                    <p class="part">クリエイティブデザイナー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member17.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">YOSHIYASU YAMASHITA</p>
                                    <p class="part">クリエイティブ<br class="sp">ディレクター</p>
                                </div>
                            </li>
                            <li class="parent_li senki on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member18.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">RISA TACHIBANA</p>
                                    <p class="part">ブランディング<br class="sp">プロデューサー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member19.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">MIYU KOHARA</p>
                                    <p class="part">クリエイティブディレクター</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member20.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">MARIKA NAKAHATA</p>
                                    <p class="part">クリエイティブデザイナー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member21.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">HSU YU CHENG</p>
                                    <p class="part">クリエイティブデザイナー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou kouhou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member22.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">SYUHEI MAKIGI</p>
                                    <p class="part">コピーライター</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member23.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">YUKI MINE</p>
                                    <p class="part">クリエイティブデザイナー</p>
                                </div>
                            </li>
                            <li class="parent_li senki on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member24.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">RYO FUMIOKA</p>
                                    <p class="part">ブランディング<br class="sp">プロデューサー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member25.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">LEE SOHEE</p>
                                    <p class="part">映像クリエイター</p>
                                </div>
                            </li>
                            <li class="parent_li senki on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member26.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">REMI ONISHI</p>
                                    <p class="part">ブランディング<br class="sp">プロデューサー</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
              
                </div>
                <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                   
                        <div data-v-4494d8b0="" class="member_inner">
                            <div data-v-4494d8b0="" class="member_tab_block">
                                <ul data-v-4494d8b0="" class="member_list">
                                   
                                    <li data-v-4494d8b0="" class="parent_li senki on">
                                        <div data-v-4494d8b0="" class="img_box">
                                            <div data-v-4494d8b0="" class="hoverScale">
                                                <div data-v-4494d8b0="" class="thumb">
                                                    <div data-v-4494d8b0="" class="hvrtxt en"><span data-v-4494d8b0=""
                                                            class="more_txts">nspirational quotes and
                                                            business advice from uber successful CEO’s. Bookmark it now
                                                            to keep
                                                            the inspiration flowing!</span></div>
                                                    <div data-v-4494d8b0="" class="scaleImg"><img data-v-4494d8b0=""
                                                            src="https://tomorrowgate.co.jp/asset/img/member/member03.jpg"
                                                            alt=""></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-4494d8b0="" class="text_area">
                                            <p data-v-4494d8b0="" class="name en">JUNPEI NISHIZAKI</p>
                                            <p data-v-4494d8b0="" class="part">取締役</p>
                                        </div>
                                    </li>
                                    <li data-v-4494d8b0="" class="parent_li senki on">
                                        <div data-v-4494d8b0="" class="img_box">
                                            <div data-v-4494d8b0="" class="hoverScale">
                                                <div data-v-4494d8b0="" class="thumb">
                                                    <div data-v-4494d8b0="" class="hvrtxt en"><span data-v-4494d8b0=""
                                                            class="more_txts">nspirational quotes and
                                                            business advice from uber successful CEO’s. Bookmark it now
                                                            to keep
                                                            the inspiration flowing!</span></div>
                                                    <div data-v-4494d8b0="" class="scaleImg"><img data-v-4494d8b0=""
                                                            src="https://tomorrowgate.co.jp/asset/img/member/member04.jpg"
                                                            alt=""></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-4494d8b0="" class="text_area">
                                            <p data-v-4494d8b0="" class="name en">TATSUHIRO MIZUKI</p>
                                            <p data-v-4494d8b0="" class="part">執行役員</p>
                                        </div>
                                    </li>
                                    <li data-v-4494d8b0="" class="parent_li senki on">
                                        <div data-v-4494d8b0="" class="img_box">
                                            <div data-v-4494d8b0="" class="hoverScale">
                                                <div data-v-4494d8b0="" class="thumb">
                                                    <div data-v-4494d8b0="" class="hvrtxt en"><span data-v-4494d8b0=""
                                                            class="more_txts">nspirational quotes and
                                                            business advice from uber successful CEO’s. Bookmark it now
                                                            to keep
                                                            the inspiration flowing!</span></div>
                                                    <div data-v-4494d8b0="" class="scaleImg"><img data-v-4494d8b0=""
                                                            src="https://tomorrowgate.co.jp/asset/img/member/member08.jpg"
                                                            alt=""></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-4494d8b0="" class="text_area">
                                            <p data-v-4494d8b0="" class="name en">HIROYUKI FUKUNARI</p>
                                            <p data-v-4494d8b0="" class="part">ブランディング<br data-v-4494d8b0=""
                                                    class="sp">プロデューサー</p>
                                        </div>
                                    </li>
                                    <li data-v-4494d8b0="" class="parent_li senki on">
                                        <div data-v-4494d8b0="" class="img_box">
                                            <div data-v-4494d8b0="" class="hoverScale">
                                                <div data-v-4494d8b0="" class="thumb">
                                                    <div data-v-4494d8b0="" class="hvrtxt en"><span data-v-4494d8b0=""
                                                            class="more_txts">nspirational quotes and
                                                            business advice from uber successful CEO’s. Bookmark it now
                                                            to keep
                                                            the inspiration flowing!</span></div>
                                                    <div data-v-4494d8b0="" class="scaleImg"><img data-v-4494d8b0=""
                                                            src="https://tomorrowgate.co.jp/asset/img/member/member09.jpg"
                                                            alt=""></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-4494d8b0="" class="text_area">
                                            <p data-v-4494d8b0="" class="name en">TAKASHI SHIN</p>
                                            <p data-v-4494d8b0="" class="part">ブランディング<br data-v-4494d8b0=""
                                                    class="sp">プロデューサー</p>
                                        </div>
                                    </li>
                                    <li data-v-4494d8b0="" class="parent_li senki on">
                                        <div data-v-4494d8b0="" class="img_box">
                                            <div data-v-4494d8b0="" class="hoverScale">
                                                <div data-v-4494d8b0="" class="thumb">
                                                    <div data-v-4494d8b0="" class="hvrtxt en"><span data-v-4494d8b0=""
                                                            class="more_txts">nspirational quotes and
                                                            business advice from uber successful CEO’s. Bookmark it now
                                                            to keep
                                                            the inspiration flowing!</span></div>
                                                    <div data-v-4494d8b0="" class="scaleImg"><img data-v-4494d8b0=""
                                                            src="https://tomorrowgate.co.jp/asset/img/member/member18.jpg"
                                                            alt=""></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-4494d8b0="" class="text_area">
                                            <p data-v-4494d8b0="" class="name en">RISA TACHIBANA</p>
                                            <p data-v-4494d8b0="" class="part">ブランディング<br data-v-4494d8b0=""
                                                    class="sp">プロデューサー</p>
                                        </div>
                                    </li>
                                    <li data-v-4494d8b0="" class="parent_li senki on">
                                        <div data-v-4494d8b0="" class="img_box">
                                            <div data-v-4494d8b0="" class="hoverScale">
                                                <div data-v-4494d8b0="" class="thumb">
                                                    <div data-v-4494d8b0="" class="hvrtxt en"><span data-v-4494d8b0=""
                                                            class="more_txts">nspirational quotes and
                                                            business advice from uber successful CEO’s. Bookmark it now
                                                            to keep
                                                            the inspiration flowing!</span></div>
                                                    <div data-v-4494d8b0="" class="scaleImg"><img data-v-4494d8b0=""
                                                            src="https://tomorrowgate.co.jp/asset/img/member/member24.jpg"
                                                            alt=""></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-4494d8b0="" class="text_area">
                                            <p data-v-4494d8b0="" class="name en">RYO FUMIOKA</p>
                                            <p data-v-4494d8b0="" class="part">ブランディング<br data-v-4494d8b0=""
                                                    class="sp">プロデューサー</p>
                                        </div>
                                    </li>
                                    <li data-v-4494d8b0="" class="parent_li senki on">
                                        <div data-v-4494d8b0="" class="img_box">
                                            <div data-v-4494d8b0="" class="hoverScale">
                                                <div data-v-4494d8b0="" class="thumb">
                                                    <div data-v-4494d8b0="" class="hvrtxt en"><span data-v-4494d8b0=""
                                                            class="more_txts">nspirational quotes and
                                                            business advice from uber successful CEO’s. Bookmark it now
                                                            to keep
                                                            the inspiration flowing!</span></div>
                                                    <div data-v-4494d8b0="" class="scaleImg"><img data-v-4494d8b0=""
                                                            src="https://tomorrowgate.co.jp/asset/img/member/member26.jpg"
                                                            alt=""></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div data-v-4494d8b0="" class="text_area">
                                            <p data-v-4494d8b0="" class="name en">REMI ONISHI</p>
                                            <p data-v-4494d8b0="" class="part">ブランディング<br data-v-4494d8b0=""
                                                    class="sp">プロデューサー</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    
                </div>
                <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    
                <div class="member_inner">
                    <div class="member_tab_block">
                        <ul class="member_list">
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member02.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">RYO IKEDA</p>
                                    <p class="part">取締役</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member11.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">HIROKI NISHIKAWA</p>
                                    <p class="part">フロントエンドエンジニア</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member13.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">YUJI KUMEGAWA</p>
                                    <p class="part">アートディレクター</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member15.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">WEI YEH</p>
                                    <p class="part">クリエイティブデザイナー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou none on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member16.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">KANAKO OSAKA</p>
                                    <p class="part">クリエイティブデザイナー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member17.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">YOSHIYASU YAMASHITA</p>
                                    <p class="part">クリエイティブ<br class="sp">ディレクター</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member19.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">MIYU KOHARA</p>
                                    <p class="part">クリエイティブディレクター</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member20.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">MARIKA NAKAHATA</p>
                                    <p class="part">クリエイティブデザイナー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member21.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">HSU YU CHENG</p>
                                    <p class="part">クリエイティブデザイナー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou kouhou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member22.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">SYUHEI MAKIGI</p>
                                    <p class="part">コピーライター</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member23.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">YUKI MINE</p>
                                    <p class="part">クリエイティブデザイナー</p>
                                </div>
                            </li>
                            <li class="parent_li ishou on">
                                <div class="img_box">
                                    <div class="hoverScale">
                                        <div class="thumb">
                                            <div class="hvrtxt en"><span class="more_txts">nspirational quotes and
                                                    business advice from uber successful CEO’s. Bookmark it now to keep
                                                    the inspiration flowing!</span>
                                            </div>
                                            <div class="scaleImg">
                                                <img src="https://tomorrowgate.co.jp/asset/img/member/member25.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text_area">
                                    <p class="name en">LEE SOHEE</p>
                                    <p class="part">映像クリエイター</p>
                                </div>
                            </li>
                            
                        </ul>
                    </div>
               
                 </div> 
                </div>
            </div> 
                </div>
            </div>

            <section class="menu-list">
                <div class="menu-box">
                    <div class="item">

                        <router-link to="/access/" class="text"><img src="/assets/img/icons/Person-icon.svg">会社概要
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

                        <router-link to="/digitalasset/" class="text"><img
                                src="/assets/img/icons/Digital-Assets.svg">デジタルアセット</router-link>
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
                title: "開発実績 | システム開発はアイデンブリッド社 | IDENBRID INC.",
                meta: [{
                    vmid: "description",
                    name: "アイデンブリッド, アイデンブリッド社, アイデン, ウェブ, ウェブ開発, ウェブサイト, デザイン, ウェブデザイン, スマホアプリ, モバイルアプリ, LINE開発, RPA, Python, スクレイピング, IT開発, オンラインディベロップメントハブ, オンライン開発ハブ, パキスタン, オフショア開発, IDENBRID, Idenbrid, idenbrid, クラウド, ITコンサル",
                    content: "アイデンブリッド社がこれまでに担当した案件の一部を紹介致します。フロントエンドの実装はReact JS、Vue JS、HTML、BootStrap、jQueryを主軸とし、バックエンド・API開発はLaravel(PHP)、Node JS、Pythonを基本に開発を行なっています。CMSではWordPress（ワードプレス）を用いて実装を行うこともあり、プラグインの開発に特化した案件もございます。スマホアプリではFultter(Dart)でフロント実装を行い、サーバー周りはGCPまたはAWSを用いています。",
                }, ],
            };
        },
    };
</script>
<style scoped>
    .member--index {
        padding: 60px 10% 140px;

    }

    .member--index .member_inner .member_tab {
        display: flex;
    }

    ul,
    li {
        list-style: none;
    }

    .member--index .member_inner .member_tab_block .member_list {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }

    .member--index .member_inner .member_tab_block .member_list .parent_li.on {
        opacity: 1;
        transform: translateY(0%);
    }

    .member_list .hoverScale {
        cursor: pointer;
    }

    .member_list .hoverScale .thumb {
        overflow: hidden;
        position: relative;
    }

    .member_list .hoverScale:hover .thumb .hvrtxt {
        opacity: 1;
        transform: scale(1.1);
    }

    .member_list .hoverScale .thumb .hvrtxt {
        position: absolute;
        top: 50%;
        left: 40%;
        transition: 0.4s;
        transform: translate(-34%, -20%);
        opacity: 0;
        z-index: 1;
        backface-visibility: hidden;
    }

    .member_list .hoverScale .thumb .hvrtxt .more_txts {
        color: #dadada;
        font-size: 14px;
        font-family: "DIN";
        letter-spacing: 0.06em;
        text-transform: capitalize;
        position: relative;
        padding-right: 20px;
        font-weight: 700;
    }




    .member_list .hoverScale .thumb .scaleImg {
        transition: 0.4s;
        backface-visibility: hidden;
    }

    .member_list .hoverScale .thumb::after {
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

    @media screen and (min-width: 897px) {
        .member_list .hoverScale:hover .thumb::after {
            opacity: 1;
        }

        .member_list .hoverScale:hover .thumb .hvrtxt {
            transform: translate(-34%, -50%);
            opacity: 1;
            transition-delay: 0.3s;
        }

        .member_list .hoverScale:hover .thumb .hvrtxt .more_txtss::after,
        .member_list .hoverScale:hover .thumb .hvrtxt .more_txtss::before {
            right: -5px;
            transition-delay: 0.3s;
        }

        .member_list .hoverScale:hover .thumb .hvrtxt .more_txtss .underline::after {
            transform-origin: left top;
            transform: scale(1, 1);
            transition-delay: 0.3s;
        }

        .member_list .hoverScale:hover .thumb .scaleImg {
            transform: scale(1.1);
        }
    }

    .hoverScaleIcon {
        transition: 0.35s;
        display: block;
    }

    .hoverScaleIcon img {
        backface-visibility: hidden;
    }

    @media screen and (min-width: 897px) {
        .hoverScaleIcon:hover {
            transform: scale(1.2);
        }
    }

    .member--index .member_inner .member_tab_block .member_list .parent_li .text_area {
        margin-top: 20px;
    }

    .member--index .member_inner .member_tab_block .member_list .parent_li .text_area .name {
        font-size: 18px;
        font-weight: bold;
        letter-spacing: 0.05px;
        font-family: DIN-Bold;
    }

    .member--index .member_inner .member_tab_block .member_list .parent_li .text_area .part {
        letter-spacing: 0.04px;
        font-size: 13px;
        font-family: NotoSansJP-Regular;
        margin-top: 8px;
        font-weight: 400;
        color: black;
    }

    .member--index .member_inner .member_tab li {
        position: relative;
        color: #000;
        font-size: 14px;
        letter-spacing: .04em;
        cursor: pointer;
        font-family: NotoSansJP-Medium;
        line-height: 1.4;
        font-weight: 500;
    }

    .member--index .member_inner .member_tab li.active::after {
        transform-origin: left top;
        transform: scale(1, 1);
    }

    *:before,
    *:after {
        box-sizing: inherit;
    }

    .member--index .member_inner .member_tab li::after {
        content: "";
        background: #000;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: -4px;
        left: 0;
        transform: scale(0, 1);
        transition: transform 0.3s;
        transform-origin: right top;
    }

    @media screen and (min-width: 897px) {
        .member--index .member_inner .member_tab li:hover::after {
            transform-origin: left top;
            transform: scale(1, 1);
        }
    }

    .hoverScaleIcon {
        transition: 0.35s;
        display: block;
    }

    .hoverScaleIcon img {
        backface-visibility: hidden;
    }

    img {
        max-width: 100%;
        height: auto;
        vertical-align: bottom;
    }



    .member--index .member_inner .member_tab_block .member_list .parent_li {
        transition: 0.3s;
        transform: translateY(2%);
        opacity: 0;
        margin-top: 60px;
        width: 19%;
        margin-right: 1%;
    }
    .nav-pills .nav-link.active{
        background: transparent;
        color: #000;
    }
    @media screen and (min-width: 897px) {
        .member--index .member_inner .member_tab li:not(:last-child) {
            margin-right: 30px;
        }
    }

    @media screen and (max-width: 896px) {
        .member--index {
            padding: 40px 5% 80px;
        }

        .member--index .member_inner .member_tab {
            justify-content: space-between;
            flex-wrap: wrap;
        }

        .member--index .member_inner .member_tab li {
            width: 48%;
            padding-left: 10px;
            margin-bottom: 20px;
        }

        .member--index .member_inner .member_tab li::before {
            content: "";
            width: 100%;
            height: 1px;
            background: #dadada;
            position: absolute;
            bottom: -5px;
            left: 0;
        }

        .member--index .member_inner .member_tab_block .member_list {
            justify-content: space-between;
        }

        .member--index .member_inner .member_tab_block .member_list .parent_li {
            margin-top: 50px;
            width: 48%;
            margin-right: 0%;
        }

        .member--index .member_inner .member_tab_block .member_list .parent_li .text_area .name {
            font-size: 14px;
        }

        .member--index .member_inner .member_tab_block .member_list .parent_li .text_area .part {
            font-size: 12px;
            margin-top: 10px;
            line-height: 1.5;
        }
    }
</style>