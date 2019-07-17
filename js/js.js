(function() {
    //手機選單
    $('.m_menu').on('click', function(e) {
        $('.rwd_menu').stop().slideToggle(300)
        $(this).children().toggleClass('nav_open')
        e.stopPropagation()
    })
    $(document).on('click', function() {
        $('.rwd_menu').stop().slideUp(300)
        nav_cross()
    })

    function nav_cross() {
        $('.m_menu').children().removeClass('nav_open')
    }
    //網頁導覽
    let scrollY = null
    $('.menu>li').on('click', scrollHandler)
    $('.side_bar>ul>li').on('click', scrollHandler)
    $('.quick_menu>.q_link').on('click', scrollHandler)
    $('.rwd_menu>li').on('click', scrollHandler)

    function scrollHandler() {
        let index = $(this).index()
        let target = $('.pin').eq(index).offset().top
        scrollY = target
        nav_cross()
    }
    /*右邊小點點進度顯示*/
    var pins = Array.from(document.querySelectorAll('.pin'))
    var pins_top = pins.map(function(pin) {
        return pin.offsetTop
    })
    $(window).scroll(function() {
        let w_scroll = $(window).scrollTop();
        for (i in pins_top) {
            if (w_scroll >= pins_top[i] * .9) {
                $('.side_bar>ul>li').removeClass('act').eq(i).addClass('act')
            }
        }
    })

    function render() {
        if (scrollY != null) {
            let move = (scrollY - window.scrollY) * .07
            window.scrollTo(0, window.scrollY + move)
            if (Math.abs(move) < 1) {
                scrollY = null
            } //console.log(move)
        }
        requestAnimationFrame(render)
    }
    render()

    $('.scroll_down').on('click', function() {
            $('html,body').stop().animate({ scrollTop: $('.sec_1').outerHeight() }, 800)
        })
        //網頁導覽


    $(".sec_1 iframe").css({ 'width': 1920, 'height': 1080 })
    $(window).resize(function() {
        var vw = $(window).outerWidth()

        if (vw > 1920) {
            $(".sec_1 iframe").css({ 'width': vw, 'height': vw / 16 * 9 })
        } else {
            $(".sec_1 iframe").css({ 'width': 1920, 'height': 1080 })
        }

    }).resize();

    /*最新消息輪播*/
    // setInterval(news, 3000)

    // function news() {
    //     $('.news').animate({ top: -20 }, 500, function() {
    //         $('.news p').eq(0).appendTo('.news')
    //         $('.news').css({ top: 0 })
    //     })
    // }
    /*最新消息輪播*/
    const tab_info = [{
            "title": '台灣每年丟棄食物的總儲量為180頓，這些被浪費的食物總量，原本可以是230,000名學童20年的營養午餐。',
            "inner": '這些被浪費的食物，不僅是個人資源浪費，也形成許多環境、經濟、 飢荒分配不均的問題，在無形中影響了我們的生活。 南機場的「分享冰箱」，讓吃不完的食物送到需要的人手中， 從珍惜食物開始，邀您加入共享行動，讓下一代從我們行為中看見榜樣， 看見值得學習、尊敬的榜樣'
        },
        {
            "title": '不分身分別，需要的人都可以拿！食享冰箱是一個分享，我們把好的東西分享給人家，我們不是救濟，透過分享發現更多真正需要幫助的人。',
            "inner": '食享冰箱處理食物的方式、過程，為了確保共享冰箱中的每一份食物，都能保持原有的新鮮美味，每份食物最多只能在冰箱中放置36小時。唯有維護食物的品質讓企業安心、並解決民眾對於吃的疑慮，才能真正創造民眾對食物的需求，建立永續的供需平衡。'
        },
        {
            "title": '方荷生，身為忠勤里里長，替社區弱勢里民爭取福利積極推動社區服務，為獨居長者及弱勢族群創辦各項福利服務。',
            "inner": '民國102年開辦「南機場幸福食物銀行」，募集民間企業資源，提供弱勢住戶物資，並倡導居民志願服務換取點數實踐社區貨幣的概念。為永續經營各項福利服務，在民國103年發起成立「社團法人臺北市臻佶祥社會服務協會」，民國105年9月5日更結合家樂福基金會開辦「書屋花甲」續食餐廳及「食享冰箱」，除提供青少年技藝學習外，更提倡與實踐食物不浪費不放棄的理念。'
        }
    ]

    $('.intab').click(function() {
            $(this).siblings().removeClass('intab_active')
            $(this).toggleClass('intab_active')
            let tab_index = $(this).index()
            console.log(tab_index)
            $('.intro h4').css({ opacity: 0 }).text(tab_info[tab_index].title).animate({ opacity: 1 }, 800)
            $('.intro p').css({ opacity: 0 }).text(tab_info[tab_index].inner).animate({ opacity: 1 }, 800)
        })
        //同步序列
    var index = 0

    //淡入動畫
    var wh = 0
    var $pin = $('.map li')
    $(window).scroll(function() {
        wh = $(this).scrollTop();
        if (wh > $('.step').offset().top) {
            for (i in result_data) {
                $pin.eq(i).delay(300 * i).animate({ opacity: 1, }, 500)
            }
        }
        if (wh > $('.direct').offset().top) {
            for (i = 0; i < 2; i++) {
                $('.result_data').eq(i).delay(400 * i).animate({ opacity: 1, }, 500)
            }
            numHandler()
        }

    })

    //data動畫
    const result_data = [{
            'name': '【忠勤里】',
            'addr': '中正區中華路二段307巷42號',
            'kg': '21469.7',
            'img': 'img/com_0.jpg'
        },
        {
            'name': '【永昌里】',
            'addr': '中正區汀州路一段242巷17號',
            'kg': '2795.6',
            'img': 'img/com_1.jpg'
        },
        {
            'name': '【螢圃里】',
            'addr': '中正區重慶南路三段85號',
            'kg': '2544',
            'img': 'img/com_2.jpg'
        },
        {
            'name': '【頂東里】',
            'addr': '中正區晉江街112巷2弄6號',
            'kg': '2609.5',
            'img': 'img/com_3.jpg'
        },
        {
            'name': '【林興里】',
            'addr': '中正區水源路21號',
            'kg': '2566.5',
            'img': 'img/com_4.jpg'
        },
        {
            'name': '【新營里】',
            'addr': '中正區寧波東街16巷2號',
            'kg': '2607.8',
            'img': 'img/com_5.jpg'
        },
        {
            'name': '【梅花里】',
            'addr': '中正區紹興北街23號',
            'kg': '2608.6',
            'img': 'img/com_6.jpg'
        },
        {
            'name': '【至聖里】',
            'addr': '大同區大龍街242號',
            'kg': '1125.3',
            'img': 'img/com_7.jpg'
        },
    ]

    $('.detail_slide').append(
        "<div class='detail_data'></div>"
    )

    $pin.on('click', function() {
        index = $(this).index()
        Handler()
    })

    $('.direct>li').on('click', function() {

        if ($(this).is('.next')) {
            index++
            //index = index < result_data.length ? index++ : 0
        } else if ($(this).is('.prev')) {
            //index = index > 0 ? index-- : result_data.length
            index--
        }
        index = (index + result_data.length) % result_data.length
        Handler()

    })
    $('.guide_circle li').on('click', function() {
        index = $(this).index()
        Handler()
    })

    function Handler() {
        mapHandler()
        slideHandler()
        navHandler()
    }

    function navHandler() {
        $('.guide_circle li').removeClass('li_act').eq(index).addClass('li_act')
    }

    function mapHandler() {
        $pin.removeClass('li_on').eq(index).addClass('li_on')
    }

    function slideHandler() {
        $('.detail_data').eq(1).replaceWith(
            "<div class='detail_data'>" +
            "<div class='detail_contain'>" +
            "<h2>" + result_data[index].name + "</h2>" +
            "<span>" + result_data[index].addr + "</span>" +
            "<hr>" +
            "<h3>已提供</h3>" +
            "<h1>" + result_data[index].kg + "<span>kg</span></h1>" +
            "<h6>※截至2018年3月為止</h6>" +
            "</div>" +
            "<div class='detail_img'><img src='" + result_data[index].img + "' alt=''></div>" +
            "</div>"
        )

        $('.detail_slide').stop().animate({ left: $('.detail_data').outerWidth() * -1 + 'px' }, 400, function() {
            $(this).removeAttr('style')
            $('.detail_data').eq(0).appendTo('.detail_slide')
        })
    }

    function numHandler() {

        $('.count').each(function() {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 8000,
                easing: 'swing',
                step: function(now) {
                    $(this).text(Math.ceil(now));
                }
            });
            $(this).removeClass()
        });
    }

    var tlen = 60; // 超過60個字以"..."取代
    $(".tlen").each(function(i) {
        if ($(this).text().length > tlen) {
            var text = $(this).text().substring(0, tlen - 1) + "...";
            $(this).text(text);
        }
    });


})(jQuery)