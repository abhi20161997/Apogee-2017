var lno = 2;
var tmp = 2,oldTmp='';
var knobTween;
function onRotateKnob() {
//              console.log('ghuma');
    "none" != $("#knobBG").css("display") && (needsRotationUpdate = !1,
    clearInterval(__.services.clock.interval),
    clearInterval(__.services.clock.intervalKnob),
    __.services.clock.humanInteraction = !0,
    __.services.clock.showInteraction(dragKnob.rotation),
    TweenMax.to($("path#arc_path_1"), .5, {
        opacity: 1
    }))

}
function onRotateKnob2() {
   
   // setTimeout(function () {
   //       tmp =(Math.floor((dragKnob.rotation)/90)+2) +''
   //      if(tmp!=oldTmp){
   //      oldTmp=tmp;
   //      TweenMax.killChildTweensOf($('.landing'));
   //      tlMain.kill();
   //      animateLanding(tmp);
   //      // console.log(tmp);
   //      }
   // },1000);
   // console.log( __.services.clockNext,2);
//              console.log('ghuma')2
    "none" != $("#knobBG").css("display") && (needsRotationUpdate = !1,
    clearInterval(__.services.clock.interval),
    clearInterval(__.services.clock.intervalKnob),
    __.services.clock.intervalKnob = setInterval(function() {
        $(window).trigger("gusto::clocksetproduct", [{
            id: $('svg line[data-order="' + (dragKnob.rotation + 90) + '"]').attr("prod-index")
        }]),
        TweenMax.to($("path#arc_path_1"), .5, {
            opacity: 0
        }),
        clearInterval(__.services.clock.intervalKnob)
    }, 100),
    __.services.clock.humanInteraction = !0,
    __.services.clock.showInteraction(dragKnob.rotation),
    TweenMax.to($("path#arc_path_1"), .5, {
        opacity: 1
    }))
}
function updateRotation() {}
function killTweens() {}
if ($("html,body").scrollTop(0),
$(document).scrollTop(0),
$(window).scrollTop(0),
document.head || (document.head = document.getElementsByTagName("head")[0]),
function() {
    "use strict";
    function getRandomColor() {
        for (var e = "0123456789ABCDEF".split(""), o = "#", t = 0; 6 > t; t++)
            o += e[Math.floor(16 * Math.random())];
        return o
    }
    Math.radians = function(e) {
        return e * Math.PI / 180
    }
    ,
    Math.degrees = function(e) {
        return 180 * e / Math.PI
    }
    ;
    var state = {};
    $(".split_me").each(function() {
        $(this).html("<div><span class='stoca'>" + $(this).text().split("").join("</span><span class='stoca'>").replace("<span class='stoca'> </span>", "</div><div>") + "</span><div>"),
        $(this).removeClass("split_me")
    }),
    window.__ = {},
    window.__.pages = {},
    window.__.services = {},
    window.__.function = {},
    window.__.animations = {},
    window.__.services.gridCols = 24,
    window.__.services.gridW = $("#page").width() / window.__.services.gridCols,
    window.__.services.minWidthDesktop = 1024,
    window.__.services.minMobileBlockH = 320,
    window.__.services.menuSize = 60,
    window.__.services.isSmartphone = !1,
    window.__.services.openMenuSvg = Snap("#openMenu svg"),
    window.__.services.w = $(window).width(),
    window.__.services.h = $(window).height(),
    window.__.services.i = 1,
    window.__.services.iC = 2,
    window.__.services.clockNext = 2,
    window.__.services.clockPrev = "",
    window.__.services.initial_order = 0,
    window.__.services.totPunti = $("#bg_color").attr("data-punti"),
    window.__.services.color_homepage = ["", "gae", "yellow", "red", "green", "yellow", "blue", "red", "green", "yellow", "blue"],
    window.__.services.changeTitleSingle = function() {
        $(".title_fixed h1").html($("#" + target + " h1.onlyMobile").html()),
        TweenMax.set(".title_fixed h1 .stoca", {
            y: "100%"
        }),
        TweenMax.staggerFromTo(".title_fixed h1 .stoca", .35, {
            y: "100%"
        }, {
            y: "0%"
        }, .03, 1.05)
    }
    ,
    window.__.function.pageLoad = function() {
        allClasses.func_redesignPage(),
        $("body").css("visibility", "visible"),
        void 0 === __.clock ? ($("#preloader").show(),
        TweenMax.fromTo("#preloader", .8, {
            width: $(window).width() + .3 * $(window).width(),
            height: $(window).width() + .3 * $(window).width()
        }, {
            width: 0,
            height: 0,
            ease: Power2.easeInOut,
            onComplete: function() {
                $("#preloader").remove(),
                $("html").hasClass("mobile") || $("html").hasClass("tablet") && $("html").hasClass("portrait") || "undefined" != typeof __.clock && __.clock.designClockFirstTime()
            }
        }),
        TweenMax.to(".first-preloader", .4, {
            opacity: 0,
            onComplete: function() {
                $(".first-preloader").remove()
            }
        })) : (__.clock.designClockFirstTime(),
        TweenMax.to(".first-preloader", .4, {
            opacity: 0,
            onComplete: function() {
                $(".first-preloader").remove()
            }
        }))
    }
    ,
    window.__.animations = {},
    window.__.timeline = {},
    window.__.services.clock = {},
    window.__.services.clock.data = [],
    window.__.services.clock.data_moving = [],
    window.__.services.clock.data_nomoving = [],
    window.__.services.clock.quad = [],
    window.__.services.clock.resetInteraction = function() {
        $('[data-modified="modified"]').each(function(e) {
            $(this).removeAttr("data-modified");
            var o = parseInt($(this).attr("data-alpha"))
              , t = __.services.clock.size.margin
              , i = __.services.clock.size.h - t
              , s = __.services.clock.size.h
              , c = s / 2
              , r = s / 2
              , a = 10
              , n = 20
              , l = i / 2
              , _ = $('[data-alpha="' + o + '"]').attr("data-counter")
              , d = !0;
            void 0 != _ && (d = _ >= 270 && 360 >= _);
            var v = l + a;
            "big" == $('[data-alpha="' + o + '"]').attr("data-mode") && (v = l + n);
            var p = Math.sin(Math.radians(o)) * v
              , h = Math.cos(Math.radians(o)) * v;
            d ? (p = r - p,
            h = c + h) : (o > 0 && 90 >= o && (p = r - p,
            h = c + h),
            o > 90 && 180 >= o && (p = r - p,
            h = c - -1 * h)),
            $('[data-alpha="' + o + '"]').attr("x2", h),
            $('[data-alpha="' + o + '"]').attr("y2", p)
        })
    }
    ,
    window._tween = function(e, o, t, i, s, c, r, a) {
        var n = __.services.clock.data[e]
          , l = $('#clock svg line[data-alpha="' + n.index + '"]')
          , a = "undefined" != typeof a ? a : 0;
        $('#clock svg:last-child [data-alpha="' + e + '"][data-mode="std"]').css({
            strokeWidth: "20px"
        }),
        TweenMax.isTweening(l) === !1 && (l.data("toReverse", !1),
        TweenMax.to(l, 1.7, {
            attr: {
                x2: i,
                y2: s
            },
            ease: Elastic.easeOut.config(1.5, .5),
            onComplete: function() {
                $('#clock svg:last-child [data-alpha="' + e + '"][data-mode="std"]').css({
                    strokeWidth: "2px"
                })
            },
            delay: a
        }),
        TweenMax.to(l, .3, {
            attr: {
                x2: n.x1,
                y2: n.y1,
                x1: c,
                y1: r
            },
            ease: Ease.easeOut,
            delay: .3 + a
        }),
        TweenMax.to(l, 1.7, {
            attr: {
                x2: n.x2,
                y2: n.y2,
                x1: n.x1,
                y1: n.y1
            },
            ease: Elastic.easeOut.config(1.5, .5),
            onStart: function() {
                l.data("toReverse", !1) && l.data("toReverse", !0)
            },
            delay: .6 + a
        }))
    }
    ,
    window._tween_loader = function(delta, x1, y1, x2, y2, delay, time, easing) {
        var data = __.services.clock.data[delta]
          , element = $('#clock svg line[data-alpha="' + data.index + '"]')
          , delay = "undefined" != typeof delay ? delay : 0
          , time = "undefined" != typeof time ? time : 1.7
          , easing = "undefined" != typeof easing ? easing : "Elastic.easeOut.config(1.1,.6)";
        TweenMax.fromTo(element, time, {
            attr: {
                x2: x2[0],
                y2: y2[0],
                x1: x1[0],
                y1: y1[0]
            }
        }, {
            attr: {
                x2: x2[1],
                y2: y2[1],
                x1: x1[1],
                y1: y1[1]
            },
            ease: eval(easing),
            onComplete: function() {
                $('#clock svg:last-child [data-alpha="' + delta + '"][data-mode="std"]').css({
                    strokeWidth: "2px"
                })
            },
            delay: delay
        })
    }
    ,
    window.__.services.clock.showInteraction = function(e) {
        if ("none" != $("#knobBG").css("display")) {
            180 == e && (e = 179);
            var o = 0;
            o = 360 - Math.round(e + 270),
            e > 90 && 180 > e && (o = Math.round(e + 270)),
            o > 360 && (o = 360 - (o - 360)),
            0 == o && (o = 360),
            __.services.clock.resetInteraction(),
            __.services.clock.data_moving = [];
            var t = 20
              , i = __.services.clock.size.margin
              , s = __.services.clock.size.h - i
              , c = __.services.clock.size.h
              , r = c / 2
              , a = c / 2
              , n = 10
              , l = 20
              , _ = s / 2
              , d = $('[data-alpha="' + o + '"]').attr("data-index")
              , v = !0;
            void 0 != d && (v = d >= 270 && 360 >= d);
            for (var p = _ + n, h = 1; t - 1 > h; h++)
                ;
            for (var h = 1; t - 1 > h; h++)
                ;
            var w = 10
              , u = function() {
                p = _ + n + w;
                var e = 18
                  , t = _ + e
                  , i = _ - e;
                "big" == $('[data-alpha="' + o + '"]').attr("data-mode") && (p = _ + l + w);
                var s = o
                  , c = __.services.get_coords(s, v, p, a, r).x
                  , d = __.services.get_coords(s, v, p, a, r).y
                  , h = __.services.get_coords(s, v, t, a, r).x
                  , u = __.services.get_coords(s, v, t, a, r).y
                  , g = __.services.get_coords(s, v, i, a, r).x
                  , m = __.services.get_coords(s, v, i, a, r).y;
                void 0 !== c && void 0 != d && void 0 !== __.services.clock.data[s] && _tween(s, c, d, h, u, g, m)
            }
              , g = function() {
                for (var e = [18, 17, 16, 14, 12, 9, 7, 5, 4, 3, 2], t = [18, 17, 16, 14, 12, 9, 7, 5, 4, 3, 2], i = 0; i < e.length; i++) {
                    p = _ + n + e[i];
//                    console.log(_,t[i]);
                    var s = _ + t[i]
                      , c = _ - t[i]
                      , d = o + (i + 1)
                      , v = $('[data-alpha="' + d + '"]').attr("data-index")
                      , h = !0;
                    void 0 != v && (h = v >= 270 && 360 >= v),
                    d > 360 && (d -= 360),
                    "big" == $('[data-alpha="' + d + '"]').attr("data-mode") && (p = _ + l + e[i]);
                    var w = d
                      , u = __.services.get_coords(w, h, p, a, r).x
                      , g = __.services.get_coords(w, h, p, a, r).y
                      , m = __.services.get_coords(w, h, s, a, r).x
                      , k = __.services.get_coords(w, h, s, a, r).y
                      , f = __.services.get_coords(w, h, c, a, r).x
                      , y = __.services.get_coords(w, h, c, a, r).y;
                    void 0 !== u && void 0 != g && void 0 !== __.services.clock.data[w] && _tween(w, u, g, m, k, f, y)
                }
            }
              , m = function() {
                for (var e = [18, 17, 16, 14, 12, 9, 7, 5, 4, 3, 2], t = [18, 17, 16, 14, 12, 9, 7, 5, 4, 3, 2], i = 0; i < e.length; i++) {
                    p = _ + n + e[i];
                    var s = _ + t[i]
                      , c = _ - t[i]
                      , d = o - (i + 1)
                      , v = $('[data-alpha="' + d + '"]').attr("data-index")
                      , h = !0;
                    void 0 != v && (h = v >= 270 && 360 >= v),
                    0 >= d && (d += 360),
                    "big" == $('[data-alpha="' + d + '"]').attr("data-mode") && (p = _ + l + e[i]);
                    var w = d
                      , u = __.services.get_coords(w, h, p, a, r).x
                      , g = __.services.get_coords(w, h, p, a, r).y
                      , m = __.services.get_coords(w, h, s, a, r).x
                      , k = __.services.get_coords(w, h, s, a, r).y
                      , f = __.services.get_coords(w, h, c, a, r).x
                      , y = __.services.get_coords(w, h, c, a, r).y;
                    void 0 !== u && void 0 != g && void 0 !== __.services.clock.data[w] && _tween(w, u, g, m, k, f, y)
                }
            };
            void 0 != d && (__.services.prevRotation = e,
            __.services.prevRotation > __.services.nextRotation ? g() : m(),
            u(),
            __.services.nextRotation = e)
        }
    }
    ,
    window.__.services.get_coords = function(e, o, t, i, s) {
        var c = Math.round(Math.sin(Math.radians(e)) * t)
          , r = Math.round(Math.cos(Math.radians(e)) * t)
          , a = i - c
          , n = s + r;
        return o ? (a = i - c,
        n = s + r) : (e > 0 && 90 >= e && (a = i - c,
        n = s + r),
        e > 90 && 180 >= e && (a = i - c,
        n = s - -1 * r)),
        {
            x: n,
            y: a
        }
    }
    ,
    window.__.services.split = function() {
        $(".split_me").each(function() {
            $(this).html("<div><span class='stoca'>" + $(this).text().split("").join("</span><span class='stoca'>").replace("<span class='stoca'> </span>", "</div><div>") + "</span><div>"),
            $(this).removeClass("split_me")
        })
    }
    ,
    window.__.animations.changeSlideDot = new TimelineLite({
        paused: !0,
        onComplete: function() {
            var e = 1;
            for (window.__.services.i = window.__.services.iC,
            4 == window.__.services.iC ? window.__.services.iC = 1 : window.__.services.iC++,
            $("#slider_home").removeClass().addClass("prod_" + window.__.services.i),
            $(".circle").removeClass().addClass("circle prod_" + window.__.services.iC),
            __.animations.changeSlideDot.restart(),
            __.animations.changeSlideDot.pause(),
            e = 1; e <= window.__.services.totPunti; e++) {
                var o = 0
                  , t = 50;
                e % 2 == 0 && (o = 50,
                t = 100),
                $("#circle_" + e).css({
                    top: Math.floor(100 * Math.random()) + "%",
                    left: Math.floor(Math.random() * (t - o + 1)) + o + "%"
                })
            }
            $("#badBro").css("display", "none")
        },
        onReverseComplete: function() {
            setTimeout(function() {
                var e = 1;
                for (window.__.services.i = window.__.services.iC,
                4 == window.__.services.iC ? window.__.services.iC = 1 : window.__.services.iC++,
                $("#slider_home").removeClass().addClass("prod_" + window.__.services.i),
                $(".circle").removeClass().addClass("circle prod_" + window.__.services.iC),
                __.animations.changeSlideDot.restart(),
                __.animations.changeSlideDot.pause(),
                e = 1; e <= window.__.services.totPunti; e++) {
                    var o = 0
                      , t = 50;
                    e % 2 == 0 && (o = 50,
                    t = 100),
                    $("#circle_" + e).css({
                        top: Math.floor(100 * Math.random()) + "%",
                        left: Math.floor(Math.random() * (t - o + 1)) + o + "%"
                    })
                }
                $("#badBro").css("display", "none")
            }, 2e3)
        }
    }),
    window.__.animations.pulseSpot = function() {
        function e() {
            __.services.pulse === !1 && __.timeline.pulseSpot.pause()
        }
        __.timeline.pulseSpot = new TimelineMax({
            paused: !0,
            repeat: -1,
            onRepeat: e
        }),
        __.timeline.pulseSpot.to(__.services.args_spotPulse, .2, {
            opacity: .7
        }, 0).to(__.services.args_spotPulse, 1.2, {
            r: 14,
            opacity: 0
        })
    }
    ,
    window.__.animations.changeSlideDot.to(".circle", 1.1, {
        width: "150%",
        opacity: 1
    }).to(".circle", 1.1, {
        width: "0%",
        opacity: 0
    }),
    window.__.animations.changeSlideText = function() {
//      console.log('madarchod');
//        console.log($("#knob"),2);
        lno = __.services.clockNext +'';
      
        //  var rotate = Math.floor((dragKnob.rotation)/90)+2;
        // if(rotate)
        //     console.log(lno,rotate);
         
        $('.landing').fadeOut();
        $('.landing-wrapper').attr('data-display', 'absolute');
        $('.landing-' + lno + '-wrapper').fadeIn();
        // TweenMax.killChildTweensOf($('.landing'));
        // tlMain.kill();
        if(window.innerWidth>700)
            animateLanding(lno);
      
        if ($(window).trigger("gusto::changeSlideText"),
        $("#badBro").css("display", "block"),
        $("#main").attr("data-clock", __.services.clockNext),
        $("body").attr("data-color", __.services.clockNext),
        $("#title_clock").html($("#prodotti [data-id_prod =" + __.services.clockNext + "] h1").html()),
        $("#slider_home header h2").html($("#prodotti [data-id_prod =" + __.services.clockNext + "] h2").html()),
        $("#slider_home .text p").html($("#prodotti [data-id_prod =" + __.services.clockNext + "] p").html()),
        "#" === $("#prodotti [data-id_prod =" + __.services.clockNext + "] a.get_target").attr("href")) {
            var e = "0";
            $("#slider_home .text a.cont_circle_button,#slider_home .text a.btn_on_img").css("display", "none")
        } else {
            var e = "1";
            $("#slider_home .text a.cont_circle_button,#slider_home .text a.btn_on_img").css("display", "block")
        }
        $("#slider_home .text a").not(".exteta").attr({
            href: $("#prodotti [data-id_prod =" + __.services.clockNext + "] a.get_target").attr("href"),
            "data-target": $("#prodotti [data-id_prod =" + __.services.clockNext + "] a.get_target").attr("data-target")
        }),
        TweenMax.set("#title_clock div .stoca", {
            y: "100%"
        }),
        TweenMax.fromTo("#slider_home .text p,#slider_home header h2", .35, {
            y: 25,
            opacity: "0"
        }, {
            y: 0,
            opacity: "1",
            delay: ".2"
        }),
        TweenMax.fromTo("#slider_home .text a.cont_circle_button", .35, {
            y: 25,
            opacity: "0"
        }, {
            y: 0,
            opacity: e,
            delay: ".4"
        }),
        1 != __.services.clockNext ? (TweenMax.fromTo("#slider_home header h3", .35, {
            opacity: "0",
            y: -25
        }, {
            opacity: "1",
            y: 0,
            delay: .45
        }),
        $("#slider_home .img_prodotto .shadow").attr({
            src: $("#prodotti [data-id_prod =" + __.services.clockNext + "] .shadow").attr("src"),
            title: $("#prodotti [data-id_prod =" + __.services.clockNext + "] .shadow").attr("title")
        }),
        $("#slider_home .img_prodotto .prod").attr({
            src: $("#prodotti [data-id_prod =" + __.services.clockNext + "] .prod").attr("src"),
            title: $("#prodotti [data-id_prod =" + __.services.clockNext + "] .prod").attr("title")
        }),
        TweenMax.to("#slider_home .img_prodotto .shadow", .4, {
            opacity: "1",
            delay: .45
        }),
        TweenMax.fromTo("#slider_home .img_prodotto .prod", .45, {
            scale: 1.1,
            opacity: "0"
        }, {
            scale: 1,
            opacity: "1"
        })) : TweenMax.fromTo("#slider_home header h3", .35, {
            opacity: "0"
        }, {
            opacity: "0",
            delay: .45
        }),
        TweenMax.staggerFromTo("#title_clock .stoca", .35, {
            y: "100%"
        }, {
            y: "0%"
        }, .03)
    }
    ,
    window.__.animations.polarToCartesian = function(e, o, t, i) {
        var s = (i - 90) * Math.PI / 180;
        return {
            x: e + t * Math.cos(s),
            y: o + t * Math.sin(s)
        }
    }
    ,
    window.__.animations.describeArc = function(e, o, t, i, s) {
        var c = window.__.animations.polarToCartesian(e, o, t, s)
          , r = window.__.animations.polarToCartesian(e, o, t, i)
          , a = 180 >= s - i ? "0" : "1"
          , n = ["M", c.x, c.y, "A", t, t, 0, a, 0, r.x, r.y].join(" ");
        return n
    }
    ,
    window.__.pages.home = function() {
        $("#main").attr("data-clock", 1),
        $("body").attr("data-color", 1),
        window.__.services.mobile ? ($(".footer-left").css("position", "fixed"),
        __.services.clock.allow = !1,
        __.services.swiperMobile = new Swiper($("#prodotti"),{
            pagination: ".swiper-pagination",
            spaceBetween: 0,
            loop: !0,
            paginationClickable: !0,
            autoplay: 3e3,
            speed: 800
        })) : __.clock = new __.func_clock,
        $(window).on({
            "gusto::changeHome": function(e) {
                $("#badBro").css("display", "block"),
                __.services.clockPrev != "" + __.services.i + __.services.iC && (1 == __.services.iC && __.services.i != __.services.iC ? ($(".circle").removeClass().addClass("circle prod_" + window.__.services.i).css("width", "150%"),
                $("#slider_home").removeClass().addClass("prod_" + window.__.services.iC),
                $(window).trigger("gusto::clockstop"),
                TweenMax.to("#slider_home .text p,#slider_home .text a,#slider_home header h2", .35, {
                    opacity: "0"
                }),
                TweenMax.fromTo("#slider_home header h3", .35, {
                    opacity: "1",
                    y: 0
                }, {
                    opacity: "0",
                    y: -25
                }),
                TweenMax.to("#slider_home .img_prodotto .shadow", .2, {
                    opacity: "0"
                }),
                TweenMax.fromTo("#slider_home .img_prodotto .prod", .35, {
                    opacity: "1",
                    scale: 1
                }, {
                    opacity: "0",
                    scale: 1.1,
                    delay: .15
                }),
                TweenMax.staggerFromTo("#title_clock .stoca", .35, {
                    y: "0%"
                }, {
                    y: "-100%"
                }, .03, __.animations.changeSlideText),
                __.animations.changeSlideDot.reverse(0)) : 1 != __.services.iC && __.services.i != __.services.iC ? (TweenMax.set(".img_prodotto", {
                    opacity: "1"
                }),
                TweenMax.to("#slider_home .text p,#slider_home .text a,#slider_home header h2", .35, {
                    opacity: "0"
                }),
                TweenMax.fromTo("#slider_home header h3", .35, {
                    opacity: "1",
                    y: 0
                }, {
                    opacity: "0",
                    y: -25
                }),
                TweenMax.to("#slider_home .img_prodotto .shadow", .2, {
                    opacity: "0"
                }),
                TweenMax.fromTo("#slider_home .img_prodotto .prod", .35, {
                    opacity: "1",
                    scale: 1
                }, {
                    opacity: "0",
                    scale: 1.1,
                    delay: .15
                }),
                TweenMax.staggerFromTo("#title_clock .stoca", .35, {
                    y: "0%"
                }, {
                    y: "-100%"
                }, .03, __.animations.changeSlideText),
                __.animations.changeSlideDot.play()) : ($("#main").attr("data-clock", __.services.clockNext),
                $("body").attr("data-color", __.services.clockNext),
                __.animations.changeSlideDot.play()),
                __.services.clockPrev = "" + __.services.i + __.services.iC)
            }
        })
    }
    ,
    "onpageshow"in window ? window.addEventListener("pageshow", function(e) {
        window.__.function.pageLoad()
    }) : window.onload = function() {
        window.__.function.pageLoad()
    }
    ;
    var allClasses = {};
    allClasses.func_promisedEvents = function() {}
    ,
    allClasses.func_promisedEvents.prototype.init = function(e) {
        this.conditionsArr = [],
        this.conditionsCallback = e
    }
    ,
    allClasses.func_promisedEvents.prototype.addCondition = function(e) {
        return this.conditionsArr.push(e) - 1
    }
    ,
    allClasses.func_promisedEvents.prototype.getCondition = function(e) {
        return this.conditionsArr[e]
    }
    ,
    allClasses.func_promisedEvents.prototype.setCondition = function(e, o) {
        return this.conditionsArr[e] = o,
        this.conditionsArr[e]
    }
    ,
    allClasses.func_promisedEvents.prototype.changeCondition = function(e, o) {
        for (var t = 0; t < this.conditionsArr.length; t++)
            if (this.conditionsArr[t] == e)
                return this.conditionsArr[t] = o,
                !0;
        return !1
    }
    ,
    allClasses.func_promisedEvents.prototype.verifyCondition = function(e) {
        for (var o = !0, t = 0; t < this.conditionsArr.length; t++)
            this.conditionsArr[t] != e && (o = !1);
        return !!o && (this.conditionsCallback(),
        !0)
    }
    ,
    allClasses.func_redesignPage = function() {
        if ($(window).width(),
        $(window).height(),
        __.services.w = $(window).width(),
        __.services.h = $(window).height(),
        !$("html").hasClass("mobile") && !$("html").hasClass("tablet") && __.services.h < 700 && (__.services.h = 700),
        "block" == $("#mobile").css("display") ? window.__.services.mobile = !0 : window.__.services.mobile = !1,
        __.services.mobile ? ($(".full-height").css("min-height", __.services.h),
        $(".cont_mobile").css("height", $(".cont_mobile img").height())) : ($(".full-height").css("height", __.services.h),
        ($(".full-height").css("min-height", __.services.h),
        $(".full-height").css("height", "auto"))),
        $('[data-page="contact"]').length > 0) {
            var e = $('[data-page="contact"] .page_item .container').height() + 300;
            __.services.h < e && $('[data-page="contact"] .full-height').css("height", e)
        }
        $('[data-page="homepage"]').length > 0 && (__.services.w >= __.services.h ? $(".container_clock").css({
            width: .95 * __.services.h,
            height: .95 * __.services.h,
            "-webkit-transform": "translate(-50%, -50%)",
            "-moz-transform": "translate(-50%, -50%)",
            "-ms-transform": "translate(-50%, -50%)",
            "-o-transform": "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)"
        }) : $(".container_clock").css({
            height: .95 * __.services.w,
            width: .95 * __.services.w,
            "-webkit-transform": "translate(-50%, -50%)",
            "-moz-transform": "translate(-50%, -50%)",
            "-ms-transform": "translate(-50%, -50%)",
            "-o-transform": "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)"
        }))
    }
    ,
    allClasses.func_putImages = function(e, o, t, i) {
        switch (i = "undefined" != typeof i ? i : "default") {
        case "imgSRC":
            $("img[" + o + '="' + e + '"]').attr("src", e);
            break;
        default:
            $("img[" + o + '="' + e + '"]').closest(t).css({
                backgroundImage: "url(" + e + ")"
            })
        }
    }
    ,
    allClasses.func_preloadGeneric = function(e) {
        e.onStart(),
        window.__.services.promise = new allClasses.func_promisedEvents,
        window.__.services.promise.init(e.onEnd);
        for (var o = function() {
            var e = $("img:not(.promise)").map(function() {
                return $(this).attr("data-full")
            }).get();
            e.length > 0 && $.imgpreload(e, {
                each: function() {
                    allClasses.func_putImages($(this).attr("src"), "data-full", ".bg", "imgSRC")
                },
                all: function() {}
            })
        }, t = $(".promise").map(function() {
            return $(this).attr("data-full")
        }).get(), i = $("img").map(function() {
            return $(this).attr("src")
        }).get(), s = 0; s < i.length; s++)
            allClasses.func_putImages(i[s], "src", ".bg", "imgSRC");
        for (var s = 0; s < t.length; s++)
            window.__.services.promise.addCondition(t[s]);
        t.length > 0 ? $.imgpreload(t, {
            each: function() {
                window.__.services.promise.changeCondition($(this).attr("src"), "ok"),
                window.__.services.promise.verifyCondition("ok"),
                allClasses.func_putImages($(this).attr("src"), "data-full", ".bg")
            },
            all: function() {
                o()
            }
        }) : o()
    }
    ,
    allClasses.func_rendering = function() {
        var e = $("#main").attr("data-page");
        switch (window.__.services.isSmartphone,
        e) {
        case "homepage":
            $("html").updateClass("page", "home", "-"),
            allClasses.func_redesignPage(),
            allClasses.func_preloadGeneric({
                onStart: function() {},
                onEnd: function() {
                    allClasses.func_redesignPage(),
                    __.services.w >= __.services.h ? 2 * __.services.w : 2 * __.services.h,
                    allClasses.func_redesignPage()
                }
            });
            break;
        default:
            allClasses.func_preloadGeneric({
                onStart: function() {},
                onEnd: function() {
                    if (allClasses.func_redesignPage(),
                    __.services.w >= __.services.h)
                        var e = 2 * __.services.w;
                    else
                        var e = 2 * __.services.h;
                    allClasses.func_redesignPage(),
                    TweenMax.fromTo("#preloader", .35, {
                        width: e,
                        height: e
                    }, {
                        width: 0,
                        height: 0,
                        onComplete: function() {
                            $("#preloader").remove()
                        }
                    })
                }
            })
        }
    }
    ,
    __.func_clock = function() {
        __.services.clock.maxTime = 270,
        __.services.clock.startTime = 0,
        __.services.clock.currrentTime = 0,
        __.services.clock.intervalTime = 150,
        __.services.clock.respawnIntervalTime = 150,
        __.services.clock.reset_intervalTime = 20,
        __.services.clock.reset_intervalTimeToprod = 5,
        __.services.clock.delay = 0,
        __.services.clock.delayBase = .001,
        __.services.clock.allTime = 1.7,
        __.services.clock.interval = 0,
        __.services.clock.sendIdProd = !0,
        __.services.clock.humanInteraction = !1,
        __.services.clock.interaction = !1,
        __.services.clock.allow = !0,
        __.services.clock.size = {},
        __.services.clock.size.h = $(".container_clock").height(),
        __.services.clock.size.margin = 75,
        __.services.clock.size.arcMargin = 8,
        $(".container_clock").html('<div id="clock"></div>'),
        this.createLine(),
        this.renderClock()
    }
    ,
    __.func_clock.prototype.createLine = function(e, o, t) {
        $(window).trigger("gusto::clockcreateline"),
        __.services.clock.quad = [];
        var i = __.services.clock.size.margin
          , s = __.services.clock.size.h - i
          , c = __.services.clock.size.h
          , r = c / 2
          , a = c / 2
          , e = "undefined" != typeof e ? e : 10
          , o = "undefined" != typeof o ? o : 20
          , t = "undefined" != typeof t ? t : s / 2
          , n = 0
          , l = t
          , _ = 270
          , d = "std";
        n = 270;
        for (var v = 0, p = 270; 360 >= p; p++) {
            var h = Math.sin(Math.radians(n)) * t
              , w = Math.cos(Math.radians(n)) * t;
            p % 90 == 0 ? (l = t + o*2,
            d = "big") : (l = t + e*2,
            d = "std");
            var u = Math.sin(Math.radians(n)) * l
              , g = Math.cos(Math.radians(n)) * l;
            h = a - h,
            u = a - u,
            w = r + w,
            g = r + g,
            p % 2 == 0 ? __.services.clock.quad.push({
                x1: w,
                y1: h,
                x2: g,
                y2: u,
                alpha: n,
                index: p,
                order: _,
                mode: d,
                r: t,
                custom_r: l,
                key: v
            }): null,
            v++,
            n += 1,
            --_
        }
        var d = "std";
        _ = 180,
        n = 0;
        for (var p = 0; 180 >= p; p++) {
            var h = Math.sin(Math.radians(n)) * t
              , w = Math.cos(Math.radians(n)) * t;
            p % 90 == 0 ? (l = t + o*2,
            d = "big") : (l = t + e*2,
            d = "std");
            var u = Math.sin(Math.radians(n)) * l
              , g = Math.cos(Math.radians(n)) * l;
            n > 0 && 90 >= n && (h = a - h,
            u = a - u,
            w = r + w,
            g = r + g),
            n > 90 && 180 >= n && (h = a - h,
            u = a - u,
            w = r - -1 * w,
            g = r - -1 * g),
            p % 2 == 0 ? 0 != n && __.services.clock.quad.push({
                x1: w,
                y1: h,
                x2: g,
                y2: u,
                alpha: n,
                index: p,
                order: _,
                mode: d,
                r: t,
                custom_r: l,
                key: v
            }): 0!=n,
            v++,
            n += 1,
            _ -= 1
        }
        return __.services.clock.quad
    }
    ,
    __.func_clock.prototype.renderClock = function() {
        var e = this;
        $(window).trigger("gusto::clockrender"),
        TweenMax.set(".bg-front", {
            scale: 1.05,
            opacity: 0,
            ease: Power2.easeInOut
        });
        var o = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + __.services.clock.size.h + " " + __.services.clock.size.h + '" preserveAspectRatio="xMidYMid meet"><g>';
        __.services.clock.quad.forEach(function(e) {
            o += '<line x1="' + e.x1 + '" y1="' + e.y1 + '" x2="' + e.x2 + '" y2="' + e.y2 + '" style="" data-alpha="' + e.alpha + '" data-index="' + e.index + '" data-order="' + e.order + '" data-mode="' + e.mode + '" data-r="' + e.r + '" data-r2="' + e.custom_r + '" />'
        }),
        o += '<path id="arc_path_1" fill="none" stroke-width=".5" stroke-dasharray="2,5" /><path id="arc_path_2" fill="none"  stroke-width="1" /></g></svg>',
        $("#slider_home .container_clock #clock").append(o),
        $("#clock svg line").not(":nth-child(even)").each(function(e) {
            __.services.clock.data[$(this).attr("data-alpha")] = {
                _x1: $(this).attr("x1"),
                _y1: $(this).attr("y1"),
                _x2: $(this).attr("x2"),
                _y2: $(this).attr("y2"),
                x1: $(this).attr("x1"),
                y1: $(this).attr("y1"),
                x2: $(this).attr("x2"),
                y2: $(this).attr("y2"),
                index: $(this).attr("data-alpha"),
                key: e
            }
        }),
        this.renderKnob(),
        this.renderKnobSupports(),
        $(window).on("gusto::clock-in", function(o, t) {
            $(window).scrollTop() > 0 ? TweenLite.to(window, 1, {
                scrollTo: {
                    y: "0px"
                },
                ease: Power2.easeOut,
                onComplete: function() {
                    setTimeout(function() {
                        e.clockIn(t)
                    }, 1e3)
                }
            }) : e.clockIn(t)
        }),
        $(window).on("gusto::clock-out", function(o, t) {
            e.clockOut(t)
        })
    }
    ,
    __.func_clock.prototype.renderKnob = function() {
        function e(e) {
            var o = e.toString(16);
            return 1 == o.length ? "0" + o : o
        }
        function o(o, t, i) {
            return "#" + e(o) + e(t) + e(i)
        }
        function t() {
            r(c)
        }
        __.services.clockNext = 1;
        var i = '<div id="knobBG"><div id="badBro"></div><div id="knob"><div id="spot"><canvas id="ctx" width="30" height="30"> </canvas></div> </div>';
        $("#slider_home .container_clock #clock").append(i);
        var s = document.getElementById("ctx")
          , c = s.getContext("2d");
        __.services.args_spotIn = {
            r: 9,
            x: 15,
            y: 15
        },
        __.services.args_spotPulse = {
            r: 9,
            x: 15,
            y: 15,
            opacity: 0
        },
        __.services.args_arrow = {
            opacity: 0,
            scale: .8
        },
        __.services.args_color = {
            r: 252,
            g: 192,
            b: 124
        };
        var r = function(e) {
            e.imageSmoothingEnabled = !1,
            e.clearRect(0, 0, 30, 30);
            var t = o(Math.round(__.services.args_color.r), Math.round(__.services.args_color.g), Math.round(__.services.args_color.b));
            e.beginPath(),
            e.lineWidth = "2",
            e.strokeStyle = t,
            e.globalAlpha = 1,
            e.arc(__.services.args_spotIn.x, __.services.args_spotIn.y, __.services.args_spotIn.r, 0, 2 * Math.PI),
            e.stroke(),
            e.beginPath(),
            e.lineWidth = "2",
            e.strokeStyle = t,
            e.globalAlpha = __.services.args_spotPulse.opacity,
            e.arc(__.services.args_spotPulse.x, __.services.args_spotPulse.y, __.services.args_spotPulse.r, 0, 2 * Math.PI),
            e.stroke(),
            e.save(),
            e.beginPath(),
            e.fillStyle = t,
            e.globalAlpha = __.services.args_arrow.opacity;
            var i = new Path2D("M6.9,7.5l3.3-3.3L6.9,1l1-1l4.3,4.3L7.9,8.5L6.9,7.5z")
              , s = new Path2D("M5.2,1L2,4.3l3.3,3.3l-1,1L0,4.3L4.3,0L5.2,1z");
            e.scale(__.services.args_arrow.scale, __.services.args_arrow.scale),
            e.translate(12.5, 14.5),
            e.fill(i),
            e.fill(s),
            e.restore()
        };
        TweenLite.ticker.addEventListener("tick", t),
        __.animations.pulseSpot(),
        __.timeline.pulseSpot.play()
    }
    ,
    __.func_clock.prototype.renderKnobSupports = function() {
        __.services.clock.prodotti = 4,
        $('svg line[data-mode="big"]').each(function(e) {
            $(this).attr("prod-index", __.services.clock.prodotti - e),
            $(this).css({
                strokeWidth: 2
            })
        }),
        this.setEvt(),
        this.setMouseEvt(),
        this.circle_path()
    }
    ,
    __.func_clock.prototype.designClockFirstTime = function() {
        $(window).trigger("gusto::clockstop"),
        $(window).trigger("gusto::clock-in", {
            type: "first"
        })
    }
    ,
    __.func_clock.prototype.clockIn = function(e) {
        function o() {
            $(window).trigger("gusto::clockready")
        }
        var t = this
          , i = new Array
          , s = new Array
          , c = new Array
          , r = new Array;
        __.services.clock.allow = !0,
        $("#title_clock h1, #title_clock div").css("overflow", "visible"),
        $("#slider_home header h1,#slider_home header h1 div").css("overflow", "visible"),
        $(".container_clock").css({
            display: "block",
            "z-index": "100"
        }),
        __.services.clock.delay = 0,
        __.services.clock.allTime = 0,
        t.createLine(0, 0, __.services.clock.size.h / 2 - __.services.clock.size.margin).forEach(function(e) {
            i[e.alpha] = new Array,
            s[e.alpha] = new Array,
            c[e.alpha] = new Array,
            r[e.alpha] = new Array,
            i[e.alpha].push(e.x1),
            s[e.alpha].push(e.y1),
            c[e.alpha].push(e.x2),
            r[e.alpha].push(e.y2),
            $('#clock svg line[data-alpha="' + e.alpha + '"]').css({
                opacity: 1
            })
        }),
        $("body").css("visibility", "visible");
        var a = t.createLine();
        __.services.clock.delayBase = .003,
        __.services.clock.allTime = a.length * __.services.clock.delayBase,
        a.forEach(function(e) {
            __.services.clock.delay += __.services.clock.delayBase,
            __.services.clock.data[e.alpha] = e,
            i[e.alpha].push(e.x1),
            s[e.alpha].push(e.y1),
            c[e.alpha].push(e.x2),
            r[e.alpha].push(e.y2),
            _tween_loader(e.alpha, i[e.alpha], s[e.alpha], c[e.alpha], r[e.alpha], __.services.clock.delay, 2.5 * __.services.clock.allTime)
        }),
        setTimeout(function() {
            $(".container_clock").css("z-index", "10")
        }, 2.5 * __.services.clock.allTime * 1e3),
        $("#target_history").css("display", "none");
        var n = "-60px"
          , l = "0px"
          , _ = 1
          , d = 1;
        void 0 !== e && void 0 !== e.type && ("first" == e.type && (n = "100%",
        l = "0%",
        _ = 0,
        d = 0),
        "toAboutHome" == e.type && (n = "-60px",
        l = "0px",
        _ = 0));
        var v = [];
        v.push($("header nav")),
        v.push($("header .exteta_logo_header")),
        v.push($("header button")),
        v.push($("footer")),
        $('[data-module="cookies"]').length > 0 && v.push($('[data-module="cookies"]')),
        __.services.clockInTimeline = new TimelineLite({
            paused: !0,
            onComplete: o
        }),
        __.services.clockInTimeline.set(v, {
            opacity: d
        }).to(".bg-front", 1.8, {
            scale: 1,
            opacity: 1,
            ease: Power2.easeInOut
        }).staggerFromTo("#title_clock .stoca", 2, {
            y: n,
            opacity: _
        }, {
            y: l,
            opacity: 1,
            ease: Elastic.easeOut
        }, -.01, .5, function() {
            $("#slider_home header h1,#slider_home header h1 div").css("overflow", "hidden"),
            $("#title_clock h1, #title_clock div").css("overflow", "hidden")
        }).staggerTo(v, 1, {
            opacity: 1,
            ease: Power2.easeInOut
        }, -.3, .5).to('[data-item="title"] span', .35, {
            y: 15,
            opacity: "0"
        }, 1.3).to("#slider_home .img_prodotto,.big_img", 1.2, {
            left: "-10%",
            width: "72%",
            ease: Power3.easeInOut,
            onComplete: function() {
                $("#slider_home header h3").css("display", "block"),
                $("#target_history .cont_prod").html()
            }
        }, .35).to("#slider_home .text a", .35, {
            y: 0,
            opacity: "1"
        }, 2.1).to("#slider_home .text p,#slider_home header h2", .35, {
            y: 0,
            opacity: "1"
        }, 2.3).to("#slider_home header h3", .5, {
            opacity: 1
        }, 2.3).to(".stdFooter", .5, {
            opacity: "1"
        }, .3).to($("#title_clock").parent().find("h2"), .75, {
            opacity: 1
        }, 1.8).to($("#title_clock").parent().parent().find(".text"), .75, {
            opacity: 1
        }, 1.8).fromTo($("#knobBG"), 1.5, {
            scale: .8,
            opacity: 0,
            ease: Power2.easeInOut
        }, {
            scale: 1,
            opacity: 1,
            ease: Power2.easeInOut,
            onComplete: function() {
                $(window).trigger("gusto::clockready")
            }
        }, .5),
        __.services.clockInTimeline.play()
    }
    ,
    __.func_clock.prototype.designClock = function() {
        $(window).trigger("gusto::clockstop");
        var e = new TimelineLite({
            onComplete: function() {}
        });
        e.set("svg line", {
            opacity: 1
        }).fromTo($("#spot"), 1, {
            opacity: 0
        }, {
            opacity: 1
        }, .25).staggerFromTo("#title_clock .stoca", .35, {
            y: "100%"
        }, {
            y: "0%"
        }, .03, .25).to($("#title_clock").parent().find("h2"), .75, {
            opacity: 1
        }, .25).to($("#title_clock").parent().parent().find(".text"), .75, {
            opacity: 1
        }, .25)
    }
    ,
    __.func_clock.prototype.setEvt = function() {
        var e = this
          , t = 0;
        $(window).on("gusto::clockready", e.start_timerClock),
        $(window).on("gusto::clockreset", e.reset_timerClock),
        $(window).on("gusto::clockresetdone", function() {
            e.stop_timerClock(),
            e.start_timerClock()
        }),
        $(window).on("gusto::clockcheck", function() {
            e.check_timerClock()
        }),
        $(window).on("gusto::clockstop", function() {
            window.clearInterval(__.services.clock.interval)
        }),
        $(window).on("gusto::clockkill", function() {
            window.clearInterval(__.services.clock.interval),
            window.clearInterval(__.services.clock.intervalKnob)
        }),
        $(window).on("gusto::clockstart", e.start_timerClock),
        $(window).on("gusto::clockproduct", function(o, i, s) {
            t > 0 ? (e.updateKnob(o, i, s),
            e.updateEnv(o, i, s)) : t++
        }),
        $(window).on("gusto::clocksetproduct", function(t, o, i) {
            var s = parseInt(o.id);
            window.__.services.iC = parseInt(s),
            1 == __.services.iC && __.services.i != __.services.iC || $(".circle").removeClass().addClass("circle prod_" + window.__.services.iC),
            window.__.services.iC != window.__.services.i && (void 0 != $('svg line[prod-index="' + s + '"]').attr("data-order") ? e.set_animationClock($('svg line[prod-index="' + s + '"]').attr("data-order")) : (s = 1,
            e.set_animationClock(s)),
            window.__.services.clockNext = s,
            $(window).trigger("gusto::changeHome"))
        }),
        $(window).on("gusto::changeSlideText", function() {
            function e(e) {
                var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
                return t ? {
                    r: parseInt(t[1], 16),
                    g: parseInt(t[2], 16),
                    b: parseInt(t[3], 16)
                } : null
            }
            TweenLite.to(__.services.args_color, .6, {
                colorProps: e("#" + colors_2[__.services.clockNext].exa),
                ease: Linear.easeNone
            })
        }),
        $(window).on("gusto::clockBtnHover", function() {
            if (!__.services.imgProdottoStopHover) {
                (new TimelineLite).to(".img_prodotto", 1, {
                    scale: "1.04",
                    ease: Power2.easeInOut
                })
            }
        }),
        $(window).on("gusto::clockBtnHoverOut", function() {
            (new TimelineLite).to(".img_prodotto", .4, {
                scale: "1",
                ease: Power2.easeOut
            })
        })
    }
    ,
    __.func_clock.prototype.setMouseEvt = function() {
        $("#spot").on("mouseenter", function() {
            __.services.clock.interaction || ($(window).trigger("gusto::clockstop"),
            $("#main").addClass("knobHover"),
            TweenMax.to(__.services.args_spotIn, .4, {
                r: 12,
                ease: Power4.easeInOut
            }),
            TweenMax.to(__.services.args_arrow, .7, {
                opacity: 1,
                ease: Power4.easeInOut
            }),
            __.services.pulse = !1),
            $(window).trigger("gusto::spotEnter")
        }),
        $("#spot").on("mouseleave", function() {
            $(window).trigger("gusto::clockstart"),
            __.services.clock.interaction || $("#main").removeClass("knobHover"),
            $(window).trigger("gusto::spotLeave"),
            TweenMax.to(__.services.args_arrow, .4, {
                opacity: 0,
                ease: Power4.easeInOut
            }),
            TweenMax.to(__.services.args_spotIn, .5, {
                r: 9,
                onComplete: function() {
                    __.services.pulse = !0,
                    __.timeline.pulseSpot.resume(),
                    __.timeline.pulseSpot.repeat(-1)
                }
            })
        }),
        $("#slider_home .container_clock").on("mouseenter", function() {}),
        $("#slider_home .container_clock").on("mouseleave", function() {})
    }
    ,
    __.func_clock.prototype.check_timerClock = function() {
        __.services.clock.allow || $(window).trigger("gusto::clockstop")
    }
    ,
    __.func_clock.prototype.start_timerClock = function() {
        "none" != $("#knobBG").css("display") && ($("#main").removeClass("knobHover"),
        __.services.clock.humanInteraction = !1,
        __.services.clock.interaction = !1,
        window.clearInterval(__.services.clock.interval),
        __.services.clock.interval = setInterval(function() {
            $('svg line[data-order="' + __.services.clock.currrentTime + '"]').attr("class", "active"),
            TweenMax.fromTo('svg line[data-order="' + __.services.clock.currrentTime + '"][data-mode="std"]', .2, {
                opacity: .5
            }, {
                opacity: 1
            }),
            void 0 != $('svg line[data-order="' + __.services.clock.currrentTime + '"]').attr("prod-index") && $(window).trigger("gusto::clockproduct", [{
                time: __.services.clock.currrentTime,
                id: $('svg line[data-order="' + __.services.clock.currrentTime + '"]').attr("prod-index")
            }]),
            __.services.clock.currrentTime++,
            __.services.clock.currrentTime > __.services.clock.maxTime && $(window).trigger("gusto::clockreset"),
            $(window).trigger("gusto::clockcheck")
        }, __.services.clock.intervalTime),
        $(window).trigger("gusto::clockcheck"))
    }
    ,
    __.func_clock.prototype.reset_timerClock = function() {
        __.services.clock.interaction = !0,
        window.clearInterval(__.services.clock.interval),
        __.services.clock.interval = setInterval(function() {
            $('svg line[data-order="' + __.services.clock.currrentTime + '"]').attr("class", ""),
            TweenMax.fromTo('svg line[data-order="' + __.services.clock.currrentTime + '"][data-mode="std"]', .2, {
                opacity: 1
            }, {
                opacity: .5
            }),
            __.services.clock.currrentTime--,
            __.services.clock.currrentTime < 0 && $(window).trigger("gusto::clockresetdone"),
            $(window).trigger("gusto::clockcheck")
        }, __.services.clock.reset_intervalTime),
        $(window).trigger("gusto::clockcheck")
    }
    ,
    __.func_clock.prototype.stop_timerClock = function() {
        window.clearInterval(__.services.clock.interval)
    }
    ,
    __.func_clock.prototype.reset_animationClock = function() {
        window.clearInterval(__.services.clock.interval),
        __.services.clock.interval = setInterval(function() {
            $('svg line[data-order="' + __.services.clock.currrentTime + '"]').attr("class", ""),
            TweenMax.fromTo('svg line[data-order="' + __.services.clock.currrentTime + '"][data-mode="std"]', .2, {
                opacity: 1
            }, {
                opacity: .5
            }),
            __.services.clock.currrentTime--,
            __.services.clock.currrentTime < 0 && $(window).trigger("gusto::clockresetanim"),
            $(window).trigger("gusto::clockcheck")
        }, __.services.clock.reset_intervalTime),
        $(window).trigger("gusto::clockcheck")
    }
    ,
    __.func_clock.prototype.updateKnob = function(e, o, t) {
        "human" != o.mode && TweenMax.to(knob, 1, {
            rotation: parseInt(o.time) - 90,
            onUpdate: function() {
                __.services.clock.showInteraction(knob._gsTransform.rotation);
              $('.landing-wrapper').attr('data-display', 'none');
//              console.log('ghuma');
            },
            onComplete: function() {
//              console.log('ghuma');
                "1" == $("#main").attr("data-clock") && $(window).trigger("gusto::clockready")
            }
        })
    }
    ,
    __.func_clock.prototype.updateEnv = function(e, o, t) {
        
        window.__.services.iC = parseInt(o.id),
        __.services.clock.sendIdProd && window.__.services.iC != window.__.services.i && (1 == __.services.iC && __.services.i != __.services.iC || $(".circle").removeClass().addClass("circle prod_" + window.__.services.iC),
        window.__.services.clockNext = o.id,
        $(window).trigger("gusto::changeHome"))
    }
    ,
    __.func_clock.prototype.set_animationClock = function(e) {
        __.services.clock.currrentTime < parseInt(e) && (window.clearInterval(__.services.clock.interval),
        __.services.clock.interaction = !0,
        __.services.clock.interval = setInterval(function() {
            $('svg line[data-order="' + __.services.clock.currrentTime + '"]').attr("class", "active"),
            TweenMax.fromTo('svg line[data-order="' + __.services.clock.currrentTime + '"][data-mode="std"]', .2, {
                opacity: .5
            }, {
                opacity: 1
            }),
            void 0 != $('svg line[data-order="' + __.services.clock.currrentTime + '"]').attr("prod-index"),
            __.services.clock.currrentTime++,
            (__.services.clock.currrentTime > __.services.clock.maxTime || __.services.clock.currrentTime > e) && ($(window).trigger("gusto::clockproduct", [{
                id: $('svg line[data-order="' + (__.services.clock.currrentTime - 1) + '"]').attr("prod-index"),
                mode: "human"
            }]),
            clearInterval(__.services.clock.interval),
            __.services.clock.interval = setTimeout(function() {
                $(window).trigger("gusto::clockstart")
            }, __.services.clock.respawnIntervalTime)),
            $(window).trigger("gusto::clockcheck")
        }, __.services.clock.reset_intervalTimeToprod)),
        __.services.clock.currrentTime > parseInt(e) && (0 == parseInt(e) ? (window.clearInterval(__.services.clock.intervalX),
        __.services.clock.intervalX = setInterval(function() {
            $('svg line[data-order="' + __.services.clock.currrentTime + '"]').attr("class", ""),
            TweenMax.fromTo('svg line[data-order="' + __.services.clock.currrentTime + '"][data-mode="std"]', .2, {
                opacity: 1
            }, {
                opacity: .5
            }),
            (0 == __.services.clock.currrentTime || __.services.clock.currrentTime == e) && (__.services.clock.sendIdProd = !0,
            $(window).trigger("gusto::clockproduct", [{
                id: $('svg line[data-order="' + __.services.clock.currrentTime + '"]').attr("prod-index"),
                mode: "human"
            }]),
            window.clearInterval(__.services.clock.intervalX),
            __.services.clock.intervalX = setTimeout(function() {
                $(window).trigger("gusto::clockstart"),
                window.clearInterval(__.services.clock.intervalX)
            }, __.services.clock.respawnIntervalTime)),
            __.services.clock.currrentTime--,
            $(window).trigger("gusto::clockcheck")
        }, __.services.clock.reset_intervalTimeToprod)) : (window.clearInterval(__.services.clock.interval),
        __.services.clock.interval = setInterval(function() {
            $('svg line[data-order="' + __.services.clock.currrentTime + '"]').attr("class", ""),
            TweenMax.fromTo('svg line[data-order="' + __.services.clock.currrentTime + '"][data-mode="std"]', .2, {
                opacity: 1
            }, {
                opacity: .5
            }),
            (0 == __.services.clock.currrentTime || __.services.clock.currrentTime == e) && (__.services.clock.sendIdProd = !0,
            $(window).trigger("gusto::clockproduct", [{
                id: $('svg line[data-order="' + __.services.clock.currrentTime + '"]').attr("prod-index"),
                mode: "human"
            }]),
            window.clearInterval(__.services.clock.interval),
            __.services.clock.interval = setTimeout(function() {
                $(window).trigger("gusto::clockstart")
            }, __.services.clock.respawnIntervalTime)),
            __.services.clock.currrentTime--,
            $(window).trigger("gusto::clockcheck")
        }, __.services.clock.reset_intervalTimeToprod))),
        $(window).trigger("gusto::clockcheck")
    }
    ,
    __.func_clock.prototype.circle_path = function() {
        $("svg path#arc_path_1").attr("d", window.__.animations.describeArc(__.services.clock.size.h / 2, __.services.clock.size.h / 2, __.services.clock.size.h / 2 - __.services.clock.size.h / 100 * __.services.clock.size.arcMargin, 270, 540)),
        $("#spot").css({
            top: __.services.clock.size.arcMargin + "%"
        })
    }
    ,
    allClasses.func_rendering(),
    $('[data-page="homepage"]').length > 0 && __.pages.home()
}(window),
$("#knob").length) {
    var knob = document.getElementById("knob")
      , needsRotationUpdate = !1
      , sections = 4;
    Draggable.create(knob, {
        type: "rotation",
        throwProps: !0,
        edgeResistance: 1,
        minimumMovement: 1,
        bounds: {
            minRotation: -90,
            maxRotation: 180
        },
        onDragStart: killTweens,
        onDrag: onRotateKnob,
        onThrowUpdate: onRotateKnob2,
        snap: function(e) {
            var o = 270 / (sections - 1);
            return Math.round(e / o) * o
        }
    });
    var dragKnob = Draggable.get(knob);
    knobTween = TweenLite.set(knob, {
        rotation: -90,
//        onUpdate:showRotate
    }),
    dragKnob.update();


}
setTimeout(function() {
    $("body").css("visibility", "visible")
}, 1e3),
console.log("%c%s", "color: #fff; background-color:black; padding: 3px;  font-weight: bold; width: 100%;font-size: 12px;", "Department of Visual Media")

