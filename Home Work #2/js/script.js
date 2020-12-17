// Условные и логические операторы
// #1
let yourNumber = +prompt('your number');

if (yourNumber > 0) {
	console.log('your number > 0');
} else if (yourNumber < 0) {
	console.log('your number < 0');
} else {
	console.log('your number = 0');
}


// #2
let myMoney = +prompt('Мои деньги'),
	yourMoney = +prompt('Деньги друга'),
	sumMoney = myMoney + yourMoney;

if (sumMoney <= 500) {
	alert('Пиво');
} else {
	alert('Летим на Майорку ');
}


// #3
let age = +prompt('Ваш возраст');

if (age >= 20 && age <= 27) {
	alert('Выдать повестку');
} else {
	alert('Повестки нет');
}


// #4
let bus = +prompt('Какая маршрутка приехала');

if (bus === 5 || bus === 225 || bus === 255) {
	alert('Еду домой');
} else {
	alert('Ожидаю');
}


// #5 
let day = prompt('День недели');

switch (day) {
	case 'Понедельник':
	case 'Вторник':
	case 'Среда':
	case 'Четверг':
	case 'Пятница':
		alert('Надо идти на работу');
		break;
	case 'Суббота':
	case 'Воскресенье':
		alert('Выходной');
		break;
	default:
		alert("Ошибка");
		break;
}


//#6
let x = +prompt('x');
let y = +prompt('y');

if (x <= 1 && y >= 3 || y < 0) {
	alert(x + y);
} else {
	alert("Неверно");
}


// #7
// let x = +prompt('x'),
// 	y = +prompt('y');

// if (x > 2 && x < 11 || y >= 6 && y < 14) {
// 	console.log(x * 2);
// } else {
// 	console.log(x + 5);
// }


// #8
let userName = prompt('Имя');

if (userName === null || userName === '') {
	console.log('Пока');
} else {
	console.log(`Привет ${userName}`);
}


//#9
let greeting = "";
let lang = prompt();

switch (lang) {
	case "ru":
		greeting = "Привет";
		break;
	case "en":
		greeting = "Hello";
		break;
	case "de":
		greeting = "Guten Tag";
		break;
	default:
		break;
}

alert(greeting);


// #10
let date = new Date(),
	month = date.getMonth();

if (month >= 8 && month <= 10) {
	console.log('autumn');
} else if (month >= 5 && month <= 7) {
	console.log('summer');
} else if (month >= 2 && month <= 4) {
	console.log('spring');
} else {
	console.log('winter');
}


// #11
// let lang = prompt('ru or en');
// let day = +prompt('0 to 6');

// if (lang === "ru" && day >= 0 || day <= 6) {
// 	switch (day) {
// 		case 0:
// 			alert('Воскресенье');
// 			break;
// 		case 1:
// 			alert('Понедельник');
// 			break;
// 		case 2:
// 			alert('Вторник');
// 			break;
// 		case 3:
// 			alert('Среда');
// 			break;
// 		case 4:
// 			alert('Четверг');
// 			break;
// 		case 5:
// 			alert('Пятница');
// 			break;
// 		case 6:
// 			alert('Суббота');
// 			break;
// 		default:
// 			break;
// 	}
// } else if (lang === "en" && day >= 0 || day <= 6) {
// 	switch (day) {
// 		case 0:
// 			alert('Sunday');
// 			break;
// 		case 1:
// 			alert('Monday');
// 			break;
// 		case 2:
// 			alert('Tuesday');
// 			break;
// 		case 3:
// 			alert('Wednesday');
// 			break;
// 		case 4:
// 			alert('Thursday');
// 			break;
// 		case 5:
// 			alert('Friday');
// 			break;
// 		case 6:
// 			alert('Saturday');
// 			break;
// 		default:
// 			break;
// 	}
// }


// // #12
// // Терный 
// let firstName = prompt();
// let age = +prompt();

// (firstName === "John" && age === 29) ? console.log(`${firstName} ${age}`) :
// 	(firstName === "Kate" && age === 15) ? console.log(`${firstName} ${age}`) : console.log('Пока');


// // Switch
// let firstName = prompt();
// let age = +prompt();

// switch (firstName, age) {
// 	case ('John') && (29):
// 		console.log(`${firstName} ${age}`);
// 		break;
// 	case ('Kate') && (15):
// 		console.log(`${firstName} ${age}`);
// 		break;
// 	default:
// 		console.log('Пока');
// 		break;
// }






// Циклы
// #1
let str = '.';

for (let i = 0; i < 5; i++) {
	str = str + '#';
	str = str + '.';
}
console.log(str);


// #2
for (let i = 1; i <= 20; i++) {
	if (i % 2 == 0) {
		console.log(i ** 2);
	}
}


//#3
// let userName = prompt('your name');

// for (let i = 0; i < 3; i++) {
// 	console.log('Нappy birthday to you');
// 	console.log('');
// 	if (i === 1) {
// 		console.log(`Нappy birthday dear ${userName}`);
// 		console.log('');
// 	}
// }


// #4 
for (let i = 0; ; i++) {
	let yourChoice = confirm()
	if (yourChoice === false) {
		console.log(i);
	} else {
		console.log('stop');
		break;
	}
}


//#5 
// let myNum = +prompt();
// let x = 0;

// for (let i = 0; i <= myNum; i++) {
// 	if (i % 2) {
// 		x += i;
// 	}
// }
// alert(x);


// #6 
for (i = 1; ; i++) {
	let mathRandom = Math.random();
	if (mathRandom > 0.9) {
		alert(`Число которое прервало ${mathRandom}; Кол-во итераций ${i}`);
		break;
	}
}


//#7
for (let p = 1; p <= 10; p++) {
	for (let q = 1; q <= 10; q++) {
		console.log(`${p} * ${q} = ${p * q}`);
	}
}


// #8
for (let i = 0, x = 0, y = 1; i <= 10; i++, x = y - x, y = y + x) {
	console.log(x);
}


// #9 
// let yourNum = +prompt();

// for (let counter = 0, sum = 0; yourNum !== 0; counter++) {
// 	sum += yourNum;
// 	yourNum = +prompt();
// }
// console.log(`Кол-во итераций ${counter}`);
// console.log(`Cумма ${sum}`);
// console.log(`Среднее арифметическое ${sum / counter}`);


// #10 
let password = "0000";
let checkPassword;

success:
while (true) {
	if ((checkPassword !== password)) {
		checkPassword = prompt('Your Password');
		if (checkPassword === null) {
			let question = confirm('Вы уверенны что хотите отменить авторизацию ?');
			if (question === true) {
				alert('Вы отменили авторизацию');
				break;
			} else {
				continue success;
			}
		}
	} else {
		alert('Вы авторизированны');
		break;
	}
}


// #11 
for (let i = 1; i <= 50; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		}
		else {
			console.log(i);
		}
}



