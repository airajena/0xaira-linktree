var plausibleScript = document.createElement("script");
    plausibleScript.src = "plausible.js";
    plausibleScript.setAttribute("asnyc", "");
    plausibleScript.setAttribute("defer", "");
    plausibleScript.setAttribute("data-domain", "bio.link");
    document.head.appendChild(plausibleScript);

    (() => {
        var e,
          t = {
            757: (e, t, r) => {
              e.exports = r(666);
            },
            80: (e, t, r) => {
              "use strict";
              var n = r(757),
                o = r.n(n);
              function a(e, t, r, n, o, a, i) {
                try {
                  var s = e[a](i),
                    c = s.value;
                } catch (e) {
                  return void r(e);
                }
                s.done ? t(c) : Promise.resolve(c).then(n, o);
              }
              function i(e) {
                var t = e.target.closest(".page-item-wrap"),
                  r = t.querySelector(".show-embed-item"),
                  n = t.querySelector(".embed-iframe"),
                  o = parseInt(r.getAttribute("data-height")),
                  a = 0;
                r.getAttribute("data-type") && (a = 20),
                  t.classList.toggle("show-embed"),
                  (n.src = n.getAttribute("data-src")),
                  (n.style.cssText = "height: ".concat(
                    0 == n.offsetHeight ? o - a : 0,
                    "px"
                  )),
                  (r.style.cssText = "height: ".concat(
                    0 == r.offsetHeight ? o + 16 : "0",
                    "px"
                  ));
              }
              function s(e) {
                for (
                  var t = e + "=", r = document.cookie.split(";"), n = 0;
                  n < r.length;
                  n++
                ) {
                  for (var o = r[n]; " " === o.charAt(0); )
                    o = o.substring(1, o.length);
                  if (0 === o.indexOf(t)) return o.substring(t.length, o.length);
                }
                return null;
              }
              function c(e) {
                if (
                  s(e) &&
                  ((t = e),
                  (r = location.hostname.split(".").reverse()),
                  (n = r[1] + "." + r[0]),
                  (document.cookie =
                    t +
                    "=; domain=" +
                    n +
                    "; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"),
                  !s(e))
                ) {
                  try {
                    location.reload(!0);
                  } catch (e) {}
                  location.reload();
                }
                var t, r, n;
              }
              var u = document.getElementById("app-url").value,
                l = document.getElementById("is-featured").value,
                d = window.location.search,
                h = new URLSearchParams(d).get("preview"),
                f = !1;
              function m() {
                var e = document.getElementById("subscribe-btn"),
                  t = document.getElementById("subsc-email").value,
                  r = e.getAttribute("data-pageID"),
                  n = e.getAttribute("data-campId");
                if ("" != t) {
                  document.getElementById("btn-text").classList.toggle("op-0"),
                    document
                      .getElementById("btn-loader")
                      .classList.toggle("op-0"),
                    (document.getElementById("subsc-email-error").innerText = ""),
                    document
                      .getElementById("subscribers-email-wrap")
                      .classList.remove("error-wrap");
                  var o = new FormData();
                  o.append("email", t);
                  var a = decodeURIComponent(s("XSRF-TOKEN")),
                    i = new XMLHttpRequest();
                  (i.withCredentials = !0),
                    (i.onreadystatechange = function () {
                      if (4 === i.readyState && 200 === i.status) {
                        document
                          .getElementById("btn-text")
                          .classList.toggle("op-0"),
                          document
                            .getElementById("btn-loader")
                            .classList.toggle("op-0");
                        var e = document.getElementById("subsc-email").value;
                        (document.getElementById("thank_you_msg").innerHTML =
                          "You’re subscribed as " + e),
                          (document.getElementById("subsc-email").value = "");
                        for (
                          var t =
                              document.getElementsByClassName(
                                "hide-after-success"
                              ),
                            r = 0;
                          r < t.length;
                          r++
                        )
                          t[r].style.display = "none";
                        (f = !0),
                          document
                            .getElementsByClassName("show-after-success")[0]
                            .classList.remove("hidden"),
                          setTimeout(function () {
                            document
                              .getElementsByClassName("thank-you-title")[0]
                              .classList.toggle("hidden"),
                              (document.getElementById(
                                "featured-subscribers"
                              ).style.cursor = "pointer"),
                              document
                                .getElementById("featured-subscribers")
                                .classList.toggle("hide-subscribers");
                          }, 3e3);
                      } else
                        "" != i.responseText &&
                          JSON.parse(i.responseText).errors &&
                          p(JSON.parse(i.responseText).errors.email[0]),
                          (f = !1);
                    }),
                    i.open(
                      "post",
                      ""
                        .concat(u, "/api/pages/")
                        .concat(r, "/campaign/")
                        .concat(n, "/subscriber")
                    ),
                    i.setRequestHeader("X-XSRF-TOKEN", a),
                    i.send(o);
                } else p("Please enter a valid email.");
              }
              function g() {
                document.getElementById("subscribe-btn").addEventListener(
                  "click",
                  (function () {
                    var e,
                      t =
                        ((e = o().mark(function e(t) {
                          return o().wrap(function (e) {
                            for (;;)
                              switch ((e.prev = e.next)) {
                                case 0:
                                  m();
                                case 1:
                                case "end":
                                  return e.stop();
                              }
                          }, e);
                        })),
                        function () {
                          var t = this,
                            r = arguments;
                          return new Promise(function (n, o) {
                            var i = e.apply(t, r);
                            function s(e) {
                              a(i, n, o, s, c, "next", e);
                            }
                            function c(e) {
                              a(i, n, o, s, c, "throw", e);
                            }
                            s(void 0);
                          });
                        });
                    return function (e) {
                      return t.apply(this, arguments);
                    };
                  })()
                );
              }
              function p(e) {
                document
                  .getElementById("subscribers-email-wrap")
                  .classList.add("error-wrap"),
                  (document.getElementById("subsc-email-error").innerText = e),
                  document.getElementById("btn-text").classList.remove("op-0"),
                  document.getElementById("btn-loader").classList.add("op-0");
              }
              function y() {
                document
                  .getElementById("subscribers-email-wrap")
                  .classList.remove("error-wrap"),
                  (document.getElementById("subsc-email-error").innerText = "");
              }
              window.onload = function () {
                !(function () {
                  for (
                    var e = document.getElementsByTagName("img"), t = 0;
                    t < e.length;
                    t++
                  ) {
                    var r = e[t];
                    r.getAttribute("data-src") &&
                      r.setAttribute("src", r.getAttribute("data-src"));
                  }
                })(),
                  (function () {
                    for (
                      var e = document.getElementsByTagName("a"), t = 0;
                      t < e.length;
                      t++
                    )
                      e[t].addEventListener("click", function (e) {
                        var t = e.currentTarget,
                          r = [
                            "trackEvent",
                            t.getAttribute("data-type"),
                            "Click",
                            t.getAttribute("data-id"),
                            1,
                          ];
                        try {
                          _paq.push(r);
                        } catch (e) {}
                      });
                  })(),
                  (function () {
                    for (
                      var e = document.getElementsByClassName("show-embed"),
                        t = 0;
                      t < e.length;
                      t++
                    )
                      e[t].addEventListener("click", i);
                  })(),
                  (function () {
                    try {
                      new URLSearchParams(window.location.search).get("preview")
                        ? c("page_has_updated_preview")
                        : c("page_has_updated");
                    } catch (e) {}
                  })();
                var e,
                  t = document.getElementById("page-type").value;
                null == h &&
                  "true" == l &&
                  ("creator-page" == t &&
                    (document
                      .getElementById("toggle-subscription-btn")
                      .addEventListener("click", function (e) {
                        document
                          .getElementById("featured-subscribers")
                          .classList.toggle("hide-subscribers"),
                          f &&
                            document
                              .getElementsByClassName("thank-you-title")[0]
                              .classList.toggle("hidden"),
                          (document.getElementById(
                            "featured-subscribers"
                          ).style.cursor = "default");
                      }),
                    "true" === l &&
                      document.querySelector("#featured-subscribers") &&
                      document
                        .querySelector("#featured-subscribers")
                        .addEventListener("click", function (e) {
                          document
                            .getElementById("featured-subscribers")
                            .classList.contains("hide-subscribers") &&
                          "toggle-subscription-btn" !== e.target.id &&
                          "sub-toggle" !== e.target.id
                            ? (document
                                .getElementById("featured-subscribers")
                                .classList.toggle("hide-subscribers"),
                              f &&
                                document
                                  .getElementsByClassName("thank-you-title")[0]
                                  .classList.toggle("hidden"),
                              (document.getElementById(
                                "featured-subscribers"
                              ).style.cursor = "default"))
                            : document
                                .getElementById("featured-subscribers")
                                .classList.contains("hide-subscribers") &&
                              (document.getElementById(
                                "featured-subscribers"
                              ).style.cursor = "pointer");
                        })),
                  document
                    .getElementById("subsc-email")
                    .addEventListener("keyup", function (e) {
                      "Enter" === e.key && m();
                    }),
                  g(),
                  (e = new XMLHttpRequest()).open(
                    "GET",
                    "".concat(u, "/sanctum/csrf-cookie"),
                    !0
                  ),
                  (e.withCredentials = !0),
                  e.send(null),
                  document
                    .getElementById("subsc-email")
                    .addEventListener("input", y));
              };
            },
            662: () => {},
            328: () => {},
            666: (e) => {
              var t = (function (e) {
                "use strict";
                var t,
                  r = Object.prototype,
                  n = r.hasOwnProperty,
                  o = "function" == typeof Symbol ? Symbol : {},
                  a = o.iterator || "@@iterator",
                  i = o.asyncIterator || "@@asyncIterator",
                  s = o.toStringTag || "@@toStringTag";
                function c(e, t, r) {
                  return (
                    Object.defineProperty(e, t, {
                      value: r,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    }),
                    e[t]
                  );
                }
                try {
                  c({}, "");
                } catch (e) {
                  c = function (e, t, r) {
                    return (e[t] = r);
                  };
                }
                function u(e, t, r, n) {
                  var o = t && t.prototype instanceof p ? t : p,
                    a = Object.create(o.prototype),
                    i = new _(n || []);
                  return (
                    (a._invoke = (function (e, t, r) {
                      var n = d;
                      return function (o, a) {
                        if (n === f)
                          throw new Error("Generator is already running");
                        if (n === m) {
                          if ("throw" === o) throw a;
                          return N();
                        }
                        for (r.method = o, r.arg = a; ; ) {
                          var i = r.delegate;
                          if (i) {
                            var s = I(i, r);
                            if (s) {
                              if (s === g) continue;
                              return s;
                            }
                          }
                          if ("next" === r.method) r.sent = r._sent = r.arg;
                          else if ("throw" === r.method) {
                            if (n === d) throw ((n = m), r.arg);
                            r.dispatchException(r.arg);
                          } else
                            "return" === r.method && r.abrupt("return", r.arg);
                          n = f;
                          var c = l(e, t, r);
                          if ("normal" === c.type) {
                            if (((n = r.done ? m : h), c.arg === g)) continue;
                            return { value: c.arg, done: r.done };
                          }
                          "throw" === c.type &&
                            ((n = m), (r.method = "throw"), (r.arg = c.arg));
                        }
                      };
                    })(e, r, i)),
                    a
                  );
                }
                function l(e, t, r) {
                  try {
                    return { type: "normal", arg: e.call(t, r) };
                  } catch (e) {
                    return { type: "throw", arg: e };
                  }
                }
                e.wrap = u;
                var d = "suspendedStart",
                  h = "suspendedYield",
                  f = "executing",
                  m = "completed",
                  g = {};
                function p() {}
                function y() {}
                function v() {}
                var b = {};
                b[a] = function () {
                  return this;
                };
                var w = Object.getPrototypeOf,
                  E = w && w(w(T([])));
                E && E !== r && n.call(E, a) && (b = E);
                var L = (v.prototype = p.prototype = Object.create(b));
                function x(e) {
                  ["next", "throw", "return"].forEach(function (t) {
                    c(e, t, function (e) {
                      return this._invoke(t, e);
                    });
                  });
                }
                function B(e, t) {
                  function r(o, a, i, s) {
                    var c = l(e[o], e, a);
                    if ("throw" !== c.type) {
                      var u = c.arg,
                        d = u.value;
                      return d && "object" == typeof d && n.call(d, "__await")
                        ? t.resolve(d.__await).then(
                            function (e) {
                              r("next", e, i, s);
                            },
                            function (e) {
                              r("throw", e, i, s);
                            }
                          )
                        : t.resolve(d).then(
                            function (e) {
                              (u.value = e), i(u);
                            },
                            function (e) {
                              return r("throw", e, i, s);
                            }
                          );
                    }
                    s(c.arg);
                  }
                  var o;
                  this._invoke = function (e, n) {
                    function a() {
                      return new t(function (t, o) {
                        r(e, n, t, o);
                      });
                    }
                    return (o = o ? o.then(a, a) : a());
                  };
                }
                function I(e, r) {
                  var n = e.iterator[r.method];
                  if (n === t) {
                    if (((r.delegate = null), "throw" === r.method)) {
                      if (
                        e.iterator.return &&
                        ((r.method = "return"),
                        (r.arg = t),
                        I(e, r),
                        "throw" === r.method)
                      )
                        return g;
                      (r.method = "throw"),
                        (r.arg = new TypeError(
                          "The iterator does not provide a 'throw' method"
                        ));
                    }
                    return g;
                  }
                  var o = l(n, e.iterator, r.arg);
                  if ("throw" === o.type)
                    return (
                      (r.method = "throw"),
                      (r.arg = o.arg),
                      (r.delegate = null),
                      g
                    );
                  var a = o.arg;
                  return a
                    ? a.done
                      ? ((r[e.resultName] = a.value),
                        (r.next = e.nextLoc),
                        "return" !== r.method &&
                          ((r.method = "next"), (r.arg = t)),
                        (r.delegate = null),
                        g)
                      : a
                    : ((r.method = "throw"),
                      (r.arg = new TypeError("iterator result is not an object")),
                      (r.delegate = null),
                      g);
                }
                function k(e) {
                  var t = { tryLoc: e[0] };
                  1 in e && (t.catchLoc = e[1]),
                    2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
                    this.tryEntries.push(t);
                }
                function O(e) {
                  var t = e.completion || {};
                  (t.type = "normal"), delete t.arg, (e.completion = t);
                }
                function _(e) {
                  (this.tryEntries = [{ tryLoc: "root" }]),
                    e.forEach(k, this),
                    this.reset(!0);
                }
                function T(e) {
                  if (e) {
                    var r = e[a];
                    if (r) return r.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                      var o = -1,
                        i = function r() {
                          for (; ++o < e.length; )
                            if (n.call(e, o))
                              return (r.value = e[o]), (r.done = !1), r;
                          return (r.value = t), (r.done = !0), r;
                        };
                      return (i.next = i);
                    }
                  }
                  return { next: N };
                }
                function N() {
                  return { value: t, done: !0 };
                }
                return (
                  (y.prototype = L.constructor = v),
                  (v.constructor = y),
                  (y.displayName = c(v, s, "GeneratorFunction")),
                  (e.isGeneratorFunction = function (e) {
                    var t = "function" == typeof e && e.constructor;
                    return (
                      !!t &&
                      (t === y ||
                        "GeneratorFunction" === (t.displayName || t.name))
                    );
                  }),
                  (e.mark = function (e) {
                    return (
                      Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, v)
                        : ((e.__proto__ = v), c(e, s, "GeneratorFunction")),
                      (e.prototype = Object.create(L)),
                      e
                    );
                  }),
                  (e.awrap = function (e) {
                    return { __await: e };
                  }),
                  x(B.prototype),
                  (B.prototype[i] = function () {
                    return this;
                  }),
                  (e.AsyncIterator = B),
                  (e.async = function (t, r, n, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new B(u(t, r, n, o), a);
                    return e.isGeneratorFunction(r)
                      ? i
                      : i.next().then(function (e) {
                          return e.done ? e.value : i.next();
                        });
                  }),
                  x(L),
                  c(L, s, "Generator"),
                  (L[a] = function () {
                    return this;
                  }),
                  (L.toString = function () {
                    return "[object Generator]";
                  }),
                  (e.keys = function (e) {
                    var t = [];
                    for (var r in e) t.push(r);
                    return (
                      t.reverse(),
                      function r() {
                        for (; t.length; ) {
                          var n = t.pop();
                          if (n in e) return (r.value = n), (r.done = !1), r;
                        }
                        return (r.done = !0), r;
                      }
                    );
                  }),
                  (e.values = T),
                  (_.prototype = {
                    constructor: _,
                    reset: function (e) {
                      if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = t),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = "next"),
                        (this.arg = t),
                        this.tryEntries.forEach(O),
                        !e)
                      )
                        for (var r in this)
                          "t" === r.charAt(0) &&
                            n.call(this, r) &&
                            !isNaN(+r.slice(1)) &&
                            (this[r] = t);
                    },
                    stop: function () {
                      this.done = !0;
                      var e = this.tryEntries[0].completion;
                      if ("throw" === e.type) throw e.arg;
                      return this.rval;
                    },
                    dispatchException: function (e) {
                      if (this.done) throw e;
                      var r = this;
                      function o(n, o) {
                        return (
                          (s.type = "throw"),
                          (s.arg = e),
                          (r.next = n),
                          o && ((r.method = "next"), (r.arg = t)),
                          !!o
                        );
                      }
                      for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var i = this.tryEntries[a],
                          s = i.completion;
                        if ("root" === i.tryLoc) return o("end");
                        if (i.tryLoc <= this.prev) {
                          var c = n.call(i, "catchLoc"),
                            u = n.call(i, "finallyLoc");
                          if (c && u) {
                            if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                            if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                          } else if (c) {
                            if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                          } else {
                            if (!u)
                              throw new Error(
                                "try statement without catch or finally"
                              );
                            if (this.prev < i.finallyLoc) return o(i.finallyLoc);
                          }
                        }
                      }
                    },
                    abrupt: function (e, t) {
                      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var o = this.tryEntries[r];
                        if (
                          o.tryLoc <= this.prev &&
                          n.call(o, "finallyLoc") &&
                          this.prev < o.finallyLoc
                        ) {
                          var a = o;
                          break;
                        }
                      }
                      a &&
                        ("break" === e || "continue" === e) &&
                        a.tryLoc <= t &&
                        t <= a.finallyLoc &&
                        (a = null);
                      var i = a ? a.completion : {};
                      return (
                        (i.type = e),
                        (i.arg = t),
                        a
                          ? ((this.method = "next"),
                            (this.next = a.finallyLoc),
                            g)
                          : this.complete(i)
                      );
                    },
                    complete: function (e, t) {
                      if ("throw" === e.type) throw e.arg;
                      return (
                        "break" === e.type || "continue" === e.type
                          ? (this.next = e.arg)
                          : "return" === e.type
                          ? ((this.rval = this.arg = e.arg),
                            (this.method = "return"),
                            (this.next = "end"))
                          : "normal" === e.type && t && (this.next = t),
                        g
                      );
                    },
                    finish: function (e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.finallyLoc === e)
                          return this.complete(r.completion, r.afterLoc), O(r), g;
                      }
                    },
                    catch: function (e) {
                      for (var t = this.tryEntries.length - 1; t >= 0; --t) {
                        var r = this.tryEntries[t];
                        if (r.tryLoc === e) {
                          var n = r.completion;
                          if ("throw" === n.type) {
                            var o = n.arg;
                            O(r);
                          }
                          return o;
                        }
                      }
                      throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (e, r, n) {
                      return (
                        (this.delegate = {
                          iterator: T(e),
                          resultName: r,
                          nextLoc: n,
                        }),
                        "next" === this.method && (this.arg = t),
                        g
                      );
                    },
                  }),
                  e
                );
              })(e.exports);
              try {
                regeneratorRuntime = t;
              } catch (e) {
                Function("r", "regeneratorRuntime = r")(t);
              }
            },
          },
          r = {};
        function n(e) {
          var o = r[e];
          if (void 0 !== o) return o.exports;
          var a = (r[e] = { exports: {} });
          return t[e](a, a.exports, n), a.exports;
        }
        (n.m = t),
          (e = []),
          (n.O = (t, r, o, a) => {
            if (!r) {
              var i = 1 / 0;
              for (u = 0; u < e.length; u++) {
                for (var [r, o, a] = e[u], s = !0, c = 0; c < r.length; c++)
                  (!1 & a || i >= a) &&
                  Object.keys(n.O).every((e) => n.O[e](r[c]))
                    ? r.splice(c--, 1)
                    : ((s = !1), a < i && (i = a));
                s && (e.splice(u--, 1), (t = o()));
              }
              return t;
            }
            a = a || 0;
            for (var u = e.length; u > 0 && e[u - 1][2] > a; u--) e[u] = e[u - 1];
            e[u] = [r, o, a];
          }),
          (n.n = (e) => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return n.d(t, { a: t }), t;
          }),
          (n.d = (e, t) => {
            for (var r in t)
              n.o(t, r) &&
                !n.o(e, r) &&
                Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
          }),
          (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
          (() => {
            var e = { 773: 0, 432: 0, 170: 0 };
            n.O.j = (t) => 0 === e[t];
            var t = (t, r) => {
                var o,
                  a,
                  [i, s, c] = r,
                  u = 0;
                for (o in s) n.o(s, o) && (n.m[o] = s[o]);
                for (c && c(n), t && t(r); u < i.length; u++)
                  (a = i[u]), n.o(e, a) && e[a] && e[a][0](), (e[i[u]] = 0);
                n.O();
              },
              r = (self.webpackChunk = self.webpackChunk || []);
            r.forEach(t.bind(null, 0)), (r.push = t.bind(null, r.push.bind(r)));
          })(),
          n.O(void 0, [432, 170], () => n(80)),
          n.O(void 0, [432, 170], () => n(662));
        var o = n.O(void 0, [432, 170], () => n(328));
        o = n.O(o);
      })();