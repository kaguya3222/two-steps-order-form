export const errorsStatuses = {
    nameErrorStatus: false,
    emailErrorStatus: false,
    phoneErrorStatus: false,
    adressErrorStatus: false,
    cityErrorStatus: false,
    stateErrorStatus: false,
    zipErrorStatus: false
};

export const errorsStatusesTitles = collectErrorsStatusesTitles();

function collectErrorsStatusesTitles() {
    let collector = [];

    for (let property in errorsStatuses) {
        collector.push(property);
    }

    return collector;
}