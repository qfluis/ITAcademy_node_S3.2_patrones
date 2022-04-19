class Calculadora {
    constructor () {}
    suma({num1, num2}) {
        return num1 + num2;
    }
    resta({num1, num2}) {
        return num1 - num2;
    }
    multiplica({num1, num2}) {
        return num1 * num2;
    }
}

module.exports = Calculadora;