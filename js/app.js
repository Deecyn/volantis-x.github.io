var customSearch,Debounce=(t,o)=>{let e,a=o||25;return function(){let o=arguments;e&&clearTimeout(e),e=setTimeout(()=>{e=null,t.apply(this,o)},a)}};!function(t){"use strict";volantis.$bodyAnchor=t("#safearea"),volantis.$topBtn=t("#s-top"),volantis.$wrapper=t("#wrapper"),volantis.$postsBtn=t(".menu .active"),volantis.$titleBtn=t("h1.title","#header-meta"),volantis.$coverAnchor=t("#l_cover .cover-wrapper"),volantis.$switcher=t("#l_header .switcher .s-search"),volantis.$header=t("#l_header"),volantis.$headerMenu=t("body .navigation"),volantis.$search=t("#l_header .m_search"),volantis.$mPhoneList=t("#l_header .m-phone .list-v");const o=/mobile/i.test(window.navigator.userAgent);var e=80;function a(o,a=e){const n=o.href?t(decodeURI(o.getAttribute("href"))):t(o);window.scrollTo({top:n.offset().top-a,behavior:"smooth"})}function n(){volantis.$postsBtn.length&&volantis.$bodyAnchor&&volantis.$postsBtn.click(t=>{t.preventDefault(),t.stopPropagation(),"/"!=volantis.$postsBtn.attr("href")&&a(volantis.$bodyAnchor),t.stopImmediatePropagation(),volantis.$postsBtn.unbind("click")}),volantis.$titleBtn.length&&volantis.$bodyAnchor&&volantis.$titleBtn.click(t=>{t.preventDefault(),t.stopPropagation(),a(volantis.$bodyAnchor),t.stopImmediatePropagation(),volantis.$titleBtn.unbind("click")}),volantis.$topBtn.length&&volantis.$bodyAnchor&&volantis.$topBtn.click(t=>{t.preventDefault(),t.stopPropagation(),a(volantis.$bodyAnchor),t.stopImmediatePropagation()});var o=volantis.$bodyAnchor.offset().top-e,n=document.body.scrollTop;t(document,window).scroll(Debounce(()=>{let e=t(window).scrollTop();const a=e-n;n=e,e>volantis.$bodyAnchor.offset().top?(volantis.$topBtn.addClass("show"),a>0?volantis.$topBtn.removeClass("hl"):volantis.$topBtn.addClass("hl")):volantis.$topBtn.removeClass("show").removeClass("hl"),e-o>-1?volantis.$header.addClass("show"):volantis.$header.removeClass("show")}))}function i(){if(pdata.ispage&&(window.subData={title:pdata.postTitle,tools:!0}),!window.subData)return;volantis.$comment=t("#s-comment"),volantis.$toc=t("#s-toc"),volantis.$commentTarget=t("#l_body article#comments"),volantis.$wrapper.find(".nav-sub .title").text(window.subData.title);let o=document.body.scrollTop;t(document,window).scroll(Debounce(()=>{const e=t(window).scrollTop(),a=e-o;a>=50&&e>100?(o=e,volantis.$wrapper.addClass("sub")):a<=-50&&(o=e,volantis.$wrapper.removeClass("sub"))})),volantis.$commentTarget.length?volantis.$comment.click(t=>{t.preventDefault(),t.stopPropagation(),a(volantis.$commentTarget),t.stopImmediatePropagation()}):volantis.$comment.remove(),volantis.$tocTarget=t("#l_body .toc-wrapper"),volantis.$tocTarget.length&&volantis.$tocTarget.children().length?(volantis.$toc.click(t=>{t.stopPropagation(),volantis.$tocTarget.toggleClass("active"),volantis.$toc.toggleClass("active")}),t(document).click((function(t){t.stopPropagation(),volantis.$tocTarget.removeClass("active"),volantis.$toc.removeClass("active")})),t(document,window).scroll(Debounce(()=>{volantis.$tocTarget.removeClass("active"),volantis.$toc.removeClass("active")},100))):volantis.$toc.remove()}function s(){volantis.$headerMenu.find("li a.active").removeClass("active"),volantis.$headerMenu.find("div a.active").removeClass("active");var o=null,e=location.pathname.replace(/\/|%|\./g,"");0==e.length&&(e="home");var a=e.match(/page\d{0,}$/g);a&&(a=a[0],e=e.split(a)[0]);var n,i=e.match(/index.html/);i&&(i=i[0],e=e.split(i)[0]),(e=e.replace(/(\[|\]|~|#|@)/g,"\\$1"))&&volantis.$headerMenu&&(o=t("#"+e,volantis.$headerMenu),(n=o)&&n.length&&n.addClass("active").siblings().removeClass("active"))}function l(){o&&(t(document).click((function(t){volantis.$mPhoneList.hide()})),t(window).scroll(Debounce(()=>{volantis.$mPhoneList.hide()})))}function c(){t(".tabs .nav-tabs").on("click","a",o=>{o.preventDefault(),o.stopPropagation();let e=t(o.target.parentElement.parentElement.parentElement);return e.find(".nav-tabs .active").removeClass("active"),e.find(o.target.parentElement).addClass("active"),e.find(".tab-content .active").removeClass("active"),e.find(t(o.target).attr("class")).addClass("active"),!1})}if(volantis.$header[0]&&(e=volantis.$header[0].clientHeight+16),t((function(){i(),s(),o?t("#l_header .m-phone li").click((function(o){o.stopPropagation(),t(t(o.currentTarget).children("ul")).show()})):t("#wrapper .m-pc li > a[href]").parent().click((function(o){o.stopPropagation(),o.target.origin==o.target.baseURI&&t("#wrapper .m-pc .list-v").hide()})),l(),0!==volantis.$switcher.length&&(volantis.$switcher.click((function(t){t.stopPropagation(),volantis.$header.toggleClass("z_search-open"),volantis.$switcher.toggleClass("active"),volantis.$search.find("input").focus()})),t(document).click((function(t){volantis.$header.removeClass("z_search-open"),volantis.$switcher.removeClass("active")})),volantis.$search.click((function(t){t.stopPropagation()})),volantis.$header.ready((function(){volantis.$header.bind("keydown",(function(t){if(9==t.keyCode)return!1;var o,e,a=!!document.all;a?(o=window.event.keyCode,e=window.event):(o=t.which,e=t),9==o&&(a?(e.keyCode=0,e.returnValue=!1):(e.which=0,e.preventDefault()))}))}))),n(),c(),t("#scroll-down").on("click",(function(){a(volantis.$bodyAnchor)}));try{document.addEventListener("pjax:complete",(function(){t((function(){e=80,volantis.$header[0]&&(e=volantis.$header[0].clientHeight+16),volantis.$headerMenu=t("body .navigation"),i(),s(),l(),n(),c(),t("#scroll-down").on("click",(function(){a(volantis.$bodyAnchor)})),0!==volantis.$switcher.length&&t(document).click((function(t){volantis.$header.removeClass("z_search-open"),volantis.$switcher.removeClass("active")}))}))}),{passive:!0})}catch(t){}})),window.location.hash)var r=setInterval((function(){t("#"+decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-")).length&&(t("html, body").animate({scrollTop:t("#"+decodeURI(window.location.hash.split("#")[1]).replace(/\ /g,"-")).offset().top-40},500),clearInterval(r))}),100)}(jQuery);