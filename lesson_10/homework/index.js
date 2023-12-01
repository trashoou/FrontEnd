const getElementByIndex = (arr, index) => arr[index];
const res = getElementByIndex([1, 2, 3], 1);
console.log(res);

const getWeatherDescription = function (code, decode) {
    return decode(code);
}

const decode = function (code) {
    switch (code) {
        case "SQ": return 'Шквал';
        case "PO": return 'Пыльный вихрь';
        case "BR": return 'Дымка';
        case "HZ": return 'Мгла';
        case "FU": return `Дым`;
        case "SS": return `Песчаная буря`
        case "DS": return `Пылевая буря`
        default: return 'unknown';
    }
}

const res1 = getWeatherDescription('SQ', decode);
console.log(res1);
