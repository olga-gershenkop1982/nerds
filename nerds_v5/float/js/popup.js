/**
 * Created by User on 31.03.2019.
 */
var button = document.querySelector(".btn-to-write");
var popupForm = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-close");
var form = popupForm.querySelector(".feedback-form");
var user = popupForm.querySelector("[name=user]");
var email = popupForm.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("user");
} catch(err) {
    isStorageSupport = false;
}

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupForm.classList.add("modal-show");

    if(storage) {
        user.value = storage;
        email.focus();
    } else {
        user.focus();
    }
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupForm.classList.remove("modal-show");
    popupForm.classList.remove("modal-error");
});

window.addEventListener("keydown", function (evt) {
    if(evt.keyCode === 27) {
        evt.preventDefault();

        if(popupForm.classList.contains("modal-show")) {
            popupForm.classList.remove("modal-show");
            popupForm.classList.remove("modal-error");
        }
    }
});

form.addEventListener("submit", function (evt) {
    if(!user.value || !email.value) {
        evt.preventDefault();
        popupForm.classList.remove("modal-error");
        popupForm.offsetWidth = popupForm.offsetWidth;
        popupForm.classList.add("modal-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("user", user.value);
        }
    }
});
