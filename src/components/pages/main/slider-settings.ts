export const sliderSetting = {
    infinite: true,
    speed: 520,
    cssEase: 'linear',
    slidesToShow: 5,
    slidesToScroll: 2,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    responsive: [
        {
        breakpoint: 1500,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 2,
        }
        },
        {
        breakpoint: 1276,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 2
        }
        },
        {
        breakpoint: 1000,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 900,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
        },
        {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
            arrows : false
        }
        }
    ]
}