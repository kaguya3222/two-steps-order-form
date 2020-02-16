import {collectedUrlValues} from "../parse-url.js";
import {collectedUrlNames} from "../parse-url.js";

document.addEventListener("DOMContentLoaded", () => {
    const resultBlock = document.getElementsByClassName("result-block")[0];

    function showResult() {
        resultBlock.innerHTML = "";

        for (let i = 0; i < collectedUrlNames.length; i++) {
            let resultItem = document.createElement("p");
            resultItem.innerHTML = `${collectedUrlNames[i]}: ${collectedUrlValues[i]}`;

            resultBlock.appendChild(resultItem);
        }
    }

    (function() {
        showResult();
    })();
});