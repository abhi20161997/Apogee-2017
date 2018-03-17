function getRandomInt(e, t) {
  return Math.floor(Math.random() * (t - e + 1)) + e
}

function checkResizeX() {
  return $(window).width() != window.checkResizeX_windowWidth && $("html").hasClass("tablet") ? (window.checkResizeX_windowWidth = $(window).width(), !0) : !1
}

function applyOrientation() {
  $oldOr = $("html").attr("data-orientation"), "landscape" != $oldOr && "portrait" != $oldOr ? window.innerHeight > window.innerWidth ? ($("html").attr("data-orientation", "portrait"), $("html").removeClass("landscape"), $("html").addClass("portrait")) : ($("html").attr("data-orientation", "landscape"), $("html").removeClass("portrait"), $("html").addClass("landscape")) : window.innerHeight > window.innerWidth ? "landscape" == $oldOr && (console.log("You are now in portrait"), $("html").attr("data-orientation", "portrait"), $("html").removeClass("landscape"), $("html").addClass("portrait"), $(window).trigger("orientationChange")) : "portrait" == $oldOr && (console.log("You are now in landscape"), $("html").attr("data-orientation", "landscape"), $("html").removeClass("portrait"), $("html").addClass("landscape"), $(window).trigger("orientationChange"))
}

function preventDefault(e) {
  e = e || window.event, e.preventDefault && e.preventDefault(), e.returnValue = !1
}

function preventDefaultForScrollKeys(e) {
  return keys[e.keyCode] ? (preventDefault(e), !1) : void 0
}

function disableScroll() {
  window.addEventListener && window.addEventListener("DOMMouseScroll", preventDefault, !1), window.onwheel = preventDefault, window.onmousewheel = document.onmousewheel = preventDefault, window.ontouchmove = preventDefault, document.onkeydown = preventDefaultForScrollKeys
}

function enableScroll() {
  window.removeEventListener && window.removeEventListener("DOMMouseScroll", preventDefault, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchmove = null, document.onkeydown = null
}

function setBrowserHappy() {
  for (var browsers = new Array({
      name: "chrome",
      index: 35
    }, {
      name: "safari",
      index: 5
    }, {
      name: "firefox",
      index: 35
    }), evalStr = "", $i = 0; $i < browsers.length; $i++)
    if ($("html").hasClass(browsers[$i].name))
      for (var bIndex = browsers[$i].index, $c = 0; bIndex >= $c; $c++) evalStr = 1 > $c ? evalStr + '$("html.desktop").hasClass("' + browsers[$i].name + $c + '")' : evalStr + ' || $("html.desktop").hasClass("' + browsers[$i].name + $c + '")';
  eval(evalStr) && $("#browserhappy").css({
    display: "block"
  })
}! function () {
  for (var e, t = function () {}, s = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeline", "timelineEnd", "timeStamp", "trace", "warn"], i = s.length, n = window.console = window.console || {}; i--;) e = s[i], n[e] || (n[e] = t)
}(), "undefined" != typeof jQuery && ! function (e) {
  "use strict";
  e.imgpreload = function (t, s) {
    s = e.extend({}, e.fn.imgpreload.defaults, s instanceof Function ? {
      all: s
    } : s), "string" == typeof t && (t = [t]);
    var i = [];
    e.each(t, function (n, a) {
      var r = new Image,
        o = a,
        l = r;
      "string" != typeof a && (o = e(a).attr("src") || e(a).css("background-image").replace(/^url\((?:"|')?(.*)(?:'|")?\)$/gm, "$1"), l = a), e(r).bind("load error", function (n) {
        i.push(l), e.data(l, "loaded", "error" == n.type ? !1 : !0), s.each instanceof Function && s.each.call(l, i.slice(0)), i.length >= t.length && s.all instanceof Function && s.all.call(i), e(this).unbind("load error")
      }), r.src = o
    })
  }, e.fn.imgpreload = function (t) {
    return e.imgpreload(this, t), this
  }, e.fn.imgpreload.defaults = {
    each: null,
    all: null
  }
}(jQuery);
var resizeEnd_timer;
$(window).on("resize", function (e) {
  clearTimeout(resizeEnd_timer), resizeEnd_timer = setTimeout(function () {
    $(window).trigger("resizeEnd")
  }, 250)
}), $.fn.updateClass = function (e, t, s) {
  try {
    var s = s || "-",
      i = new RegExp(e + s + "\\S+");
    void 0 == this.attr("class") && this.attr("class", "");
    var n = this.attr("class");
    if (void 0 != n) {
      var a = (n.match(i) || []).join(" ");
      this.removeClass(a).addClass(e + s + t)
    }
  } catch (r) {
    console.warn(r)
  }
  return this
};
var func_setHtmlClass = function (e) {
  $("html").addClass(e)
};
window.checkResizeX_windowWidth = $(window).width(), window.onresize = function (e) {
    applyOrientation()
  },
  function (e) {
    e.isScrollToFixed = function (t) {
      return !!e(t).data("ScrollToFixed")
    }, e.ScrollToFixed = function (t, s) {
      function i() {
        S.trigger("preUnfixed.ScrollToFixed"), c(), S.trigger("unfixed.ScrollToFixed"), T = -1, L = S.offset().top, D = S.offset().left, f.options.offsets && (D += S.offset().left - S.position().left), -1 == I && (I = D), C = S.css("position"), b = !0, -1 != f.options.bottom && (S.trigger("preFixed.ScrollToFixed"), l(), S.trigger("fixed.ScrollToFixed"))
      }

      function n() {
        var e = f.options.limit;
        return e ? "function" == typeof e ? e.apply(S) : e : 0
      }

      function a() {
        return "fixed" === C
      }

      function r() {
        return "absolute" === C
      }

      function o() {
        return !(a() || r())
      }

      function l() {
        if (!a()) {
          var e = S[0].getBoundingClientRect();
          w.css({
            display: S.css("display"),
            width: e.width,
            height: e.height,
            "float": S.css("float")
          }), cssOptions = {
            "z-index": f.options.zIndex,
            position: "fixed",
            top: -1 == f.options.bottom ? u() : "",
            bottom: -1 == f.options.bottom ? "" : f.options.bottom,
            "margin-left": "0px"
          }, f.options.dontSetWidth || (cssOptions.width = S.css("width")), S.css(cssOptions), S.addClass(f.options.baseClassName), f.options.className && S.addClass(f.options.className), C = "fixed"
        }
      }

      function d() {
        var e = n(),
          t = D;
        f.options.removeOffsets && (t = "", e -= L), cssOptions = {
          position: "absolute",
          top: e,
          left: t,
          "margin-left": "0px",
          bottom: ""
        }, f.options.dontSetWidth || (cssOptions.width = S.css("width")), S.css(cssOptions), C = "absolute"
      }

      function c() {
        o() || (T = -1, w.css("display", "none"), S.css({
          "z-index": v,
          width: "",
          position: g,
          left: "",
          top: y,
          "margin-left": ""
        }), S.removeClass("scroll-to-fixed-fixed"), f.options.className && S.removeClass(f.options.className), C = null)
      }

      function h(e) {
        e != T && (S.css("left", D - e), T = e)
      }

      function u() {
        var e = f.options.marginTop;
        return e ? "function" == typeof e ? e.apply(S) : e : 0
      }

      function p() {
        if (e.isScrollToFixed(S) && !S.is(":hidden")) {
          var t = b,
            s = o();
          b ? o() && (L = S.offset().top, D = S.offset().left) : i();
          var p = e(window).scrollLeft(),
            C = e(window).scrollTop(),
            E = n();
          f.options.minWidth && e(window).width() < f.options.minWidth ? o() && t || (m(), S.trigger("preUnfixed.ScrollToFixed"), c(), S.trigger("unfixed.ScrollToFixed")) : f.options.maxWidth && e(window).width() > f.options.maxWidth ? o() && t || (m(), S.trigger("preUnfixed.ScrollToFixed"), c(), S.trigger("unfixed.ScrollToFixed")) : -1 == f.options.bottom ? E > 0 && C >= E - u() ? s || r() && t || (m(), S.trigger("preAbsolute.ScrollToFixed"), d(), S.trigger("unfixed.ScrollToFixed")) : C >= L - u() ? (a() && t || (m(), S.trigger("preFixed.ScrollToFixed"), l(), T = -1, S.trigger("fixed.ScrollToFixed")), h(p)) : o() && t || (m(), S.trigger("preUnfixed.ScrollToFixed"), c(), S.trigger("unfixed.ScrollToFixed")) : E > 0 ? C + e(window).height() - S.outerHeight(!0) >= E - (u() || -_()) ? a() && (m(), S.trigger("preUnfixed.ScrollToFixed"), "absolute" === g ? d() : c(), S.trigger("unfixed.ScrollToFixed")) : (a() || (m(), S.trigger("preFixed.ScrollToFixed"), l()), h(p), S.trigger("fixed.ScrollToFixed")) : h(p)
        }
      }

      function _() {
        return f.options.bottom ? f.options.bottom : 0
      }

      function m() {
        var e = S.css("position");
        "absolute" == e ? S.trigger("postAbsolute.ScrollToFixed") : "fixed" == e ? S.trigger("postFixed.ScrollToFixed") : S.trigger("postUnfixed.ScrollToFixed")
      }
      var f = this;
      f.$el = e(t), f.el = t, f.$el.data("ScrollToFixed", f);
      var C, g, E, y, v, b = !1,
        S = f.$el,
        L = 0,
        D = 0,
        I = -1,
        T = -1,
        w = null,
        A = function (e) {
          S.is(":visible") && (b = !1, p())
        },
        k = function (e) {
          window.requestAnimationFrame ? requestAnimationFrame(p) : p()
        },
        M = function (e) {
          e = e || window.event, e.preventDefault && e.preventDefault(), e.returnValue = !1
        };
      f.init = function () {
        f.options = e.extend({}, e.ScrollToFixed.defaultOptions, s), v = S.css("z-index"), f.$el.css("z-index", f.options.zIndex), w = e("<div />"), C = S.css("position"), g = S.css("position"), E = S.css("float"), y = S.css("top"), o() && f.$el.after(w), e(window).bind("resize.ScrollToFixed", A), e(window).bind("scroll.ScrollToFixed", k), "ontouchmove" in window && e(window).bind("touchmove.ScrollToFixed", p), f.options.preFixed && S.bind("preFixed.ScrollToFixed", f.options.preFixed), f.options.postFixed && S.bind("postFixed.ScrollToFixed", f.options.postFixed), f.options.preUnfixed && S.bind("preUnfixed.ScrollToFixed", f.options.preUnfixed), f.options.postUnfixed && S.bind("postUnfixed.ScrollToFixed", f.options.postUnfixed), f.options.preAbsolute && S.bind("preAbsolute.ScrollToFixed", f.options.preAbsolute), f.options.postAbsolute && S.bind("postAbsolute.ScrollToFixed", f.options.postAbsolute), f.options.fixed && S.bind("fixed.ScrollToFixed", f.options.fixed), f.options.unfixed && S.bind("unfixed.ScrollToFixed", f.options.unfixed), f.options.spacerClass && w.addClass(f.options.spacerClass), S.bind("resize.ScrollToFixed", function () {
          w.height(S.height())
        }), S.bind("scroll.ScrollToFixed", function () {
          S.trigger("preUnfixed.ScrollToFixed"), c(), S.trigger("unfixed.ScrollToFixed"), p()
        }), S.bind("detach.ScrollToFixed", function (t) {
          M(t), S.trigger("preUnfixed.ScrollToFixed"), c(), S.trigger("unfixed.ScrollToFixed"), e(window).unbind("resize.ScrollToFixed", A), e(window).unbind("scroll.ScrollToFixed", k), S.unbind(".ScrollToFixed"), w.remove(), f.$el.removeData("ScrollToFixed")
        }), A()
      }, f.init()
    }, e.ScrollToFixed.defaultOptions = {
      marginTop: 0,
      limit: 0,
      bottom: -1,
      zIndex: 1e3,
      baseClassName: "scroll-to-fixed-fixed"
    }, e.fn.scrollToFixed = function (t) {
      return this.each(function () {
        new e.ScrollToFixed(this, t)
      })
    }
  }(jQuery),
  function (e, t, s) {
    "undefined" != typeof module && module.exports ? module.exports = s() : e[t] = s()
  }(this, "verge", function () {
    function e() {
      return {
        width: c(),
        height: h()
      }
    }

    function t(e, t) {
      var s = {};
      return t = +t || 0, s.width = (s.right = e.right + t) - (s.left = e.left - t), s.height = (s.bottom = e.bottom + t) - (s.top = e.top - t), s
    }

    function s(e, s) {
      return e = e && !e.nodeType ? e[0] : e, e && 1 === e.nodeType ? t(e.getBoundingClientRect(), s) : !1
    }

    function i(t) {
      t = null == t ? e() : 1 === t.nodeType ? s(t) : t;
      var i = t.height,
        n = t.width;
      return i = "function" == typeof i ? i.call(t) : i, n = "function" == typeof n ? n.call(t) : n, n / i
    }
    var n = {},
      a = "undefined" != typeof window && window,
      r = "undefined" != typeof document && document,
      o = r && r.documentElement,
      l = a.matchMedia || a.msMatchMedia,
      d = l ? function (e) {
        return !!l.call(a, e).matches
      } : function () {
        return !1
      },
      c = n.viewportW = function () {
        var e = o.clientWidth,
          t = a.innerWidth;
        return t > e ? t : e
      },
      h = n.viewportH = function () {
        var e = o.clientHeight,
          t = a.innerHeight;
        return t > e ? t : e
      };
    return n.mq = d, n.matchMedia = l ? function () {
      return l.apply(a, arguments)
    } : function () {
      return {}
    }, n.viewport = e, n.scrollX = function () {
      return a.pageXOffset || o.scrollLeft
    }, n.scrollY = function () {
      return a.pageYOffset || o.scrollTop
    }, n.rectangle = s, n.aspect = i, n.inX = function (e, t) {
      var i = s(e, t);
      return !!i && i.right >= 0 && i.left <= c()
    }, n.inY = function (e, t) {
      var i = s(e, t);
      return !!i && i.bottom >= 0 && i.top <= h()
    }, n.inViewport = function (e, t) {
      var i = s(e, t);
      return !!i && i.bottom >= 0 && i.right >= 0 && i.top <= h() && i.left <= c()
    }, n
  }),
  function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
  }(function (e) {
    function t(t, i) {
      var n, a, r, o = t.nodeName.toLowerCase();
      return "area" === o ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (r = e("img[usemap='#" + a + "']")[0], !!r && s(r)) : !1) : (/^(input|select|textarea|button|object)$/.test(o) ? !t.disabled : "a" === o ? t.href || i : i) && s(t)
    }

    function s(t) {
      return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function () {
        return "hidden" === e.css(this, "visibility")
      }).length
    }

    function i(e) {
      for (var t, s; e.length && e[0] !== document;) {
        if (t = e.css("position"), ("absolute" === t || "relative" === t || "fixed" === t) && (s = parseInt(e.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
        e = e.parent()
      }
      return 0
    }

    function n() {
      this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
      }, this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1
      }, e.extend(this._defaults, this.regional[""]), this.regional.en = e.extend(!0, {}, this.regional[""]), this.regional["en-US"] = e.extend(!0, {}, this.regional.en), this.dpDiv = a(e("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function a(t) {
      var s = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return t.delegate(s, "mouseout", function () {
        e(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).removeClass("ui-datepicker-next-hover")
      }).delegate(s, "mouseover", r)
    }

    function r() {
      e.datepicker._isDisabledDatepicker(l.inline ? l.dpDiv.parent()[0] : l.input[0]) || (e(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), e(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && e(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && e(this).addClass("ui-datepicker-next-hover"))
    }

    function o(t, s) {
      e.extend(t, s);
      for (var i in s) null == s[i] && (t[i] = s[i]);
      return t
    }
    e.ui = e.ui || {}, e.extend(e.ui, {
      version: "1.11.4",
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
      }
    }), e.fn.extend({
      scrollParent: function (t) {
        var s = this.css("position"),
          i = "absolute" === s,
          n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          a = this.parents().filter(function () {
            var t = e(this);
            return i && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
          }).eq(0);
        return "fixed" !== s && a.length ? a : e(this[0].ownerDocument || document)
      },
      uniqueId: function () {
        var e = 0;
        return function () {
          return this.each(function () {
            this.id || (this.id = "ui-id-" + ++e)
          })
        }
      }(),
      removeUniqueId: function () {
        return this.each(function () {
          /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
        })
      }
    }), e.extend(e.expr[":"], {
      data: e.expr.createPseudo ? e.expr.createPseudo(function (t) {
        return function (s) {
          return !!e.data(s, t)
        }
      }) : function (t, s, i) {
        return !!e.data(t, i[3])
      },
      focusable: function (s) {
        return t(s, !isNaN(e.attr(s, "tabindex")))
      },
      tabbable: function (s) {
        var i = e.attr(s, "tabindex"),
          n = isNaN(i);
        return (n || i >= 0) && t(s, !n)
      }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function (t, s) {
      function i(t, s, i, a) {
        return e.each(n, function () {
          s -= parseFloat(e.css(t, "padding" + this)) || 0, i && (s -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (s -= parseFloat(e.css(t, "margin" + this)) || 0)
        }), s
      }
      var n = "Width" === s ? ["Left", "Right"] : ["Top", "Bottom"],
        a = s.toLowerCase(),
        r = {
          innerWidth: e.fn.innerWidth,
          innerHeight: e.fn.innerHeight,
          outerWidth: e.fn.outerWidth,
          outerHeight: e.fn.outerHeight
        };
      e.fn["inner" + s] = function (t) {
        return void 0 === t ? r["inner" + s].call(this) : this.each(function () {
          e(this).css(a, i(this, t) + "px")
        })
      }, e.fn["outer" + s] = function (t, n) {
        return "number" != typeof t ? r["outer" + s].call(this, t) : this.each(function () {
          e(this).css(a, i(this, t, !0, n) + "px")
        })
      }
    }), e.fn.addBack || (e.fn.addBack = function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function (t) {
      return function (s) {
        return arguments.length ? t.call(this, e.camelCase(s)) : t.call(this)
      }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
      focus: function (t) {
        return function (s, i) {
          return "number" == typeof s ? this.each(function () {
            var t = this;
            setTimeout(function () {
              e(t).focus(), i && i.call(t)
            }, s)
          }) : t.apply(this, arguments)
        }
      }(e.fn.focus),
      disableSelection: function () {
        var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
        return function () {
          return this.bind(e + ".ui-disableSelection", function (e) {
            e.preventDefault()
          })
        }
      }(),
      enableSelection: function () {
        return this.unbind(".ui-disableSelection")
      },
      zIndex: function (t) {
        if (void 0 !== t) return this.css("zIndex", t);
        if (this.length)
          for (var s, i, n = e(this[0]); n.length && n[0] !== document;) {
            if (s = n.css("position"), ("absolute" === s || "relative" === s || "fixed" === s) && (i = parseInt(n.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            n = n.parent()
          }
        return 0
      }
    }), e.ui.plugin = {
      add: function (t, s, i) {
        var n, a = e.ui[t].prototype;
        for (n in i) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([s, i[n]])
      },
      call: function (e, t, s, i) {
        var n, a = e.plugins[t];
        if (a && (i || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
          for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, s)
      }
    }, e.extend(e.ui, {
      datepicker: {
        version: "1.11.4"
      }
    });
    var l;
    e.extend(n.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function () {
        return this.dpDiv
      },
      setDefaults: function (e) {
        return o(this._defaults, e || {}), this
      },
      _attachDatepicker: function (t, s) {
        var i, n, a;
        i = t.nodeName.toLowerCase(), n = "div" === i || "span" === i, t.id || (this.uuid += 1, t.id = "dp" + this.uuid), a = this._newInst(e(t), n), a.settings = e.extend({}, s || {}), "input" === i ? this._connectDatepicker(t, a) : n && this._inlineDatepicker(t, a)
      },
      _newInst: function (t, s) {
        var i = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
        return {
          id: i,
          input: t,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: s,
          dpDiv: s ? a(e("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
        }
      },
      _connectDatepicker: function (t, s) {
        var i = e(t);
        s.append = e([]), s.trigger = e([]), i.hasClass(this.markerClassName) || (this._attachments(i, s), i.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(s), e.data(t, "datepicker", s), s.settings.disabled && this._disableDatepicker(t))
      },
      _attachments: function (t, s) {
        var i, n, a, r = this._get(s, "appendText"),
          o = this._get(s, "isRTL");
        s.append && s.append.remove(), r && (s.append = e("<span class='" + this._appendClass + "'>" + r + "</span>"), t[o ? "before" : "after"](s.append)), t.unbind("focus", this._showDatepicker), s.trigger && s.trigger.remove(), i = this._get(s, "showOn"), ("focus" === i || "both" === i) && t.focus(this._showDatepicker), ("button" === i || "both" === i) && (n = this._get(s, "buttonText"), a = this._get(s, "buttonImage"), s.trigger = e(this._get(s, "buttonImageOnly") ? e("<img/>").addClass(this._triggerClass).attr({
          src: a,
          alt: n,
          title: n
        }) : e("<button type='button'></button>").addClass(this._triggerClass).html(a ? e("<img/>").attr({
          src: a,
          alt: n,
          title: n
        }) : n)), t[o ? "before" : "after"](s.trigger), s.trigger.click(function () {
          return e.datepicker._datepickerShowing && e.datepicker._lastInput === t[0] ? e.datepicker._hideDatepicker() : e.datepicker._datepickerShowing && e.datepicker._lastInput !== t[0] ? (e.datepicker._hideDatepicker(), e.datepicker._showDatepicker(t[0])) : e.datepicker._showDatepicker(t[0]), !1
        }))
      },
      _autoSize: function (e) {
        if (this._get(e, "autoSize") && !e.inline) {
          var t, s, i, n, a = new Date(2009, 11, 20),
            r = this._get(e, "dateFormat");
          r.match(/[DM]/) && (t = function (e) {
            for (s = 0, i = 0, n = 0; e.length > n; n++) e[n].length > s && (s = e[n].length, i = n);
            return i
          }, a.setMonth(t(this._get(e, r.match(/MM/) ? "monthNames" : "monthNamesShort"))), a.setDate(t(this._get(e, r.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - a.getDay())), e.input.attr("size", this._formatDate(e, a).length)
        }
      },
      _inlineDatepicker: function (t, s) {
        var i = e(t);
        i.hasClass(this.markerClassName) || (i.addClass(this.markerClassName).append(s.dpDiv), e.data(t, "datepicker", s), this._setDate(s, this._getDefaultDate(s), !0), this._updateDatepicker(s), this._updateAlternate(s), s.settings.disabled && this._disableDatepicker(t), s.dpDiv.css("display", "block"))
      },
      _dialogDatepicker: function (t, s, i, n, a) {
        var r, l, d, c, h, u = this._dialogInst;
        return u || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = e("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), e("body").append(this._dialogInput), u = this._dialogInst = this._newInst(this._dialogInput, !1), u.settings = {}, e.data(this._dialogInput[0], "datepicker", u)), o(u.settings, n || {}), s = s && s.constructor === Date ? this._formatDate(u, s) : s, this._dialogInput.val(s), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (l = document.documentElement.clientWidth, d = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, h = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, d / 2 - 150 + h]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), u.settings.onSelect = i, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), e.blockUI && e.blockUI(this.dpDiv), e.data(this._dialogInput[0], "datepicker", u), this
      },
      _destroyDatepicker: function (t) {
        var s, i = e(t),
          n = e.data(t, "datepicker");
        i.hasClass(this.markerClassName) && (s = t.nodeName.toLowerCase(), e.removeData(t, "datepicker"), "input" === s ? (n.append.remove(), n.trigger.remove(), i.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === s || "span" === s) && i.removeClass(this.markerClassName).empty(), l === n && (l = null))
      },
      _enableDatepicker: function (t) {
        var s, i, n = e(t),
          a = e.data(t, "datepicker");
        n.hasClass(this.markerClassName) && (s = t.nodeName.toLowerCase(), "input" === s ? (t.disabled = !1, a.trigger.filter("button").each(function () {
          this.disabled = !1
        }).end().filter("img").css({
          opacity: "1.0",
          cursor: ""
        })) : ("div" === s || "span" === s) && (i = n.children("." + this._inlineClass), i.children().removeClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
          return e === t ? null : e
        }))
      },
      _disableDatepicker: function (t) {
        var s, i, n = e(t),
          a = e.data(t, "datepicker");
        n.hasClass(this.markerClassName) && (s = t.nodeName.toLowerCase(), "input" === s ? (t.disabled = !0, a.trigger.filter("button").each(function () {
          this.disabled = !0
        }).end().filter("img").css({
          opacity: "0.5",
          cursor: "default"
        })) : ("div" === s || "span" === s) && (i = n.children("." + this._inlineClass), i.children().addClass("ui-state-disabled"), i.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = e.map(this._disabledInputs, function (e) {
          return e === t ? null : e
        }), this._disabledInputs[this._disabledInputs.length] = t)
      },
      _isDisabledDatepicker: function (e) {
        if (!e) return !1;
        for (var t = 0; this._disabledInputs.length > t; t++)
          if (this._disabledInputs[t] === e) return !0;
        return !1
      },
      _getInst: function (t) {
        try {
          return e.data(t, "datepicker")
        } catch (s) {
          throw "Missing instance data for this datepicker"
        }
      },
      _optionDatepicker: function (t, s, i) {
        var n, a, r, l, d = this._getInst(t);
        return 2 === arguments.length && "string" == typeof s ? "defaults" === s ? e.extend({}, e.datepicker._defaults) : d ? "all" === s ? e.extend({}, d.settings) : this._get(d, s) : null : (n = s || {}, "string" == typeof s && (n = {}, n[s] = i), void(d && (this._curInst === d && this._hideDatepicker(), a = this._getDateDatepicker(t, !0), r = this._getMinMaxDate(d, "min"), l = this._getMinMaxDate(d, "max"), o(d.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (d.settings.minDate = this._formatDate(d, r)), null !== l && void 0 !== n.dateFormat && void 0 === n.maxDate && (d.settings.maxDate = this._formatDate(d, l)), "disabled" in n && (n.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(e(t), d), this._autoSize(d), this._setDate(d, a), this._updateAlternate(d), this._updateDatepicker(d))))
      },
      _changeDatepicker: function (e, t, s) {
        this._optionDatepicker(e, t, s)
      },
      _refreshDatepicker: function (e) {
        var t = this._getInst(e);
        t && this._updateDatepicker(t)
      },
      _setDateDatepicker: function (e, t) {
        var s = this._getInst(e);
        s && (this._setDate(s, t), this._updateDatepicker(s), this._updateAlternate(s))
      },
      _getDateDatepicker: function (e, t) {
        var s = this._getInst(e);
        return s && !s.inline && this._setDateFromField(s, t), s ? this._getDate(s) : null
      },
      _doKeyDown: function (t) {
        var s, i, n, a = e.datepicker._getInst(t.target),
          r = !0,
          o = a.dpDiv.is(".ui-datepicker-rtl");
        if (a._keyEvent = !0, e.datepicker._datepickerShowing) switch (t.keyCode) {
        case 9:
          e.datepicker._hideDatepicker(), r = !1;
          break;
        case 13:
          return n = e("td." + e.datepicker._dayOverClass + ":not(." + e.datepicker._currentClass + ")", a.dpDiv), n[0] && e.datepicker._selectDay(t.target, a.selectedMonth, a.selectedYear, n[0]), s = e.datepicker._get(a, "onSelect"), s ? (i = e.datepicker._formatDate(a), s.apply(a.input ? a.input[0] : null, [i, a])) : e.datepicker._hideDatepicker(), !1;
        case 27:
          e.datepicker._hideDatepicker();
          break;
        case 33:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
          break;
        case 34:
          e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
          break;
        case 35:
          (t.ctrlKey || t.metaKey) && e.datepicker._clearDate(t.target), r = t.ctrlKey || t.metaKey;
          break;
        case 36:
          (t.ctrlKey || t.metaKey) && e.datepicker._gotoToday(t.target), r = t.ctrlKey || t.metaKey;
          break;
        case 37:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? 1 : -1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? -e.datepicker._get(a, "stepBigMonths") : -e.datepicker._get(a, "stepMonths"), "M");
          break;
        case 38:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, -7, "D"), r = t.ctrlKey || t.metaKey;
          break;
        case 39:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, o ? -1 : 1, "D"), r = t.ctrlKey || t.metaKey, t.originalEvent.altKey && e.datepicker._adjustDate(t.target, t.ctrlKey ? +e.datepicker._get(a, "stepBigMonths") : +e.datepicker._get(a, "stepMonths"), "M");
          break;
        case 40:
          (t.ctrlKey || t.metaKey) && e.datepicker._adjustDate(t.target, 7, "D"), r = t.ctrlKey || t.metaKey;
          break;
        default:
          r = !1
        } else 36 === t.keyCode && t.ctrlKey ? e.datepicker._showDatepicker(this) : r = !1;
        r && (t.preventDefault(), t.stopPropagation())
      },
      _doKeyPress: function (t) {
        var s, i, n = e.datepicker._getInst(t.target);
        return e.datepicker._get(n, "constrainInput") ? (s = e.datepicker._possibleChars(e.datepicker._get(n, "dateFormat")), i = String.fromCharCode(null == t.charCode ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || " " > i || !s || s.indexOf(i) > -1) : void 0
      },
      _doKeyUp: function (t) {
        var s, i = e.datepicker._getInst(t.target);
        if (i.input.val() !== i.lastVal) try {
          s = e.datepicker.parseDate(e.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, e.datepicker._getFormatConfig(i)), s && (e.datepicker._setDateFromField(i), e.datepicker._updateAlternate(i), e.datepicker._updateDatepicker(i))
        } catch (n) {}
        return !0
      },
      _showDatepicker: function (t) {
        if (t = t.target || t, "input" !== t.nodeName.toLowerCase() && (t = e("input", t.parentNode)[0]), !e.datepicker._isDisabledDatepicker(t) && e.datepicker._lastInput !== t) {
          var s, n, a, r, l, d, c;
          s = e.datepicker._getInst(t), e.datepicker._curInst && e.datepicker._curInst !== s && (e.datepicker._curInst.dpDiv.stop(!0, !0), s && e.datepicker._datepickerShowing && e.datepicker._hideDatepicker(e.datepicker._curInst.input[0])), n = e.datepicker._get(s, "beforeShow"), a = n ? n.apply(t, [t, s]) : {}, a !== !1 && (o(s.settings, a), s.lastVal = null, e.datepicker._lastInput = t, e.datepicker._setDateFromField(s), e.datepicker._inDialog && (t.value = ""), e.datepicker._pos || (e.datepicker._pos = e.datepicker._findPos(t), e.datepicker._pos[1] += t.offsetHeight), r = !1, e(t).parents().each(function () {
            return r |= "fixed" === e(this).css("position"), !r
          }), l = {
            left: e.datepicker._pos[0],
            top: e.datepicker._pos[1]
          }, e.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({
            position: "absolute",
            display: "block",
            top: "-1000px"
          }), e.datepicker._updateDatepicker(s), l = e.datepicker._checkOffset(s, l, r), s.dpDiv.css({
            position: e.datepicker._inDialog && e.blockUI ? "static" : r ? "fixed" : "absolute",
            display: "none",
            left: l.left + "px",
            top: l.top + "px"
          }), s.inline || (d = e.datepicker._get(s, "showAnim"), c = e.datepicker._get(s, "duration"), s.dpDiv.css("z-index", i(e(t)) + 1), e.datepicker._datepickerShowing = !0, e.effects && e.effects.effect[d] ? s.dpDiv.show(d, e.datepicker._get(s, "showOptions"), c) : s.dpDiv[d || "show"](d ? c : null), e.datepicker._shouldFocusInput(s) && s.input.focus(), e.datepicker._curInst = s))
        }
      },
      _updateDatepicker: function (t) {
        this.maxRows = 4, l = t, t.dpDiv.empty().append(this._generateHTML(t)), this._attachHandlers(t);
        var s, i = this._getNumberOfMonths(t),
          n = i[1],
          a = 17,
          o = t.dpDiv.find("." + this._dayOverClass + " a");
        o.length > 0 && r.apply(o.get(0)), t.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && t.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", a * n + "em"), t.dpDiv[(1 !== i[0] || 1 !== i[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), t.dpDiv[(this._get(t, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), t === e.datepicker._curInst && e.datepicker._datepickerShowing && e.datepicker._shouldFocusInput(t) && t.input.focus(), t.yearshtml && (s = t.yearshtml, setTimeout(function () {
          s === t.yearshtml && t.yearshtml && t.dpDiv.find("select.ui-datepicker-year:first").replaceWith(t.yearshtml), s = t.yearshtml = null
        }, 0))
      },
      _shouldFocusInput: function (e) {
        return e.input && e.input.is(":visible") && !e.input.is(":disabled") && !e.input.is(":focus")
      },
      _checkOffset: function (t, s, i) {
        var n = t.dpDiv.outerWidth(),
          a = t.dpDiv.outerHeight(),
          r = t.input ? t.input.outerWidth() : 0,
          o = t.input ? t.input.outerHeight() : 0,
          l = document.documentElement.clientWidth + (i ? 0 : e(document).scrollLeft()),
          d = document.documentElement.clientHeight + (i ? 0 : e(document).scrollTop());
        return s.left -= this._get(t, "isRTL") ? n - r : 0, s.left -= i && s.left === t.input.offset().left ? e(document).scrollLeft() : 0, s.top -= i && s.top === t.input.offset().top + o ? e(document).scrollTop() : 0, s.left -= Math.min(s.left, s.left + n > l && l > n ? Math.abs(s.left + n - l) : 0), s.top -= Math.min(s.top, s.top + a > d && d > a ? Math.abs(a + o) : 0), s
      },
      _findPos: function (t) {
        for (var s, i = this._getInst(t), n = this._get(i, "isRTL"); t && ("hidden" === t.type || 1 !== t.nodeType || e.expr.filters.hidden(t));) t = t[n ? "previousSibling" : "nextSibling"];
        return s = e(t).offset(), [s.left, s.top]
      },
      _hideDatepicker: function (t) {
        var s, i, n, a, r = this._curInst;
        !r || t && r !== e.data(t, "datepicker") || this._datepickerShowing && (s = this._get(r, "showAnim"), i = this._get(r, "duration"), n = function () {
          e.datepicker._tidyDialog(r)
        }, e.effects && (e.effects.effect[s] || e.effects[s]) ? r.dpDiv.hide(s, e.datepicker._get(r, "showOptions"), i, n) : r.dpDiv["slideDown" === s ? "slideUp" : "fadeIn" === s ? "fadeOut" : "hide"](s ? i : null, n), s || n(), this._datepickerShowing = !1, a = this._get(r, "onClose"), a && a.apply(r.input ? r.input[0] : null, [r.input ? r.input.val() : "", r]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
          position: "absolute",
          left: "0",
          top: "-100px"
        }), e.blockUI && (e.unblockUI(), e("body").append(this.dpDiv))), this._inDialog = !1)
      },
      _tidyDialog: function (e) {
        e.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
      },
      _checkExternalClick: function (t) {
        if (e.datepicker._curInst) {
          var s = e(t.target),
            i = e.datepicker._getInst(s[0]);
          (s[0].id !== e.datepicker._mainDivId && 0 === s.parents("#" + e.datepicker._mainDivId).length && !s.hasClass(e.datepicker.markerClassName) && !s.closest("." + e.datepicker._triggerClass).length && e.datepicker._datepickerShowing && (!e.datepicker._inDialog || !e.blockUI) || s.hasClass(e.datepicker.markerClassName) && e.datepicker._curInst !== i) && e.datepicker._hideDatepicker()
        }
      },
      _adjustDate: function (t, s, i) {
        var n = e(t),
          a = this._getInst(n[0]);
        this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(a, s + ("M" === i ? this._get(a, "showCurrentAtPos") : 0), i), this._updateDatepicker(a))
      },
      _gotoToday: function (t) {
        var s, i = e(t),
          n = this._getInst(i[0]);
        this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (s = new Date, n.selectedDay = s.getDate(), n.drawMonth = n.selectedMonth = s.getMonth(), n.drawYear = n.selectedYear = s.getFullYear()), this._notifyChange(n), this._adjustDate(i)
      },
      _selectMonthYear: function (t, s, i) {
        var n = e(t),
          a = this._getInst(n[0]);
        a["selected" + ("M" === i ? "Month" : "Year")] = a["draw" + ("M" === i ? "Month" : "Year")] = parseInt(s.options[s.selectedIndex].value, 10), this._notifyChange(a), this._adjustDate(n)
      },
      _selectDay: function (t, s, i, n) {
        var a, r = e(t);
        e(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(r[0]) || (a = this._getInst(r[0]), a.selectedDay = a.currentDay = e("a", n).html(), a.selectedMonth = a.currentMonth = s, a.selectedYear = a.currentYear = i, this._selectDate(t, this._formatDate(a, a.currentDay, a.currentMonth, a.currentYear)))
      },
      _clearDate: function (t) {
        var s = e(t);
        this._selectDate(s, "")
      },
      _selectDate: function (t, s) {
        var i, n = e(t),
          a = this._getInst(n[0]);
        s = null != s ? s : this._formatDate(a), a.input && a.input.val(s), this._updateAlternate(a), i = this._get(a, "onSelect"), i ? i.apply(a.input ? a.input[0] : null, [s, a]) : a.input && a.input.trigger("change"), a.inline ? this._updateDatepicker(a) : (this._hideDatepicker(), this._lastInput = a.input[0], "object" != typeof a.input[0] && a.input.focus(), this._lastInput = null)
      },
      _updateAlternate: function (t) {
        var s, i, n, a = this._get(t, "altField");
        a && (s = this._get(t, "altFormat") || this._get(t, "dateFormat"), i = this._getDate(t), n = this.formatDate(s, i, this._getFormatConfig(t)), e(a).each(function () {
          e(this).val(n)
        }))
      },
      noWeekends: function (e) {
        var t = e.getDay();
        return [t > 0 && 6 > t, ""]
      },
      iso8601Week: function (e) {
        var t, s = new Date(e.getTime());
        return s.setDate(s.getDate() + 4 - (s.getDay() || 7)), t = s.getTime(), s.setMonth(0), s.setDate(1), Math.floor(Math.round((t - s) / 864e5) / 7) + 1
      },
      parseDate: function (t, s, i) {
        if (null == t || null == s) throw "Invalid arguments";
        if (s = "object" == typeof s ? "" + s : s + "", "" === s) return null;
        var n, a, r, o, l = 0,
          d = (i ? i.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          c = "string" != typeof d ? d : (new Date).getFullYear() % 100 + parseInt(d, 10),
          h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
          u = (i ? i.dayNames : null) || this._defaults.dayNames,
          p = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
          _ = (i ? i.monthNames : null) || this._defaults.monthNames,
          m = -1,
          f = -1,
          C = -1,
          g = -1,
          E = !1,
          y = function (e) {
            var s = t.length > n + 1 && t.charAt(n + 1) === e;
            return s && n++, s
          },
          v = function (e) {
            var t = y(e),
              i = "@" === e ? 14 : "!" === e ? 20 : "y" === e && t ? 4 : "o" === e ? 3 : 2,
              n = "y" === e ? i : 1,
              a = RegExp("^\\d{" + n + "," + i + "}"),
              r = s.substring(l).match(a);
            if (!r) throw "Missing number at position " + l;
            return l += r[0].length, parseInt(r[0], 10)
          },
          b = function (t, i, n) {
            var a = -1,
              r = e.map(y(t) ? n : i, function (e, t) {
                return [[t, e]]
              }).sort(function (e, t) {
                return -(e[1].length - t[1].length)
              });
            if (e.each(r, function (e, t) {
                var i = t[1];
                return s.substr(l, i.length).toLowerCase() === i.toLowerCase() ? (a = t[0], l += i.length, !1) : void 0
              }), -1 !== a) return a + 1;
            throw "Unknown name at position " + l
          },
          S = function () {
            if (s.charAt(l) !== t.charAt(n)) throw "Unexpected literal at position " + l;
            l++
          };
        for (n = 0; t.length > n; n++)
          if (E) "'" !== t.charAt(n) || y("'") ? S() : E = !1;
          else switch (t.charAt(n)) {
          case "d":
            C = v("d");
            break;
          case "D":
            b("D", h, u);
            break;
          case "o":
            g = v("o");
            break;
          case "m":
            f = v("m");
            break;
          case "M":
            f = b("M", p, _);
            break;
          case "y":
            m = v("y");
            break;
          case "@":
            o = new Date(v("@")), m = o.getFullYear(), f = o.getMonth() + 1, C = o.getDate();
            break;
          case "!":
            o = new Date((v("!") - this._ticksTo1970) / 1e4), m = o.getFullYear(), f = o.getMonth() + 1, C = o.getDate();
            break;
          case "'":
            y("'") ? S() : E = !0;
            break;
          default:
            S()
          }
          if (s.length > l && (r = s.substr(l), !/^\s+/.test(r))) throw "Extra/unparsed characters found in date: " + r;
        if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), g > -1)
          for (f = 1, C = g; a = this._getDaysInMonth(m, f - 1), !(a >= C);) f++, C -= a;
        if (o = this._daylightSavingAdjust(new Date(m, f - 1, C)), o.getFullYear() !== m || o.getMonth() + 1 !== f || o.getDate() !== C) throw "Invalid date";
        return o
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
      formatDate: function (e, t, s) {
        if (!t) return "";
        var i, n = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
          a = (s ? s.dayNames : null) || this._defaults.dayNames,
          r = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
          o = (s ? s.monthNames : null) || this._defaults.monthNames,
          l = function (t) {
            var s = e.length > i + 1 && e.charAt(i + 1) === t;
            return s && i++, s
          },
          d = function (e, t, s) {
            var i = "" + t;
            if (l(e))
              for (; s > i.length;) i = "0" + i;
            return i
          },
          c = function (e, t, s, i) {
            return l(e) ? i[t] : s[t]
          },
          h = "",
          u = !1;
        if (t)
          for (i = 0; e.length > i; i++)
            if (u) "'" !== e.charAt(i) || l("'") ? h += e.charAt(i) : u = !1;
            else switch (e.charAt(i)) {
            case "d":
              h += d("d", t.getDate(), 2);
              break;
            case "D":
              h += c("D", t.getDay(), n, a);
              break;
            case "o":
              h += d("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
              break;
            case "m":
              h += d("m", t.getMonth() + 1, 2);
              break;
            case "M":
              h += c("M", t.getMonth(), r, o);
              break;
            case "y":
              h += l("y") ? t.getFullYear() : (10 > t.getYear() % 100 ? "0" : "") + t.getYear() % 100;
              break;
            case "@":
              h += t.getTime();
              break;
            case "!":
              h += 1e4 * t.getTime() + this._ticksTo1970;
              break;
            case "'":
              l("'") ? h += "'" : u = !0;
              break;
            default:
              h += e.charAt(i)
            }
            return h
      },
      _possibleChars: function (e) {
        var t, s = "",
          i = !1,
          n = function (s) {
            var i = e.length > t + 1 && e.charAt(t + 1) === s;
            return i && t++, i
          };
        for (t = 0; e.length > t; t++)
          if (i) "'" !== e.charAt(t) || n("'") ? s += e.charAt(t) : i = !1;
          else switch (e.charAt(t)) {
          case "d":
          case "m":
          case "y":
          case "@":
            s += "0123456789";
            break;
          case "D":
          case "M":
            return null;
          case "'":
            n("'") ? s += "'" : i = !0;
            break;
          default:
            s += e.charAt(t)
          }
          return s
      },
      _get: function (e, t) {
        return void 0 !== e.settings[t] ? e.settings[t] : this._defaults[t]
      },
      _setDateFromField: function (e, t) {
        if (e.input.val() !== e.lastVal) {
          var s = this._get(e, "dateFormat"),
            i = e.lastVal = e.input ? e.input.val() : null,
            n = this._getDefaultDate(e),
            a = n,
            r = this._getFormatConfig(e);
          try {
            a = this.parseDate(s, i, r) || n
          } catch (o) {
            i = t ? "" : i
          }
          e.selectedDay = a.getDate(), e.drawMonth = e.selectedMonth = a.getMonth(), e.drawYear = e.selectedYear = a.getFullYear(), e.currentDay = i ? a.getDate() : 0, e.currentMonth = i ? a.getMonth() : 0, e.currentYear = i ? a.getFullYear() : 0, this._adjustInstDate(e)
        }
      },
      _getDefaultDate: function (e) {
        return this._restrictMinMax(e, this._determineDate(e, this._get(e, "defaultDate"), new Date))
      },
      _determineDate: function (t, s, i) {
        var n = function (e) {
            var t = new Date;
            return t.setDate(t.getDate() + e), t
          },
          a = function (s) {
            try {
              return e.datepicker.parseDate(e.datepicker._get(t, "dateFormat"), s, e.datepicker._getFormatConfig(t))
            } catch (i) {}
            for (var n = (s.toLowerCase().match(/^c/) ? e.datepicker._getDate(t) : null) || new Date, a = n.getFullYear(), r = n.getMonth(), o = n.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, d = l.exec(s); d;) {
              switch (d[2] || "d") {
              case "d":
              case "D":
                o += parseInt(d[1], 10);
                break;
              case "w":
              case "W":
                o += 7 * parseInt(d[1], 10);
                break;
              case "m":
              case "M":
                r += parseInt(d[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(a, r));
                break;
              case "y":
              case "Y":
                a += parseInt(d[1], 10), o = Math.min(o, e.datepicker._getDaysInMonth(a, r))
              }
              d = l.exec(s)
            }
            return new Date(a, r, o)
          },
          r = null == s || "" === s ? i : "string" == typeof s ? a(s) : "number" == typeof s ? isNaN(s) ? i : n(s) : new Date(s.getTime());
        return r = r && "Invalid Date" == "" + r ? i : r, r && (r.setHours(0), r.setMinutes(0), r.setSeconds(0), r.setMilliseconds(0)), this._daylightSavingAdjust(r)
      },
      _daylightSavingAdjust: function (e) {
        return e ? (e.setHours(e.getHours() > 12 ? e.getHours() + 2 : 0), e) : null
      },
      _setDate: function (e, t, s) {
        var i = !t,
          n = e.selectedMonth,
          a = e.selectedYear,
          r = this._restrictMinMax(e, this._determineDate(e, t, new Date));
        e.selectedDay = e.currentDay = r.getDate(), e.drawMonth = e.selectedMonth = e.currentMonth = r.getMonth(), e.drawYear = e.selectedYear = e.currentYear = r.getFullYear(), n === e.selectedMonth && a === e.selectedYear || s || this._notifyChange(e), this._adjustInstDate(e), e.input && e.input.val(i ? "" : this._formatDate(e))
      },
      _getDate: function (e) {
        var t = !e.currentYear || e.input && "" === e.input.val() ? null : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return t
      },
      _attachHandlers: function (t) {
        var s = this._get(t, "stepMonths"),
          i = "#" + t.id.replace(/\\\\/g, "\\");
        t.dpDiv.find("[data-handler]").map(function () {
          var t = {
            prev: function () {
              e.datepicker._adjustDate(i, -s, "M")
            },
            next: function () {
              e.datepicker._adjustDate(i, +s, "M")
            },
            hide: function () {
              e.datepicker._hideDatepicker()
            },
            today: function () {
              e.datepicker._gotoToday(i)
            },
            selectDay: function () {
              return e.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
            },
            selectMonth: function () {
              return e.datepicker._selectMonthYear(i, this, "M"), !1
            },
            selectYear: function () {
              return e.datepicker._selectMonthYear(i, this, "Y"), !1
            }
          };
          e(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
        })
      },
      _generateHTML: function (e) {
        var t, s, i, n, a, r, o, l, d, c, h, u, p, _, m, f, C, g, E, y, v, b, S, L, D, I, T, w, A, k, M, N, R, P, x, F, O, H, B, U = new Date,
          G = this._daylightSavingAdjust(new Date(U.getFullYear(), U.getMonth(), U.getDate())),
          Y = this._get(e, "isRTL"),
          V = this._get(e, "showButtonPanel"),
          q = this._get(e, "hideIfNoPrevNext"),
          W = this._get(e, "navigationAsDateFormat"),
          j = this._getNumberOfMonths(e),
          K = this._get(e, "showCurrentAtPos"),
          $ = this._get(e, "stepMonths"),
          z = 1 !== j[0] || 1 !== j[1],
          J = this._daylightSavingAdjust(e.currentDay ? new Date(e.currentYear, e.currentMonth, e.currentDay) : new Date(9999, 9, 9)),
          X = this._getMinMaxDate(e, "min"),
          Q = this._getMinMaxDate(e, "max"),
          Z = e.drawMonth - K,
          ee = e.drawYear;
        if (0 > Z && (Z += 12, ee--), Q)
          for (t = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - j[0] * j[1] + 1, Q.getDate())), t = X && X > t ? X : t; this._daylightSavingAdjust(new Date(ee, Z, 1)) > t;) Z--, 0 > Z && (Z = 11, ee--);
        for (e.drawMonth = Z, e.drawYear = ee, s = this._get(e, "prevText"), s = W ? this.formatDate(s, this._daylightSavingAdjust(new Date(ee, Z - $, 1)), this._getFormatConfig(e)) : s, i = this._canAdjustMonth(e, -1, ee, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + s + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "e" : "w") + "'>" + s + "</span></a>", n = this._get(e, "nextText"), n = W ? this.formatDate(n, this._daylightSavingAdjust(new Date(ee, Z + $, 1)), this._getFormatConfig(e)) : n, a = this._canAdjustMonth(e, 1, ee, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (Y ? "w" : "e") + "'>" + n + "</span></a>", r = this._get(e, "currentText"), o = this._get(e, "gotoCurrent") && e.currentDay ? J : G, r = W ? this.formatDate(r, o, this._getFormatConfig(e)) : r, l = e.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(e, "closeText") + "</button>", d = V ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Y ? l : "") + (this._isInRange(e, o) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + r + "</button>" : "") + (Y ? "" : l) + "</div>" : "", c = parseInt(this._get(e, "firstDay"), 10), c = isNaN(c) ? 0 : c, h = this._get(e, "showWeek"), u = this._get(e, "dayNames"), p = this._get(e, "dayNamesMin"), _ = this._get(e, "monthNames"), m = this._get(e, "monthNamesShort"), f = this._get(e, "beforeShowDay"), C = this._get(e, "showOtherMonths"), g = this._get(e, "selectOtherMonths"), E = this._getDefaultDate(e), y = "", b = 0; j[0] > b; b++) {
          for (S = "", this.maxRows = 4, L = 0; j[1] > L; L++) {
            if (D = this._daylightSavingAdjust(new Date(ee, Z, e.selectedDay)), I = " ui-corner-all", T = "", z) {
              if (T += "<div class='ui-datepicker-group", j[1] > 1) switch (L) {
              case 0:
                T += " ui-datepicker-group-first", I = " ui-corner-" + (Y ? "right" : "left");
                break;
              case j[1] - 1:
                T += " ui-datepicker-group-last", I = " ui-corner-" + (Y ? "left" : "right");
                break;
              default:
                T += " ui-datepicker-group-middle", I = ""
              }
              T += "'>"
            }
            for (T += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + I + "'>" + (/all|left/.test(I) && 0 === b ? Y ? a : i : "") + (/all|right/.test(I) && 0 === b ? Y ? i : a : "") + this._generateMonthYearHeader(e, Z, ee, X, Q, b > 0 || L > 0, _, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", w = h ? "<th class='ui-datepicker-week-col'>" + this._get(e, "weekHeader") + "</th>" : "", v = 0; 7 > v; v++) A = (v + c) % 7, w += "<th scope='col'" + ((v + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + u[A] + "'>" + p[A] + "</span></th>";
            for (T += w + "</tr></thead><tbody>", k = this._getDaysInMonth(ee, Z), ee === e.selectedYear && Z === e.selectedMonth && (e.selectedDay = Math.min(e.selectedDay, k)), M = (this._getFirstDayOfMonth(ee, Z) - c + 7) % 7, N = Math.ceil((M + k) / 7), R = z && this.maxRows > N ? this.maxRows : N, this.maxRows = R, P = this._daylightSavingAdjust(new Date(ee, Z, 1 - M)), x = 0; R > x; x++) {
              for (T += "<tr>", F = h ? "<td class='ui-datepicker-week-col'>" + this._get(e, "calculateWeek")(P) + "</td>" : "", v = 0; 7 > v; v++) O = f ? f.apply(e.input ? e.input[0] : null, [P]) : [!0, ""], H = P.getMonth() !== Z, B = H && !g || !O[0] || X && X > P || Q && P > Q, F += "<td class='" + ((v + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (H ? " ui-datepicker-other-month" : "") + (P.getTime() === D.getTime() && Z === e.selectedMonth && e._keyEvent || E.getTime() === P.getTime() && E.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (B ? " " + this._unselectableClass + " ui-state-disabled" : "") + (H && !C ? "" : " " + O[1] + (P.getTime() === J.getTime() ? " " + this._currentClass : "") + (P.getTime() === G.getTime() ? " ui-datepicker-today" : "")) + "'" + (H && !C || !O[2] ? "" : " title='" + O[2].replace(/'/g, "&#39;") + "'") + (B ? "" : " data-handler='selectDay' data-event='click' data-month='" + P.getMonth() + "' data-year='" + P.getFullYear() + "'") + ">" + (H && !C ? "&#xa0;" : B ? "<span class='ui-state-default'>" + P.getDate() + "</span>" : "<a class='ui-state-default" + (P.getTime() === G.getTime() ? " ui-state-highlight" : "") + (P.getTime() === J.getTime() ? " ui-state-active" : "") + (H ? " ui-priority-secondary" : "") + "' href='#'>" + P.getDate() + "</a>") + "</td>", P.setDate(P.getDate() + 1), P = this._daylightSavingAdjust(P);
              T += F + "</tr>"
            }
            Z++, Z > 11 && (Z = 0, ee++), T += "</tbody></table>" + (z ? "</div>" + (j[0] > 0 && L === j[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), S += T
          }
          y += S
        }
        return y += d, e._keyEvent = !1, y
      },
      _generateMonthYearHeader: function (e, t, s, i, n, a, r, o) {
        var l, d, c, h, u, p, _, m, f = this._get(e, "changeMonth"),
          C = this._get(e, "changeYear"),
          g = this._get(e, "showMonthAfterYear"),
          E = "<div class='ui-datepicker-title'>",
          y = "";
        if (a || !f) y += "<span class='ui-datepicker-month'>" + r[t] + "</span>";
        else {
          for (l = i && i.getFullYear() === s, d = n && n.getFullYear() === s, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= i.getMonth()) && (!d || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === t ? " selected='selected'" : "") + ">" + o[c] + "</option>");
          y += "</select>"
        }
        if (g || (E += y + (!a && f && C ? "" : "&#xa0;")), !e.yearshtml)
          if (e.yearshtml = "", a || !C) E += "<span class='ui-datepicker-year'>" + s + "</span>";
          else {
            for (h = this._get(e, "yearRange").split(":"), u = (new Date).getFullYear(), p = function (e) {
                var t = e.match(/c[+\-].*/) ? s + parseInt(e.substring(1), 10) : e.match(/[+\-].*/) ? u + parseInt(e, 10) : parseInt(e, 10);
                return isNaN(t) ? u : t
              }, _ = p(h[0]), m = Math.max(_, p(h[1] || "")), _ = i ? Math.max(_, i.getFullYear()) : _, m = n ? Math.min(m, n.getFullYear()) : m, e.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= _; _++) e.yearshtml += "<option value='" + _ + "'" + (_ === s ? " selected='selected'" : "") + ">" + _ + "</option>";
            e.yearshtml += "</select>", E += e.yearshtml, e.yearshtml = null
          }
        return E += this._get(e, "yearSuffix"), g && (E += (!a && f && C ? "" : "&#xa0;") + y), E += "</div>"
      },
      _adjustInstDate: function (e, t, s) {
        var i = e.drawYear + ("Y" === s ? t : 0),
          n = e.drawMonth + ("M" === s ? t : 0),
          a = Math.min(e.selectedDay, this._getDaysInMonth(i, n)) + ("D" === s ? t : 0),
          r = this._restrictMinMax(e, this._daylightSavingAdjust(new Date(i, n, a)));
        e.selectedDay = r.getDate(), e.drawMonth = e.selectedMonth = r.getMonth(), e.drawYear = e.selectedYear = r.getFullYear(), ("M" === s || "Y" === s) && this._notifyChange(e)
      },
      _restrictMinMax: function (e, t) {
        var s = this._getMinMaxDate(e, "min"),
          i = this._getMinMaxDate(e, "max"),
          n = s && s > t ? s : t;
        return i && n > i ? i : n
      },
      _notifyChange: function (e) {
        var t = this._get(e, "onChangeMonthYear");
        t && t.apply(e.input ? e.input[0] : null, [e.selectedYear, e.selectedMonth + 1, e])
      },
      _getNumberOfMonths: function (e) {
        var t = this._get(e, "numberOfMonths");
        return null == t ? [1, 1] : "number" == typeof t ? [1, t] : t
      },
      _getMinMaxDate: function (e, t) {
        return this._determineDate(e, this._get(e, t + "Date"), null)
      },
      _getDaysInMonth: function (e, t) {
        return 32 - this._daylightSavingAdjust(new Date(e, t, 32)).getDate()
      },
      _getFirstDayOfMonth: function (e, t) {
        return new Date(e, t, 1).getDay()
      },
      _canAdjustMonth: function (e, t, s, i) {
        var n = this._getNumberOfMonths(e),
          a = this._daylightSavingAdjust(new Date(s, i + (0 > t ? t : n[0] * n[1]), 1));
        return 0 > t && a.setDate(this._getDaysInMonth(a.getFullYear(), a.getMonth())), this._isInRange(e, a)
      },
      _isInRange: function (e, t) {
        var s, i, n = this._getMinMaxDate(e, "min"),
          a = this._getMinMaxDate(e, "max"),
          r = null,
          o = null,
          l = this._get(e, "yearRange");
        return l && (s = l.split(":"), i = (new Date).getFullYear(), r = parseInt(s[0], 10), o = parseInt(s[1], 10), s[0].match(/[+\-].*/) && (r += i), s[1].match(/[+\-].*/) && (o += i)), (!n || t.getTime() >= n.getTime()) && (!a || t.getTime() <= a.getTime()) && (!r || t.getFullYear() >= r) && (!o || o >= t.getFullYear())
      },
      _getFormatConfig: function (e) {
        var t = this._get(e, "shortYearCutoff");
        return t = "string" != typeof t ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
          shortYearCutoff: t,
          dayNamesShort: this._get(e, "dayNamesShort"),
          dayNames: this._get(e, "dayNames"),
          monthNamesShort: this._get(e, "monthNamesShort"),
          monthNames: this._get(e, "monthNames")
        }
      },
      _formatDate: function (e, t, s, i) {
        t || (e.currentDay = e.selectedDay, e.currentMonth = e.selectedMonth, e.currentYear = e.selectedYear);
        var n = t ? "object" == typeof t ? t : this._daylightSavingAdjust(new Date(i, s, t)) : this._daylightSavingAdjust(new Date(e.currentYear, e.currentMonth, e.currentDay));
        return this.formatDate(this._get(e, "dateFormat"), n, this._getFormatConfig(e))
      }
    }), e.fn.datepicker = function (t) {
      if (!this.length) return this;
      e.datepicker.initialized || (e(document).mousedown(e.datepicker._checkExternalClick), e.datepicker.initialized = !0), 0 === e("#" + e.datepicker._mainDivId).length && e("body").append(e.datepicker.dpDiv);
      var s = Array.prototype.slice.call(arguments, 1);
      return "string" != typeof t || "isDisabled" !== t && "getDate" !== t && "widget" !== t ? "option" === t && 2 === arguments.length && "string" == typeof arguments[1] ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(s)) : this.each(function () {
        "string" == typeof t ? e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this].concat(s)) : e.datepicker._attachDatepicker(this, t)
      }) : e.datepicker["_" + t + "Datepicker"].apply(e.datepicker, [this[0]].concat(s))
    }, e.datepicker = new n, e.datepicker.initialized = !1, e.datepicker.uuid = (new Date).getTime(), e.datepicker.version = "1.11.4", e.datepicker
  }), $.datepicker.regional.fr = {
    closeText: "Fermer",
    prevText: "&#x3c;Préc",
    nextText: "Suiv&#x3e;",
    currentText: "Courant",
    monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
    monthNamesShort: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun", "Jul", "Aoû", "Sep", "Oct", "Nov", "Déc"],
    dayNames: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"],
    dayNamesShort: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
    dayNamesMin: ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"],
    dateFormat: "dd/mm/y",
    firstDay: 1,
    isRTL: !1
  }, $.datepicker.regional.es = {
    closeText: "Cerrar",
    prevText: "&#x3c;Ant",
    nextText: "Sig&#x3e;",
    currentText: "Hoy",
    monthNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    dayNames: ["Domingo", "Lunes", "Martes", "Mi&eacute;rcoles", "Jueves", "Viernes", "S&aacute;bado"],
    dayNamesShort: ["Dom", "Lun", "Mar", "Mi&eacute;", "Juv", "Vie", "S&aacute;b"],
    dayNamesMin: ["Do", "Lu", "Ma", "Mi", "Ju", "Vi", "S&aacute;"],
    dateFormat: "dd/mm/y",
    firstDay: 0,
    isRTL: !1
  }, $.datepicker.regional.de = {
    closeText: "schließen",
    prevText: "&#x3c;zurück",
    nextText: "Vor&#x3e;",
    currentText: "heute",
    monthNames: ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"],
    monthNamesShort: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"],
    dayNames: ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
    dayNamesShort: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    dayNamesMin: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"],
    dateFormat: "dd/mm/y",
    firstDay: 1,
    isRTL: !1
  }, $.datepicker.regional.ru = {
    closeText: "Ð—Ð°ÐºÑ€Ñ‹Ñ‚ÑŒ",
    prevText: "&#x3c;ÐŸÑ€ÐµÐ´",
    nextText: "Ð¡Ð»ÐµÐ´&#x3e;",
    currentText: "Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ",
    monthNames: ["Ð¯Ð½Ð²Ð°Ñ€ÑŒ", "Ð¤ÐµÐ²Ñ€Ð°Ð»ÑŒ", "ÐœÐ°Ñ€Ñ‚", "ÐÐ¿Ñ€ÐµÐ»ÑŒ", "ÐœÐ°Ð¹", "Ð˜ÑŽÐ½ÑŒ", "Ð˜ÑŽÐ»ÑŒ", "ÐÐ²Ð³ÑƒÑÑ‚", "Ð¡ÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ", "ÐžÐºÑ‚ÑÐ±Ñ€ÑŒ", "ÐÐ¾ÑÐ±Ñ€ÑŒ", "Ð”ÐµÐºÐ°Ð±Ñ€ÑŒ"],
    monthNamesShort: ["Ð¯Ð½Ð²", "Ð¤ÐµÐ²", "ÐœÐ°Ñ€", "ÐÐ¿Ñ€", "ÐœÐ°Ð¹", "Ð˜ÑŽÐ½", "Ð˜ÑŽÐ»", "ÐÐ²Ð³", "Ð¡ÐµÐ½", "ÐžÐºÑ‚", "ÐÐ¾Ñ", "Ð”ÐµÐº"],
    dayNames: ["Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ", "Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº", "Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº", "ÑÑ€ÐµÐ´Ð°", "Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³", "Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°", "ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°"],
    dayNamesShort: ["Ð²ÑÐº", "Ð¿Ð½Ð´", "Ð²Ñ‚Ñ€", "ÑÑ€Ð´", "Ñ‡Ñ‚Ð²", "Ð¿Ñ‚Ð½", "ÑÐ±Ñ‚"],
    dayNamesMin: ["Ð’Ñ", "ÐŸÐ½", "Ð’Ñ‚", "Ð¡Ñ€", "Ð§Ñ‚", "ÐŸÑ‚", "Ð¡Ð±"],
    dateFormat: "dd/mm/y",
    firstDay: 1,
    isRTL: !1
  }, $.datepicker.regional.it = {
    closeText: "Chiudi",
    prevText: "&#x3c;Prec",
    nextText: "Succ&#x3e;",
    currentText: "Oggi",
    monthNames: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"],
    monthNamesShort: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
    dayNames: ["Domenica", "Luned&#236", "Marted&#236", "Mercoled&#236", "Gioved&#236", "Venerd&#236", "Sabato"],
    dayNamesShort: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"],
    dayNamesMin: ["Do", "Lu", "Ma", "Me", "Gio", "Ve", "Sa"],
    dateFormat: "dd/mm/y",
    firstDay: 1,
    isRTL: !1
  };
var keys = {
    37: 1,
    38: 1,
    39: 1,
    40: 1
  },
  mousewheelevt = /Firefox/i.test(navigator.userAgent) ? "DOMMouseScroll" : "mousewheel";
$("#browserhappy a.browserhappy-close").click(function () {
    $("#browserhappy").remove()
  }), setBrowserHappy(),
  function (e) {
    "use strict";

    function t(e, t) {
      return e.stage - t.stage
    }

    function s(e, t) {
      for (var s = 0; s < t.length; s += 1) {
        var i = t[s],
          n = e[i.name] || {};
        _(i.params, function (e, t) {
          "undefined" == typeof n[t] && (n[t] = e.D)
        }), e[i.name] = n
      }
    }

    function i(i, n) {
      i = i || {}, n = n || e.DefaultModules, i = "function" == typeof i ? i() : JSON.parse(JSON.stringify(i)), this.finished = !1, this.state = {
        SampleRate: i.SampleRate || e.SampleRate
      }, n = n.slice(), n.sort(t), this.modules = n, s(i, n);
      for (var a = 0; a < this.modules.length; a += 1) {
        var r = this.modules[a];
        this.modules[a].setup(this.state, i[r.name])
      }
    }

    function n() {
      return _(e.Module, function () {
        return {}
      })
    }

    function a(e) {
      for (var t in e) 0 == C(e[t]).length && delete e[t]
    }

    function r(e) {
      return new Function("$", "block", "var TAU = Math.PI * 2;\nvar sample;\nvar phase = +$.generatorPhase,\n A = +$.generatorA, ASlide = +$.generatorASlide,\n B = +$.generatorB, BSlide = +$.generatorBSlide;\n\nfor(var i = 0; i < block.length; i++){\n var phaseSpeed = block[i];\n phase += phaseSpeed;\n if(phase > TAU){ phase -= TAU };\n A += ASlide; B += BSlide;\n   A = A < 0 ? 0 : A > 1 ? 1 : A;\n   B = B < 0 ? 0 : B > 1 ? 1 : B;\n" + e + " block[i] = sample;\n}\n\n$.generatorPhase = phase;\n$.generatorA = A;\n$.generatorB = B;\nreturn block.length;\n")
    }

    function o(t) {
      function s(e) {
        for (var t = 0; t < e.length; t += 1) r[o] = e.charCodeAt(t), o++
      }

      function i(e, t) {
        0 >= t || (r[o] = 255 & e, o++, i(e >> 8, t - 1))
      }
      "undefined" != typeof Float32Array && h(t instanceof Float32Array, "data must be an Float32Array");
      var n = b * v >> 3,
        a = e.SampleRate * n,
        r = E(44 + 2 * t.length),
        o = 0;
      return s("RIFF"), i(36 + 2 * t.length, 4), s("WAVEfmt "), i(16, 4), i(1, 2), i(b, 2), i(e.SampleRate, 4), i(a, 4), i(n, 2), i(v, 2), s("data"), i(2 * t.length, 4), l(r.subarray(o), t), new Audio("data:audio/wav;base64," + d(r))
    }

    function l(e, t) {
      h(e.length / 2 == t.length, "the target buffer must be twice as large as the iinput");
      for (var s = 0, i = 0; i < t.length; i++) {
        var n = +t[i],
          a = 32767 * n | 0;
        a = -32768 > a ? -32768 : a > 32767 ? 32767 : a, a += 0 > a ? 65536 : 0, e[s] = 255 & a, s++, e[s] = a >> 8, s++
      }
    }

    function d(e) {
      for (var t = 32768, s = "", i = 0; i < e.length; i += t) {
        var n = Math.min(i + t, e.length);
        s += String.fromCharCode.apply(null, e.subarray(i, n))
      }
      return btoa(s)
    }

    function c() {
      return "undefined" != typeof AudioContext ? (new AudioContext).sampleRate : 44100
    }

    function h(e, t) {
      if (!e) throw new Error(t)
    }

    function u(e, t, s) {
      return e = +e, t = +t, s = +s, t > e ? +t : e > s ? +s : +e
    }

    function p(e) {
      return e = +e, 0 > e ? 0 : e > 1 ? 1 : +e
    }

    function _(e, t) {
      var s = {};
      for (var i in e) e.hasOwnProperty(i) && (s[i] = t(e[i], i));
      return s
    }

    function m(e, t) {
      var s = Math.random();
      return void 0 !== e && (s *= e), void 0 !== t && (s += t), s
    }

    function f(e) {
      return e[e.length * Math.random() | 0]
    }

    function C(e) {
      var t = [];
      for (var s in e) t.push(s);
      return t
    }

    function g(e) {
      if ("undefined" == typeof Float32Array)
        for (var t = new Array(e), s = 0; s < t.length; s++) t[s] = 0;
      return new Float32Array(e)
    }

    function E(e) {
      if ("undefined" == typeof Uint8Array)
        for (var t = new Array(e), s = 0; s < t.length; s++) t[s] = 0;
      return new Uint8Array(e)
    }
    var y = (String.fromCharCode, 2 * +Math.PI),
      v = 16,
      b = 1,
      S = Math.sin,
      L = Math.pow,
      D = Math.abs,
      I = 1e-6;
    e.SampleRate = 0, e.Sec = 0, e.SetSampleRate = function (t) {
      e.SampleRate = 0 | t, e.Sec = 0 | t
    }, e.SetSampleRate(c()), e.Sound = function (t) {
      var s = new i(t, e.DefaultModules),
        n = g(s.getSamplesLeft());
      return s.generate(n), o(n)
    }, e.Sounds = function (t, s, i) {
      function n() {
        if (0 == o.length) return void(s && s(sounds));
        var r = o.shift();
        a[r] = e.Sound(t[r]), l++, i && i(r, l, d), window.setTimeout(n, 30)
      }
      var a = {},
        r = {};
      r._audio = a;
      var o = [];
      _(t, function (e, t) {
        r[t] = function () {
          "undefined" != typeof a[t] && (a[t].currentTime = 0, a[t].play())
        }, o.push(t)
      });
      var l = 0,
        d = o.length;
      return n(), r
    }, e.SoundsImmediate = function (t) {
      var s = {},
        i = {};
      return i._audio = s, _(t, function (t, n) {
        s[n] = e.Sound(t), i[n] = function () {
          "undefined" != typeof s[n] && (s[n].currentTime = 0, s[n].play())
        }
      }), i
    }, "undefined" != typeof AudioContext ? (e.Node = function (t, s, n, a, r) {
      var o = t.createScriptProcessor(a, 0, 1),
        l = new i(s, n || e.DefaultModules);
      return o.onaudioprocess = function (e) {
        var t = e.outputBuffer.getChannelData(0);
        l.generate(t), !r && l.finished && setTimeout(function () {
          o.disconnect()
        }, 30)
      }, o
    }, e.Live = function (t, s, i) {
      i = i || 2048;
      var n = {},
        a = new AudioContext,
        r = a.createGain();
      return r.connect(a.destination), n._context = a, n._volume = r, _(t, function (t, o) {
        n[o] = function () {
          var n = e.Node(a, t, s, i);
          n.connect(r)
        }
      }), n._close = function () {
        a.close()
      }, n._play = function (t) {
        var n = e.Node(a, t, s, i);
        n.connect(r)
      }, n
    }) : e.Live = e.Sounds, e.Module = {}, e.G = {};
    var T = e.stage = {
      PhaseSpeed: 0,
      PhaseSpeedMod: 10,
      Generator: 20,
      SampleMod: 30,
      Volume: 40
    };
    e.InitDefaultParams = s, e.Processor = i, i.prototype = {
      generate: function (e) {
        for (var t = 0; t < e.length; t += 1) e[t] = 0;
        if (!this.finished) {
          for (var s = this.state, i = 0 | e.length, t = 0; t < this.modules.length; t += 1) {
            var n = this.modules[t],
              a = 0 | n.process(s, e.subarray(0, i));
            i = Math.min(i, a)
          }
          i < e.length && (this.finished = !0);
          for (var t = i; t < e.length; t++) e[t] = 0
        }
      },
      getSamplesLeft: function () {
        for (var e = 0, t = 0; t < this.state.envelopes.length; t += 1) e += this.state.envelopes[t].N;
        return 0 === e && (e = 3 * this.state.SampleRate), e
      }
    }, e.Module.Frequency = {
      name: "Frequency",
      params: {
        Start: {
          L: 30,
          H: 1800,
          D: 440
        },
        Min: {
          L: 30,
          H: 1800,
          D: 30
        },
        Max: {
          L: 30,
          H: 1800,
          D: 1800
        },
        Slide: {
          L: -1,
          H: 1,
          D: 0
        },
        DeltaSlide: {
          L: -1,
          H: 1,
          D: 0
        },
        RepeatSpeed: {
          L: 0,
          H: 3,
          D: 0
        },
        ChangeAmount: {
          L: -12,
          H: 12,
          D: 0
        },
        ChangeSpeed: {
          L: 0,
          H: 1,
          D: 0
        }
      },
      stage: T.PhaseSpeed,
      setup: function (e, t) {
        var s = e.SampleRate;
        e.phaseParams = t, e.phaseSpeed = t.Start * y / s, e.phaseSpeedMax = t.Max * y / s, e.phaseSpeedMin = t.Min * y / s, e.phaseSpeedMin = Math.min(e.phaseSpeedMin, e.phaseSpeed), e.phaseSpeedMax = Math.max(e.phaseSpeedMax, e.phaseSpeed), e.phaseSlide = 1 + 64 * L(t.Slide, 3) / s, e.phaseDeltaSlide = L(t.DeltaSlide, 3) / (1e3 * s), e.repeatTime = 0, e.repeatLimit = 1 / 0, t.RepeatSpeed > 0 && (e.repeatLimit = t.RepeatSpeed * s), e.arpeggiatorTime = 0, e.arpeggiatorLimit = t.ChangeSpeed * s, 0 == t.ChangeAmount && (e.arpeggiatorLimit = 1 / 0), e.arpeggiatorMod = 1 + t.ChangeAmount / 12
      },
      process: function (e, t) {
        for (var s = +e.phaseSpeed, i = +e.phaseSpeedMin, n = +e.phaseSpeedMax, a = +e.phaseSlide, r = +e.phaseDeltaSlide, o = e.repeatTime, l = e.repeatLimit, d = e.arpeggiatorTime, c = e.arpeggiatorLimit, h = e.arpeggiatorMod, u = 0; u < t.length; u++) {
          if (a += r, s *= a, s = i > s ? i : s > n ? n : s, o > l) return this.setup(e, e.phaseParams), u + this.process(e, t.subarray(u)) - 1;
          o++, d > c && (s *= h, d = 0, c = 1 / 0), d++, t[u] += s
        }
        return e.repeatTime = o, e.arpeggiatorTime = d, e.arpeggiatorLimit = c, e.phaseSpeed = s, e.phaseSlide = a, t.length
      }
    }, e.Module.Vibrato = {
      name: "Vibrato",
      params: {
        Depth: {
          L: 0,
          H: 1,
          D: 0
        },
        DepthSlide: {
          L: -1,
          H: 1,
          D: 0
        },
        Frequency: {
          L: .01,
          H: 48,
          D: 0
        },
        FrequencySlide: {
          L: -1,
          H: 1,
          D: 0
        }
      },
      stage: T.PhaseSpeedMod,
      setup: function (e, t) {
        var s = e.SampleRate;
        e.vibratoPhase = 0, e.vibratoDepth = t.Depth, e.vibratoPhaseSpeed = t.Frequency * y / s, e.vibratoPhaseSpeedSlide = 1 + 3 * L(t.FrequencySlide, 3) / s, e.vibratoDepthSlide = t.DepthSlide / s
      },
      process: function (e, t) {
        var s = +e.vibratoPhase,
          i = +e.vibratoDepth,
          n = +e.vibratoPhaseSpeed,
          a = +e.vibratoPhaseSpeedSlide,
          r = +e.vibratoDepthSlide;
        if (0 == i && 0 >= r) return t.length;
        for (var o = 0; o < t.length; o++) s += n, s > y && (s -= y), t[o] += t[o] * S(s) * i, n *= a, i += r, i = p(i);
        return e.vibratoPhase = s, e.vibratoDepth = i, e.vibratoPhaseSpeed = n, t.length
      }
    }, e.Module.Generator = {
      name: "Generator",
      params: {
        Func: {
          C: e.G,
          D: "square"
        },
        A: {
          L: 0,
          H: 1,
          D: 0
        },
        B: {
          L: 0,
          H: 1,
          D: 0
        },
        ASlide: {
          L: -1,
          H: 1,
          D: 0
        },
        BSlide: {
          L: -1,
          H: 1,
          D: 0
        }
      },
      stage: T.Generator,
      setup: function (t, s) {
        t.generatorPhase = 0, "string" == typeof s.Func ? t.generator = e.G[s.Func] : t.generator = s.Func, "object" == typeof t.generator && (t.generator = t.generator.create()), h("function" == typeof t.generator, "generator must be a function"), t.generatorA = s.A, t.generatorASlide = s.ASlide, t.generatorB = s.B, t.generatorBSlide = s.BSlide
      },
      process: function (e, t) {
        return e.generator(e, t)
      }
    };
    var w = 65536;
    e.Module.Guitar = {
      name: "Guitar",
      params: {
        A: {
          L: 0,
          H: 1,
          D: 1
        },
        B: {
          L: 0,
          H: 1,
          D: 1
        },
        C: {
          L: 0,
          H: 1,
          D: 1
        }
      },
      stage: T.Generator,
      setup: function (e, t) {
        e.guitarA = t.A, e.guitarB = t.B, e.guitarC = t.C, e.guitarBuffer = g(w), e.guitarHead = 0;
        for (var s = e.guitarBuffer, i = 0; i < s.length; i++) s[i] = 2 * Math.random() - 1
      },
      process: function (e, t) {
        for (var s = w, i = s - 1, n = +e.guitarA, a = +e.guitarB, r = +e.guitarC, o = n + a + r, l = e.guitarHead, d = e.guitarBuffer, c = 0; c < t.length; c++) {
          var h = y / t[c] | 0;
          h = h > s ? s : h;
          var u = l - h + s & i;
          d[l] = (d[u - 0 + s & i] * n + d[u - 1 + s & i] * a + d[u - 2 + s & i] * r) / o, t[c] = d[l], l = l + 1 & i
        }
        return e.guitarHead = l, t.length
      }
    }, e.Module.Filter = {
      name: "Filter",
      params: {
        LP: {
          L: 0,
          H: 1,
          D: 1
        },
        LPSlide: {
          L: -1,
          H: 1,
          D: 0
        },
        LPResonance: {
          L: 0,
          H: 1,
          D: 0
        },
        HP: {
          L: 0,
          H: 1,
          D: 0
        },
        HPSlide: {
          L: -1,
          H: 1,
          D: 0
        }
      },
      stage: T.SampleMod + 0,
      setup: function (e, t) {
        e.FilterEnabled = t.HP > I || t.LP < 1 - I, e.LPEnabled = t.LP < 1 - I, e.LP = L(t.LP, 3) / 10, e.LPSlide = 1 + 100 * t.LPSlide / e.SampleRate, e.LPPos = 0, e.LPPosSlide = 0, e.LPDamping = 5 / (1 + 20 * L(t.LPResonance, 2)) * (.01 + t.LP), e.LPDamping = 1 - Math.min(e.LPDamping, .8), e.HP = L(t.HP, 2) / 10, e.HPPos = 0, e.HPSlide = 1 + 100 * t.HPSlide / e.SampleRate
      },
      enabled: function (e) {
        return e.FilterEnabled
      },
      process: function (e, t) {
        if (!this.enabled(e)) return t.length;
        for (var s = +e.LP, i = +e.LPPos, n = +e.LPPosSlide, a = +e.LPSlide, r = +e.LPDamping, o = +e.LPEnabled, l = +e.HP, d = +e.HPPos, c = +e.HPSlide, h = 0; h < t.length; h++) {
          (l > I || -I > l) && (l *= c, l = I > l ? I : l > .1 ? .1 : l);
          var u = i;
          s *= a, s = 0 > s ? s = 0 : s > .1 ? .1 : s;
          var p = t[h];
          o ? (n += (p - i) * s, n *= r) : (i = p, n = 0), i += n, d += i - u, d *= 1 - l, t[h] = d
        }
        return e.LPPos = i, e.LPPosSlide = n, e.LP = s, e.HP = l, e.HPPos = d, t.length
      }
    };
    var A = 1024;
    e.Module.Phaser = {
      name: "Phaser",
      params: {
        Offset: {
          L: -1,
          H: 1,
          D: 0
        },
        Sweep: {
          L: -1,
          H: 1,
          D: 0
        }
      },
      stage: T.SampleMod + 1,
      setup: function (e, t) {
        e.phaserBuffer = g(A), e.phaserPos = 0, e.phaserOffset = L(t.Offset, 2) * (A - 4), e.phaserOffsetSlide = 4e3 * L(t.Sweep, 3) / e.SampleRate
      },
      enabled: function (e) {
        return D(e.phaserOffsetSlide) > I || D(e.phaserOffset) > I
      },
      process: function (e, t) {
        if (!this.enabled(e)) return t.length;
        for (var s = A, i = s - 1, n = e.phaserBuffer, a = 0 | e.phaserPos, r = +e.phaserOffset, o = +e.phaserOffsetSlide, l = 0; l < t.length; l++) {
          r += o, 0 > r && (r = -r, o = -o), r > i && (r = i, o = 0), n[a] = t[l];
          var d = a - (0 | r) + s & i;
          t[l] += n[d], a = a + 1 & i | 0
        }
        return e.phaserPos = a, e.phaserOffset = r, t.length
      }
    }, e.Module.Volume = {
      name: "Volume",
      params: {
        Master: {
          L: 0,
          H: 1,
          D: .5
        },
        Attack: {
          L: .001,
          H: 1,
          D: .01
        },
        Sustain: {
          L: 0,
          H: 2,
          D: .3
        },
        Punch: {
          L: 0,
          H: 3,
          D: 1
        },
        Decay: {
          L: .001,
          H: 2,
          D: 1
        }
      },
      stage: T.Volume,
      setup: function (e, t) {
        var s = e.SampleRate,
          i = t.Master,
          n = i * (1 + t.Punch);
        e.envelopes = [{
          S: 0,
          E: i,
          N: t.Attack * s | 0
        }, {
          S: n,
          E: i,
          N: t.Sustain * s | 0
        }, {
          S: i,
          E: 0,
          N: t.Decay * s | 0
        }];
        for (var a = 0; a < e.envelopes.length; a += 1) {
          var r = e.envelopes[a];
          r.G = (r.E - r.S) / r.N
        }
      },
      process: function (e, t) {
        for (var s = 0; e.envelopes.length > 0 && s < t.length;) {
          for (var i = e.envelopes[0], n = i.S, a = i.G, r = 0 | Math.min(t.length - s, i.N), o = s + r | 0; o > s; s += 1) t[s] *= n, n += a, n = u(n, 0, 10);
          i.S = n, i.N -= r, i.N <= 0 && e.envelopes.shift()
        }
        return s
      }
    }, e.DefaultModules = [e.Module.Frequency, e.Module.Vibrato, e.Module.Generator, e.Module.Filter, e.Module.Phaser, e.Module.Volume], e.DefaultModules.sort(t), e.EmptyParams = n, e._RemoveEmptyParams = a, e.Preset = {
      Reset: function () {
        return n()
      },
      Coin: function () {
        var e = n();
        return e.Frequency.Start = m(880, 660), e.Volume.Sustain = m(.1), e.Volume.Decay = m(.4, .1), e.Volume.Punch = m(.3, .3), m() < .5 && (e.Frequency.ChangeSpeed = m(.15, .1), e.Frequency.ChangeAmount = m(8, 4)), a(e), e
      },
      Laser: function () {
        var e = n();
        return e.Generator.Func = f(["square", "saw", "sine"]), m() < .33 ? (e.Frequency.Start = m(880, 440), e.Frequency.Min = m(.1), e.Frequency.Slide = m(.3, -.8)) : (e.Frequency.Start = m(1200, 440), e.Frequency.Min = e.Frequency.Start - m(880, 440), e.Frequency.Min < 110 && (e.Frequency.Min = 110), e.Frequency.Slide = m(.3, -1)), m() < .5 ? (e.Generator.A = m(.5), e.Generator.ASlide = m(.2)) : (e.Generator.A = m(.5, .4), e.Generator.ASlide = m(.7)), e.Volume.Sustain = m(.2, .1), e.Volume.Decay = m(.4), m() < .5 && (e.Volume.Punch = m(.3)), m() < .33 && (e.Phaser.Offset = m(.2), e.Phaser.Sweep = m(.2)), m() < .5 && (e.Filter.HP = m(.3)), a(e), e
      },
      Explosion: function () {
        var e = n();
        return e.Generator.Func = "noise", m() < .5 ? (e.Frequency.Start = m(440, 40), e.Frequency.Slide = m(.4, -.1)) : (e.Frequency.Start = m(1600, 220), e.Frequency.Slide = m(-.2, -.2)), m() < .2 && (e.Frequency.Slide = 0), m() < .3 && (e.Frequency.RepeatSpeed = m(.5, .3)), e.Volume.Sustain = m(.3, .1), e.Volume.Decay = m(.5), e.Volume.Punch = m(.6, .2), m() < .5 && (e.Phaser.Offset = m(.9, -.3), e.Phaser.Sweep = m(-.3)), m() < .33 && (e.Frequency.ChangeSpeed = m(.3, .6), e.Frequency.ChangeAmount = m(24, -12)), a(e), e
      },
      Powerup: function () {
        var e = n();
        return m() < .5 ? e.Generator.Func = "saw" : e.Generator.A = m(.6), e.Frequency.Start = m(220, 440), m() < .5 ? (e.Frequency.Slide = m(.5, .2), e.Frequency.RepeatSpeed = m(.4, .4)) : (e.Frequency.Slide = m(.2, .05), m() < .5 && (e.Vibrato.Depth = m(.6, .1), e.Vibrato.Frequency = m(30, 10))), e.Volume.Sustain = m(.4), e.Volume.Decay = m(.4, .1), a(e), e
      },
      Hit: function () {
        var e = n();
        return e.Generator.Func = f(["square", "saw", "noise"]), e.Generator.A = m(.6), e.Generator.ASlide = m(1, -.5), e.Frequency.Start = m(880, 220), e.Frequency.Slide = -m(.4, .3), e.Volume.Sustain = m(.1), e.Volume.Decay = m(.2, .1), m() < .5 && (e.Filter.HP = m(.3)), a(e), e
      },
      Jump: function () {
        var e = n();
        return e.Generator.Func = "square", e.Generator.A = m(.6), e.Frequency.Start = m(330, 330), e.Frequency.Slide = m(.4, .2), e.Volume.Sustain = m(.3, .1), e.Volume.Decay = m(.2, .1), m() < .5 && (e.Filter.HP = m(.3)), m() < .3 && (e.Filter.LP = m(-.6, 1)), a(e), e
      },
      Select: function () {
        var e = n();
        return e.Generator.Func = f(["square", "saw"]), e.Generator.A = m(.6), e.Frequency.Start = m(660, 220), e.Volume.Sustain = m(.1, .1), e.Volume.Decay = m(.2), e.Filter.HP = .2, a(e), e
      },
      Lucky: function () {
        var t = n();
        return _(t, function (t, s) {
          var i = e.Module[s].params;
          _(i, function (e, s) {
            if (e.C) {
              var i = C(e.C);
              t[s] = i[i.length * Math.random() | 0]
            } else t[s] = Math.random() * (e.H - e.L) + e.L
          })
        }), t.Volume.Master = .4, t.Filter = {}, a(t), t
      }
    }, e.G.unoise = r("sample = Math.random();"), e.G.sine = r("sample = Math.sin(phase);"), e.G.saw = r("sample = 2*(phase/TAU - ((phase/TAU + 0.5)|0));"), e.G.triangle = r("sample = Math.abs(4 * ((phase/TAU - 0.25)%1) - 2) - 1;"), e.G.square = r("var s = Math.sin(phase); sample = s > A ? 1.0 : s < A ? -1.0 : A;"), e.G.synth = r("sample = Math.sin(phase) + .5*Math.sin(phase/2) + .3*Math.sin(phase/4);");
    e.G.noise = r("if(phase % TAU < 4){__noiseLast = Math.random() * 2 - 1;} sample = __noiseLast;"), e.G.string = {
      create: function () {
        for (var e = 65536, t = e - 1, s = g(e), i = 0; i < s.length; i++) s[i] = 2 * Math.random() - 1;
        var n = 0;
        return function (i, a) {
          for (var r = 2 * Math.PI, o = +i.generatorA, l = +i.generatorASlide, d = +i.generatorB, c = +i.generatorBSlide, h = s, u = 0; u < a.length; u++) {
            var p = a[u],
              _ = r / p | 0;
            o += l, d += c, o = 0 > o ? 0 : o > 1 ? 1 : o, d = 0 > d ? 0 : d > 1 ? 1 : d;
            var m = n - _ + e & t,
              f = (1 * h[m - 0 + e & t] + h[m - 1 + e & t] * o + h[m - 2 + e & t] * d) / (1 + o + d);
            h[n] = f, a[u] = h[n], n = n + 1 & t
          }
          return i.generatorA = o, i.generatorB = d, a.length
        }
      }
    }, e.CreateAudio = o, e.DownloadAsFile = function (e) {
      h(e instanceof Audio, "input must be an Audio object"), document.location.href = e.src
    }, e.Util = {}, e.Util.CopyFToU8 = l, e._createFloatArray = g
  }(this.jsfx = {}), ! function () {
    "use strict";

    function e(e, t) {
      if (e) {
        if (t.element_.classList.contains(t.CssClasses_.MDL_JS_RIPPLE_EFFECT)) {
          var s = document.createElement("span");
          s.classList.add(t.CssClasses_.MDL_RIPPLE_CONTAINER), s.classList.add(t.CssClasses_.MDL_JS_RIPPLE_EFFECT);
          var i = document.createElement("span");
          i.classList.add(t.CssClasses_.MDL_RIPPLE), s.appendChild(i), e.appendChild(s)
        }
        e.addEventListener("click", function (s) {
          s.preventDefault();
          var i = e.href.split("#")[1],
            n = t.element_.querySelector("#" + i);
          t.resetTabState_(), t.resetPanelState_(), e.classList.add(t.CssClasses_.ACTIVE_CLASS), n.classList.add(t.CssClasses_.ACTIVE_CLASS)
        })
      }
    }

    function t(e, t, s, i) {
      function n() {
        var n = e.href.split("#")[1],
          a = i.content_.querySelector("#" + n);
        i.resetTabState_(t), i.resetPanelState_(s), e.classList.add(i.CssClasses_.IS_ACTIVE), a.classList.add(i.CssClasses_.IS_ACTIVE)
      }
      if (i.tabBar_.classList.contains(i.CssClasses_.JS_RIPPLE_EFFECT)) {
        var a = document.createElement("span");
        a.classList.add(i.CssClasses_.RIPPLE_CONTAINER), a.classList.add(i.CssClasses_.JS_RIPPLE_EFFECT);
        var r = document.createElement("span");
        r.classList.add(i.CssClasses_.RIPPLE), a.appendChild(r), e.appendChild(a)
      }
      e.addEventListener("click", function (t) {
        "#" === e.getAttribute("href").charAt(0) && (t.preventDefault(), n())
      }), e.show = n
    }
    var s = {
      upgradeDom: function (e, t) {},
      upgradeElement: function (e, t) {},
      upgradeElements: function (e) {},
      upgradeAllRegistered: function () {},
      registerUpgradedCallback: function (e, t) {},
      register: function (e) {},
      downgradeElements: function (e) {}
    };
    s = function () {
      function e(e, t) {
        for (var s = 0; s < h.length; s++)
          if (h[s].className === e) return "undefined" != typeof t && (h[s] = t), h[s];
        return !1
      }

      function t(e) {
        var t = e.getAttribute("data-upgraded");
        return null === t ? [""] : t.split(",")
      }

      function s(e, s) {
        var i = t(e);
        return -1 !== i.indexOf(s)
      }

      function i(t, s) {
        if ("undefined" == typeof t && "undefined" == typeof s)
          for (var a = 0; a < h.length; a++) i(h[a].className, h[a].cssClass);
        else {
          var r = t;
          if ("undefined" == typeof s) {
            var o = e(r);
            o && (s = o.cssClass)
          }
          for (var l = document.querySelectorAll("." + s), d = 0; d < l.length; d++) n(l[d], r)
        }
      }

      function n(i, n) {
        if (!("object" == typeof i && i instanceof Element)) throw new Error("Invalid argument provided to upgrade MDL element.");
        var a = t(i),
          r = [];
        if (n) s(i, n) || r.push(e(n));
        else {
          var o = i.classList;
          h.forEach(function (e) {
            o.contains(e.cssClass) && -1 === r.indexOf(e) && !s(i, e.className) && r.push(e)
          })
        }
        for (var l, d = 0, c = r.length; c > d; d++) {
          if (l = r[d], !l) throw new Error("Unable to find a registered component for the given class.");
          a.push(l.className), i.setAttribute("data-upgraded", a.join(","));
          var _ = new l.classConstructor(i);
          _[p] = l, u.push(_);
          for (var m = 0, f = l.callbacks.length; f > m; m++) l.callbacks[m](i);
          l.widget && (i[l.className] = _);
          var C;
          "CustomEvent" in window && "function" == typeof window.CustomEvent ? C = new Event("mdl-componentupgraded", {
            bubbles: !0,
            cancelable: !1
          }) : (C = document.createEvent("Events"), C.initEvent("mdl-componentupgraded", !0, !0)), i.dispatchEvent(C)
        }
      }

      function a(e) {
        Array.isArray(e) || (e = "function" == typeof e.item ? Array.prototype.slice.call(e) : [e]);
        for (var t, s = 0, i = e.length; i > s; s++) t = e[s], t instanceof HTMLElement && (n(t), t.children.length > 0 && a(t.children))
      }

      function r(t) {
        var s = "undefined" == typeof t.widget && "undefined" == typeof t.widget,
          i = !0;
        s || (i = t.widget || t.widget);
        var n = {
          classConstructor: t.constructor || t.constructor,
          className: t.classAsString || t.classAsString,
          cssClass: t.cssClass || t.cssClass,
          widget: i,
          callbacks: []
        };
        if (h.forEach(function (e) {
            if (e.cssClass === n.cssClass) throw new Error("The provided cssClass has already been registered: " + e.cssClass);
            if (e.className === n.className) throw new Error("The provided className has already been registered")
          }), t.constructor.prototype.hasOwnProperty(p)) throw new Error("MDL component classes must not have " + p + " defined as a property.");
        var a = e(t.classAsString, n);
        a || h.push(n)
      }

      function o(t, s) {
        var i = e(t);
        i && i.callbacks.push(s)
      }

      function l() {
        for (var e = 0; e < h.length; e++) i(h[e].className)
      }

      function d(e) {
        if (e) {
          var t = u.indexOf(e);
          u.splice(t, 1);
          var s = e.element_.getAttribute("data-upgraded").split(","),
            i = s.indexOf(e[p].classAsString);
          s.splice(i, 1), e.element_.setAttribute("data-upgraded", s.join(","));
          var n;
          "CustomEvent" in window && "function" == typeof window.CustomEvent ? n = new Event("mdl-componentdowngraded", {
            bubbles: !0,
            cancelable: !1
          }) : (n = document.createEvent("Events"), n.initEvent("mdl-componentdowngraded", !0, !0))
        }
      }

      function c(e) {
        var t = function (e) {
          u.filter(function (t) {
            return t.element_ === e
          }).forEach(d)
        };
        if (e instanceof Array || e instanceof NodeList)
          for (var s = 0; s < e.length; s++) t(e[s]);
        else {
          if (!(e instanceof Node)) throw new Error("Invalid argument provided to downgrade MDL nodes.");
          t(e)
        }
      }
      var h = [],
        u = [],
        p = "mdlComponentConfigInternal_";
      return {
        upgradeDom: i,
        upgradeElement: n,
        upgradeElements: a,
        upgradeAllRegistered: l,
        registerUpgradedCallback: o,
        register: r,
        downgradeElements: c
      }
    }(), s.ComponentConfigPublic, s.ComponentConfig, s.Component, s.upgradeDom = s.upgradeDom, s.upgradeElement = s.upgradeElement, s.upgradeElements = s.upgradeElements, s.upgradeAllRegistered = s.upgradeAllRegistered, s.registerUpgradedCallback = s.registerUpgradedCallback, s.register = s.register, s.downgradeElements = s.downgradeElements, window.componentHandler = s, window.componentHandler = s, window.addEventListener("load", function () {
      "classList" in document.createElement("div") && "querySelector" in document && "addEventListener" in window && Array.prototype.forEach ? (document.documentElement.classList.add("mdl-js"), s.upgradeAllRegistered()) : (s.upgradeElement = function () {}, s.register = function () {})
    }), Date.now || (Date.now = function () {
      return (new Date).getTime()
    }, Date.now = Date.now);
    for (var i = ["webkit", "moz"], n = 0; n < i.length && !window.requestAnimationFrame; ++n) {
      var a = i[n];
      window.requestAnimationFrame = window[a + "RequestAnimationFrame"], window.cancelAnimationFrame = window[a + "CancelAnimationFrame"] || window[a + "CancelRequestAnimationFrame"], window.requestAnimationFrame = window.requestAnimationFrame, window.cancelAnimationFrame = window.cancelAnimationFrame
    }
    if (/iP(ad|hone|od).*OS 6/.test(window.navigator.userAgent) || !window.requestAnimationFrame || !window.cancelAnimationFrame) {
      var r = 0;
      window.requestAnimationFrame = function (e) {
        var t = Date.now(),
          s = Math.max(r + 16, t);
        return setTimeout(function () {
          e(r = s)
        }, s - t)
      }, window.cancelAnimationFrame = clearTimeout, window.requestAnimationFrame = window.requestAnimationFrame, window.cancelAnimationFrame = window.cancelAnimationFrame
    }
    var o = function (e) {
      this.element_ = e, this.init()
    };
    window.MaterialButton = o, o.prototype.Constant_ = {}, o.prototype.CssClasses_ = {
      RIPPLE_EFFECT: "mdl-js-ripple-effect",
      RIPPLE_CONTAINER: "mdl-button__ripple-container",
      RIPPLE: "mdl-ripple"
    }, o.prototype.blurHandler_ = function (e) {
      e && this.element_.blur()
    }, o.prototype.disable = function () {
      this.element_.disabled = !0
    }, o.prototype.disable = o.prototype.disable, o.prototype.enable = function () {
      this.element_.disabled = !1
    }, o.prototype.enable = o.prototype.enable, o.prototype.init = function () {
      if (this.element_) {
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
          var e = document.createElement("span");
          e.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleElement_ = document.createElement("span"), this.rippleElement_.classList.add(this.CssClasses_.RIPPLE), e.appendChild(this.rippleElement_), this.boundRippleBlurHandler = this.blurHandler_.bind(this), this.rippleElement_.addEventListener("mouseup", this.boundRippleBlurHandler), this.element_.appendChild(e)
        }
        this.boundButtonBlurHandler = this.blurHandler_.bind(this), this.element_.addEventListener("mouseup", this.boundButtonBlurHandler), this.element_.addEventListener("mouseleave", this.boundButtonBlurHandler)
      }
    }, s.register({
      constructor: o,
      classAsString: "MaterialButton",
      cssClass: "mdl-js-button",
      widget: !0
    });
    var l = function (e) {
      this.element_ = e, this.init()
    };
    window.MaterialCheckbox = l, l.prototype.Constant_ = {
      TINY_TIMEOUT: .001
    }, l.prototype.CssClasses_ = {
      INPUT: "mdl-checkbox__input",
      BOX_OUTLINE: "mdl-checkbox__box-outline",
      FOCUS_HELPER: "mdl-checkbox__focus-helper",
      TICK_OUTLINE: "mdl-checkbox__tick-outline",
      RIPPLE_EFFECT: "mdl-js-ripple-effect",
      RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
      RIPPLE_CONTAINER: "mdl-checkbox__ripple-container",
      RIPPLE_CENTER: "mdl-ripple--center",
      RIPPLE: "mdl-ripple",
      IS_FOCUSED: "is-focused",
      IS_DISABLED: "is-disabled",
      IS_CHECKED: "is-checked",
      IS_UPGRADED: "is-upgraded"
    }, l.prototype.onChange_ = function (e) {
      this.updateClasses_()
    }, l.prototype.onFocus_ = function (e) {
      this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, l.prototype.onBlur_ = function (e) {
      this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, l.prototype.onMouseUp_ = function (e) {
      this.blur_()
    }, l.prototype.updateClasses_ = function () {
      this.checkDisabled(), this.checkToggleState()
    }, l.prototype.blur_ = function () {
      window.setTimeout(function () {
        this.inputElement_.blur()
      }.bind(this), this.Constant_.TINY_TIMEOUT)
    }, l.prototype.checkToggleState = function () {
      this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
    }, l.prototype.checkToggleState = l.prototype.checkToggleState, l.prototype.checkDisabled = function () {
      this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, l.prototype.checkDisabled = l.prototype.checkDisabled, l.prototype.disable = function () {
      this.inputElement_.disabled = !0, this.updateClasses_()
    }, l.prototype.disable = l.prototype.disable, l.prototype.enable = function () {
      this.inputElement_.disabled = !1, this.updateClasses_()
    }, l.prototype.enable = l.prototype.enable, l.prototype.check = function () {
      this.inputElement_.checked = !0, this.updateClasses_()
    }, l.prototype.check = l.prototype.check, l.prototype.uncheck = function () {
      this.inputElement_.checked = !1, this.updateClasses_()
    }, l.prototype.uncheck = l.prototype.uncheck, l.prototype.init = function () {
      if (this.element_) {
        this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT);
        var e = document.createElement("span");
        e.classList.add(this.CssClasses_.BOX_OUTLINE);
        var t = document.createElement("span");
        t.classList.add(this.CssClasses_.FOCUS_HELPER);
        var s = document.createElement("span");
        if (s.classList.add(this.CssClasses_.TICK_OUTLINE), e.appendChild(s), this.element_.appendChild(t), this.element_.appendChild(e), this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
          this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.boundRippleMouseUp = this.onMouseUp_.bind(this), this.rippleContainerElement_.addEventListener("mouseup", this.boundRippleMouseUp);
          var i = document.createElement("span");
          i.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(i), this.element_.appendChild(this.rippleContainerElement_)
        }
        this.boundInputOnChange = this.onChange_.bind(this), this.boundInputOnFocus = this.onFocus_.bind(this), this.boundInputOnBlur = this.onBlur_.bind(this), this.boundElementMouseUp = this.onMouseUp_.bind(this), this.inputElement_.addEventListener("change", this.boundInputOnChange), this.inputElement_.addEventListener("focus", this.boundInputOnFocus), this.inputElement_.addEventListener("blur", this.boundInputOnBlur), this.element_.addEventListener("mouseup", this.boundElementMouseUp), this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
      }
    }, s.register({
      constructor: l,
      classAsString: "MaterialCheckbox",
      cssClass: "mdl-js-checkbox",
      widget: !0
    });
    var d = function (e) {
      this.element_ = e, this.init()
    };
    window.MaterialIconToggle = d, d.prototype.Constant_ = {
      TINY_TIMEOUT: .001
    }, d.prototype.CssClasses_ = {
      INPUT: "mdl-icon-toggle__input",
      JS_RIPPLE_EFFECT: "mdl-js-ripple-effect",
      RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
      RIPPLE_CONTAINER: "mdl-icon-toggle__ripple-container",
      RIPPLE_CENTER: "mdl-ripple--center",
      RIPPLE: "mdl-ripple",
      IS_FOCUSED: "is-focused",
      IS_DISABLED: "is-disabled",
      IS_CHECKED: "is-checked"
    }, d.prototype.onChange_ = function (e) {
      this.updateClasses_()
    }, d.prototype.onFocus_ = function (e) {
      this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, d.prototype.onBlur_ = function (e) {
      this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, d.prototype.onMouseUp_ = function (e) {
      this.blur_()
    }, d.prototype.updateClasses_ = function () {
      this.checkDisabled(), this.checkToggleState()
    }, d.prototype.blur_ = function () {
      window.setTimeout(function () {
        this.inputElement_.blur()
      }.bind(this), this.Constant_.TINY_TIMEOUT)
    }, d.prototype.checkToggleState = function () {
      this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
    }, d.prototype.checkToggleState = d.prototype.checkToggleState, d.prototype.checkDisabled = function () {
      this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, d.prototype.checkDisabled = d.prototype.checkDisabled, d.prototype.disable = function () {
      this.inputElement_.disabled = !0, this.updateClasses_()
    }, d.prototype.disable = d.prototype.disable, d.prototype.enable = function () {
      this.inputElement_.disabled = !1, this.updateClasses_()
    }, d.prototype.enable = d.prototype.enable, d.prototype.check = function () {
      this.inputElement_.checked = !0, this.updateClasses_()
    }, d.prototype.check = d.prototype.check, d.prototype.uncheck = function () {
      this.inputElement_.checked = !1, this.updateClasses_()
    }, d.prototype.uncheck = d.prototype.uncheck, d.prototype.init = function () {
      if (this.element_) {
        if (this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT), this.element_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT)) {
          this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleContainerElement_.classList.add(this.CssClasses_.JS_RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.boundRippleMouseUp = this.onMouseUp_.bind(this), this.rippleContainerElement_.addEventListener("mouseup", this.boundRippleMouseUp);
          var e = document.createElement("span");
          e.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(e), this.element_.appendChild(this.rippleContainerElement_)
        }
        this.boundInputOnChange = this.onChange_.bind(this), this.boundInputOnFocus = this.onFocus_.bind(this), this.boundInputOnBlur = this.onBlur_.bind(this), this.boundElementOnMouseUp = this.onMouseUp_.bind(this), this.inputElement_.addEventListener("change", this.boundInputOnChange), this.inputElement_.addEventListener("focus", this.boundInputOnFocus), this.inputElement_.addEventListener("blur", this.boundInputOnBlur), this.element_.addEventListener("mouseup", this.boundElementOnMouseUp), this.updateClasses_(), this.element_.classList.add("is-upgraded")
      }
    }, s.register({
      constructor: d,
      classAsString: "MaterialIconToggle",
      cssClass: "mdl-js-icon-toggle",
      widget: !0
    });
    var c = function (e) {
      this.element_ = e, this.init()
    };
    window.MaterialMenu = c, c.prototype.Constant_ = {
      TRANSITION_DURATION_SECONDS: .3,
      TRANSITION_DURATION_FRACTION: .8,
      CLOSE_TIMEOUT: 150
    }, c.prototype.Keycodes_ = {
      ENTER: 13,
      ESCAPE: 27,
      SPACE: 32,
      UP_ARROW: 38,
      DOWN_ARROW: 40
    }, c.prototype.CssClasses_ = {
      CONTAINER: "mdl-menu__container",
      OUTLINE: "mdl-menu__outline",
      ITEM: "mdl-menu__item",
      ITEM_RIPPLE_CONTAINER: "mdl-menu__item-ripple-container",
      RIPPLE_EFFECT: "mdl-js-ripple-effect",
      RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
      RIPPLE: "mdl-ripple",
      IS_UPGRADED: "is-upgraded",
      IS_VISIBLE: "is-visible",
      IS_ANIMATING: "is-animating",
      BOTTOM_LEFT: "mdl-menu--bottom-left",
      BOTTOM_RIGHT: "mdl-menu--bottom-right",
      TOP_LEFT: "mdl-menu--top-left",
      TOP_RIGHT: "mdl-menu--top-right",
      UNALIGNED: "mdl-menu--unaligned"
    }, c.prototype.init = function () {
      if (this.element_) {
        var e = document.createElement("div");
        e.classList.add(this.CssClasses_.CONTAINER), this.element_.parentElement.insertBefore(e, this.element_), this.element_.parentElement.removeChild(this.element_), e.appendChild(this.element_), this.container_ = e;
        var t = document.createElement("div");
        t.classList.add(this.CssClasses_.OUTLINE), this.outline_ = t, e.insertBefore(t, this.element_);
        var s = this.element_.getAttribute("for") || this.element_.getAttribute("data-mdl-for"),
          i = null;
        s && (i = document.getElementById(s), i && (this.forElement_ = i, i.addEventListener("click", this.handleForClick_.bind(this)), i.addEventListener("keydown", this.handleForKeyboardEvent_.bind(this))));
        var n = this.element_.querySelectorAll("." + this.CssClasses_.ITEM);
        this.boundItemKeydown_ = this.handleItemKeyboardEvent_.bind(this), this.boundItemClick_ = this.handleItemClick_.bind(this);
        for (var a = 0; a < n.length; a++) n[a].addEventListener("click", this.boundItemClick_), n[a].tabIndex = "-1", n[a].addEventListener("keydown", this.boundItemKeydown_);
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT))
          for (this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), a = 0; a < n.length; a++) {
            var r = n[a],
              o = document.createElement("span");
            o.classList.add(this.CssClasses_.ITEM_RIPPLE_CONTAINER);
            var l = document.createElement("span");
            l.classList.add(this.CssClasses_.RIPPLE), o.appendChild(l), r.appendChild(o), r.classList.add(this.CssClasses_.RIPPLE_EFFECT)
          }
        this.element_.classList.contains(this.CssClasses_.BOTTOM_LEFT) && this.outline_.classList.add(this.CssClasses_.BOTTOM_LEFT), this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT) && this.outline_.classList.add(this.CssClasses_.BOTTOM_RIGHT), this.element_.classList.contains(this.CssClasses_.TOP_LEFT) && this.outline_.classList.add(this.CssClasses_.TOP_LEFT), this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) && this.outline_.classList.add(this.CssClasses_.TOP_RIGHT), this.element_.classList.contains(this.CssClasses_.UNALIGNED) && this.outline_.classList.add(this.CssClasses_.UNALIGNED), e.classList.add(this.CssClasses_.IS_UPGRADED)
      }
    }, c.prototype.handleForClick_ = function (e) {
      if (this.element_ && this.forElement_) {
        var t = this.forElement_.getBoundingClientRect(),
          s = this.forElement_.parentElement.getBoundingClientRect();
        this.element_.classList.contains(this.CssClasses_.UNALIGNED) || (this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT) ? (this.container_.style.right = s.right - t.right + "px", this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + "px") : this.element_.classList.contains(this.CssClasses_.TOP_LEFT) ? (this.container_.style.left = this.forElement_.offsetLeft + "px", this.container_.style.bottom = s.bottom - t.top + "px") : this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) ? (this.container_.style.right = s.right - t.right + "px", this.container_.style.bottom = s.bottom - t.top + "px") : (this.container_.style.left = this.forElement_.offsetLeft + "px", this.container_.style.top = this.forElement_.offsetTop + this.forElement_.offsetHeight + "px"))
      }
      this.toggle(e)
    }, c.prototype.handleForKeyboardEvent_ = function (e) {
      if (this.element_ && this.container_ && this.forElement_) {
        var t = this.element_.querySelectorAll("." + this.CssClasses_.ITEM + ":not([disabled])");
        t && t.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE) && (e.keyCode === this.Keycodes_.UP_ARROW ? (e.preventDefault(), t[t.length - 1].focus()) : e.keyCode === this.Keycodes_.DOWN_ARROW && (e.preventDefault(), t[0].focus()))
      }
    }, c.prototype.handleItemKeyboardEvent_ = function (e) {
      if (this.element_ && this.container_) {
        var t = this.element_.querySelectorAll("." + this.CssClasses_.ITEM + ":not([disabled])");
        if (t && t.length > 0 && this.container_.classList.contains(this.CssClasses_.IS_VISIBLE)) {
          var s = Array.prototype.slice.call(t).indexOf(e.target);
          if (e.keyCode === this.Keycodes_.UP_ARROW) e.preventDefault(), s > 0 ? t[s - 1].focus() : t[t.length - 1].focus();
          else if (e.keyCode === this.Keycodes_.DOWN_ARROW) e.preventDefault(), t.length > s + 1 ? t[s + 1].focus() : t[0].focus();
          else if (e.keyCode === this.Keycodes_.SPACE || e.keyCode === this.Keycodes_.ENTER) {
            e.preventDefault();
            var i = new MouseEvent("mousedown");
            e.target.dispatchEvent(i), i = new MouseEvent("mouseup"), e.target.dispatchEvent(i), e.target.click()
          } else e.keyCode === this.Keycodes_.ESCAPE && (e.preventDefault(), this.hide())
        }
      }
    }, c.prototype.handleItemClick_ = function (e) {
      e.target.hasAttribute("disabled") ? e.stopPropagation() : (this.closing_ = !0, window.setTimeout(function (e) {
        this.hide(), this.closing_ = !1
      }.bind(this), this.Constant_.CLOSE_TIMEOUT))
    }, c.prototype.applyClip_ = function (e, t) {
      this.element_.classList.contains(this.CssClasses_.UNALIGNED) ? this.element_.style.clip = "" : this.element_.classList.contains(this.CssClasses_.BOTTOM_RIGHT) ? this.element_.style.clip = "rect(0 " + t + "px 0 " + t + "px)" : this.element_.classList.contains(this.CssClasses_.TOP_LEFT) ? this.element_.style.clip = "rect(" + e + "px 0 " + e + "px 0)" : this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) ? this.element_.style.clip = "rect(" + e + "px " + t + "px " + e + "px " + t + "px)" : this.element_.style.clip = ""
    }, c.prototype.removeAnimationEndListener_ = function (e) {
      e.target.classList.remove(c.prototype.CssClasses_.IS_ANIMATING)
    }, c.prototype.addAnimationEndListener_ = function () {
      this.element_.addEventListener("transitionend", this.removeAnimationEndListener_), this.element_.addEventListener("webkitTransitionEnd", this.removeAnimationEndListener_)
    }, c.prototype.show = function (e) {
      if (this.element_ && this.container_ && this.outline_) {
        var t = this.element_.getBoundingClientRect().height,
          s = this.element_.getBoundingClientRect().width;
        this.container_.style.width = s + "px", this.container_.style.height = t + "px", this.outline_.style.width = s + "px", this.outline_.style.height = t + "px";
        for (var i = this.Constant_.TRANSITION_DURATION_SECONDS * this.Constant_.TRANSITION_DURATION_FRACTION, n = this.element_.querySelectorAll("." + this.CssClasses_.ITEM), a = 0; a < n.length; a++) {
          var r = null;
          r = this.element_.classList.contains(this.CssClasses_.TOP_LEFT) || this.element_.classList.contains(this.CssClasses_.TOP_RIGHT) ? (t - n[a].offsetTop - n[a].offsetHeight) / t * i + "s" : n[a].offsetTop / t * i + "s", n[a].style.transitionDelay = r
        }
        this.applyClip_(t, s), window.requestAnimationFrame(function () {
          this.element_.classList.add(this.CssClasses_.IS_ANIMATING), this.element_.style.clip = "rect(0 " + s + "px " + t + "px 0)", this.container_.classList.add(this.CssClasses_.IS_VISIBLE)
        }.bind(this)), this.addAnimationEndListener_();
        var o = function (t) {
          t === e || this.closing_ || t.target.parentNode === this.element_ || (document.removeEventListener("click", o), this.hide())
        }.bind(this);
        document.addEventListener("click", o)
      }
    }, c.prototype.show = c.prototype.show, c.prototype.hide = function () {
      if (this.element_ && this.container_ && this.outline_) {
        for (var e = this.element_.querySelectorAll("." + this.CssClasses_.ITEM), t = 0; t < e.length; t++) e[t].style.removeProperty("transition-delay");
        var s = this.element_.getBoundingClientRect(),
          i = s.height,
          n = s.width;
        this.element_.classList.add(this.CssClasses_.IS_ANIMATING), this.applyClip_(i, n), this.container_.classList.remove(this.CssClasses_.IS_VISIBLE), this.addAnimationEndListener_()
      }
    }, c.prototype.hide = c.prototype.hide, c.prototype.toggle = function (e) {
      this.container_.classList.contains(this.CssClasses_.IS_VISIBLE) ? this.hide() : this.show(e)
    }, c.prototype.toggle = c.prototype.toggle, s.register({
      constructor: c,
      classAsString: "MaterialMenu",
      cssClass: "mdl-js-menu",
      widget: !0
    });
    var h = function (e) {
      this.element_ = e, this.init()
    };
    window.MaterialProgress = h, h.prototype.Constant_ = {}, h.prototype.CssClasses_ = {
      INDETERMINATE_CLASS: "mdl-progress__indeterminate"
    }, h.prototype.setProgress = function (e) {
      this.element_.classList.contains(this.CssClasses_.INDETERMINATE_CLASS) || (this.progressbar_.style.width = e + "%")
    }, h.prototype.setProgress = h.prototype.setProgress, h.prototype.setBuffer = function (e) {
      this.bufferbar_.style.width = e + "%", this.auxbar_.style.width = 100 - e + "%"
    }, h.prototype.setBuffer = h.prototype.setBuffer, h.prototype.init = function () {
      if (this.element_) {
        var e = document.createElement("div");
        e.className = "progressbar bar bar1", this.element_.appendChild(e), this.progressbar_ = e, e = document.createElement("div"), e.className = "bufferbar bar bar2", this.element_.appendChild(e), this.bufferbar_ = e, e = document.createElement("div"), e.className = "auxbar bar bar3", this.element_.appendChild(e), this.auxbar_ = e, this.progressbar_.style.width = "0%", this.bufferbar_.style.width = "100%", this.auxbar_.style.width = "0%", this.element_.classList.add("is-upgraded")
      }
    }, s.register({
      constructor: h,
      classAsString: "MaterialProgress",
      cssClass: "mdl-js-progress",
      widget: !0
    });
    var u = function (e) {
      this.element_ = e, this.init()
    };
    window.MaterialRadio = u, u.prototype.Constant_ = {
      TINY_TIMEOUT: .001
    }, u.prototype.CssClasses_ = {
      IS_FOCUSED: "is-focused",
      IS_DISABLED: "is-disabled",
      IS_CHECKED: "is-checked",
      IS_UPGRADED: "is-upgraded",
      JS_RADIO: "mdl-js-radio",
      RADIO_BTN: "mdl-radio__button",
      RADIO_OUTER_CIRCLE: "mdl-radio__outer-circle",
      RADIO_INNER_CIRCLE: "mdl-radio__inner-circle",
      RIPPLE_EFFECT: "mdl-js-ripple-effect",
      RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
      RIPPLE_CONTAINER: "mdl-radio__ripple-container",
      RIPPLE_CENTER: "mdl-ripple--center",
      RIPPLE: "mdl-ripple"
    }, u.prototype.onChange_ = function (e) {
      for (var t = document.getElementsByClassName(this.CssClasses_.JS_RADIO), s = 0; s < t.length; s++) {
        var i = t[s].querySelector("." + this.CssClasses_.RADIO_BTN);
        i.getAttribute("name") === this.btnElement_.getAttribute("name") && t[s].MaterialRadio.updateClasses_()
      }
    }, u.prototype.onFocus_ = function (e) {
      this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, u.prototype.onBlur_ = function (e) {
      this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, u.prototype.onMouseup_ = function (e) {
      this.blur_()
    }, u.prototype.updateClasses_ = function () {
      this.checkDisabled(), this.checkToggleState()
    }, u.prototype.blur_ = function () {
      window.setTimeout(function () {
        this.btnElement_.blur()
      }.bind(this), this.Constant_.TINY_TIMEOUT)
    }, u.prototype.checkDisabled = function () {
      this.btnElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, u.prototype.checkDisabled = u.prototype.checkDisabled, u.prototype.checkToggleState = function () {
      this.btnElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
    }, u.prototype.checkToggleState = u.prototype.checkToggleState, u.prototype.disable = function () {
      this.btnElement_.disabled = !0, this.updateClasses_()
    }, u.prototype.disable = u.prototype.disable, u.prototype.enable = function () {
      this.btnElement_.disabled = !1, this.updateClasses_()
    }, u.prototype.enable = u.prototype.enable, u.prototype.check = function () {
      this.btnElement_.checked = !0, this.updateClasses_()
    }, u.prototype.check = u.prototype.check, u.prototype.uncheck = function () {
      this.btnElement_.checked = !1, this.updateClasses_()
    }, u.prototype.uncheck = u.prototype.uncheck, u.prototype.init = function () {
      if (this.element_) {
        this.btnElement_ = this.element_.querySelector("." + this.CssClasses_.RADIO_BTN), this.boundChangeHandler_ = this.onChange_.bind(this), this.boundFocusHandler_ = this.onChange_.bind(this), this.boundBlurHandler_ = this.onBlur_.bind(this), this.boundMouseUpHandler_ = this.onMouseup_.bind(this);
        var e = document.createElement("span");
        e.classList.add(this.CssClasses_.RADIO_OUTER_CIRCLE);
        var t = document.createElement("span");
        t.classList.add(this.CssClasses_.RADIO_INNER_CIRCLE), this.element_.appendChild(e), this.element_.appendChild(t);
        var s;
        if (this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
          this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), s = document.createElement("span"), s.classList.add(this.CssClasses_.RIPPLE_CONTAINER), s.classList.add(this.CssClasses_.RIPPLE_EFFECT), s.classList.add(this.CssClasses_.RIPPLE_CENTER), s.addEventListener("mouseup", this.boundMouseUpHandler_);
          var i = document.createElement("span");
          i.classList.add(this.CssClasses_.RIPPLE), s.appendChild(i), this.element_.appendChild(s)
        }
        this.btnElement_.addEventListener("change", this.boundChangeHandler_), this.btnElement_.addEventListener("focus", this.boundFocusHandler_), this.btnElement_.addEventListener("blur", this.boundBlurHandler_), this.element_.addEventListener("mouseup", this.boundMouseUpHandler_), this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
      }
    }, s.register({
      constructor: u,
      classAsString: "MaterialRadio",
      cssClass: "mdl-js-radio",
      widget: !0
    });
    var p = function (e) {
      this.element_ = e, this.isIE_ = window.navigator.msPointerEnabled, this.init()
    };
    window.MaterialSlider = p, p.prototype.Constant_ = {}, p.prototype.CssClasses_ = {
      IE_CONTAINER: "mdl-slider__ie-container",
      SLIDER_CONTAINER: "mdl-slider__container",
      BACKGROUND_FLEX: "mdl-slider__background-flex",
      BACKGROUND_LOWER: "mdl-slider__background-lower",
      BACKGROUND_UPPER: "mdl-slider__background-upper",
      IS_LOWEST_VALUE: "is-lowest-value",
      IS_UPGRADED: "is-upgraded"
    }, p.prototype.onInput_ = function (e) {
      this.updateValueStyles_()
    }, p.prototype.onChange_ = function (e) {
      this.updateValueStyles_()
    }, p.prototype.onMouseUp_ = function (e) {
      e.target.blur()
    }, p.prototype.onContainerMouseDown_ = function (e) {
      if (e.target === this.element_.parentElement) {
        e.preventDefault();
        var t = new MouseEvent("mousedown", {
          target: e.target,
          buttons: e.buttons,
          clientX: e.clientX,
          clientY: this.element_.getBoundingClientRect().y
        });
        this.element_.dispatchEvent(t)
      }
    }, p.prototype.updateValueStyles_ = function () {
      var e = (this.element_.value - this.element_.min) / (this.element_.max - this.element_.min);
      0 === e ? this.element_.classList.add(this.CssClasses_.IS_LOWEST_VALUE) : this.element_.classList.remove(this.CssClasses_.IS_LOWEST_VALUE), this.isIE_ || (this.backgroundLower_.style.flex = e, this.backgroundLower_.style.webkitFlex = e, this.backgroundUpper_.style.flex = 1 - e, this.backgroundUpper_.style.webkitFlex = 1 - e)
    }, p.prototype.disable = function () {
      this.element_.disabled = !0
    }, p.prototype.disable = p.prototype.disable, p.prototype.enable = function () {
      this.element_.disabled = !1
    }, p.prototype.enable = p.prototype.enable, p.prototype.change = function (e) {
      "undefined" != typeof e && (this.element_.value = e), this.updateValueStyles_()
    }, p.prototype.change = p.prototype.change, p.prototype.init = function () {
      if (this.element_) {
        if (this.isIE_) {
          var e = document.createElement("div");
          e.classList.add(this.CssClasses_.IE_CONTAINER), this.element_.parentElement.insertBefore(e, this.element_), this.element_.parentElement.removeChild(this.element_), e.appendChild(this.element_)
        } else {
          var t = document.createElement("div");
          t.classList.add(this.CssClasses_.SLIDER_CONTAINER), this.element_.parentElement.insertBefore(t, this.element_), this.element_.parentElement.removeChild(this.element_), t.appendChild(this.element_);
          var s = document.createElement("div");
          s.classList.add(this.CssClasses_.BACKGROUND_FLEX), t.appendChild(s), this.backgroundLower_ = document.createElement("div"), this.backgroundLower_.classList.add(this.CssClasses_.BACKGROUND_LOWER), s.appendChild(this.backgroundLower_), this.backgroundUpper_ = document.createElement("div"), this.backgroundUpper_.classList.add(this.CssClasses_.BACKGROUND_UPPER), s.appendChild(this.backgroundUpper_)
        }
        this.boundInputHandler = this.onInput_.bind(this), this.boundChangeHandler = this.onChange_.bind(this), this.boundMouseUpHandler = this.onMouseUp_.bind(this), this.boundContainerMouseDownHandler = this.onContainerMouseDown_.bind(this), this.element_.addEventListener("input", this.boundInputHandler), this.element_.addEventListener("change", this.boundChangeHandler), this.element_.addEventListener("mouseup", this.boundMouseUpHandler), this.element_.parentElement.addEventListener("mousedown", this.boundContainerMouseDownHandler), this.updateValueStyles_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
      }
    }, s.register({
      constructor: p,
      classAsString: "MaterialSlider",
      cssClass: "mdl-js-slider",
      widget: !0
    });
    var _ = function (e) {
      if (this.element_ = e, this.textElement_ = this.element_.querySelector("." + this.cssClasses_.MESSAGE), this.actionElement_ = this.element_.querySelector("." + this.cssClasses_.ACTION), !this.textElement_) throw new Error("There must be a message element for a snackbar.");
      if (!this.actionElement_) throw new Error("There must be an action element for a snackbar.");
      this.active = !1, this.actionHandler_ = void 0, this.message_ = void 0, this.actionText_ = void 0, this.queuedNotifications_ = [], this.setActionHidden_(!0)
    };
    window.MaterialSnackbar = _, _.prototype.Constant_ = {
      ANIMATION_LENGTH: 250
    }, _.prototype.cssClasses_ = {
      SNACKBAR: "mdl-snackbar",
      MESSAGE: "mdl-snackbar__text",
      ACTION: "mdl-snackbar__action",
      ACTIVE: "mdl-snackbar--active"
    }, _.prototype.displaySnackbar_ = function () {
      this.element_.setAttribute("aria-hidden", "true"), this.actionHandler_ && (this.actionElement_.textContent = this.actionText_, this.actionElement_.addEventListener("click", this.actionHandler_), this.setActionHidden_(!1)), this.textElement_.textContent = this.message_, this.element_.classList.add(this.cssClasses_.ACTIVE), this.element_.setAttribute("aria-hidden", "false"), setTimeout(this.cleanup_.bind(this), this.timeout_)
    }, _.prototype.showSnackbar = function (e) {
      if (void 0 === e) throw new Error("Please provide a data object with at least a message to display.");
      if (void 0 === e.message) throw new Error("Please provide a message to be displayed.");
      if (e.actionHandler && !e.actionText) throw new Error("Please provide action text with the handler.");
      this.active ? this.queuedNotifications_.push(e) : (this.active = !0, this.message_ = e.message, e.timeout ? this.timeout_ = e.timeout : this.timeout_ = 2750, e.actionHandler && (this.actionHandler_ = e.actionHandler), e.actionText && (this.actionText_ = e.actionText), this.displaySnackbar_())
    }, _.prototype.showSnackbar = _.prototype.showSnackbar, _.prototype.checkQueue_ = function () {
      this.queuedNotifications_.length > 0 && this.showSnackbar(this.queuedNotifications_.shift())
    }, _.prototype.cleanup_ = function () {
      this.element_.classList.remove(this.cssClasses_.ACTIVE), setTimeout(function () {
        this.element_.setAttribute("aria-hidden", "true"), this.textElement_.textContent = "", Boolean(this.actionElement_.getAttribute("aria-hidden")) || (this.setActionHidden_(!0), this.actionElement_.textContent = "", this.actionElement_.removeEventListener("click", this.actionHandler_)), this.actionHandler_ = void 0, this.message_ = void 0, this.actionText_ = void 0, this.active = !1, this.checkQueue_()
      }.bind(this), this.Constant_.ANIMATION_LENGTH)
    }, _.prototype.setActionHidden_ = function (e) {
      e ? this.actionElement_.setAttribute("aria-hidden", "true") : this.actionElement_.removeAttribute("aria-hidden")
    }, s.register({
      constructor: _,
      classAsString: "MaterialSnackbar",
      cssClass: "mdl-js-snackbar",
      widget: !0
    });
    var m = function (e) {
      this.element_ = e, this.init()
    };
    window.MaterialSpinner = m, m.prototype.Constant_ = {
      MDL_SPINNER_LAYER_COUNT: 4
    }, m.prototype.CssClasses_ = {
      MDL_SPINNER_LAYER: "mdl-spinner__layer",
      MDL_SPINNER_CIRCLE_CLIPPER: "mdl-spinner__circle-clipper",
      MDL_SPINNER_CIRCLE: "mdl-spinner__circle",
      MDL_SPINNER_GAP_PATCH: "mdl-spinner__gap-patch",
      MDL_SPINNER_LEFT: "mdl-spinner__left",
      MDL_SPINNER_RIGHT: "mdl-spinner__right"
    }, m.prototype.createLayer = function (e) {
      var t = document.createElement("div");
      t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER), t.classList.add(this.CssClasses_.MDL_SPINNER_LAYER + "-" + e);
      var s = document.createElement("div");
      s.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER), s.classList.add(this.CssClasses_.MDL_SPINNER_LEFT);
      var i = document.createElement("div");
      i.classList.add(this.CssClasses_.MDL_SPINNER_GAP_PATCH);
      var n = document.createElement("div");
      n.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE_CLIPPER), n.classList.add(this.CssClasses_.MDL_SPINNER_RIGHT);
      for (var a = [s, i, n], r = 0; r < a.length; r++) {
        var o = document.createElement("div");
        o.classList.add(this.CssClasses_.MDL_SPINNER_CIRCLE), a[r].appendChild(o)
      }
      t.appendChild(s), t.appendChild(i), t.appendChild(n), this.element_.appendChild(t)
    }, m.prototype.createLayer = m.prototype.createLayer, m.prototype.stop = function () {
      this.element_.classList.remove("is-active")
    }, m.prototype.stop = m.prototype.stop, m.prototype.start = function () {
      this.element_.classList.add("is-active")
    }, m.prototype.start = m.prototype.start, m.prototype.init = function () {
      if (this.element_) {
        for (var e = 1; e <= this.Constant_.MDL_SPINNER_LAYER_COUNT; e++) this.createLayer(e);
        this.element_.classList.add("is-upgraded")
      }
    }, s.register({
      constructor: m,
      classAsString: "MaterialSpinner",
      cssClass: "mdl-js-spinner",
      widget: !0
    });
    var f = function (e) {
      this.element_ = e, this.init()
    };
    window.MaterialSwitch = f, f.prototype.Constant_ = {
      TINY_TIMEOUT: .001
    }, f.prototype.CssClasses_ = {
      INPUT: "mdl-switch__input",
      TRACK: "mdl-switch__track",
      THUMB: "mdl-switch__thumb",
      FOCUS_HELPER: "mdl-switch__focus-helper",
      RIPPLE_EFFECT: "mdl-js-ripple-effect",
      RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
      RIPPLE_CONTAINER: "mdl-switch__ripple-container",
      RIPPLE_CENTER: "mdl-ripple--center",
      RIPPLE: "mdl-ripple",
      IS_FOCUSED: "is-focused",
      IS_DISABLED: "is-disabled",
      IS_CHECKED: "is-checked"
    }, f.prototype.onChange_ = function (e) {
      this.updateClasses_()
    }, f.prototype.onFocus_ = function (e) {
      this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, f.prototype.onBlur_ = function (e) {
      this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, f.prototype.onMouseUp_ = function (e) {
      this.blur_()
    }, f.prototype.updateClasses_ = function () {
      this.checkDisabled(), this.checkToggleState()
    }, f.prototype.blur_ = function () {
      window.setTimeout(function () {
        this.inputElement_.blur()
      }.bind(this), this.Constant_.TINY_TIMEOUT)
    }, f.prototype.checkDisabled = function () {
      this.inputElement_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, f.prototype.checkDisabled = f.prototype.checkDisabled, f.prototype.checkToggleState = function () {
      this.inputElement_.checked ? this.element_.classList.add(this.CssClasses_.IS_CHECKED) : this.element_.classList.remove(this.CssClasses_.IS_CHECKED)
    }, f.prototype.checkToggleState = f.prototype.checkToggleState, f.prototype.disable = function () {
      this.inputElement_.disabled = !0, this.updateClasses_()
    }, f.prototype.disable = f.prototype.disable, f.prototype.enable = function () {
      this.inputElement_.disabled = !1, this.updateClasses_()
    }, f.prototype.enable = f.prototype.enable, f.prototype.on = function () {
      this.inputElement_.checked = !0, this.updateClasses_()
    }, f.prototype.on = f.prototype.on, f.prototype.off = function () {
      this.inputElement_.checked = !1, this.updateClasses_()
    }, f.prototype.off = f.prototype.off, f.prototype.init = function () {
      if (this.element_) {
        this.inputElement_ = this.element_.querySelector("." + this.CssClasses_.INPUT);
        var e = document.createElement("div");
        e.classList.add(this.CssClasses_.TRACK);
        var t = document.createElement("div");
        t.classList.add(this.CssClasses_.THUMB);
        var s = document.createElement("span");
        if (s.classList.add(this.CssClasses_.FOCUS_HELPER), t.appendChild(s), this.element_.appendChild(e), this.element_.appendChild(t), this.boundMouseUpHandler = this.onMouseUp_.bind(this), this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT)) {
          this.element_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS), this.rippleContainerElement_ = document.createElement("span"), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CONTAINER), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_EFFECT), this.rippleContainerElement_.classList.add(this.CssClasses_.RIPPLE_CENTER), this.rippleContainerElement_.addEventListener("mouseup", this.boundMouseUpHandler);
          var i = document.createElement("span");
          i.classList.add(this.CssClasses_.RIPPLE), this.rippleContainerElement_.appendChild(i), this.element_.appendChild(this.rippleContainerElement_)
        }
        this.boundChangeHandler = this.onChange_.bind(this), this.boundFocusHandler = this.onFocus_.bind(this), this.boundBlurHandler = this.onBlur_.bind(this), this.inputElement_.addEventListener("change", this.boundChangeHandler), this.inputElement_.addEventListener("focus", this.boundFocusHandler), this.inputElement_.addEventListener("blur", this.boundBlurHandler), this.element_.addEventListener("mouseup", this.boundMouseUpHandler), this.updateClasses_(), this.element_.classList.add("is-upgraded")
      }
    }, s.register({
      constructor: f,
      classAsString: "MaterialSwitch",
      cssClass: "mdl-js-switch",
      widget: !0
    });
    var C = function (e) {
      this.element_ = e, this.init()
    };
    window.MaterialTabs = C, C.prototype.Constant_ = {}, C.prototype.CssClasses_ = {
      TAB_CLASS: "mdl-tabs__tab",
      PANEL_CLASS: "mdl-tabs__panel",
      ACTIVE_CLASS: "is-active",
      UPGRADED_CLASS: "is-upgraded",
      MDL_JS_RIPPLE_EFFECT: "mdl-js-ripple-effect",
      MDL_RIPPLE_CONTAINER: "mdl-tabs__ripple-container",
      MDL_RIPPLE: "mdl-ripple",
      MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events"
    }, C.prototype.initTabs_ = function () {
      this.element_.classList.contains(this.CssClasses_.MDL_JS_RIPPLE_EFFECT) && this.element_.classList.add(this.CssClasses_.MDL_JS_RIPPLE_EFFECT_IGNORE_EVENTS), this.tabs_ = this.element_.querySelectorAll("." + this.CssClasses_.TAB_CLASS), this.panels_ = this.element_.querySelectorAll("." + this.CssClasses_.PANEL_CLASS);
      for (var t = 0; t < this.tabs_.length; t++) new e(this.tabs_[t], this);
      this.element_.classList.add(this.CssClasses_.UPGRADED_CLASS)
    }, C.prototype.resetTabState_ = function () {
      for (var e = 0; e < this.tabs_.length; e++) this.tabs_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)
    }, C.prototype.resetPanelState_ = function () {
      for (var e = 0; e < this.panels_.length; e++) this.panels_[e].classList.remove(this.CssClasses_.ACTIVE_CLASS)
    }, C.prototype.init = function () {
      this.element_ && this.initTabs_()
    }, s.register({
      constructor: C,
      classAsString: "MaterialTabs",
      cssClass: "mdl-js-tabs"
    });
    var g = function (e) {
      this.element_ = e, this.maxRows = this.Constant_.NO_MAX_ROWS, this.init()
    };
    window.MaterialTextfield = g, g.prototype.Constant_ = {
      NO_MAX_ROWS: -1,
      MAX_ROWS_ATTRIBUTE: "maxrows"
    }, g.prototype.CssClasses_ = {
      LABEL: "mdl-textfield__label",
      INPUT: "mdl-textfield__input",
      IS_DIRTY: "is-dirty",
      IS_FOCUSED: "is-focused",
      IS_DISABLED: "is-disabled",
      IS_INVALID: "is-invalid",
      IS_UPGRADED: "is-upgraded",
      HAS_PLACEHOLDER: "has-placeholder"
    }, g.prototype.onKeyDown_ = function (e) {
      var t = e.target.value.split("\n").length;
      13 === e.keyCode && t >= this.maxRows && e.preventDefault()
    }, g.prototype.onFocus_ = function (e) {
      this.element_.classList.add(this.CssClasses_.IS_FOCUSED)
    }, g.prototype.onBlur_ = function (e) {
      this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, g.prototype.onReset_ = function (e) {
      this.updateClasses_()
    }, g.prototype.updateClasses_ = function () {
      this.checkDisabled(), this.checkValidity(), this.checkDirty(), this.checkFocus()
    }, g.prototype.checkDisabled = function () {
      this.input_.disabled ? this.element_.classList.add(this.CssClasses_.IS_DISABLED) : this.element_.classList.remove(this.CssClasses_.IS_DISABLED)
    }, g.prototype.checkDisabled = g.prototype.checkDisabled, g.prototype.checkFocus = function () {
      Boolean(this.element_.querySelector(":focus")) ? this.element_.classList.add(this.CssClasses_.IS_FOCUSED) : this.element_.classList.remove(this.CssClasses_.IS_FOCUSED)
    }, g.prototype.checkFocus = g.prototype.checkFocus, g.prototype.checkValidity = function () {
      this.input_.validity && (this.input_.validity.valid ? this.element_.classList.remove(this.CssClasses_.IS_INVALID) : this.element_.classList.add(this.CssClasses_.IS_INVALID))
    }, g.prototype.checkValidity = g.prototype.checkValidity, g.prototype.checkDirty = function () {
      this.input_.value && this.input_.value.length > 0 ? this.element_.classList.add(this.CssClasses_.IS_DIRTY) : this.element_.classList.remove(this.CssClasses_.IS_DIRTY)
    }, g.prototype.checkDirty = g.prototype.checkDirty, g.prototype.disable = function () {
      this.input_.disabled = !0, this.updateClasses_()
    }, g.prototype.disable = g.prototype.disable, g.prototype.enable = function () {
      this.input_.disabled = !1, this.updateClasses_()
    }, g.prototype.enable = g.prototype.enable, g.prototype.change = function (e) {
      this.input_.value = e || "", this.updateClasses_()
    }, g.prototype.change = g.prototype.change, g.prototype.init = function () {
      if (this.element_ && (this.label_ = this.element_.querySelector("." + this.CssClasses_.LABEL), this.input_ = this.element_.querySelector("." + this.CssClasses_.INPUT), this.input_)) {
        this.input_.hasAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE) && (this.maxRows = parseInt(this.input_.getAttribute(this.Constant_.MAX_ROWS_ATTRIBUTE), 10), isNaN(this.maxRows) && (this.maxRows = this.Constant_.NO_MAX_ROWS)), this.input_.hasAttribute("placeholder") && this.element_.classList.add(this.CssClasses_.HAS_PLACEHOLDER), this.boundUpdateClassesHandler = this.updateClasses_.bind(this), this.boundFocusHandler = this.onFocus_.bind(this), this.boundBlurHandler = this.onBlur_.bind(this), this.boundResetHandler = this.onReset_.bind(this), this.input_.addEventListener("input", this.boundUpdateClassesHandler), this.input_.addEventListener("focus", this.boundFocusHandler), this.input_.addEventListener("blur", this.boundBlurHandler), this.input_.addEventListener("reset", this.boundResetHandler), this.maxRows !== this.Constant_.NO_MAX_ROWS && (this.boundKeyDownHandler = this.onKeyDown_.bind(this), this.input_.addEventListener("keydown", this.boundKeyDownHandler));
        var e = this.element_.classList.contains(this.CssClasses_.IS_INVALID);
        this.updateClasses_(), this.element_.classList.add(this.CssClasses_.IS_UPGRADED), e && this.element_.classList.add(this.CssClasses_.IS_INVALID), this.input_.hasAttribute("autofocus") && (this.element_.focus(), this.checkFocus())
      }
    }, s.register({
      constructor: g,
      classAsString: "MaterialTextfield",
      cssClass: "mdl-js-textfield",
      widget: !0
    });
    var E = function (e) {
      this.element_ = e, this.init()
    };
    window.MaterialTooltip = E, E.prototype.Constant_ = {}, E.prototype.CssClasses_ = {
      IS_ACTIVE: "is-active",
      BOTTOM: "mdl-tooltip--bottom",
      LEFT: "mdl-tooltip--left",
      RIGHT: "mdl-tooltip--right",
      TOP: "mdl-tooltip--top"
    }, E.prototype.handleMouseEnter_ = function (e) {
      var t = e.target.getBoundingClientRect(),
        s = t.left + t.width / 2,
        i = t.top + t.height / 2,
        n = -1 * (this.element_.offsetWidth / 2),
        a = -1 * (this.element_.offsetHeight / 2);
      this.element_.classList.contains(this.CssClasses_.LEFT) || this.element_.classList.contains(this.CssClasses_.RIGHT) ? (s = t.width / 2, 0 > i + a ? (this.element_.style.top = 0, this.element_.style.marginTop = 0) : (this.element_.style.top = i + "px", this.element_.style.marginTop = a + "px")) : 0 > s + n ? (this.element_.style.left = 0, this.element_.style.marginLeft = 0) : (this.element_.style.left = s + "px", this.element_.style.marginLeft = n + "px"), this.element_.classList.contains(this.CssClasses_.TOP) ? this.element_.style.top = t.top - this.element_.offsetHeight - 10 + "px" : this.element_.classList.contains(this.CssClasses_.RIGHT) ? this.element_.style.left = t.left + t.width + 10 + "px" : this.element_.classList.contains(this.CssClasses_.LEFT) ? this.element_.style.left = t.left - this.element_.offsetWidth - 10 + "px" : this.element_.style.top = t.top + t.height + 10 + "px", this.element_.classList.add(this.CssClasses_.IS_ACTIVE)
    }, E.prototype.handleMouseLeave_ = function () {
      this.element_.classList.remove(this.CssClasses_.IS_ACTIVE)
    }, E.prototype.init = function () {
      if (this.element_) {
        var e = this.element_.getAttribute("for");
        e && (this.forElement_ = document.getElementById(e)), this.forElement_ && (this.forElement_.hasAttribute("tabindex") || this.forElement_.setAttribute("tabindex", "0"), this.boundMouseEnterHandler = this.handleMouseEnter_.bind(this), this.boundMouseLeaveHandler = this.handleMouseLeave_.bind(this), this.forElement_.addEventListener("mouseenter", this.boundMouseEnterHandler, !1), this.forElement_.addEventListener("touchend", this.boundMouseEnterHandler, !1), this.forElement_.addEventListener("mouseleave", this.boundMouseLeaveHandler, !1), window.addEventListener("touchstart", this.boundMouseLeaveHandler))
      }
    }, s.register({
      constructor: E,
      classAsString: "MaterialTooltip",
      cssClass: "mdl-tooltip"
    });
    var y = function (e) {
      this.element_ = e, this.init()
    };
    window.MaterialLayout = y, y.prototype.Constant_ = {
      MAX_WIDTH: "(max-width: 1024px)",
      TAB_SCROLL_PIXELS: 100,
      RESIZE_TIMEOUT: 100,
      MENU_ICON: "&#xE5D2;",
      CHEVRON_LEFT: "chevron_left",
      CHEVRON_RIGHT: "chevron_right"
    }, y.prototype.Keycodes_ = {
      ENTER: 13,
      ESCAPE: 27,
      SPACE: 32
    }, y.prototype.Mode_ = {
      STANDARD: 0,
      SEAMED: 1,
      WATERFALL: 2,
      SCROLL: 3
    }, y.prototype.CssClasses_ = {
      CONTAINER: "mdl-layout__container",
      HEADER: "mdl-layout__header",
      DRAWER: "mdl-layout__drawer",
      CONTENT: "mdl-layout__content",
      DRAWER_BTN: "mdl-layout__drawer-button",
      ICON: "material-icons",
      JS_RIPPLE_EFFECT: "mdl-js-ripple-effect",
      RIPPLE_CONTAINER: "mdl-layout__tab-ripple-container",
      RIPPLE: "mdl-ripple",
      RIPPLE_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
      HEADER_SEAMED: "mdl-layout__header--seamed",
      HEADER_WATERFALL: "mdl-layout__header--waterfall",
      HEADER_SCROLL: "mdl-layout__header--scroll",
      FIXED_HEADER: "mdl-layout--fixed-header",
      OBFUSCATOR: "mdl-layout__obfuscator",
      TAB_BAR: "mdl-layout__tab-bar",
      TAB_CONTAINER: "mdl-layout__tab-bar-container",
      TAB: "mdl-layout__tab",
      TAB_BAR_BUTTON: "mdl-layout__tab-bar-button",
      TAB_BAR_LEFT_BUTTON: "mdl-layout__tab-bar-left-button",
      TAB_BAR_RIGHT_BUTTON: "mdl-layout__tab-bar-right-button",
      PANEL: "mdl-layout__tab-panel",
      HAS_DRAWER: "has-drawer",
      HAS_TABS: "has-tabs",
      HAS_SCROLLING_HEADER: "has-scrolling-header",
      CASTING_SHADOW: "is-casting-shadow",
      IS_COMPACT: "is-compact",
      IS_SMALL_SCREEN: "is-small-screen",
      IS_DRAWER_OPEN: "is-visible",
      IS_ACTIVE: "is-active",
      IS_UPGRADED: "is-upgraded",
      IS_ANIMATING: "is-animating",
      ON_LARGE_SCREEN: "mdl-layout--large-screen-only",
      ON_SMALL_SCREEN: "mdl-layout--small-screen-only"
    }, y.prototype.contentScrollHandler_ = function () {
      if (!this.header_.classList.contains(this.CssClasses_.IS_ANIMATING)) {
        var e = !this.element_.classList.contains(this.CssClasses_.IS_SMALL_SCREEN) || this.element_.classList.contains(this.CssClasses_.FIXED_HEADER);
        this.content_.scrollTop > 0 && !this.header_.classList.contains(this.CssClasses_.IS_COMPACT) ? (this.header_.classList.add(this.CssClasses_.CASTING_SHADOW), this.header_.classList.add(this.CssClasses_.IS_COMPACT), e && this.header_.classList.add(this.CssClasses_.IS_ANIMATING)) : this.content_.scrollTop <= 0 && this.header_.classList.contains(this.CssClasses_.IS_COMPACT) && (this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW), this.header_.classList.remove(this.CssClasses_.IS_COMPACT), e && this.header_.classList.add(this.CssClasses_.IS_ANIMATING))
      }
    }, y.prototype.keyboardEventHandler_ = function (e) {
      e.keyCode === this.Keycodes_.ESCAPE && this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN) && this.toggleDrawer()
    }, y.prototype.screenSizeHandler_ = function () {
      this.screenSizeMediaQuery_.matches ? this.element_.classList.add(this.CssClasses_.IS_SMALL_SCREEN) : (this.element_.classList.remove(this.CssClasses_.IS_SMALL_SCREEN), this.drawer_ && (this.drawer_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN), this.obfuscator_.classList.remove(this.CssClasses_.IS_DRAWER_OPEN)))
    }, y.prototype.drawerToggleHandler_ = function (e) {
      if (e && "keydown" === e.type) {
        if (e.keyCode !== this.Keycodes_.SPACE && e.keyCode !== this.Keycodes_.ENTER) return;
        e.preventDefault()
      }
      this.toggleDrawer()
    }, y.prototype.headerTransitionEndHandler_ = function () {
      this.header_.classList.remove(this.CssClasses_.IS_ANIMATING)
    }, y.prototype.headerClickHandler_ = function () {
      this.header_.classList.contains(this.CssClasses_.IS_COMPACT) && (this.header_.classList.remove(this.CssClasses_.IS_COMPACT), this.header_.classList.add(this.CssClasses_.IS_ANIMATING))
    }, y.prototype.resetTabState_ = function (e) {
      for (var t = 0; t < e.length; t++) e[t].classList.remove(this.CssClasses_.IS_ACTIVE)
    }, y.prototype.resetPanelState_ = function (e) {
      for (var t = 0; t < e.length; t++) e[t].classList.remove(this.CssClasses_.IS_ACTIVE)
    }, y.prototype.toggleDrawer = function () {
      var e = this.element_.querySelector("." + this.CssClasses_.DRAWER_BTN);
      this.drawer_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN), this.obfuscator_.classList.toggle(this.CssClasses_.IS_DRAWER_OPEN), this.drawer_.classList.contains(this.CssClasses_.IS_DRAWER_OPEN) ? (this.drawer_.setAttribute("aria-hidden", "false"), e.setAttribute("aria-expanded", "true")) : (this.drawer_.setAttribute("aria-hidden", "true"), e.setAttribute("aria-expanded", "false"))
    }, y.prototype.toggleDrawer = y.prototype.toggleDrawer, y.prototype.init = function () {
      if (this.element_) {
        var e = document.createElement("div");
        e.classList.add(this.CssClasses_.CONTAINER);
        var s = this.element_.querySelector(":focus");
        this.element_.parentElement.insertBefore(e, this.element_), this.element_.parentElement.removeChild(this.element_), e.appendChild(this.element_), s && s.focus();
        for (var i = this.element_.childNodes, n = i.length, a = 0; n > a; a++) {
          var r = i[a];
          r.classList && r.classList.contains(this.CssClasses_.HEADER) && (this.header_ = r), r.classList && r.classList.contains(this.CssClasses_.DRAWER) && (this.drawer_ = r), r.classList && r.classList.contains(this.CssClasses_.CONTENT) && (this.content_ = r)
        }
        window.addEventListener("pageshow", function (e) {
          e.persisted && (this.element_.style.overflowY = "hidden", requestAnimationFrame(function () {
            this.element_.style.overflowY = ""
          }.bind(this)))
        }.bind(this), !1), this.header_ && (this.tabBar_ = this.header_.querySelector("." + this.CssClasses_.TAB_BAR));
        var o = this.Mode_.STANDARD;
        if (this.header_ && (this.header_.classList.contains(this.CssClasses_.HEADER_SEAMED) ? o = this.Mode_.SEAMED : this.header_.classList.contains(this.CssClasses_.HEADER_WATERFALL) ? (o = this.Mode_.WATERFALL, this.header_.addEventListener("transitionend", this.headerTransitionEndHandler_.bind(this)), this.header_.addEventListener("click", this.headerClickHandler_.bind(this))) : this.header_.classList.contains(this.CssClasses_.HEADER_SCROLL) && (o = this.Mode_.SCROLL, e.classList.add(this.CssClasses_.HAS_SCROLLING_HEADER)), o === this.Mode_.STANDARD ? (this.header_.classList.add(this.CssClasses_.CASTING_SHADOW), this.tabBar_ && this.tabBar_.classList.add(this.CssClasses_.CASTING_SHADOW)) : o === this.Mode_.SEAMED || o === this.Mode_.SCROLL ? (this.header_.classList.remove(this.CssClasses_.CASTING_SHADOW), this.tabBar_ && this.tabBar_.classList.remove(this.CssClasses_.CASTING_SHADOW)) : o === this.Mode_.WATERFALL && (this.content_.addEventListener("scroll", this.contentScrollHandler_.bind(this)), this.contentScrollHandler_())), this.drawer_) {
          var l = this.element_.querySelector("." + this.CssClasses_.DRAWER_BTN);
          if (!l) {
            l = document.createElement("div"), l.setAttribute("aria-expanded", "false"), l.setAttribute("role", "button"), l.setAttribute("tabindex", "0"), l.classList.add(this.CssClasses_.DRAWER_BTN);
            var d = document.createElement("i");
            d.classList.add(this.CssClasses_.ICON), d.innerHTML = this.Constant_.MENU_ICON, l.appendChild(d)
          }
          this.drawer_.classList.contains(this.CssClasses_.ON_LARGE_SCREEN) ? l.classList.add(this.CssClasses_.ON_LARGE_SCREEN) : this.drawer_.classList.contains(this.CssClasses_.ON_SMALL_SCREEN) && l.classList.add(this.CssClasses_.ON_SMALL_SCREEN), l.addEventListener("click", this.drawerToggleHandler_.bind(this)), l.addEventListener("keydown", this.drawerToggleHandler_.bind(this)), this.element_.classList.add(this.CssClasses_.HAS_DRAWER), this.element_.classList.contains(this.CssClasses_.FIXED_HEADER) ? this.header_.insertBefore(l, this.header_.firstChild) : this.element_.insertBefore(l, this.content_);
          var c = document.createElement("div");
          c.classList.add(this.CssClasses_.OBFUSCATOR), this.element_.appendChild(c), c.addEventListener("click", this.drawerToggleHandler_.bind(this)), this.obfuscator_ = c, this.drawer_.addEventListener("keydown", this.keyboardEventHandler_.bind(this)), this.drawer_.setAttribute("aria-hidden", "true")
        }
        if (this.screenSizeMediaQuery_ = window.matchMedia(this.Constant_.MAX_WIDTH), this.screenSizeMediaQuery_.addListener(this.screenSizeHandler_.bind(this)), this.screenSizeHandler_(), this.header_ && this.tabBar_) {
          this.element_.classList.add(this.CssClasses_.HAS_TABS);
          var h = document.createElement("div");
          h.classList.add(this.CssClasses_.TAB_CONTAINER), this.header_.insertBefore(h, this.tabBar_), this.header_.removeChild(this.tabBar_);
          var u = document.createElement("div");
          u.classList.add(this.CssClasses_.TAB_BAR_BUTTON), u.classList.add(this.CssClasses_.TAB_BAR_LEFT_BUTTON);
          var p = document.createElement("i");
          p.classList.add(this.CssClasses_.ICON), p.textContent = this.Constant_.CHEVRON_LEFT, u.appendChild(p), u.addEventListener("click", function () {
            this.tabBar_.scrollLeft -= this.Constant_.TAB_SCROLL_PIXELS
          }.bind(this));
          var _ = document.createElement("div");
          _.classList.add(this.CssClasses_.TAB_BAR_BUTTON), _.classList.add(this.CssClasses_.TAB_BAR_RIGHT_BUTTON);
          var m = document.createElement("i");
          m.classList.add(this.CssClasses_.ICON), m.textContent = this.Constant_.CHEVRON_RIGHT, _.appendChild(m), _.addEventListener("click", function () {
            this.tabBar_.scrollLeft += this.Constant_.TAB_SCROLL_PIXELS
          }.bind(this)), h.appendChild(u), h.appendChild(this.tabBar_), h.appendChild(_);
          var f = function () {
            this.tabBar_.scrollLeft > 0 ? u.classList.add(this.CssClasses_.IS_ACTIVE) : u.classList.remove(this.CssClasses_.IS_ACTIVE), this.tabBar_.scrollLeft < this.tabBar_.scrollWidth - this.tabBar_.offsetWidth ? _.classList.add(this.CssClasses_.IS_ACTIVE) : _.classList.remove(this.CssClasses_.IS_ACTIVE)
          }.bind(this);
          this.tabBar_.addEventListener("scroll", f), f();
          var C = function () {
            this.resizeTimeoutId_ && clearTimeout(this.resizeTimeoutId_), this.resizeTimeoutId_ = setTimeout(function () {
              f(), this.resizeTimeoutId_ = null
            }.bind(this), this.Constant_.RESIZE_TIMEOUT)
          }.bind(this);
          window.addEventListener("resize", C), this.tabBar_.classList.contains(this.CssClasses_.JS_RIPPLE_EFFECT) && this.tabBar_.classList.add(this.CssClasses_.RIPPLE_IGNORE_EVENTS);
          for (var g = this.tabBar_.querySelectorAll("." + this.CssClasses_.TAB), E = this.content_.querySelectorAll("." + this.CssClasses_.PANEL), y = 0; y < g.length; y++) new t(g[y], g, E, this)
        }
        this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
      }
    }, window.MaterialLayoutTab = t, s.register({
      constructor: y,
      classAsString: "MaterialLayout",
      cssClass: "mdl-js-layout"
    });
    var v = function (e) {
      this.element_ = e, this.init()
    };
    window.MaterialDataTable = v, v.prototype.Constant_ = {}, v.prototype.CssClasses_ = {
      DATA_TABLE: "mdl-data-table",
      SELECTABLE: "mdl-data-table--selectable",
      SELECT_ELEMENT: "mdl-data-table__select",
      IS_SELECTED: "is-selected",
      IS_UPGRADED: "is-upgraded"
    }, v.prototype.selectRow_ = function (e, t, s) {
      return t ? function () {
        e.checked ? t.classList.add(this.CssClasses_.IS_SELECTED) : t.classList.remove(this.CssClasses_.IS_SELECTED)
      }.bind(this) : s ? function () {
        var t, i;
        if (e.checked)
          for (t = 0; t < s.length; t++) i = s[t].querySelector("td").querySelector(".mdl-checkbox"), i.MaterialCheckbox.check(), s[t].classList.add(this.CssClasses_.IS_SELECTED);
        else
          for (t = 0; t < s.length; t++) i = s[t].querySelector("td").querySelector(".mdl-checkbox"), i.MaterialCheckbox.uncheck(), s[t].classList.remove(this.CssClasses_.IS_SELECTED)
      }.bind(this) : void 0
    }, v.prototype.createCheckbox_ = function (e, t) {
      var i = document.createElement("label"),
        n = ["mdl-checkbox", "mdl-js-checkbox", "mdl-js-ripple-effect", this.CssClasses_.SELECT_ELEMENT];
      i.className = n.join(" ");
      var a = document.createElement("input");
      return a.type = "checkbox", a.classList.add("mdl-checkbox__input"), e ? (a.checked = e.classList.contains(this.CssClasses_.IS_SELECTED), a.addEventListener("change", this.selectRow_(a, e))) : t && a.addEventListener("change", this.selectRow_(a, null, t)), i.appendChild(a), s.upgradeElement(i, "MaterialCheckbox"), i
    }, v.prototype.init = function () {
      if (this.element_) {
        var e = this.element_.querySelector("th"),
          t = Array.prototype.slice.call(this.element_.querySelectorAll("tbody tr")),
          s = Array.prototype.slice.call(this.element_.querySelectorAll("tfoot tr")),
          i = t.concat(s);
        if (this.element_.classList.contains(this.CssClasses_.SELECTABLE)) {
          var n = document.createElement("th"),
            a = this.createCheckbox_(null, i);
          n.appendChild(a), e.parentElement.insertBefore(n, e);
          for (var r = 0; r < i.length; r++) {
            var o = i[r].querySelector("td");
            if (o) {
              var l = document.createElement("td");
              if ("TBODY" === i[r].parentNode.nodeName.toUpperCase()) {
                var d = this.createCheckbox_(i[r]);
                l.appendChild(d)
              }
              i[r].insertBefore(l, o)
            }
          }
          this.element_.classList.add(this.CssClasses_.IS_UPGRADED)
        }
      }
    }, s.register({
      constructor: v,
      classAsString: "MaterialDataTable",
      cssClass: "mdl-js-data-table"
    });
    var b = function (e) {
      this.element_ = e, this.init()
    };
    window.MaterialRipple = b, b.prototype.Constant_ = {
      INITIAL_SCALE: "scale(0.0001, 0.0001)",
      INITIAL_SIZE: "1px",
      INITIAL_OPACITY: "0.4",
      FINAL_OPACITY: "0",
      FINAL_SCALE: ""
    }, b.prototype.CssClasses_ = {
      RIPPLE_CENTER: "mdl-ripple--center",
      RIPPLE_EFFECT_IGNORE_EVENTS: "mdl-js-ripple-effect--ignore-events",
      RIPPLE: "mdl-ripple",
      IS_ANIMATING: "is-animating",
      IS_VISIBLE: "is-visible"
    }, b.prototype.downHandler_ = function (e) {
      if (!this.rippleElement_.style.width && !this.rippleElement_.style.height) {
        var t = this.element_.getBoundingClientRect();
        this.boundHeight = t.height, this.boundWidth = t.width, this.rippleSize_ = 2 * Math.sqrt(t.width * t.width + t.height * t.height) + 2, this.rippleElement_.style.width = this.rippleSize_ + "px", this.rippleElement_.style.height = this.rippleSize_ + "px"
      }
      if (this.rippleElement_.classList.add(this.CssClasses_.IS_VISIBLE), "mousedown" === e.type && this.ignoringMouseDown_) this.ignoringMouseDown_ = !1;
      else {
        "touchstart" === e.type && (this.ignoringMouseDown_ = !0);
        var s = this.getFrameCount();
        if (s > 0) return;
        this.setFrameCount(1);
        var i, n, a = e.currentTarget.getBoundingClientRect();
        if (0 === e.clientX && 0 === e.clientY) i = Math.round(a.width / 2), n = Math.round(a.height / 2);
        else {
          var r = e.clientX ? e.clientX : e.touches[0].clientX,
            o = e.clientY ? e.clientY : e.touches[0].clientY;
          i = Math.round(r - a.left), n = Math.round(o - a.top)
        }
        this.setRippleXY(i, n), this.setRippleStyles(!0), window.requestAnimationFrame(this.animFrameHandler.bind(this))
      }
    }, b.prototype.upHandler_ = function (e) {
      e && 2 !== e.detail && window.setTimeout(function () {
        this.rippleElement_.classList.remove(this.CssClasses_.IS_VISIBLE)
      }.bind(this), 0)
    }, b.prototype.init = function () {
      if (this.element_) {
        var e = this.element_.classList.contains(this.CssClasses_.RIPPLE_CENTER);
        this.element_.classList.contains(this.CssClasses_.RIPPLE_EFFECT_IGNORE_EVENTS) || (this.rippleElement_ = this.element_.querySelector("." + this.CssClasses_.RIPPLE), this.frameCount_ = 0, this.rippleSize_ = 0, this.x_ = 0, this.y_ = 0, this.ignoringMouseDown_ = !1,
          this.boundDownHandler = this.downHandler_.bind(this), this.element_.addEventListener("mousedown", this.boundDownHandler), this.element_.addEventListener("touchstart", this.boundDownHandler), this.boundUpHandler = this.upHandler_.bind(this), this.element_.addEventListener("mouseup", this.boundUpHandler), this.element_.addEventListener("mouseleave", this.boundUpHandler), this.element_.addEventListener("touchend", this.boundUpHandler), this.element_.addEventListener("blur", this.boundUpHandler), this.getFrameCount = function () {
            return this.frameCount_
          }, this.setFrameCount = function (e) {
            this.frameCount_ = e
          }, this.getRippleElement = function () {
            return this.rippleElement_
          }, this.setRippleXY = function (e, t) {
            this.x_ = e, this.y_ = t
          }, this.setRippleStyles = function (t) {
            if (null !== this.rippleElement_) {
              var s, i, n, a = "translate(" + this.x_ + "px, " + this.y_ + "px)";
              t ? (i = this.Constant_.INITIAL_SCALE, n = this.Constant_.INITIAL_SIZE) : (i = this.Constant_.FINAL_SCALE, n = this.rippleSize_ + "px", e && (a = "translate(" + this.boundWidth / 2 + "px, " + this.boundHeight / 2 + "px)")), s = "translate(-50%, -50%) " + a + i, this.rippleElement_.style.webkitTransform = s, this.rippleElement_.style.msTransform = s, this.rippleElement_.style.transform = s, t ? this.rippleElement_.classList.remove(this.CssClasses_.IS_ANIMATING) : this.rippleElement_.classList.add(this.CssClasses_.IS_ANIMATING)
            }
          }, this.animFrameHandler = function () {
            this.frameCount_-- > 0 ? window.requestAnimationFrame(this.animFrameHandler.bind(this)) : this.setRippleStyles(!1)
          })
      }
    }, s.register({
      constructor: b,
      classAsString: "MaterialRipple",
      cssClass: "mdl-js-ripple-effect",
      widget: !1
    })
  }();