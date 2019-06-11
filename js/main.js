// alert("e");
var rightLinks = document.getElementById('mobile-menu');
var menuOpenBtn = document.getElementById('menu-button-mobile');
var mobileLogoImg = document.getElementById('mobile-logo-img');
var openMobileNav = document.getElementById('mobile-nav-open');
var mobileQuoteText = document.getElementById('mobile-quote-text');

menuOpenBtn.addEventListener('click',function(){
    mobileLogoImg.style.display="none";
    rightLinks.style.display="none";
    mobileQuoteText.style.display="none";
    openMobileNav.style.display="flex";
});