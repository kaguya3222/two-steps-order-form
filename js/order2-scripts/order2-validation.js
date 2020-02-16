import {errorsStatuses} from "./errors-statuses.js";
import {errorsStatusesTitles} from "./errors-statuses.js";

document.addEventListener("DOMContentLoaded", () => {
    const mainForm = document.getElementsByClassName("second-form")[0];

    const frequencyButtons = document.getElementsByClassName("frequency-button");
    const packageButtons = document.getElementsByClassName("package-button");

    const buttonsArr = [frequencyButtons, packageButtons];

    const allergiesInput = document.getElementsByClassName("allergies-input")[0];

    const errorNodes = document.getElementsByClassName("error-text");

    function showError(error, errorMsg) {
        error.textContent = errorMsg;
        error.style.display = "block";
    }

    function hideError(error, errorMsg) {
        error.textContent = errorMsg;
    }

    function validateRadioButtons(buttonsCollection, buttonsError, errorStatusName) {
        checkRadioButtons(buttonsCollection) ? makeValid(buttonsError, errorStatusName)
                            : makeInvalid(buttonsError, errorStatusName);
    }

    function checkRadioButtons(buttonsCollection) {
        for (let i = 0; i < buttonsCollection.length; i++) {
            if (buttonsCollection[i].checked === true) {
                return true;
            }
        }

        return false;
    }

    function makeValid(buttonsError, errorStatusName) {
        hideError(buttonsError);
        changeErrorStatus(errorStatusName, false);
    }

    function makeInvalid(buttonsError, errorStatusName) {
        showError(buttonsError, "Please, check at least one!");
        changeErrorStatus(errorStatusName, true);
    }

    function changeErrorStatus(errorStatusName, changeFlag) {
        errorsStatuses["errorStatusName"] = changeFlag;
    }

    function resetAllErrors() {
        for (let property in errorsStatuses) {
            errorsStatuses[property] = false;
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

    function validateAllRadioButtons() {
        let i = 0;

        for (let property in errorsStatusesTitles) {
            validateRadioButtons(buttonsArr[i], errorNodes[i], property);
            i++;
        }
    }

    function checkAllergiesInput() {
        if (allergiesInput.value === "") {
            allergiesInput.value = "None";
        }
    }

    (function() {
        let submitPermission = false;

        mainForm.onsubmit = () => {
            resetAllErrors();
            validateAllRadioButtons();

            if (searchForError() === true) {
                submitPermission = false;
                alert("no");
            } else {
                submitPermission = true;
                checkAllergiesInput();
                alert("yes");
            }

            return submitPermission;
        }
    })();


});