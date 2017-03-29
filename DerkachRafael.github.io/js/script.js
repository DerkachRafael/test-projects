'use strict';
document.addEventListener("DOMContentLoaded", function() {
    //window.onresize = function() {
    //    toggle();
    //
    //};

    //function toggle() {
    //    if (window.innerWidth > 500) {
    //        console.log("alalalalalalal");
    //        scroll();
    //    }
    //    else {
    //      return;
    //    }
    //}
    //Sticky nav
    var header = document.querySelector(".top-panel");
    window.addEventListener("scroll", scroll);
    function scroll(){
        if (window.pageYOffset > 180){
            header.classList.add("fixed-header");
        }
        else{
            header.classList.remove("fixed-header");
        }
    }
    //Responsive-nav
    // var buttonMenu = document.querySelector(".icon-menu");
    // var menuList = document.querySelector(".nav-list");
    //     buttonMenu.addEventListener("click", toggleNav);
    // function toggleNav(){
    //     this.classList.toggle("open");
    //     menuList.classList.toggle("open-menu")
    // }
    // ACCORDION
    var btnAccordion = document.getElementsByClassName("accordion-btn");
    for (var i = 0; i < btnAccordion.length; i++) {
        btnAccordion[i].onclick = function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    }
});
