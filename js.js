! function(t, e) {
    "object" === typeof exports && "object" === typeof module ? module.exports = e() : "function" === typeof define && define.amd ? define("SimpleKeyboard", [], e) : "object" === typeof exports ? exports.SimpleKeyboard = e() : t.SimpleKeyboard = e();
}(window, function() {
    return function(t) {
        var e = {};

        function n(o) {
            if (e[o]) return e[o].exports;
            var i = e[o] = {
                i: o,
                l: !1,
                exports: {}
            };
            return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
        }
        return n.m = t, n.c = e, n.d = function(t, e, o) {
            n.o(t, e) || Object.defineProperty(t, e, {
                enumerable: !0,
                get: o
            });
        }, n.r = function(t) {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(t, "__esModule", {
                value: !0
            });
        }, n.t = function(t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" === typeof t && t && t.__esModule) return t;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", {
                    enumerable: !0,
                    value: t
                }), 2 & e && "string" !== typeof t)
                for (var i in t) n.d(o, i, function(e) {
                    return t[e];
                }.bind(null, i));
            return o;
        }, n.n = function(t) {
            var e = t && t.__esModule ? function() {
                return t.default;
            } : function() {
                return t;
            };
            return n.d(e, "a", e), e;
        }, n.o = function(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e);
        }, n.p = "", n(n.s = 0);
    }([function(t, e, n) {
        t.exports = n(2);
    }, function(t, e, n) {}, function(t, e, n) {
        "use strict";

        function o(t) {
            return (o = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
        }

        function i(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
            }
        }
        n.r(e), n(1);
        var r = function() {
            function t(e) {
                var n = e.getOptions,
                    o = e.getCaretPosition,
                    i = e.dispatch;
                ! function(e, n) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this), this.getOptions = n, this.getCaretPosition = o, this.dispatch = i, t.bindMethods(t, this);
            }
            var e, n, r;
            return e = t, r = [{
                key: "bindMethods",
                value: function(t, e) {
                    var n = !0,
                        o = !1,
                        i = void 0;
                    try {
                        for (var r, s = Object.getOwnPropertyNames(t.prototype)[Symbol.iterator](); !(n = (r = s.next()).done); n = !0) {
                            var u = r.value;
                            "constructor" === u || "bindMethods" === u || (e[u] = e[u].bind(e));
                        }
                    } catch (t) {
                        o = !0, i = t;
                    } finally {
                        try {
                            n || null === s.return || s.return();
                        } finally {
                            if (o) throw i;
                        }
                    }
                }
            }], (n = [{
                key: "getButtonClass",
                value: function(t) {
                    var e = t.includes("{") && t.includes("}") && "{//}" !== t ? "functionBtn" : "standardBtn",
                        n = t.replace("{", "").replace("}", ""),
                        o = "";
                    return "standardBtn" !== e && (o = " hg-button-".concat(n)), "hg-".concat(e).concat(o);
                }
            }, {
                key: "getDefaultDiplay",
                value: function() {
                    return {
                        "{bksp}": "backspace",
                        "{backspace}": "backspace",
                        "{enter}": "< enter",
                        "{shift}": "shift",
                        "{shiftleft}": "shift",
                        "{shiftright}": "shift",
                        "{alt}": "alt",
                        "{s}": "shift",
                        "{tab}": "tab",
                        "{lock}": "caps",
                        "{capslock}": "caps",
                        "{accept}": "Submit",
                        "{space}": " ",
                        "{//}": " ",
                        "{esc}": "esc",
                        "{escape}": "esc",
                        "{f1}": "f1",
                        "{f2}": "f2",
                        "{f3}": "f3",
                        "{f4}": "f4",
                        "{f5}": "f5",
                        "{f6}": "f6",
                        "{f7}": "f7",
                        "{f8}": "f8",
                        "{f9}": "f9",
                        "{f10}": "f10",
                        "{f11}": "f11",
                        "{f12}": "f12",
                        "{numpaddivide}": "/",
                        "{numlock}": "lock",
                        "{arrowup}": "↑",
                        "{arrowleft}": "←",
                        "{arrowdown}": "↓",
                        "{arrowright}": "→",
                        "{prtscr}": "print",
                        "{scrolllock}": "scroll",
                        "{pause}": "pause",
                        "{insert}": "ins",
                        "{home}": "home",
                        "{pageup}": "up",
                        "{delete}": "del",
                        "{end}": "end",
                        "{pagedown}": "down",
                        "{numpadmultiply}": "*",
                        "{numpadsubtract}": "-",
                        "{numpadadd}": "+",
                        "{numpadenter}": "enter",
                        "{period}": ".",
                        "{numpaddecimal}": ".",
                        "{numpad0}": "0",
                        "{numpad1}": "1",
                        "{numpad2}": "2",
                        "{numpad3}": "3",
                        "{numpad4}": "4",
                        "{numpad5}": "5",
                        "{numpad6}": "6",
                        "{numpad7}": "7",
                        "{numpad8}": "8",
                        "{numpad9}": "9"
                    };
                }
            }, {
                key: "getButtonDisplayName",
                value: function(t, e, n) {
                    return (e = n ? Object.assign({}, this.getDefaultDiplay(), e) : e || this.getDefaultDiplay())[t] || t;
                }
            }, {
                key: "getUpdatedInput",
                value: function(t, e, n, o) {
                    var i = this.getOptions(),
                        r = e;
                    return ("{bksp}" === t || "{backspace}" === t) && r.length > 0 ? r = this.removeAt(r, n, o) : "{space}" === t ? r = this.addStringAt(r, " ", n, o) : "{tab}" !== t || "boolean" === typeof i.tabCharOnTab && !1 === i.tabCharOnTab ? "{enter}" !== t && "{numpadenter}" !== t || !i.newLineOnEnter ? t.includes("numpad") && Number.isInteger(Number(t[t.length - 2])) ? r = this.addStringAt(r, t[t.length - 2], n, o) : "{numpaddivide}" === t ? r = this.addStringAt(r, "/", n, o) : "{numpadmultiply}" === t ? r = this.addStringAt(r, "*", n, o) : "{numpadsubtract}" === t ? r = this.addStringAt(r, "-", n, o) : "{numpadadd}" === t ? r = this.addStringAt(r, "+", n, o) : "{numpaddecimal}" === t ? r = this.addStringAt(r, ".", n, o) : "{" === t || "}" === t ? r = this.addStringAt(r, t, n, o) : t.includes("{") || t.includes("}") || (r = this.addStringAt(r, t, n, o)) : r = this.addStringAt(r, "\n", n, o) : r = this.addStringAt(r, "\t", n, o), r;
                }
            }, {
                key: "updateCaretPos",
                value: function(t, e) {
                    var n = this.updateCaretPosAction(t, e);
                    this.dispatch(function(t) {
                        t.caretPosition = n;
                    });
                }
            }, {
                key: "updateCaretPosAction",
                value: function(t, e) {
                    var n = this.getOptions(),
                        o = this.getCaretPosition();
                    return e ? o > 0 && (o -= t) : o += t, n.debug && console.log("Caret at:", o, "(".concat(this.keyboardDOMClass, ")")), o;
                }
            }, {
                key: "addStringAt",
                value: function(t, e, n, o) {
                    var i;
                    return n || 0 === n ? (i = [t.slice(0, n), e, t.slice(n)].join(""), this.isMaxLengthReached() || o && this.updateCaretPos(e.length)) : i = t + e, i;
                }
            }, {
                key: "removeAt",
                value: function(t, e, n) {
                    var o;
                    if (0 === this.getCaretPosition()) return t;
                    var i = /([\uD800-\uDBFF][\uDC00-\uDFFF])/g;
                    return e && e >= 0 ? t.substring(e - 2, e).match(i) ? (o = t.substr(0, e - 2) + t.substr(e), n && this.updateCaretPos(2, !0)) : (o = t.substr(0, e - 1) + t.substr(e), n && this.updateCaretPos(1, !0)) : t.slice(-2).match(i) ? (o = t.slice(0, -2), n && this.updateCaretPos(2, !0)) : (o = t.slice(0, -1), n && this.updateCaretPos(1, !0)), o;
                }
            }, {
                key: "handleMaxLength",
                value: function(t, e) {
                    var n = this.getOptions(),
                        i = n.maxLength,
                        r = t[n.inputName],
                        s = e.length - 1 >= i;
                    if (e.length <= r.length) return !1;
                    if (Number.isInteger(i)) return n.debug && console.log("maxLength (num) reached:", s), s ? (this.maxLengthReached = !0, !0) : (this.maxLengthReached = !1, !1);
                    if ("object" === o(i)) {
                        var u = r.length === i[n.inputName];
                        return n.debug && console.log("maxLength (obj) reached:", u), u ? (this.maxLengthReached = !0, !0) : (this.maxLengthReached = !1, !1);
                    }
                }
            }, {
                key: "isMaxLengthReached",
                value: function() {
                    return Boolean(this.maxLengthReached);
                }
            }, {
                key: "isTouchDevice",
                value: function() {
                    return "ontouchstart" in window || navigator.maxTouchPoints;
                }
            }, {
                key: "pointerEventsSupported",
                value: function() {
                    return window.PointerEvent;
                }
            }, {
                key: "camelCase",
                value: function(t) {
                    return !!t && t.toLowerCase().trim().split(/[.\-_\s]/g).reduce(function(t, e) {
                        return e.length ? t + e[0].toUpperCase() + e.slice(1) : t;
                    });
                }
            }]) && i(e.prototype, n), r && i(e, r), t;
        }();

        function s(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
            }
        }
        var u = function() {
            function t(e) {
                var n = e.dispatch,
                    o = e.getOptions;
                ! function(e, n) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this), this.dispatch = n, this.getOptions = o, r.bindMethods(t, this);
            }
            var e, n;
            return e = t, (n = [{
                key: "handleHighlightKeyDown",
                value: function(t) {
                    var e = this.getOptions(),
                        n = this.getSimpleKeyboardLayoutKey(t);
                    this.dispatch(function(t) {
                        var o = t.getButtonElement(n) || t.getButtonElement("{".concat(n, "}"));
                        o && (o.style.backgroundColor = e.physicalKeyboardHighlightBgColor || "#9ab4d0", o.style.color = e.physicalKeyboardHighlightTextColor || "white");
                    });
                }
            }, {
                key: "handleHighlightKeyUp",
                value: function(t) {
                    var e = this.getSimpleKeyboardLayoutKey(t);
                    this.dispatch(function(t) {
                        var n = t.getButtonElement(e) || t.getButtonElement("{".concat(e, "}"));
                        n && n.removeAttribute && n.removeAttribute("style");
                    });
                }
            }, {
                key: "getSimpleKeyboardLayoutKey",
                value: function(t) {
                    var e;
                    return ((e = t.code.includes("Numpad") || t.code.includes("Shift") || t.code.includes("Space") || t.code.includes("Backspace") || t.code.includes("Control") || t.code.includes("Alt") || t.code.includes("Meta") ? t.code : t.key) !== e.toUpperCase() || "F" === t.code[0] && Number.isInteger(Number(t.code[1])) && t.code.length <= 3) && (e = e.toLowerCase()), e;
                }
            }]) && s(e.prototype, n), t;
        }();

        function a(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
            }
        }
        var c = function() {
            function t() {
                ! function(e, n) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this);
            }
            var e, n;
            return e = t, n = [{
                key: "getDefaultLayout",
                value: function() {
                    return {
                        default: ["` 1 2 3 4 5 6 7 8 9 0 - = {bksp}", "{tab} q w e r t y u i o p [ ] \\", "{lock} a s d f g h j k l ; ' {enter}", "{shift} z x c v b n m , . / {shift}", ".com @ {space}"],
                        shift: ["~ ! @ # $ % ^ & * ( ) _ + {bksp}", "{tab} Q W E R T Y U I O P { } |", '{lock} A S D F G H J K L : " {enter}', "{shift} Z X C V B N M < > ? {shift}", ".com @ {space}"]
                    };
                }
            }], null && a(e.prototype, null), n && a(e, n), t;
        }();

        function l(t) {
            return function(t) {
                if (Array.isArray(t)) {
                    for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
                    return n;
                }
            }(t) || function(t) {
                if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
            }(t) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance");
            }();
        }

        function p(t) {
            return (p = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                return typeof t;
            } : function(t) {
                return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
            })(t);
        }

        function f(t, e) {
            for (var n = 0; n < e.length; n++) {
                var o = e[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(t, o.key, o);
            }
        }

        function h(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t;
        }
        var d = function() {
            function t() {
                var e = this;
                ! function(e, n) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                }(this), h(this, "getOptions", function() {
                    return e.options;
                }), h(this, "getCaretPosition", function() {
                    return e.caretPosition;
                }), h(this, "registerModule", function(t, n) {
                    e.modules[t] || (e.modules[t] = {}), n(e.modules[t]);
                });
                var n = "string" === typeof(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : ".simple-keyboard",
                    o = "object" === p(arguments.length <= 0 ? void 0 : arguments[0]) ? arguments.length <= 0 ? void 0 : arguments[0] : arguments.length <= 1 ? void 0 : arguments[1];
                if (o || (o = {}), this.utilities = new r({
                        getOptions: this.getOptions,
                        getCaretPosition: this.getCaretPosition,
                        dispatch: this.dispatch
                    }), this.caretPosition = null, this.keyboardDOM = document.querySelector(n), this.options = o, this.options.layoutName = this.options.layoutName || "default", this.options.theme = this.options.theme || "hg-theme-default", this.options.inputName = this.options.inputName || "default", this.options.preventMouseDownDefault = this.options.preventMouseDownDefault || !1, this.keyboardPluginClasses = "", r.bindMethods(t, this), this.input = {}, this.input[this.options.inputName] = "", this.keyboardDOMClass = n.split(".").join(""), this.buttonElements = {}, window.SimpleKeyboardInstances || (window.SimpleKeyboardInstances = {}), this.currentInstanceName = this.utilities.camelCase(this.keyboardDOMClass), window.SimpleKeyboardInstances[this.currentInstanceName] = this, this.allKeyboardInstances = window.SimpleKeyboardInstances, this.keyboardInstanceNames = Object.keys(window.SimpleKeyboardInstances), this.isFirstKeyboardInstance = this.keyboardInstanceNames[0] === this.currentInstanceName, this.physicalKeyboard = new u({
                        dispatch: this.dispatch,
                        getOptions: this.getOptions
                    }), !this.keyboardDOM) throw console.warn('"'.concat(n, '" was not found in the DOM.')), new Error("KEYBOARD_DOM_ERROR");
                this.render(), this.modules = {}, this.loadModules();
            }
            var e, n;
            return e = t, (n = [{
                key: "handleButtonClicked",
                value: function(t) {
                    var e = this.options.debug;
                    if ("{//}" === t) return !1;
                    "function" === typeof this.options.onKeyPress && this.options.onKeyPress(t), this.input[this.options.inputName] || (this.input[this.options.inputName] = "");
                    var n = this.utilities.getUpdatedInput(t, this.input[this.options.inputName], this.caretPosition);
                    if (this.input[this.options.inputName] !== n && (!this.options.inputPattern || this.options.inputPattern && this.inputPatternIsValid(n))) {
                        if (this.options.maxLength && this.utilities.handleMaxLength(this.input, n)) return !1;
                        this.input[this.options.inputName] = this.utilities.getUpdatedInput(t, this.input[this.options.inputName], this.caretPosition, !0), e && console.log("Input changed:", this.input), this.options.syncInstanceInputs && this.syncInstanceInputs(), "function" === typeof this.options.onChange && this.options.onChange(this.input[this.options.inputName]), "function" === typeof this.options.onChangeAll && this.options.onChangeAll(this.input);
                    }
                    e && console.log("Key pressed:", t);
                }
            }, {
                key: "handleButtonMouseDown",
                value: function(t, e) {
                    var n = this;
                    this.options.preventMouseDownDefault && e.preventDefault(), this.options.stopMouseDownPropagation && e.stopPropagation(), e && e.target.classList.add(this.activeButtonClass), this.isMouseHold = !0, this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdTimeout && clearTimeout(this.holdTimeout), this.options.disableButtonHold || (this.holdTimeout = setTimeout(function() {
                        !n.isMouseHold || (t.includes("{") || t.includes("}")) && "{delete}" !== t && "{backspace}" !== t && "{bksp}" !== t && "{space}" !== t && "{tab}" !== t || (n.options.debug && console.log("Button held:", t), n.handleButtonHold(t, e)), clearTimeout(n.holdTimeout);
                    }, 500));
                }
            }, {
                key: "handleButtonMouseUp",
                value: function(t) {
                    var e = this;
                    this.recurseButtons(function(t) {
                        t.classList.remove(e.activeButtonClass);
                    }), this.isMouseHold = !1, this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), t && "function" === typeof this.options.onKeyReleased && this.options.onKeyReleased(t);
                }
            }, {
                key: "handleKeyboardContainerMouseDown",
                value: function(t) {
                    this.options.preventMouseDownDefault && t.preventDefault();
                }
            }, {
                key: "handleButtonHold",
                value: function(t) {
                    var e = this;
                    this.holdInteractionTimeout && clearTimeout(this.holdInteractionTimeout), this.holdInteractionTimeout = setTimeout(function() {
                        e.isMouseHold ? (e.handleButtonClicked(t), e.handleButtonHold(t)) : clearTimeout(e.holdInteractionTimeout);
                    }, 100);
                }
            }, {
                key: "syncInstanceInputs",
                value: function() {
                    var t = this;
                    this.dispatch(function(e) {
                        e.replaceInput(t.input), e.caretPosition = t.caretPosition;
                    });
                }
            }, {
                key: "clearInput",
                value: function(t) {
                    t = t || this.options.inputName, this.input[t] = "", this.caretPosition = 0, this.options.syncInstanceInputs && this.syncInstanceInputs();
                }
            }, {
                key: "getInput",
                value: function(t) {
                    return t = t || this.options.inputName, this.options.syncInstanceInputs && this.syncInstanceInputs(), this.input[t];
                }
            }, {
                key: "setInput",
                value: function(t, e) {
                    e = e || this.options.inputName, this.input[e] = t, this.options.syncInstanceInputs && this.syncInstanceInputs();
                }
            }, {
                key: "replaceInput",
                value: function(t) {
                    this.input = t;
                }
            }, {
                key: "setOptions",
                value: function(t) {
                    t = t || {}, this.options = Object.assign(this.options, t), this.onSetOptions(t), this.render();
                }
            }, {
                key: "onSetOptions",
                value: function(t) {
                    t.inputName && (this.options.debug && console.log("inputName changed. caretPosition reset."), this.caretPosition = null);
                }
            }, {
                key: "clear",
                value: function() {
                    this.keyboardDOM.innerHTML = "", this.keyboardDOM.className = this.keyboardDOMClass, this.buttonElements = {};
                }
            }, {
                key: "dispatch",
                value: function(t) {
                    if (!window.SimpleKeyboardInstances) throw console.warn("SimpleKeyboardInstances is not defined. Dispatch cannot be called."), new Error("INSTANCES_VAR_ERROR");
                    return Object.keys(window.SimpleKeyboardInstances).forEach(function(e) {
                        t(window.SimpleKeyboardInstances[e], e);
                    });
                }
            }, {
                key: "addButtonTheme",
                value: function(t, e) {
                    var n = this;
                    if (!e || !t) return !1;
                    t.split(" ").forEach(function(o) {
                        e.split(" ").forEach(function(e) {
                            n.options.buttonTheme || (n.options.buttonTheme = []);
                            var i = !1;
                            n.options.buttonTheme.map(function(t) {
                                if (t.class.split(" ").includes(e)) {
                                    i = !0;
                                    var n = t.buttons.split(" ");
                                    n.includes(o) || (i = !0, n.push(o), t.buttons = n.join(" "));
                                }
                                return t;
                            }), i || n.options.buttonTheme.push({
                                class: e,
                                buttons: t
                            });
                        });
                    }), this.render();
                }
            }, {
                key: "removeButtonTheme",
                value: function(t, e) {
                    var n = this;
                    if (!t && !e) return this.options.buttonTheme = [], this.render(), !1;
                    t && Array.isArray(this.options.buttonTheme) && this.options.buttonTheme.length && (t.split(" ").forEach(function(t, o) {
                        n.options.buttonTheme.map(function(o, i) {
                            if (e && e.includes(o.class) || !e) {
                                var r = o.buttons.split(" ").filter(function(e) {
                                    return e !== t;
                                });
                                r.length ? o.buttons = r.join(" ") : (n.options.buttonTheme.splice(i, 1), o = null);
                            }
                            return o;
                        });
                    }), this.render());
                }
            }, {
                key: "getButtonElement",
                value: function(t) {
                    var e, n = this.buttonElements[t];
                    return n && (e = n.length > 1 ? n : n[0]), e;
                }
            }, {
                key: "inputPatternIsValid",
                value: function(t) {
                    var e, n = this.options.inputPattern;
                    if ((e = n instanceof RegExp ? n : n[this.options.inputName]) && t) {
                        var o = e.test(t);
                        return this.options.debug && console.log('inputPattern ("'.concat(e, '"): ').concat(o ? "passed" : "did not pass!")), o;
                    }
                    return !0;
                }
            }, {
                key: "setEventListeners",
                value: function() {
                    !this.isFirstKeyboardInstance && this.allKeyboardInstances || (this.options.debug && console.log("Caret handling started (".concat(this.keyboardDOMClass, ")")), document.addEventListener("keyup", this.handleKeyUp), document.addEventListener("keydown", this.handleKeyDown), document.addEventListener("mouseup", this.handleMouseUp), document.addEventListener("touchend", this.handleTouchEnd));
                }
            }, {
                key: "handleKeyUp",
                value: function(t) {
                    this.caretEventHandler(t), this.options.physicalKeyboardHighlight && this.physicalKeyboard.handleHighlightKeyUp(t);
                }
            }, {
                key: "handleKeyDown",
                value: function(t) {
                    this.options.physicalKeyboardHighlight && this.physicalKeyboard.handleHighlightKeyDown(t);
                }
            }, {
                key: "handleMouseUp",
                value: function(t) {
                    this.caretEventHandler(t);
                }
            }, {
                key: "handleTouchEnd",
                value: function(t) {
                    this.caretEventHandler(t);
                }
            }, {
                key: "caretEventHandler",
                value: function(t) {
                    var e;
                    t.target.tagName && (e = t.target.tagName.toLowerCase()), this.dispatch(function(n) {
                        n.isMouseHold && (n.isMouseHold = !1), "textarea" !== e && "input" !== e || n.options.disableCaretPositioning ? n.options.disableCaretPositioning && (n.caretPosition = null) : (n.caretPosition = t.target.selectionStart, n.options.debug && console.log("Caret at: ", t.target.selectionStart, t.target.tagName.toLowerCase(), "(".concat(n.keyboardDOMClass, ")")));
                    });
                }
            }, {
                key: "recurseButtons",
                value: function(t) {
                    var e = this;
                    if (!t) return !1;
                    Object.keys(this.buttonElements).forEach(function(n) {
                        return e.buttonElements[n].forEach(t);
                    });
                }
            }, {
                key: "destroy",
                value: function() {
                    this.options.debug && console.log("Destroying simple-keyboard instance: ".concat(this.currentInstanceName)), document.removeEventListener("keyup", this.handleKeyUp), document.removeEventListener("keydown", this.handleKeyDown), document.removeEventListener("mouseup", this.handleMouseUp), document.removeEventListener("touchend", this.handleTouchEnd), document.onpointerup = null, document.ontouchend = null, document.ontouchcancel = null, document.onmouseup = null;
                    var t = function(t) {
                        t.onpointerdown = null, t.onpointerup = null, t.onpointercancel = null, t.ontouchstart = null, t.ontouchend = null, t.ontouchcancel = null, t.onclick = null, t.onmousedown = null, t.onmouseup = null, t.remove(), t = null;
                    };
                    this.recurseButtons(t), this.recurseButtons = null, t = null, this.keyboardDOM.onpointerdown = null, this.keyboardDOM.ontouchstart = null, this.keyboardDOM.onmousedown = null, this.clear(), window.SimpleKeyboardInstances[this.currentInstanceName] = null, delete window.SimpleKeyboardInstances[this.currentInstanceName], this.initialized = !1;
                }
            }, {
                key: "getButtonThemeClasses",
                value: function(t) {
                    var e = this.options.buttonTheme,
                        n = [];
                    return Array.isArray(e) && e.forEach(function(e) {
                        if (e.class && "string" === typeof e.class && e.buttons && "string" === typeof e.buttons) {
                            var o = e.class.split(" ");
                            e.buttons.split(" ").includes(t) && (n = [].concat(l(n), l(o)));
                        } else console.warn('Incorrect "buttonTheme". Please check the documentation.', e);
                    }), n;
                }
            }, {
                key: "setDOMButtonAttributes",
                value: function(t, e) {
                    var n = this.options.buttonAttributes;
                    Array.isArray(n) && n.forEach(function(n) {
                        n.attribute && "string" === typeof n.attribute && n.value && "string" === typeof n.value && n.buttons && "string" === typeof n.buttons ? n.buttons.split(" ").includes(t) && e(n.attribute, n.value) : console.warn('Incorrect "buttonAttributes". Please check the documentation.', n);
                    });
                }
            }, {
                key: "onTouchDeviceDetected",
                value: function() {
                    this.processAutoTouchEvents(), this.disableContextualWindow();
                }
            }, {
                key: "disableContextualWindow",
                value: function() {
                    window.oncontextmenu = function(t) {
                        if (t.target.classList.contains("hg-button")) return t.preventDefault(), t.stopPropagation(), !1;
                    };
                }
            }, {
                key: "processAutoTouchEvents",
                value: function() {
                    this.options.autoUseTouchEvents && (this.options.useTouchEvents = !0, this.options.debug && console.log("autoUseTouchEvents: Touch device detected, useTouchEvents enabled."));
                }
            }, {
                key: "onInit",
                value: function() {
                    this.options.debug && console.log("".concat(this.keyboardDOMClass, " Initialized")), this.setEventListeners(), "function" === typeof this.options.onInit && this.options.onInit();
                }
            }, {
                key: "beforeFirstRender",
                value: function() {
                    this.utilities.isTouchDevice() && this.onTouchDeviceDetected(), "function" === typeof this.options.beforeFirstRender && this.options.beforeFirstRender(), this.isFirstKeyboardInstance && this.utilities.pointerEventsSupported() && !this.options.useTouchEvents && !this.options.useMouseEvents && this.options.debug && console.log("Using PointerEvents as it is supported by this browser"), this.options.useTouchEvents && this.options.debug && console.log("useTouchEvents has been enabled. Only touch events will be used.");
                }
            }, {
                key: "beforeRender",
                value: function() {
                    "function" === typeof this.options.beforeRender && this.options.beforeRender();
                }
            }, {
                key: "onRender",
                value: function() {
                    "function" === typeof this.options.onRender && this.options.onRender();
                }
            }, {
                key: "onModulesLoaded",
                value: function() {
                    "function" === typeof this.options.onModulesLoaded && this.options.onModulesLoaded();
                }
            }, {
                key: "loadModules",
                value: function() {
                    var t = this;
                    Array.isArray(this.options.modules) && (this.options.modules.forEach(function(e) {
                        var n = new e;
                        if (n.constructor.name && "Function" !== n.constructor.name) {
                            var o = "module-".concat(t.utilities.camelCase(n.constructor.name));
                            t.keyboardPluginClasses = t.keyboardPluginClasses + " ".concat(o);
                        }
                        n.init(t);
                    }), this.keyboardPluginClasses = this.keyboardPluginClasses + " modules-loaded", this.render(), this.onModulesLoaded());
                }
            }, {
                key: "getModuleProp",
                value: function(t, e) {
                    return !!this.modules[t] && this.modules[t][e];
                }
            }, {
                key: "getModulesList",
                value: function() {
                    return Object.keys(this.modules);
                }
            }, {
                key: "parseRowDOMContainers",
                value: function(t, e, n, o) {
                    var i = this,
                        r = Array.from(t.children),
                        s = 0;
                    return r.length && n.forEach(function(n, u) {
                        var a = o[u];
                        if (!(a && a > n)) return !1;
                        var c = n - s,
                            l = a - s,
                            p = document.createElement("div");
                        p.className += "hg-button-container";
                        var f = "".concat(i.options.layoutName, "-r").concat(e, "c").concat(u);
                        p.setAttribute("data-skUID", f);
                        var h = r.splice(c, l - c + 1);
                        s = l - c, h.forEach(function(t) {
                            return p.appendChild(t);
                        }), r.splice(c, 0, p), t.innerHTML = "", r.forEach(function(e) {
                            return t.appendChild(e);
                        }), i.options.debug && console.log("rowDOMContainer", h, c, l, s + 1);
                    }), t;
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    this.clear(), this.initialized || this.beforeFirstRender(), this.beforeRender();
                    var e = "hg-layout-".concat(this.options.layoutName),
                        n = this.options.layout || c.getDefaultLayout(),
                        o = this.options.useTouchEvents || !1,
                        i = o ? "hg-touch-events" : "",
                        r = this.options.useMouseEvents || !1,
                        s = this.options.disableRowButtonContainers;
                    this.keyboardDOM.className += " ".concat(this.options.theme, " ").concat(e, " ").concat(this.keyboardPluginClasses, " ").concat(i), n[this.options.layoutName].forEach(function(e, n) {
                        var i = e.split(" "),
                            u = document.createElement("div");
                        u.className += "hg-row";
                        var a = [],
                            c = [];
                        i.forEach(function(e, i) {
                            var p, f = !s && e.includes("[") && e.length > 1,
                                h = !s && e.includes("]") && e.length > 1;
                            f && (a.push(i), e = e.replace(/\[/g, "")), h && (c.push(i), e = e.replace(/\]/g, ""));
                            var d = t.utilities.getButtonClass(e),
                                y = t.utilities.getButtonDisplayName(e, t.options.display, t.options.mergeDisplay),
                                b = t.options.useButtonTag ? "button" : "div",
                                m = document.createElement(b);
                            m.className += "hg-button ".concat(d), (p = m.classList).add.apply(p, l(t.getButtonThemeClasses(e))), t.setDOMButtonAttributes(e, function(t, e) {
                                m.setAttribute(t, e);
                            }), t.activeButtonClass = "hg-activeButton", !t.utilities.pointerEventsSupported() || o || r ? o ? (m.ontouchstart = function(n) {
                                t.handleButtonClicked(e), t.handleButtonMouseDown(e, n);
                            }, m.ontouchend = function() {
                                t.handleButtonMouseUp(e);
                            }, m.ontouchcancel = function() {
                                t.handleButtonMouseUp(e);
                            }) : (m.onclick = function() {
                                t.isMouseHold = !1, t.handleButtonClicked(e);
                            }, m.onmousedown = function(n) {
                                t.handleButtonMouseDown(e, n);
                            }, m.onmouseup = function() {
                                t.handleButtonMouseUp(e);
                            }) : (m.onpointerdown = function(n) {
                                t.handleButtonClicked(e), t.handleButtonMouseDown(e, n);
                            }, m.onpointerup = function() {
                                t.handleButtonMouseUp(e);
                            }, m.onpointercancel = function() {
                                t.handleButtonMouseUp(e);
                            }), m.setAttribute("data-skBtn", e);
                            var v = "".concat(t.options.layoutName, "-r").concat(n, "b").concat(i);
                            m.setAttribute("data-skBtnUID", v);
                            var g = document.createElement("span");
                            g.innerHTML = y, m.appendChild(g), t.buttonElements[e] || (t.buttonElements[e] = []), t.buttonElements[e].push(m), u.appendChild(m);
                        }), u = t.parseRowDOMContainers(u, n, a, c), t.keyboardDOM.appendChild(u);
                    }), this.onRender(), this.initialized || (this.initialized = !0, !this.utilities.pointerEventsSupported() || o || r ? o ? (document.ontouchend = function() {
                        return t.handleButtonMouseUp();
                    }, document.ontouchcancel = function() {
                        return t.handleButtonMouseUp();
                    }, this.keyboardDOM.ontouchstart = function(e) {
                        return t.handleKeyboardContainerMouseDown(e);
                    }) : o || (document.onmouseup = function() {
                        return t.handleButtonMouseUp();
                    }, this.keyboardDOM.onmousedown = function(e) {
                        return t.handleKeyboardContainerMouseDown(e);
                    }) : (document.onpointerup = function() {
                        return t.handleButtonMouseUp();
                    }, this.keyboardDOM.onpointerdown = function(e) {
                        return t.handleKeyboardContainerMouseDown(e);
                    }), this.onInit());
                }
            }]) && f(e.prototype, n), t;
        }();
        e.default = d;
    }]);
}),
function(t) {
    var e = {};

    function n(o) {
        if (e[o]) return e[o].exports;
        var i = e[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return t[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }
    n.m = t, n.c = e, n.d = function(t, e, o) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: o
        });
    }, n.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        });
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var o = Object.create(null);
        if (n.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" !== typeof t);
            for (var i in t) n.d(o, i, function(e) {
                return t[e];
            }.bind(null, i));
        return o;
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default;
        } : function() {
            return t;
        };
        return n.d(e, "a", e), e;
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = "", n(n.s = 1);
}([function(t, e, n) {
    "use strict";

    function o(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            e && (o = o.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), n.push.apply(n, o);
        }
        return n;
    }

    function i(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null !== arguments[e] ? arguments[e] : {};
            e % 2 ? o(Object(n), !0).forEach(function(e) {
                r(t, e, n[e]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
            });
        }
        return t;
    }

    function r(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t;
    }
    n.r(e), n(41), n(51), n(59), n(40), n(65), n(67);
    var s = window.SimpleKeyboard.default,
        u = document.querySelector("#search-input"),
        a = {
            onChange: function(t) {
                return function(t) {
                    u.value = t, c.setInput(t), console.log("Input changed", t);
                }(t);
            },
            onKeyPress: function(t) {
                return function(t) {
                    console.log("Button pressed", t);
                }(t);
            },
            theme: "simple-keyboard hg-theme-default hg-layout-default",
            physicalKeyboardHighlight: !0,
            syncInstanceInputs: !0,
            mergeDisplay: !0,
            debug: !0
        },
        c = new s(".keyboard", i({}, a, {
            layout: {
                default: ["q w e r t y u i o p {backspace}", "a s d f g h j k l", "z x c v b n m", "{space}"]
            },
            display: {
                "{backspace}": "⌫",
                "{space}": "␣"
            }
        }));
    new s(".numpad", i({}, a, {
        layout: {
            default: ["{numpad7} {numpad8} {numpad9}", "{numpad4} {numpad5} {numpad6}", "{numpad1} {numpad2} {numpad3}", "{numpad0}"]
        }
    })), u.addEventListener("input", function(t) {
        var e = document.querySelector(".input").value;
        c.setInput(e);
    }), document.addEventListener("keydown", function(t) {});
}, function(t, e, n) {
    t.exports = n(0);
}, , , function(t, e) {
    var n = t.exports = "undefined" !== typeof window && window.Math === Math ? window : "undefined" !== typeof self && self.Math === Math ? self : Function("return this")();
    "number" === typeof __g && (__g = n);
}, function(t, e, n) {
    var o = n(20)("wks"),
        i = n(17),
        r = n(4).Symbol,
        s = "function" === typeof r;
    (t.exports = function(t) {
        return o[t] || (o[t] = s && r[t] || (s ? r : i)("Symbol." + t));
    }).store = o;
}, function(t, e, n) {
    var o = n(7),
        i = n(15);
    t.exports = n(10) ? function(t, e, n) {
        return o.f(t, e, i(1, n));
    } : function(t, e, n) {
        return t[e] = n, t;
    };
}, function(t, e, n) {
    var o = n(12),
        i = n(32),
        r = n(22),
        s = Object.defineProperty;
    e.f = n(10) ? Object.defineProperty : function(t, e, n) {
        if (o(t), e = r(e, !0), o(n), i) try {
            return s(t, e, n);
        } catch (t) {}
        if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
        return "value" in n && (t[e] = n.value), t;
    };
}, function(t, e) {
    var n = {}.hasOwnProperty;
    t.exports = function(t, e) {
        return n.call(t, e);
    };
}, function(t, e, n) {
    var o = n(46),
        i = n(35);
    t.exports = function(t) {
        return o(i(t));
    };
}, function(t, e, n) {
    t.exports = !n(14)(function() {
        return 7 !== Object.defineProperty({}, "a", {
            get: function() {
                return 7;
            }
        }).a;
    });
}, function(t, e) {
    var n = t.exports = {
        version: "2.6.9"
    };
    "number" === typeof __e && (__e = n);
}, function(t, e, n) {
    var o = n(13);
    t.exports = function(t) {
        if (!o(t)) throw TypeError(t + " is not an object!");
        return t;
    };
}, function(t, e) {
    t.exports = function(t) {
        return "object" === typeof t ? null !== t : "function" === typeof t;
    };
}, function(t, e) {
    t.exports = function(t) {
        try {
            return !!t();
        } catch (t) {
            return !0;
        }
    };
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            enumerable: !(1 & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: e
        };
    };
}, function(t, e, n) {
    var o = n(4),
        i = n(6),
        r = n(8),
        s = n(17)("src"),
        u = n(42),
        a = ("" + u).split("toString");
    n(11).inspectSource = function(t) {
        return u.call(t);
    }, (t.exports = function(t, e, n, u) {
        var c = "function" === typeof n;
        c && (r(n, "name") || i(n, "name", e)), t[e] !== n && (c && (r(n, s) || i(n, s, t[e] ? "" + t[e] : a.join(String(e)))), t === o ? t[e] = n : u ? t[e] ? t[e] = n : i(t, e, n) : (delete t[e], i(t, e, n)));
    })(Function.prototype, "toString", function() {
        return "function" === typeof this && this[s] || u.call(this);
    });
}, function(t, e) {
    var n = 0,
        o = Math.random();
    t.exports = function(t) {
        return "Symbol(".concat(void 0 === t ? "" : t, ")_", (++n + o).toString(36));
    };
}, function(t, e, n) {
    var o = n(34),
        i = n(26);
    t.exports = Object.keys || function(t) {
        return o(t, i);
    };
}, function(t, e, n) {
    var o = n(4),
        i = n(11),
        r = n(6),
        s = n(16),
        u = n(43),
        a = function(t, e, n) {
            var c, l, p, f, h = t & a.F,
                d = t & a.G,
                y = t & a.S,
                b = t & a.P,
                m = t & a.B,
                v = d ? o : y ? o[e] || (o[e] = {}) : (o[e] || {}).prototype,
                g = d ? i : i[e] || (i[e] = {}),
                w = g.prototype || (g.prototype = {});
            for (c in d && (n = e), n) p = ((l = !h && v && void 0 !== v[c]) ? v : n)[c], f = m && l ? u(p, o) : b && "function" === typeof p ? u(Function.call, p) : p, v && s(v, c, p, t & a.U), g[c] !== p && r(g, c, f), b && w[c] !== p && (w[c] = p);
        };
    o.core = i, a.F = 1, a.G = 2, a.S = 4, a.P = 8, a.B = 16, a.W = 32, a.U = 64, a.R = 128, t.exports = a;
}, function(t, e, n) {
    var o = n(11),
        i = n(4),
        r = i["__core-js_shared__"] || (i["__core-js_shared__"] = {});
    (t.exports = function(t, e) {
        return r[t] || (r[t] = void 0 !== e ? e : {});
    })("versions", []).push({
        version: o.version,
        mode: n(21) ? "pure" : "global",
        copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
}, function(t, e) {
    t.exports = !1;
}, function(t, e, n) {
    var o = n(13);
    t.exports = function(t, e) {
        if (!o(t)) return t;
        var n, i;
        if (e && "function" === typeof(n = t.toString) && !o(i = n.call(t))) return i;
        if ("function" === typeof(n = t.valueOf) && !o(i = n.call(t))) return i;
        if (!e && "function" === typeof(n = t.toString) && !o(i = n.call(t))) return i;
        throw TypeError("Can't convert object to primitive value");
    };
}, function(t, e, n) {
    var o = n(34),
        i = n(26).concat("length", "prototype");
    e.f = Object.getOwnPropertyNames || function(t) {
        return o(t, i);
    };
}, function(t, e) {
    var n = {}.toString;
    t.exports = function(t) {
        return n.call(t).slice(8, -1);
    };
}, function(t, e, n) {
    var o = n(20)("keys"),
        i = n(17);
    t.exports = function(t) {
        return o[t] || (o[t] = i(t));
    };
}, function(t, e) {
    t.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",");
}, function(t, e) {
    e.f = Object.getOwnPropertySymbols;
}, function(t, e) {
    e.f = {}.propertyIsEnumerable;
}, function(t, e, n) {
    var o = n(7).f,
        i = n(8),
        r = n(5)("toStringTag");
    t.exports = function(t, e, n) {
        t && !i(t = n ? t : t.prototype, r) && o(t, r, {
            configurable: !0,
            value: e
        });
    };
}, function(t, e, n) {
    var o = n(35);
    t.exports = function(t) {
        return Object(o(t));
    };
}, function(t, e) {
    t.exports = {};
}, function(t, e, n) {
    t.exports = !n(10) && !n(14)(function() {
        return 7 !== Object.defineProperty(n(33)("div"), "a", {
            get: function() {
                return 7;
            }
        }).a;
    });
}, function(t, e, n) {
    var o = n(13),
        i = n(4).document,
        r = o(i) && o(i.createElement);
    t.exports = function(t) {
        return r ? i.createElement(t) : {};
    };
}, function(t, e, n) {
    var o = n(8),
        i = n(9),
        r = n(47)(!1),
        s = n(25)("IE_PROTO");
    t.exports = function(t, e) {
        var n, u = i(t),
            a = 0,
            c = [];
        for (n in u) n !== s && o(u, n) && c.push(n);
        for (; e.length > a;) o(u, n = e[a++]) && (~r(c, n) || c.push(n));
        return c;
    };
}, function(t, e) {
    t.exports = function(t) {
        if (null === t) throw TypeError("Can't call method on  " + t);
        return t;
    };
}, function(t, e) {
    var n = Math.ceil,
        o = Math.floor;
    t.exports = function(t) {
        return isNaN(t = +t) ? 0 : (t > 0 ? o : n)(t);
    };
}, function(t, e, n) {
    var o = n(28),
        i = n(15),
        r = n(9),
        s = n(22),
        u = n(8),
        a = n(32),
        c = Object.getOwnPropertyDescriptor;
    e.f = n(10) ? c : function(t, e) {
        if (t = r(t), e = s(e, !0), a) try {
            return c(t, e);
        } catch (t) {}
        if (u(t, e)) return i(!o.f.call(t, e), t[e]);
    };
}, function(t, e, n) {
    e.f = n(5);
}, function(t, e, n) {
    var o = n(12),
        i = n(56),
        r = n(26),
        s = n(25)("IE_PROTO"),
        u = function() {},
        a = function() {
            var t, e = n(33)("iframe"),
                o = r.length;
            for (e.style.display = "none", n(57).appendChild(e), e.src = "javascript:", (t = e.contentWindow.document).open(), t.write("<script>document.F=Object<\/script>"), t.close(), a = t.F; o--;) delete a.prototype[r[o]];
            return a();
        };
    t.exports = Object.create || function(t, e) {
        var n;
        return null !== t ? (u.prototype = o(t), n = new u, u.prototype = null, n[s] = t) : n = a(), void 0 === e ? n : i(n, e);
    };
}, function(t, e, n) {
    "use strict";
    var o = n(60),
        i = n(61),
        r = n(31),
        s = n(9);
    t.exports = n(62)(Array, "Array", function(t, e) {
        this._t = s(t), this._i = 0, this._k = e;
    }, function() {
        var t = this._t,
            e = this._k,
            n = this._i++;
        return !t || n >= t.length ? (this._t = void 0, i(1)) : i(0, "keys" === e ? n : "values" === e ? t[n] : [n, t[n]]);
    }, "values"), r.Arguments = r.Array, o("keys"), o("values"), o("entries");
}, function(t, e, n) {
    var o = n(19),
        i = n(45),
        r = n(9),
        s = n(37),
        u = n(50);
    o(o.S, "Object", {
        getOwnPropertyDescriptors: function(t) {
            for (var e, n, o = r(t), a = s.f, c = i(o), l = {}, p = 0; c.length > p;) void 0 !== (n = a(o, e = c[p++])) && u(l, e, n);
            return l;
        }
    });
}, function(t, e, n) {
    t.exports = n(20)("native-function-to-string", Function.toString);
}, function(t, e, n) {
    var o = n(44);
    t.exports = function(t, e, n) {
        if (o(t), void 0 === e) return t;
        switch (n) {
            case 1:
                return function(n) {
                    return t.call(e, n);
                };
            case 2:
                return function(n, o) {
                    return t.call(e, n, o);
                };
            case 3:
                return function(n, o, i) {
                    return t.call(e, n, o, i);
                };
        }
        return function() {
            return t.apply(e, arguments);
        };
    };
}, function(t, e) {
    t.exports = function(t) {
        if ("function" !== typeof t) throw TypeError(t + " is not a function!");
        return t;
    };
}, function(t, e, n) {
    var o = n(23),
        i = n(27),
        r = n(12),
        s = n(4).Reflect;
    t.exports = s && s.ownKeys || function(t) {
        var e = o.f(r(t)),
            n = i.f;
        return n ? e.concat(n(t)) : e;
    };
}, function(t, e, n) {
    var o = n(24);
    t.exports = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
        return "String" === o(t) ? t.split("") : Object(t);
    };
}, function(t, e, n) {
    var o = n(9),
        i = n(48),
        r = n(49);
    t.exports = function(t) {
        return function(e, n, s) {
            var u, a = o(e),
                c = i(a.length),
                l = r(s, c);
            if (t && n !== n) {
                for (; c > l;)
                    if ((u = a[l++]) !== u) return !0;
            } else
                for (; c > l; l++)
                    if ((t || l in a) && a[l] === n) return t || l || 0; return !t && -1;
        };
    };
}, function(t, e, n) {
    var o = n(36),
        i = Math.min;
    t.exports = function(t) {
        return t > 0 ? i(o(t), 9007199254740991) : 0;
    };
}, function(t, e, n) {
    var o = n(36),
        i = Math.max,
        r = Math.min;
    t.exports = function(t, e) {
        return (t = o(t)) < 0 ? i(t + e, 0) : r(t, e);
    };
}, function(t, e, n) {
    "use strict";
    var o = n(7),
        i = n(15);
    t.exports = function(t, e, n) {
        e in t ? o.f(t, e, i(0, n)) : t[e] = n;
    };
}, function(t, e, n) {
    "use strict";
    var o = n(4),
        i = n(8),
        r = n(10),
        s = n(19),
        u = n(16),
        a = n(52).KEY,
        c = n(14),
        l = n(20),
        p = n(29),
        f = n(17),
        h = n(5),
        d = n(38),
        y = n(53),
        b = n(54),
        m = n(55),
        v = n(12),
        g = n(13),
        w = n(30),
        O = n(9),
        k = n(22),
        S = n(15),
        P = n(39),
        M = n(58),
        E = n(37),
        x = n(27),
        T = n(7),
        j = n(18),
        C = E.f,
        D = T.f,
        I = M.f,
        L = o.Symbol,
        N = o.JSON,
        A = N && N.stringify,
        B = h("_hidden"),
        K = h("toPrimitive"),
        _ = {}.propertyIsEnumerable,
        R = l("symbol-registry"),
        F = l("symbols"),
        H = l("op-symbols"),
        U = Object.prototype,
        z = "function" === typeof L && !!x.f,
        V = o.QObject,
        G = !V || !V.prototype || !V.prototype.findChild,
        W = r && c(function() {
            return 7 !== P(D({}, "a", {
                get: function() {
                    return D(this, "a", {
                        value: 7
                    }).a;
                }
            })).a;
        }) ? function(t, e, n) {
            var o = C(U, e);
            o && delete U[e], D(t, e, n), o && t !== U && D(U, e, o);
        } : D,
        q = function(t) {
            var e = F[t] = P(L.prototype);
            return e._k = t, e;
        },
        J = z && "symbol" === typeof L.iterator ? function(t) {
            return "symbol" === typeof t;
        } : function(t) {
            return t instanceof L;
        },
        Y = function(t, e, n) {
            return t === U && Y(H, e, n), v(t), e = k(e, !0), v(n), i(F, e) ? (n.enumerable ? (i(t, B) && t[B][e] && (t[B][e] = !1), n = P(n, {
                enumerable: S(0, !1)
            })) : (i(t, B) || D(t, B, S(1, {})), t[B][e] = !0), W(t, e, n)) : D(t, e, n);
        },
        Q = function(t, e) {
            v(t);
            for (var n, o = b(e = O(e)), i = 0, r = o.length; r > i;) Y(t, n = o[i++], e[n]);
            return t;
        },
        X = function(t) {
            var e = _.call(this, t = k(t, !0));
            return !(this === U && i(F, t) && !i(H, t)) && (!(e || !i(this, t) || !i(F, t) || i(this, B) && this[B][t]) || e);
        },
        Z = function(t, e) {
            if (t = O(t), e = k(e, !0), t !== U || !i(F, e) || i(H, e)) {
                var n = C(t, e);
                return !n || !i(F, e) || i(t, B) && t[B][e] || (n.enumerable = !0), n;
            }
        },
        $ = function(t) {
            for (var e, n = I(O(t)), o = [], r = 0; n.length > r;) i(F, e = n[r++]) || e === B || e === a || o.push(e);
            return o;
        },
        tt = function(t) {
            for (var e, n = t === U, o = I(n ? H : O(t)), r = [], s = 0; o.length > s;) !i(F, e = o[s++]) || n && !i(U, e) || r.push(F[e]);
            return r;
        };
    z || (u((L = function() {
        if (this instanceof L) throw TypeError("Symbol is not a constructor!");
        var t = f(arguments.length > 0 ? arguments[0] : void 0),
            e = function(n) {
                this === U && e.call(H, n), i(this, B) && i(this[B], t) && (this[B][t] = !1), W(this, t, S(1, n));
            };
        return r && G && W(U, t, {
            configurable: !0,
            set: e
        }), q(t);
    }).prototype, "toString", function() {
        return this._k;
    }), E.f = Z, T.f = Y, n(23).f = M.f = $, n(28).f = X, x.f = tt, r && !n(21) && u(U, "propertyIsEnumerable", X, !0), d.f = function(t) {
        return q(h(t));
    }), s(s.G + s.W + s.F * !z, {
        Symbol: L
    });
    for (var et = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), nt = 0; et.length > nt;) h(et[nt++]);
    for (var ot = j(h.store), it = 0; ot.length > it;) y(ot[it++]);
    s(s.S + s.F * !z, "Symbol", {
        for: function(t) {
            return i(R, t += "") ? R[t] : R[t] = L(t);
        },
        keyFor: function(t) {
            if (!J(t)) throw TypeError(t + " is not a symbol!");
            for (var e in R)
                if (R[e] === t) return e;
        },
        useSetter: function() {
            G = !0;
        },
        useSimple: function() {
            G = !1;
        }
    }), s(s.S + s.F * !z, "Object", {
        create: function(t, e) {
            return void 0 === e ? P(t) : Q(P(t), e);
        },
        defineProperty: Y,
        defineProperties: Q,
        getOwnPropertyDescriptor: Z,
        getOwnPropertyNames: $,
        getOwnPropertySymbols: tt
    });
    var rt = c(function() {
        x.f(1);
    });
    s(s.S + s.F * rt, "Object", {
        getOwnPropertySymbols: function(t) {
            return x.f(w(t));
        }
    }), N && s(s.S + s.F * (!z || c(function() {
        var t = L();
        return "[null]" !== A([t]) || "{}" !== A({
            a: t
        }) || "{}" !== A(Object(t));
    })), "JSON", {
        stringify: function(t) {
            for (var e, n, o = [t], i = 1; arguments.length > i;) o.push(arguments[i++]);
            if (n = e = o[1], (g(e) || void 0 !== t) && !J(t)) return m(e) || (e = function(t, e) {
                if ("function" === typeof n && (e = n.call(this, t, e)), !J(e)) return e;
            }), o[1] = e, A.apply(N, o);
        }
    }), L.prototype[K] || n(6)(L.prototype, K, L.prototype.valueOf), p(L, "Symbol"), p(Math, "Math", !0), p(o.JSON, "JSON", !0);
}, function(t, e, n) {
    var o = n(17)("meta"),
        i = n(13),
        r = n(8),
        s = n(7).f,
        u = 0,
        a = Object.isExtensible || function() {
            return !0;
        },
        c = !n(14)(function() {
            return a(Object.preventExtensions({}));
        }),
        l = function(t) {
            s(t, o, {
                value: {
                    i: "O" + ++u,
                    w: {}
                }
            });
        },
        p = t.exports = {
            KEY: o,
            NEED: !1,
            fastKey: function(t, e) {
                if (!i(t)) return "symbol" === typeof t ? t : ("string" === typeof t ? "S" : "P") + t;
                if (!r(t, o)) {
                    if (!a(t)) return "F";
                    if (!e) return "E";
                    l(t);
                }
                return t[o].i;
            },
            getWeak: function(t, e) {
                if (!r(t, o)) {
                    if (!a(t)) return !0;
                    if (!e) return !1;
                    l(t);
                }
                return t[o].w;
            },
            onFreeze: function(t) {
                return c && p.NEED && a(t) && !r(t, o) && l(t), t;
            }
        };
}, function(t, e, n) {
    var o = n(4),
        i = n(11),
        r = n(21),
        s = n(38),
        u = n(7).f;
    t.exports = function(t) {
        var e = i.Symbol || (i.Symbol = r ? {} : o.Symbol || {});
        "_" === t.charAt(0) || t in e || u(e, t, {
            value: s.f(t)
        });
    };
}, function(t, e, n) {
    var o = n(18),
        i = n(27),
        r = n(28);
    t.exports = function(t) {
        var e = o(t),
            n = i.f;
        if (n)
            for (var s, u = n(t), a = r.f, c = 0; u.length > c;) a.call(t, s = u[c++]) && e.push(s);
        return e;
    };
}, function(t, e, n) {
    var o = n(24);
    t.exports = Array.isArray || function(t) {
        return "Array" === o(t);
    };
}, function(t, e, n) {
    var o = n(7),
        i = n(12),
        r = n(18);
    t.exports = n(10) ? Object.defineProperties : function(t, e) {
        i(t);
        for (var n, s = r(e), u = s.length, a = 0; u > a;) o.f(t, n = s[a++], e[n]);
        return t;
    };
}, function(t, e, n) {
    var o = n(4).document;
    t.exports = o && o.documentElement;
}, function(t, e, n) {
    var o = n(9),
        i = n(23).f,
        r = {}.toString,
        s = "object" === typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
    t.exports.f = function(t) {
        return s && "[object Window]" === r.call(t) ? function(t) {
            try {
                return i(t);
            } catch (t) {
                return s.slice();
            }
        }(t) : i(o(t));
    };
}, function(t, e, n) {
    for (var o = n(40), i = n(18), r = n(16), s = n(4), u = n(6), a = n(31), c = n(5), l = c("iterator"), p = c("toStringTag"), f = a.Array, h = {
            CSSRuleList: !0,
            CSSStyleDeclaration: !1,
            CSSValueList: !1,
            ClientRectList: !1,
            DOMRectList: !1,
            DOMStringList: !1,
            DOMTokenList: !0,
            DataTransferItemList: !1,
            FileList: !1,
            HTMLAllCollection: !1,
            HTMLCollection: !1,
            HTMLFormElement: !1,
            HTMLSelectElement: !1,
            MediaList: !0,
            MimeTypeArray: !1,
            NamedNodeMap: !1,
            NodeList: !0,
            PaintRequestList: !1,
            Plugin: !1,
            PluginArray: !1,
            SVGLengthList: !1,
            SVGNumberList: !1,
            SVGPathSegList: !1,
            SVGPointList: !1,
            SVGStringList: !1,
            SVGTransformList: !1,
            SourceBufferList: !1,
            StyleSheetList: !0,
            TextTrackCueList: !1,
            TextTrackList: !1,
            TouchList: !1
        }, d = i(h), y = 0; y < d.length; y++) {
        var b, m = d[y],
            v = h[m],
            g = s[m],
            w = g && g.prototype;
        if (w && (w[l] || u(w, l, f), w[p] || u(w, p, m), a[m] = f, v))
            for (b in o) w[b] || r(w, b, o[b], !0);
    }
}, function(t, e, n) {
    var o = n(5)("unscopables"),
        i = Array.prototype;
    null === i[o] && n(6)(i, o, {}), t.exports = function(t) {
        i[o][t] = !0;
    };
}, function(t, e) {
    t.exports = function(t, e) {
        return {
            value: e,
            done: !!t
        };
    };
}, function(t, e, n) {
    "use strict";
    var o = n(21),
        i = n(19),
        r = n(16),
        s = n(6),
        u = n(31),
        a = n(63),
        c = n(29),
        l = n(64),
        p = n(5)("iterator"),
        f = !([].keys && "next" in [].keys()),
        h = function() {
            return this;
        };
    t.exports = function(t, e, n, d, y, b, m) {
        a(n, e, d);
        var v, g, w, O = function(t) {
                if (!f && t in M) return M[t];
                switch (t) {
                    case "keys":
                    case "values":
                        return function() {
                            return new n(this, t);
                        };
                }
                return function() {
                    return new n(this, t);
                };
            },
            k = e + " Iterator",
            S = "values" === y,
            P = !1,
            M = t.prototype,
            E = M[p] || M["@@iterator"] || y && M[y],
            x = E || O(y),
            T = y ? S ? O("entries") : x : void 0,
            j = "Array" === e && M.entries || E;
        if (j && (w = l(j.call(new t))) !== Object.prototype && w.next && (c(w, k, !0), o || "function" === typeof w[p] || s(w, p, h)), S && E && "values" !== E.name && (P = !0, x = function() {
                return E.call(this);
            }), o && !m || !f && !P && M[p] || s(M, p, x), u[e] === x, u[k] === h, y);
            if (v === {
                    values: S ? x : O("values"),
                    keys: b ? x : O("keys"),
                    entries: T
                }, m)
                for (g in v) g in M || r(M, g, v[g]);
            else i(i.P + i.F * (f || P), e, v);
        return v;
    };
}, function(t, e, n) {
    "use strict";
    var o = n(39),
        i = n(15),
        r = n(29),
        s = {};
    n(6)(s, n(5)("iterator"), function() {
        return this;
    }), t.exports = function(t, e, n) {
        t.prototype = o(s, {
            next: i(1, n)
        }), r(t, e + " Iterator");
    };
}, function(t, e, n) {
    var o = n(8),
        i = n(30),
        r = n(25)("IE_PROTO"),
        s = Object.prototype;
    t.exports = Object.getPrototypeOf || function(t) {
        return t = i(t), o(t, r) ? t[r] : "function" === typeof t.constructor && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? s : null;
    };
}, function(t, e, n) {
    "use strict";
    var o = n(66),
        i = {};
    i[n(5)("toStringTag")] = "z", i + "" !== "[object z]" && n(16)(Object.prototype, "toString", function() {
        return "[object " + o(this) + "]";
    }, !0);
}, function(t, e, n) {
    var o = n(24),
        i = n(5)("toStringTag"),
        r = "Arguments" === o(function() {
            return arguments;
        }());
    t.exports = function(t) {
        var e, n, s;
        return void 0 === t ? "Undefined" : null === t ? "Null" : "string" === typeof(n = function(t, e) {
            try {
                return t[e];
            } catch (t) {}
        }(e = Object(t), i)) ? n : r ? o(e) : "Object" === (s = o(e)) && "function" === typeof e.callee ? "Arguments" : s;
    };
}, function(t, e, n) {
    var o = n(30),
        i = n(18);
    n(68)("keys", function() {
        return function(t) {
            return i(o(t));
        };
    });
}, function(t, e, n) {
    var o = n(19),
        i = n(11),
        r = n(14);
    t.exports = function(t, e) {
        var n = (i.Object || {})[t] || Object[t],
            s = {};
        s[t] = e(n), o(o.S + o.F * r(function() {
            n(1);
        }), "Object", s);
    };
}]);
