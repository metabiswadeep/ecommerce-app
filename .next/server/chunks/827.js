"use strict";
exports.id = 827;
exports.ids = [827];
exports.modules = {

/***/ 5827:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "jL": () => (/* reexport */ components_Banner),
  "AP": () => (/* reexport */ components_Cart),
  "LE": () => (/* reexport */ components_FooterBanner),
  "Ar": () => (/* reexport */ components_Layout),
  "xs": () => (/* reexport */ components_Product)
});

// UNUSED EXPORTS: Footer, Navbar

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-icons/ai"
var ai_ = __webpack_require__(9847);
;// CONCATENATED MODULE: ./components/Footer.jsx



const Footer = () => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "footer-container"
  }, /*#__PURE__*/external_react_default().createElement("p", null, "2023 BP Ecommerce All rights reserverd"), /*#__PURE__*/external_react_default().createElement("p", null, "Disclaimer: Please do not provide your details to this app. "), /*#__PURE__*/external_react_default().createElement("p", null, "This is a demo app and not for commercial purposes. Products displayed are not for sale."), /*#__PURE__*/external_react_default().createElement("p", {
    className: "icons"
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiFillInstagram, null), /*#__PURE__*/external_react_default().createElement(ai_.AiOutlineTwitter, null)));
};

/* harmony default export */ const components_Footer = (Footer);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./context/StateContext.js
var StateContext = __webpack_require__(5547);
;// CONCATENATED MODULE: ./components/Navbar.jsx






const Navbar = () => {
  const {
    showCart,
    setShowCart,
    totalQuantities
  } = (0,StateContext/* useStateContext */.F)();
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "navbar-container"
  }, /*#__PURE__*/external_react_default().createElement("p", {
    className: "logo"
  }, /*#__PURE__*/external_react_default().createElement(next_link["default"], {
    href: "/"
  }, "BP Ecommerce")), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "cart-icon",
    onClick: () => setShowCart(true)
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiOutlineShoppingCart, null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "cart-item-qty"
  }, totalQuantities)), showCart && /*#__PURE__*/external_react_default().createElement(components_Cart, null));
};

/* harmony default export */ const components_Navbar = (Navbar);
;// CONCATENATED MODULE: ./components/Layout.jsx





const Layout = ({
  children
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "layout"
  }, /*#__PURE__*/external_react_default().createElement((head_default()), null, /*#__PURE__*/external_react_default().createElement("title", null, "BP Ecommerce Store")), /*#__PURE__*/external_react_default().createElement("header", null, /*#__PURE__*/external_react_default().createElement(components_Navbar, null)), /*#__PURE__*/external_react_default().createElement("main", {
    className: "main-container"
  }, children), /*#__PURE__*/external_react_default().createElement("footer", null, /*#__PURE__*/external_react_default().createElement(components_Footer, null)));
};

/* harmony default export */ const components_Layout = (Layout);
// EXTERNAL MODULE: ./lib/client.js
var client = __webpack_require__(2130);
;// CONCATENATED MODULE: ./components/Product.jsx




const Product = ({
  product: {
    image,
    name,
    slug,
    price
  }
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement(next_link["default"], {
    href: `/product/${slug.current}`
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "product-card"
  }, /*#__PURE__*/external_react_default().createElement("img", {
    src: (0,client/* urlFor */.u)(image && image[0]),
    width: 250,
    height: 250,
    className: "product-image"
  }), /*#__PURE__*/external_react_default().createElement("p", {
    className: "product-name"
  }, name), /*#__PURE__*/external_react_default().createElement("p", {
    className: "product-price"
  }, "Rs ", price))));
};

/* harmony default export */ const components_Product = (Product);
;// CONCATENATED MODULE: ./components/Banner.jsx




const Banner = ({
  banner
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "hero-banner-container"
  }, /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("p", {
    className: "beats-solo"
  }, banner.smallText), /*#__PURE__*/external_react_default().createElement("h3", null, banner.midText), /*#__PURE__*/external_react_default().createElement("h1", null, banner.largeText1), /*#__PURE__*/external_react_default().createElement("img", {
    src: (0,client/* urlFor */.u)(banner.image),
    alt: "headphones",
    className: "hero-banner-image"
  }), /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement(next_link["default"], {
    href: `/product/${banner.product}`
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, banner.buttonText)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "desc"
  }, /*#__PURE__*/external_react_default().createElement("h5", null, "Description"), /*#__PURE__*/external_react_default().createElement("p", null, banner.desc)))));
};

/* harmony default export */ const components_Banner = (Banner);
;// CONCATENATED MODULE: ./components/FooterBanner.jsx




const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image
  }
}) => {
  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "footer-banner-container"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "banner-desc"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "left"
  }, /*#__PURE__*/external_react_default().createElement("p", null, discount), /*#__PURE__*/external_react_default().createElement("h3", null, largeText1), /*#__PURE__*/external_react_default().createElement("h3", null, largeText2), /*#__PURE__*/external_react_default().createElement("p", null, saleTime)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "right"
  }, /*#__PURE__*/external_react_default().createElement("p", null, smallText), /*#__PURE__*/external_react_default().createElement("h3", null, midText), /*#__PURE__*/external_react_default().createElement("p", null, desc), /*#__PURE__*/external_react_default().createElement(next_link["default"], {
    href: `/product/${product}`
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button"
  }, buttonText))), /*#__PURE__*/external_react_default().createElement("img", {
    src: (0,client/* urlFor */.u)(image),
    className: "footer-banner-image"
  })));
};

/* harmony default export */ const components_FooterBanner = (FooterBanner);
// EXTERNAL MODULE: external "react-icons/ti"
var ti_ = __webpack_require__(1946);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(8922);
var external_react_hot_toast_default = /*#__PURE__*/__webpack_require__.n(external_react_hot_toast_);
// EXTERNAL MODULE: external "@stripe/stripe-js"
var stripe_js_ = __webpack_require__(943);
;// CONCATENATED MODULE: ./lib/getStripe.js

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = (0,stripe_js_.loadStripe)("pk_test_51NRmEbSCZQz2HfURktijDv6ZbIJjOIWcwTghXo7cybtEakxsQt88UCD303Xgf4msPQVEOWXpDeTHO1BiuXQAVF0P00e5bPjoFU");
  }

  return stripePromise;
};

/* harmony default export */ const lib_getStripe = (getStripe);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
;// CONCATENATED MODULE: ./components/Cart.jsx










const Cart = () => {
  const cartRef = (0,external_react_.useRef)();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove
  } = (0,StateContext/* useStateContext */.F)();

  const handleCheckout = async () => {
    const stripe = await lib_getStripe();
    const response = await fetch('/api/stripe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(cartItems)
    });
    if (response.statusCode === 500) return;
    const data = await response.json();
    external_react_hot_toast_default().loading('Redirecting you to Stripe...');
    stripe.redirectToCheckout({
      sessionId: data.id
    });
  };

  return /*#__PURE__*/external_react_default().createElement("div", {
    className: "cart-wrapper",
    ref: cartRef
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "cart-container"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "cart-heading",
    onClick: () => setShowCart(false)
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiOutlineLeft, null), /*#__PURE__*/external_react_default().createElement("span", {
    className: "heading"
  }, "Your Cart"), /*#__PURE__*/external_react_default().createElement("span", {
    className: "cart-num-items"
  }, "(", totalQuantities, " items)")), cartItems.length < 1 && /*#__PURE__*/external_react_default().createElement("div", {
    className: "empty-cart"
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiOutlineShoppingCart, {
    size: 150
  }), /*#__PURE__*/external_react_default().createElement("h3", null, "Your cart is empty"), /*#__PURE__*/external_react_default().createElement(next_link["default"], {
    href: "/"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    onClick: () => setShowCart(false),
    className: "btn"
  }, "Continue Shopping"))), /*#__PURE__*/external_react_default().createElement("div", {
    className: "product-container"
  }, cartItems.length >= 1 && cartItems.map(item => /*#__PURE__*/external_react_default().createElement("div", {
    className: "product",
    key: item._id
  }, /*#__PURE__*/external_react_default().createElement("img", {
    src: (0,client/* urlFor */.u)(item?.image[0]),
    className: "cart-product-image"
  }), /*#__PURE__*/external_react_default().createElement("div", {
    className: "item-desc"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "flex top"
  }, /*#__PURE__*/external_react_default().createElement("h5", null, item.name), /*#__PURE__*/external_react_default().createElement("h4", null, "$", item.price)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "flex bottom"
  }, /*#__PURE__*/external_react_default().createElement("div", null, /*#__PURE__*/external_react_default().createElement("p", {
    className: "quantity-desc"
  }, /*#__PURE__*/external_react_default().createElement("span", {
    className: "minus",
    onClick: () => toggleCartItemQuanitity(item._id, 'dec')
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiOutlineMinus, null)), /*#__PURE__*/external_react_default().createElement("span", {
    className: "num"
  }, item.quantity), /*#__PURE__*/external_react_default().createElement("span", {
    className: "plus",
    onClick: () => toggleCartItemQuanitity(item._id, 'inc')
  }, /*#__PURE__*/external_react_default().createElement(ai_.AiOutlinePlus, null)))), /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "remove-item",
    onClick: () => onRemove(item)
  }, /*#__PURE__*/external_react_default().createElement(bs_.BsTrash, null))))))), cartItems.length >= 1 && /*#__PURE__*/external_react_default().createElement("div", {
    className: "cart-bottom"
  }, /*#__PURE__*/external_react_default().createElement("div", {
    className: "total"
  }, /*#__PURE__*/external_react_default().createElement("h3", null, "Subtotal:"), /*#__PURE__*/external_react_default().createElement("h3", null, "Rs ", totalPrice)), /*#__PURE__*/external_react_default().createElement("div", {
    className: "btn-container"
  }, /*#__PURE__*/external_react_default().createElement("button", {
    type: "button",
    className: "btn",
    onClick: handleCheckout
  }, "Pay with Stripe")))));
};

/* harmony default export */ const components_Cart = (Cart);
;// CONCATENATED MODULE: ./components/index.js








/***/ }),

/***/ 2130:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ client),
/* harmony export */   "u": () => (/* binding */ urlFor)
/* harmony export */ });
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1097);
/* harmony import */ var _sanity_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sanity_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1791);
/* harmony import */ var _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sanity_image_url__WEBPACK_IMPORTED_MODULE_1__);


const client = _sanity_client__WEBPACK_IMPORTED_MODULE_0___default()({
  projectId: 'mddj8b93',
  dataset: 'production',
  apiVersion: '2022-03-10',
  useCdn: true,
  token: "skzWdTaXQj1e2dTYQg4AUXtYdSveGgPSnHiRf6F8D5ONhXJ3xCkreeGH0Hp01LX6suqks8rKRMpBXFZ0p2fBneWke9SiZvFtw7W4eOaMNiX8B1dAHrTKsSM6JJb9qraByabw2juePN8c94OCCYWby535Qmt03rj5iBR7bKKRdEecdHTdasoL"
});
const builder = _sanity_image_url__WEBPACK_IMPORTED_MODULE_1___default()(client);
const urlFor = source => builder.image(source);

/***/ })

};
;