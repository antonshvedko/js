//ФУНКЦИИ

//#1 Напишите функцию max, которая сравнивает два числа и возвращает большее: 

let max = (x, y) => {
    if (x > y) return x;
    else return y;
}

console.log(max(87, 223));


// #2	Напишите функцию-аналог Math.min(). Функция принимает любое количество чисел и возвращает меньшее из них:

let min = function (...value) {
    for (let i = 0; i < value.length; i++) {
        if (value[i] < value[0]) {
            value[0] = value[i];
        }
    }

    return value[0];
}

console.log(min(-4564654, 0, 798, -789, 0, 0));


// #3 Изучите перебирающие методы массивов: forEach, filter, map. Создайте массив объектов users (~10 объектов), 
// каждый объект имеет поля firstname, lastname, age с разными значениями. Используя встроенные функции массивов:	
// a. Отфильтруйте пользователей младше 18 лет
// b. Добавьте каждому объекту поле fullName, которое является конкатенацией имени и фамилии
// c. Сформируйте новый массив, который содержит только полное имя пользователей

let arr = [
    { firstName: "John", lastName: "Frusciante", age: 23 },
    { firstName: "Kate", lastName: "Morris", age: 33 },
    { firstName: "Bob", lastName: "Smith", age: 14 },
    { firstName: "Jack", lastName: "Miller", age: 15 },
    { firstName: "Ann", lastName: "Kovalenko", age: 43 },
    { firstName: "Jane", lastName: "Robinson", age: 19 },
    { firstName: "Don", lastName: "MacDonald", age: 27 },
    { firstName: "Tom", lastName: "Irons", age: 17 },
    { firstName: "Stive", lastName: "Jobs", age: 35 },
    { firstName: "Alice", lastName: "Dou", age: 31 }
];

// a.
let filterArr = arr.filter((item) => item.age < 18);

console.log(filterArr);

// b.
let mapArr = arr.map((item, i) => {
    return {
        ...item,
        fullName: `${item.firstName} ${item.lastName}`
    }
});

console.log(mapArr);

//c.
let forEachArr = [];

mapArr.forEach((item) => {
    forEachArr.push(item.fullName)
});

console.log(forEachArr);


// #4 Напишите функцию аналог метода массива shift. Функция удаляет из переданного в параметре массива первый элемент.

let shift = function (arr) {
    delete arr[0];

    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    
    arr.length = arr.length - 1;

    return arr;
}

let myArr = [false, true, 5, -789, 'Zzzz'];

shift(myArr)
console.log(myArr);


// #5 Напишите функцию аналог метода массива push. Функция добавляет в конец переданного 
// в параметре массив произвольное количество элементов.

let push = function (x, ...myArr) {
	for (let i = 0; i < myArr.length; i++) {
		x[x.length] = myArr[i];
    }
    
	return x;
};

let arrStr = ['la', 'femme'];

push(arrStr, 'Ou va le monde');
console.log(arrStr);


// #6 Напишите функцию аналог метода Object.assign(). Первый параметр функции - целевой объект,
//  поля которого будут изменены или расширены. Остальные параметры - объекты-источники, 
// полями которых будет расширяться целевой объект.

let source = {
    firstname: 'Tom', 
    age: 10, 
    tel: '+38098493090'
    }

let extend = function (target, ...myObjects)  {
	for (let object in myObjects) {
		for (let keys in myObjects[object]) {
			target[keys] = myObjects[object][keys];
		}
	}

    return target;
}

let extendedObj = extend(source, {firstname: 'John', number: 8765}, {lastname: 'Doe'}, {age: 48});
console.log(extendedObj);


// #7 Напишите функцию setComment с параметрами: date, message, author. Дата и текст сообщения - обязательные параметры, 
// если какой-то из них или оба отсутствуют, то выполнение функции должно обрываться, 
// а пользователю выдаваться предупреждение (alert) о том, 
// что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка: 
// если параметр не передан, то вместо него подставляется значение ‘Anonymous’. Функция распечатывает в консоле текст в формате: 
// 				<имя_автора>, <дата>
// 				<текст_сообщения>

let setComment = function (date, message, autor = "Anonumys") {
    if (date === undefined || message === undefined) {
        return alert("данные переданы некорректно");
    }

    console.log(`${autor}, ${date}`);
	console.log(message);
}

setComment('2016-11-02', 'You could do it better!');
setComment('2016-11-02', 'Everything is ok', 'John');



//Замыкания

// #1 Используя замыкание, напишите функцию createTimer, которая использует метод performance.now() 
// для получения текущей временной метки и служит для замера времени выполнения другого кода(код менять, видоизменять нельзя, 
// как написан так и должен остаться):

let createTimer = function () {
    let time = performance.now();
    
	return function timer() {
		return performance.now() - time;
	};
}

let timer = createTimer();
alert("!");
alert(timer());


// #2  Используя замыкания, создайте функцию createAdder(), которая принимает на вход любой примитивный параметр и возвращает функцию,
// которая добавляет к первому параметру второй. Функция работает по следующему принципу:

let createAdder = function (x) {
	return function (y) {
		return x + y;
	};
}

let hello = createAdder("Hello, ");
alert(hello('John'));
alert(hello('Harry'));

let plus = createAdder(5);
alert(plus(1));
alert(plus(5));