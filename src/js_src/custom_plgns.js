/*! modernizr 3.1.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-flexbox-flexboxlegacy-flexboxtweener-flexwrap !*/
! function(e, n, t) {
    function r(e) {
        var n = w.className,
            t = Modernizr._config.classPrefix || "";
        if (_ && (n = n.baseVal), Modernizr._config.enableJSClass) {
            var r = new RegExp("(^|\\s)" + t + "no-js(\\s|$)");
            n = n.replace(r, "$1" + t + "js$2")
        }
        Modernizr._config.enableClasses && (n += " " + t + e.join(" " + t), _ ? w.className.baseVal = n : w.className = n)
    }

    function o(e, n) {
        return typeof e === n
    }

    function s() {
        var e, n, t, r, s, i, a;
        for (var l in x)
            if (x.hasOwnProperty(l)) {
                if (e = [], n = x[l], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (t = 0; t < n.options.aliases.length; t++) e.push(n.options.aliases[t].toLowerCase());
                for (r = o(n.fn, "function") ? n.fn() : n.fn, s = 0; s < e.length; s++) i = e[s], a = i.split("."), 1 === a.length ? Modernizr[a[0]] = r : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = r), g.push((r ? "" : "no-") + a.join("-"))
            }
    }

    function i(e, n) {
        return function() {
            return e.apply(n, arguments)
        }
    }

    function a(e, n, t) {
        var r;
        for (var s in e)
            if (e[s] in n) return t === !1 ? e[s] : (r = n[e[s]], o(r, "function") ? i(r, t || n) : r);
        return !1
    }

    function l(e, n) {
        return !!~("" + e).indexOf(n)
    }

    function f() {
        return "function" != typeof n.createElement ? n.createElement(arguments[0]) : _ ? n.createElementNS.call(n, "http://www.w3.org/2000/svg", arguments[0]) : n.createElement.apply(n, arguments)
    }

    function u(e) {
        return e.replace(/([a-z])-([a-z])/g, function(e, n, t) {
            return n + t.toUpperCase()
        }).replace(/^-/, "")
    }

    function d(e) {
        return e.replace(/([A-Z])/g, function(e, n) {
            return "-" + n.toLowerCase()
        }).replace(/^ms-/, "-ms-")
    }

    function p() {
        var e = n.body;
        return e || (e = f(_ ? "svg" : "body"), e.fake = !0), e
    }

    function c(e, t, r, o) {
        var s, i, a, l, u = "modernizr",
            d = f("div"),
            c = p();
        if (parseInt(r, 10))
            for (; r--;) a = f("div"), a.id = o ? o[r] : u + (r + 1), d.appendChild(a);
        return s = f("style"), s.type = "text/css", s.id = "s" + u, (c.fake ? c : d).appendChild(s), c.appendChild(d), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(n.createTextNode(e)), d.id = u, c.fake && (c.style.background = "", c.style.overflow = "hidden", l = w.style.overflow, w.style.overflow = "hidden", w.appendChild(c)), i = t(d, e), c.fake ? (c.parentNode.removeChild(c), w.style.overflow = l, w.offsetHeight) : d.parentNode.removeChild(d), !!i
    }

    function m(n, r) {
        var o = n.length;
        if ("CSS" in e && "supports" in e.CSS) {
            for (; o--;)
                if (e.CSS.supports(d(n[o]), r)) return !0;
            return !1
        }
        if ("CSSSupportsRule" in e) {
            for (var s = []; o--;) s.push("(" + d(n[o]) + ":" + r + ")");
            return s = s.join(" or "), c("@supports (" + s + ") { #modernizr { position: absolute; } }", function(e) {
                return "absolute" == getComputedStyle(e, null).position
            })
        }
        return t
    }

    function h(e, n, r, s) {
        function i() {
            d && (delete P.style, delete P.modElem)
        }
        if (s = o(s, "undefined") ? !1 : s, !o(r, "undefined")) {
            var a = m(e, r);
            if (!o(a, "undefined")) return a
        }
        for (var d, p, c, h, v, y = ["modernizr", "tspan"]; !P.style;) d = !0, P.modElem = f(y.shift()), P.style = P.modElem.style;
        for (c = e.length, p = 0; c > p; p++)
            if (h = e[p], v = P.style[h], l(h, "-") && (h = u(h)), P.style[h] !== t) {
                if (s || o(r, "undefined")) return i(), "pfx" == n ? h : !0;
                try {
                    P.style[h] = r
                } catch (g) {}
                if (P.style[h] != v) return i(), "pfx" == n ? h : !0
            }
        return i(), !1
    }

    function v(e, n, t, r, s) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
            l = (e + " " + T.join(i + " ") + i).split(" ");
        return o(n, "string") || o(n, "undefined") ? h(l, n, r, s) : (l = (e + " " + S.join(i + " ") + i).split(" "), a(l, n, t))
    }

    function y(e, n, r) {
        return v(e, t, t, n, r)
    }
    var g = [],
        x = [],
        C = {
            _version: "3.1.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(e, n) {
                var t = this;
                setTimeout(function() {
                    n(t[e])
                }, 0)
            },
            addTest: function(e, n, t) {
                x.push({
                    name: e,
                    fn: n,
                    options: t
                })
            },
            addAsyncTest: function(e) {
                x.push({
                    name: null,
                    fn: e
                })
            }
        },
        Modernizr = function() {};
    Modernizr.prototype = C, Modernizr = new Modernizr;
    var w = n.documentElement,
        _ = "svg" === w.nodeName.toLowerCase(),
        b = "Moz O ms Webkit",
        S = C._config.usePrefixes ? b.toLowerCase().split(" ") : [];
    C._domPrefixes = S;
    var T = C._config.usePrefixes ? b.split(" ") : [];
    C._cssomPrefixes = T;
    var E = {
        elem: f("modernizr")
    };
    Modernizr._q.push(function() {
        delete E.elem;
    });
    var P = {
        style: E.elem.style
    };
    Modernizr._q.unshift(function() {
        delete P.style;
    }), C.testAllProps = v, C.testAllProps = y, Modernizr.addTest("flexbox", y("flexBasis", "1px", !0)), Modernizr.addTest("flexboxlegacy", y("boxDirection", "reverse", !0)), Modernizr.addTest("flexboxtweener", y("flexAlign", "end", !0)), Modernizr.addTest("flexwrap", y("flexWrap", "wrap", !0)), s(), r(g), delete C.addTest, delete C.addAsyncTest;
    for (var z = 0; z < Modernizr._q.length; z++) Modernizr._q[z]();
    e.Modernizr = Modernizr
}(window, document);








// containedStickyScroll
(function($) {

    $.fn.containedStickyScroll = function(options) {

        var defaults = {
            oSelector: this.selector,
            unstick: true,
            easing: 'linear',
            duration: 500,
            queue: false,
            closeChar: '^',
            closeTop: 0,
            closeRight: 0
        };

        options = $.extend(defaults, options);

        if (options.unstick === true) {
            this.css('position', 'absolute');
            this.append('<a class="scrollFixIt">' + options.closeChar + '</a>');
            jQuery(options.oSelector + ' .scrollFixIt').css('position', 'absolute');
            jQuery(options.oSelector + ' .scrollFixIt').css('top', options.closeTop + 'px');
            jQuery(options.oSelector + ' .scrollFixIt').css('right', options.closeTop + 'px');
            jQuery(options.oSelector + ' .scrollFixIt').css('cursor', 'pointer');
            jQuery(options.oSelector + ' .scrollFixIt').click(function() {
                getObject = options.oSelector;
                jQuery(getObject).animate({
                    top: "0px"
                }, {
                    queue: options.queue,
                    easing: options.easing,
                    duration: options.duration
                });
                jQuery(window).unbind();
                jQuery('.scrollFixIt').remove();
            });
        }
        jQuery(window).scroll(function() {
            getObject = options.oSelector;
            if (jQuery(window).scrollTop() > (jQuery(getObject).parent().offset().top) &&
                (jQuery(getObject).parent().height() + jQuery(getObject).parent().position().top - 30) > (jQuery(window).scrollTop() + jQuery(getObject).height())) {
                jQuery(getObject).animate({
                    top: (jQuery(window).scrollTop() - jQuery(getObject).parent().offset().top) + "px"
                }, {
                    queue: options.queue,
                    easing: options.easing,
                    duration: options.duration
                });
            } else if (jQuery(window).scrollTop() < (jQuery(getObject).parent().offset().top)) {
                jQuery(getObject).animate({
                    top: "0px"
                }, {
                    queue: options.queue,
                    easing: options.easing,
                    duration: options.duration
                });
            }
        });

    };
})(jQuery);
