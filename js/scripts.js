function fixedHeader(){
    try {
        const headerDiv = document.querySelector(".header-bottom");
        if(window.pageYOffset  >= 100 && window.innerWidth >= 768){
            headerDiv.classList.add('header-fixed');
        }else if(window.pageYOffset  >= 100 && window.innerWidth < 768){
            $('.header-top .container > div > div:first-child').addClass('fix-head-mob');
        }
        else{
            headerDiv.classList.remove('header-fixed');
            $('.header-top .container > div > div:first-child').removeClass('fix-head-mob');
        }
    }
    catch(err) {
        return false;
    }
}

function initiateAnimation(){
    AOS.init({
        easing: 'ease-in-out-sine',
        duration: 800,
    });
}

function mobCloseMainMenu(){
    if($('body').hasClass('rtl')){
        $('.navbar-collapse').delay(0).animate({right: '-320px'}, 1000);
    }else{
        $('.navbar-collapse').delay(0).animate({left: '-320px'}, 1000);
    }
    
}

function mobOpenMainMenu(){
    if($('body').hasClass('rtl')){
        $('.navbar-collapse').delay(0).animate({right: '0px'}, 1000);
    }else{
        $('.navbar-collapse').delay(0).animate({left: '0px'}, 1000);
    }
}

function getTodayDateTime(){
    let D = new Date();
    
    if($('body').hasClass('rtl')){
        var months = ["يناير", "فبراير", "مارس", "ابريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
    }else{
        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    }

    let day = D.getDate(), 
        month = months[D.getMonth()], 
        year = D.getFullYear();
    let fullDate = day+' '+month+' '+year;


    $('#date').text(fullDate); 

    
}
$(window).on('scroll', function(){
    fixedHeader();
});

$( window ).on('load', function() {
    $('.loader-wrapper').css('display', 'none');
    $('.main-wrapper').css('display', 'block');
});


$(document).ready(function () {
    // initiateAnimation();
    getTodayDateTime();
    // navScrollClickHandling();

    $('#search-lnk').click(function(){
        $('.search-form').slideToggle();
    });

    try {
        $('.datepicker').datepicker();
    }
    catch(err) {
        // NO DATE PICKER IN PAGE
    }
});

// function navScrollClickHandling() {
//     $('#main-header .nav-item').click(function(){
//         $('#main-header .nav-item').not($(this)).removeClass('active');
//         $(this).addClass('active');
//     });

//     $(document).on("scroll", onScroll);

//     function onScroll(event){
//         var scrollPos = $(document).scrollTop();
//         $('.nav-item .nav-link').not($('#search-lnk')).each(function () {
//             var currLink = $(this);
//             var currLinkAttr = currLink.attr("href");
//             var X = currLinkAttr.split('#')[1];
//             currLinkAttr = "#"+X;
//             var refElement = $(currLinkAttr);
//             if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
//                 $('.nav-item .nav-link').not(currLink).closest('.nav-item').removeClass("active");
//                 currLink.closest('.nav-item').addClass("active");
//             }
//             else{
//                 currLink.removeClass("active");
//             }
//         });
//     }
// }