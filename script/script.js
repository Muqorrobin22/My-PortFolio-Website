$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#nav').addClass('nav-active');
        } else {
            $('#nav').removeClass('nav-active');
        }

        if ($(this).scrollTop() > 300) {
            $('.scroll-up').addClass('show');
        } else {
            $('.scroll-up').removeClass('show');

        }
    });

    // scroll offset
    $('.page-scroll').on('click', function (e) {

        let href = $(this).attr('href');

        let tujuan = $(href);

        // $('body').animate({
        //     scrollTop: tujuan.offset().top - 60
        // })
        // $(this).scrollTop(tujuan.offset().top - 70)
    })

    // scroll button up
    $('.scroll-up').on('click', function () {
        $('html').animate({ scrollTop: 0 }, 1000)
    })

    // Nav items show -----

    $('.menu-btn').on('click', function () {
        $('.nav-text').toggleClass('active');
        $('.menu-btn').toggleClass('active');

    });

    $('.contact-me').on('click', function () {
        $('#popup-email').toggleClass('active');
        $('.isi').toggleClass('active');

    })
    $('.start-project').on('click', function () {
        $('#popup-project').toggleClass('active');
        $('.isi').toggleClass('active');

    })

    $('#popup-email .close i').on('click', function () {
        $('#popup-email').toggleClass('active');
        $('.isi').toggleClass('active');


    })
    $('#popup-project .close').on('click', function () {
        $('#popup-project').toggleClass('active');
        $('.isi').toggleClass('active');


    })

    // -----

    $('.progress-wrap1 .progress').hover(function () {
        $('.card:nth-child(1)').css({ 'transform': 'scale(1.2)' })
    }, function () {
        $('.card:nth-child(1)').css({ 'transform': 'none', 'background': 'white' })
    });
    $('.progress-wrap2 .progress').hover(function () {
        $('.card:nth-child(2)').css({ 'transform': 'scale(1.2)' })
    }, function () {
        $('.card:nth-child(2)').css({ 'transform': 'none', 'background': 'white' })
    });
    $('.progress-wrap3 .progress').hover(function () {
        $('.card:nth-child(3)').css({ 'transform': 'scale(1.2)' })
    }, function () {
        $('.card:nth-child(3)').css({ 'transform': 'none', 'background': 'white' })
    });
    $('.progress-wrap4 .progress').hover(function () {
        $('.card:nth-child(4)').css({ 'transform': 'scale(1.2)' })
    }, function () {
        $('.card:nth-child(4)').css({ 'transform': 'none', 'background': 'white' })
    });


    $('.nav-text ul li .page-scroll').on('click', function () {
        $('.page-scroll').removeClass('active');

        $(this).closest('li a').addClass('active')
    })

})


let typed = new Typed('.ketik', {
    strings: ["Frontend Developer", "UI Designer", "UX Research"],
    typeSpeed: 150,
    backSpeed: 70,
    loop: true
})

// let pageScroll = document.querySelectorAll('.page-scroll');

// pageScroll.forEach(e => {
//     e.addEventListener('click', function () {
//         // console.log(e.classList.contains('active'));
//         if (e.classList.contains('active') === false) {
//             e.classList.add('active');
//             pageScroll.forEach(a => {
//                 // console.log(this.attributes[0].value)
//                 if (this) {
//                     return 1;
//                 }
//             })
//         }
//         else {
//             e.classList.remove('active');

//         }
//     })
// });