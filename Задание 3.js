// Написать функцию, которая создает пустой объект, но без прототипа.

function NoProto() {
    var empty = {};
    console.log(empty.constructor);
    console.log(empty.getPrototypeOf);
    return empty
}

NoProto()