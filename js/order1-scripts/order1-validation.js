import {errorsMessages, errorsMessagesTitles} from "./error-names.js";
import {errorsStatuses, errorsStatusesTitles} from "./errors-statuses.js";
import {regExps} from "./fields-regExps.js";

document.addEventListener("DOMContentLoaded", () => {
    const mainForm = document.getElementsByClassName("first-form")[0];

    const inputNodes = document.getElementsByClassName("customer-info-input");
    const errorNodes = document.getElementsByClassName("error-text");

    function checkForEmpty(inputField, error) {
        if (inputField.value === "") {
            makeFieldInvalid(inputField, error, errorsMessages.commonError);
        }
    }

    function hideError(error) {
        error.style.display = "none";
    }

    function showError(error, errorMsg) {
        error.textContent = errorMsg;
        error.style.display = "block";
    }

    function addAndRemoveClass(node, newClass, removableClass) {
        node.classList.add(newClass);
        node.classList.remove(removableClass);
    }

    function makeFieldValid(field, fieldError, fieldErrorStatusName) {
        addAndRemoveClass(field, "valid-input", "invalid-input");
        hideError(fieldError);
        changeErrorStatus(false, fieldErrorStatusName);
    }

    function makeFieldInvalid(field, fieldError, errorMsg, fieldErrorStatusName) {
        addAndRemoveClass(field, "invalid-input", "valid-input");
        showError(fieldError, errorMsg);
        changeErrorStatus(true, fieldErrorStatusName);
    }

    function changeErrorStatus(changeFlag, errorStatusName) {
         errorsStatuses[errorStatusName] = changeFlag;
    }

    function validateField(field, pattern, fieldError, errorStatusName,errorName) {
        let fieldValue = field.value;

        pattern.test(fieldValue) ? makeFieldValid(field, fieldError, errorStatusName)
                                    : makeFieldInvalid(field, fieldError, errorsMessages[errorName], errorStatusName);
    }

    function setEventForField(event, field, pattern, fieldError, errorStatusName, errorName) {
        field.addEventListener(event, () => {
            validateField(field, pattern, fieldError, errorStatusName, errorName);
            checkForEmpty(field, fieldError);
        });
    }

    function resetAllErrors() {
        for (let property in errorsStatuses) {
            errorsStatuses[property] = false;
        }
    }

    function setEventsForAllInputs() {
        let i = 0;

        for (let property in regExps) {
            setEventForField("focusout", inputNodes[i], regExps[property], errorNodes[i],
                errorsStatusesTitles[i], errorsMessagesTitles[i + 1]);
            i++;
        }
    }

    function validateAllInputs() {
        let i = 0;

        for (let property in regExps) {
            validateField(inputNodes[i], regExps[property], errorNodes[i],
                          errorsStatusesTitles[i], errorsMessagesTitles[i + 1]);
            i++;
        }
    }

    function searchForError() {
        for (let property in errorsStatuses) {
            if (errorsStatuses[property] === true) {
                return true;
            }
        }

        return false;
    }

    (function() {
        setEventsForAllInputs();

        mainForm.onsubmit = () => {
            let submitPermission = false;

            resetAllErrors();
            validateAllInputs();

            if (searchForError() === true) {
                submitPermission = false;
                alert("no");
            } else {
                submitPermission = true;
                alert("yes");
            }

            return submitPermission;
        }
    })();
});