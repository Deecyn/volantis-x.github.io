var Debounce=(t,e)=>{const o=e||25;let n;return function(){const e=arguments;n&&clearTimeout(n),n=setTimeout(()=>{n=null,t.apply(this,e)},o)}};!function(t){volantis.$.bodyAnchor=t("#safearea"),volantis.$.topBtn=t("#s-top"),volantis.$.wrapper=t("#wrapper"),volantis.$.postsBtn=t(".menu .active","#l_header,#l_cover"),volantis.$.titleBtn=t("h1.title","#header-meta"),volantis.$.coverAnchor=t("#l_cover .cover-wrapper"),volantis.$.switcher=t("#l_header .switcher .s-search"),volantis.$.header=t("#l_header"),volantis.$.search=t("#l_header .m_search"),volantis.$.mPhoneList=t("#l_header .m-phone .list-v");var e=80;function o(o,n=e){const a=o.href?t(decodeURI(o.getAttribute("href"))):t(o);window.scrollTo({top:a.offset().top-n,behavior:"smooth"})}function n(){volantis.$.postsBtn.length&&volantis.$.bodyAnchor&&volantis.$.postsBtn.click(t=>{t.preventDefault(),t.stopPropagation(),"/"!=volantis.$.postsBtn.attr("href")&&o(volantis.$.bodyAnchor),t.stopImmediatePropagation(),volantis.$.postsBtn.unbind("click")}),volantis.$.titleBtn.length&&volantis.$.bodyAnchor&&volantis.$.titleBtn.click(t=>{t.preventDefault(),t.stopPropagation(),o(volantis.$.bodyAnchor),t.stopImmediatePropagation(),volantis.$.titleBtn.unbind("click")}),volantis.$.topBtn.length&&volantis.$.bodyAnchor&&volantis.$.topBtn.click(t=>{t.preventDefault(),t.stopPropagation(),o(volantis.$.bodyAnchor),t.stopImmediatePropagation()});var n=volantis.$.bodyAnchor.offset().top-e,a=document.body.scrollTop;t(document,window).scroll(Debounce(()=>{const e=t(window).scrollTop(),o=e-a;a=e,e>volantis.$.bodyAnchor.offset().top?(volantis.$.topBtn.addClass("show"),o>0?volantis.$.topBtn.removeClass("hl"):volantis.$.topBtn.addClass("hl")):volantis.$.topBtn.removeClass("show").removeClass("hl"),e-n>-1?volantis.$.header.addClass("show"):volantis.$.header.removeClass("show")}))}function a(){if(!pdata.ispage)return;volantis.$.comment=t("#s-comment"),volantis.$.toc=t("#s-toc"),volantis.$.commentTarget=t("#l_body article#comments"),volantis.$.wrapper.find(".nav-sub .title").html(pdata.postTitle);let e=document.body.scrollTop;t(document,window).scroll(Debounce(()=>{const o=t(window).scrollTop(),n=o-e;n>=50&&o>100?(e=o,volantis.$.wrapper.addClass("sub")):n<=-50&&(e=o,volantis.$.wrapper.removeClass("sub"))})),volantis.$.commentTarget.length?volantis.$.comment.click(t=>{t.preventDefault(),t.stopPropagation(),o(volantis.$.commentTarget),t.stopImmediatePropagation()}):volantis.$.comment.remove(),volantis.$.tocTarget=t("#l_body .toc-wrapper"),volantis.$.tocTarget.length&&volantis.$.tocTarget.children().length?(volantis.$.toc.click(t=>{t.stopPropagation(),volantis.$.tocTarget.toggleClass("active"),volantis.$.toc.toggleClass("active")}),t(document).click((function(t){t.stopPropagation(),volantis.$.tocTarget.removeClass("active"),volantis.$.toc.removeClass("active")})),t(document,window).scroll(Debounce(()=>{volantis.$.tocTarget.removeClass("active"),volantis.$.toc.removeClass("active")},100))):volantis.$.toc.remove()}function i(){volantis.$.headerMenu=t(".navigation","#l_header,#l_cover,#l_side"),volantis.$.headerMenu.find("li a.active").removeClass("active"),volantis.$.headerMenu.find("div a.active").removeClass("active");var e=null,o=location.pathname.replace(/\/|%|\./g,"");0==o.length&&(o="home");var n=o.match(/page\d{0,}$/g);n&&(n=n[0],o=o.split(n)[0]);var a,i=o.match(/index.html/);i&&(i=i[0],o=o.split(i)[0]),(o=o.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&volantis.$.headerMenu&&(e=t("#"+o,volantis.$.headerMenu),(a=e)&&a.length&&a.addClass("active").siblings().removeClass("active"))}function l(){volantis.isMobile?t("#l_header .m-phone li:has(.list-v)").click((function(e){e.stopPropagation(),t(t(e.currentTarget).children("ul")).show()})):t("#wrapper .m-pc li > a[href]").parent().click((function(e){e.stopPropagation(),e.target.origin==e.target.baseURI&&t("#wrapper .m-pc .list-v").hide()})),s()}function s(){volantis.isMobile&&(t(document).click((function(t){volantis.$.mPhoneList.hide()})),t(window).scroll(Debounce(()=>{volantis.$.mPhoneList.hide()})))}function c(){t("#l_main .tabs .nav-tabs").length&&t("#l_main .tabs .nav-tabs").on("click","a",e=>{e.preventDefault(),e.stopPropagation();const o=t(e.target.parentElement.parentElement.parentElement);return o.find(".nav-tabs .active").removeClass("active"),o.find(e.target.parentElement).addClass("active"),o.find(".tab-content .active").removeClass("active"),o.find(t(e.target).attr("class")).addClass("active"),!1})}if(volantis.$.header[0]&&(e=volantis.$.header[0].clientHeight+16),t((function(){document.documentElement.clientWidth<500?(volantis.isMobile=1,volantis.isMobileOld=1):(volantis.isMobile=0,volantis.isMobileOld=0),a(),i(),l(),0!==volantis.$.switcher.length&&(volantis.$.switcher.click((function(t){t.stopPropagation(),volantis.$.header.toggleClass("z_search-open"),volantis.$.switcher.toggleClass("active"),volantis.$.search.find("input").focus()})),t(document).click((function(t){volantis.$.header.removeClass("z_search-open"),volantis.$.switcher.removeClass("active")})),volantis.$.search.click((function(t){t.stopPropagation()})),volantis.$.header.ready((function(){volantis.$.header.bind("keydown",(function(t){if(9==t.keyCode)return!1;var e,o,n=!!document.all;n?(e=window.event.keyCode,o=window.event):(e=t.which,o=t),9==e&&(n?(o.keyCode=0,o.returnValue=!1):(o.which=0,o.preventDefault()))}))}))),n(),c(),window.onresize=()=>{document.documentElement.clientWidth<500?volantis.isMobile=1:volantis.isMobile=0,volantis.isMobile!=volantis.isMobileOld&&l()},t("#scroll-down").on("click",(function(){o(volantis.$.bodyAnchor)})),volantis.pjax.push(()=>{t((function(){t("#l_header .nav-main").find(".list-v").not(".menu-phone").removeAttr("style",""),t("#l_header .menu-phone.list-v").removeAttr("style",""),e=80,volantis.$.header[0]&&(e=volantis.$.header[0].clientHeight+16),a(),i(),s(),n(),c(),t("#scroll-down").on("click",(function(){o(volantis.$.bodyAnchor)})),0!==volantis.$.switcher.length&&t(document).click((function(t){volantis.$.header.removeClass("z_search-open"),volantis.$.switcher.removeClass("active")}))}))},"app.js"),volantis.pjax.send(()=>{volantis.$.switcher.removeClass("active"),volantis.$.header.removeClass("z_search-open"),volantis.$.wrapper.removeClass("sub"),volantis.$.topBtn.unbind("click"),t(".menu a","#l_header,#l_cover").unbind("click"),t(window).unbind("resize"),t(window).unbind("scroll"),t(document).unbind("scroll"),t(document).unbind("click"),t("body").unbind("click")},"app.js")})),window.location.hash)var r=setInterval((function(){t("#"+decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-")).length&&(t("html, body").animate({scrollTop:t("#"+decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-")).offset().top-40},500),clearInterval(r))}),100)}(jQuery);