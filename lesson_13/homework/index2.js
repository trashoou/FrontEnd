function getDriverLicense(sucess, failure) {
    const randomNumber = Math.random();

    if (randomNumber > 0.1) {
        sucess("успех!");
    } else {
        failure("упс, неудача :(");
    }
}

function sucess(result){
    console.log(`Успешно завершено с результатом ${result}`);
}

function failure(error) {
    console.log(`Завершено с ошибкой ${error}`);
}

getDriverLicense(sucess, failure);