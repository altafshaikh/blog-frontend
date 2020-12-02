parcelRequire = (function (e, r, t, n) {
  var i,
    o = "function" == typeof parcelRequire && parcelRequire,
    u = "function" == typeof require && require;
  function f(t, n) {
    if (!r[t]) {
      if (!e[t]) {
        var i = "function" == typeof parcelRequire && parcelRequire;
        if (!n && i) return i(t, !0);
        if (o) return o(t, !0);
        if (u && "string" == typeof t) return u(t);
        var c = new Error("Cannot find module '" + t + "'");
        throw ((c.code = "MODULE_NOT_FOUND"), c);
      }
      (p.resolve = function (r) {
        return e[t][1][r] || r;
      }),
        (p.cache = {});
      var l = (r[t] = new f.Module(t));
      e[t][0].call(l.exports, p, l, l.exports, this);
    }
    return r[t].exports;
    function p(e) {
      return f(p.resolve(e));
    }
  }
  (f.isParcelRequire = !0),
    (f.Module = function (e) {
      (this.id = e), (this.bundle = f), (this.exports = {});
    }),
    (f.modules = e),
    (f.cache = r),
    (f.parent = o),
    (f.register = function (r, t) {
      e[r] = [
        function (e, r) {
          r.exports = t;
        },
        {},
      ];
    });
  for (var c = 0; c < t.length; c++)
    try {
      f(t[c]);
    } catch (e) {
      i || (i = e);
    }
  if (t.length) {
    var l = f(t[t.length - 1]);
    "object" == typeof exports && "undefined" != typeof module
      ? (module.exports = l)
      : "function" == typeof define && define.amd
      ? define(function () {
          return l;
        })
      : n && (this[n] = l);
  }
  if (((parcelRequire = f), i)) throw i;
  return f;
})(
  {
    vpnQ: [
      function (require, module, exports) {
        "use strict";
        function e(e, r, t, n, o, u, a) {
          try {
            var s = e[u](a),
              i = s.value;
          } catch (c) {
            return void t(c);
          }
          s.done ? r(i) : Promise.resolve(i).then(n, o);
        }
        function r(r) {
          return function () {
            var t = this,
              n = arguments;
            return new Promise(function (o, u) {
              var a = r.apply(t, n);
              function s(r) {
                e(a, o, u, s, i, "next", r);
              }
              function i(r) {
                e(a, o, u, s, i, "throw", r);
              }
              s(void 0);
            });
          };
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.Blogs = void 0);
        var t =
            "https://niravkpatel28.github.io/json-data-server/blogs/blogs.json",
          n = (function () {
            var e = r(
              regeneratorRuntime.mark(function e(r) {
                var t;
                return regeneratorRuntime.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.next = 2), axios.get(r);
                      case 2:
                        return (t = e.sent), e.abrupt("return", t.data);
                      case 4:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (r) {
              return e.apply(this, arguments);
            };
          })(),
          o = n(t);
        exports.Blogs = o;
      },
      {},
    ],
    jFun: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.blogImage = void 0);
        var e = function (e) {
          var t = document.createElement("div");
          t.classList.add("blog-img");
          var r = document.createElement("img");
          return (r.src = e), (r.alt = "alt descp of img"), t.appendChild(r), t;
        };
        exports.blogImage = e;
      },
      {},
    ],
    HI7p: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.blogContent = void 0);
        var e = function (e) {
          var t = document.createElement("div");
          t.classList.add("blog-content");
          var n = document.createElement("p");
          return (
            (n.textContent = e), n.classList.add("content"), t.appendChild(n), t
          );
        };
        exports.blogContent = e;
      },
      {},
    ],
    usvm: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.blogDetail = void 0);
        var e = require("./blogImage.js"),
          t = require("./blogContent.js"),
          a = function (a) {
            var n = document.getElementsByClassName("blog-detail")[0];
            n.textContent && (n.textContent = "");
            var l = document.createElement("div");
            l.classList.add("blog-container");
            var d = document.createElement("div");
            d.classList.add("blog-info");
            var o = document.createElement("h2");
            o.classList.add("blog-title"), (o.textContent = a.title);
            var i = document.createElement("span"),
              r = document.createElement("i");
            r.setAttribute("class", "fa fa-user"),
              i.classList.add("author"),
              (i.textContent = a.author),
              i.appendChild(r);
            var s = (0, e.blogImage)(a.imageUrl),
              c = (0, t.blogContent)(a.content);
            d.appendChild(o),
              d.appendChild(i),
              l.appendChild(d),
              l.appendChild(s),
              l.appendChild(c),
              n.appendChild(l);
          };
        exports.blogDetail = a;
      },
      { "./blogImage.js": "jFun", "./blogContent.js": "HI7p" },
    ],
    KsPu: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.relatedLinks = void 0);
        var e = function (e, t) {
            return e.find(function (e) {
              return e.id == t;
            });
          },
          t = function (t, n) {
            return n.map(function (n) {
              var r = document.createElement("div");
              r.classList.add("related-link"), r.setAttribute("id", n.id);
              var i = document.createElement("img");
              (i.src = e(t, n.id).imageUrl), (i.alt = "alt descp of img");
              var d = document.createElement("p");
              d.classList.add("link-title");
              var a = document.createElement("a");
              return (
                (a.textContent = n.title),
                (a.href = "#"),
                d.appendChild(a),
                r.appendChild(i),
                r.appendChild(d),
                r
              );
            });
          };
        exports.relatedLinks = t;
      },
      {},
    ],
    qhD9: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.renderNewBlog = void 0);
        var e = require("../data.js"),
          t = require("./blogDetail.js"),
          n = require("./relatedLinks.js"),
          r = function (r) {
            e.Blogs.then(function (e) {
              var i = e.find(function (e) {
                return e.id == r;
              });
              (0, t.blogDetail)(i);
              var o = (0, n.relatedLinks)(e, i.links),
                l = document.getElementsByClassName(
                  "related-link-container"
                )[0];
              l.textContent && (l.textContent = ""),
                o.forEach(function (e) {
                  l.appendChild(e);
                });
            });
          };
        exports.renderNewBlog = r;
      },
      {
        "../data.js": "vpnQ",
        "./blogDetail.js": "usvm",
        "./relatedLinks.js": "KsPu",
      },
    ],
    NQFf: [
      function (require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.handleClick = void 0);
        var e = require("../components/renderNewBlog.js"),
          t = function (t) {
            if ("A" == t.target.tagName)
              (0, e.renderNewBlog)(t.target.parentElement.parentNode.id);
            else if ("IMG" == t.target.tagName)
              (0, e.renderNewBlog)(t.target.parentNode.id);
            else if ("P" == t.target.tagName)
              (0, e.renderNewBlog)(t.target.parentNode.id);
            else {
              if ("related-link" != t.target.className) return;
              (0, e.renderNewBlog)(t.target.id);
            }
          };
        exports.handleClick = t;
      },
      { "../components/renderNewBlog.js": "qhD9" },
    ],
    nZVy: [
      function (require, module, exports) {
        "use strict";
        function e(e) {
          localStorage.setItem("theme", e),
            (document.documentElement.className = e);
        }
        function t() {
          "theme-dark" === localStorage.getItem("theme")
            ? e("theme-light")
            : e("theme-dark");
        }
        Object.defineProperty(exports, "__esModule", { value: !0 }),
          (exports.setTheme = e),
          (exports.toggleTheme = t);
      },
      {},
    ],
    HJDO: [
      function (require, module, exports) {
        "use strict";
        var e = require("./data.js"),
          t = require("./components/renderNewBlog.js"),
          n = require("./helper/handleClick.js"),
          r = require("./helper/darkTheme.js");
        window.onload = function () {
          e.Blogs.then(function (e) {
            (0, t.renderNewBlog)(e[1].id);
          }),
            document
              .getElementsByClassName("related-link-container")[0]
              .addEventListener("click", n.handleClick),
            document
              .getElementById("slider")
              .addEventListener("change", r.toggleTheme),
            "theme-dark" === localStorage.getItem("theme")
              ? ((0, r.setTheme)("theme-dark"),
                (document.getElementById("slider").checked = !0))
              : (0, r.setTheme)("theme-light");
        };
      },
      {
        "./data.js": "vpnQ",
        "./components/renderNewBlog.js": "qhD9",
        "./helper/handleClick.js": "NQFf",
        "./helper/darkTheme.js": "nZVy",
      },
    ],
  },
  {},
  ["HJDO"],
  null
);
//# sourceMappingURL=/main.81286750.js.map
