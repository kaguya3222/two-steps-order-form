export const collectedUrlValues = getUrlValues();
export const collectedUrlNames = getUrlNames();

function getUrlValues() {
    const urlParams = new URLSearchParams(window.location.search);
    let urlValuesArr = [];
    let keys = urlParams.keys();

    for (let key of keys) {
        urlValuesArr.push(urlParams.get(key));
    }

    return urlValuesArr;
}

function getUrlNames() {
    const urlParams = new URLSearchParams(window.location.search);
    let urlNamesArr = [];
    let keys = urlParams.keys();

    for (let key of keys) {
        urlNamesArr.push(key);
    }

    return urlNamesArr;
}