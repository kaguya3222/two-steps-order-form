export const errorsMessages = {
    commonError: "This field is required!",
    nameError: "Invalid name",
    emailError: "Invalid email",
    phoneError: "Invalid phone number",
    addressError: "Invalid address. Example: 61 Park Street",
    cityError: "Invalid city name",
    stateError: "Invalid state name. Example: Texas is TX",
    zipError: "Invalid zip"
}

export const errorsMessagesTitles = collectErrorsMessagesTitles();

function collectErrorsMessagesTitles() {
    let collector = [];

    for (let property in errorsMessages) {
        collector.push(property);
    }
    return collector;
}