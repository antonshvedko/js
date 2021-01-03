// 1.	Создайте объект calculator с методами:
// a.	read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
// b.	sum() возвращает сумму этих двух значений
// c.	multi() возвращает произведение этих двух значений
// d.	diff() возвращает разницу
// e.	div() возвращает частное

let calculator = {
    a: '',
    b: ''
}
// a
calculator.read = function () {
    this.a = +prompt();
    this.b = +prompt();
};
// b
calculator.sum = function () {
    return this.a + this.b;
};
// c
calculator.multi = function () {
    return this.a * this.b;
};
// d
calculator.diff = function () {
    return this.a - this.b;
}
// e
calculator.div = function () {
    return this.a / this.b;
}

calculator.read();
console.log(calculator);
alert(calculator.sum());
alert(calculator.multi());
alert(calculator.diff());
alert(calculator.div());


//2.	Создайте объект coffeeMachine со свойством message: 
// ‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start()
//  – через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.

let coffeeMachine = {
    message: 'Your coffee is ready!',
    start: function () {
        setTimeout(() => alert(this.message), 3000);
    }
}

coffeeMachine.start();


// 3.	Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения.
// Используйте концепцию chaining для создания цепочки вызовов.

let counter = {
    count: 0,
    inc: function () {
        this.count++;
        return this;
    },
    dec: function () {
        this.count--;
        return this;
    },
    getValue: function () {
        return this.count;
    }
}

let current = counter.inc().dec().inc().inc().dec().getValue();
alert(current);


//4. Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. 
// Методы объекта ничего не реализуют, а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’.
//  Для расчетов все методы используют функционал ранее созданного калькулятора.

let myObj = {
    getSum: function (x, y) {
        return `${this.a = x} + ${this.b = y} =  ${+calculator.sum.call(myObj)}`;
    },
    getDiff: function (x, y) {
        return `${this.a = x} - ${this.b = y} =  ${+calculator.diff.call(myObj)}`;
    },
    getMulti: function (x, y) {
        return `${this.a = x} * ${this.b = y} =  ${+calculator.multi.call(myObj)}`;
    },
    getDiv: function (x, y) {
        return `${this.a = x} / ${this.b = y} =  ${+calculator.div.call(myObj)}`;
    }
};

alert(myObj.getSum(7, 5));
alert(myObj.getDiff(7, 2));
alert(myObj.getMulti(2, 1));
alert(myObj.getDiv(1, 0));


// 5. 
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, '', '');
format.apply(country, ['[', ']']);
format.call(country.capital, '', '');
format.apply(country.capital, ['', '']);
format.apply(null, ['', 'undefined']);


// 6. Создайте объект user с полем name. Создайте функцию format с параметрами start и end.
// Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя.
// Реализуйте решение текущего задания используя метод bind().

let user = {
    name: 'John'
}

function format(start, end) {
    console.log(start + this.name + end);
}

let userFormat = format.bind(user);
userFormat('<<<', '>>>');


// 7. Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: 
// разделитель и строки передаются в параметрах функции. Используя карринг, создайте новую функцию hello,
// которая которая выводит приветствие тому, кто передан в ее параметре:

let concat = (firstName, lastName, sym) => {
    console.log(`${firstName} ${sym} ${lastName}`);
}

let hello = (yourName) => {
    concat.bind(null)('Hello', yourName, '');
}

hello('World');
hello('John');


// Рекурсия

// 1. Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) –
//      a) используя цикл 
//      b) используя рекурсию

// а.
let cube = function (p) {
    let c = 1;
    for (let i = 0; i < 3; i++) {
        c = p * c;
    }
    return c;
}

console.log(cube(5));


// b.
let cubeRec = function (x, n) {
    if (n == 1) {
        return x;
    } else {
        return x * cubeRec(x, n - 1);
    }
}

console.log(cubeRec(5, 3));


// 2. Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:

let getSum = function (...arr) {
    let sum = 0;
    if (arr.length == 1) return arr;
    else {
        sum = arr[arr.length - 1];
        arr.length = arr.length - 1;
        sum = sum + +getSum(...arr);
    }
    
    return sum;
}
console.log(getSum(1, 7, 5, 6, 31));