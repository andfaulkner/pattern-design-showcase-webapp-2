! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t(require("react")) : "function" == typeof define && define.amd ? define(["react"], t) : "object" == typeof exports ? exports.ReactRouter = t(require("react")) : e.ReactRouter = t(e.React)
}(this, function(e) {
    return function(e) {
        function t(r) {
            if (n[r]) return n[r].exports;
            var o = n[r] = {
                exports: {},
                id: r,
                loaded: !1
            };
            return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
        }
        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
    }([function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(37),
            a = r(o);
        t.Router = a["default"];
        var u = n(18),
            i = r(u);
        t.Link = i["default"];
        var s = n(31),
            c = r(s);
        t.IndexLink = c["default"];
        var f = n(32),
            l = r(f);
        t.IndexRedirect = l["default"];
        var d = n(33),
            p = r(d);
        t.IndexRoute = p["default"];
        var h = n(19),
            v = r(h);
        t.Redirect = v["default"];
        var y = n(35),
            g = r(y);
        t.Route = g["default"];
        var m = n(30),
            _ = r(m);
        t.History = _["default"];
        var P = n(34),
            O = r(P);
        t.Lifecycle = O["default"];
        var R = n(36),
            x = r(R);
        t.RouteContext = x["default"];
        var w = n(48),
            b = r(w);
        t.useRoutes = b["default"];
        var M = n(5);
        t.createRoutes = M.createRoutes;
        var E = n(13),
            j = r(E);
        t.RouterContext = j["default"];
        var S = n(38),
            A = r(S);
        t.RoutingContext = A["default"];
        var C = n(6),
            k = r(C);
        t.PropTypes = k["default"];
        var T = n(46),
            H = r(T);
        t.match = H["default"];
        var L = n(24),
            q = r(L);
        t.useRouterHistory = q["default"];
        var U = n(8);
        t.formatPattern = U.formatPattern;
        var N = n(40),
            B = r(N);
        t.browserHistory = B["default"];
        var I = n(44),
            D = r(I);
        t.hashHistory = D["default"];
        var F = n(21),
            W = r(F);
        t.createMemoryHistory = W["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            t = "[react-router] " + t;
            for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; n > o; o++) r[o - 2] = arguments[o]
        }
        t.__esModule = !0, t["default"] = o;
        var a = n(4);
        r(a);
        e.exports = t["default"]
    }, function(t, n) {
        t.exports = e
    }, function(e, t, n) {
        "use strict";
        var r = function(e, t, n, r, o, a, u, i) {
            if (!e) {
                var s;
                if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                else {
                    var c = [n, r, o, a, u, i],
                        f = 0;
                    s = new Error(t.replace(/%s/g, function() {
                        return c[f++]
                    })), s.name = "Invariant Violation"
                }
                throw s.framesToPop = 1, s
            }
        };
        e.exports = r
    }, function(e, t, n) {
        "use strict";
        var r = function() {};
        e.exports = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            return null == e || p["default"].isValidElement(e)
        }

        function a(e) {
            return o(e) || Array.isArray(e) && e.every(o)
        }

        function u(e, t, n) {
            e = e || "UnknownComponent";
            for (var r in t)
                if (t.hasOwnProperty(r)) {
                    var o = t[r](n, r, e);
                    o instanceof Error
                }
        }

        function i(e, t) {
            return l({}, e, t)
        }

        function s(e) {
            var t = e.type,
                n = i(t.defaultProps, e.props);
            if (t.propTypes && u(t.displayName || t.name, t.propTypes, n), n.children) {
                var r = c(n.children, n);
                r.length && (n.childRoutes = r), delete n.children
            }
            return n
        }

        function c(e, t) {
            var n = [];
            return p["default"].Children.forEach(e, function(e) {
                if (p["default"].isValidElement(e))
                    if (e.type.createRouteFromReactElement) {
                        var r = e.type.createRouteFromReactElement(e, t);
                        r && n.push(r)
                    } else n.push(s(e))
            }), n
        }

        function f(e) {
            return a(e) ? e = c(e) : e && !Array.isArray(e) && (e = [e]), e
        }
        t.__esModule = !0;
        var l = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.isReactChildren = a, t.createRouteFromReactElement = s, t.createRoutesFromReactChildren = c, t.createRoutes = f;
        var d = n(2),
            p = r(d),
            h = n(1);
        r(h)
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            return e[t] ? new Error("<" + n + '> should not have a "' + t + '" prop') : void 0
        }
        t.__esModule = !0, t.falsy = r;
        var o = n(2),
            a = o.PropTypes.func,
            u = o.PropTypes.object,
            i = o.PropTypes.arrayOf,
            s = o.PropTypes.oneOfType,
            c = o.PropTypes.element,
            f = o.PropTypes.shape,
            l = o.PropTypes.string,
            d = f({
                listen: a.isRequired,
                pushState: a.isRequired,
                replaceState: a.isRequired,
                go: a.isRequired
            });
        t.history = d;
        var p = f({
            pathname: l.isRequired,
            search: l.isRequired,
            state: u,
            action: l.isRequired,
            key: l
        });
        t.location = p;
        var h = s([a, l]);
        t.component = h;
        var v = s([h, u]);
        t.components = v;
        var y = s([u, c]);
        t.route = y;
        var g = s([y, i(y)]);
        t.routes = g, t["default"] = {
            falsy: r,
            history: d,
            location: p,
            component: h,
            components: v,
            route: y
        }
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            var t = e.match(/^https?:\/\/[^\/]*/);
            return null == t ? e : e.substring(t[0].length)
        }

        function a(e) {
            var t = o(e),
                n = "",
                r = "",
                a = t.indexOf("#"); - 1 !== a && (r = t.substring(a), t = t.substring(0, a));
            var u = t.indexOf("?");
            return -1 !== u && (n = t.substring(u), t = t.substring(0, u)), "" === t && (t = "/"), {
                pathname: t,
                search: n,
                hash: r
            }
        }
        t.__esModule = !0, t.extractPath = o, t.parsePath = a;
        var u = n(4);
        r(u)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
        }

        function a(e) {
            return o(e).replace(/\/+/g, "/+")
        }

        function u(e) {
            for (var t = "", n = [], r = [], o = void 0, u = 0, i = /:([a-zA-Z_$][a-zA-Z0-9_$]*)|\*\*|\*|\(|\)/g; o = i.exec(e);) o.index !== u && (r.push(e.slice(u, o.index)), t += a(e.slice(u, o.index))), o[1] ? (t += "([^/?#]+)", n.push(o[1])) : "**" === o[0] ? (t += "([\\s\\S]*)", n.push("splat")) : "*" === o[0] ? (t += "([\\s\\S]*?)", n.push("splat")) : "(" === o[0] ? t += "(?:" : ")" === o[0] && (t += ")?"), r.push(o[0]), u = i.lastIndex;
            return u !== e.length && (r.push(e.slice(u, e.length)), t += a(e.slice(u, e.length))), {
                pattern: e,
                regexpSource: t,
                paramNames: n,
                tokens: r
            }
        }

        function i(e) {
            return e in h || (h[e] = u(e)), h[e]
        }

        function s(e, t) {
            "/" !== e.charAt(0) && (e = "/" + e), "/" !== t.charAt(0) && (t = "/" + t);
            var n = i(e),
                r = n.regexpSource,
                o = n.paramNames,
                a = n.tokens;
            r += "/*";
            var u = "*" !== a[a.length - 1];
            u && (r += "([\\s\\S]*?)");
            var s = t.match(new RegExp("^" + r + "$", "i")),
                c = void 0,
                f = void 0;
            if (null != s) {
                if (u) {
                    c = s.pop();
                    var l = s[0].substr(0, s[0].length - c.length);
                    if (c && "/" !== l.charAt(l.length - 1)) return {
                        remainingPathname: null,
                        paramNames: o,
                        paramValues: null
                    }
                } else c = "";
                f = s.slice(1).map(function(e) {
                    return null != e ? decodeURIComponent(e) : e
                })
            } else c = f = null;
            return {
                remainingPathname: c,
                paramNames: o,
                paramValues: f
            }
        }

        function c(e) {
            return i(e).paramNames
        }

        function f(e, t) {
            var n = s(e, t),
                r = n.paramNames,
                o = n.paramValues;
            return null != o ? r.reduce(function(e, t, n) {
                return e[t] = o[n], e
            }, {}) : null
        }

        function l(e, t) {
            t = t || {};
            for (var n = i(e), r = n.tokens, o = 0, a = "", u = 0, s = void 0, c = void 0, f = void 0, l = 0, d = r.length; d > l; ++l) s = r[l], "*" === s || "**" === s ? (f = Array.isArray(t.splat) ? t.splat[u++] : t.splat, null != f || o > 0 ? void 0 : p["default"](!1), null != f && (a += encodeURI(f))) : "(" === s ? o += 1 : ")" === s ? o -= 1 : ":" === s.charAt(0) ? (c = s.substring(1), f = t[c], null != f || o > 0 ? void 0 : p["default"](!1), null != f && (a += encodeURIComponent(f))) : a += s;
            return a.replace(/\/+/g, "/")
        }
        t.__esModule = !0, t.compilePattern = i, t.matchPattern = s, t.getParamNames = c, t.getParams = f, t.formatPattern = l;
        var d = n(3),
            p = r(d),
            h = {}
    }, function(e, t) {
        "use strict";
        t.__esModule = !0;
        var n = "PUSH";
        t.PUSH = n;
        var r = "REPLACE";
        t.REPLACE = r;
        var o = "POP";
        t.POP = o, t["default"] = {
            PUSH: n,
            REPLACE: r,
            POP: o
        }
    }, function(e, t) {
        "use strict";
        t.__esModule = !0;
        var n = !("undefined" == typeof window || !window.document || !window.document.createElement);
        t.canUseDOM = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function a(e) {
            return c.stringify(e).replace(/%20/g, "+")
        }

        function u(e) {
            return function() {
                function t(e) {
                    if (null == e.query) {
                        var t = e.search;
                        e.query = R(t.substring(1)), e[v] = {
                            search: t,
                            searchBase: ""
                        }
                    }
                    return e
                }

                function n(e, t) {
                    var n, r = e[v],
                        o = t ? O(t) : "";
                    if (!r && !o) return e;
                    "string" == typeof e && (e = d.parsePath(e));
                    var a = void 0;
                    a = r && e.search === r.search ? r.searchBase : e.search || "";
                    var u = a;
                    return o && (u += (u ? "&" : "?") + o), i({}, e, (n = {
                        search: u
                    }, n[v] = {
                        search: u,
                        searchBase: a
                    }, n))
                }

                function r(e) {
                    return w.listenBefore(function(n, r) {
                        l["default"](e, t(n), r)
                    })
                }

                function u(e) {
                    return w.listen(function(n) {
                        e(t(n))
                    })
                }

                function s(e) {
                    w.push(n(e, e.query))
                }

                function c(e) {
                    w.replace(n(e, e.query))
                }

                function f(e, t) {
                    return w.createPath(n(e, t || e.query))
                }

                function p(e, t) {
                    return w.createHref(n(e, t || e.query))
                }

                function g(e) {
                    for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), a = 1; r > a; a++) o[a - 1] = arguments[a];
                    var u = w.createLocation.apply(w, [n(e, e.query)].concat(o));
                    return e.query && (u.query = e.query), t(u)
                }

                function m(e, t, n) {
                    "string" == typeof t && (t = d.parsePath(t)), s(i({
                        state: e
                    }, t, {
                        query: n
                    }))
                }

                function _(e, t, n) {
                    "string" == typeof t && (t = d.parsePath(t)), c(i({
                        state: e
                    }, t, {
                        query: n
                    }))
                }
                var P = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    O = P.stringifyQuery,
                    R = P.parseQueryString,
                    x = o(P, ["stringifyQuery", "parseQueryString"]),
                    w = e(x);
                return "function" != typeof O && (O = a), "function" != typeof R && (R = y), i({}, w, {
                    listenBefore: r,
                    listen: u,
                    push: s,
                    replace: c,
                    createPath: f,
                    createHref: p,
                    createLocation: g,
                    pushState: h["default"](m, "pushState is deprecated; use push instead"),
                    replaceState: h["default"](_, "replaceState is deprecated; use replace instead")
                })
            }
        }
        t.__esModule = !0;
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = n(4),
            c = (r(s), n(56)),
            f = n(17),
            l = r(f),
            d = n(7),
            p = n(16),
            h = r(p),
            v = "$searchBase",
            y = c.parse;
        t["default"] = u, e.exports = t["default"]
    }, function(e, t) {
        "use strict";

        function n(e, t, n) {
            function r() {
                return i = !0, s ? void(f = [].concat(o.call(arguments))) : void n.apply(this, arguments)
            }

            function a() {
                if (!i && (c = !0, !s)) {
                    for (s = !0; !i && e > u && c;) c = !1, t.call(this, u++, a, r);
                    return s = !1, i ? void n.apply(this, f) : void(u >= e && c && (i = !0, n()))
                }
            }
            var u = 0,
                i = !1,
                s = !1,
                c = !1,
                f = void 0;
            a()
        }

        function r(e, t, n) {
            function r(e, t, r) {
                u || (t ? (u = !0, n(t)) : (a[e] = r, u = ++i === o, u && n(null, a)))
            }
            var o = e.length,
                a = [];
            if (0 === o) return n(null, a);
            var u = !1,
                i = 0;
            e.forEach(function(e, n) {
                t(e, n, function(e, t) {
                    r(n, e, t)
                })
            })
        }
        t.__esModule = !0;
        var o = Array.prototype.slice;
        t.loopAsync = n, t.mapAsync = r
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            a = n(3),
            u = r(a),
            i = n(2),
            s = r(i),
            c = n(23),
            f = (r(c), n(43)),
            l = r(f),
            d = n(5),
            p = n(1),
            h = (r(p), s["default"].PropTypes),
            v = h.array,
            y = h.func,
            g = h.object,
            m = s["default"].createClass({
                displayName: "RouterContext",
                propTypes: {
                    history: g,
                    router: g.isRequired,
                    location: g.isRequired,
                    routes: v.isRequired,
                    params: g.isRequired,
                    components: v.isRequired,
                    createElement: y.isRequired
                },
                getDefaultProps: function() {
                    return {
                        createElement: s["default"].createElement
                    }
                },
                childContextTypes: {
                    history: g,
                    location: g.isRequired,
                    router: g.isRequired
                },
                getChildContext: function() {
                    var e = this.props,
                        t = e.router,
                        n = e.history,
                        r = e.location;
                    return t || (t = o({}, n, {
                        setRouteLeaveHook: n.listenBeforeLeavingRoute
                    }), delete t.listenBeforeLeavingRoute), {
                        history: n,
                        location: r,
                        router: t
                    }
                },
                createElement: function(e, t) {
                    return null == e ? null : this.props.createElement(e, t)
                },
                render: function() {
                    var e = this,
                        t = this.props,
                        n = t.history,
                        r = t.location,
                        a = t.routes,
                        i = t.params,
                        c = t.components,
                        f = null;
                    return c && (f = c.reduceRight(function(t, u, s) {
                        if (null == u) return t;
                        var c = a[s],
                            f = l["default"](c, i),
                            p = {
                                history: n,
                                location: r,
                                params: i,
                                route: c,
                                routeParams: f,
                                routes: a
                            };
                        if (d.isReactChildren(t)) p.children = t;
                        else if (t)
                            for (var h in t) t.hasOwnProperty(h) && (p[h] = t[h]);
                        if ("object" == typeof u) {
                            var v = {};
                            for (var y in u) u.hasOwnProperty(y) && (v[y] = e.createElement(u[y], o({
                                key: y
                            }, p)));
                            return v
                        }
                        return e.createElement(u, p)
                    }, f)), null === f || f === !1 || s["default"].isValidElement(f) ? void 0 : u["default"](!1), f
                }
            });
        t["default"] = m, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) return !0;
            return !1
        }

        function a(e, t) {
            function n(t) {
                var n = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                    r = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2],
                    o = void 0;
                return n && n !== !0 || null !== r ? (t = {
                    pathname: t,
                    query: n
                }, o = r || !1) : (t = e.createLocation(t), o = n), p["default"](t, o, O.location, O.routes, O.params)
            }

            function r(t) {
                return e.createLocation(t, s.REPLACE)
            }

            function a(e, n) {
                R && R.location === e ? i(R, n) : g["default"](t, e, function(t, r) {
                    t ? n(t) : r ? i(u({}, r, {
                        location: e
                    }), n) : n()
                })
            }

            function i(e, t) {
                var n = f["default"](O, e),
                    o = n.leaveRoutes,
                    a = n.enterRoutes;
                l.runLeaveHooks(o), o.forEach(m), l.runEnterHooks(a, e, function(n, o) {
                    n ? t(n) : o ? t(null, r(o)) : v["default"](e, function(n, r) {
                        n ? t(n) : t(null, null, O = u({}, e, {
                            components: r
                        }))
                    })
                })
            }

            function c(e) {
                var t = arguments.length <= 1 || void 0 === arguments[1] ? !0 : arguments[1];
                return e.__id__ || t && (e.__id__ = x++)
            }

            function d(e) {
                return e.reduce(function(e, t) {
                    return e.push.apply(e, w[c(t)]), e
                }, [])
            }

            function h(e, n) {
                g["default"](t, e, function(t, r) {
                    if (null == r) return void n();
                    R = u({}, r, {
                        location: e
                    });
                    for (var o = d(f["default"](O, R).leaveRoutes), a = void 0, i = 0, s = o.length; null == a && s > i; ++i) a = o[i](e);
                    n(a)
                })
            }

            function y() {
                if (O.routes) {
                    for (var e = d(O.routes), t = void 0, n = 0, r = e.length;
                        "string" != typeof t && r > n; ++n) t = e[n]();
                    return t
                }
            }

            function m(e) {
                var t = c(e, !1);
                t && (delete w[t], o(w) || (b && (b(), b = null), M && (M(), M = null)))
            }

            function _(t, n) {
                var r = c(t),
                    a = w[r];
                if (a) - 1 === a.indexOf(n) && a.push(n);
                else {
                    var u = !o(w);
                    w[r] = [n], u && (b = e.listenBefore(h), e.listenBeforeUnload && (M = e.listenBeforeUnload(y)))
                }
                return function() {
                    var e = w[r];
                    if (e) {
                        var o = e.filter(function(e) {
                            return e !== n
                        });
                        0 === o.length ? m(t) : w[r] = o
                    }
                }
            }

            function P(t) {
                return e.listen(function(n) {
                    O.location === n ? t(null, O) : a(n, function(n, r, o) {
                        n ? t(n) : r ? e.transitionTo(r) : o && t(null, o)
                    })
                })
            }
            var O = {},
                R = void 0,
                x = 1,
                w = {},
                b = void 0,
                M = void 0;
            return {
                isActive: n,
                match: a,
                listenBeforeLeavingRoute: _,
                listen: P
            }
        }
        t.__esModule = !0;
        var u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t["default"] = a;
        var i = n(1),
            s = (r(i), n(9)),
            c = n(41),
            f = r(c),
            l = n(39),
            d = n(45),
            p = r(d),
            h = n(42),
            v = r(h),
            y = n(47),
            g = r(y);
        e.exports = t["default"]
    }, function(e, t) {
        "use strict";

        function n(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent("on" + t, n)
        }

        function r(e, t, n) {
            e.removeEventListener ? e.removeEventListener(t, n, !1) : e.detachEvent("on" + t, n)
        }

        function o() {
            return window.location.href.split("#")[1] || ""
        }

        function a(e) {
            window.location.replace(window.location.pathname + window.location.search + "#" + e)
        }

        function u() {
            return window.location.pathname + window.location.search + window.location.hash
        }

        function i(e) {
            e && window.history.go(e)
        }

        function s(e, t) {
            t(window.confirm(e))
        }

        function c() {
            var e = navigator.userAgent;
            return -1 === e.indexOf("Android 2.") && -1 === e.indexOf("Android 4.0") || -1 === e.indexOf("Mobile Safari") || -1 !== e.indexOf("Chrome") || -1 !== e.indexOf("Windows Phone") ? window.history && "pushState" in window.history : !1
        }

        function f() {
            var e = navigator.userAgent;
            return -1 === e.indexOf("Firefox")
        }
        t.__esModule = !0, t.addEventListener = n, t.removeEventListener = r, t.getHashPath = o, t.replaceHashPath = a, t.getWindowPath = u, t.go = i, t.getUserConfirmation = s, t.supportsHistory = c, t.supportsGoWithoutReloadUsingHash = f
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            return function() {
                return e.apply(this, arguments)
            }
        }
        t.__esModule = !0;
        var a = n(4);
        r(a);
        t["default"] = o, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t, n) {
            var r = e(t, n);
            e.length < 2 && n(r)
        }
        t.__esModule = !0;
        var a = n(4);
        r(a);
        t["default"] = o, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function a(e) {
            return 0 === e.button
        }

        function u(e) {
            return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
        }

        function i(e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) return !1;
            return !0
        }

        function s(e, t) {
            var n = t.query,
                r = t.hash,
                o = t.state;
            return n || r || o ? {
                pathname: e,
                query: n,
                hash: r,
                state: o
            } : e
        }
        t.__esModule = !0;
        var c = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            f = n(2),
            l = r(f),
            d = n(1),
            p = (r(d), l["default"].PropTypes),
            h = p.bool,
            v = p.object,
            y = p.string,
            g = p.func,
            m = p.oneOfType,
            _ = l["default"].createClass({
                displayName: "Link",
                contextTypes: {
                    router: v
                },
                propTypes: {
                    to: m([y, v]).isRequired,
                    query: v,
                    hash: y,
                    state: v,
                    activeStyle: v,
                    activeClassName: y,
                    onlyActiveOnIndex: h.isRequired,
                    onClick: g
                },
                getDefaultProps: function() {
                    return {
                        onlyActiveOnIndex: !1,
                        className: "",
                        style: {}
                    }
                },
                handleClick: function(e) {
                    var t = !0;
                    if (this.props.onClick && this.props.onClick(e), !u(e) && a(e)) {
                        if (e.defaultPrevented === !0 && (t = !1), this.props.target) return void(t || e.preventDefault());
                        if (e.preventDefault(), t) {
                            var n = this.props,
                                r = n.to,
                                o = n.query,
                                i = n.hash,
                                c = n.state,
                                f = s(r, {
                                    query: o,
                                    hash: i,
                                    state: c
                                });
                            this.context.router.push(f)
                        }
                    }
                },
                render: function() {
                    var e = this.props,
                        t = e.to,
                        n = e.query,
                        r = e.hash,
                        a = e.state,
                        u = e.activeClassName,
                        f = e.activeStyle,
                        d = e.onlyActiveOnIndex,
                        p = o(e, ["to", "query", "hash", "state", "activeClassName", "activeStyle", "onlyActiveOnIndex"]),
                        h = this.context.router;
                    if (h) {
                        var v = s(t, {
                            query: n,
                            hash: r,
                            state: a
                        });
                        p.href = h.createHref(v), (u || null != f && !i(f)) && h.isActive(v, d) && (u && (p.className += "" === p.className ? u : " " + u), f && (p.style = c({}, p.style, f)))
                    }
                    return l["default"].createElement("a", c({}, p, {
                        onClick: this.handleClick
                    }))
                }
            });
        t["default"] = _, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(2),
            a = r(o),
            u = n(3),
            i = r(u),
            s = n(5),
            c = n(8),
            f = n(6),
            l = a["default"].PropTypes,
            d = l.string,
            p = l.object,
            h = a["default"].createClass({
                displayName: "Redirect",
                statics: {
                    createRouteFromReactElement: function(e) {
                        var t = s.createRouteFromReactElement(e);
                        return t.from && (t.path = t.from), t.onEnter = function(e, n) {
                            var r = e.location,
                                o = e.params,
                                a = void 0;
                            if ("/" === t.to.charAt(0)) a = c.formatPattern(t.to, o);
                            else if (t.to) {
                                var u = e.routes.indexOf(t),
                                    i = h.getRoutePattern(e.routes, u - 1),
                                    s = i.replace(/\/*$/, "/") + t.to;
                                a = c.formatPattern(s, o)
                            } else a = r.pathname;
                            n({
                                pathname: a,
                                query: t.query || r.query,
                                state: t.state || r.state
                            })
                        }, t
                    },
                    getRoutePattern: function(e, t) {
                        for (var n = "", r = t; r >= 0; r--) {
                            var o = e[r],
                                a = o.path || "";
                            if (n = a.replace(/\/*$/, "/") + n, 0 === a.indexOf("/")) break
                        }
                        return "/" + n
                    }
                },
                propTypes: {
                    path: d,
                    from: d,
                    to: d.isRequired,
                    query: p,
                    state: p,
                    onEnter: f.falsy,
                    children: f.falsy
                },
                render: function() {
                    i["default"](!1)
                }
            });
        t["default"] = h, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            return u({}, e, {
                setRouteLeaveHook: t.listenBeforeLeavingRoute,
                isActive: t.isActive
            })
        }

        function a(e, t) {
            return e = u({}, e, t)
        }
        t.__esModule = !0;
        var u = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
            }
            return e
        };
        t.createRouterObject = o, t.createRoutingHistory = a;
        var i = n(23);
        r(i)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            var t = f["default"](e),
                n = function() {
                    return t
                },
                r = u["default"](s["default"](n))(e);
            return r.__v2_compatible__ = !0, r
        }
        t.__esModule = !0, t["default"] = o;
        var a = n(11),
            u = r(a),
            i = n(29),
            s = r(i),
            c = n(55),
            f = r(c);
        e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(24),
            a = r(o),
            u = !("undefined" == typeof window || !window.document || !window.document.createElement);
        t["default"] = function(e) {
            var t = void 0;
            return u && (t = a["default"](e)()), t
        }, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            if (!u) return e;
            var n = {},
                r = function(t) {
                    "function" == typeof e[t] ? n[t] = function() {
                        return e[t].apply(e, arguments)
                    } : Object.defineProperty(n, t, {
                        configurable: !1,
                        enumerable: !1,
                        get: function() {
                            return e[t]
                        }
                    })
                };
            for (var o in e) r(o);
            return n
        }
        t.__esModule = !0, t["default"] = o;
        var a = n(1),
            u = (r(a), !1);
        e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            return function(t) {
                var n = u["default"](s["default"](e))(t);
                return n.__v2_compatible__ = !0, n
            }
        }
        t.__esModule = !0, t["default"] = o;
        var a = n(11),
            u = r(a),
            i = n(29),
            s = r(i);
        e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            return s + e
        }

        function a(e, t) {
            try {
                null == t ? window.sessionStorage.removeItem(o(e)) : window.sessionStorage.setItem(o(e), JSON.stringify(t))
            } catch (n) {
                if (n.name === f) return;
                if (c.indexOf(n.name) >= 0 && 0 === window.sessionStorage.length) return;
                throw n
            }
        }

        function u(e) {
            var t = void 0;
            try {
                t = window.sessionStorage.getItem(o(e))
            } catch (n) {
                if (n.name === f) return null
            }
            if (t) try {
                return JSON.parse(t)
            } catch (n) {}
            return null
        }
        t.__esModule = !0, t.saveState = a, t.readState = u;
        var i = n(4),
            s = (r(i), "@@History/"),
            c = ["QuotaExceededError", "QUOTA_EXCEEDED_ERR"],
            f = "SecurityError"
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            function t(e) {
                return s.canUseDOM ? void 0 : i["default"](!1), n.listen(e)
            }
            var n = l["default"](a({
                getUserConfirmation: c.getUserConfirmation
            }, e, {
                go: c.go
            }));
            return a({}, n, {
                listen: t
            })
        }
        t.__esModule = !0;
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = n(3),
            i = r(u),
            s = n(10),
            c = n(15),
            f = n(28),
            l = r(f);
        t["default"] = o, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            return "string" == typeof e && "/" === e.charAt(0)
        }

        function a() {
            var e = g.getHashPath();
            return o(e) ? !0 : (g.replaceHashPath("/" + e), !1)
        }

        function u(e, t, n) {
            return e + (-1 === e.indexOf("?") ? "?" : "&") + (t + "=" + n)
        }

        function i(e, t) {
            return e.replace(new RegExp("[?&]?" + t + "=[a-zA-Z0-9]+"), "")
        }

        function s(e, t) {
            var n = e.match(new RegExp("\\?.*?\\b" + t + "=(.+?)\\b"));
            return n && n[1]
        }

        function c() {
            function e() {
                var e = g.getHashPath(),
                    t = void 0,
                    n = void 0;
                E ? (t = s(e, E), e = i(e, E), t ? n = m.readState(t) : (n = null, t = j.createKey(), g.replaceHashPath(u(e, E, t)))) : t = n = null;
                var r = v.parsePath(e);
                return j.createLocation(f({}, r, {
                    state: n
                }), void 0, t)
            }

            function t(t) {
                function n() {
                    a() && r(e())
                }
                var r = t.transitionTo;
                return a(), g.addEventListener(window, "hashchange", n),
                    function() {
                        g.removeEventListener(window, "hashchange", n)
                    }
            }

            function n(e) {
                var t = e.basename,
                    n = e.pathname,
                    r = e.search,
                    o = e.state,
                    a = e.action,
                    i = e.key;
                if (a !== h.POP) {
                    var s = (t || "") + n + r;
                    E ? (s = u(s, E, i), m.saveState(i, o)) : e.key = e.state = null;
                    var c = g.getHashPath();
                    a === h.PUSH ? c !== s && (window.location.hash = s) : c !== s && g.replaceHashPath(s)
                }
            }

            function r(e) {
                1 === ++S && (A = t(j));
                var n = j.listenBefore(e);
                return function() {
                    n(), 0 === --S && A()
                }
            }

            function o(e) {
                1 === ++S && (A = t(j));
                var n = j.listen(e);
                return function() {
                    n(), 0 === --S && A()
                }
            }

            function c(e) {
                j.push(e)
            }

            function l(e) {
                j.replace(e)
            }

            function d(e) {
                j.go(e)
            }

            function _(e) {
                return "#" + j.createHref(e)
            }

            function R(e) {
                1 === ++S && (A = t(j)), j.registerTransitionHook(e)
            }

            function x(e) {
                j.unregisterTransitionHook(e), 0 === --S && A()
            }

            function w(e, t) {
                j.pushState(e, t)
            }

            function b(e, t) {
                j.replaceState(e, t)
            }
            var M = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            y.canUseDOM ? void 0 : p["default"](!1);
            var E = M.queryKey;
            (void 0 === E || E) && (E = "string" == typeof E ? E : O);
            var j = P["default"](f({}, M, {
                    getCurrentLocation: e,
                    finishTransition: n,
                    saveState: m.saveState
                })),
                S = 0,
                A = void 0;
            g.supportsGoWithoutReloadUsingHash();
            return f({}, j, {
                listenBefore: r,
                listen: o,
                push: c,
                replace: l,
                go: d,
                createHref: _,
                registerTransitionHook: R,
                unregisterTransitionHook: x,
                pushState: w,
                replaceState: b
            })
        }
        t.__esModule = !0;
        var f = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            l = n(4),
            d = (r(l), n(3)),
            p = r(d),
            h = n(9),
            v = n(7),
            y = n(10),
            g = n(15),
            m = n(25),
            _ = n(26),
            P = r(_),
            O = "_k";
        t["default"] = c, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            return Math.random().toString(36).substr(2, e)
        }

        function a(e, t) {
            return e.pathname === t.pathname && e.search === t.search && e.key === t.key && f["default"](e.state, t.state)
        }

        function u() {
            function e(e) {
                return N.push(e),
                    function() {
                        N = N.filter(function(t) {
                            return t !== e
                        })
                    }
            }

            function t() {
                return F && F.action === p.POP ? B.indexOf(F.key) : D ? B.indexOf(D.key) : -1
            }

            function n(e) {
                var n = t();
                D = e, D.action === p.PUSH ? B = [].concat(B.slice(0, n + 1), [D.key]) : D.action === p.REPLACE && (B[n] = D.key), I.forEach(function(e) {
                    e(D)
                })
            }

            function r(e) {
                if (I.push(e), D) e(D);
                else {
                    var t = k();
                    B = [t.key], n(t)
                }
                return function() {
                    I = I.filter(function(t) {
                        return t !== e
                    })
                }
            }

            function u(e, t) {
                d.loopAsync(N.length, function(t, n, r) {
                    g["default"](N[t], e, function(e) {
                        null != e ? r(e) : n()
                    })
                }, function(e) {
                    U && "string" == typeof e ? U(e, function(e) {
                        t(e !== !1)
                    }) : t(e !== !1)
                })
            }

            function s(e) {
                D && a(D, e) || (F = e, u(e, function(t) {
                    if (F === e)
                        if (t) {
                            if (e.action === p.PUSH) {
                                var r = R(D),
                                    o = R(e);
                                o === r && f["default"](D.state, e.state) && (e.action = p.REPLACE)
                            }
                            T(e) !== !1 && n(e)
                        } else if (D && e.action === p.POP) {
                        var a = B.indexOf(D.key),
                            u = B.indexOf(e.key); - 1 !== a && -1 !== u && L(a - u)
                    }
                }))
            }

            function c(e) {
                s(w(e, p.PUSH, O()))
            }

            function h(e) {
                s(w(e, p.REPLACE, O()))
            }

            function y() {
                L(-1)
            }

            function m() {
                L(1)
            }

            function O() {
                return o(q)
            }

            function R(e) {
                if (null == e || "string" == typeof e) return e;
                var t = e.pathname,
                    n = e.search,
                    r = e.hash,
                    o = t;
                return n && (o += n), r && (o += r), o
            }

            function x(e) {
                return R(e)
            }

            function w(e, t) {
                var n = arguments.length <= 2 || void 0 === arguments[2] ? O() : arguments[2];
                return "object" == typeof t && ("string" == typeof e && (e = l.parsePath(e)), e = i({}, e, {
                    state: t
                }), t = n, n = arguments[3] || O()), v["default"](e, t, n)
            }

            function b(e) {
                D ? (M(D, e), n(D)) : M(k(), e)
            }

            function M(e, t) {
                e.state = i({}, e.state, t), H(e.key, e.state)
            }

            function E(e) {
                -1 === N.indexOf(e) && N.push(e)
            }

            function j(e) {
                N = N.filter(function(t) {
                    return t !== e
                })
            }

            function S(e, t) {
                "string" == typeof t && (t = l.parsePath(t)), c(i({
                    state: e
                }, t))
            }

            function A(e, t) {
                "string" == typeof t && (t = l.parsePath(t)), h(i({
                    state: e
                }, t))
            }
            var C = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                k = C.getCurrentLocation,
                T = C.finishTransition,
                H = C.saveState,
                L = C.go,
                q = C.keyLength,
                U = C.getUserConfirmation;
            "number" != typeof q && (q = P);
            var N = [],
                B = [],
                I = [],
                D = void 0,
                F = void 0;
            return {
                listenBefore: e,
                listen: r,
                transitionTo: s,
                push: c,
                replace: h,
                go: L,
                goBack: y,
                goForward: m,
                createKey: O,
                createPath: R,
                createHref: x,
                createLocation: w,
                setState: _["default"](b, "setState is deprecated; use location.key to save state instead"),
                registerTransitionHook: _["default"](E, "registerTransitionHook is deprecated; use listenBefore instead"),
                unregisterTransitionHook: _["default"](j, "unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead"),
                pushState: _["default"](S, "pushState is deprecated; use push instead"),
                replaceState: _["default"](A, "replaceState is deprecated; use replace instead")
            }
        }
        t.__esModule = !0;
        var i = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            s = n(4),
            c = (r(s), n(49)),
            f = r(c),
            l = n(7),
            d = n(52),
            p = n(9),
            h = n(54),
            v = r(h),
            y = n(17),
            g = r(y),
            m = n(16),
            _ = r(m),
            P = 6;
        t["default"] = u, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function a(e) {
            return function() {
                function t(e) {
                    return _ && null == e.basename && (0 === e.pathname.indexOf(_) ? (e.pathname = e.pathname.substring(_.length), e.basename = _, "" === e.pathname && (e.pathname = "/")) : e.basename = ""), e
                }

                function n(e) {
                    if (!_) return e;
                    "string" == typeof e && (e = s.parsePath(e));
                    var t = e.pathname,
                        n = "/" === _.slice(-1) ? _ : _ + "/",
                        r = "/" === t.charAt(0) ? t.slice(1) : t,
                        o = n + r;
                    return u({}, e, {
                        pathname: o
                    })
                }

                function r(e) {
                    return O.listenBefore(function(n, r) {
                        f["default"](e, t(n), r)
                    })
                }

                function a(e) {
                    return O.listen(function(n) {
                        e(t(n))
                    })
                }

                function c(e) {
                    O.push(n(e))
                }

                function l(e) {
                    O.replace(n(e))
                }

                function p(e) {
                    return O.createPath(n(e))
                }

                function h(e) {
                    return O.createHref(n(e))
                }

                function v(e) {
                    for (var r = arguments.length, o = Array(r > 1 ? r - 1 : 0), a = 1; r > a; a++) o[a - 1] = arguments[a];
                    return t(O.createLocation.apply(O, [n(e)].concat(o)))
                }

                function y(e, t) {
                    "string" == typeof t && (t = s.parsePath(t)), c(u({
                        state: e
                    }, t))
                }

                function g(e, t) {
                    "string" == typeof t && (t = s.parsePath(t)), l(u({
                        state: e
                    }, t))
                }
                var m = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    _ = m.basename,
                    P = o(m, ["basename"]),
                    O = e(P);
                if (null == _ && i.canUseDOM) {
                    var R = document.getElementsByTagName("base")[0];
                    R && (_ = s.extractPath(R.href))
                }
                return u({}, O, {
                    listenBefore: r,
                    listen: a,
                    push: c,
                    replace: l,
                    createPath: p,
                    createHref: h,
                    createLocation: v,
                    pushState: d["default"](y, "pushState is deprecated; use push instead"),
                    replaceState: d["default"](g, "replaceState is deprecated; use replace instead")
                })
            }
        }
        t.__esModule = !0;
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = n(10),
            s = n(7),
            c = n(17),
            f = r(c),
            l = n(16),
            d = r(l);
        t["default"] = a, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(1),
            a = (r(o), n(6)),
            u = {
                contextTypes: {
                    history: a.history
                },
                componentWillMount: function() {
                    this.history = this.context.history
                }
            };
        t["default"] = u, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            a = n(2),
            u = r(a),
            i = n(18),
            s = r(i),
            c = u["default"].createClass({
                displayName: "IndexLink",
                render: function() {
                    return u["default"].createElement(s["default"], o({}, this.props, {
                        onlyActiveOnIndex: !0
                    }))
                }
            });
        t["default"] = c, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(2),
            a = r(o),
            u = n(1),
            i = (r(u), n(3)),
            s = r(i),
            c = n(19),
            f = r(c),
            l = n(6),
            d = a["default"].PropTypes,
            p = d.string,
            h = d.object,
            v = a["default"].createClass({
                displayName: "IndexRedirect",
                statics: {
                    createRouteFromReactElement: function(e, t) {
                        t && (t.indexRoute = f["default"].createRouteFromReactElement(e))
                    }
                },
                propTypes: {
                    to: p.isRequired,
                    query: h,
                    state: h,
                    onEnter: l.falsy,
                    children: l.falsy
                },
                render: function() {
                    s["default"](!1)
                }
            });
        t["default"] = v, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(2),
            a = r(o),
            u = n(1),
            i = (r(u), n(3)),
            s = r(i),
            c = n(5),
            f = n(6),
            l = a["default"].PropTypes.func,
            d = a["default"].createClass({
                displayName: "IndexRoute",
                statics: {
                    createRouteFromReactElement: function(e, t) {
                        t && (t.indexRoute = c.createRouteFromReactElement(e))
                    }
                },
                propTypes: {
                    path: f.falsy,
                    component: f.component,
                    components: f.components,
                    getComponent: l,
                    getComponents: l
                },
                render: function() {
                    s["default"](!1)
                }
            });
        t["default"] = d, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(1),
            a = (r(o), n(2)),
            u = r(a),
            i = n(3),
            s = r(i),
            c = u["default"].PropTypes.object,
            f = {
                contextTypes: {
                    history: c.isRequired,
                    route: c
                },
                propTypes: {
                    route: c
                },
                componentDidMount: function() {
                    this.routerWillLeave ? void 0 : s["default"](!1);
                    var e = this.props.route || this.context.route;
                    e ? void 0 : s["default"](!1), this._unlistenBeforeLeavingRoute = this.context.history.listenBeforeLeavingRoute(e, this.routerWillLeave)
                },
                componentWillUnmount: function() {
                    this._unlistenBeforeLeavingRoute && this._unlistenBeforeLeavingRoute()
                }
            };
        t["default"] = f, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(2),
            a = r(o),
            u = n(3),
            i = r(u),
            s = n(5),
            c = n(6),
            f = a["default"].PropTypes,
            l = f.string,
            d = f.func,
            p = a["default"].createClass({
                displayName: "Route",
                statics: {
                    createRouteFromReactElement: s.createRouteFromReactElement
                },
                propTypes: {
                    path: l,
                    component: c.component,
                    components: c.components,
                    getComponent: d,
                    getComponents: d
                },
                render: function() {
                    i["default"](!1)
                }
            });
        t["default"] = p, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(1),
            a = (r(o), n(2)),
            u = r(a),
            i = u["default"].PropTypes.object,
            s = {
                propTypes: {
                    route: i.isRequired
                },
                childContextTypes: {
                    route: i.isRequired
                },
                getChildContext: function() {
                    return {
                        route: this.props.route
                    }
                },
                componentWillMount: function() {}
            };
        t["default"] = s, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function a(e) {
            return !e || !e.__v2_compatible__
        }
        t.__esModule = !0;
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = n(27),
            s = r(i),
            c = n(11),
            f = r(c),
            l = n(2),
            d = r(l),
            p = n(14),
            h = r(p),
            v = n(6),
            y = n(13),
            g = r(y),
            m = n(5),
            _ = n(20),
            P = n(1),
            O = (r(P),
                d["default"].PropTypes),
            R = O.func,
            x = O.object,
            w = d["default"].createClass({
                displayName: "Router",
                propTypes: {
                    history: x,
                    children: v.routes,
                    routes: v.routes,
                    render: R,
                    createElement: R,
                    onError: R,
                    onUpdate: R,
                    matchContext: x
                },
                getDefaultProps: function() {
                    return {
                        render: function(e) {
                            return d["default"].createElement(g["default"], e)
                        }
                    }
                },
                getInitialState: function() {
                    return {
                        location: null,
                        routes: null,
                        params: null,
                        components: null
                    }
                },
                handleError: function(e) {
                    if (!this.props.onError) throw e;
                    this.props.onError.call(this, e)
                },
                componentWillMount: function() {
                    var e = this,
                        t = this.props,
                        n = (t.parseQueryString, t.stringifyQuery, this.createRouterObjects()),
                        r = n.history,
                        o = n.transitionManager,
                        a = n.router;
                    this._unlisten = o.listen(function(t, n) {
                        t ? e.handleError(t) : e.setState(n, e.props.onUpdate)
                    }), this.history = r, this.router = a
                },
                createRouterObjects: function() {
                    var e = this.props.matchContext;
                    if (e) return e;
                    var t = this.props.history,
                        n = this.props,
                        r = n.routes,
                        o = n.children;
                    a(t) && (t = this.wrapDeprecatedHistory(t));
                    var u = h["default"](t, m.createRoutes(r || o)),
                        i = _.createRouterObject(t, u),
                        s = _.createRoutingHistory(t, u);
                    return {
                        history: s,
                        transitionManager: u,
                        router: i
                    }
                },
                wrapDeprecatedHistory: function(e) {
                    var t = this.props,
                        n = t.parseQueryString,
                        r = t.stringifyQuery,
                        o = void 0;
                    return o = e ? function() {
                        return e
                    } : s["default"], f["default"](o)({
                        parseQueryString: n,
                        stringifyQuery: r
                    })
                },
                componentWillReceiveProps: function(e) {},
                componentWillUnmount: function() {
                    this._unlisten && this._unlisten()
                },
                render: function b() {
                    var e = this.state,
                        t = e.location,
                        n = e.routes,
                        r = e.params,
                        a = e.components,
                        i = this.props,
                        s = i.createElement,
                        b = i.render,
                        c = o(i, ["createElement", "render"]);
                    return null == t ? null : (Object.keys(w.propTypes).forEach(function(e) {
                        return delete c[e]
                    }), b(u({}, c, {
                        history: this.history,
                        router: this.router,
                        location: t,
                        routes: n,
                        params: r,
                        components: a,
                        createElement: s
                    })))
                }
            });
        t["default"] = w, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(2),
            a = r(o),
            u = n(13),
            i = r(u),
            s = n(1),
            c = (r(s), a["default"].createClass({
                displayName: "RoutingContext",
                componentWillMount: function() {},
                render: function() {
                    return a["default"].createElement(i["default"], this.props)
                }
            }));
        t["default"] = c, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            return function(n, r, o) {
                e.apply(t, arguments), e.length < 3 && o()
            }
        }

        function a(e) {
            return e.reduce(function(e, t) {
                return t.onEnter && e.push(o(t.onEnter, t)), e
            }, [])
        }

        function u(e, t, n) {
            function r(e, t, n) {
                return t ? void(u = {
                    pathname: t,
                    query: n,
                    state: e
                }) : void(u = e)
            }
            var o = a(e);
            if (!o.length) return void n();
            var u = void 0;
            s.loopAsync(o.length, function(e, n, a) {
                o[e](t, r, function(e) {
                    e || u ? a(e, u) : n()
                })
            }, n)
        }

        function i(e) {
            for (var t = 0, n = e.length; n > t; ++t) e[t].onLeave && e[t].onLeave.call(e[t])
        }
        t.__esModule = !0, t.runEnterHooks = u, t.runLeaveHooks = i;
        var s = n(12),
            c = n(1);
        r(c)
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(53),
            a = r(o),
            u = n(22),
            i = r(u);
        t["default"] = i["default"](a["default"]), e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            if (!e.path) return !1;
            var r = a.getParamNames(e.path);
            return r.some(function(e) {
                return t.params[e] !== n.params[e]
            })
        }

        function o(e, t) {
            var n = e && e.routes,
                o = t.routes,
                a = void 0,
                u = void 0;
            return n ? (a = n.filter(function(n) {
                return -1 === o.indexOf(n) || r(n, e, t)
            }), a.reverse(), u = o.filter(function(e) {
                return -1 === n.indexOf(e) || -1 !== a.indexOf(e)
            })) : (a = [], u = o), {
                leaveRoutes: a,
                enterRoutes: u
            }
        }
        t.__esModule = !0;
        var a = n(8);
        t["default"] = o, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e, t, n) {
            t.component || t.components ? n(null, t.component || t.components) : t.getComponent ? t.getComponent(e, n) : t.getComponents ? t.getComponents(e, n) : n()
        }

        function o(e, t) {
            a.mapAsync(e.routes, function(t, n, o) {
                r(e.location, t, o)
            }, t)
        }
        t.__esModule = !0;
        var a = n(12);
        t["default"] = o, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            var n = {};
            if (!e.path) return n;
            var r = o.getParamNames(e.path);
            for (var a in t) t.hasOwnProperty(a) && -1 !== r.indexOf(a) && (n[a] = t[a]);
            return n
        }
        t.__esModule = !0;
        var o = n(8);
        t["default"] = r, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }
        t.__esModule = !0;
        var o = n(27),
            a = r(o),
            u = n(22),
            i = r(u);
        t["default"] = i["default"](a["default"]), e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e, t) {
            if (e == t) return !0;
            if (null == e || null == t) return !1;
            if (Array.isArray(e)) return Array.isArray(t) && e.length === t.length && e.every(function(e, n) {
                return r(e, t[n])
            });
            if ("object" == typeof e) {
                for (var n in e)
                    if (e.hasOwnProperty(n))
                        if (void 0 === e[n]) {
                            if (void 0 !== t[n]) return !1
                        } else {
                            if (!t.hasOwnProperty(n)) return !1;
                            if (!r(e[n], t[n])) return !1
                        }
                return !0
            }
            return String(e) === String(t)
        }

        function o(e, t, n) {
            return e.every(function(e, r) {
                return String(t[r]) === String(n[e])
            })
        }

        function a(e, t, n) {
            for (var r = e, a = [], u = [], i = 0, s = t.length; s > i; ++i) {
                var f = t[i],
                    l = f.path || "";
                if ("/" === l.charAt(0) && (r = e, a = [], u = []), null !== r) {
                    var d = c.matchPattern(l, r);
                    r = d.remainingPathname, a = [].concat(a, d.paramNames), u = [].concat(u, d.paramValues)
                }
                if ("" === r && f.path && o(a, u, n)) return i
            }
            return null
        }

        function u(e, t, n, r) {
            var o = a(e, t, n);
            return null === o ? !1 : r ? t.slice(o + 1).every(function(e) {
                return !e.path
            }) : !0
        }

        function i(e, t) {
            return null == t ? null == e : null == e ? !0 : r(e, t)
        }

        function s(e, t, n, r, o) {
            var a = e.pathname,
                s = e.query;
            return null == n ? !1 : u(a, r, o, t) ? i(s, n.query) : !1
        }
        t.__esModule = !0, t["default"] = s;
        var c = n(8);
        e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function a(e, t) {
            var n = e.history,
                r = e.routes,
                a = e.location,
                i = o(e, ["history", "routes", "location"]);
            n || a ? void 0 : s["default"](!1), n = n ? n : f["default"](i);
            var c = d["default"](n, p.createRoutes(r)),
                l = void 0;
            a ? a = n.createLocation(a) : l = n.listen(function(e) {
                a = e
            });
            var v = h.createRouterObject(n, c);
            n = h.createRoutingHistory(n, c), c.match(a, function(e, r, o) {
                t(e, r, o && u({}, o, {
                    history: n,
                    router: v,
                    matchContext: {
                        history: n,
                        transitionManager: c,
                        router: v
                    }
                })), l && l()
            })
        }
        t.__esModule = !0;
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = n(3),
            s = r(i),
            c = n(21),
            f = r(c),
            l = n(14),
            d = r(l),
            p = n(5),
            h = n(20);
        t["default"] = a, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t, n) {
            if (e.childRoutes) return [null, e.childRoutes];
            if (!e.getChildRoutes) return [];
            var r = !0,
                o = void 0;
            return e.getChildRoutes(t, function(e, t) {
                return t = !e && p.createRoutes(t), r ? void(o = [e, t]) : void n(e, t)
            }), r = !1, o
        }

        function a(e, t, n) {
            e.indexRoute ? n(null, e.indexRoute) : e.getIndexRoute ? e.getIndexRoute(t, function(e, t) {
                n(e, !e && p.createRoutes(t)[0])
            }) : e.childRoutes ? ! function() {
                var r = e.childRoutes.filter(function(e) {
                    return !e.hasOwnProperty("path")
                });
                l.loopAsync(r.length, function(e, n, o) {
                    a(r[e], t, function(t, a) {
                        if (t || a) {
                            var u = [r[e]].concat(Array.isArray(a) ? a : [a]);
                            o(t, u)
                        } else n()
                    })
                }, function(e, t) {
                    n(null, t)
                })
            }() : n()
        }

        function u(e, t, n) {
            return t.reduce(function(e, t, r) {
                var o = n && n[r];
                return Array.isArray(e[t]) ? e[t].push(o) : t in e ? e[t] = [e[t], o] : e[t] = o, e
            }, e)
        }

        function i(e, t) {
            return u({}, e, t)
        }

        function s(e, t, n, r, u, s) {
            var f = e.path || "";
            if ("/" === f.charAt(0) && (n = t.pathname, r = [], u = []), null !== n) {
                var l = d.matchPattern(f, n);
                if (n = l.remainingPathname, r = [].concat(r, l.paramNames), u = [].concat(u, l.paramValues), "" === n && e.path) {
                    var p = function() {
                        var n = {
                            routes: [e],
                            params: i(r, u)
                        };
                        return a(e, t, function(e, t) {
                            if (e) s(e);
                            else {
                                if (Array.isArray(t)) {
                                    var r;
                                    (r = n.routes).push.apply(r, t)
                                } else t && n.routes.push(t);
                                s(null, n)
                            }
                        }), {
                            v: void 0
                        }
                    }();
                    if ("object" == typeof p) return p.v
                }
            }
            if (null != n || e.childRoutes) {
                var h = function(o, a) {
                        o ? s(o) : a ? c(a, t, function(t, n) {
                            t ? s(t) : n ? (n.routes.unshift(e), s(null, n)) : s()
                        }, n, r, u) : s()
                    },
                    v = o(e, t, h);
                v && h.apply(void 0, v)
            } else s()
        }

        function c(e, t, n) {
            var r = arguments.length <= 3 || void 0 === arguments[3] ? t.pathname : arguments[3],
                o = arguments.length <= 4 || void 0 === arguments[4] ? [] : arguments[4],
                a = arguments.length <= 5 || void 0 === arguments[5] ? [] : arguments[5];
            return function() {
                l.loopAsync(e.length, function(n, u, i) {
                    s(e[n], t, r, o, a, function(e, t) {
                        e || t ? i(e, t) : u()
                    })
                }, n)
            }()
        }
        t.__esModule = !0;
        var f = n(1),
            l = (r(f), n(12)),
            d = n(8),
            p = n(5);
        t["default"] = c, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e, t) {
            var n = {};
            for (var r in e) t.indexOf(r) >= 0 || Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]);
            return n
        }

        function a(e) {
            return function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
                    n = t.routes,
                    r = o(t, ["routes"]),
                    a = s["default"](e)(r),
                    i = f["default"](a, n);
                return u({}, a, i)
            }
        }
        t.__esModule = !0;
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = n(11),
            s = r(i),
            c = n(14),
            f = r(c),
            l = n(1);
        r(l);
        t["default"] = a, e.exports = t["default"]
    }, function(e, t, n) {
        function r(e) {
            return null === e || void 0 === e
        }

        function o(e) {
            return e && "object" == typeof e && "number" == typeof e.length ? "function" != typeof e.copy || "function" != typeof e.slice ? !1 : e.length > 0 && "number" != typeof e[0] ? !1 : !0 : !1
        }

        function a(e, t, n) {
            var a, f;
            if (r(e) || r(t)) return !1;
            if (e.prototype !== t.prototype) return !1;
            if (s(e)) return s(t) ? (e = u.call(e), t = u.call(t), c(e, t, n)) : !1;
            if (o(e)) {
                if (!o(t)) return !1;
                if (e.length !== t.length) return !1;
                for (a = 0; a < e.length; a++)
                    if (e[a] !== t[a]) return !1;
                return !0
            }
            try {
                var l = i(e),
                    d = i(t)
            } catch (p) {
                return !1
            }
            if (l.length != d.length) return !1;
            for (l.sort(), d.sort(), a = l.length - 1; a >= 0; a--)
                if (l[a] != d[a]) return !1;
            for (a = l.length - 1; a >= 0; a--)
                if (f = l[a], !c(e[f], t[f], n)) return !1;
            return typeof e == typeof t
        }
        var u = Array.prototype.slice,
            i = n(51),
            s = n(50),
            c = e.exports = function(e, t, n) {
                return n || (n = {}), e === t ? !0 : e instanceof Date && t instanceof Date ? e.getTime() === t.getTime() : !e || !t || "object" != typeof e && "object" != typeof t ? n.strict ? e === t : e == t : a(e, t, n)
            }
    }, function(e, t) {
        function n(e) {
            return "[object Arguments]" == Object.prototype.toString.call(e)
        }

        function r(e) {
            return e && "object" == typeof e && "number" == typeof e.length && Object.prototype.hasOwnProperty.call(e, "callee") && !Object.prototype.propertyIsEnumerable.call(e, "callee") || !1
        }
        var o = "[object Arguments]" == function() {
            return Object.prototype.toString.call(arguments)
        }();
        t = e.exports = o ? n : r, t.supported = n, t.unsupported = r
    }, function(e, t) {
        function n(e) {
            var t = [];
            for (var n in e) t.push(n);
            return t
        }
        t = e.exports = "function" == typeof Object.keys ? Object.keys : n, t.shim = n
    }, function(e, t) {
        "use strict";

        function n(e, t, n) {
            function r() {
                u = !0, n.apply(this, arguments)
            }

            function o() {
                u || (e > a ? t.call(this, a++, o, r) : r.apply(this, arguments))
            }
            var a = 0,
                u = !1;
            o()
        }
        t.__esModule = !0, t.loopAsync = n
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o() {
            function e(e) {
                e = e || window.history.state || {};
                var t = l.getWindowPath(),
                    n = e,
                    r = n.key,
                    o = void 0;
                r ? o = d.readState(r) : (o = null, r = _.createKey(), g && window.history.replaceState(a({}, e, {
                    key: r
                }), null, t));
                var u = c.parsePath(t);
                return _.createLocation(a({}, u, {
                    state: o
                }), void 0, r)
            }

            function t(t) {
                function n(t) {
                    void 0 !== t.state && r(e(t.state))
                }
                var r = t.transitionTo;
                return l.addEventListener(window, "popstate", n),
                    function() {
                        l.removeEventListener(window, "popstate", n)
                    }
            }

            function n(e) {
                var t = e.basename,
                    n = e.pathname,
                    r = e.search,
                    o = e.hash,
                    a = e.state,
                    u = e.action,
                    i = e.key;
                if (u !== s.POP) {
                    d.saveState(i, a);
                    var c = (t || "") + n + r + o,
                        f = {
                            key: i
                        };
                    if (u === s.PUSH) {
                        if (m) return window.location.href = c, !1;
                        window.history.pushState(f, null, c)
                    } else {
                        if (m) return window.location.replace(c), !1;
                        window.history.replaceState(f, null, c)
                    }
                }
            }

            function r(e) {
                1 === ++P && (O = t(_));
                var n = _.listenBefore(e);
                return function() {
                    n(), 0 === --P && O()
                }
            }

            function o(e) {
                1 === ++P && (O = t(_));
                var n = _.listen(e);
                return function() {
                    n(), 0 === --P && O()
                }
            }

            function u(e) {
                1 === ++P && (O = t(_)), _.registerTransitionHook(e)
            }

            function p(e) {
                _.unregisterTransitionHook(e), 0 === --P && O()
            }
            var v = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            f.canUseDOM ? void 0 : i["default"](!1);
            var y = v.forceRefresh,
                g = l.supportsHistory(),
                m = !g || y,
                _ = h["default"](a({}, v, {
                    getCurrentLocation: e,
                    finishTransition: n,
                    saveState: d.saveState
                })),
                P = 0,
                O = void 0;
            return a({}, _, {
                listenBefore: r,
                listen: o,
                registerTransitionHook: u,
                unregisterTransitionHook: p
            })
        }
        t.__esModule = !0;
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = n(3),
            i = r(u),
            s = n(9),
            c = n(7),
            f = n(10),
            l = n(15),
            d = n(25),
            p = n(26),
            h = r(p);
        t["default"] = o, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o() {
            var e = arguments.length <= 0 || void 0 === arguments[0] ? "/" : arguments[0],
                t = arguments.length <= 1 || void 0 === arguments[1] ? i.POP : arguments[1],
                n = arguments.length <= 2 || void 0 === arguments[2] ? null : arguments[2],
                r = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3];
            "string" == typeof e && (e = s.parsePath(e)), "object" == typeof t && (e = a({}, e, {
                state: t
            }), t = n || i.POP, n = r);
            var o = e.pathname || "/",
                u = e.search || "",
                c = e.hash || "",
                f = e.state || null;
            return {
                pathname: o,
                search: u,
                hash: c,
                state: f,
                action: t,
                key: n
            }
        }
        t.__esModule = !0;
        var a = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            u = n(4),
            i = (r(u), n(9)),
            s = n(7);
        t["default"] = o, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";

        function r(e) {
            return e && e.__esModule ? e : {
                "default": e
            }
        }

        function o(e) {
            return e.filter(function(e) {
                return e.state
            }).reduce(function(e, t) {
                return e[t.key] = t.state, e
            }, {})
        }

        function a() {
            function e(e, t) {
                g[e] = t
            }

            function t(e) {
                return g[e]
            }

            function n() {
                var e = v[y],
                    n = e.key,
                    r = e.basename,
                    o = e.pathname,
                    a = e.search,
                    i = (r || "") + o + (a || ""),
                    s = void 0;
                n ? s = t(n) : (s = null, n = d.createKey(), e.key = n);
                var c = f.parsePath(i);
                return d.createLocation(u({}, c, {
                    state: s
                }), void 0, n)
            }

            function r(e) {
                var t = y + e;
                return t >= 0 && t < v.length
            }

            function a(e) {
                if (e) {
                    if (!r(e)) return;
                    y += e;
                    var t = n();
                    d.transitionTo(u({}, t, {
                        action: l.POP
                    }))
                }
            }

            function i(t) {
                switch (t.action) {
                    case l.PUSH:
                        y += 1, y < v.length && v.splice(y), v.push(t), e(t.key, t.state);
                        break;
                    case l.REPLACE:
                        v[y] = t, e(t.key, t.state)
                }
            }
            var s = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
            Array.isArray(s) ? s = {
                entries: s
            } : "string" == typeof s && (s = {
                entries: [s]
            });
            var d = p["default"](u({}, s, {
                    getCurrentLocation: n,
                    finishTransition: i,
                    saveState: e,
                    go: a
                })),
                h = s,
                v = h.entries,
                y = h.current;
            "string" == typeof v ? v = [v] : Array.isArray(v) || (v = ["/"]), v = v.map(function(e) {
                var t = d.createKey();
                return "string" == typeof e ? {
                    pathname: e,
                    key: t
                } : "object" == typeof e && e ? u({}, e, {
                    key: t
                }) : void c["default"](!1)
            }), null == y ? y = v.length - 1 : y >= 0 && y < v.length ? void 0 : c["default"](!1);
            var g = o(v);
            return d
        }
        t.__esModule = !0;
        var u = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            },
            i = n(4),
            s = (r(i), n(3)),
            c = r(s),
            f = n(7),
            l = n(9),
            d = n(28),
            p = r(d);
        t["default"] = a, e.exports = t["default"]
    }, function(e, t, n) {
        "use strict";
        var r = n(57);
        t.extract = function(e) {
            return e.split("?")[1] || ""
        }, t.parse = function(e) {
            return "string" != typeof e ? {} : (e = e.trim().replace(/^(\?|#|&)/, ""), e ? e.split("&").reduce(function(e, t) {
                var n = t.replace(/\+/g, " ").split("="),
                    r = n.shift(),
                    o = n.length > 0 ? n.join("=") : void 0;
                return r = decodeURIComponent(r), o = void 0 === o ? null : decodeURIComponent(o), e.hasOwnProperty(r) ? Array.isArray(e[r]) ? e[r].push(o) : e[r] = [e[r], o] : e[r] = o, e
            }, {}) : {})
        }, t.stringify = function(e) {
            return e ? Object.keys(e).sort().map(function(t) {
                var n = e[t];
                return void 0 === n ? "" : null === n ? t : Array.isArray(n) ? n.sort().map(function(e) {
                    return r(t) + "=" + r(e)
                }).join("&") : r(t) + "=" + r(n)
            }).filter(function(e) {
                return e.length > 0
            }).join("&") : ""
        }
    }, function(e, t) {
        "use strict";
        e.exports = function(e) {
            return encodeURIComponent(e).replace(/[!'()*]/g, function(e) {
                return "%" + e.charCodeAt(0).toString(16).toUpperCase()
            })
        }
    }])
});