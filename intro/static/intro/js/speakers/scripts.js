!function t(e, i, n) {
    function s(a, o) {
        if (!i[a]) {
            if (!e[a]) {
                var l = "function" == typeof require && require;
                if (!o && l)
                    return l(a, !0);
                if (r)
                    return r(a, !0);
                var h = new Error("Cannot find module '" + a + "'");
                throw h.code = "MODULE_NOT_FOUND",
                h
            }
            var u = i[a] = {
                exports: {}
            };
            e[a][0].call(u.exports, function(t) {
                var i = e[a][1][t];
                return s(i ? i : t)
            }, u, u.exports, t, e, i, n)
        }
        return i[a].exports
    }
    for (var r = "function" == typeof require && require, a = 0; a < n.length; a++)
        s(n[a]);
    return s
}({
    1: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function s() {
            app.ajaxEnabled && (y["default"].init(),
            y["default"].on("stateChange", u),
            y["default"].on("loading", c),
            y["default"].on("loaded", p))
        }
        function r() {
            v = new m["default"],
            v.transition = d.Transitions.outThenIn,
            v.on("transitionStart", _)
        }
        function a() {
            x["default"].on("linkClick", h),
            x["default"].init(),
            x["default"].animateIn()
        }
        function o() {
            P["default"].on("linkClick", h),
            P["default"].init(),
            P["default"].animateIn()
        }
        function l() {
            var t = arguments.length <= 0 || void 0 === arguments[0] ? null : arguments[0]
              , e = arguments.length <= 1 || void 0 === arguments[1] ? null : arguments[1]
              , i = null !== t;
            t || (t = $(".page")[0]);
            var n;
            if (t.id && S[t.id])
                n = t.id;
            else
                for (var s = t.className.split(" "), r = 0, a = s.length; r < a; r++) {
                    var o = s[r];
                    if ("page" !== o && S[o]) {
                        n = o;
                        break
                    }
                }
            if (!v.getItem(n)) {
                var l = S[n];
                v.addItem(n, l, {
                    events: {
                        linkClick: h
                    }
                })
            }
            var u = v.currentScreen ? v.currentScreen.screenData : null ;
            v.showScreen(n, null , {
                arguments: [{
                    id: n.split("-page")[0],
                    owner: v,
                    isAjax: i,
                    element: t,
                    url: e,
                    prevScreenData: u
                }]
            })
        }
        function h(t) {
            y["default"].initialized && y["default"].onLinkClick(t)
        }
        function u(t) {}
        function c() {
            w.addClass("is-loading"),
            P["default"].showLoading()
        }
        function p(t) {
            if (w.removeClass("is-loading"),
            200 !== t.status && 404 !== t.status)
                return void (location.href = app.baseUrl);
            var e = $(t.pageData)[0];
            l(e, t.url)
        }
        function f(t) {
            app.windowWidth > 0 && (app.prevWindowWidth = app.windowWidth),
            app.windowWidth = window.innerWidth,
            app.windowHeight = window.innerHeight,
            0 === app.prevWindowWidth && (app.prevWindowWidth = app.windowWidth),
            app.clientWidth = document.body.clientWidth,
            x["default"].resize(t),
            P["default"].resize(t),
            v && v.currentScreen && v.currentScreen.resize(t)
        }
        function _() {
            P["default"].onTransitionStart(v.currentScreen)
        }
        t("lazysizes");
        var d = t("screen-navigator")
          , m = n(d)
          , g = t("navigation/ajaxify")
          , y = n(g);
        t("gsap");
        var v, w, T = t("components/nav"), x = n(T), b = t("components/top-bar"), P = n(b), k = t("debounce"), O = n(k), S = {
            "home-page": t("pages/Home")["default"],
            "about-page": t("pages/About")["default"],
            "projects-page": t("pages/Projects")["default"],
            "project-page": t("pages/Project")["default"],
            "not-found-page": t("pages/NotFound")["default"]
        };
        !function() {
            window.app = window.app || {},
            app.screenXS = 480,
            app.screenS = 768,
            app.screenM = 1024,
            app.screenL = 1280,
            app.screenXL = 1400,
            app.screenXXL = 1600,
            app.isIE = navigator.userAgent.indexOf("MSIE") !== -1 || navigator.appVersion.indexOf("Trident/") > 0,
            app.ajaxEnabled = !0,
            Modernizr.history || (app.ajaxEnabled = !1),
            app.windowWidth = app.windowHeight = 0,
            app.clientWidth = 0,
            app.prevWindowWidth = 0;
            var t = !Modernizr.history;
            return t ? void $("html").addClass("app-not-init") : ($("html").addClass("app-init"),
            w = $("body"),
            "scrollRestoration"in history && (history.scrollRestoration = "manual"),
            r(),
            s(),
            a(),
            o(),
            $(window).on("resize", (0,
            O["default"])(f, 50)),
            f(),
            void l())
        }()
    }
    , {
        "components/nav": 2,
        "components/top-bar": 3,
        debounce: 16,
        gsap: 19,
        lazysizes: 22,
        "navigation/ajaxify": 5,
        "pages/About": 7,
        "pages/Home": 8,
        "pages/NotFound": 9,
        "pages/Project": 10,
        "pages/Projects": 11,
        "screen-navigator": 24
    }],
    2: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var o = t("tiny-emitter")
          , l = n(o)
          , h = function(t) {
            function e() {
                return s(this, e),
                r(this, t.call(this))
            }
            return a(e, t),
            e.prototype.init = function() {
                this.element = $("#nav"),
                this.element.find("a").on("click", this.onLinkClick.bind(this))
            }
            ,
            e.prototype.animateIn = function() {
                TweenMax.from(this.element, 1, {
                    autoAlpha: 0,
                    delay: .1
                })
            }
            ,
            e.prototype.resize = function() {}
            ,
            e.prototype.onAnimateInComplete = function() {}
            ,
            e.prototype.onLinkClick = function(t) {
                this.emit("linkClick", t)
            }
            ,
            e
        }(l["default"]);
        i["default"] = new h
    }
    , {
        "tiny-emitter": 33
    }],
    3: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var o = t("tiny-emitter")
          , l = n(o)
          , h = function(t) {
            function e() {
                s(this, e);
                var i = r(this, t.call(this));
                return i.backBtnIsWaiting = !1,
                i.backBtnIsVisible = !1,
                i.backBtnTimeline = null ,
                i.backRouteId = null ,
                i.backRouteTitle = null ,
                i.backRouteUrl = null ,
                i.waitingBackRouteId = null ,
                i.loadingIsWaiting = !1,
                i.loadingIsVisible = !1,
                i.loadingTimeline = null ,
                i
            }
            return a(e, t),
            e.prototype.init = function() {
                this.element = $("#top-bar"),
                this.backBtn = $("#breadcrumb__back-btn"),
                this.prevPage = $("#breadcrumb__prev-page"),
                this.backBtnArrow = $("#breadcrumb__arrow"),
                this.siteName = $("#site-name"),
                this.loading = $("#loading"),
                this.separator = $("#breadcrumb__separator"),
                this.element.find("a").on("click", this.onLinkClick.bind(this)),
                TweenMax.set([this.backBtn, this.separator], {
                    autoAlpha: 0
                })
            }
            ,
            e.prototype.animateIn = function() {
                TweenMax.from("#breadcrumb", .6, {
                    delay: .1,
                    autoAlpha: 0
                })
            }
            ,
            e.prototype.resize = function(t) {}
            ,
            e.prototype.showLoading = function() {
                if ((!this.loadingIsVisible || this.loadingTimeline) && (this.loadingIsWaiting = !0,
                this.backBtnIsWaiting = !1,
                !this.loadingTimeline && !this.backBtnTimeline)) {
                    if (this.backBtnIsVisible)
                        return void this.hideBackBtn();
                    if (!this.loadingIsVisible) {
                        this.loadingIsWaiting = !1,
                        this.loadingIsVisible = !0,
                        this.loadingTimeline = new TimelineMax({
                            onComplete: this.onShowLoadingComplete.bind(this)
                        });
                        var t = this.loading.width() + 4
                          , e = t + this.separator.width() + 4;
                        this.loadingTimeline.to(this.siteName, .5, {
                            x: e,
                            ease: Expo.easeOut
                        }, 0).to(this.separator, .5, {
                            x: t,
                            autoAlpha: 1
                        }, 0).to(this.loading, .5, {
                            autoAlpha: 1
                        }, 0)
                    }
                }
            }
            ,
            e.prototype.hideLoading = function() {
                this.loadingIsVisible && (this.loadingIsVisible = !1,
                this.loadingTimeline || this.backBtnTimeline || (this.loadingTimeline = new TimelineMax({
                    onComplete: this.onHideLoadingComplete.bind(this)
                }),
                this.loadingTimeline.to(this.loading, .5, {
                    autoAlpha: 0
                })))
            }
            ,
            e.prototype.showBackBtn = function() {
                var t = this;
                if (this.loadingIsWaiting = !1,
                this.backBtnIsWaiting = !0,
                !this.loadingTimeline && !this.backBtnTimeline) {
                    if (this.loadingIsVisible)
                        return void this.hideLoading();
                    if (this.backBtnIsWaiting = !1,
                    this.backBtnIsVisible = !0,
                    this.backRouteId = this.waitingBackRouteId,
                    this.backBtnTimeline = new TimelineMax({
                        onComplete: this.onShowBackBtnComplete.bind(this)
                    }),
                    this.backRouteId && this.backRouteId.length) {
                        this.prevPage[0].innerHTML = this.backRouteTitle ? this.backRouteTitle : this.backRouteId,
                        this.backBtn[0].setAttribute("href", this.backRouteUrl);
                        var e = this.backBtn.width() + 4
                          , i = e + this.separator.width() + 4
                          , n = this.separator[0]._gsTransform && this.separator[0]._gsTransform.x < e;
                        this.backBtnTimeline.to(this.siteName, .7, {
                            x: i,
                            ease: Quart.easeOut
                        }, n ? 0 : .1).to(this.separator, .7, {
                            x: e,
                            autoAlpha: 1,
                            ease: Quart.easeOut
                        }, n ? .1 : 0).set(this.backBtn, {
                            autoAlpha: 1
                        }, .2).staggerFromTo([this.backBtnArrow, this.prevPage], .7, {
                            y: 10,
                            autoAlpha: 0
                        }, {
                            y: 0,
                            autoAlpha: 1,
                            ease: Quart.easeOut,
                            onUpdate: app.isIE ? function() {
                                t.backBtnArrow[0].style.display = "none",
                                t.backBtnArrow[0].offsetHeight,
                                t.backBtnArrow[0].style.display = ""
                            }
                            : null ,
                            onComplete: function() {
                                TweenMax.set(t.backBtnArrow, {
                                    clearProps: "y"
                                })
                            }
                        }, .2, .2)
                    } else
                        this.backBtnTimeline.to(this.backBtn, .4, {
                            autoAlpha: 0
                        }, 0).set(this.separator, {
                            x: 0,
                            autoAlpha: 0
                        }, 0).to(this.siteName, .5, {
                            x: 0,
                            ease: Quart.easeOut
                        }, 0)
                }
            }
            ,
            e.prototype.hideBackBtn = function() {
                this.loadingTimeline || this.backBtnTimeline || (this.backBtnTimeline = new TimelineMax({
                    onComplete: this.onHideBackBtnComplete.bind(this)
                }),
                this.backBtnTimeline.staggerTo([this.backBtnArrow, this.prevPage], .5, {
                    y: -10,
                    ease: Quart.easeIn
                }, .1).to(this.backBtn, .5, {
                    autoAlpha: 0,
                    ease: Quart.easeIn
                }, 0))
            }
            ,
            e.prototype.onTransitionStart = function(t) {
                var e = t.element[0];
                t.isAjax && "about" === t.id && t.prevScreenData && "home" !== t.prevScreenData.id && "not-found" !== t.prevScreenData.id ? (this.waitingBackRouteId = t.prevScreenData.routeId,
                this.backRouteUrl = t.prevScreenData.url,
                t.prevScreenData.title && (this.backRouteTitle = t.prevScreenData.title)) : (this.backRouteTitle = null ,
                this.waitingBackRouteId = e.getAttribute("data-prev-route-id"),
                this.backRouteUrl = e.getAttribute("data-prev-route-url")),
                this.waitingBackRouteId === this.backRouteId && this.backBtnIsVisible && !this.backBtnTimeline || this.showBackBtn()
            }
            ,
            e.prototype.onShowLoadingComplete = function() {
                this.loadingTimeline.kill(),
                this.loadingTimeline = null ,
                this.backBtnIsWaiting && this.hideLoading()
            }
            ,
            e.prototype.onHideLoadingComplete = function() {
                this.loadingTimeline.kill(),
                this.loadingTimeline = null ,
                this.loadingIsVisible = !1,
                this.backBtnIsWaiting ? this.showBackBtn() : this.loadingIsWaiting && this.showLoading()
            }
            ,
            e.prototype.onShowBackBtnComplete = function() {
                this.backBtnTimeline.kill(),
                this.backBtnTimeline = null ,
                this.loadingIsWaiting ? this.hideBackBtn() : this.backBtnIsWaiting && this.waitingBackRouteId !== this.backRouteId && this.hideBackBtn()
            }
            ,
            e.prototype.onHideBackBtnComplete = function() {
                this.backBtnTimeline.kill(),
                this.backBtnTimeline = null ,
                this.backBtnIsVisible = !1,
                this.loadingIsWaiting ? this.showLoading() : this.backBtnIsWaiting && this.showBackBtn()
            }
            ,
            e.prototype.onLinkClick = function(t) {
                this.emit("linkClick", t)
            }
            ,
            e
        }(l["default"]);
        i["default"] = new h
    }
    , {
        "tiny-emitter": 33
    }],
    4: [function(t, e, i) {
        (function(t) {
            "use strict";
            var i = "undefined" != typeof e && e.exports && "undefined" != typeof t ? t : window;
            !function(t) {
                var e = t.GreenSockGlobals || t
                  , i = function(t) {
                    var i, n = t.split("."), s = e;
                    for (i = 0; i < n.length; i++)
                        s[n[i]] = s = s[n[i]] || {};
                    return s
                }
                  , n = i("com.greensock.utils")
                  , s = function T(t) {
                    var e = t.nodeType
                      , i = "";
                    if (1 === e || 9 === e || 11 === e) {
                        if ("string" == typeof t.textContent)
                            return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)
                            i += T(t)
                    } else if (3 === e || 4 === e)
                        return t.nodeValue;
                    return i
                }
                  , r = document
                  , a = r.defaultView ? r.defaultView.getComputedStyle : function() {}
                  , o = /([A-Z])/g
                  , l = function(t, e, i, n) {
                    var s;
                    return (i = i || a(t, null )) ? (t = i.getPropertyValue(e.replace(o, "-$1").toLowerCase()),
                    s = t || i.length ? t : i[e]) : t.currentStyle && (i = t.currentStyle,
                    s = i[e]),
                    n ? s : parseInt(s, 10) || 0
                }
                  , h = function(t) {
                    return !!(t.length && t[0] && (t[0].nodeType && t[0].style && !t.nodeType || t[0].length && t[0][0]))
                }
                  , u = function(t) {
                    var e, i, n, s = [], r = t.length;
                    for (e = 0; e < r; e++)
                        if (i = t[e],
                        h(i))
                            for (n = i.length,
                            n = 0; n < i.length; n++)
                                s.push(i[n]);
                        else
                            s.push(i);
                    return s
                }
                  , c = ")eefec303079ad17405c"
                  , p = /(?:<br>|<br\/>|<br \/>)/gi
                  , f = r.all && !r.addEventListener
                  , _ = "<div style='position:relative;display:inline-block;" + (f ? "*display:inline;*zoom:1;'" : "'")
                  , d = function(t) {
                    t = t || "";
                    var e = t.indexOf("++") !== -1
                      , i = 1;
                    return e && (t = t.split("++").join("")),
                    function() {
                        return _ + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">")
                    }
                }
                  , m = n.SplitText = e.SplitText = function(t, e) {
                    if ("string" == typeof t && (t = m.selector(t)),
                    !t)
                        throw "cannot split a null element.";
                    this.elements = h(t) ? u(t) : [t],
                    this.chars = [],
                    this.words = [],
                    this.lines = [],
                    this._originals = [],
                    this.vars = e || {},
                    this.split(e)
                }
                  , g = function x(t, e, i) {
                    var n = t.nodeType;
                    if (1 === n || 9 === n || 11 === n)
                        for (t = t.firstChild; t; t = t.nextSibling)
                            x(t, e, i);
                    else
                        3 !== n && 4 !== n || (t.nodeValue = t.nodeValue.split(e).join(i))
                }
                  , y = function(t, e) {
                    for (var i = e.length; --i > -1; )
                        t.push(e[i])
                }
                  , v = function(t, e, i, n, o) {
                    p.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(p, c));
                    var h, u, f, _, m, v, w, T, x, b, P, k, O, S, C = s(t), A = e.type || e.split || "chars,words,lines", R = A.indexOf("lines") !== -1 ? [] : null , I = A.indexOf("words") !== -1, M = A.indexOf("chars") !== -1, z = "absolute" === e.position || e.absolute === !0, j = z ? "&#173; " : " ", D = -999, L = a(t), E = l(t, "paddingLeft", L), B = l(t, "borderBottomWidth", L) + l(t, "borderTopWidth", L), F = l(t, "borderLeftWidth", L) + l(t, "borderRightWidth", L), N = l(t, "paddingTop", L) + l(t, "paddingBottom", L), W = l(t, "paddingLeft", L) + l(t, "paddingRight", L), X = l(t, "textAlign", L, !0), Y = t.clientHeight, U = t.clientWidth, $ = "</div>", q = d(e.wordsClass), V = d(e.charsClass), H = (e.linesClass || "").indexOf("++") !== -1, Q = e.linesClass, G = C.indexOf("<") !== -1, Z = !0, K = [], J = [], tt = [];
                    for (H && (Q = Q.split("++").join("")),
                    G && (C = C.split("<").join("{{LT}}")),
                    h = C.length,
                    _ = q(),
                    m = 0; m < h; m++)
                        if (w = C.charAt(m),
                        ")" === w && C.substr(m, 20) === c)
                            _ += (Z ? $ : "") + "<BR/>",
                            Z = !1,
                            m !== h - 20 && C.substr(m + 20, 20) !== c && (_ += " " + q(),
                            Z = !0),
                            m += 19;
                        else if (" " === w && " " !== C.charAt(m - 1) && m !== h - 1 && C.substr(m - 20, 20) !== c) {
                            for (_ += Z ? $ : "",
                            Z = !1; " " === C.charAt(m + 1); )
                                _ += j,
                                m++;
                            ")" === C.charAt(m + 1) && C.substr(m + 1, 20) === c || (_ += j + q(),
                            Z = !0)
                        } else
                            _ += M && " " !== w ? V() + w + "</div>" : w;
                    for (t.innerHTML = _ + (Z ? $ : ""),
                    G && g(t, "{{LT}}", "<"),
                    v = t.getElementsByTagName("*"),
                    h = v.length,
                    T = [],
                    m = 0; m < h; m++)
                        T[m] = v[m];
                    if (R || z)
                        for (m = 0; m < h; m++)
                            x = T[m],
                            f = x.parentNode === t,
                            (f || z || M && !I) && (b = x.offsetTop,
                            R && f && b !== D && "BR" !== x.nodeName && (u = [],
                            R.push(u),
                            D = b),
                            z && (x._x = x.offsetLeft,
                            x._y = b,
                            x._w = x.offsetWidth,
                            x._h = x.offsetHeight),
                            R && (I !== f && M || (u.push(x),
                            x._x -= E),
                            f && m && (T[m - 1]._wordEnd = !0),
                            "BR" === x.nodeName && x.nextSibling && "BR" === x.nextSibling.nodeName && R.push([])));
                    for (m = 0; m < h; m++)
                        x = T[m],
                        f = x.parentNode === t,
                        "BR" !== x.nodeName ? (z && (k = x.style,
                        I || f || (x._x += x.parentNode._x,
                        x._y += x.parentNode._y),
                        k.left = x._x + "px",
                        k.top = x._y + "px",
                        k.position = "absolute",
                        k.display = "block",
                        k.width = x._w + 1 + "px",
                        k.height = x._h + "px"),
                        I ? f && "" !== x.innerHTML ? J.push(x) : M && K.push(x) : f ? (t.removeChild(x),
                        T.splice(m--, 1),
                        h--) : !f && M && (b = !R && !z && x.nextSibling,
                        t.appendChild(x),
                        b || t.appendChild(r.createTextNode(" ")),
                        K.push(x))) : R || z ? (t.removeChild(x),
                        T.splice(m--, 1),
                        h--) : I || t.appendChild(x);
                    if (R) {
                        for (z && (P = r.createElement("div"),
                        t.appendChild(P),
                        O = P.offsetWidth + "px",
                        b = P.offsetParent === t ? 0 : t.offsetLeft,
                        t.removeChild(P)),
                        k = t.style.cssText,
                        t.style.cssText = "display:none;"; t.firstChild; )
                            t.removeChild(t.firstChild);
                        for (S = !z || !I && !M,
                        m = 0; m < R.length; m++) {
                            for (u = R[m],
                            P = r.createElement("div"),
                            P.style.cssText = "display:block;text-align:" + X + ";position:" + (z ? "absolute;" : "relative;"),
                            Q && (P.className = Q + (H ? m + 1 : "")),
                            tt.push(P),
                            h = u.length,
                            v = 0; v < h; v++)
                                "BR" !== u[v].nodeName && (x = u[v],
                                P.appendChild(x),
                                S && (x._wordEnd || I) && P.appendChild(r.createTextNode(" ")),
                                z && (0 === v && (P.style.top = x._y + "px",
                                P.style.left = E + b + "px"),
                                x.style.top = "0px",
                                b && (x.style.left = x._x - b + "px")));
                            0 === h && (P.innerHTML = "&nbsp;"),
                            I || M || (P.innerHTML = s(P).split(String.fromCharCode(160)).join(" ")),
                            z && (P.style.width = O,
                            P.style.height = x._h + "px"),
                            t.appendChild(P)
                        }
                        t.style.cssText = k
                    }
                    z && (Y > t.clientHeight && (t.style.height = Y - N + "px",
                    t.clientHeight < Y && (t.style.height = Y + B + "px")),
                    U > t.clientWidth && (t.style.width = U - W + "px",
                    t.clientWidth < U && (t.style.width = U + F + "px"))),
                    y(i, K),
                    y(n, J),
                    y(o, tt)
                }
                  , w = m.prototype;
                w.split = function(t) {
                    this.isSplit && this.revert(),
                    this.vars = t || this.vars,
                    this._originals.length = this.chars.length = this.words.length = this.lines.length = 0;
                    for (var e = this.elements.length; --e > -1; )
                        this._originals[e] = this.elements[e].innerHTML,
                        v(this.elements[e], this.vars, this.chars, this.words, this.lines);
                    return this.chars.reverse(),
                    this.words.reverse(),
                    this.lines.reverse(),
                    this.isSplit = !0,
                    this
                }
                ,
                w.revert = function() {
                    if (!this._originals)
                        throw "revert() call wasn't scoped properly.";
                    for (var t = this._originals.length; --t > -1; )
                        this.elements[t].innerHTML = this._originals[t];
                    return this.chars = [],
                    this.words = [],
                    this.lines = [],
                    this.isSplit = !1,
                    this
                }
                ,
                m.selector = t.$ || t.jQuery || function(e) {
                    var i = t.$ || t.jQuery;
                    return i ? (m.selector = i,
                    i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                }
                ,
                m.version = "0.3.3"
            }(i),
            function(t) {
                var n = function() {
                    return (i.GreenSockGlobals || i)[t]
                };
                "function" == typeof define && define.amd ? define(["TweenLite"], n) : "undefined" != typeof e && e.exports && (e.exports = n())
            }("SplitText")
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    5: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var o = t("tiny-emitter")
          , l = n(o)
          , h = t("utils/location/is-same-origin")
          , u = n(h)
          , c = function(t) {
            function e() {
                s(this, e);
                var i = r(this, t.call(this));
                return i.currentAjaxRequest = null ,
                i.cache = {},
                i.cacheEnabled = !0,
                i.initialized = !1,
                i
            }
            return a(e, t),
            e.prototype.init = function() {
                var t = {
                    href: window.location.href,
                    isFirstState: !0
                };
                this.initialized = !0,
                history.replaceState(t, "", window.location.href),
                window.onpopstate = this.onPopState.bind(this)
            }
            ,
            e.prototype.loadPage = function(t) {
                var e = this;
                this.currentAjaxRequest && (this.currentAjaxRequest.abort(),
                this.currentAjaxRequest = null );
                var i = this.cacheEnabled ? this.cache[t] : null ;
                return i ? void setTimeout(function() {
                    e.onPageLoaded(i)
                }) : (this.emit("loading"),
                void (this.currentAjaxRequest = $.ajax({
                    url: t,
                    cache: !1,
                    complete: function(i) {
                        var n = {
                            pageData: i.responseText,
                            status: i.status,
                            url: t
                        };
                        200 === i.status && (e.cache[t] = n),
                        e.currentAjaxRequest = null ,
                        e.onPageLoaded(n)
                    }
                })))
            }
            ,
            e.prototype.onPageLoaded = function(t) {
                this.emit("loaded", t)
            }
            ,
            e.prototype.onLinkClick = function(t) {
                if (!t.defaultPrevented) {
                    var e = t.currentTarget
                      , i = e.getAttribute("href");
                    if (i && i.length && !(i.indexOf("mailto:") > -1) && (0,
                    u["default"])(e.href) && !e.target && (t.preventDefault(),
                    e.href !== window.location.href)) {
                        var n = {
                            href: e.href
                        };
                        history.pushState(n, "", e.href),
                        this.emit("stateChange", n),
                        this.loadPage(e.href)
                    }
                }
            }
            ,
            e.prototype.onPopState = function(t) {
                t.state && t.state.href && (this.emit("stateChange", t.state),
                this.loadPage(t.state.href))
            }
            ,
            e
        }(l["default"]);
        i["default"] = new c
    }
    , {
        "tiny-emitter": 33,
        "utils/location/is-same-origin": 14
    }],
    6: [function(t, e, i) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function s(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function r(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var a = t("screen-navigator")
          , o = t("utils/tracking/GAUtils")
          , l = function(t) {
            function e(i) {
                n(this, e);
                var r = s(this, t.call(this));
                return r.id = i.id,
                r.owner = i.owner,
                r.isAjax = i.isAjax,
                r.element = $(i.element),
                r.prevScreenData = i.prevScreenData,
                r.url = i.url ? i.url : window.location.href,
                r.routeId = i.element.getAttribute("data-route-id"),
                r.screenData = {
                    id: r.id,
                    url: r.url,
                    routeId: r.routeId
                },
                r.uid = (new Date).getUTCMilliseconds(),
                r.initialized = !1,
                r.timelineIn = null ,
                r.timelineOut = null ,
                r
            }
            return r(e, t),
            e.prototype.initPage = function() {
                this.container = $("#page-container"),
                this.body = $("body"),
                this.overlayContainer = $("#overlay-container"),
                this.opacityOverlay = $('<div class="page-overlay page-overlay--opacity"></div>'),
                this.overlayContainer.append(this.opacityOverlay),
                this.colorOverlay = $('<div class="page-overlay page-overlay--color"></div>'),
                this.overlayContainer.append(this.colorOverlay),
                this.isAjax && this.initAjaxPage(),
                this.links = this.element.find("a").on("click." + this.uid, this.onLinkClick.bind(this)),
                this.initialized = !0
            }
            ,
            e.prototype.initAjaxPage = function() {
                var t = this.element[0].getAttribute("data-title")
                  , e = null ;
                this.container.append(this.element),
                this.body.addClass("page-id-" + this.id),
                t && t.length && (document.title = t),
                !this.color && this.prevScreenData && this.prevScreenData.color ? e = "" : this.color && (e = this.color),
                null !== e && $('meta[name="theme-color"]').attr("content", e),
                (0,
                o.trackPageView)({
                    path: window.location.pathname,
                    location: window.location.href
                }),
                setTimeout(function() {
                    $("html, body").scrollTop(0)
                })
            }
            ,
            e.prototype.dispose = function() {
                t.prototype.dispose.call(this),
                this.initialized && (this.links.off("click." + this.uid),
                this.disposeTimelineIn(),
                this.disposeTimelineOut(),
                this.opacityOverlay.remove(),
                this.colorOverlay.remove())
            }
            ,
            e.prototype.disposeTimelineIn = function() {
                this.timelineIn && (this.timelineIn.kill(),
                this.timelineIn = null )
            }
            ,
            e.prototype.disposeTimelineOut = function() {
                this.timelineOut && (this.timelineOut.kill(),
                this.timelineOut = null )
            }
            ,
            e.prototype.resize = function(t) {}
            ,
            e.prototype.animateIn = function(e) {
                return t.prototype.animateIn.call(this, e),
                e ? void this.onAnimateInComplete() : (this.initPage(),
                this.resize(),
                this.timelineIn = new TimelineMax({
                    delay: this.isAjax ? .05 : .3,
                    onStart: this.onAnimateInStart.bind(this),
                    onComplete: this.onAnimateInComplete.bind(this)
                }),
                void this.populateTimelineIn())
            }
            ,
            e.prototype.populateTimelineIn = function() {
                app.windowWidth < app.screenS && this.timelineIn.from(this.element, .8, {
                    autoAlpha: 0
                }, 0)
            }
            ,
            e.prototype.animateOut = function(e) {
                return t.prototype.animateOut.call(this, e),
                e ? (this.disposeTimelineOut(),
                void this.onAnimateOutComplete()) : (this.timelineOut = new TimelineMax({
                    onComplete: this.onAnimateOutComplete.bind(this)
                }),
                void this.populateTimelineOut())
            }
            ,
            e.prototype.populateTimelineOut = function() {
                if (this.initialized) {
                    if (app.windowWidth < app.screenS)
                        return this.timelineOut.set(this.overlayContainer, {
                            autoAlpha: 1,
                            zIndex: 20
                        }, 0),
                        void this.timelineOut.from(this.opacityOverlay, .5, {
                            autoAlpha: 0
                        }, 0);
                    this.owner.currentScreen.color && (this.colorOverlay[0].style.backgroundColor = this.owner.currentScreen.color),
                    this.timelineOut.set(this.overlayContainer, {
                        autoAlpha: 1,
                        zIndex: 20
                    }, 0),
                    this.timelineOut.fromTo(this.opacityOverlay, .4, {
                        autoAlpha: 0
                    }, {
                        autoAlpha: .5
                    }, 0),
                    this.timelineOut.fromTo(this.colorOverlay, .6, {
                        autoAlpha: 1,
                        yPercent: 100
                    }, {
                        yPercent: 0,
                        ease: Quad.easeIn
                    }, 0),
                    this.timelineOut.to(this.element, .6, {
                        y: app.windowHeight * -.3,
                        ease: Quad.easeIn
                    }, .1)
                }
            }
            ,
            e.prototype.onAnimateInStart = function() {
                this.element[0].style.visibility = "visible"
            }
            ,
            e.prototype.onAnimateInComplete = function() {
                t.prototype.onAnimateInComplete.call(this),
                this.disposeTimelineIn()
            }
            ,
            e.prototype.onAnimateOutComplete = function() {
                this.initialized && (this.element.remove(),
                this.prevScreenData && this.prevScreenData.id === this.id || this.body.removeClass("page-id-" + this.id),
                TweenMax.set(this.overlayContainer, {
                    zIndex: -1,
                    delay: app.windowWidth < app.screenS ? .05 : 0
                })),
                t.prototype.onAnimateOutComplete.call(this)
            }
            ,
            e.prototype.onLinkClick = function(t) {
                this.emit("linkClick", t)
            }
            ,
            e
        }(a.AScreen);
        i["default"] = l
    }
    , {
        "screen-navigator": 24,
        "utils/tracking/GAUtils": 15
    }],
    7: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var o = t("pages/APage")
          , l = n(o)
          , h = function(t) {
            function e(i) {
                return s(this, e),
                r(this, t.call(this, i))
            }
            return a(e, t),
            e.prototype.initPage = function() {
                t.prototype.initPage.call(this),
                this.initMailTo()
            }
            ,
            e.prototype.initCover = function() {
                this.cover = $("#about-cover"),
                this.coverImg = this.element.find(".about-cover__image"),
                this.coverImg.css({
                    position: "absolute",
                    left: 0,
                    top: 0
                })
            }
            ,
            e.prototype.initMailTo = function() {
                for (var t = $(".about-main-content__contact"), e = document.createElement("a"), i = t[0].attributes, n = t[0].getAttribute("data-origin").replace(" (at) ", "@"), s = 0; s < i.length; s++)
                    i[s].name && i[s].value && e.setAttribute([i[s].name], i[s].value);
                e.href = "mailto:" + n,
                e.innerHTML = t[0].innerHTML,
                t.replaceWith(e)
            }
            ,
            e.prototype.resize = function(e) {
                t.prototype.resize.call(this, e),
                Modernizr.objectfit || (e || this.initCover(),
                this.resizeCover())
            }
            ,
            e.prototype.resizeCover = function() {
                var t = parseInt(this.coverImg.attr("width"))
                  , e = parseInt(this.coverImg.attr("height"))
                  , i = this.cover.height()
                  , n = app.clientWidth / t
                  , s = i / e
                  , r = Math.max(n, s)
                  , a = parseInt(t * r)
                  , o = parseInt(e * r);
                this.coverImg.css({
                    width: a,
                    height: o,
                    marginLeft: parseInt((a - app.clientWidth) * -.5),
                    marginTop: parseInt((o - i) * -.5)
                })
            }
            ,
            e.prototype.populateTimelineIn = function() {
                if (t.prototype.populateTimelineIn.call(this),
                !(app.windowWidth < app.screenS)) {
                    var e = new TimelineMax;
                    e.staggerFrom(".about-title", .8, {
                        autoAlpha: 0,
                        yPercent: 50,
                        ease: Expo.easeOut
                    }, .3),
                    e.from("#about-main-content__body", 1, {
                        autoAlpha: 0
                    }, 0),
                    e.from("#about-features__body", 1, {
                        autoAlpha: 0
                    }, .2),
                    e.from("#about-representations__body", 1, {
                        autoAlpha: 0
                    }, .4),
                    this.timelineIn.add(e, 0)
                }
            }
            ,
            e
        }(l["default"]);
        i["default"] = h
    }
    , {
        "pages/APage": 6
    }],
    8: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var o = t("pages/APage")
          , l = n(o)
          , h = function(t) {
            function e(i) {
                s(this, e);
                var n = r(this, t.call(this, i));
                return n.firstProjectIndex = 0,
                n.selectedProjectIndex = -1,
                n
            }
            return a(e, t),
            e.prototype.initPage = function() {
                t.prototype.initPage.call(this),
                this.projects = $(".home-projects__item"),
                this.titles = this.projects.find(".home-projects__title"),
                this.titlesInners = this.projects.find(".home-projects__title__inner"),
                this.titlesLeftLines = this.projects.find(".home-projects__title__left-line"),
                this.titlesRightLines = this.projects.find(".home-projects__title__right-line"),
                this.imagesWrappers = this.projects.find(".home-projects__image-wrapper"),
                this.imagesRatios = this.projects.find(".home-projects__image-wrapper__ratio"),
                this.images = this.projects.find(".home-projects__image"),
                this.imagesLinks = this.projects.find(".home-projects__image-wrapper__link"),
                this.colorsWrappers = this.projects.find(".home-projects__color-wrapper"),
                this.colors = this.projects.find(".home-projects__color"),
                this.imagesLinks.on("mouseenter", this.onImageRollOver.bind(this)).on("mouseleave", this.onImageRollOut.bind(this)),
                this.titlesInners.on("mouseenter", this.onTitleInnerRollOver.bind(this))
            }
            ,
            e.prototype.dispose = function() {
                t.prototype.dispose.call(this),
                this.initialized && (this.titlesInners.off("mouseenter"),
                this.imagesLinks.off("mouseenter mouseleave"))
            }
            ,
            e.prototype.resize = function(e) {
                var i = this;
                if (t.prototype.resize.call(this, e),
                app.windowWidth < app.screenS) {
                    var n = parseInt(this.titles.css("padding-left"))
                      , s = parseInt(this.titles.css("padding-bottom"));
                    this.titles.each(function(t, e) {
                        e.style.width = "";
                        var i = e.querySelector(".home-projects__title__inner");
                        e.style.width = i.offsetWidth + 2 * n + "px",
                        e.style.marginTop = -parseInt(.5 * (i.offsetHeight - s)) + "px"
                    }),
                    app.prevWindowWidth >= app.screenS && (TweenMax.set([this.imagesWrappers, this.imagesLinks, this.colorsWrappers, this.colors, this.titlesLeftLines, this.titlesRightLines], {
                        clearProps: "visibility,scaleX,opacity"
                    }),
                    this.imagesRatios.css({
                        width: "30vw"
                    }))
                } else {
                    (!e || app.prevWindowWidth < app.screenS) && this.projects.each(function(t) {
                        TweenMax.set([i.imagesWrappers[t], i.colorsWrappers[t], i.titlesLeftLines[t], i.titlesRightLines[t]], {
                            autoAlpha: t !== i.selectedProjectIndex ? 0 : 1
                        }),
                        TweenMax.set([i.titlesLeftLines[t], i.titlesRightLines[t]], {
                            scaleX: t !== i.selectedProjectIndex ? 0 : 1
                        })
                    }),
                    e && app.prevWindowWidth < app.screenS && (this.titles.each(function(t, e) {
                        e.style.width = e.style.marginTop = ""
                    }),
                    this.selectedProjectIndex === -1 && this.selectProject(0));
                    var r = this.imagesWrappers.width()
                      , a = this.imagesWrappers.height();
                    // this.imagesRatios.each(function(t, e) {
                    //     var n = i.images[t]
                    //       , s = parseInt(n.getAttribute("width"))
                    //       , o = parseInt(n.getAttribute("height"))
                    //       , l = r / s
                    //       , h = a / o
                    //       , u = Math.min(l, h);
                    //     e.style.width = parseInt(s * u) + "px",
                    //     e.style.height = parseInt(o * u) + "px"
                    // })
                }
            }
            ,
            e.prototype.populateTimelineIn = function() {
                var e = this;
                if (t.prototype.populateTimelineIn.call(this),
                !(app.windowWidth < app.screenS)) {
                    var i = new TimelineMax;
                    i.staggerFrom(this.titles, .6, {
                        y: 40,
                        x: -40,
                        autoAlpha: 0,
                        ease: Expo.easeOut
                    }, .1),
                    i.from("#home-more-projects", .8, {
                        y: 40,
                        autoAlpha: 0,
                        ease: Expo.easeOut
                    }, "-=.3"),
                    i.from("#home-more-projects__arrow svg", .8, {
                        y: 30,
                        ease: Expo.easeOut,
                        onComplete: function(t) {
                            TweenMax.set(t.target, {
                                clearProps: "y"
                            })
                        },
                        onCompleteParams: ["{self}"]
                    }, "-=.6"),
                    i.addCallback(function() {
                        e.selectProject(e.firstProjectIndex)
                    }, "-=.5"),
                    this.timelineIn.add(i, 0)
                }
            }
            ,
            e.prototype.selectProject = function(t) {
                var e = this
                  , i = this.selectedProjectIndex
                  , n = i !== -1
                  , s = new TimelineMax;
                this.selectedProjectIndex = t,
                n && (TweenMax.killTweensOf([this.projects[i], this.imagesWrappers[i], this.imagesLinks[i], this.colorsWrappers[i], this.colors[i], this.titles[i], this.titlesLeftLines[i], this.titlesRightLines[i]]),
                s.set(this.projects[i], {
                    className: "-=selected"
                }, 0),
                s.to([this.titlesLeftLines[i], this.titlesRightLines[i]], .5, {
                    scaleX: 0,
                    ease: Expo.easeOut
                }, 0),
                s.set([this.titlesLeftLines[i], this.titlesRightLines[i]], {
                    autoAlpha: 0
                }, .4),
                s.to(this.imagesLinks[i], .5, {
                    xPercent: 0,
                    x: parseInt(this.imagesWrappers[i].offsetWidth),
                    ease: Quad.easeIn,
                    onComplete: function() {
                        TweenMax.set(e.imagesWrappers[i], {
                            autoAlpha: 0
                        })
                    }
                }, 0),
                s.to(this.colors[i], .6, {
                    scaleX: 1,
                    xPercent: 100,
                    ease: Quad.easeInOut,
                    onComplete: function(t) {
                        TweenMax.set(e.colorsWrappers[i], {
                            autoAlpha: 0
                        })
                    },
                    onCompleteParams: ["{self}"]
                }, .1)),
                TweenMax.killTweensOf([this.projects[t], this.imagesWrappers[t], this.imagesLinks[t], this.colorsWrappers[t], this.colors[t], this.titles[t], this.titlesLeftLines[t], this.titlesRightLines[t]]),
                s.set([this.imagesWrappers[t], this.colorsWrappers[t]], {
                    autoAlpha: 1
                }, 0),
                s.set(this.projects[t], {
                    className: "+=selected"
                }, 0),
                s.set([this.titlesLeftLines[t], this.titlesRightLines[t]], {
                    autoAlpha: 1
                }, 0),
                s.to([this.titlesLeftLines[t], this.titlesRightLines[t]], .5, {
                    scaleX: 1,
                    ease: Expo.easeOut
                }, 0),
                s.fromTo(this.imagesLinks[t], n ? .8 : 1.1, {
                    xPercent: -100,
                    x: 0
                }, {
                    xPercent: 0,
                    ease: n ? Expo.easeOut : Expo.easeInOut
                }, n ? .4 : .1),
                s.fromTo(this.colors[t], n ? .8 : 1.1, {
                    scaleX: 0,
                    xPercent: 0
                }, {
                    scaleX: 1,
                    ease: n ? Expo.easeOut : Expo.easeInOut
                }, n ? .4 : 0)
            }
            ,
            e.prototype.onTitleInnerRollOver = function(t) {
                if (!(app.windowWidth < app.screenS || this.timelineOut)) {
                    var e = $(t.currentTarget.parentNode.parentNode).index();
                    return this.timelineIn ? void (this.firstProjectIndex = e) : void (e !== this.selectedProjectIndex && this.selectProject(e))
                }
            }
            ,
            e.prototype.onImageRollOver = function(t) {
                if (!(app.windowWidth < app.screenS)) {
                    var e = 10
                      , i = t.currentTarget
                      , n = i.querySelector(".home-projects__image-wrapper__ratio")
                      , s = i.querySelector(".home-projects__image")
                      , r = 2 * e / n.offsetWidth
                      , a = 2 * e / n.offsetHeight;
                    TweenMax.to(n, .6, {
                        scaleX: parseFloat((1 - r).toFixed(2)),
                        scaleY: parseFloat((1 - a).toFixed(2)),
                        ease: Expo.easeOut
                    }),
                    TweenMax.to(s, .6, {
                        scaleX: parseFloat((1 + r).toFixed(2)),
                        scaleY: parseFloat((1 + a).toFixed(2)),
                        ease: Expo.easeOut
                    })
                }
            }
            ,
            e.prototype.onImageRollOut = function(t) {
                if (!(app.windowWidth < app.screenS)) {
                    var e = t.currentTarget
                      , i = e.querySelector(".home-projects__image-wrapper__ratio")
                      , n = e.querySelector(".home-projects__image");
                    TweenMax.to(i, .8, {
                        scale: 1,
                        ease: Expo.easeOut
                    }),
                    TweenMax.to(n, .8, {
                        x: 0,
                        y: 0,
                        scale: 1,
                        ease: Expo.easeOut
                    })
                }
            }
            ,
            e
        }(l["default"]);
        i["default"] = h
    }
    , {
        "pages/APage": 6
    }],
    9: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var o = t("pages/APage")
          , l = n(o)
          , h = function(t) {
            function e(i) {
                return s(this, e),
                r(this, t.call(this, i))
            }
            return a(e, t),
            e
        }(l["default"]);
        i["default"] = h
    }
    , {
        "pages/APage": 6
    }],
    10: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var o = t("pages/APage")
          , l = n(o);
        t("ScrollToPlugin");
        var h = t("utils/color/rgb-to-hex")
          , u = (n(h),
        function(t) {
            function e(i) {
                s(this, e);
                var n = r(this, t.call(this, i));
                return n.color = n.element[0].getAttribute("data-color"),
                n.screenData.color = n.color,
                n.screenData.title = n.element[0].getAttribute("data-project-title"),
                n
            }
            return a(e, t),
            e.prototype.initPage = function() {
                t.prototype.initPage.call(this),
                this.scrollDownBtn = this.element.find(".project-scroll-btn"),
                this.scrollDownBtn.on("click", this.onScrollDownBtnClick.bind(this))
            }
            ,
            e.prototype.initCover = function() {
                this.coverImg = this.element.find(".project-cover-image"),
                this.coverImg.css({
                    position: "absolute",
                    left: 0,
                    top: 0
                })
            }
            ,
            e.prototype.dispose = function() {
                t.prototype.dispose.call(this),
                this.initialized && this.scrollDownBtn.off("click")
            }
            ,
            e.prototype.resize = function(e) {
                t.prototype.resize.call(this, e),
                Modernizr.objectfit || (e || this.initCover(),
                this.resizeCover())
            }
            ,
            e.prototype.resizeCover = function() {
                var t = parseInt(this.coverImg.attr("width"))
                  , e = parseInt(this.coverImg.attr("height"))
                  , i = app.clientWidth / t
                  , n = app.windowHeight / e
                  , s = Math.max(i, n)
                  , r = parseInt(t * s)
                  , a = parseInt(e * s);
                this.coverImg.css({
                    width: r,
                    height: a,
                    marginLeft: parseInt((r - app.clientWidth) * -.5),
                    marginTop: parseInt((a - app.windowHeight) * -.5)
                })
            }
            ,
            e.prototype.populateTimelineIn = function() {
                if (t.prototype.populateTimelineIn.call(this),
                !(app.windowWidth < app.screenS)) {
                    var e = new TimelineMax;
                    this.isAjax || e.from(this.element.find(".project-header"), .8, {
                        opacity: 0
                    }),
                    e.staggerFrom(this.element.find(".project-scroll-btn__arrow, .project-scroll-btn__label span"), .8, {
                        opacity: 0,
                        y: 40,
                        ease: Expo.easeOut
                    }, .1),
                    this.timelineIn.add(e)
                }
            }
            ,
            e.prototype.onAnimateInComplete = function() {
                t.prototype.onAnimateInComplete.call(this),
                this.initialized && TweenMax.set(this.element.find(".project-scroll-btn__arrow"), {
                    clearProps: "y"
                })
            }
            ,
            e.prototype.onScrollDownBtnClick = function() {
                TweenMax.to(window, 1.3, {
                    scrollTo: {
                        y: this.element.find(".project-content")
                    },
                    ease: Quart.easeInOut
                })
            }
            ,
            e
        }(l["default"]));
        i["default"] = u
    }
    , {
        ScrollToPlugin: 20,
        "pages/APage": 6,
        "utils/color/rgb-to-hex": 13
    }],
    11: [function(t, e, i) {
        "use strict";
        function n(t) {
            return t && t.__esModule ? t : {
                "default": t
            }
        }
        function s(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        function r(t, e) {
            if (!t)
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e
        }
        function a(t, e) {
            if ("function" != typeof e && null !== e)
                throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            }),
            e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        i.__esModule = !0;
        var o = t("pages/APage")
          , l = n(o)
          , h = t("pages/projects/Rect")
          , u = n(h)
          , c = t("libs/SplitText")
          , p = n(c)
          , f = function(t) {
            function e(i) {
                return s(this, e),
                r(this, t.call(this, i))
            }
            return a(e, t),
            e.prototype.initPage = function() {
                t.prototype.initPage.call(this),
                this.list = this.element.find(".projects-list"),
                this.itemsElements = this.element.find(".projects-list__item"),
                this.itemTitles = this.element.find(".projects-list__title"),
                this.splittedTitles = [],
                this.itemsElements.on("mouseenter", this.onItemRollOver.bind(this)).on("mouseleave", this.onItemRollOut.bind(this))
            }
            ,
            e.prototype.initLayout = function(t) {
                var e, i = this, n = ["s", "m", "l"], s = $('<li class="projects-list__item" style="position: absolute; top: 0; left: 0; visibility: hidden"></li>'), r = "projects-list__item--", a = [];
                this.items = [],
                s.appendTo(this.list),
                n.forEach(function(t) {
                    var n = r + t;
                    s.css("max-width", ""),
                    s.removeClass(r + e).addClass(n);
                    var o = parseInt(s.css("max-width"));
                    s.css("max-width", "none"),
                    a[n] = {
                        percentWidth: parseFloat((s.width() / i.listWidth).toFixed(4)),
                        maxWidth: o
                    },
                    e = t
                }),
                s.remove(),
                this.itemsElements.each(function(t, e) {
                    var n = $(e)
                      , s = n.find(".projects-list__image-ratio")[0].style.paddingBottom
                      , r = e.className.match(/(projects-list__item--[a-z])/)[0]
                      , o = a[r];
                    i.items.push({
                        element: e,
                        index: t,
                        rect: new u["default"],
                        percentWidth: o.percentWidth,
                        maxWidth: o.maxWidth,
                        heightRatio: .01 * parseFloat(s)
                    })
                }),
                this.items.forEach(function(e, i) {
                    e.element.style.position = "absolute",
                    e.element.style.top = e.element.style.left = "0px",
                    t && (e.element.style.transition = "none")
                })
            }
            ,
            e.prototype.dispose = function() {
                t.prototype.dispose.call(this),
                this.initialized && this.itemsElements.off("mouseenter")
            }
            ,
            e.prototype.updateLayout = function() {
                var t, e, i, n, s, r, a, o, l = 0, h = this.items.length, c = [new u["default"]({
                    width: this.listWidth,
                    height: 9999
                })];
                for (t = 0; t < h; t++) {
                    for (e = this.items[t],
                    e.rect.width = Math.min(e.percentWidth * this.listWidth, e.maxWidth),
                    e.rect.height = e.heightRatio * e.rect.width,
                    r = null ,
                    i = new u["default"]({
                        width: e.rect.width + this.gutter,
                        height: e.rect.height + this.gutter
                    }),
                    n = 0,
                    s = c.length; n < s; n++)
                        a = c[n],
                        i.fitsIn(a) && (!r || r.y > a.y || r.y === a.y && r.x > a.x) && (r = a);
                    if (r) {
                        i.x = r.x,
                        i.y = r.y;
                        var p = c.indexOf(r);
                        for (c.splice(p, 1),
                        c = c.concat(r.getEmptyRects(i)),
                        e.rect.x = r.x,
                        e.rect.y = r.y,
                        o = []; a = c.shift(); )
                            a.width < this.itemMinWidth || a.height < 80 || (a.overlaps(i) ? o = o.concat(a.getEmptyRects(i)) : o.push(a));
                        c = o.slice(),
                        e.rect.y + e.rect.height > l && (l = e.rect.y + e.rect.height)
                    }
                }
                for (t = 0; t < h; t++)
                    e = this.items[t],
                    e.element.style.left = parseInt(e.rect.x) + "px",
                    e.element.style.top = parseInt(e.rect.y) + "px";
                this.list[0].style.height = parseInt(l) + "px"
            }
            ,
            e.prototype.clearLayout = function() {
                this.list[0].style.height = "",
                this.items.forEach(function(t, e) {
                    t.element.style.position = "",
                    t.element.style.top = t.element.style.left = ""
                })
            }
            ,
            e.prototype.resize = function(e) {
                if (t.prototype.resize.call(this, e),
                app.windowWidth >= app.screenS)
                    this.listWidth = this.list.width(),
                    this.gutter = parseInt(this.itemsElements.css("margin-right")),
                    this.itemMinWidth = parseInt(this.element.find(".projects-list__item--s").css("width")),
                    app.prevWindowWidth < app.screenS && this.itemTitles.each(function(t, e) {
                        e.style.width = e.style.marginTop = ""
                    }),
                    (!e || app.prevWindowWidth < app.screenS) && this.initLayout(!e),
                    this.updateLayout();
                else {
                    var i = parseInt(this.itemTitles.css("padding-left"))
                      , n = parseInt(this.itemTitles.css("padding-bottom"));
                    app.prevWindowWidth >= app.screenS && this.clearLayout(),
                    this.itemTitles.each(function(t, e) {
                        e.style.width = "";
                        var s = e.querySelector(".projects-list__title__inner");
                        e.style.width = s.offsetWidth + 2 * i + "px",
                        e.style.marginTop = -parseInt(.5 * (s.offsetHeight - n)) + "px"
                    })
                }
            }
            ,
            e.prototype.populateTimelineIn = function() {
                if (t.prototype.populateTimelineIn.call(this),
                !(app.windowWidth < app.screenS)) {
                    for (var e, i = new TimelineMax, n = [], s = 0, r = this.items.length; s < r; s++)
                        if (e = this.items[s],
                        !(e.rect.y > app.windowHeight + 200)) {
                            for (var a = 0, o = n.length - 1; o > -1; o--)
                                if (!(n[o].rect.y > e.rect.y)) {
                                    a = o + 1;
                                    break
                                }
                            n.splice(a, 0, e)
                        }
                    for (var l = 0, h = n.length; l < h; l++)
                        i.from(n[l].element, .8, {
                            autoAlpha: 0,
                            yPercent: 50,
                            ease: Expo.easeOut
                        }, .1 * l);
                    this.timelineIn.add(i, 0)
                }
            }
            ,
            e.prototype.onAnimateInComplete = function() {
                t.prototype.onAnimateInComplete.call(this),
                this.initialized && (app.windowWidth < app.screenS || this.items.forEach(function(t, e) {
                    t.element.style.transition = ""
                }))
            }
            ,
            e.prototype.onItemRollOver = function(t) {
                if (!(app.windowWidth < app.screenS)) {
                    var e = $(t.currentTarget)
                      , i = e.index()
                      , n = e.find(".projects-list__title__inner")
                      , s = new p["default"](n,{
                        type: "lines,words"
                    });
                    this.splittedTitles[i] = s,
                    TweenMax.staggerFrom(s.words, .7, {
                        y: 40,
                        opacity: 0,
                        ease: Expo.easeOut
                    }, .1)
                }
            }
            ,
            e.prototype.onItemRollOut = function(t) {
                var e = $(t.currentTarget)
                  , i = e.index();
                this.splittedTitles[i] && (this.splittedTitles[i].revert(),
                this.splittedTitles[i] = null )
            }
            ,
            e
        }(l["default"]);
        i["default"] = f
    }
    , {
        "libs/SplitText": 4,
        "pages/APage": 6,
        "pages/projects/Rect": 12
    }],
    12: [function(t, e, i) {
        "use strict";
        function n(t, e) {
            if (!(t instanceof e))
                throw new TypeError("Cannot call a class as a function")
        }
        i.__esModule = !0;
        var s = function() {
            function t() {
                var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                n(this, t),
                this.x = e.x || 0,
                this.y = e.y || 0,
                this.width = e.width || 0,
                this.height = e.height || 0
            }
            return t.prototype.fitsIn = function(t) {
                return this.width <= t.width && this.height <= t.height
            }
            ,
            t.prototype.overlaps = function(t) {
                return this.x + this.width > t.x && this.y + this.height > t.y && this.x < t.x + t.width && this.y < t.y + t.height
            }
            ,
            t.prototype.getEmptyRects = function(e) {
                var i = []
                  , n = this.x + this.width
                  , s = this.y + this.height
                  , r = e.x + e.width
                  , a = e.y + e.height;
                return this.y < e.y && i.push(new t({
                    x: this.x,
                    y: this.y,
                    width: this.width,
                    height: e.y - this.y
                })),
                n > r && i.push(new t({
                    x: r,
                    y: this.y,
                    width: n - r,
                    height: this.height
                })),
                s > a && i.push(new t({
                    x: this.x,
                    y: a,
                    width: this.width,
                    height: s - a
                })),
                this.x < e.x && i.push(new t({
                    x: this.x,
                    y: this.y,
                    width: e.x - this.x,
                    height: this.height
                })),
                i
            }
            ,
            t
        }();
        i["default"] = s
    }
    , {}],
    13: [function(t, e, i) {
        "use strict";
        function n(t) {
            var e = t.toString(16);
            return 1 == e.length ? "0" + e : e
        }
        i.__esModule = !0,
        i["default"] = function(t) {
            var e;
            return e = "string" == typeof t ? t.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/) : t,
            "#" + n(e[0]) + n(e[1]) + n(e[2])
        }
    }
    , {}],
    14: [function(t, e, i) {
        "use strict";
        i.__esModule = !0,
        i["default"] = function(t) {
            var e = location.protocol + "//" + location.hostname;
            return location.port && (e += ":" + location.port),
            t && 0 === t.indexOf(e)
        }
    }
    , {}],
    15: [function(t, e, i) {
        "use strict";
        function n(t) {
            window.ga && ga("send", "pageview", t)
        }
        function s(t, e, i, n) {
            window.ga && ga("send", "event", t, e, i, n)
        }
        e.exports = {
            trackPageView: n,
            trackEvent: s
        }
    }
    , {}],
    16: [function(t, e, i) {
        var n = t("date-now");
        e.exports = function(t, e, i) {
            function s() {
                var u = n() - l;
                u < e && u > 0 ? r = setTimeout(s, e - u) : (r = null ,
                i || (h = t.apply(o, a),
                r || (o = a = null )))
            }
            var r, a, o, l, h;
            return null == e && (e = 100),
            function() {
                o = this,
                a = arguments,
                l = n();
                var u = i && !r;
                return r || (r = setTimeout(s, e)),
                u && (h = t.apply(o, a),
                o = a = null ),
                h
            }
        }
    }
    , {
        "date-now": 17
    }],
    17: [function(t, e, i) {
        function n() {
            return (new Date).getTime()
        }
        e.exports = Date.now || n
    }
    , {}],
    18: [function(t, e, i) {
        (function(t) {
            !function(t, i) {
                "use strict";
                var n = {}
                  , s = t.GreenSockGlobals = t.GreenSockGlobals || t;
                if (!s.TweenLite) {
                    var r, a, o, l, h, u = function(t) {
                        var e, i = t.split("."), n = s;
                        for (e = 0; e < i.length; e++)
                            n[i[e]] = n = n[i[e]] || {};
                        return n
                    }, c = u("com.greensock"), p = 1e-10, f = function(t) {
                        var e, i = [], n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]))
                            ;
                        return i
                    }, _ = function() {}, d = function() {
                        var t = Object.prototype.toString
                          , e = t.call([]);
                        return function(i) {
                            return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                        }
                    }(), m = {}, g = function(r, a, o, l) {
                        this.sc = m[r] ? m[r].sc : [],
                        m[r] = this,
                        this.gsClass = null ,
                        this.func = o;
                        var h = [];
                        this.check = function(c) {
                            for (var p, f, _, d, y, v = a.length, w = v; --v > -1; )
                                (p = m[a[v]] || new g(a[v],[])).gsClass ? (h[v] = p.gsClass,
                                w--) : c && p.sc.push(this);
                            if (0 === w && o) {
                                if (f = ("com.greensock." + r).split("."),
                                _ = f.pop(),
                                d = u(f.join("."))[_] = this.gsClass = o.apply(o, h),
                                l)
                                    if (s[_] = n[_] = d,
                                    y = "undefined" != typeof e && e.exports,
                                    !y && "function" == typeof define && define.amd)
                                        define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
                                            return d
                                        });
                                    else if (y)
                                        if (r === i) {
                                            e.exports = n[i] = d;
                                            for (v in n)
                                                d[v] = n[v]
                                        } else
                                            n[i] && (n[i][_] = d);
                                for (v = 0; v < this.sc.length; v++)
                                    this.sc[v].check()
                            }
                        }
                        ,
                        this.check(!0)
                    }, y = t._gsDefine = function(t, e, i, n) {
                        return new g(t,e,i,n)
                    }
                    , v = c._class = function(t, e, i) {
                        return e = e || function() {}
                        ,
                        y(t, [], function() {
                            return e
                        }, i),
                        e
                    }
                    ;
                    y.globals = s;
                    var w = [0, 0, 1, 1]
                      , T = v("easing.Ease", function(t, e, i, n) {
                        this._func = t,
                        this._type = i || 0,
                        this._power = n || 0,
                        this._params = e ? w.concat(e) : w
                    }, !0)
                      , x = T.map = {}
                      , b = T.register = function(t, e, i, n) {
                        for (var s, r, a, o, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1; )
                            for (r = l[h],
                            s = n ? v("easing." + r, null , !0) : c.easing[r] || {},
                            a = u.length; --a > -1; )
                                o = u[a],
                                x[r + "." + o] = x[o + r] = s[o] = t.getRatio ? t : t[o] || new t
                    }
                    ;
                    for (o = T.prototype,
                    o._calcEnd = !1,
                    o.getRatio = function(t) {
                        if (this._func)
                            return this._params[0] = t,
                            this._func.apply(null , this._params);
                        var e = this._type
                          , i = this._power
                          , n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                        return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n),
                        1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
                    }
                    ,
                    r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
                    a = r.length; --a > -1; )
                        o = r[a] + ",Power" + a,
                        b(new T(null ,null ,1,a), o, "easeOut", !0),
                        b(new T(null ,null ,2,a), o, "easeIn" + (0 === a ? ",easeNone" : "")),
                        b(new T(null ,null ,3,a), o, "easeInOut");
                    x.linear = c.easing.Linear.easeIn,
                    x.swing = c.easing.Quad.easeInOut;
                    var P = v("events.EventDispatcher", function(t) {
                        this._listeners = {},
                        this._eventTarget = t || this
                    });
                    o = P.prototype,
                    o.addEventListener = function(t, e, i, n, s) {
                        s = s || 0;
                        var r, a, o = this._listeners[t], u = 0;
                        for (this !== l || h || l.wake(),
                        null == o && (this._listeners[t] = o = []),
                        a = o.length; --a > -1; )
                            r = o[a],
                            r.c === e && r.s === i ? o.splice(a, 1) : 0 === u && r.pr < s && (u = a + 1);
                        o.splice(u, 0, {
                            c: e,
                            s: i,
                            up: n,
                            pr: s
                        })
                    }
                    ,
                    o.removeEventListener = function(t, e) {
                        var i, n = this._listeners[t];
                        if (n)
                            for (i = n.length; --i > -1; )
                                if (n[i].c === e)
                                    return void n.splice(i, 1)
                    }
                    ,
                    o.dispatchEvent = function(t) {
                        var e, i, n, s = this._listeners[t];
                        if (s)
                            for (e = s.length,
                            e > 1 && (s = s.slice(0)),
                            i = this._eventTarget; --e > -1; )
                                n = s[e],
                                n && (n.up ? n.c.call(n.s || i, {
                                    type: t,
                                    target: i
                                }) : n.c.call(n.s || i))
                    }
                    ;
                    var k = t.requestAnimationFrame
                      , O = t.cancelAnimationFrame
                      , S = Date.now || function() {
                        return (new Date).getTime()
                    }
                      , C = S();
                    for (r = ["ms", "moz", "webkit", "o"],
                    a = r.length; --a > -1 && !k; )
                        k = t[r[a] + "RequestAnimationFrame"],
                        O = t[r[a] + "CancelAnimationFrame"] || t[r[a] + "CancelRequestAnimationFrame"];
                    v("Ticker", function(t, e) {
                        var i, n, s, r, a, o = this, u = S(), c = !(e === !1 || !k) && "auto", f = 500, d = 33, m = "tick", g = function(t) {
                            var e, l, h = S() - C;
                            h > f && (u += h - d),
                            C += h,
                            o.time = (C - u) / 1e3,
                            e = o.time - a,
                            (!i || e > 0 || t === !0) && (o.frame++,
                            a += e + (e >= r ? .004 : r - e),
                            l = !0),
                            t !== !0 && (s = n(g)),
                            l && o.dispatchEvent(m)
                        };
                        P.call(o),
                        o.time = o.frame = 0,
                        o.tick = function() {
                            g(!0)
                        }
                        ,
                        o.lagSmoothing = function(t, e) {
                            f = t || 1 / p,
                            d = Math.min(e, f, 0)
                        }
                        ,
                        o.sleep = function() {
                            null != s && (c && O ? O(s) : clearTimeout(s),
                            n = _,
                            s = null ,
                            o === l && (h = !1))
                        }
                        ,
                        o.wake = function(t) {
                            null !== s ? o.sleep() : t ? u += -C + (C = S()) : o.frame > 10 && (C = S() - f + 5),
                            n = 0 === i ? _ : c && k ? k : function(t) {
                                return setTimeout(t, 1e3 * (a - o.time) + 1 | 0)
                            }
                            ,
                            o === l && (h = !0),
                            g(2)
                        }
                        ,
                        o.fps = function(t) {
                            return arguments.length ? (i = t,
                            r = 1 / (i || 60),
                            a = this.time + r,
                            void o.wake()) : i
                        }
                        ,
                        o.useRAF = function(t) {
                            return arguments.length ? (o.sleep(),
                            c = t,
                            void o.fps(i)) : c
                        }
                        ,
                        o.fps(t),
                        setTimeout(function() {
                            "auto" === c && o.frame < 5 && "hidden" !== document.visibilityState && o.useRAF(!1)
                        }, 1500)
                    }),
                    o = c.Ticker.prototype = new c.events.EventDispatcher,
                    o.constructor = c.Ticker;
                    var A = v("core.Animation", function(t, e) {
                        if (this.vars = e = e || {},
                        this._duration = this._totalDuration = t || 0,
                        this._delay = Number(e.delay) || 0,
                        this._timeScale = 1,
                        this._active = e.immediateRender === !0,
                        this.data = e.data,
                        this._reversed = e.reversed === !0,
                        H) {
                            h || l.wake();
                            var i = this.vars.useFrames ? V : H;
                            i.add(this, i._time),
                            this.vars.paused && this.paused(!0)
                        }
                    });
                    l = A.ticker = new c.Ticker,
                    o = A.prototype,
                    o._dirty = o._gc = o._initted = o._paused = !1,
                    o._totalTime = o._time = 0,
                    o._rawPrevTime = -1,
                    o._next = o._last = o._onUpdate = o._timeline = o.timeline = null ,
                    o._paused = !1;
                    var R = function() {
                        h && S() - C > 2e3 && l.wake(),
                        setTimeout(R, 2e3)
                    };
                    R(),
                    o.play = function(t, e) {
                        return null != t && this.seek(t, e),
                        this.reversed(!1).paused(!1)
                    }
                    ,
                    o.pause = function(t, e) {
                        return null != t && this.seek(t, e),
                        this.paused(!0)
                    }
                    ,
                    o.resume = function(t, e) {
                        return null != t && this.seek(t, e),
                        this.paused(!1)
                    }
                    ,
                    o.seek = function(t, e) {
                        return this.totalTime(Number(t), e !== !1)
                    }
                    ,
                    o.restart = function(t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
                    }
                    ,
                    o.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e),
                        this.reversed(!0).paused(!1)
                    }
                    ,
                    o.render = function(t, e, i) {}
                    ,
                    o.invalidate = function() {
                        return this._time = this._totalTime = 0,
                        this._initted = this._gc = !1,
                        this._rawPrevTime = -1,
                        !this._gc && this.timeline || this._enabled(!0),
                        this
                    }
                    ,
                    o.isActive = function() {
                        var t, e = this._timeline, i = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
                    }
                    ,
                    o._enabled = function(t, e) {
                        return h || l.wake(),
                        this._gc = !t,
                        this._active = this.isActive(),
                        e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                        !1
                    }
                    ,
                    o._kill = function(t, e) {
                        return this._enabled(!1, !1)
                    }
                    ,
                    o.kill = function(t, e) {
                        return this._kill(t, e),
                        this
                    }
                    ,
                    o._uncache = function(t) {
                        for (var e = t ? this : this.timeline; e; )
                            e._dirty = !0,
                            e = e.timeline;
                        return this
                    }
                    ,
                    o._swapSelfInParams = function(t) {
                        for (var e = t.length, i = t.concat(); --e > -1; )
                            "{self}" === t[e] && (i[e] = this);
                        return i
                    }
                    ,
                    o._callback = function(t) {
                        var e = this.vars
                          , i = e[t]
                          , n = e[t + "Params"]
                          , s = e[t + "Scope"] || e.callbackScope || this
                          , r = n ? n.length : 0;
                        switch (r) {
                        case 0:
                            i.call(s);
                            break;
                        case 1:
                            i.call(s, n[0]);
                            break;
                        case 2:
                            i.call(s, n[0], n[1]);
                            break;
                        default:
                            i.apply(s, n)
                        }
                    }
                    ,
                    o.eventCallback = function(t, e, i, n) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var s = this.vars;
                            if (1 === arguments.length)
                                return s[t];
                            null == e ? delete s[t] : (s[t] = e,
                            s[t + "Params"] = d(i) && i.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(i) : i,
                            s[t + "Scope"] = n),
                            "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }
                    ,
                    o.delay = function(t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
                        this._delay = t,
                        this) : this._delay
                    }
                    ,
                    o.duration = function(t) {
                        return arguments.length ? (this._duration = this._totalDuration = t,
                        this._uncache(!0),
                        this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                        this) : (this._dirty = !1,
                        this._duration)
                    }
                    ,
                    o.totalDuration = function(t) {
                        return this._dirty = !1,
                        arguments.length ? this.duration(t) : this._totalDuration
                    }
                    ,
                    o.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(),
                        this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }
                    ,
                    o.totalTime = function(t, e, i) {
                        if (h || l.wake(),
                        !arguments.length)
                            return this._totalTime;
                        if (this._timeline) {
                            if (t < 0 && !i && (t += this.totalDuration()),
                            this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var n = this._totalDuration
                                  , s = this._timeline;
                                if (t > n && !i && (t = n),
                                this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale,
                                s._dirty || this._uncache(!1),
                                s._timeline)
                                    for (; s._timeline; )
                                        s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0),
                                        s = s._timeline
                            }
                            this._gc && this._enabled(!0, !1),
                            this._totalTime === t && 0 !== this._duration || (D.length && G(),
                            this.render(t, e, !1),
                            D.length && G())
                        }
                        return this
                    }
                    ,
                    o.progress = o.totalProgress = function(t, e) {
                        var i = this.duration();
                        return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                    }
                    ,
                    o.startTime = function(t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t,
                        this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
                        this) : this._startTime
                    }
                    ,
                    o.endTime = function(t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }
                    ,
                    o.timeScale = function(t) {
                        if (!arguments.length)
                            return this._timeScale;
                        if (t = t || p,
                        this._timeline && this._timeline.smoothChildTiming) {
                            var e = this._pauseTime
                              , i = e || 0 === e ? e : this._timeline.totalTime();
                            this._startTime = i - (i - this._startTime) * this._timeScale / t
                        }
                        return this._timeScale = t,
                        this._uncache(!1)
                    }
                    ,
                    o.reversed = function(t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t,
                        this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
                        this) : this._reversed
                    }
                    ,
                    o.paused = function(t) {
                        if (!arguments.length)
                            return this._paused;
                        var e, i, n = this._timeline;
                        return t != this._paused && n && (h || t || l.wake(),
                        e = n.rawTime(),
                        i = e - this._pauseTime,
                        !t && n.smoothChildTiming && (this._startTime += i,
                        this._uncache(!1)),
                        this._pauseTime = t ? e : null ,
                        this._paused = t,
                        this._active = this.isActive(),
                        !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale,
                        this.render(e, e === this._totalTime, !0))),
                        this._gc && !t && this._enabled(!0, !1),
                        this
                    }
                    ;
                    var I = v("core.SimpleTimeline", function(t) {
                        A.call(this, 0, t),
                        this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    o = I.prototype = new A,
                    o.constructor = I,
                    o.kill()._gc = !1,
                    o._first = o._last = o._recent = null ,
                    o._sortChildren = !1,
                    o.add = o.insert = function(t, e, i, n) {
                        var s, r;
                        if (t._startTime = Number(e || 0) + t._delay,
                        t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
                        t.timeline && t.timeline._remove(t, !0),
                        t.timeline = t._timeline = this,
                        t._gc && t._enabled(!0, !0),
                        s = this._last,
                        this._sortChildren)
                            for (r = t._startTime; s && s._startTime > r; )
                                s = s._prev;
                        return s ? (t._next = s._next,
                        s._next = t) : (t._next = this._first,
                        this._first = t),
                        t._next ? t._next._prev = t : this._last = t,
                        t._prev = s,
                        this._recent = t,
                        this._timeline && this._uncache(!0),
                        this
                    }
                    ,
                    o._remove = function(t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0),
                        t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
                        t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
                        t._next = t._prev = t.timeline = null ,
                        t === this._recent && (this._recent = this._last),
                        this._timeline && this._uncache(!0)),
                        this
                    }
                    ,
                    o.render = function(t, e, i) {
                        var n, s = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; s; )
                            n = s._next,
                            (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                            s = n
                    }
                    ,
                    o.rawTime = function() {
                        return h || l.wake(),
                        this._totalTime
                    }
                    ;
                    var M = v("TweenLite", function(e, i, n) {
                        if (A.call(this, i, n),
                        this.render = M.prototype.render,
                        null == e)
                            throw "Cannot tween a null target.";
                        this.target = e = "string" != typeof e ? e : M.selector(e) || e;
                        var s, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
                        if (this._overwrite = l = null == l ? q[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l],
                        (o || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])
                            for (this._targets = a = f(e),
                            this._propLookup = [],
                            this._siblings = [],
                            s = 0; s < a.length; s++)
                                r = a[s],
                                r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(s--, 1),
                                this._targets = a = a.concat(f(r))) : (this._siblings[s] = Z(r, this, !1),
                                1 === l && this._siblings[s].length > 1 && J(r, this, null , 1, this._siblings[s])) : (r = a[s--] = M.selector(r),
                                "string" == typeof r && a.splice(s + 1, 1)) : a.splice(s--, 1);
                        else
                            this._propLookup = {},
                            this._siblings = Z(e, this, !1),
                            1 === l && this._siblings.length > 1 && J(e, this, null , 1, this._siblings);
                        (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -p,
                        this.render(Math.min(0, -this._delay)))
                    }, !0)
                      , z = function(e) {
                        return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                    }
                      , j = function(t, e) {
                        var i, n = {};
                        for (i in t)
                            $[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!X[i] || X[i] && X[i]._autoCSS) || (n[i] = t[i],
                            delete t[i]);
                        t.css = n
                    };
                    o = M.prototype = new A,
                    o.constructor = M,
                    o.kill()._gc = !1,
                    o.ratio = 0,
                    o._firstPT = o._targets = o._overwrittenProps = o._startAt = null ,
                    o._notifyPluginsOfEnabled = o._lazy = !1,
                    M.version = "1.19.0",
                    M.defaultEase = o._ease = new T(null ,null ,1,1),
                    M.defaultOverwrite = "auto",
                    M.ticker = l,
                    M.autoSleep = 120,
                    M.lagSmoothing = function(t, e) {
                        l.lagSmoothing(t, e)
                    }
                    ,
                    M.selector = t.$ || t.jQuery || function(e) {
                        var i = t.$ || t.jQuery;
                        return i ? (M.selector = i,
                        i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                    }
                    ;
                    var D = []
                      , L = {}
                      , E = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
                      , B = function(t) {
                        for (var e, i = this._firstPT, n = 1e-6; i; )
                            e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s,
                            i.m ? e = i.m(e, this._target || i.t) : e < n && e > -n && (e = 0),
                            i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
                            i = i._next
                    }
                      , F = function(t, e, i, n) {
                        var s, r, a, o, l, h, u, c = [t, e], p = 0, f = "", _ = 0;
                        for (c.start = t,
                        i && (i(c),
                        t = c[0],
                        e = c[1]),
                        c.length = 0,
                        s = t.match(E) || [],
                        r = e.match(E) || [],
                        n && (n._next = null ,
                        n.blob = 1,
                        c._firstPT = c._applyPT = n),
                        l = r.length,
                        o = 0; o < l; o++)
                            u = r[o],
                            h = e.substr(p, e.indexOf(u, p) - p),
                            f += h || !o ? h : ",",
                            p += h.length,
                            _ ? _ = (_ + 1) % 5 : "rgba(" === h.substr(-5) && (_ = 1),
                            u === s[o] || s.length <= o ? f += u : (f && (c.push(f),
                            f = ""),
                            a = parseFloat(s[o]),
                            c.push(a),
                            c._firstPT = {
                                _next: c._firstPT,
                                t: c,
                                p: c.length - 1,
                                s: a,
                                c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - a) || 0,
                                f: 0,
                                m: _ && _ < 4 ? Math.round : 0
                            }),
                            p += u.length;
                        return f += e.substr(p),
                        f && c.push(f),
                        c.setRatio = B,
                        c
                    }
                      , N = function(t, e, i, n, s, r, a, o, l) {
                        "function" == typeof n && (n = n(l || 0, t));
                        var h, u, c = "get" === i ? t[e] : i, p = typeof t[e], f = "string" == typeof n && "=" === n.charAt(1), _ = {
                            t: t,
                            p: e,
                            s: c,
                            f: "function" === p,
                            pg: 0,
                            n: s || e,
                            m: r ? "function" == typeof r ? r : Math.round : 0,
                            pr: 0,
                            c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
                        };
                        if ("number" !== p && ("function" === p && "get" === i && (u = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        _.s = c = a ? t[u](a) : t[u]()),
                        "string" == typeof c && (a || isNaN(c)) ? (_.fp = a,
                        h = F(c, n, o || M.defaultStringFilter, _),
                        _ = {
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 2,
                            pg: 0,
                            n: s || e,
                            pr: 0,
                            m: 0
                        }) : f || (_.s = parseFloat(c),
                        _.c = parseFloat(n) - _.s || 0)),
                        _.c)
                            return (_._next = this._firstPT) && (_._next._prev = _),
                            this._firstPT = _,
                            _
                    }
                      , W = M._internals = {
                        isArray: d,
                        isSelector: z,
                        lazyTweens: D,
                        blobDif: F
                    }
                      , X = M._plugins = {}
                      , Y = W.tweenLookup = {}
                      , U = 0
                      , $ = W.reservedProps = {
                        ease: 1,
                        delay: 1,
                        overwrite: 1,
                        onComplete: 1,
                        onCompleteParams: 1,
                        onCompleteScope: 1,
                        useFrames: 1,
                        runBackwards: 1,
                        startAt: 1,
                        onUpdate: 1,
                        onUpdateParams: 1,
                        onUpdateScope: 1,
                        onStart: 1,
                        onStartParams: 1,
                        onStartScope: 1,
                        onReverseComplete: 1,
                        onReverseCompleteParams: 1,
                        onReverseCompleteScope: 1,
                        onRepeat: 1,
                        onRepeatParams: 1,
                        onRepeatScope: 1,
                        easeParams: 1,
                        yoyo: 1,
                        immediateRender: 1,
                        repeat: 1,
                        repeatDelay: 1,
                        data: 1,
                        paused: 1,
                        reversed: 1,
                        autoCSS: 1,
                        lazy: 1,
                        onOverwrite: 1,
                        callbackScope: 1,
                        stringFilter: 1,
                        id: 1
                    }
                      , q = {
                        none: 0,
                        all: 1,
                        auto: 2,
                        concurrent: 3,
                        allOnStart: 4,
                        preexisting: 5,
                        "true": 1,
                        "false": 0
                    }
                      , V = A._rootFramesTimeline = new I
                      , H = A._rootTimeline = new I
                      , Q = 30
                      , G = W.lazyRender = function() {
                        var t, e = D.length;
                        for (L = {}; --e > -1; )
                            t = D[e],
                            t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0),
                            t._lazy = !1);
                        D.length = 0
                    }
                    ;
                    H._startTime = l.time,
                    V._startTime = l.frame,
                    H._active = V._active = !0,
                    setTimeout(G, 1),
                    A._updateRoot = M.render = function() {
                        var t, e, i;
                        if (D.length && G(),
                        H.render((l.time - H._startTime) * H._timeScale, !1, !1),
                        V.render((l.frame - V._startTime) * V._timeScale, !1, !1),
                        D.length && G(),
                        l.frame >= Q) {
                            Q = l.frame + (parseInt(M.autoSleep, 10) || 120);
                            for (i in Y) {
                                for (e = Y[i].tweens,
                                t = e.length; --t > -1; )
                                    e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete Y[i]
                            }
                            if (i = H._first,
                            (!i || i._paused) && M.autoSleep && !V._first && 1 === l._listeners.tick.length) {
                                for (; i && i._paused; )
                                    i = i._next;
                                i || l.sleep()
                            }
                        }
                    }
                    ,
                    l.addEventListener("tick", A._updateRoot);
                    var Z = function(t, e, i) {
                        var n, s, r = t._gsTweenID;
                        if (Y[r || (t._gsTweenID = r = "t" + U++)] || (Y[r] = {
                            target: t,
                            tweens: []
                        }),
                        e && (n = Y[r].tweens,
                        n[s = n.length] = e,
                        i))
                            for (; --s > -1; )
                                n[s] === e && n.splice(s, 1);
                        return Y[r].tweens
                    }
                      , K = function(t, e, i, n) {
                        var s, r, a = t.vars.onOverwrite;
                        return a && (s = a(t, e, i, n)),
                        a = M.onOverwrite,
                        a && (r = a(t, e, i, n)),
                        s !== !1 && r !== !1
                    }
                      , J = function(t, e, i, n, s) {
                        var r, a, o, l;
                        if (1 === n || n >= 4) {
                            for (l = s.length,
                            r = 0; r < l; r++)
                                if ((o = s[r]) !== e)
                                    o._gc || o._kill(null , t, e) && (a = !0);
                                else if (5 === n)
                                    break;
                            return a
                        }
                        var h, u = e._startTime + p, c = [], f = 0, _ = 0 === e._duration;
                        for (r = s.length; --r > -1; )
                            (o = s[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || tt(e, 0, _),
                            0 === tt(o, h, _) && (c[f++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((_ || !o._initted) && u - o._startTime <= 2e-10 || (c[f++] = o)));
                        for (r = f; --r > -1; )
                            if (o = c[r],
                            2 === n && o._kill(i, t, e) && (a = !0),
                            2 !== n || !o._firstPT && o._initted) {
                                if (2 !== n && !K(o, e))
                                    continue;
                                o._enabled(!1, !1) && (a = !0)
                            }
                        return a
                    }
                      , tt = function(t, e, i) {
                        for (var n = t._timeline, s = n._timeScale, r = t._startTime; n._timeline; ) {
                            if (r += n._startTime,
                            s *= n._timeScale,
                            n._paused)
                                return -100;
                            n = n._timeline
                        }
                        return r /= s,
                        r > e ? r - e : i && r === e || !t._initted && r - e < 2 * p ? p : (r += t.totalDuration() / t._timeScale / s) > e + p ? 0 : r - e - p
                    };
                    o._init = function() {
                        var t, e, i, n, s, r, a = this.vars, o = this._overwrittenProps, l = this._duration, h = !!a.immediateRender, u = a.ease;
                        if (a.startAt) {
                            this._startAt && (this._startAt.render(-1, !0),
                            this._startAt.kill()),
                            s = {};
                            for (n in a.startAt)
                                s[n] = a.startAt[n];
                            if (s.overwrite = !1,
                            s.immediateRender = !0,
                            s.lazy = h && a.lazy !== !1,
                            s.startAt = s.delay = null ,
                            this._startAt = M.to(this.target, 0, s),
                            h)
                                if (this._time > 0)
                                    this._startAt = null ;
                                else if (0 !== l)
                                    return
                        } else if (a.runBackwards && 0 !== l)
                            if (this._startAt)
                                this._startAt.render(-1, !0),
                                this._startAt.kill(),
                                this._startAt = null ;
                            else {
                                0 !== this._time && (h = !1),
                                i = {};
                                for (n in a)
                                    $[n] && "autoCSS" !== n || (i[n] = a[n]);
                                if (i.overwrite = 0,
                                i.data = "isFromStart",
                                i.lazy = h && a.lazy !== !1,
                                i.immediateRender = h,
                                this._startAt = M.to(this.target, 0, i),
                                h) {
                                    if (0 === this._time)
                                        return
                                } else
                                    this._startAt._init(),
                                    this._startAt._enabled(!1),
                                    this.vars.immediateRender && (this._startAt = null )
                            }
                        if (this._ease = u = u ? u instanceof T ? u : "function" == typeof u ? new T(u,a.easeParams) : x[u] || M.defaultEase : M.defaultEase,
                        a.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, a.easeParams)),
                        this._easeType = this._ease._type,
                        this._easePower = this._ease._power,
                        this._firstPT = null ,
                        this._targets)
                            for (r = this._targets.length,
                            t = 0; t < r; t++)
                                this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null , t) && (e = !0);
                        else
                            e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                        if (e && M._onPluginEvent("_onInitAllProps", this),
                        o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
                        a.runBackwards)
                            for (i = this._firstPT; i; )
                                i.s += i.c,
                                i.c = -i.c,
                                i = i._next;
                        this._onUpdate = a.onUpdate,
                        this._initted = !0
                    }
                    ,
                    o._initProps = function(e, i, n, s, r) {
                        var a, o, l, h, u, c;
                        if (null == e)
                            return !1;
                        L[e._gsTweenID] && G(),
                        this.vars.css || e.style && e !== t && e.nodeType && X.css && this.vars.autoCSS !== !1 && j(this.vars, e);
                        for (a in this.vars)
                            if (c = this.vars[a],
                            $[a])
                                c && (c instanceof Array || c.push && d(c)) && c.join("").indexOf("{self}") !== -1 && (this.vars[a] = c = this._swapSelfInParams(c, this));
                            else if (X[a] && (h = new X[a])._onInitTween(e, this.vars[a], this, r)) {
                                for (this._firstPT = u = {
                                    _next: this._firstPT,
                                    t: h,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: a,
                                    pg: 1,
                                    pr: h._priority,
                                    m: 0
                                },
                                o = h._overwriteProps.length; --o > -1; )
                                    i[h._overwriteProps[o]] = this._firstPT;
                                (h._priority || h._onInitAllProps) && (l = !0),
                                (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0),
                                u._next && (u._next._prev = u)
                            } else
                                i[a] = N.call(this, e, a, "get", c, a, 0, null , this.vars.stringFilter, r);
                        return s && this._kill(s, e) ? this._initProps(e, i, n, s, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && J(e, this, i, this._overwrite, n) ? (this._kill(i, e),
                        this._initProps(e, i, n, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0),
                        l)
                    }
                    ,
                    o.render = function(t, e, i) {
                        var n, s, r, a, o = this._time, l = this._duration, h = this._rawPrevTime;
                        if (t >= l - 1e-7)
                            this._totalTime = this._time = l,
                            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                            this._reversed || (n = !0,
                            s = "onComplete",
                            i = i || this._timeline.autoRemoveChildren),
                            0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                            (h < 0 || t <= 0 && t >= -1e-7 || h === p && "isPause" !== this.data) && h !== t && (i = !0,
                            h > p && (s = "onReverseComplete")),
                            this._rawPrevTime = a = !e || t || h === t ? t : p);
                        else if (t < 1e-7)
                            this._totalTime = this._time = 0,
                            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                            (0 !== o || 0 === l && h > 0) && (s = "onReverseComplete",
                            n = this._reversed),
                            t < 0 && (this._active = !1,
                            0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== p || "isPause" !== this.data) && (i = !0),
                            this._rawPrevTime = a = !e || t || h === t ? t : p)),
                            this._initted || (i = !0);
                        else if (this._totalTime = this._time = t,
                        this._easeType) {
                            var u = t / l
                              , c = this._easeType
                              , f = this._easePower;
                            (1 === c || 3 === c && u >= .5) && (u = 1 - u),
                            3 === c && (u *= 2),
                            1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u),
                            1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : t / l < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2
                        } else
                            this.ratio = this._ease.getRatio(t / l);
                        if (this._time !== o || i) {
                            if (!this._initted) {
                                if (this._init(),
                                !this._initted || this._gc)
                                    return;
                                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                                    return this._time = this._totalTime = o,
                                    this._rawPrevTime = h,
                                    D.push(this),
                                    void (this._lazy = [t, e]);
                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (this._lazy !== !1 && (this._lazy = !1),
                            this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0),
                            0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")),
                            this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))),
                            r = this._firstPT; r; )
                                r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s,
                                r = r._next;
                            this._onUpdate && (t < 0 && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i),
                            e || (this._time !== o || n || i) && this._callback("onUpdate")),
                            s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i),
                            n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                            this._active = !1),
                            !e && this.vars[s] && this._callback(s),
                            0 === l && this._rawPrevTime === p && a !== p && (this._rawPrevTime = 0)))
                        }
                    }
                    ,
                    o._kill = function(t, e, i) {
                        if ("all" === t && (t = null ),
                        null == t && (null == e || e === this.target))
                            return this._lazy = !1,
                            this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
                        var n, s, r, a, o, l, h, u, c, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                        if ((d(e) || z(e)) && "number" != typeof e[0])
                            for (n = e.length; --n > -1; )
                                this._kill(t, e[n], i) && (l = !0);
                        else {
                            if (this._targets) {
                                for (n = this._targets.length; --n > -1; )
                                    if (e === this._targets[n]) {
                                        o = this._propLookup[n] || {},
                                        this._overwrittenProps = this._overwrittenProps || [],
                                        s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                        break
                                    }
                            } else {
                                if (e !== this.target)
                                    return !1;
                                o = this._propLookup,
                                s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (o) {
                                if (h = t || o,
                                u = t !== s && "all" !== s && t !== o && ("object" != typeof t || !t._tempKill),
                                i && (M.onOverwrite || this.vars.onOverwrite)) {
                                    for (r in h)
                                        o[r] && (c || (c = []),
                                        c.push(r));
                                    if ((c || !t) && !K(this, i, e, c))
                                        return !1
                                }
                                for (r in h)
                                    (a = o[r]) && (p && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s,
                                    l = !0),
                                    a.pg && a.t._kill(h) && (l = !0),
                                    a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next),
                                    a._next && (a._next._prev = a._prev),
                                    a._next = a._prev = null ),
                                    delete o[r]),
                                    u && (s[r] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }
                    ,
                    o.invalidate = function() {
                        return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this),
                        this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null ,
                        this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
                        this._propLookup = this._targets ? {} : [],
                        A.prototype.invalidate.call(this),
                        this.vars.immediateRender && (this._time = -p,
                        this.render(Math.min(0, -this._delay))),
                        this
                    }
                    ,
                    o._enabled = function(t, e) {
                        if (h || l.wake(),
                        t && this._gc) {
                            var i, n = this._targets;
                            if (n)
                                for (i = n.length; --i > -1; )
                                    this._siblings[i] = Z(n[i], this, !0);
                            else
                                this._siblings = Z(this.target, this, !0)
                        }
                        return A.prototype._enabled.call(this, t, e),
                        !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }
                    ,
                    M.to = function(t, e, i) {
                        return new M(t,e,i)
                    }
                    ,
                    M.from = function(t, e, i) {
                        return i.runBackwards = !0,
                        i.immediateRender = 0 != i.immediateRender,
                        new M(t,e,i)
                    }
                    ,
                    M.fromTo = function(t, e, i, n) {
                        return n.startAt = i,
                        n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                        new M(t,e,n)
                    }
                    ,
                    M.delayedCall = function(t, e, i, n, s) {
                        return new M(e,0,{
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: s,
                            overwrite: 0
                        })
                    }
                    ,
                    M.set = function(t, e) {
                        return new M(t,0,e)
                    }
                    ,
                    M.getTweensOf = function(t, e) {
                        if (null == t)
                            return [];
                        t = "string" != typeof t ? t : M.selector(t) || t;
                        var i, n, s, r;
                        if ((d(t) || z(t)) && "number" != typeof t[0]) {
                            for (i = t.length,
                            n = []; --i > -1; )
                                n = n.concat(M.getTweensOf(t[i], e));
                            for (i = n.length; --i > -1; )
                                for (r = n[i],
                                s = i; --s > -1; )
                                    r === n[s] && n.splice(i, 1)
                        } else
                            for (n = Z(t).concat(),
                            i = n.length; --i > -1; )
                                (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                        return n
                    }
                    ,
                    M.killTweensOf = M.killDelayedCallsTo = function(t, e, i) {
                        "object" == typeof e && (i = e,
                        e = !1);
                        for (var n = M.getTweensOf(t, e), s = n.length; --s > -1; )
                            n[s]._kill(i, t)
                    }
                    ;
                    var et = v("plugins.TweenPlugin", function(t, e) {
                        this._overwriteProps = (t || "").split(","),
                        this._propName = this._overwriteProps[0],
                        this._priority = e || 0,
                        this._super = et.prototype
                    }, !0);
                    if (o = et.prototype,
                    et.version = "1.19.0",
                    et.API = 2,
                    o._firstPT = null ,
                    o._addTween = N,
                    o.setRatio = B,
                    o._kill = function(t) {
                        var e, i = this._overwriteProps, n = this._firstPT;
                        if (null != t[this._propName])
                            this._overwriteProps = [];
                        else
                            for (e = i.length; --e > -1; )
                                null != t[i[e]] && i.splice(e, 1);
                        for (; n; )
                            null != t[n.n] && (n._next && (n._next._prev = n._prev),
                            n._prev ? (n._prev._next = n._next,
                            n._prev = null ) : this._firstPT === n && (this._firstPT = n._next)),
                            n = n._next;
                        return !1
                    }
                    ,
                    o._mod = o._roundProps = function(t) {
                        for (var e, i = this._firstPT; i; )
                            e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")],
                            e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e),
                            i = i._next
                    }
                    ,
                    M._onPluginEvent = function(t, e) {
                        var i, n, s, r, a, o = e._firstPT;
                        if ("_onInitAllProps" === t) {
                            for (; o; ) {
                                for (a = o._next,
                                n = s; n && n.pr > o.pr; )
                                    n = n._next;
                                (o._prev = n ? n._prev : r) ? o._prev._next = o : s = o,
                                (o._next = n) ? n._prev = o : r = o,
                                o = a
                            }
                            o = e._firstPT = s
                        }
                        for (; o; )
                            o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                            o = o._next;
                        return i
                    }
                    ,
                    et.activate = function(t) {
                        for (var e = t.length; --e > -1; )
                            t[e].API === et.API && (X[(new t[e])._propName] = t[e]);
                        return !0
                    }
                    ,
                    y.plugin = function(t) {
                        if (!(t && t.propName && t.init && t.API))
                            throw "illegal plugin definition.";
                        var e, i = t.propName, n = t.priority || 0, s = t.overwriteProps, r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        }, a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            et.call(this, i, n),
                            this._overwriteProps = s || []
                        }, t.global === !0), o = a.prototype = new et(i);
                        o.constructor = a,
                        a.API = t.API;
                        for (e in r)
                            "function" == typeof t[e] && (o[r[e]] = t[e]);
                        return a.version = t.version,
                        et.activate([a]),
                        a
                    }
                    ,
                    r = t._gsQueue) {
                        for (a = 0; a < r.length; a++)
                            r[a]();
                        for (o in m)
                            m[o].func || t.console.log("GSAP encountered missing dependency: " + o)
                    }
                    h = !1
                }
            }("undefined" != typeof e && e.exports && "undefined" != typeof t ? t : this || window, "TweenLite")
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    19: [function(t, e, i) {
        (function(t) {
            var i = "undefined" != typeof e && e.exports && "undefined" != typeof t ? t : this || window;
            (i._gsQueue || (i._gsQueue = [])).push(function() {
                "use strict";
                i._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, i) {
                    var n = function(t) {
                        var e, i = [], n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]))
                            ;
                        return i
                    }
                      , s = function(t, e, i) {
                        var n, s, r = t.cycle;
                        for (n in r)
                            s = r[n],
                            t[n] = "function" == typeof s ? s(i, e[i]) : s[i % s.length];
                        delete t.cycle
                    }
                      , r = function(t, e, n) {
                        i.call(this, t, e, n),
                        this._cycle = 0,
                        this._yoyo = this.vars.yoyo === !0,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._dirty = !0,
                        this.render = r.prototype.render
                    }
                      , a = 1e-10
                      , o = i._internals
                      , l = o.isSelector
                      , h = o.isArray
                      , u = r.prototype = i.to({}, .1, {})
                      , c = [];
                    r.version = "1.19.0",
                    u.constructor = r,
                    u.kill()._gc = !1,
                    r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf,
                    r.getTweensOf = i.getTweensOf,
                    r.lagSmoothing = i.lagSmoothing,
                    r.ticker = i.ticker,
                    r.render = i.render,
                    u.invalidate = function() {
                        return this._yoyo = this.vars.yoyo === !0,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._uncache(!0),
                        i.prototype.invalidate.call(this)
                    }
                    ,
                    u.updateTo = function(t, e) {
                        var n, s = this.ratio, r = this.vars.immediateRender || t.immediateRender;
                        e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
                        this._uncache(!1),
                        this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay));
                        for (n in t)
                            this.vars[n] = t[n];
                        if (this._initted || r)
                            if (e)
                                this._initted = !1,
                                r && this.render(0, !0, !0);
                            else if (this._gc && this._enabled(!0, !1),
                            this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this),
                            this._time / this._duration > .998) {
                                var a = this._totalTime;
                                this.render(0, !0, !1),
                                this._initted = !1,
                                this.render(a, !0, !1)
                            } else if (this._initted = !1,
                            this._init(),
                            this._time > 0 || r)
                                for (var o, l = 1 / (1 - s), h = this._firstPT; h; )
                                    o = h.s + h.c,
                                    h.c *= l,
                                    h.s = o - h.c,
                                    h = h._next;
                        return this
                    }
                    ,
                    u.render = function(t, e, i) {
                        this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                        var n, s, r, l, h, u, c, p, f = this._dirty ? this.totalDuration() : this._totalDuration, _ = this._time, d = this._totalTime, m = this._cycle, g = this._duration, y = this._rawPrevTime;
                        if (t >= f - 1e-7 ? (this._totalTime = f,
                        this._cycle = this._repeat,
                        this._yoyo && 0 !== (1 & this._cycle) ? (this._time = 0,
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = g,
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                        this._reversed || (n = !0,
                        s = "onComplete",
                        i = i || this._timeline.autoRemoveChildren),
                        0 === g && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                        (y < 0 || t <= 0 && t >= -1e-7 || y === a && "isPause" !== this.data) && y !== t && (i = !0,
                        y > a && (s = "onReverseComplete")),
                        this._rawPrevTime = p = !e || t || y === t ? t : a)) : t < 1e-7 ? (this._totalTime = this._time = this._cycle = 0,
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                        (0 !== d || 0 === g && y > 0) && (s = "onReverseComplete",
                        n = this._reversed),
                        t < 0 && (this._active = !1,
                        0 === g && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0),
                        this._rawPrevTime = p = !e || t || y === t ? t : a)),
                        this._initted || (i = !0)) : (this._totalTime = this._time = t,
                        0 !== this._repeat && (l = g + this._repeatDelay,
                        this._cycle = this._totalTime / l >> 0,
                        0 !== this._cycle && this._cycle === this._totalTime / l && d <= t && this._cycle--,
                        this._time = this._totalTime - this._cycle * l,
                        this._yoyo && 0 !== (1 & this._cycle) && (this._time = g - this._time),
                        this._time > g ? this._time = g : this._time < 0 && (this._time = 0)),
                        this._easeType ? (h = this._time / g,
                        u = this._easeType,
                        c = this._easePower,
                        (1 === u || 3 === u && h >= .5) && (h = 1 - h),
                        3 === u && (h *= 2),
                        1 === c ? h *= h : 2 === c ? h *= h * h : 3 === c ? h *= h * h * h : 4 === c && (h *= h * h * h * h),
                        1 === u ? this.ratio = 1 - h : 2 === u ? this.ratio = h : this._time / g < .5 ? this.ratio = h / 2 : this.ratio = 1 - h / 2) : this.ratio = this._ease.getRatio(this._time / g)),
                        _ === this._time && !i && m === this._cycle)
                            return void (d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                        if (!this._initted) {
                            if (this._init(),
                            !this._initted || this._gc)
                                return;
                            if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                                return this._time = _,
                                this._totalTime = d,
                                this._rawPrevTime = y,
                                this._cycle = m,
                                o.lazyTweens.push(this),
                                void (this._lazy = [t, e]);
                            this._time && !n ? this.ratio = this._ease.getRatio(this._time / g) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                        }
                        for (this._lazy !== !1 && (this._lazy = !1),
                        this._active || !this._paused && this._time !== _ && t >= 0 && (this._active = !0),
                        0 === d && (2 === this._initted && t > 0 && this._init(),
                        this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")),
                        this.vars.onStart && (0 === this._totalTime && 0 !== g || e || this._callback("onStart"))),
                        r = this._firstPT; r; )
                            r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s,
                            r = r._next;
                        this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, e, i),
                        e || (this._totalTime !== d || s) && this._callback("onUpdate")),
                        this._cycle !== m && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
                        s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, e, i),
                        n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                        this._active = !1),
                        !e && this.vars[s] && this._callback(s),
                        0 === g && this._rawPrevTime === a && p !== a && (this._rawPrevTime = 0)))
                    }
                    ,
                    r.to = function(t, e, i) {
                        return new r(t,e,i)
                    }
                    ,
                    r.from = function(t, e, i) {
                        return i.runBackwards = !0,
                        i.immediateRender = 0 != i.immediateRender,
                        new r(t,e,i)
                    }
                    ,
                    r.fromTo = function(t, e, i, n) {
                        return n.startAt = i,
                        n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                        new r(t,e,n)
                    }
                    ,
                    r.staggerTo = r.allTo = function(t, e, a, o, u, p, f) {
                        o = o || 0;
                        var _, d, m, g, y = 0, v = [], w = function() {
                            a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments),
                            u.apply(f || a.callbackScope || this, p || c)
                        }, T = a.cycle, x = a.startAt && a.startAt.cycle;
                        for (h(t) || ("string" == typeof t && (t = i.selector(t) || t),
                        l(t) && (t = n(t))),
                        t = t || [],
                        o < 0 && (t = n(t),
                        t.reverse(),
                        o *= -1),
                        _ = t.length - 1,
                        m = 0; m <= _; m++) {
                            d = {};
                            for (g in a)
                                d[g] = a[g];
                            if (T && (s(d, t, m),
                            null != d.duration && (e = d.duration,
                            delete d.duration)),
                            x) {
                                x = d.startAt = {};
                                for (g in a.startAt)
                                    x[g] = a.startAt[g];
                                s(d.startAt, t, m)
                            }
                            d.delay = y + (d.delay || 0),
                            m === _ && u && (d.onComplete = w),
                            v[m] = new r(t[m],e,d),
                            y += o
                        }
                        return v
                    }
                    ,
                    r.staggerFrom = r.allFrom = function(t, e, i, n, s, a, o) {
                        return i.runBackwards = !0,
                        i.immediateRender = 0 != i.immediateRender,
                        r.staggerTo(t, e, i, n, s, a, o)
                    }
                    ,
                    r.staggerFromTo = r.allFromTo = function(t, e, i, n, s, a, o, l) {
                        return n.startAt = i,
                        n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                        r.staggerTo(t, e, n, s, a, o, l)
                    }
                    ,
                    r.delayedCall = function(t, e, i, n, s) {
                        return new r(e,0,{
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            useFrames: s,
                            overwrite: 0
                        })
                    }
                    ,
                    r.set = function(t, e) {
                        return new r(t,0,e)
                    }
                    ,
                    r.isTweening = function(t) {
                        return i.getTweensOf(t, !0).length > 0
                    }
                    ;
                    var p = function(t, e) {
                        for (var n = [], s = 0, r = t._first; r; )
                            r instanceof i ? n[s++] = r : (e && (n[s++] = r),
                            n = n.concat(p(r, e)),
                            s = n.length),
                            r = r._next;
                        return n
                    }
                      , f = r.getAllTweens = function(e) {
                        return p(t._rootTimeline, e).concat(p(t._rootFramesTimeline, e))
                    }
                    ;
                    r.killAll = function(t, i, n, s) {
                        null == i && (i = !0),
                        null == n && (n = !0);
                        var r, a, o, l = f(0 != s), h = l.length, u = i && n && s;
                        for (o = 0; o < h; o++)
                            a = l[o],
                            (u || a instanceof e || (r = a.target === a.vars.onComplete) && n || i && !r) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                    }
                    ,
                    r.killChildTweensOf = function(t, e) {
                        if (null != t) {
                            var s, a, u, c, p, f = o.tweenLookup;
                            if ("string" == typeof t && (t = i.selector(t) || t),
                            l(t) && (t = n(t)),
                            h(t))
                                for (c = t.length; --c > -1; )
                                    r.killChildTweensOf(t[c], e);
                            else {
                                s = [];
                                for (u in f)
                                    for (a = f[u].target.parentNode; a; )
                                        a === t && (s = s.concat(f[u].tweens)),
                                        a = a.parentNode;
                                for (p = s.length,
                                c = 0; c < p; c++)
                                    e && s[c].totalTime(s[c].totalDuration()),
                                    s[c]._enabled(!1, !1)
                            }
                        }
                    }
                    ;
                    var _ = function(t, i, n, s) {
                        i = i !== !1,
                        n = n !== !1,
                        s = s !== !1;
                        for (var r, a, o = f(s), l = i && n && s, h = o.length; --h > -1; )
                            a = o[h],
                            (l || a instanceof e || (r = a.target === a.vars.onComplete) && n || i && !r) && a.paused(t)
                    };
                    return r.pauseAll = function(t, e, i) {
                        _(!0, t, e, i)
                    }
                    ,
                    r.resumeAll = function(t, e, i) {
                        _(!1, t, e, i)
                    }
                    ,
                    r.globalTimeScale = function(e) {
                        var n = t._rootTimeline
                          , s = i.ticker.time;
                        return arguments.length ? (e = e || a,
                        n._startTime = s - (s - n._startTime) * n._timeScale / e,
                        n = t._rootFramesTimeline,
                        s = i.ticker.frame,
                        n._startTime = s - (s - n._startTime) * n._timeScale / e,
                        n._timeScale = t._rootTimeline._timeScale = e,
                        e) : n._timeScale
                    }
                    ,
                    u.progress = function(t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                    }
                    ,
                    u.totalProgress = function(t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                    }
                    ,
                    u.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(),
                        t > this._duration && (t = this._duration),
                        this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                        this.totalTime(t, e)) : this._time
                    }
                    ,
                    u.duration = function(e) {
                        return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                    }
                    ,
                    u.totalDuration = function(t) {
                        return arguments.length ? this._repeat === -1 ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
                        this._dirty = !1),
                        this._totalDuration)
                    }
                    ,
                    u.repeat = function(t) {
                        return arguments.length ? (this._repeat = t,
                        this._uncache(!0)) : this._repeat
                    }
                    ,
                    u.repeatDelay = function(t) {
                        return arguments.length ? (this._repeatDelay = t,
                        this._uncache(!0)) : this._repeatDelay
                    }
                    ,
                    u.yoyo = function(t) {
                        return arguments.length ? (this._yoyo = t,
                        this) : this._yoyo
                    }
                    ,
                    r
                }, !0),
                i._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(t, e, n) {
                    var s = function(t) {
                        e.call(this, t),
                        this._labels = {},
                        this.autoRemoveChildren = this.vars.autoRemoveChildren === !0,
                        this.smoothChildTiming = this.vars.smoothChildTiming === !0,
                        this._sortChildren = !0,
                        this._onUpdate = this.vars.onUpdate;
                        var i, n, s = this.vars;
                        for (n in s)
                            i = s[n],
                            h(i) && i.join("").indexOf("{self}") !== -1 && (s[n] = this._swapSelfInParams(i));
                        h(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                    }
                      , r = 1e-10
                      , a = n._internals
                      , o = s._internals = {}
                      , l = a.isSelector
                      , h = a.isArray
                      , u = a.lazyTweens
                      , c = a.lazyRender
                      , p = i._gsDefine.globals
                      , f = function(t) {
                        var e, i = {};
                        for (e in t)
                            i[e] = t[e];
                        return i
                    }
                      , _ = function(t, e, i) {
                        var n, s, r = t.cycle;
                        for (n in r)
                            s = r[n],
                            t[n] = "function" == typeof s ? s.call(e[i], i) : s[i % s.length];
                        delete t.cycle
                    }
                      , d = o.pauseCallback = function() {}
                      , m = function(t) {
                        var e, i = [], n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]))
                            ;
                        return i
                    }
                      , g = s.prototype = new e;
                    return s.version = "1.19.0",
                    g.constructor = s,
                    g.kill()._gc = g._forcingPlayhead = g._hasPause = !1,
                    g.to = function(t, e, i, s) {
                        var r = i.repeat && p.TweenMax || n;
                        return e ? this.add(new r(t,e,i), s) : this.set(t, i, s)
                    }
                    ,
                    g.from = function(t, e, i, s) {
                        return this.add((i.repeat && p.TweenMax || n).from(t, e, i), s)
                    }
                    ,
                    g.fromTo = function(t, e, i, s, r) {
                        var a = s.repeat && p.TweenMax || n;
                        return e ? this.add(a.fromTo(t, e, i, s), r) : this.set(t, s, r)
                    }
                    ,
                    g.staggerTo = function(t, e, i, r, a, o, h, u) {
                        var c, p, d = new s({
                            onComplete: o,
                            onCompleteParams: h,
                            callbackScope: u,
                            smoothChildTiming: this.smoothChildTiming
                        }), g = i.cycle;
                        for ("string" == typeof t && (t = n.selector(t) || t),
                        t = t || [],
                        l(t) && (t = m(t)),
                        r = r || 0,
                        r < 0 && (t = m(t),
                        t.reverse(),
                        r *= -1),
                        p = 0; p < t.length; p++)
                            c = f(i),
                            c.startAt && (c.startAt = f(c.startAt),
                            c.startAt.cycle && _(c.startAt, t, p)),
                            g && (_(c, t, p),
                            null != c.duration && (e = c.duration,
                            delete c.duration)),
                            d.to(t[p], e, c, p * r);
                        return this.add(d, a)
                    }
                    ,
                    g.staggerFrom = function(t, e, i, n, s, r, a, o) {
                        return i.immediateRender = 0 != i.immediateRender,
                        i.runBackwards = !0,
                        this.staggerTo(t, e, i, n, s, r, a, o)
                    }
                    ,
                    g.staggerFromTo = function(t, e, i, n, s, r, a, o, l) {
                        return n.startAt = i,
                        n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                        this.staggerTo(t, e, n, s, r, a, o, l)
                    }
                    ,
                    g.call = function(t, e, i, s) {
                        return this.add(n.delayedCall(0, t, e, i), s)
                    }
                    ,
                    g.set = function(t, e, i) {
                        return i = this._parseTimeOrLabel(i, 0, !0),
                        null == e.immediateRender && (e.immediateRender = i === this._time && !this._paused),
                        this.add(new n(t,0,e), i)
                    }
                    ,
                    s.exportRoot = function(t, e) {
                        t = t || {},
                        null == t.smoothChildTiming && (t.smoothChildTiming = !0);
                        var i, r, a = new s(t), o = a._timeline;
                        for (null == e && (e = !0),
                        o._remove(a, !0),
                        a._startTime = 0,
                        a._rawPrevTime = a._time = a._totalTime = o._time,
                        i = o._first; i; )
                            r = i._next,
                            e && i instanceof n && i.target === i.vars.onComplete || a.add(i, i._startTime - i._delay),
                            i = r;
                        return o.add(a, 0),
                        a
                    }
                    ,
                    g.add = function(i, r, a, o) {
                        var l, u, c, p, f, _;
                        if ("number" != typeof r && (r = this._parseTimeOrLabel(r, 0, !0, i)),
                        !(i instanceof t)) {
                            if (i instanceof Array || i && i.push && h(i)) {
                                for (a = a || "normal",
                                o = o || 0,
                                l = r,
                                u = i.length,
                                c = 0; c < u; c++)
                                    h(p = i[c]) && (p = new s({
                                        tweens: p
                                    })),
                                    this.add(p, l),
                                    "string" != typeof p && "function" != typeof p && ("sequence" === a ? l = p._startTime + p.totalDuration() / p._timeScale : "start" === a && (p._startTime -= p.delay())),
                                    l += o;
                                return this._uncache(!0)
                            }
                            if ("string" == typeof i)
                                return this.addLabel(i, r);
                            if ("function" != typeof i)
                                throw "Cannot add " + i + " into the timeline; it is not a tween, timeline, function, or string.";
                            i = n.delayedCall(0, i)
                        }
                        if (e.prototype.add.call(this, i, r),
                        (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                            for (f = this,
                            _ = f.rawTime() > i._startTime; f._timeline; )
                                _ && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1),
                                f = f._timeline;
                        return this
                    }
                    ,
                    g.remove = function(e) {
                        if (e instanceof t) {
                            this._remove(e, !1);
                            var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                            return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale,
                            this
                        }
                        if (e instanceof Array || e && e.push && h(e)) {
                            for (var n = e.length; --n > -1; )
                                this.remove(e[n]);
                            return this
                        }
                        return "string" == typeof e ? this.removeLabel(e) : this.kill(null , e)
                    }
                    ,
                    g._remove = function(t, i) {
                        e.prototype._remove.call(this, t, i);
                        var n = this._last;
                        return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(),
                        this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
                        this
                    }
                    ,
                    g.append = function(t, e) {
                        return this.add(t, this._parseTimeOrLabel(null , e, !0, t))
                    }
                    ,
                    g.insert = g.insertMultiple = function(t, e, i, n) {
                        return this.add(t, e || 0, i, n)
                    }
                    ,
                    g.appendMultiple = function(t, e, i, n) {
                        return this.add(t, this._parseTimeOrLabel(null , e, !0, t), i, n)
                    }
                    ,
                    g.addLabel = function(t, e) {
                        return this._labels[t] = this._parseTimeOrLabel(e),
                        this
                    }
                    ,
                    g.addPause = function(t, e, i, s) {
                        var r = n.delayedCall(0, d, i, s || this);
                        return r.vars.onComplete = r.vars.onReverseComplete = e,
                        r.data = "isPause",
                        this._hasPause = !0,
                        this.add(r, t)
                    }
                    ,
                    g.removeLabel = function(t) {
                        return delete this._labels[t],
                        this
                    }
                    ,
                    g.getLabelTime = function(t) {
                        return null != this._labels[t] ? this._labels[t] : -1
                    }
                    ,
                    g._parseTimeOrLabel = function(e, i, n, s) {
                        var r;
                        if (s instanceof t && s.timeline === this)
                            this.remove(s);
                        else if (s && (s instanceof Array || s.push && h(s)))
                            for (r = s.length; --r > -1; )
                                s[r]instanceof t && s[r].timeline === this && this.remove(s[r]);
                        if ("string" == typeof i)
                            return this._parseTimeOrLabel(i, n && "number" == typeof e && null == this._labels[i] ? e - this.duration() : 0, n);
                        if (i = i || 0,
                        "string" != typeof e || !isNaN(e) && null == this._labels[e])
                            null == e && (e = this.duration());
                        else {
                            if (r = e.indexOf("="),
                            r === -1)
                                return null == this._labels[e] ? n ? this._labels[e] = this.duration() + i : i : this._labels[e] + i;
                            i = parseInt(e.charAt(r - 1) + "1", 10) * Number(e.substr(r + 1)),
                            e = r > 1 ? this._parseTimeOrLabel(e.substr(0, r - 1), 0, n) : this.duration()
                        }
                        return Number(e) + i
                    }
                    ,
                    g.seek = function(t, e) {
                        return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), e !== !1)
                    }
                    ,
                    g.stop = function() {
                        return this.paused(!0)
                    }
                    ,
                    g.gotoAndPlay = function(t, e) {
                        return this.play(t, e)
                    }
                    ,
                    g.gotoAndStop = function(t, e) {
                        return this.pause(t, e)
                    }
                    ,
                    g.render = function(t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n, s, a, o, l, h, p, f = this._dirty ? this.totalDuration() : this._totalDuration, _ = this._time, d = this._startTime, m = this._timeScale, g = this._paused;
                        if (t >= f - 1e-7)
                            this._totalTime = this._time = f,
                            this._reversed || this._hasPausedChild() || (s = !0,
                            o = "onComplete",
                            l = !!this._timeline.autoRemoveChildren,
                            0 === this._duration && (t <= 0 && t >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== t && this._first && (l = !0,
                            this._rawPrevTime > r && (o = "onReverseComplete"))),
                            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r,
                            t = f + 1e-4;
                        else if (t < 1e-7)
                            if (this._totalTime = this._time = 0,
                            (0 !== _ || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (o = "onReverseComplete",
                            s = this._reversed),
                            t < 0)
                                this._active = !1,
                                this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0,
                                o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0),
                                this._rawPrevTime = t;
                            else {
                                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r,
                                0 === t && s)
                                    for (n = this._first; n && 0 === n._startTime; )
                                        n._duration || (s = !1),
                                        n = n._next;
                                t = 0,
                                this._initted || (l = !0)
                            }
                        else {
                            if (this._hasPause && !this._forcingPlayhead && !e) {
                                if (t >= _)
                                    for (n = this._first; n && n._startTime <= t && !h; )
                                        n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n),
                                        n = n._next;
                                else
                                    for (n = this._last; n && n._startTime >= t && !h; )
                                        n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n),
                                        n = n._prev;
                                h && (this._time = t = h._startTime,
                                this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                            }
                            this._totalTime = this._time = this._rawPrevTime = t
                        }
                        if (this._time !== _ && this._first || i || l || h) {
                            if (this._initted || (this._initted = !0),
                            this._active || !this._paused && this._time !== _ && t > 0 && (this._active = !0),
                            0 === _ && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")),
                            p = this._time,
                            p >= _)
                                for (n = this._first; n && (a = n._next,
                                p === this._time && (!this._paused || g)); )
                                    (n._active || n._startTime <= p && !n._paused && !n._gc) && (h === n && this.pause(),
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                    n = a;
                            else
                                for (n = this._last; n && (a = n._prev,
                                p === this._time && (!this._paused || g)); ) {
                                    if (n._active || n._startTime <= _ && !n._paused && !n._gc) {
                                        if (h === n) {
                                            for (h = n._prev; h && h.endTime() > this._time; )
                                                h.render(h._reversed ? h.totalDuration() - (t - h._startTime) * h._timeScale : (t - h._startTime) * h._timeScale, e, i),
                                                h = h._prev;
                                            h = null ,
                                            this.pause()
                                        }
                                        n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                    }
                                    n = a
                                }
                            this._onUpdate && (e || (u.length && c(),
                            this._callback("onUpdate"))),
                            o && (this._gc || d !== this._startTime && m === this._timeScale || (0 === this._time || f >= this.totalDuration()) && (s && (u.length && c(),
                            this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                            this._active = !1),
                            !e && this.vars[o] && this._callback(o)))
                        }
                    }
                    ,
                    g._hasPausedChild = function() {
                        for (var t = this._first; t; ) {
                            if (t._paused || t instanceof s && t._hasPausedChild())
                                return !0;
                            t = t._next
                        }
                        return !1
                    }
                    ,
                    g.getChildren = function(t, e, i, s) {
                        s = s || -9999999999;
                        for (var r = [], a = this._first, o = 0; a; )
                            a._startTime < s || (a instanceof n ? e !== !1 && (r[o++] = a) : (i !== !1 && (r[o++] = a),
                            t !== !1 && (r = r.concat(a.getChildren(!0, e, i)),
                            o = r.length))),
                            a = a._next;
                        return r
                    }
                    ,
                    g.getTweensOf = function(t, e) {
                        var i, s, r = this._gc, a = [], o = 0;
                        for (r && this._enabled(!0, !0),
                        i = n.getTweensOf(t),
                        s = i.length; --s > -1; )
                            (i[s].timeline === this || e && this._contains(i[s])) && (a[o++] = i[s]);
                        return r && this._enabled(!1, !0),
                        a
                    }
                    ,
                    g.recent = function() {
                        return this._recent
                    }
                    ,
                    g._contains = function(t) {
                        for (var e = t.timeline; e; ) {
                            if (e === this)
                                return !0;
                            e = e.timeline
                        }
                        return !1
                    }
                    ,
                    g.shiftChildren = function(t, e, i) {
                        i = i || 0;
                        for (var n, s = this._first, r = this._labels; s; )
                            s._startTime >= i && (s._startTime += t),
                            s = s._next;
                        if (e)
                            for (n in r)
                                r[n] >= i && (r[n] += t);
                        return this._uncache(!0)
                    }
                    ,
                    g._kill = function(t, e) {
                        if (!t && !e)
                            return this._enabled(!1, !1);
                        for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), n = i.length, s = !1; --n > -1; )
                            i[n]._kill(t, e) && (s = !0);
                        return s
                    }
                    ,
                    g.clear = function(t) {
                        var e = this.getChildren(!1, !0, !0)
                          , i = e.length;
                        for (this._time = this._totalTime = 0; --i > -1; )
                            e[i]._enabled(!1, !1);
                        return t !== !1 && (this._labels = {}),
                        this._uncache(!0)
                    }
                    ,
                    g.invalidate = function() {
                        for (var e = this._first; e; )
                            e.invalidate(),
                            e = e._next;
                        return t.prototype.invalidate.call(this)
                    }
                    ,
                    g._enabled = function(t, i) {
                        if (t === this._gc)
                            for (var n = this._first; n; )
                                n._enabled(t, !0),
                                n = n._next;
                        return e.prototype._enabled.call(this, t, i)
                    }
                    ,
                    g.totalTime = function(e, i, n) {
                        this._forcingPlayhead = !0;
                        var s = t.prototype.totalTime.apply(this, arguments);
                        return this._forcingPlayhead = !1,
                        s
                    }
                    ,
                    g.duration = function(t) {
                        return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
                        this) : (this._dirty && this.totalDuration(),
                        this._duration)
                    }
                    ,
                    g.totalDuration = function(t) {
                        if (!arguments.length) {
                            if (this._dirty) {
                                for (var e, i, n = 0, s = this._last, r = 999999999999; s; )
                                    e = s._prev,
                                    s._dirty && s.totalDuration(),
                                    s._startTime > r && this._sortChildren && !s._paused ? this.add(s, s._startTime - s._delay) : r = s._startTime,
                                    s._startTime < 0 && !s._paused && (n -= s._startTime,
                                    this._timeline.smoothChildTiming && (this._startTime += s._startTime / this._timeScale),
                                    this.shiftChildren(-s._startTime, !1, -9999999999),
                                    r = 0),
                                    i = s._startTime + s._totalDuration / s._timeScale,
                                    i > n && (n = i),
                                    s = e;
                                this._duration = this._totalDuration = n,
                                this._dirty = !1
                            }
                            return this._totalDuration
                        }
                        return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                    }
                    ,
                    g.paused = function(e) {
                        if (!e)
                            for (var i = this._first, n = this._time; i; )
                                i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0),
                                i = i._next;
                        return t.prototype.paused.apply(this, arguments)
                    }
                    ,
                    g.usesFrames = function() {
                        for (var e = this._timeline; e._timeline; )
                            e = e._timeline;
                        return e === t._rootFramesTimeline
                    }
                    ,
                    g.rawTime = function() {
                        return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
                    }
                    ,
                    s
                }, !0),
                i._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(t, e, n) {
                    var s = function(e) {
                        t.call(this, e),
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._cycle = 0,
                        this._yoyo = this.vars.yoyo === !0,
                        this._dirty = !0
                    }
                      , r = 1e-10
                      , a = e._internals
                      , o = a.lazyTweens
                      , l = a.lazyRender
                      , h = i._gsDefine.globals
                      , u = new n(null ,null ,1,0)
                      , c = s.prototype = new t;
                    return c.constructor = s,
                    c.kill()._gc = !1,
                    s.version = "1.19.0",
                    c.invalidate = function() {
                        return this._yoyo = this.vars.yoyo === !0,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._uncache(!0),
                        t.prototype.invalidate.call(this)
                    }
                    ,
                    c.addCallback = function(t, i, n, s) {
                        return this.add(e.delayedCall(0, t, n, s), i)
                    }
                    ,
                    c.removeCallback = function(t, e) {
                        if (t)
                            if (null == e)
                                this._kill(null , t);
                            else
                                for (var i = this.getTweensOf(t, !1), n = i.length, s = this._parseTimeOrLabel(e); --n > -1; )
                                    i[n]._startTime === s && i[n]._enabled(!1, !1);
                        return this
                    }
                    ,
                    c.removePause = function(e) {
                        return this.removeCallback(t._internals.pauseCallback, e)
                    }
                    ,
                    c.tweenTo = function(t, i) {
                        i = i || {};
                        var n, s, r, a = {
                            ease: u,
                            useFrames: this.usesFrames(),
                            immediateRender: !1
                        }, o = i.repeat && h.TweenMax || e;
                        for (s in i)
                            a[s] = i[s];
                        return a.time = this._parseTimeOrLabel(t),
                        n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001,
                        r = new o(this,n,a),
                        a.onStart = function() {
                            r.target.paused(!0),
                            r.vars.time !== r.target.time() && n === r.duration() && r.duration(Math.abs(r.vars.time - r.target.time()) / r.target._timeScale),
                            i.onStart && r._callback("onStart")
                        }
                        ,
                        r
                    }
                    ,
                    c.tweenFromTo = function(t, e, i) {
                        i = i || {},
                        t = this._parseTimeOrLabel(t),
                        i.startAt = {
                            onComplete: this.seek,
                            onCompleteParams: [t],
                            callbackScope: this
                        },
                        i.immediateRender = i.immediateRender !== !1;
                        var n = this.tweenTo(e, i);
                        return n.duration(Math.abs(n.vars.time - t) / this._timeScale || .001)
                    }
                    ,
                    c.render = function(t, e, i) {
                        this._gc && this._enabled(!0, !1);
                        var n, s, a, h, u, c, p, f, _ = this._dirty ? this.totalDuration() : this._totalDuration, d = this._duration, m = this._time, g = this._totalTime, y = this._startTime, v = this._timeScale, w = this._rawPrevTime, T = this._paused, x = this._cycle;
                        if (t >= _ - 1e-7)
                            this._locked || (this._totalTime = _,
                            this._cycle = this._repeat),
                            this._reversed || this._hasPausedChild() || (s = !0,
                            h = "onComplete",
                            u = !!this._timeline.autoRemoveChildren,
                            0 === this._duration && (t <= 0 && t >= -1e-7 || w < 0 || w === r) && w !== t && this._first && (u = !0,
                            w > r && (h = "onReverseComplete"))),
                            this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : r,
                            this._yoyo && 0 !== (1 & this._cycle) ? this._time = t = 0 : (this._time = d,
                            t = d + 1e-4);
                        else if (t < 1e-7)
                            if (this._locked || (this._totalTime = this._cycle = 0),
                            this._time = 0,
                            (0 !== m || 0 === d && w !== r && (w > 0 || t < 0 && w >= 0) && !this._locked) && (h = "onReverseComplete",
                            s = this._reversed),
                            t < 0)
                                this._active = !1,
                                this._timeline.autoRemoveChildren && this._reversed ? (u = s = !0,
                                h = "onReverseComplete") : w >= 0 && this._first && (u = !0),
                                this._rawPrevTime = t;
                            else {
                                if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : r,
                                0 === t && s)
                                    for (n = this._first; n && 0 === n._startTime; )
                                        n._duration || (s = !1),
                                        n = n._next;
                                t = 0,
                                this._initted || (u = !0)
                            }
                        else if (0 === d && w < 0 && (u = !0),
                        this._time = this._rawPrevTime = t,
                        this._locked || (this._totalTime = t,
                        0 !== this._repeat && (c = d + this._repeatDelay,
                        this._cycle = this._totalTime / c >> 0,
                        0 !== this._cycle && this._cycle === this._totalTime / c && g <= t && this._cycle--,
                        this._time = this._totalTime - this._cycle * c,
                        this._yoyo && 0 !== (1 & this._cycle) && (this._time = d - this._time),
                        this._time > d ? (this._time = d,
                        t = d + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time)),
                        this._hasPause && !this._forcingPlayhead && !e) {
                            if (t = this._time,
                            t >= m)
                                for (n = this._first; n && n._startTime <= t && !p; )
                                    n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (p = n),
                                    n = n._next;
                            else
                                for (n = this._last; n && n._startTime >= t && !p; )
                                    n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (p = n),
                                    n = n._prev;
                            p && (this._time = t = p._startTime,
                            this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay))
                        }
                        if (this._cycle !== x && !this._locked) {
                            var b = this._yoyo && 0 !== (1 & x)
                              , P = b === (this._yoyo && 0 !== (1 & this._cycle))
                              , k = this._totalTime
                              , O = this._cycle
                              , S = this._rawPrevTime
                              , C = this._time;
                            if (this._totalTime = x * d,
                            this._cycle < x ? b = !b : this._totalTime += d,
                            this._time = m,
                            this._rawPrevTime = 0 === d ? w - 1e-4 : w,
                            this._cycle = x,
                            this._locked = !0,
                            m = b ? 0 : d,
                            this.render(m, e, 0 === d),
                            e || this._gc || this.vars.onRepeat && this._callback("onRepeat"),
                            m !== this._time)
                                return;
                            if (P && (m = b ? d + 1e-4 : -1e-4,
                            this.render(m, !0, !1)),
                            this._locked = !1,
                            this._paused && !T)
                                return;
                            this._time = C,
                            this._totalTime = k,
                            this._cycle = O,
                            this._rawPrevTime = S
                        }
                        if (!(this._time !== m && this._first || i || u || p))
                            return void (g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate")));
                        if (this._initted || (this._initted = !0),
                        this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0),
                        0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")),
                        f = this._time,
                        f >= m)
                            for (n = this._first; n && (a = n._next,
                            f === this._time && (!this._paused || T)); )
                                (n._active || n._startTime <= this._time && !n._paused && !n._gc) && (p === n && this.pause(),
                                n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)),
                                n = a;
                        else
                            for (n = this._last; n && (a = n._prev,
                            f === this._time && (!this._paused || T)); ) {
                                if (n._active || n._startTime <= m && !n._paused && !n._gc) {
                                    if (p === n) {
                                        for (p = n._prev; p && p.endTime() > this._time; )
                                            p.render(p._reversed ? p.totalDuration() - (t - p._startTime) * p._timeScale : (t - p._startTime) * p._timeScale, e, i),
                                            p = p._prev;
                                        p = null ,
                                        this.pause()
                                    }
                                    n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (t - n._startTime) * n._timeScale, e, i) : n.render((t - n._startTime) * n._timeScale, e, i)
                                }
                                n = a
                            }
                        this._onUpdate && (e || (o.length && l(),
                        this._callback("onUpdate"))),
                        h && (this._locked || this._gc || y !== this._startTime && v === this._timeScale || (0 === this._time || _ >= this.totalDuration()) && (s && (o.length && l(),
                        this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                        this._active = !1),
                        !e && this.vars[h] && this._callback(h)))
                    }
                    ,
                    c.getActive = function(t, e, i) {
                        null == t && (t = !0),
                        null == e && (e = !0),
                        null == i && (i = !1);
                        var n, s, r = [], a = this.getChildren(t, e, i), o = 0, l = a.length;
                        for (n = 0; n < l; n++)
                            s = a[n],
                            s.isActive() && (r[o++] = s);
                        return r
                    }
                    ,
                    c.getLabelAfter = function(t) {
                        t || 0 !== t && (t = this._time);
                        var e, i = this.getLabelsArray(), n = i.length;
                        for (e = 0; e < n; e++)
                            if (i[e].time > t)
                                return i[e].name;
                        return null
                    }
                    ,
                    c.getLabelBefore = function(t) {
                        null == t && (t = this._time);
                        for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                            if (e[i].time < t)
                                return e[i].name;
                        return null
                    }
                    ,
                    c.getLabelsArray = function() {
                        var t, e = [], i = 0;
                        for (t in this._labels)
                            e[i++] = {
                                time: this._labels[t],
                                name: t
                            };
                        return e.sort(function(t, e) {
                            return t.time - e.time
                        }),
                        e
                    }
                    ,
                    c.progress = function(t, e) {
                        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration()
                    }
                    ,
                    c.totalProgress = function(t, e) {
                        return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                    }
                    ,
                    c.totalDuration = function(e) {
                        return arguments.length ? this._repeat !== -1 && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this),
                        this._totalDuration = this._repeat === -1 ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
                        this._totalDuration)
                    }
                    ,
                    c.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(),
                        t > this._duration && (t = this._duration),
                        this._yoyo && 0 !== (1 & this._cycle) ? t = this._duration - t + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (t += this._cycle * (this._duration + this._repeatDelay)),
                        this.totalTime(t, e)) : this._time
                    }
                    ,
                    c.repeat = function(t) {
                        return arguments.length ? (this._repeat = t,
                        this._uncache(!0)) : this._repeat
                    }
                    ,
                    c.repeatDelay = function(t) {
                        return arguments.length ? (this._repeatDelay = t,
                        this._uncache(!0)) : this._repeatDelay
                    }
                    ,
                    c.yoyo = function(t) {
                        return arguments.length ? (this._yoyo = t,
                        this) : this._yoyo
                    }
                    ,
                    c.currentLabel = function(t) {
                        return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                    }
                    ,
                    s
                }, !0),
                function() {
                    var t = 180 / Math.PI
                      , e = []
                      , n = []
                      , s = []
                      , r = {}
                      , a = i._gsDefine.globals
                      , o = function(t, e, i, n) {
                        i === n && (i = n - (n - e) / 1e6),
                        t === e && (e = t + (i - t) / 1e6),
                        this.a = t,
                        this.b = e,
                        this.c = i,
                        this.d = n,
                        this.da = n - t,
                        this.ca = i - t,
                        this.ba = e - t
                    }
                      , l = ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"
                      , h = function(t, e, i, n) {
                        var s = {
                            a: t
                        }
                          , r = {}
                          , a = {}
                          , o = {
                            c: n
                        }
                          , l = (t + e) / 2
                          , h = (e + i) / 2
                          , u = (i + n) / 2
                          , c = (l + h) / 2
                          , p = (h + u) / 2
                          , f = (p - c) / 8;
                        return s.b = l + (t - l) / 4,
                        r.b = c + f,
                        s.c = r.a = (s.b + r.b) / 2,
                        r.c = a.a = (c + p) / 2,
                        a.b = p - f,
                        o.b = u + (n - u) / 4,
                        a.c = o.a = (a.b + o.b) / 2,
                        [s, r, a, o]
                    }
                      , u = function(t, i, r, a, o) {
                        var l, u, c, p, f, _, d, m, g, y, v, w, T, x = t.length - 1, b = 0, P = t[0].a;
                        for (l = 0; l < x; l++)
                            f = t[b],
                            u = f.a,
                            c = f.d,
                            p = t[b + 1].d,
                            o ? (v = e[l],
                            w = n[l],
                            T = (w + v) * i * .25 / (a ? .5 : s[l] || .5),
                            _ = c - (c - u) * (a ? .5 * i : 0 !== v ? T / v : 0),
                            d = c + (p - c) * (a ? .5 * i : 0 !== w ? T / w : 0),
                            m = c - (_ + ((d - _) * (3 * v / (v + w) + .5) / 4 || 0))) : (_ = c - (c - u) * i * .5,
                            d = c + (p - c) * i * .5,
                            m = c - (_ + d) / 2),
                            _ += m,
                            d += m,
                            f.c = g = _,
                            0 !== l ? f.b = P : f.b = P = f.a + .6 * (f.c - f.a),
                            f.da = c - u,
                            f.ca = g - u,
                            f.ba = P - u,
                            r ? (y = h(u, P, g, c),
                            t.splice(b, 1, y[0], y[1], y[2], y[3]),
                            b += 4) : b++,
                            P = d;
                        f = t[b],
                        f.b = P,
                        f.c = P + .4 * (f.d - P),
                        f.da = f.d - f.a,
                        f.ca = f.c - f.a,
                        f.ba = P - f.a,
                        r && (y = h(f.a, P, f.c, f.d),
                        t.splice(b, 1, y[0], y[1], y[2], y[3]))
                    }
                      , c = function(t, i, s, r) {
                        var a, l, h, u, c, p, f = [];
                        if (r)
                            for (t = [r].concat(t),
                            l = t.length; --l > -1; )
                                "string" == typeof (p = t[l][i]) && "=" === p.charAt(1) && (t[l][i] = r[i] + Number(p.charAt(0) + p.substr(2)));
                        if (a = t.length - 2,
                        a < 0)
                            return f[0] = new o(t[0][i],0,0,t[a < -1 ? 0 : 1][i]),
                            f;
                        for (l = 0; l < a; l++)
                            h = t[l][i],
                            u = t[l + 1][i],
                            f[l] = new o(h,0,0,u),
                            s && (c = t[l + 2][i],
                            e[l] = (e[l] || 0) + (u - h) * (u - h),
                            n[l] = (n[l] || 0) + (c - u) * (c - u));
                        return f[l] = new o(t[l][i],0,0,t[l + 1][i]),
                        f
                    }
                      , p = function(t, i, a, o, h, p) {
                        var f, _, d, m, g, y, v, w, T = {}, x = [], b = p || t[0];
                        h = "string" == typeof h ? "," + h + "," : l,
                        null == i && (i = 1);
                        for (_ in t[0])
                            x.push(_);
                        if (t.length > 1) {
                            for (w = t[t.length - 1],
                            v = !0,
                            f = x.length; --f > -1; )
                                if (_ = x[f],
                                Math.abs(b[_] - w[_]) > .05) {
                                    v = !1;
                                    break
                                }
                            v && (t = t.concat(),
                            p && t.unshift(p),
                            t.push(t[1]),
                            p = t[t.length - 3])
                        }
                        for (e.length = n.length = s.length = 0,
                        f = x.length; --f > -1; )
                            _ = x[f],
                            r[_] = h.indexOf("," + _ + ",") !== -1,
                            T[_] = c(t, _, r[_], p);
                        for (f = e.length; --f > -1; )
                            e[f] = Math.sqrt(e[f]),
                            n[f] = Math.sqrt(n[f]);
                        if (!o) {
                            for (f = x.length; --f > -1; )
                                if (r[_])
                                    for (d = T[x[f]],
                                    y = d.length - 1,
                                    m = 0; m < y; m++)
                                        g = d[m + 1].da / n[m] + d[m].da / e[m] || 0,
                                        s[m] = (s[m] || 0) + g * g;
                            for (f = s.length; --f > -1; )
                                s[f] = Math.sqrt(s[f])
                        }
                        for (f = x.length,
                        m = a ? 4 : 1; --f > -1; )
                            _ = x[f],
                            d = T[_],
                            u(d, i, a, o, r[_]),
                            v && (d.splice(0, m),
                            d.splice(d.length - m, m));
                        return T
                    }
                      , f = function(t, e, i) {
                        e = e || "soft";
                        var n, s, r, a, l, h, u, c, p, f, _, d = {}, m = "cubic" === e ? 3 : 2, g = "soft" === e, y = [];
                        if (g && i && (t = [i].concat(t)),
                        null == t || t.length < m + 1)
                            throw "invalid Bezier data";
                        for (p in t[0])
                            y.push(p);
                        for (h = y.length; --h > -1; ) {
                            for (p = y[h],
                            d[p] = l = [],
                            f = 0,
                            c = t.length,
                            u = 0; u < c; u++)
                                n = null == i ? t[u][p] : "string" == typeof (_ = t[u][p]) && "=" === _.charAt(1) ? i[p] + Number(_.charAt(0) + _.substr(2)) : Number(_),
                                g && u > 1 && u < c - 1 && (l[f++] = (n + l[f - 2]) / 2),
                                l[f++] = n;
                            for (c = f - m + 1,
                            f = 0,
                            u = 0; u < c; u += m)
                                n = l[u],
                                s = l[u + 1],
                                r = l[u + 2],
                                a = 2 === m ? 0 : l[u + 3],
                                l[f++] = _ = 3 === m ? new o(n,s,r,a) : new o(n,(2 * s + n) / 3,(2 * s + r) / 3,r);
                            l.length = f
                        }
                        return d
                    }
                      , _ = function(t, e, i) {
                        for (var n, s, r, a, o, l, h, u, c, p, f, _ = 1 / i, d = t.length; --d > -1; )
                            for (p = t[d],
                            r = p.a,
                            a = p.d - r,
                            o = p.c - r,
                            l = p.b - r,
                            n = s = 0,
                            u = 1; u <= i; u++)
                                h = _ * u,
                                c = 1 - h,
                                n = s - (s = (h * h * a + 3 * c * (h * o + c * l)) * h),
                                f = d * i + u - 1,
                                e[f] = (e[f] || 0) + n * n
                    }
                      , d = function(t, e) {
                        e = e >> 0 || 6;
                        var i, n, s, r, a = [], o = [], l = 0, h = 0, u = e - 1, c = [], p = [];
                        for (i in t)
                            _(t[i], a, e);
                        for (s = a.length,
                        n = 0; n < s; n++)
                            l += Math.sqrt(a[n]),
                            r = n % e,
                            p[r] = l,
                            r === u && (h += l,
                            r = n / e >> 0,
                            c[r] = p,
                            o[r] = h,
                            l = 0,
                            p = []);
                        return {
                            length: h,
                            lengths: o,
                            segments: c
                        }
                    }
                      , m = i._gsDefine.plugin({
                        propName: "bezier",
                        priority: -1,
                        version: "1.3.7",
                        API: 2,
                        global: !0,
                        init: function(t, e, i) {
                            this._target = t,
                            e instanceof Array && (e = {
                                values: e
                            }),
                            this._func = {},
                            this._mod = {},
                            this._props = [],
                            this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                            var n, s, r, a, o, l = e.values || [], h = {}, u = l[0], c = e.autoRotate || i.vars.orientToBezier;
                            this._autoRotate = c ? c instanceof Array ? c : [["x", "y", "rotation", c === !0 ? 0 : Number(c) || 0]] : null ;
                            for (n in u)
                                this._props.push(n);
                            for (r = this._props.length; --r > -1; )
                                n = this._props[r],
                                this._overwriteProps.push(n),
                                s = this._func[n] = "function" == typeof t[n],
                                h[n] = s ? t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(t[n]),
                                o || h[n] !== l[0][n] && (o = h);
                            if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? p(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : f(l, e.type, h),
                            this._segCount = this._beziers[n].length,
                            this._timeRes) {
                                var _ = d(this._beziers, this._timeRes);
                                this._length = _.length,
                                this._lengths = _.lengths,
                                this._segments = _.segments,
                                this._l1 = this._li = this._s1 = this._si = 0,
                                this._l2 = this._lengths[0],
                                this._curSeg = this._segments[0],
                                this._s2 = this._curSeg[0],
                                this._prec = 1 / this._curSeg.length
                            }
                            if (c = this._autoRotate)
                                for (this._initialRotations = [],
                                c[0]instanceof Array || (this._autoRotate = c = [c]),
                                r = c.length; --r > -1; ) {
                                    for (a = 0; a < 3; a++)
                                        n = c[r][a],
                                        this._func[n] = "function" == typeof t[n] && t[n.indexOf("set") || "function" != typeof t["get" + n.substr(3)] ? n : "get" + n.substr(3)];
                                    n = c[r][2],
                                    this._initialRotations[r] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0,
                                    this._overwriteProps.push(n)
                                }
                            return this._startRatio = i.vars.runBackwards ? 1 : 0,
                            !0
                        },
                        set: function(e) {
                            var i, n, s, r, a, o, l, h, u, c, p = this._segCount, f = this._func, _ = this._target, d = e !== this._startRatio;
                            if (this._timeRes) {
                                if (u = this._lengths,
                                c = this._curSeg,
                                e *= this._length,
                                s = this._li,
                                e > this._l2 && s < p - 1) {
                                    for (h = p - 1; s < h && (this._l2 = u[++s]) <= e; )
                                        ;
                                    this._l1 = u[s - 1],
                                    this._li = s,
                                    this._curSeg = c = this._segments[s],
                                    this._s2 = c[this._s1 = this._si = 0]
                                } else if (e < this._l1 && s > 0) {
                                    for (; s > 0 && (this._l1 = u[--s]) >= e; )
                                        ;
                                    0 === s && e < this._l1 ? this._l1 = 0 : s++,
                                    this._l2 = u[s],
                                    this._li = s,
                                    this._curSeg = c = this._segments[s],
                                    this._s1 = c[(this._si = c.length - 1) - 1] || 0,
                                    this._s2 = c[this._si]
                                }
                                if (i = s,
                                e -= this._l1,
                                s = this._si,
                                e > this._s2 && s < c.length - 1) {
                                    for (h = c.length - 1; s < h && (this._s2 = c[++s]) <= e; )
                                        ;
                                    this._s1 = c[s - 1],
                                    this._si = s
                                } else if (e < this._s1 && s > 0) {
                                    for (; s > 0 && (this._s1 = c[--s]) >= e; )
                                        ;
                                    0 === s && e < this._s1 ? this._s1 = 0 : s++,
                                    this._s2 = c[s],
                                    this._si = s
                                }
                                o = (s + (e - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                            } else
                                i = e < 0 ? 0 : e >= 1 ? p - 1 : p * e >> 0,
                                o = (e - i * (1 / p)) * p;
                            for (n = 1 - o,
                            s = this._props.length; --s > -1; )
                                r = this._props[s],
                                a = this._beziers[r][i],
                                l = (o * o * a.da + 3 * n * (o * a.ca + n * a.ba)) * o + a.a,
                                this._mod[r] && (l = this._mod[r](l, _)),
                                f[r] ? _[r](l) : _[r] = l;
                            if (this._autoRotate) {
                                var m, g, y, v, w, T, x, b = this._autoRotate;
                                for (s = b.length; --s > -1; )
                                    r = b[s][2],
                                    T = b[s][3] || 0,
                                    x = b[s][4] === !0 ? 1 : t,
                                    a = this._beziers[b[s][0]],
                                    m = this._beziers[b[s][1]],
                                    a && m && (a = a[i],
                                    m = m[i],
                                    g = a.a + (a.b - a.a) * o,
                                    v = a.b + (a.c - a.b) * o,
                                    g += (v - g) * o,
                                    v += (a.c + (a.d - a.c) * o - v) * o,
                                    y = m.a + (m.b - m.a) * o,
                                    w = m.b + (m.c - m.b) * o,
                                    y += (w - y) * o,
                                    w += (m.c + (m.d - m.c) * o - w) * o,
                                    l = d ? Math.atan2(w - y, v - g) * x + T : this._initialRotations[s],
                                    this._mod[r] && (l = this._mod[r](l, _)),
                                    f[r] ? _[r](l) : _[r] = l)
                            }
                        }
                    })
                      , g = m.prototype;
                    m.bezierThrough = p,
                    m.cubicToQuadratic = h,
                    m._autoCSS = !0,
                    m.quadraticToCubic = function(t, e, i) {
                        return new o(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
                    }
                    ,
                    m._cssRegister = function() {
                        var t = a.CSSPlugin;
                        if (t) {
                            var e = t._internals
                              , i = e._parseToProxy
                              , n = e._setPluginRatio
                              , s = e.CSSPropTween;
                            e._registerComplexSpecialProp("bezier", {
                                parser: function(t, e, r, a, o, l) {
                                    e instanceof Array && (e = {
                                        values: e
                                    }),
                                    l = new m;
                                    var h, u, c, p = e.values, f = p.length - 1, _ = [], d = {};
                                    if (f < 0)
                                        return o;
                                    for (h = 0; h <= f; h++)
                                        c = i(t, p[h], a, o, l, f !== h),
                                        _[h] = c.end;
                                    for (u in e)
                                        d[u] = e[u];
                                    return d.values = _,
                                    o = new s(t,"bezier",0,0,c.pt,2),
                                    o.data = c,
                                    o.plugin = l,
                                    o.setRatio = n,
                                    0 === d.autoRotate && (d.autoRotate = !0),
                                    !d.autoRotate || d.autoRotate instanceof Array || (h = d.autoRotate === !0 ? 0 : Number(d.autoRotate),
                                    d.autoRotate = null != c.end.left ? [["left", "top", "rotation", h, !1]] : null != c.end.x && [["x", "y", "rotation", h, !1]]),
                                    d.autoRotate && (a._transform || a._enableTransforms(!1),
                                    c.autoRotate = a._target._gsTransform,
                                    c.proxy.rotation = c.autoRotate.rotation || 0,
                                    a._overwriteProps.push("rotation")),
                                    l._onInitTween(c.proxy, d, a._tween),
                                    o
                                }
                            })
                        }
                    }
                    ,
                    g._mod = function(t) {
                        for (var e, i = this._overwriteProps, n = i.length; --n > -1; )
                            e = t[i[n]],
                            e && "function" == typeof e && (this._mod[i[n]] = e)
                    }
                    ,
                    g._kill = function(t) {
                        var e, i, n = this._props;
                        for (e in this._beziers)
                            if (e in t)
                                for (delete this._beziers[e],
                                delete this._func[e],
                                i = n.length; --i > -1; )
                                    n[i] === e && n.splice(i, 1);
                        if (n = this._autoRotate)
                            for (i = n.length; --i > -1; )
                                t[n[i][2]] && n.splice(i, 1);
                        return this._super._kill.call(this, t)
                    }
                }(),
                i._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(t, e) {
                    var n, s, r, a, o = function() {
                        t.call(this, "css"),
                        this._overwriteProps.length = 0,
                        this.setRatio = o.prototype.setRatio
                    }, l = i._gsDefine.globals, h = {}, u = o.prototype = new t("css");
                    u.constructor = o,
                    o.version = "1.19.0",
                    o.API = 2,
                    o.defaultTransformPerspective = 0,
                    o.defaultSkewType = "compensated",
                    o.defaultSmoothOrigin = !0,
                    u = "px",
                    o.suffixMap = {
                        top: u,
                        right: u,
                        bottom: u,
                        left: u,
                        width: u,
                        height: u,
                        fontSize: u,
                        padding: u,
                        margin: u,
                        perspective: u,
                        lineHeight: ""
                    };
                    var c, p, f, _, d, m, g, y, v = /(?:\-|\.|\b)(\d|\.|e\-)+/g, w = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, b = /(?:\d|\-|\+|=|#|\.)*/g, P = /opacity *= *([^)]*)/i, k = /opacity:([^;]*)/i, O = /alpha\(opacity *=.+?\)/i, S = /^(rgb|hsl)/, C = /([A-Z])/g, A = /-([a-z])/gi, R = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, I = function(t, e) {
                        return e.toUpperCase()
                    }, M = /(?:Left|Right|Width)/i, z = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, j = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, D = /,(?=[^\)]*(?:\(|$))/gi, L = /[\s,\(]/i, E = Math.PI / 180, B = 180 / Math.PI, F = {}, N = document, W = function(t) {
                        return N.createElementNS ? N.createElementNS("http://www.w3.org/1999/xhtml", t) : N.createElement(t)
                    }, X = W("div"), Y = W("img"), U = o._internals = {
                        _specialProps: h
                    }, $ = navigator.userAgent, q = function() {
                        var t = $.indexOf("Android")
                          , e = W("a");
                        return f = $.indexOf("Safari") !== -1 && $.indexOf("Chrome") === -1 && (t === -1 || Number($.substr(t + 8, 1)) > 3),
                        d = f && Number($.substr($.indexOf("Version/") + 8, 1)) < 6,
                        _ = $.indexOf("Firefox") !== -1,
                        (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec($) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec($)) && (m = parseFloat(RegExp.$1)),
                        !!e && (e.style.cssText = "top:1px;opacity:.55;",
                        /^0.55/.test(e.style.opacity))
                    }(), V = function(t) {
                        return P.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                    }, H = function(t) {
                        window.console && console.log(t)
                    }, Q = "", G = "", Z = function(t, e) {
                        e = e || X;
                        var i, n, s = e.style;
                        if (void 0 !== s[t])
                            return t;
                        for (t = t.charAt(0).toUpperCase() + t.substr(1),
                        i = ["O", "Moz", "ms", "Ms", "Webkit"],
                        n = 5; --n > -1 && void 0 === s[i[n] + t]; )
                            ;
                        return n >= 0 ? (G = 3 === n ? "ms" : i[n],
                        Q = "-" + G.toLowerCase() + "-",
                        G + t) : null
                    }, K = N.defaultView ? N.defaultView.getComputedStyle : function() {}
                    , J = o.getStyle = function(t, e, i, n, s) {
                        var r;
                        return q || "opacity" !== e ? (!n && t.style[e] ? r = t.style[e] : (i = i || K(t)) ? r = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (r = t.currentStyle[e]),
                        null == s || r && "none" !== r && "auto" !== r && "auto auto" !== r ? r : s) : V(t)
                    }
                    , tt = U.convertToPixels = function(t, i, n, s, r) {
                        if ("px" === s || !s)
                            return n;
                        if ("auto" === s || !n)
                            return 0;
                        var a, l, h, u = M.test(i), c = t, p = X.style, f = n < 0, _ = 1 === n;
                        if (f && (n = -n),
                        _ && (n *= 100),
                        "%" === s && i.indexOf("border") !== -1)
                            a = n / 100 * (u ? t.clientWidth : t.clientHeight);
                        else {
                            if (p.cssText = "border:0 solid red;position:" + J(t, "position") + ";line-height:0;",
                            "%" !== s && c.appendChild && "v" !== s.charAt(0) && "rem" !== s)
                                p[u ? "borderLeftWidth" : "borderTopWidth"] = n + s;
                            else {
                                if (c = t.parentNode || N.body,
                                l = c._gsCache,
                                h = e.ticker.frame,
                                l && u && l.time === h)
                                    return l.width * n / 100;
                                p[u ? "width" : "height"] = n + s
                            }
                            c.appendChild(X),
                            a = parseFloat(X[u ? "offsetWidth" : "offsetHeight"]),
                            c.removeChild(X),
                            u && "%" === s && o.cacheWidths !== !1 && (l = c._gsCache = c._gsCache || {},
                            l.time = h,
                            l.width = a / n * 100),
                            0 !== a || r || (a = tt(t, i, n, s, !0))
                        }
                        return _ && (a /= 100),
                        f ? -a : a
                    }
                    , et = U.calculateOffset = function(t, e, i) {
                        if ("absolute" !== J(t, "position", i))
                            return 0;
                        var n = "left" === e ? "Left" : "Top"
                          , s = J(t, "margin" + n, i);
                        return t["offset" + n] - (tt(t, e, parseFloat(s), s.replace(b, "")) || 0)
                    }
                    , it = function(t, e) {
                        var i, n, s, r = {};
                        if (e = e || K(t, null ))
                            if (i = e.length)
                                for (; --i > -1; )
                                    s = e[i],
                                    s.indexOf("-transform") !== -1 && At !== s || (r[s.replace(A, I)] = e.getPropertyValue(s));
                            else
                                for (i in e)
                                    i.indexOf("Transform") !== -1 && Ct !== i || (r[i] = e[i]);
                        else if (e = t.currentStyle || t.style)
                            for (i in e)
                                "string" == typeof i && void 0 === r[i] && (r[i.replace(A, I)] = e[i]);
                        return q || (r.opacity = V(t)),
                        n = Xt(t, e, !1),
                        r.rotation = n.rotation,
                        r.skewX = n.skewX,
                        r.scaleX = n.scaleX,
                        r.scaleY = n.scaleY,
                        r.x = n.x,
                        r.y = n.y,
                        It && (r.z = n.z,
                        r.rotationX = n.rotationX,
                        r.rotationY = n.rotationY,
                        r.scaleZ = n.scaleZ),
                        r.filters && delete r.filters,
                        r
                    }, nt = function(t, e, i, n, s) {
                        var r, a, o, l = {}, h = t.style;
                        for (a in i)
                            "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (r = i[a]) || s && s[a]) && a.indexOf("Origin") === -1 && ("number" != typeof r && "string" != typeof r || (l[a] = "auto" !== r || "left" !== a && "top" !== a ? "" !== r && "auto" !== r && "none" !== r || "string" != typeof e[a] || "" === e[a].replace(x, "") ? r : 0 : et(t, a),
                            void 0 !== h[a] && (o = new yt(h,a,h[a],o))));
                        if (n)
                            for (a in n)
                                "className" !== a && (l[a] = n[a]);
                        return {
                            difs: l,
                            firstMPT: o
                        }
                    }, st = {
                        width: ["Left", "Right"],
                        height: ["Top", "Bottom"]
                    }, rt = ["marginLeft", "marginRight", "marginTop", "marginBottom"], at = function(t, e, i) {
                        if ("svg" === (t.nodeName + "").toLowerCase())
                            return (i || K(t))[e] || 0;
                        if (t.getBBox && Ft(t))
                            return t.getBBox()[e] || 0;
                        var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
                          , s = st[e]
                          , r = s.length;
                        for (i = i || K(t, null ); --r > -1; )
                            n -= parseFloat(J(t, "padding" + s[r], i, !0)) || 0,
                            n -= parseFloat(J(t, "border" + s[r] + "Width", i, !0)) || 0;
                        return n
                    }, ot = function(t, e) {
                        if ("contain" === t || "auto" === t || "auto auto" === t)
                            return t + " ";
                        null != t && "" !== t || (t = "0 0");
                        var i, n = t.split(" "), s = t.indexOf("left") !== -1 ? "0%" : t.indexOf("right") !== -1 ? "100%" : n[0], r = t.indexOf("top") !== -1 ? "0%" : t.indexOf("bottom") !== -1 ? "100%" : n[1];
                        if (n.length > 3 && !e) {
                            for (n = t.split(", ").join(",").split(","),
                            t = [],
                            i = 0; i < n.length; i++)
                                t.push(ot(n[i]));
                            return t.join(",")
                        }
                        return null == r ? r = "center" === s ? "50%" : "0" : "center" === r && (r = "50%"),
                        ("center" === s || isNaN(parseFloat(s)) && (s + "").indexOf("=") === -1) && (s = "50%"),
                        t = s + " " + r + (n.length > 2 ? " " + n[2] : ""),
                        e && (e.oxp = s.indexOf("%") !== -1,
                        e.oyp = r.indexOf("%") !== -1,
                        e.oxr = "=" === s.charAt(1),
                        e.oyr = "=" === r.charAt(1),
                        e.ox = parseFloat(s.replace(x, "")),
                        e.oy = parseFloat(r.replace(x, "")),
                        e.v = t),
                        e || t
                    }, lt = function(t, e) {
                        return "function" == typeof t && (t = t(y, g)),
                        "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                    }, ht = function(t, e) {
                        return "function" == typeof t && (t = t(y, g)),
                        null == t ? e : "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                    }, ut = function(t, e, i, n) {
                        var s, r, a, o, l, h = 1e-6;
                        return "function" == typeof t && (t = t(y, g)),
                        null == t ? o = e : "number" == typeof t ? o = t : (s = 360,
                        r = t.split("_"),
                        l = "=" === t.charAt(1),
                        a = (l ? parseInt(t.charAt(0) + "1", 10) * parseFloat(r[0].substr(2)) : parseFloat(r[0])) * (t.indexOf("rad") === -1 ? 1 : B) - (l ? 0 : e),
                        r.length && (n && (n[i] = e + a),
                        t.indexOf("short") !== -1 && (a %= s,
                        a !== a % (s / 2) && (a = a < 0 ? a + s : a - s)),
                        t.indexOf("_cw") !== -1 && a < 0 ? a = (a + 9999999999 * s) % s - (a / s | 0) * s : t.indexOf("ccw") !== -1 && a > 0 && (a = (a - 9999999999 * s) % s - (a / s | 0) * s)),
                        o = e + a),
                        o < h && o > -h && (o = 0),
                        o
                    }, ct = {
                        aqua: [0, 255, 255],
                        lime: [0, 255, 0],
                        silver: [192, 192, 192],
                        black: [0, 0, 0],
                        maroon: [128, 0, 0],
                        teal: [0, 128, 128],
                        blue: [0, 0, 255],
                        navy: [0, 0, 128],
                        white: [255, 255, 255],
                        fuchsia: [255, 0, 255],
                        olive: [128, 128, 0],
                        yellow: [255, 255, 0],
                        orange: [255, 165, 0],
                        gray: [128, 128, 128],
                        purple: [128, 0, 128],
                        green: [0, 128, 0],
                        red: [255, 0, 0],
                        pink: [255, 192, 203],
                        cyan: [0, 255, 255],
                        transparent: [255, 255, 255, 0]
                    }, pt = function(t, e, i) {
                        return t = t < 0 ? t + 1 : t > 1 ? t - 1 : t,
                        255 * (6 * t < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                    }, ft = o.parseColor = function(t, e) {
                        var i, n, s, r, a, o, l, h, u, c, p;
                        if (t)
                            if ("number" == typeof t)
                                i = [t >> 16, t >> 8 & 255, 255 & t];
                            else {
                                if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                                ct[t])
                                    i = ct[t];
                                else if ("#" === t.charAt(0))
                                    4 === t.length && (n = t.charAt(1),
                                    s = t.charAt(2),
                                    r = t.charAt(3),
                                    t = "#" + n + n + s + s + r + r),
                                    t = parseInt(t.substr(1), 16),
                                    i = [t >> 16, t >> 8 & 255, 255 & t];
                                else if ("hsl" === t.substr(0, 3))
                                    if (i = p = t.match(v),
                                    e) {
                                        if (t.indexOf("=") !== -1)
                                            return t.match(w)
                                    } else
                                        a = Number(i[0]) % 360 / 360,
                                        o = Number(i[1]) / 100,
                                        l = Number(i[2]) / 100,
                                        s = l <= .5 ? l * (o + 1) : l + o - l * o,
                                        n = 2 * l - s,
                                        i.length > 3 && (i[3] = Number(t[3])),
                                        i[0] = pt(a + 1 / 3, n, s),
                                        i[1] = pt(a, n, s),
                                        i[2] = pt(a - 1 / 3, n, s);
                                else
                                    i = t.match(v) || ct.transparent;
                                i[0] = Number(i[0]),
                                i[1] = Number(i[1]),
                                i[2] = Number(i[2]),
                                i.length > 3 && (i[3] = Number(i[3]))
                            }
                        else
                            i = ct.black;
                        return e && !p && (n = i[0] / 255,
                        s = i[1] / 255,
                        r = i[2] / 255,
                        h = Math.max(n, s, r),
                        u = Math.min(n, s, r),
                        l = (h + u) / 2,
                        h === u ? a = o = 0 : (c = h - u,
                        o = l > .5 ? c / (2 - h - u) : c / (h + u),
                        a = h === n ? (s - r) / c + (s < r ? 6 : 0) : h === s ? (r - n) / c + 2 : (n - s) / c + 4,
                        a *= 60),
                        i[0] = a + .5 | 0,
                        i[1] = 100 * o + .5 | 0,
                        i[2] = 100 * l + .5 | 0),
                        i
                    }
                    , _t = function(t, e) {
                        var i, n, s, r = t.match(dt) || [], a = 0, o = r.length ? "" : t;
                        for (i = 0; i < r.length; i++)
                            n = r[i],
                            s = t.substr(a, t.indexOf(n, a) - a),
                            a += s.length + n.length,
                            n = ft(n, e),
                            3 === n.length && n.push(1),
                            o += s + (e ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
                        return o + t.substr(a)
                    }, dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                    for (u in ct)
                        dt += "|" + u + "\\b";
                    dt = new RegExp(dt + ")","gi"),
                    o.colorStringFilter = function(t) {
                        var e, i = t[0] + t[1];
                        dt.test(i) && (e = i.indexOf("hsl(") !== -1 || i.indexOf("hsla(") !== -1,
                        t[0] = _t(t[0], e),
                        t[1] = _t(t[1], e)),
                        dt.lastIndex = 0
                    }
                    ,
                    e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
                    var mt = function(t, e, i, n) {
                        if (null == t)
                            return function(t) {
                                return t
                            }
                            ;
                        var s, r = e ? (t.match(dt) || [""])[0] : "", a = t.split(r).join("").match(T) || [], o = t.substr(0, t.indexOf(a[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", h = t.indexOf(" ") !== -1 ? " " : ",", u = a.length, c = u > 0 ? a[0].replace(v, "") : "";
                        return u ? s = e ? function(t) {
                            var e, p, f, _;
                            if ("number" == typeof t)
                                t += c;
                            else if (n && D.test(t)) {
                                for (_ = t.replace(D, "|").split("|"),
                                f = 0; f < _.length; f++)
                                    _[f] = s(_[f]);
                                return _.join(",")
                            }
                            if (e = (t.match(dt) || [r])[0],
                            p = t.split(e).join("").match(T) || [],
                            f = p.length,
                            u > f--)
                                for (; ++f < u; )
                                    p[f] = i ? p[(f - 1) / 2 | 0] : a[f];
                            return o + p.join(h) + h + e + l + (t.indexOf("inset") !== -1 ? " inset" : "")
                        }
                        : function(t) {
                            var e, r, p;
                            if ("number" == typeof t)
                                t += c;
                            else if (n && D.test(t)) {
                                for (r = t.replace(D, "|").split("|"),
                                p = 0; p < r.length; p++)
                                    r[p] = s(r[p]);
                                return r.join(",")
                            }
                            if (e = t.match(T) || [],
                            p = e.length,
                            u > p--)
                                for (; ++p < u; )
                                    e[p] = i ? e[(p - 1) / 2 | 0] : a[p];
                            return o + e.join(h) + l
                        }
                        : function(t) {
                            return t
                        }
                    }
                      , gt = function(t) {
                        return t = t.split(","),
                        function(e, i, n, s, r, a, o) {
                            var l, h = (i + "").split(" ");
                            for (o = {},
                            l = 0; l < 4; l++)
                                o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                            return s.parse(e, o, r, a)
                        }
                    }
                      , yt = (U._setPluginRatio = function(t) {
                        this.plugin.setRatio(t);
                        for (var e, i, n, s, r, a = this.data, o = a.proxy, l = a.firstMPT, h = 1e-6; l; )
                            e = o[l.v],
                            l.r ? e = Math.round(e) : e < h && e > -h && (e = 0),
                            l.t[l.p] = e,
                            l = l._next;
                        if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod(o.rotation, this.t) : o.rotation),
                        1 === t || 0 === t)
                            for (l = a.firstMPT,
                            r = 1 === t ? "e" : "b"; l; ) {
                                if (i = l.t,
                                i.type) {
                                    if (1 === i.type) {
                                        for (s = i.xs0 + i.s + i.xs1,
                                        n = 1; n < i.l; n++)
                                            s += i["xn" + n] + i["xs" + (n + 1)];
                                        i[r] = s
                                    }
                                } else
                                    i[r] = i.s + i.xs0;
                                l = l._next
                            }
                    }
                    ,
                    function(t, e, i, n, s) {
                        this.t = t,
                        this.p = e,
                        this.v = i,
                        this.r = s,
                        n && (n._prev = this,
                        this._next = n)
                    }
                    )
                      , vt = (U._parseToProxy = function(t, e, i, n, s, r) {
                        var a, o, l, h, u, c = n, p = {}, f = {}, _ = i._transform, d = F;
                        for (i._transform = null ,
                        F = e,
                        n = u = i.parse(t, e, n, s),
                        F = d,
                        r && (i._transform = _,
                        c && (c._prev = null ,
                        c._prev && (c._prev._next = null ))); n && n !== c; ) {
                            if (n.type <= 1 && (o = n.p,
                            f[o] = n.s + n.c,
                            p[o] = n.s,
                            r || (h = new yt(n,"s",o,h,n.r),
                            n.c = 0),
                            1 === n.type))
                                for (a = n.l; --a > 0; )
                                    l = "xn" + a,
                                    o = n.p + "_" + l,
                                    f[o] = n.data[l],
                                    p[o] = n[l],
                                    r || (h = new yt(n,l,o,h,n.rxp[l]));
                            n = n._next
                        }
                        return {
                            proxy: p,
                            end: f,
                            firstMPT: h,
                            pt: u
                        }
                    }
                    ,
                    U.CSSPropTween = function(t, e, i, s, r, o, l, h, u, c, p) {
                        this.t = t,
                        this.p = e,
                        this.s = i,
                        this.c = s,
                        this.n = l || e,
                        t instanceof vt || a.push(this.n),
                        this.r = h,
                        this.type = o || 0,
                        u && (this.pr = u,
                        n = !0),
                        this.b = void 0 === c ? i : c,
                        this.e = void 0 === p ? i + s : p,
                        r && (this._next = r,
                        r._prev = this)
                    }
                    )
                      , wt = function(t, e, i, n, s, r) {
                        var a = new vt(t,e,i,n - i,s,(-1),r);
                        return a.b = i,
                        a.e = a.xs0 = n,
                        a
                    }
                      , Tt = o.parseComplex = function(t, e, i, n, s, r, a, l, h, u) {
                        i = i || r || "",
                        "function" == typeof n && (n = n(y, g)),
                        a = new vt(t,e,0,0,a,u ? 2 : 1,null ,(!1),l,i,n),
                        n += "",
                        s && dt.test(n + i) && (n = [i, n],
                        o.colorStringFilter(n),
                        i = n[0],
                        n = n[1]);
                        var p, f, _, d, m, T, x, b, P, k, O, S, C, A = i.split(", ").join(",").split(" "), R = n.split(", ").join(",").split(" "), I = A.length, M = c !== !1;
                        for (n.indexOf(",") === -1 && i.indexOf(",") === -1 || (A = A.join(" ").replace(D, ", ").split(" "),
                        R = R.join(" ").replace(D, ", ").split(" "),
                        I = A.length),
                        I !== R.length && (A = (r || "").split(" "),
                        I = A.length),
                        a.plugin = h,
                        a.setRatio = u,
                        dt.lastIndex = 0,
                        p = 0; p < I; p++)
                            if (d = A[p],
                            m = R[p],
                            b = parseFloat(d),
                            b || 0 === b)
                                a.appendXtra("", b, lt(m, b), m.replace(w, ""), M && m.indexOf("px") !== -1, !0);
                            else if (s && dt.test(d))
                                S = m.indexOf(")") + 1,
                                S = ")" + (S ? m.substr(S) : ""),
                                C = m.indexOf("hsl") !== -1 && q,
                                d = ft(d, C),
                                m = ft(m, C),
                                P = d.length + m.length > 6,
                                P && !q && 0 === m[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent",
                                a.e = a.e.split(R[p]).join("transparent")) : (q || (P = !1),
                                C ? a.appendXtra(P ? "hsla(" : "hsl(", d[0], lt(m[0], d[0]), ",", !1, !0).appendXtra("", d[1], lt(m[1], d[1]), "%,", !1).appendXtra("", d[2], lt(m[2], d[2]), P ? "%," : "%" + S, !1) : a.appendXtra(P ? "rgba(" : "rgb(", d[0], m[0] - d[0], ",", !0, !0).appendXtra("", d[1], m[1] - d[1], ",", !0).appendXtra("", d[2], m[2] - d[2], P ? "," : S, !0),
                                P && (d = d.length < 4 ? 1 : d[3],
                                a.appendXtra("", d, (m.length < 4 ? 1 : m[3]) - d, S, !1))),
                                dt.lastIndex = 0;
                            else if (T = d.match(v)) {
                                if (x = m.match(w),
                                !x || x.length !== T.length)
                                    return a;
                                for (_ = 0,
                                f = 0; f < T.length; f++)
                                    O = T[f],
                                    k = d.indexOf(O, _),
                                    a.appendXtra(d.substr(_, k - _), Number(O), lt(x[f], O), "", M && "px" === d.substr(k + O.length, 2), 0 === f),
                                    _ = k + O.length;
                                a["xs" + a.l] += d.substr(_)
                            } else
                                a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + m : m;
                        if (n.indexOf("=") !== -1 && a.data) {
                            for (S = a.xs0 + a.data.s,
                            p = 1; p < a.l; p++)
                                S += a["xs" + p] + a.data["xn" + p];
                            a.e = S + a["xs" + p]
                        }
                        return a.l || (a.type = -1,
                        a.xs0 = a.e),
                        a.xfirst || a
                    }
                      , xt = 9;
                    for (u = vt.prototype,
                    u.l = u.pr = 0; --xt > 0; )
                        u["xn" + xt] = 0,
                        u["xs" + xt] = "";
                    u.xs0 = "",
                    u._next = u._prev = u.xfirst = u.data = u.plugin = u.setRatio = u.rxp = null ,
                    u.appendXtra = function(t, e, i, n, s, r) {
                        var a = this
                          , o = a.l;
                        return a["xs" + o] += r && (o || a["xs" + o]) ? " " + t : t || "",
                        i || 0 === o || a.plugin ? (a.l++,
                        a.type = a.setRatio ? 2 : 1,
                        a["xs" + a.l] = n || "",
                        o > 0 ? (a.data["xn" + o] = e + i,
                        a.rxp["xn" + o] = s,
                        a["xn" + o] = e,
                        a.plugin || (a.xfirst = new vt(a,"xn" + o,e,i,a.xfirst || a,0,a.n,s,a.pr),
                        a.xfirst.xs0 = 0),
                        a) : (a.data = {
                            s: e + i
                        },
                        a.rxp = {},
                        a.s = e,
                        a.c = i,
                        a.r = s,
                        a)) : (a["xs" + o] += e + (n || ""),
                        a)
                    }
                    ;
                    var bt = function(t, e) {
                        e = e || {},
                        this.p = e.prefix ? Z(t) || t : t,
                        h[t] = h[this.p] = this,
                        this.format = e.formatter || mt(e.defaultValue, e.color, e.collapsible, e.multi),
                        e.parser && (this.parse = e.parser),
                        this.clrs = e.color,
                        this.multi = e.multi,
                        this.keyword = e.keyword,
                        this.dflt = e.defaultValue,
                        this.pr = e.priority || 0
                    }
                      , Pt = U._registerComplexSpecialProp = function(t, e, i) {
                        "object" != typeof e && (e = {
                            parser: i
                        });
                        var n, s, r = t.split(","), a = e.defaultValue;
                        for (i = i || [a],
                        n = 0; n < r.length; n++)
                            e.prefix = 0 === n && e.prefix,
                            e.defaultValue = i[n] || a,
                            s = new bt(r[n],e)
                    }
                      , kt = U._registerPluginProp = function(t) {
                        if (!h[t]) {
                            var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                            Pt(t, {
                                parser: function(t, i, n, s, r, a, o) {
                                    var u = l.com.greensock.plugins[e];
                                    return u ? (u._cssRegister(),
                                    h[n].parse(t, i, n, s, r, a, o)) : (H("Error: " + e + " js file not loaded."),
                                    r)
                                }
                            })
                        }
                    }
                    ;
                    u = bt.prototype,
                    u.parseComplex = function(t, e, i, n, s, r) {
                        var a, o, l, h, u, c, p = this.keyword;
                        if (this.multi && (D.test(i) || D.test(e) ? (o = e.replace(D, "|").split("|"),
                        l = i.replace(D, "|").split("|")) : p && (o = [e],
                        l = [i])),
                        l) {
                            for (h = l.length > o.length ? l.length : o.length,
                            a = 0; a < h; a++)
                                e = o[a] = o[a] || this.dflt,
                                i = l[a] = l[a] || this.dflt,
                                p && (u = e.indexOf(p),
                                c = i.indexOf(p),
                                u !== c && (c === -1 ? o[a] = o[a].split(p).join("") : u === -1 && (o[a] += " " + p)));
                            e = o.join(", "),
                            i = l.join(", ")
                        }
                        return Tt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, s, r)
                    }
                    ,
                    u.parse = function(t, e, i, n, s, a, o) {
                        return this.parseComplex(t.style, this.format(J(t, this.p, r, !1, this.dflt)), this.format(e), s, a)
                    }
                    ,
                    o.registerSpecialProp = function(t, e, i) {
                        Pt(t, {
                            parser: function(t, n, s, r, a, o, l) {
                                var h = new vt(t,s,0,0,a,2,s,(!1),i);
                                return h.plugin = o,
                                h.setRatio = e(t, n, r._tween, s),
                                h
                            },
                            priority: i
                        })
                    }
                    ,
                    o.useSVGTransformAttr = f || _;
                    var Ot, St = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Ct = Z("transform"), At = Q + "transform", Rt = Z("transformOrigin"), It = null !== Z("perspective"), Mt = U.Transform = function() {
                        this.perspective = parseFloat(o.defaultTransformPerspective) || 0,
                        this.force3D = !(o.defaultForce3D === !1 || !It) && (o.defaultForce3D || "auto")
                    }
                    , zt = window.SVGElement, jt = function(t, e, i) {
                        var n, s = N.createElementNS("http://www.w3.org/2000/svg", t), r = /([a-z])([A-Z])/g;
                        for (n in i)
                            s.setAttributeNS(null , n.replace(r, "$1-$2").toLowerCase(), i[n]);
                        return e.appendChild(s),
                        s
                    }, Dt = N.documentElement, Lt = function() {
                        var t, e, i, n = m || /Android/i.test($) && !window.chrome;
                        return N.createElementNS && !n && (t = jt("svg", Dt),
                        e = jt("rect", t, {
                            width: 100,
                            height: 50,
                            x: 100
                        }),
                        i = e.getBoundingClientRect().width,
                        e.style[Rt] = "50% 50%",
                        e.style[Ct] = "scaleX(0.5)",
                        n = i === e.getBoundingClientRect().width && !(_ && It),
                        Dt.removeChild(t)),
                        n
                    }(), Et = function(t, e, i, n, s, r) {
                        var a, l, h, u, c, p, f, _, d, m, g, y, v, w, T = t._gsTransform, x = Wt(t, !0);
                        T && (v = T.xOrigin,
                        w = T.yOrigin),
                        (!n || (a = n.split(" ")).length < 2) && (f = t.getBBox(),
                        e = ot(e).split(" "),
                        a = [(e[0].indexOf("%") !== -1 ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (e[1].indexOf("%") !== -1 ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]),
                        i.xOrigin = u = parseFloat(a[0]),
                        i.yOrigin = c = parseFloat(a[1]),
                        n && x !== Nt && (p = x[0],
                        f = x[1],
                        _ = x[2],
                        d = x[3],
                        m = x[4],
                        g = x[5],
                        y = p * d - f * _,
                        l = u * (d / y) + c * (-_ / y) + (_ * g - d * m) / y,
                        h = u * (-f / y) + c * (p / y) - (p * g - f * m) / y,
                        u = i.xOrigin = a[0] = l,
                        c = i.yOrigin = a[1] = h),
                        T && (r && (i.xOffset = T.xOffset,
                        i.yOffset = T.yOffset,
                        T = i),
                        s || s !== !1 && o.defaultSmoothOrigin !== !1 ? (l = u - v,
                        h = c - w,
                        T.xOffset += l * x[0] + h * x[2] - l,
                        T.yOffset += l * x[1] + h * x[3] - h) : T.xOffset = T.yOffset = 0),
                        r || t.setAttribute("data-svg-origin", a.join(" "))
                    }, Bt = function(t) {
                        try {
                            return t.getBBox()
                        } catch (t) {}
                    }, Ft = function(t) {
                        return !!(zt && t.getBBox && t.getCTM && Bt(t) && (!t.parentNode || t.parentNode.getBBox && t.parentNode.getCTM))
                    }, Nt = [1, 0, 0, 1, 0, 0], Wt = function(t, e) {
                        var i, n, s, r, a, o, l = t._gsTransform || new Mt, h = 1e5, u = t.style;
                        if (Ct ? n = J(t, At, null , !0) : t.currentStyle && (n = t.currentStyle.filter.match(z),
                        n = n && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""),
                        i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
                        i && Ct && ((o = "none" === K(t).display) || !t.parentNode) && (o && (r = u.display,
                        u.display = "block"),
                        t.parentNode || (a = 1,
                        Dt.appendChild(t)),
                        n = J(t, At, null , !0),
                        i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n,
                        r ? u.display = r : o && qt(u, "display"),
                        a && Dt.removeChild(t)),
                        (l.svg || t.getBBox && Ft(t)) && (i && (u[Ct] + "").indexOf("matrix") !== -1 && (n = u[Ct],
                        i = 0),
                        s = t.getAttribute("transform"),
                        i && s && (s.indexOf("matrix") !== -1 ? (n = s,
                        i = 0) : s.indexOf("translate") !== -1 && (n = "matrix(1,0,0,1," + s.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")",
                        i = 0))),
                        i)
                            return Nt;
                        for (s = (n || "").match(v) || [],
                        xt = s.length; --xt > -1; )
                            r = Number(s[xt]),
                            s[xt] = (a = r - (r |= 0)) ? (a * h + (a < 0 ? -.5 : .5) | 0) / h + r : r;
                        return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
                    }, Xt = U.getTransform = function(t, i, n, s) {
                        if (t._gsTransform && n && !s)
                            return t._gsTransform;
                        var r, a, l, h, u, c, p = n ? t._gsTransform || new Mt : new Mt, f = p.scaleX < 0, _ = 2e-5, d = 1e5, m = It ? parseFloat(J(t, Rt, i, !1, "0 0 0").split(" ")[2]) || p.zOrigin || 0 : 0, g = parseFloat(o.defaultTransformPerspective) || 0;
                        if (p.svg = !(!t.getBBox || !Ft(t)),
                        p.svg && (Et(t, J(t, Rt, i, !1, "50% 50%") + "", p, t.getAttribute("data-svg-origin")),
                        Ot = o.useSVGTransformAttr || Lt),
                        r = Wt(t),
                        r !== Nt) {
                            if (16 === r.length) {
                                var y, v, w, T, x, b = r[0], P = r[1], k = r[2], O = r[3], S = r[4], C = r[5], A = r[6], R = r[7], I = r[8], M = r[9], z = r[10], j = r[12], D = r[13], L = r[14], E = r[11], F = Math.atan2(A, z);
                                p.zOrigin && (L = -p.zOrigin,
                                j = I * L - r[12],
                                D = M * L - r[13],
                                L = z * L + p.zOrigin - r[14]),
                                p.rotationX = F * B,
                                F && (T = Math.cos(-F),
                                x = Math.sin(-F),
                                y = S * T + I * x,
                                v = C * T + M * x,
                                w = A * T + z * x,
                                I = S * -x + I * T,
                                M = C * -x + M * T,
                                z = A * -x + z * T,
                                E = R * -x + E * T,
                                S = y,
                                C = v,
                                A = w),
                                F = Math.atan2(-k, z),
                                p.rotationY = F * B,
                                F && (T = Math.cos(-F),
                                x = Math.sin(-F),
                                y = b * T - I * x,
                                v = P * T - M * x,
                                w = k * T - z * x,
                                M = P * x + M * T,
                                z = k * x + z * T,
                                E = O * x + E * T,
                                b = y,
                                P = v,
                                k = w),
                                F = Math.atan2(P, b),
                                p.rotation = F * B,
                                F && (T = Math.cos(-F),
                                x = Math.sin(-F),
                                b = b * T + S * x,
                                v = P * T + C * x,
                                C = P * -x + C * T,
                                A = k * -x + A * T,
                                P = v),
                                p.rotationX && Math.abs(p.rotationX) + Math.abs(p.rotation) > 359.9 && (p.rotationX = p.rotation = 0,
                                p.rotationY = 180 - p.rotationY),
                                p.scaleX = (Math.sqrt(b * b + P * P) * d + .5 | 0) / d,
                                p.scaleY = (Math.sqrt(C * C + M * M) * d + .5 | 0) / d,
                                p.scaleZ = (Math.sqrt(A * A + z * z) * d + .5 | 0) / d,
                                p.rotationX || p.rotationY ? p.skewX = 0 : (p.skewX = S || C ? Math.atan2(S, C) * B + p.rotation : p.skewX || 0,
                                Math.abs(p.skewX) > 90 && Math.abs(p.skewX) < 270 && (f ? (p.scaleX *= -1,
                                p.skewX += p.rotation <= 0 ? 180 : -180,
                                p.rotation += p.rotation <= 0 ? 180 : -180) : (p.scaleY *= -1,
                                p.skewX += p.skewX <= 0 ? 180 : -180))),
                                p.perspective = E ? 1 / (E < 0 ? -E : E) : 0,
                                p.x = j,
                                p.y = D,
                                p.z = L,
                                p.svg && (p.x -= p.xOrigin - (p.xOrigin * b - p.yOrigin * S),
                                p.y -= p.yOrigin - (p.yOrigin * P - p.xOrigin * C))
                            } else if (!It || s || !r.length || p.x !== r[4] || p.y !== r[5] || !p.rotationX && !p.rotationY) {
                                var N = r.length >= 6
                                  , W = N ? r[0] : 1
                                  , X = r[1] || 0
                                  , Y = r[2] || 0
                                  , U = N ? r[3] : 1;
                                p.x = r[4] || 0,
                                p.y = r[5] || 0,
                                l = Math.sqrt(W * W + X * X),
                                h = Math.sqrt(U * U + Y * Y),
                                u = W || X ? Math.atan2(X, W) * B : p.rotation || 0,
                                c = Y || U ? Math.atan2(Y, U) * B + u : p.skewX || 0,
                                Math.abs(c) > 90 && Math.abs(c) < 270 && (f ? (l *= -1,
                                c += u <= 0 ? 180 : -180,
                                u += u <= 0 ? 180 : -180) : (h *= -1,
                                c += c <= 0 ? 180 : -180)),
                                p.scaleX = l,
                                p.scaleY = h,
                                p.rotation = u,
                                p.skewX = c,
                                It && (p.rotationX = p.rotationY = p.z = 0,
                                p.perspective = g,
                                p.scaleZ = 1),
                                p.svg && (p.x -= p.xOrigin - (p.xOrigin * W + p.yOrigin * Y),
                                p.y -= p.yOrigin - (p.xOrigin * X + p.yOrigin * U))
                            }
                            p.zOrigin = m;
                            for (a in p)
                                p[a] < _ && p[a] > -_ && (p[a] = 0)
                        }
                        return n && (t._gsTransform = p,
                        p.svg && (Ot && t.style[Ct] ? e.delayedCall(.001, function() {
                            qt(t.style, Ct)
                        }) : !Ot && t.getAttribute("transform") && e.delayedCall(.001, function() {
                            t.removeAttribute("transform")
                        }))),
                        p
                    }
                    , Yt = function(t) {
                        var e, i, n = this.data, s = -n.rotation * E, r = s + n.skewX * E, a = 1e5, o = (Math.cos(s) * n.scaleX * a | 0) / a, l = (Math.sin(s) * n.scaleX * a | 0) / a, h = (Math.sin(r) * -n.scaleY * a | 0) / a, u = (Math.cos(r) * n.scaleY * a | 0) / a, c = this.t.style, p = this.t.currentStyle;
                        if (p) {
                            i = l,
                            l = -h,
                            h = -i,
                            e = p.filter,
                            c.filter = "";
                            var f, _, d = this.t.offsetWidth, g = this.t.offsetHeight, y = "absolute" !== p.position, v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + h + ", M22=" + u, w = n.x + d * n.xPercent / 100, T = n.y + g * n.yPercent / 100;
                            if (null != n.ox && (f = (n.oxp ? d * n.ox * .01 : n.ox) - d / 2,
                            _ = (n.oyp ? g * n.oy * .01 : n.oy) - g / 2,
                            w += f - (f * o + _ * l),
                            T += _ - (f * h + _ * u)),
                            y ? (f = d / 2,
                            _ = g / 2,
                            v += ", Dx=" + (f - (f * o + _ * l) + w) + ", Dy=" + (_ - (f * h + _ * u) + T) + ")") : v += ", sizingMethod='auto expand')",
                            e.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1 ? c.filter = e.replace(j, v) : c.filter = v + " " + e,
                            0 !== t && 1 !== t || 1 === o && 0 === l && 0 === h && 1 === u && (y && v.indexOf("Dx=0, Dy=0") === -1 || P.test(e) && 100 !== parseFloat(RegExp.$1) || e.indexOf(e.indexOf("Alpha")) === -1 && c.removeAttribute("filter")),
                            !y) {
                                var x, k, O, S = m < 8 ? 1 : -1;
                                for (f = n.ieOffsetX || 0,
                                _ = n.ieOffsetY || 0,
                                n.ieOffsetX = Math.round((d - ((o < 0 ? -o : o) * d + (l < 0 ? -l : l) * g)) / 2 + w),
                                n.ieOffsetY = Math.round((g - ((u < 0 ? -u : u) * g + (h < 0 ? -h : h) * d)) / 2 + T),
                                xt = 0; xt < 4; xt++)
                                    k = rt[xt],
                                    x = p[k],
                                    i = x.indexOf("px") !== -1 ? parseFloat(x) : tt(this.t, k, parseFloat(x), x.replace(b, "")) || 0,
                                    O = i !== n[k] ? xt < 2 ? -n.ieOffsetX : -n.ieOffsetY : xt < 2 ? f - n.ieOffsetX : _ - n.ieOffsetY,
                                    c[k] = (n[k] = Math.round(i - O * (0 === xt || 2 === xt ? 1 : S))) + "px"
                            }
                        }
                    }, Ut = U.set3DTransformRatio = U.setTransformRatio = function(t) {
                        var e, i, n, s, r, a, o, l, h, u, c, p, f, d, m, g, y, v, w, T, x, b, P, k = this.data, O = this.t.style, S = k.rotation, C = k.rotationX, A = k.rotationY, R = k.scaleX, I = k.scaleY, M = k.scaleZ, z = k.x, j = k.y, D = k.z, L = k.svg, B = k.perspective, F = k.force3D;
                        if (((1 === t || 0 === t) && "auto" === F && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime) || !F) && !D && !B && !A && !C && 1 === M || Ot && L || !It)
                            return void (S || k.skewX || L ? (S *= E,
                            b = k.skewX * E,
                            P = 1e5,
                            e = Math.cos(S) * R,
                            s = Math.sin(S) * R,
                            i = Math.sin(S - b) * -I,
                            r = Math.cos(S - b) * I,
                            b && "simple" === k.skewType && (y = Math.tan(b - k.skewY * E),
                            y = Math.sqrt(1 + y * y),
                            i *= y,
                            r *= y,
                            k.skewY && (y = Math.tan(k.skewY * E),
                            y = Math.sqrt(1 + y * y),
                            e *= y,
                            s *= y)),
                            L && (z += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset,
                            j += k.yOrigin - (k.xOrigin * s + k.yOrigin * r) + k.yOffset,
                            Ot && (k.xPercent || k.yPercent) && (d = this.t.getBBox(),
                            z += .01 * k.xPercent * d.width,
                            j += .01 * k.yPercent * d.height),
                            d = 1e-6,
                            z < d && z > -d && (z = 0),
                            j < d && j > -d && (j = 0)),
                            w = (e * P | 0) / P + "," + (s * P | 0) / P + "," + (i * P | 0) / P + "," + (r * P | 0) / P + "," + z + "," + j + ")",
                            L && Ot ? this.t.setAttribute("transform", "matrix(" + w) : O[Ct] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + w) : O[Ct] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix(" : "matrix(") + R + ",0,0," + I + "," + z + "," + j + ")");
                        if (_ && (d = 1e-4,
                        R < d && R > -d && (R = M = 2e-5),
                        I < d && I > -d && (I = M = 2e-5),
                        !B || k.z || k.rotationX || k.rotationY || (B = 0)),
                        S || k.skewX)
                            S *= E,
                            m = e = Math.cos(S),
                            g = s = Math.sin(S),
                            k.skewX && (S -= k.skewX * E,
                            m = Math.cos(S),
                            g = Math.sin(S),
                            "simple" === k.skewType && (y = Math.tan((k.skewX - k.skewY) * E),
                            y = Math.sqrt(1 + y * y),
                            m *= y,
                            g *= y,
                            k.skewY && (y = Math.tan(k.skewY * E),
                            y = Math.sqrt(1 + y * y),
                            e *= y,
                            s *= y))),
                            i = -g,
                            r = m;
                        else {
                            if (!(A || C || 1 !== M || B || L))
                                return void (O[Ct] = (k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) translate3d(" : "translate3d(") + z + "px," + j + "px," + D + "px)" + (1 !== R || 1 !== I ? " scale(" + R + "," + I + ")" : ""));
                            e = r = 1,
                            i = s = 0
                        }
                        h = 1,
                        n = a = o = l = u = c = 0,
                        p = B ? -1 / B : 0,
                        f = k.zOrigin,
                        d = 1e-6,
                        T = ",",
                        x = "0",
                        S = A * E,
                        S && (m = Math.cos(S),
                        g = Math.sin(S),
                        o = -g,
                        u = p * -g,
                        n = e * g,
                        a = s * g,
                        h = m,
                        p *= m,
                        e *= m,
                        s *= m),
                        S = C * E,
                        S && (m = Math.cos(S),
                        g = Math.sin(S),
                        y = i * m + n * g,
                        v = r * m + a * g,
                        l = h * g,
                        c = p * g,
                        n = i * -g + n * m,
                        a = r * -g + a * m,
                        h *= m,
                        p *= m,
                        i = y,
                        r = v),
                        1 !== M && (n *= M,
                        a *= M,
                        h *= M,
                        p *= M),
                        1 !== I && (i *= I,
                        r *= I,
                        l *= I,
                        c *= I),
                        1 !== R && (e *= R,
                        s *= R,
                        o *= R,
                        u *= R),
                        (f || L) && (f && (z += n * -f,
                        j += a * -f,
                        D += h * -f + f),
                        L && (z += k.xOrigin - (k.xOrigin * e + k.yOrigin * i) + k.xOffset,
                        j += k.yOrigin - (k.xOrigin * s + k.yOrigin * r) + k.yOffset),
                        z < d && z > -d && (z = x),
                        j < d && j > -d && (j = x),
                        D < d && D > -d && (D = 0)),
                        w = k.xPercent || k.yPercent ? "translate(" + k.xPercent + "%," + k.yPercent + "%) matrix3d(" : "matrix3d(",
                        w += (e < d && e > -d ? x : e) + T + (s < d && s > -d ? x : s) + T + (o < d && o > -d ? x : o),
                        w += T + (u < d && u > -d ? x : u) + T + (i < d && i > -d ? x : i) + T + (r < d && r > -d ? x : r),
                        C || A || 1 !== M ? (w += T + (l < d && l > -d ? x : l) + T + (c < d && c > -d ? x : c) + T + (n < d && n > -d ? x : n),
                        w += T + (a < d && a > -d ? x : a) + T + (h < d && h > -d ? x : h) + T + (p < d && p > -d ? x : p) + T) : w += ",0,0,0,0,1,0,",
                        w += z + T + j + T + D + T + (B ? 1 + -D / B : 1) + ")",
                        O[Ct] = w
                    }
                    ;
                    u = Mt.prototype,
                    u.x = u.y = u.z = u.skewX = u.skewY = u.rotation = u.rotationX = u.rotationY = u.zOrigin = u.xPercent = u.yPercent = u.xOffset = u.yOffset = 0,
                    u.scaleX = u.scaleY = u.scaleZ = 1,
                    Pt("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                        parser: function(t, e, i, n, s, a, l) {
                            if (n._lastParsedTransform === l)
                                return s;
                            n._lastParsedTransform = l;
                            var h;
                            "function" == typeof l[i] && (h = l[i],
                            l[i] = e);
                            var u, c, p, f, _, d, m, v, w, T = t._gsTransform, x = t.style, b = 1e-6, P = St.length, k = l, O = {}, S = "transformOrigin", C = Xt(t, r, !0, k.parseTransform), A = k.transform && ("function" == typeof k.transform ? k.transform(y, g) : k.transform);
                            if (n._transform = C,
                            A && "string" == typeof A && Ct)
                                c = X.style,
                                c[Ct] = A,
                                c.display = "block",
                                c.position = "absolute",
                                N.body.appendChild(X),
                                u = Xt(X, null , !1),
                                C.svg && (d = C.xOrigin,
                                m = C.yOrigin,
                                u.x -= C.xOffset,
                                u.y -= C.yOffset,
                                (k.transformOrigin || k.svgOrigin) && (A = {},
                                Et(t, ot(k.transformOrigin), A, k.svgOrigin, k.smoothOrigin, !0),
                                d = A.xOrigin,
                                m = A.yOrigin,
                                u.x -= A.xOffset - C.xOffset,
                                u.y -= A.yOffset - C.yOffset),
                                (d || m) && (v = Wt(X, !0),
                                u.x -= d - (d * v[0] + m * v[2]),
                                u.y -= m - (d * v[1] + m * v[3]))),
                                N.body.removeChild(X),
                                u.perspective || (u.perspective = C.perspective),
                                null != k.xPercent && (u.xPercent = ht(k.xPercent, C.xPercent)),
                                null != k.yPercent && (u.yPercent = ht(k.yPercent, C.yPercent));
                            else if ("object" == typeof k) {
                                if (u = {
                                    scaleX: ht(null != k.scaleX ? k.scaleX : k.scale, C.scaleX),
                                    scaleY: ht(null != k.scaleY ? k.scaleY : k.scale, C.scaleY),
                                    scaleZ: ht(k.scaleZ, C.scaleZ),
                                    x: ht(k.x, C.x),
                                    y: ht(k.y, C.y),
                                    z: ht(k.z, C.z),
                                    xPercent: ht(k.xPercent, C.xPercent),
                                    yPercent: ht(k.yPercent, C.yPercent),
                                    perspective: ht(k.transformPerspective, C.perspective)
                                },
                                _ = k.directionalRotation,
                                null != _)
                                    if ("object" == typeof _)
                                        for (c in _)
                                            k[c] = _[c];
                                    else
                                        k.rotation = _;
                                "string" == typeof k.x && k.x.indexOf("%") !== -1 && (u.x = 0,
                                u.xPercent = ht(k.x, C.xPercent)),
                                "string" == typeof k.y && k.y.indexOf("%") !== -1 && (u.y = 0,
                                u.yPercent = ht(k.y, C.yPercent)),
                                u.rotation = ut("rotation"in k ? k.rotation : "shortRotation"in k ? k.shortRotation + "_short" : "rotationZ"in k ? k.rotationZ : C.rotation - C.skewY, C.rotation - C.skewY, "rotation", O),
                                It && (u.rotationX = ut("rotationX"in k ? k.rotationX : "shortRotationX"in k ? k.shortRotationX + "_short" : C.rotationX || 0, C.rotationX, "rotationX", O),
                                u.rotationY = ut("rotationY"in k ? k.rotationY : "shortRotationY"in k ? k.shortRotationY + "_short" : C.rotationY || 0, C.rotationY, "rotationY", O)),
                                u.skewX = ut(k.skewX, C.skewX - C.skewY),
                                (u.skewY = ut(k.skewY, C.skewY)) && (u.skewX += u.skewY,
                                u.rotation += u.skewY)
                            }
                            for (It && null != k.force3D && (C.force3D = k.force3D,
                            f = !0),
                            C.skewType = k.skewType || C.skewType || o.defaultSkewType,
                            p = C.force3D || C.z || C.rotationX || C.rotationY || u.z || u.rotationX || u.rotationY || u.perspective,
                            p || null == k.scale || (u.scaleZ = 1); --P > -1; )
                                w = St[P],
                                A = u[w] - C[w],
                                (A > b || A < -b || null != k[w] || null != F[w]) && (f = !0,
                                s = new vt(C,w,C[w],A,s),
                                w in O && (s.e = O[w]),
                                s.xs0 = 0,
                                s.plugin = a,
                                n._overwriteProps.push(s.n));
                            return A = k.transformOrigin,
                            C.svg && (A || k.svgOrigin) && (d = C.xOffset,
                            m = C.yOffset,
                            Et(t, ot(A), u, k.svgOrigin, k.smoothOrigin),
                            s = wt(C, "xOrigin", (T ? C : u).xOrigin, u.xOrigin, s, S),
                            s = wt(C, "yOrigin", (T ? C : u).yOrigin, u.yOrigin, s, S),
                            d === C.xOffset && m === C.yOffset || (s = wt(C, "xOffset", T ? d : C.xOffset, C.xOffset, s, S),
                            s = wt(C, "yOffset", T ? m : C.yOffset, C.yOffset, s, S)),
                            A = Ot ? null : "0px 0px"),
                            (A || It && p && C.zOrigin) && (Ct ? (f = !0,
                            w = Rt,
                            A = (A || J(t, w, r, !1, "50% 50%")) + "",
                            s = new vt(x,w,0,0,s,(-1),S),
                            s.b = x[w],
                            s.plugin = a,
                            It ? (c = C.zOrigin,
                            A = A.split(" "),
                            C.zOrigin = (A.length > 2 && (0 === c || "0px" !== A[2]) ? parseFloat(A[2]) : c) || 0,
                            s.xs0 = s.e = A[0] + " " + (A[1] || "50%") + " 0px",
                            s = new vt(C,"zOrigin",0,0,s,(-1),s.n),
                            s.b = c,
                            s.xs0 = s.e = C.zOrigin) : s.xs0 = s.e = A) : ot(A + "", C)),
                            f && (n._transformType = C.svg && Ot || !p && 3 !== this._transformType ? 2 : 3),
                            h && (l[i] = h),
                            s
                        },
                        prefix: !0
                    }),
                    Pt("boxShadow", {
                        defaultValue: "0px 0px 0px 0px #999",
                        prefix: !0,
                        color: !0,
                        multi: !0,
                        keyword: "inset"
                    }),
                    Pt("borderRadius", {
                        defaultValue: "0px",
                        parser: function(t, e, i, n, a, o) {
                            e = this.format(e);
                            var l, h, u, c, p, f, _, d, m, g, y, v, w, T, x, b, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], k = t.style;
                            for (m = parseFloat(t.offsetWidth),
                            g = parseFloat(t.offsetHeight),
                            l = e.split(" "),
                            h = 0; h < P.length; h++)
                                this.p.indexOf("border") && (P[h] = Z(P[h])),
                                p = c = J(t, P[h], r, !1, "0px"),
                                p.indexOf(" ") !== -1 && (c = p.split(" "),
                                p = c[0],
                                c = c[1]),
                                f = u = l[h],
                                _ = parseFloat(p),
                                v = p.substr((_ + "").length),
                                w = "=" === f.charAt(1),
                                w ? (d = parseInt(f.charAt(0) + "1", 10),
                                f = f.substr(2),
                                d *= parseFloat(f),
                                y = f.substr((d + "").length - (d < 0 ? 1 : 0)) || "") : (d = parseFloat(f),
                                y = f.substr((d + "").length)),
                                "" === y && (y = s[i] || v),
                                y !== v && (T = tt(t, "borderLeft", _, v),
                                x = tt(t, "borderTop", _, v),
                                "%" === y ? (p = T / m * 100 + "%",
                                c = x / g * 100 + "%") : "em" === y ? (b = tt(t, "borderLeft", 1, "em"),
                                p = T / b + "em",
                                c = x / b + "em") : (p = T + "px",
                                c = x + "px"),
                                w && (f = parseFloat(p) + d + y,
                                u = parseFloat(c) + d + y)),
                                a = Tt(k, P[h], p + " " + c, f + " " + u, !1, "0px", a);
                            return a
                        },
                        prefix: !0,
                        formatter: mt("0px 0px 0px 0px", !1, !0)
                    }),
                    Pt("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                        defaultValue: "0px",
                        parser: function(t, e, i, n, s, a) {
                            return Tt(t.style, i, this.format(J(t, i, r, !1, "0px 0px")), this.format(e), !1, "0px", s)
                        },
                        prefix: !0,
                        formatter: mt("0px 0px", !1, !0)
                    }),
                    Pt("backgroundPosition", {
                        defaultValue: "0 0",
                        parser: function(t, e, i, n, s, a) {
                            var o, l, h, u, c, p, f = "background-position", _ = r || K(t, null ), d = this.format((_ ? m ? _.getPropertyValue(f + "-x") + " " + _.getPropertyValue(f + "-y") : _.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                            if (d.indexOf("%") !== -1 != (g.indexOf("%") !== -1) && g.split(",").length < 2 && (p = J(t, "backgroundImage").replace(R, ""),
                            p && "none" !== p)) {
                                for (o = d.split(" "),
                                l = g.split(" "),
                                Y.setAttribute("src", p),
                                h = 2; --h > -1; )
                                    d = o[h],
                                    u = d.indexOf("%") !== -1,
                                    u !== (l[h].indexOf("%") !== -1) && (c = 0 === h ? t.offsetWidth - Y.width : t.offsetHeight - Y.height,
                                    o[h] = u ? parseFloat(d) / 100 * c + "px" : parseFloat(d) / c * 100 + "%");
                                d = o.join(" ")
                            }
                            return this.parseComplex(t.style, d, g, s, a)
                        },
                        formatter: ot
                    }),
                    Pt("backgroundSize", {
                        defaultValue: "0 0",
                        formatter: function(t) {
                            return t += "",
                            ot(t.indexOf(" ") === -1 ? t + " " + t : t)
                        }
                    }),
                    Pt("perspective", {
                        defaultValue: "0px",
                        prefix: !0
                    }),
                    Pt("perspectiveOrigin", {
                        defaultValue: "50% 50%",
                        prefix: !0
                    }),
                    Pt("transformStyle", {
                        prefix: !0
                    }),
                    Pt("backfaceVisibility", {
                        prefix: !0
                    }),
                    Pt("userSelect", {
                        prefix: !0
                    }),
                    Pt("margin", {
                        parser: gt("marginTop,marginRight,marginBottom,marginLeft")
                    }),
                    Pt("padding", {
                        parser: gt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                    }),
                    Pt("clip", {
                        defaultValue: "rect(0px,0px,0px,0px)",
                        parser: function(t, e, i, n, s, a) {
                            var o, l, h;
                            return m < 9 ? (l = t.currentStyle,
                            h = m < 8 ? " " : ",",
                            o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")",
                            e = this.format(e).split(",").join(h)) : (o = this.format(J(t, this.p, r, !1, this.dflt)),
                            e = this.format(e)),
                            this.parseComplex(t.style, o, e, s, a)
                        }
                    }),
                    Pt("textShadow", {
                        defaultValue: "0px 0px 0px #999",
                        color: !0,
                        multi: !0
                    }),
                    Pt("autoRound,strictUnits", {
                        parser: function(t, e, i, n, s) {
                            return s
                        }
                    }),
                    Pt("border", {
                        defaultValue: "0px solid #000",
                        parser: function(t, e, i, n, s, a) {
                            var o = J(t, "borderTopWidth", r, !1, "0px")
                              , l = this.format(e).split(" ")
                              , h = l[0].replace(b, "");
                            return "px" !== h && (o = parseFloat(o) / tt(t, "borderTopWidth", 1, h) + h),
                            this.parseComplex(t.style, this.format(o + " " + J(t, "borderTopStyle", r, !1, "solid") + " " + J(t, "borderTopColor", r, !1, "#000")), l.join(" "), s, a)
                        },
                        color: !0,
                        formatter: function(t) {
                            var e = t.split(" ");
                            return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0]
                        }
                    }),
                    Pt("borderWidth", {
                        parser: gt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                    }),
                    Pt("float,cssFloat,styleFloat", {
                        parser: function(t, e, i, n, s, r) {
                            var a = t.style
                              , o = "cssFloat"in a ? "cssFloat" : "styleFloat";
                            return new vt(a,o,0,0,s,(-1),i,(!1),0,a[o],e)
                        }
                    });
                    var $t = function(t) {
                        var e, i = this.t, n = i.filter || J(this.data, "filter") || "", s = this.s + this.c * t | 0;
                        100 === s && (n.indexOf("atrix(") === -1 && n.indexOf("radient(") === -1 && n.indexOf("oader(") === -1 ? (i.removeAttribute("filter"),
                        e = !J(this.data, "filter")) : (i.filter = n.replace(O, ""),
                        e = !0)),
                        e || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + s + ")"),
                        n.indexOf("pacity") === -1 ? 0 === s && this.xn1 || (i.filter = n + " alpha(opacity=" + s + ")") : i.filter = n.replace(P, "opacity=" + s))
                    };
                    Pt("opacity,alpha,autoAlpha", {
                        defaultValue: "1",
                        parser: function(t, e, i, n, s, a) {
                            var o = parseFloat(J(t, "opacity", r, !1, "1"))
                              , l = t.style
                              , h = "autoAlpha" === i;
                            return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                            h && 1 === o && "hidden" === J(t, "visibility", r) && 0 !== e && (o = 0),
                            q ? s = new vt(l,"opacity",o,e - o,s) : (s = new vt(l,"opacity",100 * o,100 * (e - o),s),
                            s.xn1 = h ? 1 : 0,
                            l.zoom = 1,
                            s.type = 2,
                            s.b = "alpha(opacity=" + s.s + ")",
                            s.e = "alpha(opacity=" + (s.s + s.c) + ")",
                            s.data = t,
                            s.plugin = a,
                            s.setRatio = $t),
                            h && (s = new vt(l,"visibility",0,0,s,(-1),null ,(!1),0,0 !== o ? "inherit" : "hidden",0 === e ? "hidden" : "inherit"),
                            s.xs0 = "inherit",
                            n._overwriteProps.push(s.n),
                            n._overwriteProps.push(i)),
                            s
                        }
                    });
                    var qt = function(t, e) {
                        e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
                        t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e))
                    }
                      , Vt = function(t) {
                        if (this.t._gsClassPT = this,
                        1 === t || 0 === t) {
                            this.t.setAttribute("class", 0 === t ? this.b : this.e);
                            for (var e = this.data, i = this.t.style; e; )
                                e.v ? i[e.p] = e.v : qt(i, e.p),
                                e = e._next;
                            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null )
                        } else
                            this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                    };
                    Pt("className", {
                        parser: function(t, e, i, s, a, o, l) {
                            var h, u, c, p, f, _ = t.getAttribute("class") || "", d = t.style.cssText;
                            if (a = s._classNamePT = new vt(t,i,0,0,a,2),
                            a.setRatio = Vt,
                            a.pr = -11,
                            n = !0,
                            a.b = _,
                            u = it(t, r),
                            c = t._gsClassPT) {
                                for (p = {},
                                f = c.data; f; )
                                    p[f.p] = 1,
                                    f = f._next;
                                c.setRatio(1)
                            }
                            return t._gsClassPT = a,
                            a.e = "=" !== e.charAt(1) ? e : _.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                            t.setAttribute("class", a.e),
                            h = nt(t, u, it(t), l, p),
                            t.setAttribute("class", _),
                            a.data = h.firstMPT,
                            t.style.cssText = d,
                            a = a.xfirst = s.parse(t, h.difs, a, o)
                        }
                    });
                    var Ht = function(t) {
                        if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                            var e, i, n, s, r, a = this.t.style, o = h.transform.parse;
                            if ("all" === this.e)
                                a.cssText = "",
                                s = !0;
                            else
                                for (e = this.e.split(" ").join("").split(","),
                                n = e.length; --n > -1; )
                                    i = e[n],
                                    h[i] && (h[i].parse === o ? s = !0 : i = "transformOrigin" === i ? Rt : h[i].p),
                                    qt(a, i);
                            s && (qt(a, Ct),
                            r = this.t._gsTransform,
                            r && (r.svg && (this.t.removeAttribute("data-svg-origin"),
                            this.t.removeAttribute("transform")),
                            delete this.t._gsTransform))
                        }
                    };
                    for (Pt("clearProps", {
                        parser: function(t, e, i, s, r) {
                            return r = new vt(t,i,0,0,r,2),
                            r.setRatio = Ht,
                            r.e = e,
                            r.pr = -10,
                            r.data = s._tween,
                            n = !0,
                            r
                        }
                    }),
                    u = "bezier,throwProps,physicsProps,physics2D".split(","),
                    xt = u.length; xt--; )
                        kt(u[xt]);
                    u = o.prototype,
                    u._firstPT = u._lastParsedTransform = u._transform = null ,
                    u._onInitTween = function(t, e, i, l) {
                        if (!t.nodeType)
                            return !1;
                        this._target = g = t,
                        this._tween = i,
                        this._vars = e,
                        y = l,
                        c = e.autoRound,
                        n = !1,
                        s = e.suffixMap || o.suffixMap,
                        r = K(t, ""),
                        a = this._overwriteProps;
                        var u, _, m, v, w, T, x, b, P, O = t.style;
                        if (p && "" === O.zIndex && (u = J(t, "zIndex", r),
                        "auto" !== u && "" !== u || this._addLazySet(O, "zIndex", 0)),
                        "string" == typeof e && (v = O.cssText,
                        u = it(t, r),
                        O.cssText = v + ";" + e,
                        u = nt(t, u, it(t)).difs,
                        !q && k.test(e) && (u.opacity = parseFloat(RegExp.$1)),
                        e = u,
                        O.cssText = v),
                        e.className ? this._firstPT = _ = h.className.parse(t, e.className, "className", this, null , null , e) : this._firstPT = _ = this.parse(t, e, null ),
                        this._transformType) {
                            for (P = 3 === this._transformType,
                            Ct ? f && (p = !0,
                            "" === O.zIndex && (x = J(t, "zIndex", r),
                            "auto" !== x && "" !== x || this._addLazySet(O, "zIndex", 0)),
                            d && this._addLazySet(O, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (P ? "visible" : "hidden"))) : O.zoom = 1,
                            m = _; m && m._next; )
                                m = m._next;
                            b = new vt(t,"transform",0,0,null ,2),
                            this._linkCSSP(b, null , m),
                            b.setRatio = Ct ? Ut : Yt,
                            b.data = this._transform || Xt(t, r, !0),
                            b.tween = i,
                            b.pr = -1,
                            a.pop()
                        }
                        if (n) {
                            for (; _; ) {
                                for (T = _._next,
                                m = v; m && m.pr > _.pr; )
                                    m = m._next;
                                (_._prev = m ? m._prev : w) ? _._prev._next = _ : v = _,
                                (_._next = m) ? m._prev = _ : w = _,
                                _ = T
                            }
                            this._firstPT = v
                        }
                        return !0
                    }
                    ,
                    u.parse = function(t, e, i, n) {
                        var a, o, l, u, p, f, _, d, m, v, w = t.style;
                        for (a in e)
                            f = e[a],
                            "function" == typeof f && (f = f(y, g)),
                            o = h[a],
                            o ? i = o.parse(t, f, a, this, i, n, e) : (p = J(t, a, r) + "",
                            m = "string" == typeof f,
                            "color" === a || "fill" === a || "stroke" === a || a.indexOf("Color") !== -1 || m && S.test(f) ? (m || (f = ft(f),
                            f = (f.length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"),
                            i = Tt(w, a, p, f, !0, "transparent", i, 0, n)) : m && L.test(f) ? i = Tt(w, a, p, f, !0, null , i, 0, n) : (l = parseFloat(p),
                            _ = l || 0 === l ? p.substr((l + "").length) : "",
                            "" !== p && "auto" !== p || ("width" === a || "height" === a ? (l = at(t, a, r),
                            _ = "px") : "left" === a || "top" === a ? (l = et(t, a, r),
                            _ = "px") : (l = "opacity" !== a ? 0 : 1,
                            _ = "")),
                            v = m && "=" === f.charAt(1),
                            v ? (u = parseInt(f.charAt(0) + "1", 10),
                            f = f.substr(2),
                            u *= parseFloat(f),
                            d = f.replace(b, "")) : (u = parseFloat(f),
                            d = m ? f.replace(b, "") : ""),
                            "" === d && (d = a in s ? s[a] : _),
                            f = u || 0 === u ? (v ? u + l : u) + d : e[a],
                            _ !== d && "" !== d && (u || 0 === u) && l && (l = tt(t, a, l, _),
                            "%" === d ? (l /= tt(t, a, 100, "%") / 100,
                            e.strictUnits !== !0 && (p = l + "%")) : "em" === d || "rem" === d || "vw" === d || "vh" === d ? l /= tt(t, a, 1, d) : "px" !== d && (u = tt(t, a, u, d),
                            d = "px"),
                            v && (u || 0 === u) && (f = u + l + d)),
                            v && (u += l),
                            !l && 0 !== l || !u && 0 !== u ? void 0 !== w[a] && (f || f + "" != "NaN" && null != f) ? (i = new vt(w,a,u || l || 0,0,i,(-1),a,(!1),0,p,f),
                            i.xs0 = "none" !== f || "display" !== a && a.indexOf("Style") === -1 ? f : p) : H("invalid " + a + " tween value: " + e[a]) : (i = new vt(w,a,l,u - l,i,0,a,c !== !1 && ("px" === d || "zIndex" === a),0,p,f),
                            i.xs0 = d))),
                            n && i && !i.plugin && (i.plugin = n);
                        return i
                    }
                    ,
                    u.setRatio = function(t) {
                        var e, i, n, s = this._firstPT, r = 1e-6;
                        if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                            if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || this._tween._rawPrevTime === -1e-6)
                                for (; s; ) {
                                    if (e = s.c * t + s.s,
                                    s.r ? e = Math.round(e) : e < r && e > -r && (e = 0),
                                    s.type)
                                        if (1 === s.type)
                                            if (n = s.l,
                                            2 === n)
                                                s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                            else if (3 === n)
                                                s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                            else if (4 === n)
                                                s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                            else if (5 === n)
                                                s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                            else {
                                                for (i = s.xs0 + e + s.xs1,
                                                n = 1; n < s.l; n++)
                                                    i += s["xn" + n] + s["xs" + (n + 1)];
                                                s.t[s.p] = i
                                            }
                                        else
                                            s.type === -1 ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                                    else
                                        s.t[s.p] = e + s.xs0;
                                    s = s._next
                                }
                            else
                                for (; s; )
                                    2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t),
                                    s = s._next;
                        else
                            for (; s; ) {
                                if (2 !== s.type)
                                    if (s.r && s.type !== -1)
                                        if (e = Math.round(s.s + s.c),
                                        s.type) {
                                            if (1 === s.type) {
                                                for (n = s.l,
                                                i = s.xs0 + e + s.xs1,
                                                n = 1; n < s.l; n++)
                                                    i += s["xn" + n] + s["xs" + (n + 1)];
                                                s.t[s.p] = i
                                            }
                                        } else
                                            s.t[s.p] = e + s.xs0;
                                    else
                                        s.t[s.p] = s.e;
                                else
                                    s.setRatio(t);
                                s = s._next
                            }
                    }
                    ,
                    u._enableTransforms = function(t) {
                        this._transform = this._transform || Xt(this._target, r, !0),
                        this._transformType = this._transform.svg && Ot || !t && 3 !== this._transformType ? 2 : 3
                    }
                    ;
                    var Qt = function(t) {
                        this.t[this.p] = this.e,
                        this.data._linkCSSP(this, this._next, null , !0)
                    };
                    u._addLazySet = function(t, e, i) {
                        var n = this._firstPT = new vt(t,e,0,0,this._firstPT,2);
                        n.e = i,
                        n.setRatio = Qt,
                        n.data = this
                    }
                    ,
                    u._linkCSSP = function(t, e, i, n) {
                        return t && (e && (e._prev = t),
                        t._next && (t._next._prev = t._prev),
                        t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
                        n = !0),
                        i ? i._next = t : n || null !== this._firstPT || (this._firstPT = t),
                        t._next = e,
                        t._prev = i),
                        t
                    }
                    ,
                    u._mod = function(t) {
                        for (var e = this._firstPT; e; )
                            "function" == typeof t[e.p] && t[e.p] === Math.round && (e.r = 1),
                            e = e._next
                    }
                    ,
                    u._kill = function(e) {
                        var i, n, s, r = e;
                        if (e.autoAlpha || e.alpha) {
                            r = {};
                            for (n in e)
                                r[n] = e[n];
                            r.opacity = 1,
                            r.autoAlpha && (r.visibility = 1)
                        }
                        for (e.className && (i = this._classNamePT) && (s = i.xfirst,
                        s && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next),
                        i._next && this._linkCSSP(i._next, i._next._next, s._prev),
                        this._classNamePT = null ),
                        i = this._firstPT; i; )
                            i.plugin && i.plugin !== n && i.plugin._kill && (i.plugin._kill(e),
                            n = i.plugin),
                            i = i._next;
                        return t.prototype._kill.call(this, r)
                    }
                    ;
                    var Gt = function(t, e, i) {
                        var n, s, r, a;
                        if (t.slice)
                            for (s = t.length; --s > -1; )
                                Gt(t[s], e, i);
                        else
                            for (n = t.childNodes,
                            s = n.length; --s > -1; )
                                r = n[s],
                                a = r.type,
                                r.style && (e.push(it(r)),
                                i && i.push(r)),
                                1 !== a && 9 !== a && 11 !== a || !r.childNodes.length || Gt(r, e, i)
                    };
                    return o.cascadeTo = function(t, i, n) {
                        var s, r, a, o, l = e.to(t, i, n), h = [l], u = [], c = [], p = [], f = e._internals.reservedProps;
                        for (t = l._targets || l.target,
                        Gt(t, u, p),
                        l.render(i, !0, !0),
                        Gt(t, c),
                        l.render(0, !0, !0),
                        l._enabled(!0),
                        s = p.length; --s > -1; )
                            if (r = nt(p[s], u[s], c[s]),
                            r.firstMPT) {
                                r = r.difs;
                                for (a in n)
                                    f[a] && (r[a] = n[a]);
                                o = {};
                                for (a in r)
                                    o[a] = u[s][a];
                                h.push(e.fromTo(p[s], i, o, r))
                            }
                        return h
                    }
                    ,
                    t.activate([o]),
                    o
                }, !0),
                function() {
                    var t = i._gsDefine.plugin({
                        propName: "roundProps",
                        version: "1.6.0",
                        priority: -1,
                        API: 2,
                        init: function(t, e, i) {
                            return this._tween = i,
                            !0
                        }
                    })
                      , e = function(t) {
                        for (; t; )
                            t.f || t.blob || (t.m = Math.round),
                            t = t._next
                    }
                      , n = t.prototype;
                    n._onInitAllProps = function() {
                        for (var t, i, n, s = this._tween, r = s.vars.roundProps.join ? s.vars.roundProps : s.vars.roundProps.split(","), a = r.length, o = {}, l = s._propLookup.roundProps; --a > -1; )
                            o[r[a]] = Math.round;
                        for (a = r.length; --a > -1; )
                            for (t = r[a],
                            i = s._firstPT; i; )
                                n = i._next,
                                i.pg ? i.t._mod(o) : i.n === t && (2 === i.f && i.t ? e(i.t._firstPT) : (this._add(i.t, t, i.s, i.c),
                                n && (n._prev = i._prev),
                                i._prev ? i._prev._next = n : s._firstPT === i && (s._firstPT = n),
                                i._next = i._prev = null ,
                                s._propLookup[t] = l)),
                                i = n;
                        return !1
                    }
                    ,
                    n._add = function(t, e, i, n) {
                        this._addTween(t, e, i, i + n, e, Math.round),
                        this._overwriteProps.push(e)
                    }
                }(),
                function() {
                    i._gsDefine.plugin({
                        propName: "attr",
                        API: 2,
                        version: "0.6.0",
                        init: function(t, e, i, n) {
                            var s, r;
                            if ("function" != typeof t.setAttribute)
                                return !1;
                            for (s in e)
                                r = e[s],
                                "function" == typeof r && (r = r(n, t)),
                                this._addTween(t, "setAttribute", t.getAttribute(s) + "", r + "", s, !1, s),
                                this._overwriteProps.push(s);
                            return !0
                        }
                    })
                }(),
                i._gsDefine.plugin({
                    propName: "directionalRotation",
                    version: "0.3.0",
                    API: 2,
                    init: function(t, e, i, n) {
                        "object" != typeof e && (e = {
                            rotation: e
                        }),
                        this.finals = {};
                        var s, r, a, o, l, h, u = e.useRadians === !0 ? 2 * Math.PI : 360, c = 1e-6;
                        for (s in e)
                            "useRadians" !== s && (o = e[s],
                            "function" == typeof o && (o = o(n, t)),
                            h = (o + "").split("_"),
                            r = h[0],
                            a = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]()),
                            o = this.finals[s] = "string" == typeof r && "=" === r.charAt(1) ? a + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0,
                            l = o - a,
                            h.length && (r = h.join("_"),
                            r.indexOf("short") !== -1 && (l %= u,
                            l !== l % (u / 2) && (l = l < 0 ? l + u : l - u)),
                            r.indexOf("_cw") !== -1 && l < 0 ? l = (l + 9999999999 * u) % u - (l / u | 0) * u : r.indexOf("ccw") !== -1 && l > 0 && (l = (l - 9999999999 * u) % u - (l / u | 0) * u)),
                            (l > c || l < -c) && (this._addTween(t, s, a, a + l, s),
                            this._overwriteProps.push(s)));
                        return !0
                    },
                    set: function(t) {
                        var e;
                        if (1 !== t)
                            this._super.setRatio.call(this, t);
                        else
                            for (e = this._firstPT; e; )
                                e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                                e = e._next
                    }
                })._autoCSS = !0,
                i._gsDefine("easing.Back", ["easing.Ease"], function(t) {
                    var e, n, s, r = i.GreenSockGlobals || i, a = r.com.greensock, o = 2 * Math.PI, l = Math.PI / 2, h = a._class, u = function(e, i) {
                        var n = h("easing." + e, function() {}, !0)
                          , s = n.prototype = new t;
                        return s.constructor = n,
                        s.getRatio = i,
                        n
                    }, c = t.register || function() {}
                    , p = function(t, e, i, n, s) {
                        var r = h("easing." + t, {
                            easeOut: new e,
                            easeIn: new i,
                            easeInOut: new n
                        }, !0);
                        return c(r, t),
                        r
                    }, f = function(t, e, i) {
                        this.t = t,
                        this.v = e,
                        i && (this.next = i,
                        i.prev = this,
                        this.c = i.v - e,
                        this.gap = i.t - t)
                    }, _ = function(e, i) {
                        var n = h("easing." + e, function(t) {
                            this._p1 = t || 0 === t ? t : 1.70158,
                            this._p2 = 1.525 * this._p1
                        }, !0)
                          , s = n.prototype = new t;
                        return s.constructor = n,
                        s.getRatio = i,
                        s.config = function(t) {
                            return new n(t)
                        }
                        ,
                        n
                    }, d = p("Back", _("BackOut", function(t) {
                        return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }), _("BackIn", function(t) {
                        return t * t * ((this._p1 + 1) * t - this._p1)
                    }), _("BackInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    })), m = h("easing.SlowMo", function(t, e, i) {
                        e = e || 0 === e ? e : .7,
                        null == t ? t = .7 : t > 1 && (t = 1),
                        this._p = 1 !== t ? e : 0,
                        this._p1 = (1 - t) / 2,
                        this._p2 = t,
                        this._p3 = this._p1 + this._p2,
                        this._calcEnd = i === !0
                    }, !0), g = m.prototype = new t;
                    return g.constructor = m,
                    g.getRatio = function(t) {
                        var e = t + (.5 - t) * this._p;
                        return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                    }
                    ,
                    m.ease = new m(.7,.7),
                    g.config = m.config = function(t, e, i) {
                        return new m(t,e,i)
                    }
                    ,
                    e = h("easing.SteppedEase", function(t) {
                        t = t || 1,
                        this._p1 = 1 / t,
                        this._p2 = t + 1
                    }, !0),
                    g = e.prototype = new t,
                    g.constructor = e,
                    g.getRatio = function(t) {
                        return t < 0 ? t = 0 : t >= 1 && (t = .999999999),
                        (this._p2 * t >> 0) * this._p1
                    }
                    ,
                    g.config = e.config = function(t) {
                        return new e(t)
                    }
                    ,
                    n = h("easing.RoughEase", function(e) {
                        e = e || {};
                        for (var i, n, s, r, a, o, l = e.taper || "none", h = [], u = 0, c = 0 | (e.points || 20), p = c, _ = e.randomize !== !1, d = e.clamp === !0, m = e.template instanceof t ? e.template : null , g = "number" == typeof e.strength ? .4 * e.strength : .4; --p > -1; )
                            i = _ ? Math.random() : 1 / c * p,
                            n = m ? m.getRatio(i) : i,
                            "none" === l ? s = g : "out" === l ? (r = 1 - i,
                            s = r * r * g) : "in" === l ? s = i * i * g : i < .5 ? (r = 2 * i,
                            s = r * r * .5 * g) : (r = 2 * (1 - i),
                            s = r * r * .5 * g),
                            _ ? n += Math.random() * s - .5 * s : p % 2 ? n += .5 * s : n -= .5 * s,
                            d && (n > 1 ? n = 1 : n < 0 && (n = 0)),
                            h[u++] = {
                                x: i,
                                y: n
                            };
                        for (h.sort(function(t, e) {
                            return t.x - e.x
                        }),
                        o = new f(1,1,null ),
                        p = c; --p > -1; )
                            a = h[p],
                            o = new f(a.x,a.y,o);
                        this._prev = new f(0,0,0 !== o.t ? o : o.next)
                    }, !0),
                    g = n.prototype = new t,
                    g.constructor = n,
                    g.getRatio = function(t) {
                        var e = this._prev;
                        if (t > e.t) {
                            for (; e.next && t >= e.t; )
                                e = e.next;
                            e = e.prev
                        } else
                            for (; e.prev && t <= e.t; )
                                e = e.prev;
                        return this._prev = e,
                        e.v + (t - e.t) / e.gap * e.c
                    }
                    ,
                    g.config = function(t) {
                        return new n(t)
                    }
                    ,
                    n.ease = new n,
                    p("Bounce", u("BounceOut", function(t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                    }), u("BounceIn", function(t) {
                        return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                    }), u("BounceInOut", function(t) {
                        var e = t < .5;
                        return t = e ? 1 - 2 * t : 2 * t - 1,
                        t = t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
                        e ? .5 * (1 - t) : .5 * t + .5
                    })),
                    p("Circ", u("CircOut", function(t) {
                        return Math.sqrt(1 - (t -= 1) * t)
                    }), u("CircIn", function(t) {
                        return -(Math.sqrt(1 - t * t) - 1)
                    }), u("CircInOut", function(t) {
                        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                    })),
                    s = function(e, i, n) {
                        var s = h("easing." + e, function(t, e) {
                            this._p1 = t >= 1 ? t : 1,
                            this._p2 = (e || n) / (t < 1 ? t : 1),
                            this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0),
                            this._p2 = o / this._p2
                        }, !0)
                          , r = s.prototype = new t;
                        return r.constructor = s,
                        r.getRatio = i,
                        r.config = function(t, e) {
                            return new s(t,e)
                        }
                        ,
                        s
                    }
                    ,
                    p("Elastic", s("ElasticOut", function(t) {
                        return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                    }, .3), s("ElasticIn", function(t) {
                        return -(this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2))
                    }, .3), s("ElasticInOut", function(t) {
                        return (t *= 2) < 1 ? -.5 * (this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)) : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                    }, .45)),
                    p("Expo", u("ExpoOut", function(t) {
                        return 1 - Math.pow(2, -10 * t)
                    }), u("ExpoIn", function(t) {
                        return Math.pow(2, 10 * (t - 1)) - .001
                    }), u("ExpoInOut", function(t) {
                        return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                    })),
                    p("Sine", u("SineOut", function(t) {
                        return Math.sin(t * l)
                    }), u("SineIn", function(t) {
                        return -Math.cos(t * l) + 1
                    }), u("SineInOut", function(t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                    })),
                    h("easing.EaseLookup", {
                        find: function(e) {
                            return t.map[e]
                        }
                    }, !0),
                    c(r.SlowMo, "SlowMo", "ease,"),
                    c(n, "RoughEase", "ease,"),
                    c(e, "SteppedEase", "ease,"),
                    d
                }, !0)
            }),
            i._gsDefine && i._gsQueue.pop()(),
            function(t, i) {
                "use strict";
                var n = {}
                  , s = t.GreenSockGlobals = t.GreenSockGlobals || t;
                if (!s.TweenLite) {
                    var r, a, o, l, h, u = function(t) {
                        var e, i = t.split("."), n = s;
                        for (e = 0; e < i.length; e++)
                            n[i[e]] = n = n[i[e]] || {};
                        return n
                    }, c = u("com.greensock"), p = 1e-10, f = function(t) {
                        var e, i = [], n = t.length;
                        for (e = 0; e !== n; i.push(t[e++]))
                            ;
                        return i
                    }, _ = function() {}, d = function() {
                        var t = Object.prototype.toString
                          , e = t.call([]);
                        return function(i) {
                            return null != i && (i instanceof Array || "object" == typeof i && !!i.push && t.call(i) === e)
                        }
                    }(), m = {}, g = function(r, a, o, l) {
                        this.sc = m[r] ? m[r].sc : [],
                        m[r] = this,
                        this.gsClass = null ,
                        this.func = o;
                        var h = [];
                        this.check = function(c) {
                            for (var p, f, _, d, y, v = a.length, w = v; --v > -1; )
                                (p = m[a[v]] || new g(a[v],[])).gsClass ? (h[v] = p.gsClass,
                                w--) : c && p.sc.push(this);
                            if (0 === w && o) {
                                if (f = ("com.greensock." + r).split("."),
                                _ = f.pop(),
                                d = u(f.join("."))[_] = this.gsClass = o.apply(o, h),
                                l)
                                    if (s[_] = n[_] = d,
                                    y = "undefined" != typeof e && e.exports,
                                    !y && "function" == typeof define && define.amd)
                                        define((t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
                                            return d
                                        });
                                    else if (y)
                                        if (r === i) {
                                            e.exports = n[i] = d;
                                            for (v in n)
                                                d[v] = n[v]
                                        } else
                                            n[i] && (n[i][_] = d);
                                for (v = 0; v < this.sc.length; v++)
                                    this.sc[v].check()
                            }
                        }
                        ,
                        this.check(!0)
                    }, y = t._gsDefine = function(t, e, i, n) {
                        return new g(t,e,i,n)
                    }
                    , v = c._class = function(t, e, i) {
                        return e = e || function() {}
                        ,
                        y(t, [], function() {
                            return e
                        }, i),
                        e
                    }
                    ;
                    y.globals = s;
                    var w = [0, 0, 1, 1]
                      , T = v("easing.Ease", function(t, e, i, n) {
                        this._func = t,
                        this._type = i || 0,
                        this._power = n || 0,
                        this._params = e ? w.concat(e) : w
                    }, !0)
                      , x = T.map = {}
                      , b = T.register = function(t, e, i, n) {
                        for (var s, r, a, o, l = e.split(","), h = l.length, u = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1; )
                            for (r = l[h],
                            s = n ? v("easing." + r, null , !0) : c.easing[r] || {},
                            a = u.length; --a > -1; )
                                o = u[a],
                                x[r + "." + o] = x[o + r] = s[o] = t.getRatio ? t : t[o] || new t
                    }
                    ;
                    for (o = T.prototype,
                    o._calcEnd = !1,
                    o.getRatio = function(t) {
                        if (this._func)
                            return this._params[0] = t,
                            this._func.apply(null , this._params);
                        var e = this._type
                          , i = this._power
                          , n = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                        return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n),
                        1 === e ? 1 - n : 2 === e ? n : t < .5 ? n / 2 : 1 - n / 2
                    }
                    ,
                    r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
                    a = r.length; --a > -1; )
                        o = r[a] + ",Power" + a,
                        b(new T(null ,null ,1,a), o, "easeOut", !0),
                        b(new T(null ,null ,2,a), o, "easeIn" + (0 === a ? ",easeNone" : "")),
                        b(new T(null ,null ,3,a), o, "easeInOut");
                    x.linear = c.easing.Linear.easeIn,
                    x.swing = c.easing.Quad.easeInOut;
                    var P = v("events.EventDispatcher", function(t) {
                        this._listeners = {},
                        this._eventTarget = t || this
                    });
                    o = P.prototype,
                    o.addEventListener = function(t, e, i, n, s) {
                        s = s || 0;
                        var r, a, o = this._listeners[t], u = 0;
                        for (this !== l || h || l.wake(),
                        null == o && (this._listeners[t] = o = []),
                        a = o.length; --a > -1; )
                            r = o[a],
                            r.c === e && r.s === i ? o.splice(a, 1) : 0 === u && r.pr < s && (u = a + 1);
                        o.splice(u, 0, {
                            c: e,
                            s: i,
                            up: n,
                            pr: s
                        })
                    }
                    ,
                    o.removeEventListener = function(t, e) {
                        var i, n = this._listeners[t];
                        if (n)
                            for (i = n.length; --i > -1; )
                                if (n[i].c === e)
                                    return void n.splice(i, 1)
                    }
                    ,
                    o.dispatchEvent = function(t) {
                        var e, i, n, s = this._listeners[t];
                        if (s)
                            for (e = s.length,
                            e > 1 && (s = s.slice(0)),
                            i = this._eventTarget; --e > -1; )
                                n = s[e],
                                n && (n.up ? n.c.call(n.s || i, {
                                    type: t,
                                    target: i
                                }) : n.c.call(n.s || i))
                    }
                    ;
                    var k = t.requestAnimationFrame
                      , O = t.cancelAnimationFrame
                      , S = Date.now || function() {
                        return (new Date).getTime()
                    }
                      , C = S();
                    for (r = ["ms", "moz", "webkit", "o"],
                    a = r.length; --a > -1 && !k; )
                        k = t[r[a] + "RequestAnimationFrame"],
                        O = t[r[a] + "CancelAnimationFrame"] || t[r[a] + "CancelRequestAnimationFrame"];
                    v("Ticker", function(t, e) {
                        var i, n, s, r, a, o = this, u = S(), c = !(e === !1 || !k) && "auto", f = 500, d = 33, m = "tick", g = function(t) {
                            var e, l, h = S() - C;
                            h > f && (u += h - d),
                            C += h,
                            o.time = (C - u) / 1e3,
                            e = o.time - a,
                            (!i || e > 0 || t === !0) && (o.frame++,
                            a += e + (e >= r ? .004 : r - e),
                            l = !0),
                            t !== !0 && (s = n(g)),
                            l && o.dispatchEvent(m)
                        };
                        P.call(o),
                        o.time = o.frame = 0,
                        o.tick = function() {
                            g(!0)
                        }
                        ,
                        o.lagSmoothing = function(t, e) {
                            f = t || 1 / p,
                            d = Math.min(e, f, 0)
                        }
                        ,
                        o.sleep = function() {
                            null != s && (c && O ? O(s) : clearTimeout(s),
                            n = _,
                            s = null ,
                            o === l && (h = !1))
                        }
                        ,
                        o.wake = function(t) {
                            null !== s ? o.sleep() : t ? u += -C + (C = S()) : o.frame > 10 && (C = S() - f + 5),
                            n = 0 === i ? _ : c && k ? k : function(t) {
                                return setTimeout(t, 1e3 * (a - o.time) + 1 | 0)
                            }
                            ,
                            o === l && (h = !0),
                            g(2)
                        }
                        ,
                        o.fps = function(t) {
                            return arguments.length ? (i = t,
                            r = 1 / (i || 60),
                            a = this.time + r,
                            void o.wake()) : i
                        }
                        ,
                        o.useRAF = function(t) {
                            return arguments.length ? (o.sleep(),
                            c = t,
                            void o.fps(i)) : c
                        }
                        ,
                        o.fps(t),
                        setTimeout(function() {
                            "auto" === c && o.frame < 5 && "hidden" !== document.visibilityState && o.useRAF(!1)
                        }, 1500)
                    }),
                    o = c.Ticker.prototype = new c.events.EventDispatcher,
                    o.constructor = c.Ticker;
                    var A = v("core.Animation", function(t, e) {
                        if (this.vars = e = e || {},
                        this._duration = this._totalDuration = t || 0,
                        this._delay = Number(e.delay) || 0,
                        this._timeScale = 1,
                        this._active = e.immediateRender === !0,
                        this.data = e.data,
                        this._reversed = e.reversed === !0,
                        H) {
                            h || l.wake();
                            var i = this.vars.useFrames ? V : H;
                            i.add(this, i._time),
                            this.vars.paused && this.paused(!0)
                        }
                    });
                    l = A.ticker = new c.Ticker,
                    o = A.prototype,
                    o._dirty = o._gc = o._initted = o._paused = !1,
                    o._totalTime = o._time = 0,
                    o._rawPrevTime = -1,
                    o._next = o._last = o._onUpdate = o._timeline = o.timeline = null ,
                    o._paused = !1;
                    var R = function() {
                        h && S() - C > 2e3 && l.wake(),
                        setTimeout(R, 2e3)
                    };
                    R(),
                    o.play = function(t, e) {
                        return null != t && this.seek(t, e),
                        this.reversed(!1).paused(!1)
                    }
                    ,
                    o.pause = function(t, e) {
                        return null != t && this.seek(t, e),
                        this.paused(!0)
                    }
                    ,
                    o.resume = function(t, e) {
                        return null != t && this.seek(t, e),
                        this.paused(!1)
                    }
                    ,
                    o.seek = function(t, e) {
                        return this.totalTime(Number(t), e !== !1)
                    }
                    ,
                    o.restart = function(t, e) {
                        return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, e !== !1, !0)
                    }
                    ,
                    o.reverse = function(t, e) {
                        return null != t && this.seek(t || this.totalDuration(), e),
                        this.reversed(!0).paused(!1)
                    }
                    ,
                    o.render = function(t, e, i) {}
                    ,
                    o.invalidate = function() {
                        return this._time = this._totalTime = 0,
                        this._initted = this._gc = !1,
                        this._rawPrevTime = -1,
                        !this._gc && this.timeline || this._enabled(!0),
                        this
                    }
                    ,
                    o.isActive = function() {
                        var t, e = this._timeline, i = this._startTime;
                        return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime()) >= i && t < i + this.totalDuration() / this._timeScale
                    }
                    ,
                    o._enabled = function(t, e) {
                        return h || l.wake(),
                        this._gc = !t,
                        this._active = this.isActive(),
                        e !== !0 && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                        !1
                    }
                    ,
                    o._kill = function(t, e) {
                        return this._enabled(!1, !1);
                    }
                    ,
                    o.kill = function(t, e) {
                        return this._kill(t, e),
                        this
                    }
                    ,
                    o._uncache = function(t) {
                        for (var e = t ? this : this.timeline; e; )
                            e._dirty = !0,
                            e = e.timeline;
                        return this
                    }
                    ,
                    o._swapSelfInParams = function(t) {
                        for (var e = t.length, i = t.concat(); --e > -1; )
                            "{self}" === t[e] && (i[e] = this);
                        return i
                    }
                    ,
                    o._callback = function(t) {
                        var e = this.vars
                          , i = e[t]
                          , n = e[t + "Params"]
                          , s = e[t + "Scope"] || e.callbackScope || this
                          , r = n ? n.length : 0;
                        switch (r) {
                        case 0:
                            i.call(s);
                            break;
                        case 1:
                            i.call(s, n[0]);
                            break;
                        case 2:
                            i.call(s, n[0], n[1]);
                            break;
                        default:
                            i.apply(s, n)
                        }
                    }
                    ,
                    o.eventCallback = function(t, e, i, n) {
                        if ("on" === (t || "").substr(0, 2)) {
                            var s = this.vars;
                            if (1 === arguments.length)
                                return s[t];
                            null == e ? delete s[t] : (s[t] = e,
                            s[t + "Params"] = d(i) && i.join("").indexOf("{self}") !== -1 ? this._swapSelfInParams(i) : i,
                            s[t + "Scope"] = n),
                            "onUpdate" === t && (this._onUpdate = e)
                        }
                        return this
                    }
                    ,
                    o.delay = function(t) {
                        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
                        this._delay = t,
                        this) : this._delay
                    }
                    ,
                    o.duration = function(t) {
                        return arguments.length ? (this._duration = this._totalDuration = t,
                        this._uncache(!0),
                        this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                        this) : (this._dirty = !1,
                        this._duration)
                    }
                    ,
                    o.totalDuration = function(t) {
                        return this._dirty = !1,
                        arguments.length ? this.duration(t) : this._totalDuration
                    }
                    ,
                    o.time = function(t, e) {
                        return arguments.length ? (this._dirty && this.totalDuration(),
                        this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
                    }
                    ,
                    o.totalTime = function(t, e, i) {
                        if (h || l.wake(),
                        !arguments.length)
                            return this._totalTime;
                        if (this._timeline) {
                            if (t < 0 && !i && (t += this.totalDuration()),
                            this._timeline.smoothChildTiming) {
                                this._dirty && this.totalDuration();
                                var n = this._totalDuration
                                  , s = this._timeline;
                                if (t > n && !i && (t = n),
                                this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? n - t : t) / this._timeScale,
                                s._dirty || this._uncache(!1),
                                s._timeline)
                                    for (; s._timeline; )
                                        s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0),
                                        s = s._timeline
                            }
                            this._gc && this._enabled(!0, !1),
                            this._totalTime === t && 0 !== this._duration || (D.length && G(),
                            this.render(t, e, !1),
                            D.length && G())
                        }
                        return this
                    }
                    ,
                    o.progress = o.totalProgress = function(t, e) {
                        var i = this.duration();
                        return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
                    }
                    ,
                    o.startTime = function(t) {
                        return arguments.length ? (t !== this._startTime && (this._startTime = t,
                        this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
                        this) : this._startTime
                    }
                    ,
                    o.endTime = function(t) {
                        return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
                    }
                    ,
                    o.timeScale = function(t) {
                        if (!arguments.length)
                            return this._timeScale;
                        if (t = t || p,
                        this._timeline && this._timeline.smoothChildTiming) {
                            var e = this._pauseTime
                              , i = e || 0 === e ? e : this._timeline.totalTime();
                            this._startTime = i - (i - this._startTime) * this._timeScale / t
                        }
                        return this._timeScale = t,
                        this._uncache(!1)
                    }
                    ,
                    o.reversed = function(t) {
                        return arguments.length ? (t != this._reversed && (this._reversed = t,
                        this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
                        this) : this._reversed
                    }
                    ,
                    o.paused = function(t) {
                        if (!arguments.length)
                            return this._paused;
                        var e, i, n = this._timeline;
                        return t != this._paused && n && (h || t || l.wake(),
                        e = n.rawTime(),
                        i = e - this._pauseTime,
                        !t && n.smoothChildTiming && (this._startTime += i,
                        this._uncache(!1)),
                        this._pauseTime = t ? e : null ,
                        this._paused = t,
                        this._active = this.isActive(),
                        !t && 0 !== i && this._initted && this.duration() && (e = n.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale,
                        this.render(e, e === this._totalTime, !0))),
                        this._gc && !t && this._enabled(!0, !1),
                        this
                    }
                    ;
                    var I = v("core.SimpleTimeline", function(t) {
                        A.call(this, 0, t),
                        this.autoRemoveChildren = this.smoothChildTiming = !0
                    });
                    o = I.prototype = new A,
                    o.constructor = I,
                    o.kill()._gc = !1,
                    o._first = o._last = o._recent = null ,
                    o._sortChildren = !1,
                    o.add = o.insert = function(t, e, i, n) {
                        var s, r;
                        if (t._startTime = Number(e || 0) + t._delay,
                        t._paused && this !== t._timeline && (t._pauseTime = t._startTime + (this.rawTime() - t._startTime) / t._timeScale),
                        t.timeline && t.timeline._remove(t, !0),
                        t.timeline = t._timeline = this,
                        t._gc && t._enabled(!0, !0),
                        s = this._last,
                        this._sortChildren)
                            for (r = t._startTime; s && s._startTime > r; )
                                s = s._prev;
                        return s ? (t._next = s._next,
                        s._next = t) : (t._next = this._first,
                        this._first = t),
                        t._next ? t._next._prev = t : this._last = t,
                        t._prev = s,
                        this._recent = t,
                        this._timeline && this._uncache(!0),
                        this
                    }
                    ,
                    o._remove = function(t, e) {
                        return t.timeline === this && (e || t._enabled(!1, !0),
                        t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
                        t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
                        t._next = t._prev = t.timeline = null ,
                        t === this._recent && (this._recent = this._last),
                        this._timeline && this._uncache(!0)),
                        this
                    }
                    ,
                    o.render = function(t, e, i) {
                        var n, s = this._first;
                        for (this._totalTime = this._time = this._rawPrevTime = t; s; )
                            n = s._next,
                            (s._active || t >= s._startTime && !s._paused) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                            s = n
                    }
                    ,
                    o.rawTime = function() {
                        return h || l.wake(),
                        this._totalTime
                    }
                    ;
                    var M = v("TweenLite", function(e, i, n) {
                        if (A.call(this, i, n),
                        this.render = M.prototype.render,
                        null == e)
                            throw "Cannot tween a null target.";
                        this.target = e = "string" != typeof e ? e : M.selector(e) || e;
                        var s, r, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
                        if (this._overwrite = l = null == l ? q[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : q[l],
                        (o || e instanceof Array || e.push && d(e)) && "number" != typeof e[0])
                            for (this._targets = a = f(e),
                            this._propLookup = [],
                            this._siblings = [],
                            s = 0; s < a.length; s++)
                                r = a[s],
                                r ? "string" != typeof r ? r.length && r !== t && r[0] && (r[0] === t || r[0].nodeType && r[0].style && !r.nodeType) ? (a.splice(s--, 1),
                                this._targets = a = a.concat(f(r))) : (this._siblings[s] = Z(r, this, !1),
                                1 === l && this._siblings[s].length > 1 && J(r, this, null , 1, this._siblings[s])) : (r = a[s--] = M.selector(r),
                                "string" == typeof r && a.splice(s + 1, 1)) : a.splice(s--, 1);
                        else
                            this._propLookup = {},
                            this._siblings = Z(e, this, !1),
                            1 === l && this._siblings.length > 1 && J(e, this, null , 1, this._siblings);
                        (this.vars.immediateRender || 0 === i && 0 === this._delay && this.vars.immediateRender !== !1) && (this._time = -p,
                        this.render(Math.min(0, -this._delay)))
                    }, !0)
                      , z = function(e) {
                        return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
                    }
                      , j = function(t, e) {
                        var i, n = {};
                        for (i in t)
                            $[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!X[i] || X[i] && X[i]._autoCSS) || (n[i] = t[i],
                            delete t[i]);
                        t.css = n
                    };
                    o = M.prototype = new A,
                    o.constructor = M,
                    o.kill()._gc = !1,
                    o.ratio = 0,
                    o._firstPT = o._targets = o._overwrittenProps = o._startAt = null ,
                    o._notifyPluginsOfEnabled = o._lazy = !1,
                    M.version = "1.19.0",
                    M.defaultEase = o._ease = new T(null ,null ,1,1),
                    M.defaultOverwrite = "auto",
                    M.ticker = l,
                    M.autoSleep = 120,
                    M.lagSmoothing = function(t, e) {
                        l.lagSmoothing(t, e)
                    }
                    ,
                    M.selector = t.$ || t.jQuery || function(e) {
                        var i = t.$ || t.jQuery;
                        return i ? (M.selector = i,
                        i(e)) : "undefined" == typeof document ? e : document.querySelectorAll ? document.querySelectorAll(e) : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e)
                    }
                    ;
                    var D = []
                      , L = {}
                      , E = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
                      , B = function(t) {
                        for (var e, i = this._firstPT, n = 1e-6; i; )
                            e = i.blob ? t ? this.join("") : this.start : i.c * t + i.s,
                            i.m ? e = i.m(e, this._target || i.t) : e < n && e > -n && (e = 0),
                            i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
                            i = i._next
                    }
                      , F = function(t, e, i, n) {
                        var s, r, a, o, l, h, u, c = [t, e], p = 0, f = "", _ = 0;
                        for (c.start = t,
                        i && (i(c),
                        t = c[0],
                        e = c[1]),
                        c.length = 0,
                        s = t.match(E) || [],
                        r = e.match(E) || [],
                        n && (n._next = null ,
                        n.blob = 1,
                        c._firstPT = c._applyPT = n),
                        l = r.length,
                        o = 0; o < l; o++)
                            u = r[o],
                            h = e.substr(p, e.indexOf(u, p) - p),
                            f += h || !o ? h : ",",
                            p += h.length,
                            _ ? _ = (_ + 1) % 5 : "rgba(" === h.substr(-5) && (_ = 1),
                            u === s[o] || s.length <= o ? f += u : (f && (c.push(f),
                            f = ""),
                            a = parseFloat(s[o]),
                            c.push(a),
                            c._firstPT = {
                                _next: c._firstPT,
                                t: c,
                                p: c.length - 1,
                                s: a,
                                c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - a) || 0,
                                f: 0,
                                m: _ && _ < 4 ? Math.round : 0
                            }),
                            p += u.length;
                        return f += e.substr(p),
                        f && c.push(f),
                        c.setRatio = B,
                        c
                    }
                      , N = function(t, e, i, n, s, r, a, o, l) {
                        "function" == typeof n && (n = n(l || 0, t));
                        var h, u, c = "get" === i ? t[e] : i, p = typeof t[e], f = "string" == typeof n && "=" === n.charAt(1), _ = {
                            t: t,
                            p: e,
                            s: c,
                            f: "function" === p,
                            pg: 0,
                            n: s || e,
                            m: r ? "function" == typeof r ? r : Math.round : 0,
                            pr: 0,
                            c: f ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
                        };
                        if ("number" !== p && ("function" === p && "get" === i && (u = e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3),
                        _.s = c = a ? t[u](a) : t[u]()),
                        "string" == typeof c && (a || isNaN(c)) ? (_.fp = a,
                        h = F(c, n, o || M.defaultStringFilter, _),
                        _ = {
                            t: h,
                            p: "setRatio",
                            s: 0,
                            c: 1,
                            f: 2,
                            pg: 0,
                            n: s || e,
                            pr: 0,
                            m: 0
                        }) : f || (_.s = parseFloat(c),
                        _.c = parseFloat(n) - _.s || 0)),
                        _.c)
                            return (_._next = this._firstPT) && (_._next._prev = _),
                            this._firstPT = _,
                            _
                    }
                      , W = M._internals = {
                        isArray: d,
                        isSelector: z,
                        lazyTweens: D,
                        blobDif: F
                    }
                      , X = M._plugins = {}
                      , Y = W.tweenLookup = {}
                      , U = 0
                      , $ = W.reservedProps = {
                        ease: 1,
                        delay: 1,
                        overwrite: 1,
                        onComplete: 1,
                        onCompleteParams: 1,
                        onCompleteScope: 1,
                        useFrames: 1,
                        runBackwards: 1,
                        startAt: 1,
                        onUpdate: 1,
                        onUpdateParams: 1,
                        onUpdateScope: 1,
                        onStart: 1,
                        onStartParams: 1,
                        onStartScope: 1,
                        onReverseComplete: 1,
                        onReverseCompleteParams: 1,
                        onReverseCompleteScope: 1,
                        onRepeat: 1,
                        onRepeatParams: 1,
                        onRepeatScope: 1,
                        easeParams: 1,
                        yoyo: 1,
                        immediateRender: 1,
                        repeat: 1,
                        repeatDelay: 1,
                        data: 1,
                        paused: 1,
                        reversed: 1,
                        autoCSS: 1,
                        lazy: 1,
                        onOverwrite: 1,
                        callbackScope: 1,
                        stringFilter: 1,
                        id: 1
                    }
                      , q = {
                        none: 0,
                        all: 1,
                        auto: 2,
                        concurrent: 3,
                        allOnStart: 4,
                        preexisting: 5,
                        "true": 1,
                        "false": 0
                    }
                      , V = A._rootFramesTimeline = new I
                      , H = A._rootTimeline = new I
                      , Q = 30
                      , G = W.lazyRender = function() {
                        var t, e = D.length;
                        for (L = {}; --e > -1; )
                            t = D[e],
                            t && t._lazy !== !1 && (t.render(t._lazy[0], t._lazy[1], !0),
                            t._lazy = !1);
                        D.length = 0
                    }
                    ;
                    H._startTime = l.time,
                    V._startTime = l.frame,
                    H._active = V._active = !0,
                    setTimeout(G, 1),
                    A._updateRoot = M.render = function() {
                        var t, e, i;
                        if (D.length && G(),
                        H.render((l.time - H._startTime) * H._timeScale, !1, !1),
                        V.render((l.frame - V._startTime) * V._timeScale, !1, !1),
                        D.length && G(),
                        l.frame >= Q) {
                            Q = l.frame + (parseInt(M.autoSleep, 10) || 120);
                            for (i in Y) {
                                for (e = Y[i].tweens,
                                t = e.length; --t > -1; )
                                    e[t]._gc && e.splice(t, 1);
                                0 === e.length && delete Y[i]
                            }
                            if (i = H._first,
                            (!i || i._paused) && M.autoSleep && !V._first && 1 === l._listeners.tick.length) {
                                for (; i && i._paused; )
                                    i = i._next;
                                i || l.sleep()
                            }
                        }
                    }
                    ,
                    l.addEventListener("tick", A._updateRoot);
                    var Z = function(t, e, i) {
                        var n, s, r = t._gsTweenID;
                        if (Y[r || (t._gsTweenID = r = "t" + U++)] || (Y[r] = {
                            target: t,
                            tweens: []
                        }),
                        e && (n = Y[r].tweens,
                        n[s = n.length] = e,
                        i))
                            for (; --s > -1; )
                                n[s] === e && n.splice(s, 1);
                        return Y[r].tweens
                    }
                      , K = function(t, e, i, n) {
                        var s, r, a = t.vars.onOverwrite;
                        return a && (s = a(t, e, i, n)),
                        a = M.onOverwrite,
                        a && (r = a(t, e, i, n)),
                        s !== !1 && r !== !1
                    }
                      , J = function(t, e, i, n, s) {
                        var r, a, o, l;
                        if (1 === n || n >= 4) {
                            for (l = s.length,
                            r = 0; r < l; r++)
                                if ((o = s[r]) !== e)
                                    o._gc || o._kill(null , t, e) && (a = !0);
                                else if (5 === n)
                                    break;
                            return a
                        }
                        var h, u = e._startTime + p, c = [], f = 0, _ = 0 === e._duration;
                        for (r = s.length; --r > -1; )
                            (o = s[r]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || tt(e, 0, _),
                            0 === tt(o, h, _) && (c[f++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((_ || !o._initted) && u - o._startTime <= 2e-10 || (c[f++] = o)));
                        for (r = f; --r > -1; )
                            if (o = c[r],
                            2 === n && o._kill(i, t, e) && (a = !0),
                            2 !== n || !o._firstPT && o._initted) {
                                if (2 !== n && !K(o, e))
                                    continue;
                                o._enabled(!1, !1) && (a = !0)
                            }
                        return a
                    }
                      , tt = function(t, e, i) {
                        for (var n = t._timeline, s = n._timeScale, r = t._startTime; n._timeline; ) {
                            if (r += n._startTime,
                            s *= n._timeScale,
                            n._paused)
                                return -100;
                            n = n._timeline
                        }
                        return r /= s,
                        r > e ? r - e : i && r === e || !t._initted && r - e < 2 * p ? p : (r += t.totalDuration() / t._timeScale / s) > e + p ? 0 : r - e - p
                    };
                    o._init = function() {
                        var t, e, i, n, s, r, a = this.vars, o = this._overwrittenProps, l = this._duration, h = !!a.immediateRender, u = a.ease;
                        if (a.startAt) {
                            this._startAt && (this._startAt.render(-1, !0),
                            this._startAt.kill()),
                            s = {};
                            for (n in a.startAt)
                                s[n] = a.startAt[n];
                            if (s.overwrite = !1,
                            s.immediateRender = !0,
                            s.lazy = h && a.lazy !== !1,
                            s.startAt = s.delay = null ,
                            this._startAt = M.to(this.target, 0, s),
                            h)
                                if (this._time > 0)
                                    this._startAt = null ;
                                else if (0 !== l)
                                    return
                        } else if (a.runBackwards && 0 !== l)
                            if (this._startAt)
                                this._startAt.render(-1, !0),
                                this._startAt.kill(),
                                this._startAt = null ;
                            else {
                                0 !== this._time && (h = !1),
                                i = {};
                                for (n in a)
                                    $[n] && "autoCSS" !== n || (i[n] = a[n]);
                                if (i.overwrite = 0,
                                i.data = "isFromStart",
                                i.lazy = h && a.lazy !== !1,
                                i.immediateRender = h,
                                this._startAt = M.to(this.target, 0, i),
                                h) {
                                    if (0 === this._time)
                                        return
                                } else
                                    this._startAt._init(),
                                    this._startAt._enabled(!1),
                                    this.vars.immediateRender && (this._startAt = null )
                            }
                        if (this._ease = u = u ? u instanceof T ? u : "function" == typeof u ? new T(u,a.easeParams) : x[u] || M.defaultEase : M.defaultEase,
                        a.easeParams instanceof Array && u.config && (this._ease = u.config.apply(u, a.easeParams)),
                        this._easeType = this._ease._type,
                        this._easePower = this._ease._power,
                        this._firstPT = null ,
                        this._targets)
                            for (r = this._targets.length,
                            t = 0; t < r; t++)
                                this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null , t) && (e = !0);
                        else
                            e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
                        if (e && M._onPluginEvent("_onInitAllProps", this),
                        o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
                        a.runBackwards)
                            for (i = this._firstPT; i; )
                                i.s += i.c,
                                i.c = -i.c,
                                i = i._next;
                        this._onUpdate = a.onUpdate,
                        this._initted = !0
                    }
                    ,
                    o._initProps = function(e, i, n, s, r) {
                        var a, o, l, h, u, c;
                        if (null == e)
                            return !1;
                        L[e._gsTweenID] && G(),
                        this.vars.css || e.style && e !== t && e.nodeType && X.css && this.vars.autoCSS !== !1 && j(this.vars, e);
                        for (a in this.vars)
                            if (c = this.vars[a],
                            $[a])
                                c && (c instanceof Array || c.push && d(c)) && c.join("").indexOf("{self}") !== -1 && (this.vars[a] = c = this._swapSelfInParams(c, this));
                            else if (X[a] && (h = new X[a])._onInitTween(e, this.vars[a], this, r)) {
                                for (this._firstPT = u = {
                                    _next: this._firstPT,
                                    t: h,
                                    p: "setRatio",
                                    s: 0,
                                    c: 1,
                                    f: 1,
                                    n: a,
                                    pg: 1,
                                    pr: h._priority,
                                    m: 0
                                },
                                o = h._overwriteProps.length; --o > -1; )
                                    i[h._overwriteProps[o]] = this._firstPT;
                                (h._priority || h._onInitAllProps) && (l = !0),
                                (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0),
                                u._next && (u._next._prev = u)
                            } else
                                i[a] = N.call(this, e, a, "get", c, a, 0, null , this.vars.stringFilter, r);
                        return s && this._kill(s, e) ? this._initProps(e, i, n, s, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && J(e, this, i, this._overwrite, n) ? (this._kill(i, e),
                        this._initProps(e, i, n, s, r)) : (this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration) && (L[e._gsTweenID] = !0),
                        l)
                    }
                    ,
                    o.render = function(t, e, i) {
                        var n, s, r, a, o = this._time, l = this._duration, h = this._rawPrevTime;
                        if (t >= l - 1e-7)
                            this._totalTime = this._time = l,
                            this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                            this._reversed || (n = !0,
                            s = "onComplete",
                            i = i || this._timeline.autoRemoveChildren),
                            0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                            (h < 0 || t <= 0 && t >= -1e-7 || h === p && "isPause" !== this.data) && h !== t && (i = !0,
                            h > p && (s = "onReverseComplete")),
                            this._rawPrevTime = a = !e || t || h === t ? t : p);
                        else if (t < 1e-7)
                            this._totalTime = this._time = 0,
                            this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                            (0 !== o || 0 === l && h > 0) && (s = "onReverseComplete",
                            n = this._reversed),
                            t < 0 && (this._active = !1,
                            0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (h !== p || "isPause" !== this.data) && (i = !0),
                            this._rawPrevTime = a = !e || t || h === t ? t : p)),
                            this._initted || (i = !0);
                        else if (this._totalTime = this._time = t,
                        this._easeType) {
                            var u = t / l
                              , c = this._easeType
                              , f = this._easePower;
                            (1 === c || 3 === c && u >= .5) && (u = 1 - u),
                            3 === c && (u *= 2),
                            1 === f ? u *= u : 2 === f ? u *= u * u : 3 === f ? u *= u * u * u : 4 === f && (u *= u * u * u * u),
                            1 === c ? this.ratio = 1 - u : 2 === c ? this.ratio = u : t / l < .5 ? this.ratio = u / 2 : this.ratio = 1 - u / 2
                        } else
                            this.ratio = this._ease.getRatio(t / l);
                        if (this._time !== o || i) {
                            if (!this._initted) {
                                if (this._init(),
                                !this._initted || this._gc)
                                    return;
                                if (!i && this._firstPT && (this.vars.lazy !== !1 && this._duration || this.vars.lazy && !this._duration))
                                    return this._time = this._totalTime = o,
                                    this._rawPrevTime = h,
                                    D.push(this),
                                    void (this._lazy = [t, e]);
                                this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                            }
                            for (this._lazy !== !1 && (this._lazy = !1),
                            this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0),
                            0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, e, i) : s || (s = "_dummyGS")),
                            this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))),
                            r = this._firstPT; r; )
                                r.f ? r.t[r.p](r.c * this.ratio + r.s) : r.t[r.p] = r.c * this.ratio + r.s,
                                r = r._next;
                            this._onUpdate && (t < 0 && this._startAt && t !== -1e-4 && this._startAt.render(t, e, i),
                            e || (this._time !== o || n || i) && this._callback("onUpdate")),
                            s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && t !== -1e-4 && this._startAt.render(t, e, i),
                            n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                            this._active = !1),
                            !e && this.vars[s] && this._callback(s),
                            0 === l && this._rawPrevTime === p && a !== p && (this._rawPrevTime = 0)))
                        }
                    }
                    ,
                    o._kill = function(t, e, i) {
                        if ("all" === t && (t = null ),
                        null == t && (null == e || e === this.target))
                            return this._lazy = !1,
                            this._enabled(!1, !1);
                        e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
                        var n, s, r, a, o, l, h, u, c, p = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
                        if ((d(e) || z(e)) && "number" != typeof e[0])
                            for (n = e.length; --n > -1; )
                                this._kill(t, e[n], i) && (l = !0);
                        else {
                            if (this._targets) {
                                for (n = this._targets.length; --n > -1; )
                                    if (e === this._targets[n]) {
                                        o = this._propLookup[n] || {},
                                        this._overwrittenProps = this._overwrittenProps || [],
                                        s = this._overwrittenProps[n] = t ? this._overwrittenProps[n] || {} : "all";
                                        break
                                    }
                            } else {
                                if (e !== this.target)
                                    return !1;
                                o = this._propLookup,
                                s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                            }
                            if (o) {
                                if (h = t || o,
                                u = t !== s && "all" !== s && t !== o && ("object" != typeof t || !t._tempKill),
                                i && (M.onOverwrite || this.vars.onOverwrite)) {
                                    for (r in h)
                                        o[r] && (c || (c = []),
                                        c.push(r));
                                    if ((c || !t) && !K(this, i, e, c))
                                        return !1
                                }
                                for (r in h)
                                    (a = o[r]) && (p && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s,
                                    l = !0),
                                    a.pg && a.t._kill(h) && (l = !0),
                                    a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next),
                                    a._next && (a._next._prev = a._prev),
                                    a._next = a._prev = null ),
                                    delete o[r]),
                                    u && (s[r] = 1);
                                !this._firstPT && this._initted && this._enabled(!1, !1)
                            }
                        }
                        return l
                    }
                    ,
                    o.invalidate = function() {
                        return this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this),
                        this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null ,
                        this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
                        this._propLookup = this._targets ? {} : [],
                        A.prototype.invalidate.call(this),
                        this.vars.immediateRender && (this._time = -p,
                        this.render(Math.min(0, -this._delay))),
                        this
                    }
                    ,
                    o._enabled = function(t, e) {
                        if (h || l.wake(),
                        t && this._gc) {
                            var i, n = this._targets;
                            if (n)
                                for (i = n.length; --i > -1; )
                                    this._siblings[i] = Z(n[i], this, !0);
                            else
                                this._siblings = Z(this.target, this, !0)
                        }
                        return A.prototype._enabled.call(this, t, e),
                        !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
                    }
                    ,
                    M.to = function(t, e, i) {
                        return new M(t,e,i)
                    }
                    ,
                    M.from = function(t, e, i) {
                        return i.runBackwards = !0,
                        i.immediateRender = 0 != i.immediateRender,
                        new M(t,e,i)
                    }
                    ,
                    M.fromTo = function(t, e, i, n) {
                        return n.startAt = i,
                        n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender,
                        new M(t,e,n)
                    }
                    ,
                    M.delayedCall = function(t, e, i, n, s) {
                        return new M(e,0,{
                            delay: t,
                            onComplete: e,
                            onCompleteParams: i,
                            callbackScope: n,
                            onReverseComplete: e,
                            onReverseCompleteParams: i,
                            immediateRender: !1,
                            lazy: !1,
                            useFrames: s,
                            overwrite: 0
                        })
                    }
                    ,
                    M.set = function(t, e) {
                        return new M(t,0,e)
                    }
                    ,
                    M.getTweensOf = function(t, e) {
                        if (null == t)
                            return [];
                        t = "string" != typeof t ? t : M.selector(t) || t;
                        var i, n, s, r;
                        if ((d(t) || z(t)) && "number" != typeof t[0]) {
                            for (i = t.length,
                            n = []; --i > -1; )
                                n = n.concat(M.getTweensOf(t[i], e));
                            for (i = n.length; --i > -1; )
                                for (r = n[i],
                                s = i; --s > -1; )
                                    r === n[s] && n.splice(i, 1)
                        } else
                            for (n = Z(t).concat(),
                            i = n.length; --i > -1; )
                                (n[i]._gc || e && !n[i].isActive()) && n.splice(i, 1);
                        return n
                    }
                    ,
                    M.killTweensOf = M.killDelayedCallsTo = function(t, e, i) {
                        "object" == typeof e && (i = e,
                        e = !1);
                        for (var n = M.getTweensOf(t, e), s = n.length; --s > -1; )
                            n[s]._kill(i, t)
                    }
                    ;
                    var et = v("plugins.TweenPlugin", function(t, e) {
                        this._overwriteProps = (t || "").split(","),
                        this._propName = this._overwriteProps[0],
                        this._priority = e || 0,
                        this._super = et.prototype
                    }, !0);
                    if (o = et.prototype,
                    et.version = "1.19.0",
                    et.API = 2,
                    o._firstPT = null ,
                    o._addTween = N,
                    o.setRatio = B,
                    o._kill = function(t) {
                        var e, i = this._overwriteProps, n = this._firstPT;
                        if (null != t[this._propName])
                            this._overwriteProps = [];
                        else
                            for (e = i.length; --e > -1; )
                                null != t[i[e]] && i.splice(e, 1);
                        for (; n; )
                            null != t[n.n] && (n._next && (n._next._prev = n._prev),
                            n._prev ? (n._prev._next = n._next,
                            n._prev = null ) : this._firstPT === n && (this._firstPT = n._next)),
                            n = n._next;
                        return !1
                    }
                    ,
                    o._mod = o._roundProps = function(t) {
                        for (var e, i = this._firstPT; i; )
                            e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")],
                            e && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e),
                            i = i._next
                    }
                    ,
                    M._onPluginEvent = function(t, e) {
                        var i, n, s, r, a, o = e._firstPT;
                        if ("_onInitAllProps" === t) {
                            for (; o; ) {
                                for (a = o._next,
                                n = s; n && n.pr > o.pr; )
                                    n = n._next;
                                (o._prev = n ? n._prev : r) ? o._prev._next = o : s = o,
                                (o._next = n) ? n._prev = o : r = o,
                                o = a
                            }
                            o = e._firstPT = s
                        }
                        for (; o; )
                            o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                            o = o._next;
                        return i
                    }
                    ,
                    et.activate = function(t) {
                        for (var e = t.length; --e > -1; )
                            t[e].API === et.API && (X[(new t[e])._propName] = t[e]);
                        return !0
                    }
                    ,
                    y.plugin = function(t) {
                        if (!(t && t.propName && t.init && t.API))
                            throw "illegal plugin definition.";
                        var e, i = t.propName, n = t.priority || 0, s = t.overwriteProps, r = {
                            init: "_onInitTween",
                            set: "setRatio",
                            kill: "_kill",
                            round: "_mod",
                            mod: "_mod",
                            initAll: "_onInitAllProps"
                        }, a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
                            et.call(this, i, n),
                            this._overwriteProps = s || []
                        }, t.global === !0), o = a.prototype = new et(i);
                        o.constructor = a,
                        a.API = t.API;
                        for (e in r)
                            "function" == typeof t[e] && (o[r[e]] = t[e]);
                        return a.version = t.version,
                        et.activate([a]),
                        a
                    }
                    ,
                    r = t._gsQueue) {
                        for (a = 0; a < r.length; a++)
                            r[a]();
                        for (o in m)
                            m[o].func || t.console.log("GSAP encountered missing dependency: " + o)
                    }
                    h = !1
                }
            }("undefined" != typeof e && e.exports && "undefined" != typeof t ? t : this || window, "TweenMax")
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {}],
    20: [function(t, e, i) {
        (function(i) {
            var n = "undefined" != typeof e && e.exports && "undefined" != typeof i ? i : this || window;
            (n._gsQueue || (n._gsQueue = [])).push(function() {
                "use strict";
                var t = document.documentElement
                  , e = window
                  , i = function(i, n) {
                    var s = "x" === n ? "Width" : "Height"
                      , r = "scroll" + s
                      , a = "client" + s
                      , o = document.body;
                    return i === e || i === t || i === o ? Math.max(t[r], o[r]) - (e["inner" + s] || t[a] || o[a]) : i[r] - i["offset" + s]
                }
                  , s = function(t) {
                    return "string" == typeof t && (t = TweenLite.selector(t)),
                    t.length && t !== e && t[0] && t[0].style && !t.nodeType && (t = t[0]),
                    t === e || t.nodeType && t.style ? t : null
                }
                  , r = function(i, n) {
                    var s = "scroll" + ("x" === n ? "Left" : "Top");
                    return i === e && (null != i.pageXOffset ? s = "page" + n.toUpperCase() + "Offset" : i = null != t[s] ? t : document.body),
                    function() {
                        return i[s]
                    }
                }
                  , a = function(i, n) {
                    var a = s(i).getBoundingClientRect()
                      , o = !n || n === e || n === document.body
                      , l = (o ? t : n).getBoundingClientRect()
                      , h = {
                        x: a.left - l.left,
                        y: a.top - l.top
                    };
                    return !o && n && (h.x += r(n, "x")(),
                    h.y += r(n, "y")()),
                    h
                }
                  , o = function(t, e, n) {
                    var s = typeof t;
                    return "number" === s || "string" === s && "=" === t.charAt(1) ? t : "max" === t ? i(e, n) : Math.min(i(e, n), a(t, e)[n])
                }
                  , l = n._gsDefine.plugin({
                    propName: "scrollTo",
                    API: 2,
                    version: "1.8.0",
                    init: function(t, i, n) {
                        return this._wdw = t === e,
                        this._target = t,
                        this._tween = n,
                        "object" != typeof i ? (i = {
                            y: i
                        },
                        "string" == typeof i.y && "max" !== i.y && "=" !== i.y.charAt(1) && (i.x = i.y)) : i.nodeType && (i = {
                            y: i,
                            x: i
                        }),
                        this.vars = i,
                        this._autoKill = i.autoKill !== !1,
                        this.getX = r(t, "x"),
                        this.getY = r(t, "y"),
                        this.x = this.xPrev = this.getX(),
                        this.y = this.yPrev = this.getY(),
                        null != i.x ? (this._addTween(this, "x", this.x, o(i.x, t, "x") - (i.offsetX || 0), "scrollTo_x", !0),
                        this._overwriteProps.push("scrollTo_x")) : this.skipX = !0,
                        null != i.y ? (this._addTween(this, "y", this.y, o(i.y, t, "y") - (i.offsetY || 0), "scrollTo_y", !0),
                        this._overwriteProps.push("scrollTo_y")) : this.skipY = !0,
                        !0
                    },
                    set: function(t) {
                        this._super.setRatio.call(this, t);
                        var n = this._wdw || !this.skipX ? this.getX() : this.xPrev
                          , s = this._wdw || !this.skipY ? this.getY() : this.yPrev
                          , r = s - this.yPrev
                          , a = n - this.xPrev
                          , o = l.autoKillThreshold;
                        this.x < 0 && (this.x = 0),
                        this.y < 0 && (this.y = 0),
                        this._autoKill && (!this.skipX && (a > o || a < -o) && n < i(this._target, "x") && (this.skipX = !0),
                        !this.skipY && (r > o || r < -o) && s < i(this._target, "y") && (this.skipY = !0),
                        this.skipX && this.skipY && (this._tween.kill(),
                        this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))),
                        this._wdw ? e.scrollTo(this.skipX ? n : this.x, this.skipY ? s : this.y) : (this.skipY || (this._target.scrollTop = this.y),
                        this.skipX || (this._target.scrollLeft = this.x)),
                        this.xPrev = this.x,
                        this.yPrev = this.y
                    }
                })
                  , h = l.prototype;
                l.max = i,
                l.getOffset = a,
                l.autoKillThreshold = 7,
                h._kill = function(t) {
                    return t.scrollTo_x && (this.skipX = !0),
                    t.scrollTo_y && (this.skipY = !0),
                    this._super._kill.call(this, t)
                }
            }),
            n._gsDefine && n._gsQueue.pop()(),
            function(i) {
                "use strict";
                var s = function() {
                    return (n.GreenSockGlobals || n)[i]
                };
                "function" == typeof define && define.amd ? define(["TweenLite"], s) : "undefined" != typeof e && e.exports && (t("../TweenLite.js"),
                e.exports = s())
            }("ScrollToPlugin")
        }
        ).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }
    , {
        "../TweenLite.js": 18
    }],
    21: [function(t, e, i) {
        "function" == typeof Object.create ? e.exports = function(t, e) {
            t.super_ = e,
            t.prototype = Object.create(e.prototype, {
                constructor: {
                    value: t,
                    enumerable: !1,
                    writable: !0,
                    configurable: !0
                }
            })
        }
        : e.exports = function(t, e) {
            t.super_ = e;
            var i = function() {};
            i.prototype = e.prototype,
            t.prototype = new i,
            t.prototype.constructor = t
        }
    }
    , {}],
    22: [function(t, e, i) {
        !function(t, i) {
            var n = i(t, t.document);
            t.lazySizes = n,
            "object" == typeof e && e.exports && (e.exports = n)
        }(window, function(t, e) {
            "use strict";
            if (e.getElementsByClassName) {
                var i, n = e.documentElement, s = t.Date, r = t.HTMLPictureElement, a = "addEventListener", o = "getAttribute", l = t[a], h = t.setTimeout, u = t.requestAnimationFrame || h, c = t.requestIdleCallback, p = /^picture$/i, f = ["load", "error", "lazyincluded", "_lazyloaded"], _ = {}, d = Array.prototype.forEach, m = function(t, e) {
                    return _[e] || (_[e] = new RegExp("(\\s|^)" + e + "(\\s|$)")),
                    _[e].test(t[o]("class") || "") && _[e]
                }, g = function(t, e) {
                    m(t, e) || t.setAttribute("class", (t[o]("class") || "").trim() + " " + e)
                }, y = function(t, e) {
                    var i;
                    (i = m(t, e)) && t.setAttribute("class", (t[o]("class") || "").replace(i, " "))
                }, v = function(t, e, i) {
                    var n = i ? a : "removeEventListener";
                    i && v(t, e),
                    f.forEach(function(i) {
                        t[n](i, e)
                    })
                }, w = function(t, i, n, s, r) {
                    var a = e.createEvent("CustomEvent");
                    return a.initCustomEvent(i, !s, !r, n || {}),
                    t.dispatchEvent(a),
                    a
                }, T = function(e, n) {
                    var s;
                    !r && (s = t.picturefill || i.pf) ? s({
                        reevaluate: !0,
                        elements: [e]
                    }) : n && n.src && (e.src = n.src)
                }, x = function(t, e) {
                    return (getComputedStyle(t, null ) || {})[e]
                }, b = function(t, e, n) {
                    for (n = n || t.offsetWidth; n < i.minSize && e && !t._lazysizesWidth; )
                        n = e.offsetWidth,
                        e = e.parentNode;
                    return n
                }, P = function() {
                    var t, i, n = [], s = function() {
                        var e;
                        for (t = !0,
                        i = !1; n.length; )
                            e = n.shift(),
                            e[0].apply(e[1], e[2]);
                        t = !1
                    };
                    return function(r) {
                        t ? r.apply(this, arguments) : (n.push([r, this, arguments]),
                        i || (i = !0,
                        (e.hidden ? h : u)(s)))
                    }
                }(), k = function(t, e) {
                    return e ? function() {
                        P(t)
                    }
                    : function() {
                        var e = this
                          , i = arguments;
                        P(function() {
                            t.apply(e, i)
                        })
                    }
                }, O = function(t) {
                    var e, i = 0, n = 125, r = 999, a = r, o = function() {
                        e = !1,
                        i = s.now(),
                        t()
                    }, l = c ? function() {
                        c(o, {
                            timeout: a
                        }),
                        a !== r && (a = r)
                    }
                    : k(function() {
                        h(o)
                    }, !0);
                    return function(t) {
                        var r;
                        (t = t === !0) && (a = 66),
                        e || (e = !0,
                        r = n - (s.now() - i),
                        r < 0 && (r = 0),
                        t || r < 9 && c ? l() : h(l, r))
                    }
                }, S = function(t) {
                    var e, i, n = 99, r = function() {
                        e = null ,
                        t()
                    }, a = function() {
                        var t = s.now() - i;
                        t < n ? h(a, n - t) : (c || r)(r)
                    };
                    return function() {
                        i = s.now(),
                        e || (e = h(a, n))
                    }
                }, C = function() {
                    var r, u, c, f, _, b, C, R, I, M, z, j, D, L, E, B = /^img$/i, F = /^iframe$/i, N = "onscroll"in t && !/glebot/.test(navigator.userAgent), W = 0, X = 0, Y = 0, U = 0, $ = function(t) {
                        Y--,
                        t && t.target && v(t.target, $),
                        (!t || Y < 0 || !t.target) && (Y = 0)
                    }, q = function(t, i) {
                        var s, r = t, a = "hidden" == x(e.body, "visibility") || "hidden" != x(t, "visibility");
                        for (I -= i,
                        j += i,
                        M -= i,
                        z += i; a && (r = r.offsetParent) && r != e.body && r != n; )
                            a = (x(r, "opacity") || 1) > 0,
                            a && "visible" != x(r, "overflow") && (s = r.getBoundingClientRect(),
                            a = z > s.left && M < s.right && j > s.top - 1 && I < s.bottom + 1);
                        return a
                    }, V = function() {
                        var t, e, s, a, l, h, p, f, d;
                        if ((_ = i.loadMode) && Y < 8 && (t = r.length)) {
                            e = 0,
                            U++,
                            null == L && ("expand"in i || (i.expand = n.clientHeight > 500 ? 500 : 400),
                            D = i.expand,
                            L = D * i.expFactor),
                            X < L && Y < 1 && U > 3 && _ > 2 ? (X = L,
                            U = 0) : X = _ > 1 && U > 2 && Y < 6 ? D : W;
                            for (; e < t; e++)
                                if (r[e] && !r[e]._lazyRace)
                                    if (N)
                                        if ((f = r[e][o]("data-expand")) && (h = 1 * f) || (h = X),
                                        d !== h && (C = innerWidth + h * E,
                                        R = innerHeight + h,
                                        p = h * -1,
                                        d = h),
                                        s = r[e].getBoundingClientRect(),
                                        (j = s.bottom) >= p && (I = s.top) <= R && (z = s.right) >= p * E && (M = s.left) <= C && (j || z || M || I) && (c && Y < 3 && !f && (_ < 3 || U < 4) || q(r[e], h))) {
                                            if (et(r[e]),
                                            l = !0,
                                            Y > 9)
                                                break
                                        } else
                                            !l && c && !a && Y < 4 && U < 4 && _ > 2 && (u[0] || i.preloadAfterLoad) && (u[0] || !f && (j || z || M || I || "auto" != r[e][o](i.sizesAttr))) && (a = u[0] || r[e]);
                                    else
                                        et(r[e]);
                            a && !l && et(a)
                        }
                    }, H = O(V), Q = function(t) {
                        g(t.target, i.loadedClass),
                        y(t.target, i.loadingClass),
                        v(t.target, Z)
                    }, G = k(Q), Z = function(t) {
                        G({
                            target: t.target
                        })
                    }, K = function(t, e) {
                        try {
                            t.contentWindow.location.replace(e)
                        } catch (i) {
                            t.src = e
                        }
                    }, J = function(t) {
                        var e, n, s = t[o](i.srcsetAttr);
                        (e = i.customMedia[t[o]("data-media") || t[o]("media")]) && t.setAttribute("media", e),
                        s && t.setAttribute("srcset", s),
                        e && (n = t.parentNode,
                        n.insertBefore(t.cloneNode(), t),
                        n.removeChild(t))
                    }, tt = k(function(t, e, n, s, r) {
                        var a, l, u, c, _, m;
                        (_ = w(t, "lazybeforeunveil", e)).defaultPrevented || (s && (n ? g(t, i.autosizesClass) : t.setAttribute("sizes", s)),
                        l = t[o](i.srcsetAttr),
                        a = t[o](i.srcAttr),
                        r && (u = t.parentNode,
                        c = u && p.test(u.nodeName || "")),
                        m = e.firesLoad || "src"in t && (l || a || c),
                        _ = {
                            target: t
                        },
                        m && (v(t, $, !0),
                        clearTimeout(f),
                        f = h($, 2500),
                        g(t, i.loadingClass),
                        v(t, Z, !0)),
                        c && d.call(u.getElementsByTagName("source"), J),
                        l ? t.setAttribute("srcset", l) : a && !c && (F.test(t.nodeName) ? K(t, a) : t.src = a),
                        (l || c) && T(t, {
                            src: a
                        })),
                        P(function() {
                            t._lazyRace && delete t._lazyRace,
                            y(t, i.lazyClass),
                            m && !t.complete || (m ? $(_) : Y--,
                            Q(_))
                        })
                    }), et = function(t) {
                        var e, n = B.test(t.nodeName), s = n && (t[o](i.sizesAttr) || t[o]("sizes")), r = "auto" == s;
                        (!r && c || !n || !t.src && !t.srcset || t.complete || m(t, i.errorClass)) && (e = w(t, "lazyunveilread").detail,
                        r && A.updateElem(t, !0, t.offsetWidth),
                        t._lazyRace = !0,
                        Y++,
                        tt(t, e, r, s, n))
                    }, it = function() {
                        if (!c) {
                            if (s.now() - b < 999)
                                return void h(it, 999);
                            var t = S(function() {
                                i.loadMode = 3,
                                H()
                            });
                            c = !0,
                            i.loadMode = 3,
                            H(),
                            l("scroll", function() {
                                3 == i.loadMode && (i.loadMode = 2),
                                t()
                            }, !0)
                        }
                    };
                    return {
                        _: function() {
                            b = s.now(),
                            r = e.getElementsByClassName(i.lazyClass),
                            u = e.getElementsByClassName(i.lazyClass + " " + i.preloadClass),
                            E = i.hFac,
                            l("scroll", H, !0),
                            l("resize", H, !0),
                            t.MutationObserver ? new MutationObserver(H).observe(n, {
                                childList: !0,
                                subtree: !0,
                                attributes: !0
                            }) : (n[a]("DOMNodeInserted", H, !0),
                            n[a]("DOMAttrModified", H, !0),
                            setInterval(H, 999)),
                            l("hashchange", H, !0),
                            ["focus", "mouseover", "click", "load", "transitionend", "animationend", "webkitAnimationEnd"].forEach(function(t) {
                                e[a](t, H, !0)
                            }),
                            /d$|^c/.test(e.readyState) ? it() : (l("load", it),
                            e[a]("DOMContentLoaded", H),
                            h(it, 2e4)),
                            H(r.length > 0)
                        },
                        checkElems: H,
                        unveil: et
                    }
                }(), A = function() {
                    var t, n = k(function(t, e, i, n) {
                        var s, r, a;
                        if (t._lazysizesWidth = n,
                        n += "px",
                        t.setAttribute("sizes", n),
                        p.test(e.nodeName || ""))
                            for (s = e.getElementsByTagName("source"),
                            r = 0,
                            a = s.length; r < a; r++)
                                s[r].setAttribute("sizes", n);
                        i.detail.dataAttr || T(t, i.detail)
                    }), s = function(t, e, i) {
                        var s, r = t.parentNode;
                        r && (i = b(t, r, i),
                        s = w(t, "lazybeforesizes", {
                            width: i,
                            dataAttr: !!e
                        }),
                        s.defaultPrevented || (i = s.detail.width,
                        i && i !== t._lazysizesWidth && n(t, r, s, i)))
                    }, r = function() {
                        var e, i = t.length;
                        if (i)
                            for (e = 0; e < i; e++)
                                s(t[e])
                    }, a = S(r);
                    return {
                        _: function() {
                            t = e.getElementsByClassName(i.autosizesClass),
                            l("resize", a)
                        },
                        checkElems: a,
                        updateElem: s
                    }
                }(), R = function() {
                    R.i || (R.i = !0,
                    A._(),
                    C._())
                };
                return function() {
                    var e, n = {
                        lazyClass: "lazyload",
                        loadedClass: "lazyloaded",
                        loadingClass: "lazyloading",
                        preloadClass: "lazypreload",
                        errorClass: "lazyerror",
                        autosizesClass: "lazyautosizes",
                        srcAttr: "data-src",
                        srcsetAttr: "data-srcset",
                        sizesAttr: "data-sizes",
                        minSize: 40,
                        customMedia: {},
                        init: !0,
                        expFactor: 1.5,
                        hFac: .8,
                        loadMode: 2
                    };
                    i = t.lazySizesConfig || t.lazysizesConfig || {};
                    for (e in n)
                        e in i || (i[e] = n[e]);
                    t.lazySizesConfig = i,
                    h(function() {
                        i.init && R()
                    })
                }(),
                {
                    cfg: i,
                    autoSizer: A,
                    loader: C,
                    init: R,
                    uP: T,
                    aC: g,
                    rC: y,
                    hC: m,
                    fire: w,
                    gW: b,
                    rAF: P
                }
            }
        })
    }
    , {}],
    23: [function(t, e, i) {
        var n = t("tiny-emitter")
          , s = t("inherits")
          , r = function() {};
        s(r, n),
        r.prototype.animateIn = function(t) {}
        ,
        r.prototype.onAnimateInComplete = function() {
            this.emit("animateInComplete")
        }
        ,
        r.prototype.animateOut = function(t) {}
        ,
        r.prototype.onAnimateOutComplete = function() {
            this.emit("animateOutComplete")
        }
        ,
        r.prototype.dispose = function() {
            this.off("animateInComplete").off("animateOutComplete")
        }
        ,
        e.exports = r
    }
    , {
        inherits: 21,
        "tiny-emitter": 33
    }],
    24: [function(t, e, i) {
        var n = t("tiny-emitter")
          , s = t("inherits")
          , r = t("./ScreenNavigatorItem.js")
          , a = t("./Transitions.js")
          , o = function() {
            this.items = {},
            this.currentItemId = null ,
            this.previousItemId = null ,
            this.currentScreen = null ,
            this.previousScreen = null ,
            this.transition = o.defaultTransition,
            this.transitionRunning = !1,
            this.transitionCancel = null
        };
        s(o, n),
        o.defaultTransition = a.none,
        o.prototype.addItem = function(t, e, i) {
            var n = new r(e,i);
            return this.items[t] = n,
            n
        }
        ,
        o.prototype.getItem = function(t) {
            return this.items[t]
        }
        ,
        o.prototype.showScreen = function(t, e, i) {
            if (!this.getItem(t))
                throw new Error("ScreenNavigator - the item with the id " + t + " doesn't exist");
            this.transitionRunning && this.onTransitionComplete(!0),
            this.currentScreen && (this.previousItemId = this.currentItemId,
            this.previousScreen = this.currentScreen),
            this.currentItemId = t,
            this.onScreenChange(),
            this.startTransition(e, i)
        }
        ,
        o.prototype.clearScreen = function(t) {
            this.currentScreen && (this.prevScreenId = this.currentScreenId,
            this.previousScreen = this.currentScreen,
            this.currentScreenId = null ,
            this.onScreenChange(),
            this.startTransition(t))
        }
        ,
        o.prototype.startTransition = function(t, e) {
            t = t || this.transition;
            var i = this.getItem(this.currentItemId);
            e && i.setOptions(e),
            this.currentScreen = i ? i.getScreen(e) : null ,
            this.transitionRunning = !0,
            this.emit("transitionStart"),
            this.transitionCancel = t(this.currentScreen, this.previousScreen, this.onTransitionComplete.bind(this))
        }
        ,
        o.prototype.onScreenChange = function() {
            this.emit("screenChange")
        }
        ,
        o.prototype.onTransitionComplete = function(t, e) {
            this.transitionRunning = !1,
            t && this.transitionCancel && this.transitionCancel(),
            this.previousScreen && (this.getItem(this.previousItemId).disposeScreen(this.previousScreen, !0),
            this.previousScreen = null ),
            e || (t ? this.emit("transitionCancel") : this.emit("transitionComplete")),
            this.transitionCancel = null
        }
        ,
        o.prototype.dispose = function() {
            this.transitionRunning && this.onTransitionComplete(!0, !0),
            this.currentScreen && (this.getItem(this.currentScreenId).disposeScreen(this.currentScreen, !0),
            this.currentScreen = null );
            for (var t in this.items)
                this.items[t].dispose()
        }
        ,
        e.exports = o,
        e.exports.AScreen = t("./AScreen.js"),
        e.exports.ScreenNavigatorItem = r,
        e.exports.Transitions = a
    }
    , {
        "./AScreen.js": 23,
        "./ScreenNavigatorItem.js": 25,
        "./Transitions.js": 26,
        inherits: 21,
        "tiny-emitter": 33
    }],
    25: [function(t, e, i) {
        var n = function(t, e) {
            this.screen = t,
            this.isInstance = "function" != typeof t,
            this.arguments = null ,
            this.properties = null ,
            this.canDispose = !this.isInstance,
            this.events = null ,
            this.setOptions(e)
        };
        n.prototype.setOptions = function(t) {
            for (var e in t)
                "undefined" != typeof this[e] && (this[e] = t[e])
        }
        ,
        n.prototype.getScreen = function() {
            function t() {
                n.apply(this, i)
            }
            var e;
            if (this.isInstance)
                e = this.screen;
            else {
                var i = this.arguments
                  , n = this.screen;
                t.prototype = n.prototype,
                e = new t
            }
            if (this.properties)
                for (var s in this.properties)
                    e[s] = this.properties[s];
            return this.events && this.addEventsListeners(e),
            e
        }
        ,
        n.prototype.addEventsListeners = function(t) {
            for (var e in this.events)
                "function" == typeof this.events[e] && t.on(e, this.events[e])
        }
        ,
        n.prototype.removeEventsListeners = function(t) {
            for (var e in this.events)
                "function" == typeof this.events[e] && t.off(e, this.events[e])
        }
        ,
        n.prototype.disposeScreen = function(t, e) {
            this.events && this.removeEventsListeners(t),
            (e || this.canDispose) && "function" == typeof t.dispose && t.dispose()
        }
        ,
        n.prototype.dispose = function() {
            this.screen = this.arguments = this.properties = this.events = null
        }
        ,
        e.exports = n
    }
    , {}],
    26: [function(t, e, i) {
        e.exports = {
            none: t("./transitions/none.js"),
            outAndIn: t("./transitions/outAndIn.js"),
            outThenIn: t("./transitions/outThenIn.js"),
            inThenOut: t("./transitions/inThenOut.js"),
            "in": t("./transitions/in.js"),
            out: t("./transitions/out.js")
        }
    }
    , {
        "./transitions/in.js": 27,
        "./transitions/inThenOut.js": 28,
        "./transitions/none.js": 29,
        "./transitions/out.js": 30,
        "./transitions/outAndIn.js": 31,
        "./transitions/outThenIn.js": 32
    }],
    27: [function(t, e, i) {
        e.exports = function(t, e, i) {
            function n() {
                t && t.off("animateInComplete", s)
            }
            function s() {
                r()
            }
            function r() {
                e && e.animateOut(),
                n(),
                i()
            }
            return t ? (t.on("animateInComplete", s),
            t.animateIn()) : r(),
            function() {
                n(),
                e && e.animateOut(!0),
                t && t.animateIn(!0)
            }
        }
    }
    , {}],
    28: [function(t, e, i) {
        e.exports = function(t, e, i) {
            function n() {
                e ? (e.on("animateOutComplete", a),
                e.animateOut()) : o()
            }
            function s() {
                e && e.off("animateOutComplete", a),
                t && t.off("animateInComplete", r)
            }
            function r() {
                e ? n() : o()
            }
            function a() {
                o()
            }
            function o() {
                s(),
                i()
            }
            return t ? (t.on("animateInComplete", r),
            t.animateIn()) : n(),
            function() {
                s(),
                e && e.animateOut(!0),
                t && t.animateIn(!0)
            }
        }
    }
    , {}],
    29: [function(t, e, i) {
        e.exports = function(t, e, i) {
            return e && e.animateOut(),
            t && t.animateIn(),
            i(),
            function() {}
        }
    }
    , {}],
    30: [function(t, e, i) {
        e.exports = function(t, e, i) {
            function n() {
                e && e.off("animateOutComplete", s)
            }
            function s() {
                r()
            }
            function r() {
                t && t.animateIn(),
                n(),
                i()
            }
            return e ? (e.on("animateOutComplete", s),
            e.animateOut()) : r(),
            function() {
                n(),
                e && e.animateOut(!0),
                t && t.animateIn(!0)
            }
        }
    }
    , {}],
    31: [function(t, e, i) {
        e.exports = function(t, e, i) {
            function n() {
                r++,
                r === a && i()
            }
            function s() {
                e && e.off("animateOutComplete", n),
                t && t.off("animateOutComplete", n)
            }
            var r = 0
              , a = 0;
            return e && a++,
            t && a++,
            e && (e.on("animateOutComplete", n),
            e.animateOut()),
            t && (t.on("animateInComplete", n),
            t.animateIn()),
            function() {
                s(),
                e && e.animateOut(!0),
                t && t.animateIn(!0)
            }
        }
    }
    , {}],
    32: [function(t, e, i) {
        e.exports = function(t, e, i) {
            function n() {
                t ? r() : o()
            }
            function s() {
                o()
            }
            function r() {
                t.on("animateInComplete", s),
                t.animateIn()
            }
            function a() {
                e && e.off("animateOutComplete", n),
                t && t.off("animateInComplete", s)
            }
            function o() {
                a(),
                i()
            }
            return e ? (e.on("animateOutComplete", n),
            e.animateOut()) : r(),
            function() {
                a(),
                e && e.animateOut(!0),
                t && t.animateIn(!0)
            }
        }
    }
    , {}],
    33: [function(t, e, i) {
        function n() {}
        n.prototype = {
            on: function(t, e, i) {
                var n = this.e || (this.e = {});
                return (n[t] || (n[t] = [])).push({
                    fn: e,
                    ctx: i
                }),
                this
            },
            once: function(t, e, i) {
                function n() {
                    s.off(t, n),
                    e.apply(i, arguments)
                }
                var s = this;
                return n._ = e,
                this.on(t, n, i)
            },
            emit: function(t) {
                var e = [].slice.call(arguments, 1)
                  , i = ((this.e || (this.e = {}))[t] || []).slice()
                  , n = 0
                  , s = i.length;
                for (n; n < s; n++)
                    i[n].fn.apply(i[n].ctx, e);
                return this
            },
            off: function(t, e) {
                var i = this.e || (this.e = {})
                  , n = i[t]
                  , s = [];
                if (n && e)
                    for (var r = 0, a = n.length; r < a; r++)
                        n[r].fn !== e && n[r].fn._ !== e && s.push(n[r]);
                return s.length ? i[t] = s : delete i[t],
                this
            }
        },
        e.exports = n
    }
    , {}]
}, {}, [1]);
