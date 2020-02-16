import {collectedUrlValues} from "../parse-url.js";

document.addEventListener("DOMContentLoaded", () => {
    const hiddenInputs = document.getElementsByClassName("hidden-input");

    function setHiddenInputsValues() {
        for (let i = 0; i < hiddenInputs.length; i++) {
            hiddenInputs[i].value = collectedUrlValues[i];
        }
    }

    (function(){
        setHiddenInputsValues();
    })();
});