$(document).ready(function () {
    $('.sidebarCollapse').on('click', function () {
        $('#sidebarRight').toggleClass('active');
    });

    $('#sidebarCollapseLeft').on('click', function () {
        $('#sidebarLeft').toggleClass('active');
    });

    $('.news-wrap').on('click', function () {
        $('#modalNews').modal("show")
    });

    $('.btn-close').on('click', function () {
        $('#modalNews').modal(("hide"))
    });

    function hide(){
      $('.newNews ').addClass('hide');
      $('.noNews').removeClass('hide');
      $('.notificationNews ').addClass('hide');
    }

    function show(){
        $('.newNews ').removeClass('hide');
        $('.noNews').addClass('hide');
        $('.notificationNews ').removeClass('hide');

    }

    let location = window.location.href;
    console.log("locationl", location.includes('account'));
    location.includes('account') ? hide() : show();


});

$(document).scroll(function() {
    let y = $(this).scrollTop();
    if (y > 60) {
        $('.bottomMenu').removeClass('hide');
    } else {
        $('.bottomMenu').addClass('hide');
    }

});