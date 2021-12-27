$(document).ready(function(){
    $('.slider').slick({
        slidesToShow:3,
        slidesToScroll:1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
              }
            },
           
            
          ]
    });

    $('.accessories-slider').slick({
        slidesToShow:7,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
              }
            },
           
            
          ]
    });
    $('.sponsorship_carousel').slick({
        slidesToShow:1,
        slidesToScroll:1,
    })

    $('.header_burger').click(function(){
        $('.header_burger').toggleClass('active')
        $('.header_menu').toggleClass('active')
        $('body').toggleClass('overflow-hidden')
    })
})