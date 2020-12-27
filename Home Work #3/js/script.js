// #1 Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
// Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6', 9];
let numberArr = arr.filter((i) => {
	return +i;
})
let sum = 0;
for (let key of numberArr) {
	sum += +key;
}
alert(sum);


// #2 Сгенерируйте массив из n случайных чисел с двумя знаками после запятой.
// Переберите массив и распечатайте в консоли значения его элементов, возведенные в пятую степень,
// не используя функцию Math.pow().

let arrRandom = [];
let n = Math.random() * 100;

for (let i = 0; i <= n; i++) {
	let mathRandom = Math.random() * 100;
	arrRandom[i] = (Math.floor(mathRandom * 100) / 100);
	arrRandom[i] = arrRandom[i] ** 5;
}

console.log(arrRandom);


// #3	Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
// a.Добавьте в начало массива значение ‘Backbone.js’
// b.Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// c.Добавьте в массив значение ‘CommonJS’ вторым элементом
// d.Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”

let tools = ['AngularJS', 'jQuery'];

tools.unshift(`Backbone.js`);
tools.push('ReactJS', 'Vue.js');
tools.splice(1, 0, 'CommonJS');

let index = tools.indexOf('jQuery');
let deleted = tools.splice(index, 1);
alert(`${deleted} - это здесь лишнее`);
console.log(tools);


// #4 Создайте строку с текстом ‘Как однажды Жак звонарь сломал фонарь головой’.
// Разбейте ее на массив слов, и переставьте слова в порядке ‘Как Жак звонарь однажды сломал головой фонарь’
// с помощью любых методов массива (indexOf, splice ...).
// Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

let str = 'Как однажды Жак звонарь сломал фонарь головой';
let arrStr = str.split(' ');
arrStr.splice(6, 1);
arrStr.splice(2, 2);
arrStr.splice(3, 0, 'головой');
arrStr.splice(1, 0, 'Жак', 'звонарь');
let newStr = arrStr.join(' ');
alert(`исходный - ${str} итоговый - ${newStr}`);


//  #5	Создайте ассоциативный массив person, описывающий персону,
// с произвольным количеством произвольных полей. С помощью оператора in или typeof проверьте наличие в объекте 
// свойства, прочитанного из prompt, и выведите его на экран. 
// Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt.

let person = {
	"first name": "John",
	"last name": "Miller",
	"gender": "Male"
};

let myValue = prompt("Cвойство");

if (!!(myValue in person)) {
	console.log(`${myValue}: ${myValue[person]}`);
} else {
	console.log(`Свойство ${myValue} не найдено в объекте`);
	person[myValue] = prompt(`Введите значение свойства ${myValue}`);
}

console.log(person);


// #6 Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, 
// прочитанными из prompt (например: brand, model, resolution, color...), 
// не используя вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.

let phone = {
	brand: prompt("brand"),
	model: prompt("model"),
	resolution: prompt("resolution"),
	color: prompt("color")
};
person = Object.assign(person, phone);

console.log(person);


//#7 Создайте объект dates для хранения дат. Первая дата – текущая, new Date. 
// Вторая дата – текущая дата минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. 
// Проверьте, попадает ли введенная дата в диапазон дат объекта dates.

let dayMilliseconds = 365 * 24 * 60 * 60 * 1000;

let dates = {
	nowDate: new Date(),
	pastDate: new Date(new Date() - dayMilliseconds),
};
let yourDate = new Date(prompt('yyyy-MM-dd'));

if (yourDate < dates.nowDate && yourDate > dates.pastDate) {
	alert('введенная дата попадает в диапазон дат объекта dates');
} else {
	alert('ERROR');
}


// #8 Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов, 
//полученное значение добавляйте в конец созданного массива.
// После выхода из цикла посчитайте сумму всех чисел массива и выведите в alert полученный результат.

let num = [];
let resultSum = 0;

for (let i = 0; ; i++) {
	num[i] = prompt();
	if (num[i] === null) {
		break;
	} else if (typeof num[i] == "number" || !isNaN(num[i])) {
		resultSum += +num[i];
	}
}
alert(resultSum);


// #9 Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения:

let mas = [];

for (let i = 0; i < 10; i++) {
	mas[i] = [];
	for (let j = 0; j < 10; j++) {
		mas[i][j] = `${i + 1} x ${j + 1} = ${(i + 1) * (j + 1)}`;
	}
}

console.log(mas);


// #10 Создайте структуру данных, полностью описывающую html-разметку картинки.
let img = {
	src: "https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png",
	alt: "",
	style: "border: 1px solid #ccc",
	width: "200"
};