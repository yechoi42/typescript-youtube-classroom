var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);
const wait = (delay) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve) => setTimeout(resolve, delay));
});
const removeChildNodes = (element) => {
    while (element === null || element === void 0 ? void 0 : element.hasChildNodes()) {
        element === null || element === void 0 ? void 0 : element.removeChild(element.childNodes[0]);
    }
};
const removeInnerHTML = (element) => {
    if (element) {
        element.innerHTML = '';
    }
};
const setDataKey = (element, key, text) => {
    if (element) {
        element.dataset[`${key}`] = text;
    }
};
const showSnackBar = (text) => __awaiter(void 0, void 0, void 0, function* () {
    const snackbar = $('#snackbar');
    if (snackbar) {
        snackbar.innerHTML = text;
        snackbar.classList.add('show');
        yield wait(2000);
        snackbar.classList.remove('show');
    }
});
export { $, $$, wait, removeChildNodes, removeInnerHTML, setDataKey, showSnackBar };
