interface Airplane {
    numberOfEngines: number;
    isJet: boolean;
    maxHeight: number;
    capacity?: number; // опциональное поле
}

// Создание переменных типа Airplane
const boeing747: Airplane = {
    numberOfEngines: 4,
    isJet: true,
    maxHeight: 35000,
    capacity: 416
};

const airbusA380: Airplane = {
    numberOfEngines: 4,
    isJet: true,
    maxHeight: 43000,
    capacity: 853
};

const cessna172: Airplane = {
    numberOfEngines: 1,
    isJet: false,
    maxHeight: 14000
};