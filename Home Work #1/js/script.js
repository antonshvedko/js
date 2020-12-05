// #1
let a = 20,
    b = a * 3,
	c = b + a;
	
console.log(a, b, c);

// #2
let firstName = prompt('name'),
	lastName = prompt('last name');
	
console.log(`What’s up ${firstName} ${lastName}`);

// #3
let x = +prompt('x'),
	y = +prompt('y');
	
alert(x * y);
alert(x / y);
alert(x - y);
alert(x + y);

// #4
let hours = +prompt('hours'),
    days = +prompt('days a week'),
    rate = +prompt('rate'),
	salary = hours * days * 4 * rate;
	
alert(`july salary - ${salary}`);

// #5
let oddNumber = +prompt('odd number');
let t = oddNumber % 2;

if ( t === 1 ) {
    console.log('true');
} else {
    console.log('false');
}

// #6
let numOrStr = prompt('number or string');

if (isNaN(numOrStr)) {
	alert('string');
} else {
	alert('number');
}

// #7
let randomNumber = Math.random(),
    randomRound = Math.round(randomNumber * 100),
	yourNumber = +prompt('your number');
	
if (randomRound > yourNumber) {
    alert(`random ${randomRound} > your number ${yourNumber}`);
} else {
    alert(`random ${randomRound} < your number ${yourNumber}`);
}

// #8
let str = prompt('', 'Мне нравится изучать Front-end'),
	myStr = prompt('Что вам нравится изучать?', ''),
	subStr = str.substring(0, 21),
	result = `${subStr}" ${myStr}"`;

if (str.includes(myStr)) {
	alert('same');
} else {
	alert('different');
}

alert(result);