// Написать функцию, которая создает пустой объект, но без прототипа.

function NoProto() {
    var empty = {};
    // Outputs: Function Object()
    console.log(empty.constructor);
    console.log(empty.getPrototypeOf);
    return empty
}

NoProto()