// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи и значения
// только собственных свойств. Данная функция не должна возвращать значение.

function original(obj) {
    for (let item in obj) {
        if (obj.hasOwnProperty(item)) {
            console.log(item, obj[item])
        }
    }
}

// const city = {
//     city: "Riga"
// }

// const obj_test = Object.create(city);
const obj_test = {}

obj_test.name = "Egor"

original(obj_test)