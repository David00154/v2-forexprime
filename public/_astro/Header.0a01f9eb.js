import { r as a } from "./index.ed373d49.js";
import { j as e } from "./jsx-runtime.391947bd.js";
const h = ({ pathname: r }) => {
    a.useRef(null);
    const t = a.useRef(null),
      [s, l] = a.useState([
        { text: "Home", href: "/" },
        { text: "About", href: "/about" },
        { text: "Contact Us", href: "/contact-us" },
        { text: "FAQs", href: "/faqs" },
      ]);
    function i() {
      t.current.classList.toggle("expanded");
    }
    return e.jsx("header", {
      className: "w-full bg-dark-primary",
      children: e.jsxs("div", {
        className: "container-fluid flex items-center justify-between",
        children: [
          e.jsx("div", {
            className:
              "flex items-center h-auto pl-[10px] md:pl-[20px] xl:py-0 py-[20px]",
            children: e.jsx("a", {
              href: "#",
              children: e.jsx("span", {
                className: "text-white lg:text-[25px] text-[22px] font-bold",
                children: "Binharvest",
              }),
            }),
          }),
          e.jsx(x, { links: s, ref: t }),
          e.jsx(n, { pathname: r, links: s }),
          e.jsxs("ul", {
            className: "flex items-center",
            children: [
              e.jsx("a", {
                onClick: i,
                href: "#",
                className: "flex items-center text-white xl:hidden",
                children: e.jsx("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "25",
                  height: "25",
                  viewBox: "0 0 24 24",
                  children: e.jsx("path", {
                    fill: "none",
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "2",
                    d: "M4 6h16M4 12h16M4 18h16",
                  }),
                }),
              }),
              e.jsx("a", {
                href: "/dashboard",
                id: "",
                className:
                  "text-[15px] text-black bg-custom-yellow px-[25px] py-[17px] md:inline-block hidden hover:bg-white hover:text-custom-dark-primary custom-transition ml-[35px]",
                children: "Create Account",
              }),
            ],
          }),
        ],
      }),
    });
  },
  x = a.forwardRef(function (r, t) {
    const { links: s } = r;
    return e.jsxs("div", {
      ref: t,
      className: "mobile-nav-wrapper xl:hidden",
      children: [
        e.jsx("div", {
          onClick: () => t.current.classList.toggle("expanded"),
          className: "mobile-nav-overlay",
        }),
        e.jsxs("nav", {
          className: "mobile-nav-content",
          children: [
            e.jsx("span", {
              onClick: () => t.current.classList.toggle("expanded"),
              className:
                "absolute top-[20px] right-[15px] cursor-pointer text-[#a2a2b1]",
              children: e.jsx("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "32",
                height: "32",
                viewBox: "0 0 20 20",
                children: e.jsxs("g", {
                  fill: "currentColor",
                  children: [
                    e.jsx("path", {
                      d: "M7.172 14.243a1 1 0 1 1-1.415-1.415l7.071-7.07a1 1 0 1 1 1.415 1.414l-7.071 7.07Z",
                    }),
                    e.jsx("path", {
                      d: "M5.757 7.172a1 1 0 0 1 1.415-1.415l7.07 7.071a1 1 0 1 1-1.414 1.415l-7.07-7.071Z",
                    }),
                  ],
                }),
              }),
            }),
            e.jsx("div", {
              className: "mb-[30px] flex",
              children: e.jsx("a", {
                href: "#",
                children: e.jsx("span", {
                  className: "text-white text-[22px] font-bold inline-block",
                  children: "Binharvest",
                }),
              }),
            }),
            e.jsx("a", {
              className:
                "w-full text-center mx-0 mb-[20px] text-black flex items-center bg-custom-yellow justify-center h-[45px]",
              href: "/dashboard",
              children: "Login",
            }),
            e.jsx("div", {
              children: e.jsx("ul", {
                className: "m-0 p-0",
                children: s.map((l, i) =>
                  e.jsx(
                    "li",
                    {
                      onClick: () => t.current.classList.toggle("expanded"),
                      className: "border-b border-b-[rgba(255,255,255,.1)]",
                      children: e.jsxs("a", {
                        className:
                          "flex justify-between leading-[30px] text-text-light font-medium h-[50px] items-center",
                        href: l.href,
                        children: [
                          l.text,
                          e.jsx("button", {
                            className:
                              "w-[30px] h-[30px] p-0 border-none bg-custom-yellow text-black flex items-center justify-center text-center",
                            children: e.jsx("svg", {
                              xmlns: "http://www.w3.org/2000/svg",
                              width: "15",
                              height: "15",
                              viewBox: "0 0 24 24",
                              children: e.jsx("path", {
                                fill: "currentColor",
                                d: "M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10l-10 10Z",
                              }),
                            }),
                          }),
                        ],
                      }),
                    },
                    i
                  )
                ),
              }),
            }),
            e.jsxs("ul", {
              className: "mx-0 my-[20px]",
              children: [
                e.jsxs("li", {
                  className:
                    "text-[14px] relative flex items-center text-[#a2a2b1] font-medium",
                  children: [
                    e.jsx("i", {
                      className:
                        "text-white bg-dark-secondary w-[32px] h-[32px] text-center rounded-[50%] mr-[10px] flex items-center justify-center icon-email",
                    }),
                    e.jsx("a", {
                      href: "mailto:support@Binharvest.space",
                      className: "text-white",
                      children: "support@Binharvest.space",
                    }),
                  ],
                }),
                e.jsxs("li", {
                  className:
                    "text-[14px] relative flex items-center text-[#a2a2b1] font-medium mt-[15px]",
                  children: [
                    e.jsx("i", {
                      className:
                        "text-white bg-dark-secondary w-[32px] h-[32px] text-center rounded-[50%] mr-[10px] flex items-center justify-center icon-telephone",
                    }),
                    e.jsx("a", {
                      href: "#",
                      className: "text-white",
                      children: "+1 (617) 209-9232",
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }),
  n = ({ links: r, pathname: t }) =>
    e.jsx("ul", {
      className: " xl:flex items-center hidden",
      children: r.map((s, l) =>
        e.jsx(
          "li",
          {
            className: `text-text-primary py-[30px] text-[15px] ${
              l != 0 && "ml-[35px]"
            }`,
            children: e.jsx("a", {
              className: `menu-item custom-transition relative flex items-center ${
                t == s.href && "active"
              }`,
              href: s.href,
              "x-text": "item",
              children: s.text,
            }),
          },
          l
        )
      ),
    });
export { h as default };
