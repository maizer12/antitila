(() => {
  "use strict";
  let e = !0,
    t = (t = 500) => {
      let o = document.querySelector("body");
      if (e) {
        let s = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight = "0px";
          }
          (o.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    },
    o = (t = 500) => {
      let o = document.querySelector("body");
      if (e) {
        let s = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < s.length; e++) {
          s[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (o.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    };
  let s = !1;
  setTimeout(() => {
    if (s) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    window.addEventListener("scroll", () => {
      let e = window.scrollY;
      e <= 300 &&
        document.querySelector(".arrow-active") &&
        document
          .querySelector(".arrow-active")
          .classList.remove("arrow-active"),
        e >= 300 &&
          document.querySelectorAll(".graphic-item").forEach((e) => {
            e.classList.add("animation-scrole");
          }),
        e >= 1e3 &&
          (document.querySelector(".merch__colums").classList.add("colums-gap"),
          document.querySelector(".arrow ").classList.add("arrow-active")),
        e >= 2100 &&
          document.querySelectorAll(".releases-item").forEach((e) => {
            e.classList.add("releases-rotait");
          }),
        e >= 2700 &&
          document.querySelector(".video__items").classList.add("video-wrap"),
        e >= 4100 &&
          document
            .querySelector(".instagram__items")
            .classList.add("instagram-norm");
    }),
    document.querySelectorAll(".header-navigation__link ").forEach((e) => {
      e.addEventListener("click", function () {
        document.querySelector(".menu-open").classList.toggle("menu-open"),
          document.querySelector(".webp").classList.toggle("lock");
      });
    }),
    document.querySelector(".menu__link").addEventListener("click", () => {
      document.querySelector(".webp").classList.toggle("menu-open"),
        document.querySelector(".webp").classList.toggle("lock");
    }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    document.querySelector(".icon-menu") &&
      document.addEventListener("click", function (s) {
        e &&
          s.target.closest(".icon-menu") &&
          (((e = 500) => {
            document.documentElement.classList.contains("lock") ? t(e) : o(e);
          })(),
          document.documentElement.classList.toggle("menu-open"));
      }),
    (function () {
      s = !0;
      const e = document.querySelector("header.header"),
        t = e.hasAttribute("data-scroll-show"),
        o = e.dataset.scrollShow ? e.dataset.scrollShow : 500,
        c = e.dataset.scroll ? e.dataset.scroll : 1;
      let l,
        n = 0;
      document.addEventListener("windowScroll", function (s) {
        const r = window.scrollY;
        clearTimeout(l),
          r >= c
            ? (!e.classList.contains("_header-scroll") &&
                e.classList.add("_header-scroll"),
              t &&
                (r > n
                  ? e.classList.contains("_header-show") &&
                    e.classList.remove("_header-show")
                  : !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show"),
                (l = setTimeout(() => {
                  !e.classList.contains("_header-show") &&
                    e.classList.add("_header-show");
                }, o))))
            : (e.classList.contains("_header-scroll") &&
                e.classList.remove("_header-scroll"),
              t &&
                e.classList.contains("_header-show") &&
                e.classList.remove("_header-show")),
          (n = r <= 0 ? 0 : r);
      });
    })();
})();
