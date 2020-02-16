export const errorsStatuses = {
    frequencyErrorStatus: false,
    packageErrorStatus: false
}

export const errorsStatusesTitles = collectErrorsStatusesTitles();

function collectErrorsStatusesTitles() {
    let collector = [];

    for (let property in errorsStatuses) {
        collector.push(property);
    }

    return collector;
}