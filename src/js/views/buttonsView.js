import { TIMEOUT_SEC } from "../config";

class buttonsView {
  _btnOpen = document.querySelector(".button");
  _btnClose = document.querySelector(".close");
  _btnCopyText = document.querySelector(".copyText");
  _btnCopy = document.querySelector(".copy");
  _popup = document.querySelector(".popup");
  _container = document.querySelector(".container");
  _overlay = document.querySelector(".overlay");
  _changeCopyButtonTextTimer;

  constructor() {
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
    this._addHandlerCopyBtn();
  }

  toggleWindow() {
    this._overlay.classList.toggle("hidden");
    this._popup.classList.toggle("hidden");
    this._changeCopyButtonText();
  }

  _addHandlerCopyBtn() {
    this._btnCopy.addEventListener(
      "click",
      this._changeCopyButtonText.bind(this)
    );
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener("click", this.toggleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener("click", this.toggleWindow.bind(this));
    this._overlay.addEventListener("click", this.toggleWindow.bind(this));
  }

  _changeCopyButtonText() {
    clearTimeout(this._changeCopyButtonTextTimer);
    this._btnCopyText.textContent = "Copied to clipboard ✔";
    this._changeCopyButtonTextTimer = setTimeout(() => {
      this._btnCopyText.textContent = "Copy";
    }, TIMEOUT_SEC * 1000);
  }
}

export default new buttonsView();
