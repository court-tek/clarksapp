(function(modules) {
    var installedModules = {};
    function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) return installedModules[moduleId].exports;
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        module.l = true;
        return module.exports;
    }
    __webpack_require__.m = modules;
    __webpack_require__.c = installedModules;
    __webpack_require__.d = function(exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
        });
    };
    __webpack_require__.r = function(exports) {
        if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(exports, "__esModule", {
            value: true
        });
    };
    __webpack_require__.t = function(value, mode) {
        if (1 & mode) value = __webpack_require__(value);
        if (8 & mode) return value;
        if (4 & mode && "object" === typeof value && value && value.__esModule) return value;
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", {
            enumerable: true,
            value: value
        });
        if (2 & mode && "string" != typeof value) for (var key in value) __webpack_require__.d(ns, key, function(key) {
            return value[key];
        }.bind(null, key));
        return ns;
    };
    __webpack_require__.n = function(module) {
        var getter = module && module.__esModule ? function() {
            return module["default"];
        } : function() {
            return module;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
    };
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    __webpack_require__.p = "";
    return __webpack_require__(__webpack_require__.s = "./assets/js/main.js");
})({
    "./assets/js/main.js": function(module, exports) {
        eval("window.onload = () => {\n  let modalState = false;\n\n  // mobile slide menu\n  let hamburgerBtn = document.getElementsByClassName('navbar-toggler')[0];\n\n  // slide Menu\n  let mobileMenu = document.getElementsByClassName('mobile-menu')[0];\n\n  // slide Menu close button X\n  let mobileCloseBtn = document.getElementsByClassName('mobile-menu__close-btn')[0];\n\n  // phone number input modal\n  let phoneModal = document.getElementsByClassName('phone-modal')[0];\n\n  // modal close btn\n  let closeModal = document.getElementsByClassName('phone-modal__close-btn')[0];\n\n  // phone number mobile discount Opt In btn\n  let mobileOpIn = document.getElementsByClassName('phone-modal__button')[0];\n\n  // modal nothanks close btn\n  let noThanksBtn = document.getElementsByClassName('phone-modal__decline-offer')[0];\n\n  // phone input\n  let phoneInput = document.getElementsByClassName('phone-modal__input')[0];\n\n  // mobile input success message\n  let textInstructions = document.getElementsByClassName('phone-thank__instructions')[0];\n\n  // this populates email inside the green box\n  let emailCapture = document.getElementsByClassName('text-box')[0].value;\n  document.getElementsByClassName('email-value')[0].innerHTML = emailCapture;\n  console.log([emailCapture]);\n  let emailValue = document.getElementById('myValue');\n  // dropdown menu\n  let dropDownMenu = document.getElementsByClassName('mc-dropdown-menu')[0];\n\n  // Input group\n  let inputGroup = document.getElementsByClassName('input-group__mcEmail')[0];\n\n  // button to open dropdown menu\n  let clickBtnOp = document.getElementsByClassName('input-group__mc-drop-open')[0];\n\n  // button to close dropdown menu\n  let clickBtnCl = document.getElementsByClassName('closeBtn')[0];\n\n  // error message\n  let emailErrorMessage = document.getElementsByClassName('invalid-email-notice')[0];\n  // ------------------------------------------------------------------\n  // hamburger slide menu functionality\n  hamburgerBtn.addEventListener('click', () => {\n    mobileMenu.classList.add('mobile-menu--open');\n  });\n  mobileCloseBtn.addEventListener('click', () => {\n    mobileMenu.classList.remove('mobile-menu--open');\n  });\n\n  // phone modal functionality\n  let showModal = () => {\n    if (modalState === false && screen.width > 576) {\n      phoneModal.classList.add('phone-modal--visibility');\n      modalState = true;\n    }\n  };\n  let phoneIsValid = phoneNumber => {\n    return /^\\(?(\\d{3})\\)?[- ]?(\\d{3})[- ]?(\\d{4})$/.test(phoneNumber);\n  };\n  let displayInstructions = () => {\n    textInstructions.classList.add('phone-thank--success');\n  };\n  document.addEventListener('mouseenter', () => {\n    showModal();\n  });\n  closeModal.addEventListener('click', () => {\n    phoneModal.classList.remove('phone-modal--visibility');\n  });\n  noThanksBtn.addEventListener('click', () => {\n    phoneModal.classList.remove('phone-modal--visibility');\n  });\n  mobileOpIn.addEventListener('click', () => {\n    if (phoneIsValid(phoneInput.value)) {\n      displayInstructions();\n    } else {\n      document.getElementsByClassName('phone-modal__error-warning')[0].classList.add('phone-modal__form-submit--error');\n      console.log('not valid');\n    }\n  });\n\n  // click button to init dropdown and populate green box with clients email address\n  let emailIsValid = () => {\n    if (!emailValue.value.match(/^[A-Za-z\\._\\-0-9]*[@][A-Za-z]*[\\.][a-z]{2,4}$/)) {\n      emailErrorMessage.classList.add('invalid-email-notice--visible');\n    } else {\n      emailErrorMessage.classList.remove('invalid-email-notice--visible');\n      dropDownMenu.classList.add('mc-dropdown-menu--open');\n      inputGroup.classList.add('input-group--hidden');\n      let emailCapture = document.getElementsByClassName('text-box')[0].value;\n      document.getElementsByClassName('email-value')[0].innerHTML = emailCapture;\n    }\n  };\n  clickBtnOp.addEventListener('click', () => {\n    // test\n    console.log(emailValue.value);\n    emailIsValid();\n  });\n\n  // click button to init dropdown close sequence\n  clickBtnCl.addEventListener('click', () => {\n    dropDownMenu.classList.remove('mc-dropdown-menu--open');\n    inputGroup.classList.remove('input-group--hidden');\n  });\n};\n\n//# sourceURL=webpack:///./assets/js/main.js?");
    }
});